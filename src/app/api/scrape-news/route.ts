import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as cheerio from 'cheerio';

// Environment variables
// IMPORTANT: Add these to Vercel environment variables:
// - SCRAPER_SECRET_KEY (default: hbw-scrape-2026)
// - CRON_SECRET (Vercel sets this automatically for cron jobs)
// - ANTHROPIC_API_KEY (for Claude API calls)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const scraperSecretKey = process.env.SCRAPER_SECRET_KEY || 'hbw-scrape-2026';
const cronSecret = process.env.CRON_SECRET || 'hbw-cron-2026';
const anthropicApiKey = process.env.ANTHROPIC_API_KEY || '';

// RSS feed URLs to scrape
const RSS_FEEDS = [
  { url: 'https://news.google.com/rss/search?q=MLM+network+marketing&hl=en-US&gl=US&ceid=US:en', name: 'Google News - MLM' },
  { url: 'https://news.google.com/rss/search?q=multi+level+marketing+FTC&hl=en-US&gl=US&ceid=US:en', name: 'Google News - FTC MLM' },
  { url: 'https://www.ftc.gov/news-events/press-releases/rss.xml', name: 'FTC Press Releases' },
];

// Top 10 companies to track
const TRACKED_COMPANIES = [
  'amway', 'herbalife', 'doterra', 'monat', 'lularoe',
  'tupperware', 'primerica', '"nu skin"', '"young living"', '"mary kay"'
];

// Add company-specific RSS feeds
TRACKED_COMPANIES.forEach(company => {
  RSS_FEEDS.push({
    url: `https://news.google.com/rss/search?q=${encodeURIComponent(company)}+MLM&hl=en-US&gl=US&ceid=US:en`,
    name: `Google News - ${company}`
  });
});

interface ArticleData {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

interface ClaudeAnalysis {
  relevant: boolean;
  summary?: string;
  company?: string | null;
  company_slug?: string | null;
  category?: string;
  impact?: string;
  category_color?: string;
}

// Parse RSS XML to extract articles
function parseRSS(xml: string, sourceName: string): ArticleData[] {
  const $ = cheerio.load(xml, { xmlMode: true });
  const articles: ArticleData[] = [];

  $('item').each((_, item) => {
    const title = $(item).find('title').text().trim();
    const link = $(item).find('link').text().trim();
    const pubDate = $(item).find('pubDate').text().trim();

    // Try to get source from Google News format
    let source = sourceName;
    const sourceEl = $(item).find('source');
    if (sourceEl.length) {
      source = sourceEl.text().trim() || sourceName;
    }

    if (title && link) {
      articles.push({ title, link, pubDate, source });
    }
  });

  return articles;
}

// Call Claude API to analyze article
async function analyzeArticle(article: ArticleData): Promise<ClaudeAnalysis> {
  const prompt = `You are analyzing a news article about MLM/home business companies for HomeBusinessWatch.com.

Title: ${article.title}
URL: ${article.link}
Published: ${article.pubDate}

Is this relevant to MLM companies, network marketing, direct sales, or home business opportunities?
If yes, provide:
- relevant: true
- summary: 2-3 sentence factual summary of what happened
- company: company name if specific company mentioned, else null
- company_slug: URL slug (lowercase, hyphens) if you know it, else null
- category: one of: Closure, Legal, Regulatory, "Comp Plan Change", "Business Model Change", "Criminal Fraud", "New Feature", "Industry News"
- impact: High, Medium, Low, or Positive
- category_color: red (Closure/Criminal), orange (Regulatory/Comp Plan), blue (Business Model/Industry), green (New Feature)

If not relevant: { relevant: false }

Respond with JSON only.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 500,
        messages: [
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      console.error('Claude API error:', response.status, await response.text());
      return { relevant: false };
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '';

    // Parse JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as ClaudeAnalysis;
    }

    return { relevant: false };
  } catch (error) {
    console.error('Error analyzing article:', error);
    return { relevant: false };
  }
}

// Delay helper for rate limiting
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main scraper logic
async function scrapeNews(): Promise<{ scraped: number; relevant: number; skipped: number }> {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Supabase not configured');
  }

  if (!anthropicApiKey) {
    throw new Error('Anthropic API key not configured');
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  let scraped = 0;
  let relevant = 0;
  let skipped = 0;

  // Fetch all RSS feeds
  const allArticles: ArticleData[] = [];

  for (const feed of RSS_FEEDS) {
    try {
      const response = await fetch(feed.url);
      if (response.ok) {
        const xml = await response.text();
        const articles = parseRSS(xml, feed.name);
        allArticles.push(...articles);
      }
    } catch (error) {
      console.error(`Error fetching feed ${feed.name}:`, error);
    }
  }

  // Deduplicate by URL
  const uniqueArticles = allArticles.filter((article, index, self) =>
    index === self.findIndex(a => a.link === article.link)
  );

  scraped = uniqueArticles.length;

  // Check which URLs already exist in database
  const existingUrls = new Set<string>();
  const { data: existingArticles } = await supabase
    .from('news_articles')
    .select('source_url');

  if (existingArticles) {
    existingArticles.forEach(a => existingUrls.add(a.source_url));
  }

  // Process articles in batches of 5 with 1s delay
  const BATCH_SIZE = 5;

  for (let i = 0; i < uniqueArticles.length; i += BATCH_SIZE) {
    const batch = uniqueArticles.slice(i, i + BATCH_SIZE);

    const batchPromises = batch.map(async (article) => {
      // Skip if already exists
      if (existingUrls.has(article.link)) {
        skipped++;
        return;
      }

      // Analyze with Claude
      const analysis = await analyzeArticle(article);

      if (analysis.relevant) {
        relevant++;

        // Insert into database
        const { error } = await supabase.from('news_articles').insert({
          title: article.title,
          summary: analysis.summary || '',
          source_url: article.link,
          source_name: article.source,
          published_at: article.pubDate ? new Date(article.pubDate).toISOString() : null,
          company_slug: analysis.company_slug || null,
          company_name: analysis.company || null,
          category: analysis.category || 'Industry News',
          category_color: analysis.category_color || 'blue',
          impact: analysis.impact || 'Medium',
          status: 'draft',
        });

        if (error) {
          console.error('Error inserting article:', error);
        }
      }
    });

    await Promise.all(batchPromises);

    // Rate limit: wait 1s between batches
    if (i + BATCH_SIZE < uniqueArticles.length) {
      await delay(1000);
    }
  }

  return { scraped, relevant, skipped };
}

// POST handler - called manually or via webhook
export async function POST(request: NextRequest) {
  try {
    // Verify secret key
    const authHeader = request.headers.get('x-scraper-key');
    if (authHeader !== scraperSecretKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await scrapeNews();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Scraper error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}

// GET handler - called by Vercel Cron
export async function GET(request: NextRequest) {
  try {
    // Verify Vercel Cron authorization
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await scrapeNews();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Scraper error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}
// Fri Mar 20 21:39:12 MDT 2026
