import { Metadata } from 'next';
import Link from 'next/link';
import { EbookBanner } from '@/components/EbookBanner';

export const metadata: Metadata = {
  title: 'MLM Income Disclosure Database 2025 | Real Earnings Data',
  description: 'The most comprehensive database of MLM income disclosure statements. Real earnings data from official company disclosures showing what distributors actually earn.',
  openGraph: {
    title: 'MLM Income Disclosure Database 2025 | Real Earnings Data',
    description: 'The most comprehensive database of MLM income disclosure statements. Real earnings data from official company disclosures showing what distributors actually earn.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLM Income Disclosure Database 2025',
    description: 'Real earnings data from official company disclosures. See what MLM distributors actually earn.',
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
const companiesUnder1000 = companiesWithMedian.filter(c => c.medianEarnings !== null && c.medianEarnings < 1000);
const companiesWithZeroMedian = companiesWithMedian.filter(c => c.medianEarnings === 0);
const companiesHighZeroPercent = incomeDisclosureData.filter(c => c.percentZero !== null && c.percentZero >= 40);

function getEarningsColor(median: number | null): string {
  if (median === null) return 'text-gray-500';
  if (median < 500) return 'text-red-600';
  if (median < 2000) return 'text-amber-600';
  return 'text-green-600';
}

function getEarningsBgColor(median: number | null): string {
  if (median === null) return 'bg-gray-100';
  if (median < 500) return 'bg-red-50';
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
          text: 'An MLM income disclosure statement (IDS) is a document published by multi-level marketing companies that shows what their distributors actually earn. These statements typically include median and average earnings, broken down by rank or level. The FTC encourages (but does not require) MLM companies to publish these disclosures to help potential recruits make informed decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does median earnings mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Median earnings represent the middle point of all earnings. If you lined up all distributors from lowest to highest earner, the median is what the person in the exact middle earned. This is often more meaningful than average earnings because averages can be skewed by a small number of top earners. For example, if 99 people earn $0 and 1 person earns $1 million, the average is $10,000 but the median is $0.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do most MLM participants earn so little?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most MLM participants earn little or nothing for several reasons: (1) The business model requires continuous recruitment to maintain income, which becomes mathematically impossible as the market saturates. (2) Many join primarily to buy products at a discount, never intending to sell. (3) Building a customer base and downline requires significant time, money, and sales skills that most people underestimate. (4) Commissions are split across multiple levels, so most of the money flows to those at the top of the structure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which MLM has the best income disclosure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Among traditional MLM companies, median earnings are extremely low across the board. Companies like Primerica (insurance-based) show higher averages because they require licensing, but even there results vary widely. The data shows that regardless of company, the vast majority of MLM participants earn less than minimum wage. For better income potential, consider one-tier affiliate programs where you earn directly on your own sales without recruitment requirements.',
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
              Real earnings data from official company disclosures. Updated 2025-2026.
            </p>
            <p className="text-gray-400 text-sm">
              Verified data from 20 major MLM companies. Sourced from official income disclosure statements.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Need to Know</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Income Disclosure Statements (IDS) are documents published by MLM companies showing what their distributors actually earn.
                While the FTC encourages these disclosures, they are not required by law. Companies that publish them deserve credit for transparency—though
                the numbers often reveal uncomfortable truths about typical earnings.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="text-amber-800 font-medium mb-1">Important: These are gross earnings</p>
                <p className="text-amber-700 text-sm">
                  All figures represent gross income BEFORE business expenses. Actual take-home pay is lower after accounting for
                  product purchases, samples, marketing materials, events, shipping, and annual fees. Some distributors operate at a net loss.
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
            Sorted by median annual earnings (lowest to highest). Companies without median data appear at the end.
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
                        <span className={`font-medium ${company.percentZero >= 50 ? 'text-red-600' : company.percentZero >= 30 ? 'text-amber-600' : 'text-gray-600'}`}>
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
                    <span className={`font-medium ${company.percentZero && company.percentZero >= 50 ? 'text-red-600' : 'text-gray-700'}`}>
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

      {/* Key Findings Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Findings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {companiesWithZeroMedian.length} of {companiesWithMedian.length}
              </div>
              <p className="text-gray-700 font-medium">
                Companies with reported median show $0 median earnings
              </p>
              <p className="text-gray-500 text-sm mt-2">
                The typical distributor earns nothing
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {companiesUnder1000.length} of {companiesWithMedian.length}
              </div>
              <p className="text-gray-700 font-medium">
                Companies with median under $1,000/year
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Less than $83/month before expenses
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {companiesHighZeroPercent.length} of 20
              </div>
              <p className="text-gray-700 font-medium">
                Companies where 40%+ earn zero
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Nearly half or more earn nothing
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-4xl font-bold text-gray-600 mb-2">
                {incomeDisclosureData.filter(c => c.sourceUrl === null).length} of 20
              </div>
              <p className="text-gray-700 font-medium">
                Companies without public IDS
              </p>
              <p className="text-gray-500 text-sm mt-2">
                No transparency on distributor earnings
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
                This is the best measure of what a &quot;typical&quot; distributor earns.
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
              <p className="text-gray-600">
                Many distributors operate at a net loss when expenses exceed commissions earned.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Limitations</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Not all companies publish income disclosures</li>
                <li>Disclosure formats vary widely between companies</li>
                <li>Some companies only report averages, not medians</li>
                <li>Definition of &quot;active&quot; distributor varies by company</li>
                <li>Data may include people who joined only for product discounts</li>
              </ul>
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
                  An MLM income disclosure statement (IDS) is a document published by multi-level marketing companies that shows what their
                  distributors actually earn. These statements typically include median and average earnings, broken down by rank or level.
                  The FTC encourages (but does not require) MLM companies to publish these disclosures to help potential recruits make informed decisions.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What does median earnings mean?
                </h3>
                <p className="text-gray-600">
                  Median earnings represent the middle point of all earnings. If you lined up all distributors from lowest to highest earner,
                  the median is what the person in the exact middle earned. This is often more meaningful than average earnings because averages
                  can be skewed by a small number of top earners. For example, if 99 people earn $0 and 1 person earns $1 million, the average
                  is $10,000 but the median is $0.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Why do most MLM participants earn so little?
                </h3>
                <p className="text-gray-600">
                  Most MLM participants earn little or nothing for several reasons: (1) The business model requires continuous recruitment to
                  maintain income, which becomes mathematically impossible as the market saturates. (2) Many join primarily to buy products at
                  a discount, never intending to sell. (3) Building a customer base and downline requires significant time, money, and sales
                  skills that most people underestimate. (4) Commissions are split across multiple levels, so most of the money flows to those
                  at the top of the structure.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Which MLM has the best income disclosure?
                </h3>
                <p className="text-gray-600">
                  Among traditional MLM companies, median earnings are extremely low across the board. Companies like Primerica (insurance-based)
                  show higher averages because they require licensing, but even there results vary widely. The data shows that regardless of
                  company, the vast majority of MLM participants earn less than minimum wage. For better income potential, consider one-tier
                  affiliate programs where you earn directly on your own sales without recruitment requirements.
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
              and definitions vary between companies. Always verify current data directly with each company. This page is for informational purposes
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
              Looking for Better Income Potential?
            </h2>
            <p className="text-gray-600 mb-6">
              After reviewing 500+ home business opportunities, Home Business Academy consistently ranks #1.
              With 80% commissions on a one-tier structure, your income depends on <em>you</em>—not a downline.
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
