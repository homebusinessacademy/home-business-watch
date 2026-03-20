import { Metadata } from 'next';
import Link from 'next/link';
import { allCompanies } from '@/lib/seed-data';
import { companyUpdates } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'Home Business News 2026 — MLM & Affiliate Marketing Updates | HomeBusinessWatch',
  description: 'Latest news on MLM companies, affiliate marketing programs, closures, comp plan changes, and industry updates. Stay informed before you invest your time and money.',
  openGraph: {
    title: 'Home Business News 2026 | HomeBusinessWatch',
    description: 'Latest MLM and affiliate marketing news — closures, comp plan changes, regulatory actions, and industry updates.',
  },
};

// Hardcoded news items (will be replaced by Supabase scraper in Phase 2)
const newsItems = [
  {
    id: 'legendary-closed-2026',
    date: '2026-02-16',
    category: 'Closure',
    categoryColor: 'red',
    title: 'Legendary Marketer Officially Closes After 9 Years',
    summary: 'David Sharpe announced the permanent shutdown of Legendary Marketer on February 16, 2026, ending the platform\'s 9-year run. The affiliate program is no longer accepting new members and existing affiliates can no longer earn commissions. Thousands of affiliates who built businesses around the platform are now looking for alternatives.',
    companySlug: 'legendary-marketer',
    companyName: 'Legendary Marketer',
    source: 'Official announcement via social media',
    impact: 'High',
  },
  {
    id: 'olsp-relaunch-2026',
    date: '2026-03-01',
    category: 'Comp Plan Change',
    categoryColor: 'orange',
    title: 'OLSP System Removes Lifetime Membership in 2026 Relaunch',
    summary: 'Wayne Crowe relaunched OLSP System with new pricing of $199/month or $1,997/year, removing the $49 lifetime membership option that many affiliates relied on for high-ticket commissions. Community reaction has been mixed, with some affiliates calling it "an easy way to leave a company." The new structure offers 200% commissions plus 2-tier earnings.',
    companySlug: 'olsp-system',
    companyName: 'OLSP System',
    source: 'Community reports and official announcement',
    impact: 'Medium',
  },
  {
    id: 'tupperware-bankruptcy-2024',
    date: '2024-09-18',
    category: 'Bankruptcy',
    categoryColor: 'red',
    title: 'Tupperware Files Chapter 11 Bankruptcy After 76 Years',
    summary: 'Tupperware Brands filed for Chapter 11 bankruptcy protection in Delaware on September 18, 2024, citing mounting losses and declining demand. The iconic food storage brand struggled to adapt to e-commerce and modern retail as consumers shifted purchasing to Amazon and social commerce. Consultants are advised not to join at this time.',
    companySlug: 'tupperware',
    companyName: 'Tupperware',
    source: 'Reuters, CNN Business',
    impact: 'High',
  },
  {
    id: 'rodan-fields-pivot-2024',
    date: '2024-07-16',
    category: 'Business Model Change',
    categoryColor: 'blue',
    title: 'Rodan + Fields Pivots from MLM to Affiliate Model',
    summary: 'Rodan + Fields announced a major business model pivot effective September 1, 2024 — transitioning from its multi-level marketing structure to a traditional affiliate program. The $75 million funding round supported the transition. The move was driven by competition from TikTok Shop and Amazon. Former MLM consultants received increased commissions on direct sales but lost the multi-level recruiting income.',
    companySlug: 'rodan-fields',
    companyName: 'Rodan + Fields',
    source: 'Retail Dive, Global Cosmetics News',
    impact: 'High',
  },
  {
    id: 'beautycounter-terminated-2024',
    date: '2024-04-17',
    category: 'Closure',
    categoryColor: 'red',
    title: 'Beautycounter Terminates ALL MLM Distributors — April 17, 2024',
    summary: 'Clean beauty brand Beautycounter sent termination notices to all Brand Advocates (MLM distributors) on April 17, 2024, shutting down its entire MLM distribution model with essentially no advance warning. Thousands of advocates who had built businesses around Beautycounter lost their income streams overnight. The company continues selling products through direct retail channels. This is a stark reminder of the risk of building income on a platform you don\'t control.',
    companySlug: 'beautycounter',
    companyName: 'Beautycounter',
    source: 'BusinessForHome.org, Reddit r/antiMLM',
    impact: 'High',
  },
  {
    id: 'avon-bankruptcy-2024',
    date: '2024-08-12',
    category: 'Bankruptcy',
    categoryColor: 'red',
    title: 'Avon Products Inc. Files for Bankruptcy — 138-Year-Old Beauty Icon',
    summary: 'Avon Products Inc. filed for Chapter 11 bankruptcy in August 2024, driven primarily by over $225 million in talcum powder personal injury lawsuit liabilities. U.S. operations continue under LG Household & Health Care Ltd., while international operations were affected. The Avon Company (U.S.) issued a statement reassuring Representatives that U.S. business continues unaffected.',
    companySlug: 'avon-products',
    companyName: 'Avon Products',
    source: 'Davis Polk, British Beauty Council',
    impact: 'High',
  },
  {
    id: 'beachbody-pivot-2024',
    date: '2024-09-30',
    category: 'Business Model Change',
    categoryColor: 'blue',
    title: 'Beachbody (BODi) Exits MLM — Pivots to Single-Level Affiliate Model',
    summary: 'Beachbody announced on September 30, 2024 that it would convert its multi-level marketing model to a single-level affiliate program, effective November 1, 2024. The pivot came alongside a 33% workforce reduction (170 employees). Former coaches who built multi-level teams lost residual income from their downlines. Previous income disclosure revealed 57% of coaches earned $0 annually, and only 1% earned more than $10,000/year.',
    companySlug: 'beachbody-bodi',
    companyName: 'Beachbody / BODi',
    source: 'Business Wire, Investing.com',
    impact: 'High',
  },
  {
    id: 'hba-emailer-launch-2026',
    date: '2026-03-17',
    category: 'New Feature',
    categoryColor: 'green',
    title: 'Home Business Academy Launches Built-In Email Marketing Tool',
    summary: 'Home Business Academy released a fully integrated email marketing tool with pay-as-you-go pricing. Members get 300 free credits that never expire. The tool requires no domain setup, includes built-in list segmentation, bot protection, email validation, and the Email Alchemist AI writing tool for Premium members. Community reception has been overwhelmingly positive.',
    companySlug: 'home-business-academy',
    companyName: 'Home Business Academy',
    source: 'HBA Monday Night Announcement',
    impact: 'Positive',
  },
  {
    id: 'monat-bbb-2024',
    date: '2024-01-01',
    category: 'Regulatory',
    categoryColor: 'orange',
    title: 'MONAT Global Subject to BBB Monitoring Inquiry Over Income Claims',
    summary: 'MONAT Global was the subject of a BBB National Programs monitoring inquiry regarding income claim disclosures in 2024. The inquiry found that income disclosure statements were present but too small to be noticeable to viewers. Per MONAT\'s own 2024 income disclosure, the average annual income for all U.S. Market Partners was $758 — before expenses.',
    companySlug: 'monat-global',
    companyName: 'MONAT Global',
    source: 'BBB National Programs DSSRC',
    impact: 'Medium',
  },
  {
    id: 'arbonne-bbb-2024',
    date: '2024-01-01',
    category: 'Regulatory',
    categoryColor: 'orange',
    title: 'Arbonne Faces BBB Scrutiny for Income Disclosure Practices',
    summary: 'A 2024 BBB National Programs review found that Arbonne\'s 2023 earnings statement showed typical consultants earned just $265 in gross commissions. The review raised concerns about how income disclosures were presented in promotional content. Arbonne had previously filed for Chapter 11 bankruptcy in 2020 before restructuring.',
    companySlug: 'arbonne-international',
    companyName: 'Arbonne International',
    source: 'BBB National Programs DSSRC Case #191-2024',
    impact: 'Medium',
  },
];

const categoryColors: Record<string, string> = {
  red: 'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
};

const impactColors: Record<string, string> = {
  High: 'text-red-600',
  Medium: 'text-amber-600',
  Positive: 'text-emerald-600',
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Industry News & Updates
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Home Business News</h1>
          <p className="text-gray-300 text-lg">
            Company closures, compensation plan changes, regulatory actions, and industry updates.
            Stay informed before you invest your time and money.
          </p>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.categoryColor] || 'bg-gray-100 text-gray-600'}`}>
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className={`text-sm font-medium ml-auto ${impactColors[item.impact] || 'text-gray-600'}`}>
                    {item.impact === 'Positive' ? '✅' : item.impact === 'High' ? '🔴' : '🟡'} {item.impact} Impact
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{item.summary}</p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Company:</span>
                    <Link
                      href={`/companies/${item.companySlug}`}
                      className="text-sm font-medium text-navy-600 hover:text-navy-800 hover:underline"
                    >
                      {item.companyName} →
                    </Link>
                  </div>
                  <span className="text-xs text-gray-400">Source: {item.source}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 bg-navy-900 text-white rounded-xl p-8 text-center">
            <div className="text-3xl mb-3">📡</div>
            <h3 className="text-xl font-bold mb-2">Automated News Coming Soon</h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto">
              We're building automated scrapers to pull real-time updates from Reddit, YouTube,
              BBB, and company announcements. Every listing will have live news feeds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Looking for a Stable Alternative?</h3>
          <p className="text-gray-600 mb-6">
            Tired of comp plan changes and company closures? HBA has never changed its compensation plan since 2016 and has never missed a commission payment.
          </p>
          <Link
            href="/companies/home-business-academy"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            See Why HBA Rates #1 →
          </Link>
        </div>
      </section>
    </div>
  );
}
