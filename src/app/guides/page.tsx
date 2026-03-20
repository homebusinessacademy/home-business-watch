import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Business Guides | HomeBusinessWatch',
  description: 'In-depth guides on MLM vs affiliate marketing, residual income math, how to evaluate home businesses, and more.',
  openGraph: {
    title: 'Home Business Guides | HomeBusinessWatch',
    description: 'In-depth guides on MLM vs affiliate marketing, residual income math, how to evaluate home businesses, and more.',
  },
};

const guides = [
  {
    slug: 'mlm-vs-affiliate-marketing',
    title: 'MLM vs Affiliate Marketing: The Honest Comparison (2026)',
    description: 'Two popular home business models compared using real income data. No bias, just facts about what each path actually pays.',
    readTime: '8 min read',
  },
  {
    slug: 'best-mlm-companies-2026',
    title: 'Best MLM Companies 2026: Ranked by Real Income Data',
    description: 'Most "best MLM" lists are written by affiliates. This one uses actual income disclosure statements to show what distributors really earn.',
    readTime: '10 min read',
  },
  {
    slug: 'residual-income-math',
    title: 'The Real Math Behind Residual Income From Home',
    description: 'Everyone talks about residual income. Here\'s what it actually means, how the math works, and which models deliver it.',
    readTime: '6 min read',
  },
  {
    slug: 'how-to-evaluate-home-business',
    title: 'How to Evaluate Any Home Business Opportunity: 7-Step Checklist',
    description: 'A practical checklist to evaluate any opportunity before you join. Covers income disclosures, comp plans, regulatory history, and more.',
    readTime: '9 min read',
  },
  {
    slug: 'real-cost-mlm-team',
    title: 'The Real Cost of Building an MLM Team',
    description: 'MLM pitches focus on team income potential. This guide covers what it actually costs in money, time, and relationships.',
    readTime: '7 min read',
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Home Business Guides
            </h1>
            <p className="text-xl text-gray-300">
              In-depth, data-driven guides to help you make informed decisions about MLMs, affiliate programs, and work-from-home opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-amber-500 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {guide.readTime}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {guide.description}
                </p>
                <div className="mt-4 flex items-center text-amber-600 font-medium text-sm">
                  Read guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Looking for Our Top-Rated Program?
            </h2>
            <p className="text-gray-600 mb-6">
              After reviewing 500+ home business opportunities, Home Business Academy consistently ranks #1 for income potential, transparency, and real member results.
            </p>
            <Link
              href="/companies/home-business-academy"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See the #1 Rated Program
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
