import { Metadata } from 'next';
import Link from 'next/link';
import { EbookBanner } from '@/components';
import { getPyramidSchemeDataSorted } from '@/lib/pyramid-scheme-data';

export const metadata: Metadata = {
  title: 'Is Your MLM a Pyramid Scheme? Honest Answers for 25+ Companies',
  description: 'We answer the pyramid scheme question honestly for Amway, Herbalife, doTERRA, Mary Kay, MONAT, and 20+ more. The legal definition, what actually matters, and the math you should evaluate instead.',
  openGraph: {
    title: 'Is Your MLM a Pyramid Scheme? Honest Answers for 25+ Companies',
    description: 'Honest answers based on the actual legal definition. Plus the better question you should be asking.',
    type: 'website',
  },
  keywords: [
    'is mlm a pyramid scheme',
    'pyramid scheme vs mlm',
    'is amway a pyramid scheme',
    'is herbalife a pyramid scheme',
    'is doterra a pyramid scheme',
    'mlm pyramid scheme definition',
    'legal mlm companies',
  ],
};

export default function PyramidSchemeIndexPage() {
  const allData = getPyramidSchemeDataSorted();

  // Separate real MLMs from actual pyramid schemes
  const legitimateMLMs = allData.filter(d => !d.isActualPyramidScheme && d.companySlug !== 'network-marketing-general');
  const generalPage = allData.find(d => d.companySlug === 'network-marketing-general');
  const actualSchemes = allData.filter(d => d.isActualPyramidScheme);

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the legal definition of a pyramid scheme?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pyramid scheme is when people invest money expecting returns where no real product or service changes hands and no work is expected. It is pure money-in, promises-out. The 1979 FTC vs Amway ruling established that MLMs with real products sold to real customers are not pyramid schemes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are MLM companies like Amway and Herbalife pyramid schemes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Companies like Amway, Herbalife, doTERRA, and other product-based MLMs are not pyramid schemes by the legal definition. They sell real products, require real work, and pay commissions based on actual sales. However, whether they are good business opportunities depends on the math of per-customer residual income.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a pyramid scheme and an MLM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pyramid scheme has no real product - it is purely recruiting people who pay money with promises of returns. An MLM has real products sold to real customers, with compensation based on those sales. The FTC determines legality based on whether retail sales to non-participants are the primary revenue source.',
        },
      },
      {
        '@type': 'Question',
        name: 'If an MLM is not a pyramid scheme, why do most participants lose money?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Being legal does not mean being profitable. Most MLM participants earn little because: (1) per-customer residual income is low ($3-15 per customer per month typically), (2) monthly purchase requirements create ongoing costs, and (3) customer retention is difficult. The math, not the legal structure, explains the outcomes.',
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Pyramid Scheme?</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Is Your MLM a Pyramid Scheme?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Honest answers for 25+ companies based on the actual legal definition - not internet hysteria.
            Plus the better question you should be asking instead.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* The Definition Box */}
          <section className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-amber-600">&#9888;</span> What IS a Pyramid Scheme?
            </h2>
            <div className="space-y-4 text-gray-800">
              <p className="text-lg">
                A pyramid scheme is when people invest money expecting returns where:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>No real product or service</strong> changes hands</li>
                <li><strong>No real work</strong> is expected or required</li>
                <li>Returns come from <strong>recruiting new investors</strong>, not from selling anything</li>
              </ul>
              <p>
                Examples: <strong>OneCoin</strong> (defrauded investors of $4-25 billion, founder still a fugitive with FBI $5M reward),
                <strong> BitConnect</strong> (SEC/CFTC shutdown as Ponzi scheme).
              </p>
              <p className="text-gray-600 italic">
                The 1979 FTC vs Amway ruling established that multi-level marketing companies with real products
                sold to real customers are NOT pyramid schemes, regardless of their compensation structure.
              </p>
            </div>
          </section>

          {/* The Quick Answer Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Answers for {legitimateMLMs.length} MLM Companies
            </h2>
            <p className="text-gray-600 mb-6">
              All of these companies sell real products, require real work, and are NOT pyramid schemes by the legal definition.
              Click any company to see the full analysis and the math that actually matters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {legitimateMLMs.map((company) => (
                <Link
                  key={company.companySlug}
                  href={`/pyramid-scheme/${company.companySlug}`}
                  className="group bg-white rounded-lg border border-gray-200 p-4 hover:border-emerald-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-navy-600 transition-colors">
                      {company.companyName}
                    </h3>
                    <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-medium rounded">
                      No
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {company.directAnswer.split('.')[0]}.
                  </p>
                  <div className="mt-3 text-sm text-navy-600 group-hover:text-navy-800 font-medium flex items-center gap-1">
                    See the math
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* General Network Marketing Page */}
          {generalPage && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The General Question
              </h2>
              <Link
                href="/pyramid-scheme/network-marketing-general"
                className="block bg-navy-50 border border-navy-200 rounded-xl p-6 hover:border-navy-400 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  Is Network Marketing a Pyramid Scheme?
                </h3>
                <p className="text-gray-700 mb-4">
                  The history of the 1979 FTC ruling, why people confuse the two, and what actually determines
                  whether an MLM is a good opportunity (spoiler: it is not the legal structure, it is the math).
                </p>
                <span className="text-navy-600 font-medium flex items-center gap-1">
                  Read the full analysis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </section>
          )}

          {/* Actual Pyramid Schemes Section */}
          {actualSchemes.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                MLMs That ARE Pyramid Schemes
              </h2>
              <p className="text-gray-600 mb-6">
                These are the exceptions - MLMs in the crypto/investment space that DO meet the pyramid scheme definition.
              </p>

              {actualSchemes.map((scheme) => (
                <Link
                  key={scheme.companySlug}
                  href={`/pyramid-scheme/${scheme.companySlug}`}
                  className="block bg-red-50 border-2 border-red-300 rounded-xl p-6 hover:border-red-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-red-900">
                      {scheme.companyName}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
                      YES - Pyramid Scheme
                    </span>
                  </div>
                  <p className="text-gray-800 mb-4">
                    {scheme.directAnswer}
                  </p>
                  <span className="text-red-700 font-medium flex items-center gap-1">
                    See the red flags
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </section>
          )}

          {/* The Better Question */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Better Question to Ask
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              &ldquo;Is it a pyramid scheme?&rdquo; is the wrong question for legitimate product-based MLMs.
              The answer for companies like Amway, doTERRA, and Mary Kay is always <strong>no</strong> - they have real products.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The better question is: <strong>&ldquo;Is it a good business opportunity for me?&rdquo;</strong>
            </p>
            <p className="text-gray-600 mb-6">
              And that comes down to the math:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Per-customer residual:</strong> How much do you earn per customer per month? ($3? $15? $25?)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Monthly requirements:</strong> What must you spend or sell each month to stay qualified?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Team size needed:</strong> How many customers for $1K, $3K, or $10K monthly income?</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>The Pareto reality:</strong> Most of that work falls on you personally (see the duplication myth)</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/compensation-plan"
                className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                Compare Per-Customer Residuals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/guides/mlm-duplication-myth"
                className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                The Duplication Myth
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/guides/mlm-compensation-flaws"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">7 Structural Flaws in MLM Compensation Plans</h3>
                <p className="text-sm text-gray-600">Why even legal MLMs have structural issues that limit most participants&apos; earnings.</p>
              </Link>
              <Link
                href="/guides/mlm-duplication-myth"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">The Duplication Myth</h3>
                <p className="text-sm text-gray-600">Why &ldquo;duplicate yourself&rdquo; math rarely works - and what the Pareto principle says about who does the work.</p>
              </Link>
              <Link
                href="/guides/residual-income-math"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">Residual Income Math</h3>
                <p className="text-sm text-gray-600">The simple calculation that reveals whether an opportunity&apos;s income claims make sense.</p>
              </Link>
              <Link
                href="/pitfalls"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">Policy Pitfalls</h3>
                <p className="text-sm text-gray-600">The contract fine print that can cost you: non-competes, termination clauses, and more.</p>
              </Link>
            </div>
          </section>

          {/* Ebook Banner */}
          <EbookBanner />

        </div>
      </div>
    </>
  );
}
