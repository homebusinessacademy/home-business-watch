import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EbookBanner } from '@/components';
import {
  getPyramidSchemeBySlug,
  getAllPyramidSchemeSlugs,
  getPyramidSchemeCompPlanData,
  getPyramidSchemePitfallsData,
} from '@/lib/pyramid-scheme-data';
import { getCompanyBySlug } from '@/lib/seed-data';
import { hasCompPlan } from '@/lib/compensation-plans';
import { hasPitfalls } from '@/lib/pitfalls';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPyramidSchemeSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getPyramidSchemeBySlug(slug);

  if (!data) {
    return {
      title: 'Page Not Found',
    };
  }

  const questionForm = data.companySlug === 'network-marketing-general'
    ? 'Is Network Marketing a Pyramid Scheme?'
    : data.companySlug === 'crypto-mlm-schemes'
      ? 'MLMs That ARE Pyramid Schemes'
      : `Is ${data.companyName} a Pyramid Scheme?`;

  const answer = data.isActualPyramidScheme ? 'Yes' : 'No';

  return {
    title: `${questionForm} The Honest Answer (${new Date().getFullYear()})`,
    description: `${answer}. ${data.directAnswer.slice(0, 150)}...`,
    openGraph: {
      title: `${questionForm} The Honest Answer`,
      description: `We looked at the actual definition - not the internet hysteria - and here is what the data shows.`,
      type: 'article',
    },
    keywords: [
      `is ${data.companyName.toLowerCase()} a pyramid scheme`,
      `${data.companyName.toLowerCase()} pyramid scheme`,
      `${data.companyName.toLowerCase()} scam`,
      `is ${data.companyName.toLowerCase()} legal`,
      `${data.companyName.toLowerCase()} review`,
    ],
  };
}

export default async function PyramidSchemePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getPyramidSchemeBySlug(slug);

  if (!data) {
    notFound();
  }

  const compPlan = getPyramidSchemeCompPlanData(slug);
  const pitfalls = getPyramidSchemePitfallsData(slug);
  const company = getCompanyBySlug(slug);

  // Determine page type
  const isGeneralPage = slug === 'network-marketing-general';
  const isCryptoSchemesPage = slug === 'crypto-mlm-schemes';
  const isActualScheme = data.isActualPyramidScheme;

  const pageTitle = isGeneralPage
    ? 'Is Network Marketing a Pyramid Scheme?'
    : isCryptoSchemesPage
      ? 'MLMs That ARE Pyramid Schemes: What to Watch For'
      : `Is ${data.companyName} a Pyramid Scheme?`;

  // Build FAQ Schema
  const faqItems = [
    {
      '@type': 'Question',
      name: isGeneralPage
        ? 'Is network marketing a pyramid scheme?'
        : `Is ${data.companyName} a pyramid scheme?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: data.directAnswer,
      },
    },
  ];

  if (!isActualScheme && !isGeneralPage) {
    faqItems.push(
      {
        '@type': 'Question',
        name: `Is ${data.companyName} a scam?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${data.companyName} is not a scam in the legal sense - they sell real products and operate legally. However, whether it is a good business opportunity depends on the math: per-customer residual, monthly requirements, and realistic income expectations. Most participants earn modest amounts.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is ${data.companyName} legal?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, ${data.companyName} operates legally in the United States and other countries. The 1979 FTC vs Amway ruling established that MLMs selling real products to real customers are legal. Being legal, however, does not guarantee profitability.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much can you make with ${data.companyName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.mathSummary,
        },
      }
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${pageTitle} The Honest Answer`,
    description: data.directAnswer,
    author: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pyramid-scheme" className="hover:text-navy-600">Pyramid Scheme?</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{data.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {pageTitle}
            <br />
            <span className="text-gray-300">The Honest Answer</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            We looked at the actual definition - not the internet hysteria - and here is what the data shows.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* The Direct Answer Box */}
          <section className={`rounded-xl border-2 p-6 md:p-8 ${
            isActualScheme
              ? 'bg-red-50 border-red-400'
              : 'bg-amber-50 border-amber-400'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-4xl font-bold ${isActualScheme ? 'text-red-700' : 'text-emerald-700'}`}>
                {isActualScheme ? 'Yes.' : 'No.'}
              </span>
              {!isGeneralPage && !isCryptoSchemesPage && (
                <span className={`text-xl ${isActualScheme ? 'text-red-800' : 'text-gray-800'}`}>
                  {data.companyName} is {isActualScheme ? '' : 'not '}a pyramid scheme.
                </span>
              )}
            </div>
            <p className={`text-lg ${isActualScheme ? 'text-red-900' : 'text-gray-800'}`}>
              {data.directAnswer}
            </p>
          </section>

          {/* What IS a Pyramid Scheme */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-amber-500">&#9888;</span> What IS a Pyramid Scheme?
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                By the actual legal and common-sense definition, a pyramid scheme is when people invest money expecting returns where:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                <li><strong>No real product or service</strong> changes hands</li>
                <li><strong>No real work</strong> is expected or required</li>
                <li>Returns come purely from <strong>recruiting new investors</strong></li>
              </ul>
              <p className="text-gray-700 mb-4">
                Classic examples: <strong>OneCoin</strong> (defrauded investors of $4-25 billion, no real blockchain existed, founder Ruja Ignatova still a fugitive with FBI $5M reward). <strong>BitConnect</strong> (SEC/CFTC shutdown, promised 1% daily returns from non-existent trading bots).
              </p>
              <p className="text-gray-600 italic">
                {isActualScheme
                  ? 'The schemes on this page meet this definition - they had no real product and promised returns for no work.'
                  : `${data.companyName} does not fit this definition. They sell real products, require real work, and pay commissions based on actual sales.`
                }
              </p>
            </div>
          </section>

          {/* Why This Company Is/Isn't a Pyramid Scheme */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isActualScheme
                ? 'Why These ARE Pyramid Schemes'
                : isGeneralPage
                  ? 'Why Legal MLMs Are Not Pyramid Schemes'
                  : `Why ${data.companyName} Is Not a Pyramid Scheme`
              }
            </h2>
            {data.whyNotPyramidScheme && (
              <div className={`rounded-lg p-6 ${
                isActualScheme ? 'bg-red-50 border border-red-200' : 'bg-emerald-50 border border-emerald-200'
              }`}>
                <p className={`text-lg ${isActualScheme ? 'text-red-900' : 'text-emerald-900'}`}>
                  {data.whyNotPyramidScheme}
                </p>
              </div>
            )}
          </section>

          {/* The Better Question (for non-scheme pages) */}
          {!isActualScheme && (
            <section className="bg-navy-50 border border-navy-200 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Better Question
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Asking &ldquo;is it a pyramid scheme?&rdquo; is the wrong question. {!isGeneralPage && `${data.companyName} sells real products - it is not a pyramid scheme.`}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>The more useful question is: Is it a good business opportunity for you?</strong>
              </p>
              <p className="text-gray-600">
                And that comes down to the math.
              </p>
            </section>
          )}

          {/* The Math That Actually Matters */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>&#128200;</span>
              {isActualScheme ? 'The "Math" That Reveals the Scheme' : 'The Math That Actually Matters'}
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-800 text-lg mb-4">
                {data.mathSummary}
              </p>

              {/* Show specific comp plan data if available */}
              {compPlan && !isActualScheme && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Income Goal Calculator</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left font-semibold text-gray-900">Monthly Goal</th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-900">Customers Needed</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium">$1,000/mo</td>
                          <td className="px-4 py-3">
                            {compPlan.teamSizeNeeded.goal1000 !== null
                              ? `~${compPlan.teamSizeNeeded.goal1000.toLocaleString()} customers`
                              : 'Varies'
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">$3,000/mo</td>
                          <td className="px-4 py-3">
                            {compPlan.teamSizeNeeded.goal3000 !== null
                              ? `~${compPlan.teamSizeNeeded.goal3000.toLocaleString()} customers`
                              : 'Varies'
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">$10,000/mo</td>
                          <td className="px-4 py-3">
                            {compPlan.teamSizeNeeded.goal10000 !== null
                              ? `~${compPlan.teamSizeNeeded.goal10000.toLocaleString()} customers`
                              : 'Varies / Requires team'
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    {compPlan.teamSizeNeeded.assumptions}
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Note: Because of the Pareto principle, most of that work falls on YOU personally - not your &ldquo;team.&rdquo;{' '}
                    <Link href="/guides/mlm-duplication-myth" className="text-navy-600 hover:text-navy-800 underline">
                      See the Duplication Myth guide
                    </Link>
                  </p>
                </div>
              )}

              {hasCompPlan(slug) && !isGeneralPage && !isCryptoSchemesPage && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    href={`/compensation-plan/${slug}`}
                    className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium"
                  >
                    View Full Compensation Plan Breakdown
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Structural Considerations */}
          {data.structuralNotes.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>{isActualScheme ? '🚨' : '⚠️'}</span>
                {isActualScheme ? 'Red Flags' : 'Structural Considerations'}
              </h2>
              <div className={`rounded-lg p-6 ${
                isActualScheme ? 'bg-red-50 border border-red-200' : 'bg-amber-50 border border-amber-200'
              }`}>
                <ul className="space-y-3">
                  {data.structuralNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isActualScheme ? 'text-red-500' : 'text-amber-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className={isActualScheme ? 'text-red-900' : 'text-amber-900'}>{note}</span>
                    </li>
                  ))}
                </ul>
                {hasPitfalls(slug) && !isGeneralPage && !isCryptoSchemesPage && (
                  <div className="mt-4 pt-4 border-t border-amber-300">
                    <Link
                      href={`/pitfalls/${slug}`}
                      className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium"
                    >
                      View Full Policy Pitfalls Report
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
                {!isCryptoSchemesPage && (
                  <div className="mt-4 pt-4 border-t border-amber-300">
                    <p className="text-amber-800 text-sm">
                      Want to understand these structural issues in depth?{' '}
                      <Link href="/guides/mlm-compensation-flaws" className="underline hover:text-amber-900 font-medium">
                        Read: 7 Structural Flaws in MLM Compensation Plans
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Our Verdict */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Verdict</h2>
            <div className={`rounded-xl border-2 p-6 ${
              isActualScheme
                ? 'bg-red-50 border-red-400'
                : 'bg-emerald-50 border-emerald-400'
            }`}>
              <p className={`text-lg ${isActualScheme ? 'text-red-900' : 'text-emerald-900'}`}>
                {data.verdict}
              </p>
            </div>
          </section>

          {/* Related Links */}
          {!isActualScheme && !isGeneralPage && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company && (
                  <Link
                    href={`/companies/${slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{data.companyName} Review</h3>
                    <p className="text-sm text-gray-600">Full company review with pros, cons, and user ratings.</p>
                  </Link>
                )}
                {hasCompPlan(slug) && (
                  <Link
                    href={`/compensation-plan/${slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{data.companyName} Comp Plan</h3>
                    <p className="text-sm text-gray-600">Per-customer residual, team size needed, and key gotchas.</p>
                  </Link>
                )}
                {hasPitfalls(slug) && (
                  <Link
                    href={`/pitfalls/${slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{data.companyName} Policy Pitfalls</h3>
                    <p className="text-sm text-gray-600">Contract fine print: non-competes, termination clauses, and more.</p>
                  </Link>
                )}
                <Link
                  href="/guides/mlm-duplication-myth"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">The Duplication Myth</h3>
                  <p className="text-sm text-gray-600">Why &ldquo;duplicate yourself&rdquo; math rarely works as promised.</p>
                </Link>
                <Link
                  href="/guides/mlm-compensation-flaws"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">7 Structural Flaws</h3>
                  <p className="text-sm text-gray-600">Why even legal MLMs have issues that limit most participants.</p>
                </Link>
              </div>
            </section>
          )}

          {/* Related Links for General/Crypto pages */}
          {(isGeneralPage || isCryptoSchemesPage) && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/pyramid-scheme"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">All Pyramid Scheme Answers</h3>
                  <p className="text-sm text-gray-600">Quick answers for 25+ MLM companies.</p>
                </Link>
                <Link
                  href="/compensation-plan"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">Compare Compensation Plans</h3>
                  <p className="text-sm text-gray-600">Per-customer residual ranked for 20+ companies.</p>
                </Link>
                <Link
                  href="/guides/mlm-duplication-myth"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">The Duplication Myth</h3>
                  <p className="text-sm text-gray-600">Why &ldquo;duplicate yourself&rdquo; math rarely works.</p>
                </Link>
                <Link
                  href="/guides/mlm-compensation-flaws"
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2">7 Structural Flaws</h3>
                  <p className="text-sm text-gray-600">Why even legal MLMs have structural issues.</p>
                </Link>
              </div>
            </section>
          )}

          {/* Ebook Banner */}
          <EbookBanner />

        </div>
      </div>
    </>
  );
}
