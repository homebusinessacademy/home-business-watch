import { Metadata } from 'next';
import Link from 'next/link';
import { EbookBanner } from '@/components/EbookBanner';

export const metadata: Metadata = {
  title: 'MLM Income Disclosure Database 2025 | Understanding the Data',
  description: 'The most comprehensive database of MLM income disclosure statements. Understand what the data shows, its limitations, and how to evaluate opportunities more effectively.',
  openGraph: {
    title: 'MLM Income Disclosure Database 2025 | Understanding the Data',
    description: 'The most comprehensive database of MLM income disclosure statements. Understand what the data shows, its limitations, and how to evaluate opportunities more effectively.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLM Income Disclosure Database 2025',
    description: 'Comprehensive MLM income disclosure data with context on methodology limitations.',
  },
};

// Income disclosure data - verified from official company sources
// IMPORTANT: All figures are GROSS earnings BEFORE business expenses
const incomeDisclosureData = [
  {
    company: 'Young Living',
    slug: 'young-living',
    year: 2024,
    medianEarnings: 0,
    averageEarnings: 747,
    percentZero: 72.1, // 72.1% are Associates earning median $0
    sourceUrl: 'https://www.youngliving.com/us/en/income-disclosure',
    notes: '72.1% are Associates with median earnings of $0',
  },
  {
    company: 'Arbonne',
    slug: 'arbonne-international',
    year: 2023,
    medianEarnings: 77,
    averageEarnings: 188,
    percentZero: 18, // 18% of Consultants (85% of all distributors) earned $0
    sourceUrl: 'https://www.arbonne.com/us/en/earnings',
    notes: '85% of distributors are Consultants; 18% of them earned $0',
  },
  {
    company: 'Plexus Worldwide',
    slug: 'plexus-worldwide',
    year: 2024,
    medianEarnings: null, // Only average reported
    averageEarnings: 742,
    percentZero: null,
    sourceUrl: 'https://static.plexusworldwide.com/cdn/income-disclosure-statement-en-us.pdf',
    notes: 'Average for all US Brand Ambassadors (active and inactive)',
  },
  {
    company: 'Amway',
    slug: 'amway',
    year: 2024,
    medianEarnings: null,
    averageEarnings: 723,
    percentZero: 32, // 32% had no sales/sponsoring and no payments
    sourceUrl: 'https://www.amway.com/en_US/income-disclosure',
    notes: '32% of IBOs had no sales and received no payments. Average for Founders Platinum and below.',
  },
  {
    company: 'MONAT Global',
    slug: 'monat-global',
    year: 2024,
    medianEarnings: null,
    averageEarnings: 758,
    percentZero: 41, // 41% were inactive
    sourceUrl: 'https://monatglobal.com/income-disclosure-statement/',
    notes: '41% of Market Partners were inactive and earned no commissions',
  },
  {
    company: 'Isagenix',
    slug: 'isagenix',
    year: 2024,
    medianEarnings: null,
    averageEarnings: 987,
    percentZero: null,
    sourceUrl: 'https://www.isagenix.com/en-us/disclaimers',
    notes: 'Average for all US Associates (active and inactive) before expenses',
  },
  {
    company: 'LuLaRoe',
    slug: 'lularoe',
    year: 2024,
    medianEarnings: 1046,
    averageEarnings: 11915,
    percentZero: null, // 90.37% did not participate in Leadership Plan
    sourceUrl: 'https://lularoe.com/pages/income-disclosure-statement',
    notes: 'Gross profit. 90.37% did not participate in Leadership Compensation Plan.',
  },
  {
    company: 'Herbalife',
    slug: 'herbalife',
    year: 2024,
    medianEarnings: null,
    averageEarnings: null, // Complex tiered disclosure
    percentZero: 55, // ~55% did not earn in typical month
    sourceUrl: 'https://www.herbalife.com/content/dam/global-reusable-assets/documents/pd-statement-typical-distributor-earnings-en-us.pdf',
    notes: 'In typical month, ~50% of those who ordered earned money from sales',
  },
  {
    company: 'doTERRA',
    slug: 'doterra',
    year: 2023,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: 50, // 50.35% did not receive earnings
    sourceUrl: 'https://media.doterra.com/us/en/brochures/building-income-earning-statement.pdf',
    notes: '50.35% of US distributors did not receive earnings',
  },
  {
    company: 'Mary Kay',
    slug: 'mary-kay',
    year: 2022,
    medianEarnings: 0, // Typical participant earned no commissions
    averageEarnings: 208, // Canada data - US does not disclose
    percentZero: null,
    sourceUrl: 'https://www.marykay.ca/en-ca/pages/earnings-representation',
    notes: 'Canada disclosure only. US does not publish income disclosure. Typical participant earned $0.',
  },
  {
    company: 'Nu Skin',
    slug: 'nu-skin-enterprises',
    year: 2023,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: null,
    sourceUrl: 'https://www.nuskin.com/ux/dotcom/enu-US/income',
    notes: 'Full IDS available on official website',
  },
  {
    company: 'Avon',
    slug: 'avon-products',
    year: 2024,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: null,
    sourceUrl: null,
    notes: 'Avon does not publish a standard income disclosure statement',
  },
  {
    company: 'Primerica',
    slug: 'primerica',
    year: 2024,
    medianEarnings: null,
    averageEarnings: 7757, // Higher because life insurance licensed
    percentZero: null,
    sourceUrl: 'https://www.primerica.com/public/primerica_earnings_statement.html',
    notes: 'Average for life-licensed sales force. Primerica is insurance, not product-based MLM.',
  },
  {
    company: 'Melaleuca',
    slug: 'melaleuca',
    year: 2024,
    medianEarnings: 110,
    averageEarnings: 2191,
    percentZero: 82,
    sourceUrl: 'https://cdnus.melaleuca.com/PDF/BusinessCenter/enus/incomestats-en-US.pdf',
    notes: '82% are pure customers earning $0. Product Advocates avg $110-520/yr. Director 1-2 (89.8% of business builders) avg $2,191/yr. Data: 2024 Annual Income Statistics.',
  },
  {
    company: 'USANA',
    slug: 'usana-health-sciences',
    year: 2023,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: null,
    sourceUrl: 'https://www.usana.com/ux/dotcom/enu-US/income',
    notes: 'Less than 1% of full-time associates maximized a business center',
  },
  {
    company: 'Rodan + Fields',
    slug: 'rodan-fields',
    year: 2024,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: null,
    sourceUrl: 'https://www.rodanandfields.com/en-us/assets/us/income-disclosure-statement.pdf',
    notes: 'Transitioned to affiliate model Sept 2024. 30% flat commission, no MLM structure.',
  },
  {
    company: 'Forever Living',
    slug: 'forever-living-products',
    year: 2024,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: 89.8, // 89.8% earn no meaningful compensation
    sourceUrl: 'https://foreverliving.com/usa/en-us/income-disclosure',
    notes: '89.8% of purchasers do not earn meaningful compensation',
  },
  {
    company: 'Scentsy',
    slug: 'scentsy',
    year: 2022,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: null,
    sourceUrl: 'https://scentsy.com/join/compensation-and-income-disclosure',
    notes: 'Full disclosure available on official website',
  },
  {
    company: 'Pampered Chef',
    slug: 'pampered-chef',
    year: 2024,
    medianEarnings: 0, // Typical Active Consultant earns $0-$262
    averageEarnings: null,
    percentZero: 28, // 28% were not Active
    sourceUrl: 'https://www.pamperedchef.ca/iceberg/com/bac/PC-Canada-Income-Disclosure-2024.pdf',
    notes: 'Canada only. 28% not Active. Typical Active Consultant: $0-$262/year.',
  },
  {
    company: '4Life Research',
    slug: '4life-research',
    year: 2024,
    medianEarnings: null,
    averageEarnings: null,
    percentZero: 80, // Historically ~80% earned nothing
    sourceUrl: 'https://media2.4life.com/document/Income_Disclosure_2024_ENG.pdf',
    notes: 'Historical data shows ~80% earned no income',
  },
];

// Sort by median earnings (ascending) - worst to best
// Companies without median data go at the end
const sortedData = [...incomeDisclosureData].sort((a, b) => {
  if (a.medianEarnings === null && b.medianEarnings === null) return 0;
  if (a.medianEarnings === null) return 1;
  if (b.medianEarnings === null) return -1;
  return a.medianEarnings - b.medianEarnings;
});

// Calculate key statistics
const companiesWithMedian = incomeDisclosureData.filter(c => c.medianEarnings !== null);
const companiesWithZeroPercent = incomeDisclosureData.filter(c => c.percentZero !== null);

function getEarningsColor(median: number | null): string {
  if (median === null) return 'text-gray-500';
  if (median < 500) return 'text-amber-600';
  if (median < 2000) return 'text-amber-600';
  return 'text-green-600';
}

function getEarningsBgColor(median: number | null): string {
  if (median === null) return 'bg-gray-100';
  if (median < 500) return 'bg-amber-50';
  if (median < 2000) return 'bg-amber-50';
  return 'bg-green-50';
}

function formatCurrency(amount: number | null): string {
  if (amount === null) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function IncomeDisclosurePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an MLM income disclosure statement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An MLM income disclosure statement (IDS) is a document published by multi-level marketing companies that shows earnings across their distributor base. The FTC encourages these disclosures to help potential recruits understand typical results. However, IDS data includes ALL enrolled participants—including those who signed up and never worked the business—which significantly affects the averages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do income disclosure numbers look so low?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IDS numbers include everyone who ever enrolled, including people who signed up for product discounts, cancelled immediately, or never attempted to build a business. It is like averaging the fitness improvements of everyone who ever bought a gym membership—including those who never went. The number tells you about the average enrollee, not the average committed participant.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a better way to evaluate an MLM opportunity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rather than focusing solely on IDS averages, evaluate the per-customer residual income in the compensation plan. Ask: How much do I earn per active customer? How many customers do I need for my income goal? This gives you a clearer picture of what active, committed work produces.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are income disclosure statements required by law?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, the FTC encourages but does not require MLM companies to publish income disclosures. Companies that do publish them demonstrate transparency, though the methodology varies between companies and has inherent limitations.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Data Resource
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MLM Income Disclosure Database
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Official earnings data from company disclosures. Updated 2025-2026.
            </p>
            <p className="text-gray-400 text-sm">
              Data from 20 major MLM companies. Sourced from official income disclosure statements.
            </p>
          </div>
        </div>
      </section>

      {/* How to Read This Data - Methodology Callout */}
      <section className="py-8 bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-3">How to Read This Data</h2>
                <div className="prose prose-blue max-w-none text-blue-800">
                  <p className="mb-3">
                    <strong>Income disclosure statements have a methodology limitation you need to understand.</strong> These FTC-encouraged disclosures include <em>every person who ever enrolled</em>—including people who:
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li>Signed up for product discounts and never sold anything</li>
                    <li>Enrolled, changed their mind, and cancelled immediately</li>
                    <li>Joined years ago and became inactive</li>
                    <li>Never intended to build a business at all</li>
                  </ul>
                  <p className="mb-3">
                    <strong>Think of it like this:</strong> If you averaged the fitness improvements of everyone who ever bought a gym membership—including people who signed up in January and never went once—the average would look terrible. But that number tells you nothing about what a committed person who actually shows up achieves.
                  </p>
                  <p className="mb-3">
                    The IDS median/average does <strong>not</strong> represent what an active, working rep earns. It represents the average across <em>all</em> enrollees, including zero-effort participants.
                  </p>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-blue-900 mb-2">The More Useful Question</p>
                    <p className="text-blue-800">
                      Instead of asking &quot;what does the average enrollee earn?&quot; ask: <strong>&quot;What does an active, committed rep earn per customer?&quot;</strong> This tells you what your actual work produces.
                    </p>
                    <Link
                      href="/compensation-plan"
                      className="inline-flex items-center gap-2 mt-3 text-blue-700 font-medium hover:text-blue-900"
                    >
                      See per-customer residual analysis
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Data</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Income Disclosure Statements (IDS) are documents published by MLM companies showing earnings across their participant base.
                While the FTC encourages these disclosures, they are not required by law. Companies that publish them deserve credit for transparency.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="text-amber-800 font-medium mb-1">Important: These are gross earnings</p>
                <p className="text-amber-700 text-sm">
                  All figures represent gross income BEFORE business expenses. Actual take-home pay is lower after accounting for
                  product purchases, samples, marketing materials, events, shipping, and annual fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Income Data by Company</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Sorted by median annual earnings. Companies without median data appear at the end. Remember: these figures include all enrollees, not just active participants.
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold text-sm">Company</th>
                  <th className="px-4 py-3 text-center font-semibold text-sm">Year</th>
                  <th className="px-4 py-3 text-right font-semibold text-sm">Median Annual</th>
                  <th className="px-4 py-3 text-right font-semibold text-sm">Average Annual</th>
                  <th className="px-4 py-3 text-center font-semibold text-sm">% Earning $0</th>
                  <th className="px-4 py-3 text-center font-semibold text-sm">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedData.map((company, index) => (
                  <tr
                    key={company.slug}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={`/companies/${company.slug}`}
                        className="font-medium text-navy-900 hover:text-amber-600 transition-colors"
                      >
                        {company.company}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600 text-sm">{company.year}</td>
                    <td className={`px-4 py-3 text-right font-semibold ${getEarningsColor(company.medianEarnings)}`}>
                      <span className={`inline-block px-2 py-0.5 rounded ${getEarningsBgColor(company.medianEarnings)}`}>
                        {formatCurrency(company.medianEarnings)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">
                      {formatCurrency(company.averageEarnings)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {company.percentZero !== null ? (
                        <span className="font-medium text-gray-600">
                          {company.percentZero}%
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {company.sourceUrl ? (
                        <a
                          href={company.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                        >
                          View
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">Not published</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {sortedData.map((company) => (
              <div key={company.slug} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <Link
                    href={`/companies/${company.slug}`}
                    className="font-semibold text-navy-900 hover:text-amber-600"
                  >
                    {company.company}
                  </Link>
                  <span className="text-sm text-gray-500">{company.year}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500 block">Median Annual</span>
                    <span className={`font-semibold ${getEarningsColor(company.medianEarnings)}`}>
                      {formatCurrency(company.medianEarnings)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Average Annual</span>
                    <span className="font-medium text-gray-700">
                      {formatCurrency(company.averageEarnings)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">% Earning $0</span>
                    <span className="font-medium text-gray-700">
                      {company.percentZero !== null ? `${company.percentZero}%` : '—'}
                    </span>
                  </div>
                  <div>
                    {company.sourceUrl ? (
                      <a
                        href={company.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-4"
                      >
                        View Source
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm mt-4 inline-block">No public IDS</span>
                    )}
                  </div>
                </div>
                {company.notes && (
                  <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
                    {company.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Context Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Understanding the Numbers</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-600 mb-2">
                {companiesWithMedian.length}
              </div>
              <p className="text-gray-700 font-medium">
                Companies reporting median earnings
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Most companies only report averages, which are skewed by top earners
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-600 mb-2">
                {companiesWithZeroPercent.length}
              </div>
              <p className="text-gray-700 font-medium">
                Companies reporting inactive/zero-earning %
              </p>
              <p className="text-gray-500 text-sm mt-2">
                These figures include people who never attempted to build a business
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="text-lg font-bold text-blue-800 mb-2">
                Key Context
              </div>
              <p className="text-gray-700">
                IDS data measures <em>all enrollees</em>, not business builders. A more useful metric is per-customer residual income.
              </p>
              <Link
                href="/compensation-plan"
                className="inline-flex items-center gap-2 mt-3 text-blue-700 font-medium hover:text-blue-900 text-sm"
              >
                View compensation plan analysis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-600 mb-2">
                {incomeDisclosureData.filter(c => c.sourceUrl === null).length} of 20
              </div>
              <p className="text-gray-700 font-medium">
                Companies without public IDS
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Disclosure is voluntary—companies that publish deserve credit for transparency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <EbookBanner />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Methodology</h2>
            <div className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Sources</h3>
              <p className="text-gray-600 mb-4">
                All data comes from official company income disclosure statements, published on company websites or filed with regulatory bodies.
                We prioritize the most recent available data (2023-2024). Where US data is unavailable, we use Canadian disclosures as Canada
                has stricter disclosure requirements.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Understanding Median vs. Average</h3>
              <p className="text-gray-600 mb-4">
                <strong>Median</strong> is the middle value when all earners are lined up from lowest to highest. Half earn more, half earn less.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Average</strong> adds all earnings and divides by total people. This is easily skewed by top earners. If 99 people earn $0
                and 1 person earns $100,000, the average is $1,000—but the median is $0.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Gross vs. Net Earnings</h3>
              <p className="text-gray-600 mb-4">
                All figures are <strong>gross earnings before expenses</strong>. Actual take-home profit is lower after:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Product purchases and inventory</li>
                <li>Samples and demonstration products</li>
                <li>Annual enrollment/renewal fees</li>
                <li>Marketing materials and websites</li>
                <li>Event registrations and travel</li>
                <li>Shipping costs</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Important Methodology Limitations</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>All enrollees included:</strong> Data includes people who signed up for discounts, cancelled immediately, or never worked the business</li>
                <li>Not all companies publish income disclosures</li>
                <li>Disclosure formats vary widely between companies</li>
                <li>Some companies only report averages, not medians</li>
                <li>Definition of &quot;active&quot; distributor varies by company</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-blue-900 mb-2">A Better Evaluation Approach</h4>
                <p className="text-blue-800 text-sm">
                  Because IDS data has these limitations, we recommend also evaluating opportunities based on <strong>per-customer residual income</strong>—how much you earn per active customer you bring in. This tells you what your actual work produces, regardless of how many inactive enrollees exist in the company.
                </p>
                <Link
                  href="/compensation-plan"
                  className="inline-flex items-center gap-2 mt-3 text-blue-700 font-medium hover:text-blue-900 text-sm"
                >
                  See our compensation plan analysis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is an MLM income disclosure statement?
                </h3>
                <p className="text-gray-600">
                  An MLM income disclosure statement (IDS) is a document published by multi-level marketing companies that shows earnings across their distributor base. The FTC encourages these disclosures to help potential recruits understand typical results. However, IDS data includes ALL enrolled participants—including those who signed up and never worked the business—which significantly affects the averages.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why do income disclosure numbers look so low?
                </h3>
                <p className="text-gray-600">
                  IDS numbers include everyone who ever enrolled, including people who signed up for product discounts, cancelled immediately, or never attempted to build a business. It is like averaging the fitness improvements of everyone who ever bought a gym membership—including those who never went. The number tells you about the average enrollee, not the average committed participant.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is a better way to evaluate an MLM opportunity?
                </h3>
                <p className="text-gray-600">
                  Rather than focusing solely on IDS averages, evaluate the per-customer residual income in the compensation plan. Ask: How much do I earn per active customer? How many customers do I need for my income goal? This gives you a clearer picture of what active, committed work produces. See our{' '}
                  <Link href="/compensation-plan" className="text-amber-600 hover:underline">
                    compensation plan analysis
                  </Link>{' '}
                  for this data.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Are income disclosure statements required by law?
                </h3>
                <p className="text-gray-600">
                  No, the FTC encourages but does not require MLM companies to publish income disclosures. Companies that do publish them demonstrate transparency, though the methodology varies between companies and has inherent limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> Data sourced from official company income disclosure statements. All figures represent gross earnings
              before business expenses. Actual net income may be significantly lower or negative after expenses. Income disclosure statement formats
              and definitions vary between companies. IDS data includes all enrollees, not just active business builders. Always verify current data directly with each company. This page is for informational purposes
              only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want a Better Way to Evaluate Opportunities?
            </h2>
            <p className="text-gray-600 mb-6">
              IDS data has limitations. Our compensation plan analysis shows per-customer residual income—what you actually earn from the customers you bring in.
            </p>
            <Link
              href="/compensation-plan"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See Compensation Plan Analysis
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
