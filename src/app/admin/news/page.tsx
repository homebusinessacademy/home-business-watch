'use client';

import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase client for browser
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source_url: string;
  source_name: string;
  published_at: string | null;
  company_slug: string | null;
  company_name: string | null;
  category: string;
  category_color: string;
  impact: string;
  status: string;
  scraped_at: string;
}

const categoryColorMap: Record<string, string> = {
  red: 'bg-red-100 text-red-800',
  orange: 'bg-orange-100 text-orange-800',
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
};

const impactColorMap: Record<string, string> = {
  High: 'text-red-600 font-semibold',
  Medium: 'text-orange-600',
  Low: 'text-gray-600',
  Positive: 'text-green-600 font-semibold',
};

export default function AdminNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [scrapeResult, setScrapeResult] = useState<string | null>(null);
  const [filter, setFilter] = useState<'draft' | 'published' | 'rejected'>('draft');

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .eq('status', filter)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
    } else {
      setArticles(data || []);
    }
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleScrapeNow = async () => {
    setScraping(true);
    setScrapeResult(null);

    try {
      const response = await fetch('/api/scrape-news', {
        method: 'POST',
        headers: {
          'x-scraper-key': 'hbw-scrape-2026',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setScrapeResult(`Scraped: ${data.scraped} | Relevant: ${data.relevant} | Skipped: ${data.skipped}`);
        await fetchArticles();
      } else {
        setScrapeResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setScrapeResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    setScraping(false);
  };

  const handleApprove = async (id: string) => {
    // Optimistic update
    setArticles(prev => prev.filter(a => a.id !== id));

    const { error } = await supabase
      .from('news_articles')
      .update({ status: 'published', approved_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      console.error('Error approving article:', error);
      fetchArticles(); // Refresh on error
    }
  };

  const handleReject = async (id: string) => {
    // Optimistic update
    setArticles(prev => prev.filter(a => a.id !== id));

    const { error } = await supabase
      .from('news_articles')
      .update({ status: 'rejected' })
      .eq('id', id);

    if (error) {
      console.error('Error rejecting article:', error);
      fetchArticles(); // Refresh on error
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Unknown date';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">News Admin</h1>
          <button
            onClick={handleScrapeNow}
            disabled={scraping}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {scraping ? 'Scraping...' : 'Scrape Now'}
          </button>
        </div>

        {scrapeResult && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
            {scrapeResult}
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex space-x-2 mb-6">
          {(['draft', 'published', 'rejected'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium capitalize ${
                filter === status
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              style={filter === status ? { backgroundColor: '#1e3a5f' } : {}}
            >
              {status}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading...</div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No {filter} articles found
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          categoryColorMap[article.category_color] || categoryColorMap.blue
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className={`text-sm ${impactColorMap[article.impact] || ''}`}>
                        {article.impact} Impact
                      </span>
                      {article.company_name && (
                        <span className="text-sm text-gray-500">
                          | {article.company_name}
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-3">{article.summary}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{article.source_name}</span>
                      <span>|</span>
                      <span>{formatDate(article.published_at)}</span>
                      <span>|</span>
                      <a
                        href={article.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Source
                      </a>
                    </div>
                  </div>

                  {filter === 'draft' && (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleApprove(article.id)}
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(article.id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
