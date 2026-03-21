import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EbookBanner } from '@/components';
import { getCompPlanBySlug, getAllCompPlanSlugs, CompPlanData } from '@/lib/compensation-plans';
import { getCompanyBySlug } from '@/lib/seed-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCompPlanSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const compPlan = getCompPlanBySlug(slug);

  if (!compPlan) {
    return {
      title: 'Comp Plan Not Found',
    };
  }

  const residualText = compPlan.directCustomerResidual
    ? `Earn ~$${compPlan.directCustomerResidual}/customer/month.`
    : 'Commission varies by rank.';

  return {
    title: `${compPlan.companyName} Compensation Plan Explained (${new Date().getFullYear()})`,
    description: `${compPlan.companyName} comp plan broken down simply. ${residualText} See how much you really earn per customer, team size needed for $1K-$10K/month, and key gotchas.`,
    openGraph: {
      title: `${compPlan.companyName} Compensation Plan Explained (${new Date().getFullYear()})`,
      description: `Simple breakdown of ${compPlan.companyName} earnings: ${residualText}`,
      type: 'article',
    },
  };
}

function getResidualColor(amount: number | null): string {
  if (amount === null) return 'bg-gray-100 border-gray-300 text-gray-700';
  if (amount >= 20) return 'bg-emerald-50 border-emerald-300 text-emerald-800';
  if (amount >= 5) return 'bg-amber-50 border-amber-300 text-amber-800';
  return 'bg-red-50 border-red-300 text-red-800';
}

function getResidualLabel(amount: number | null): string {
  if (amount === null) return 'Varies';
  if (amount >= 20) return 'Strong';
  if (amount >= 5) return 'Moderate';
  return 'Low';
}

export default async function CompPlanPage({ params }: PageProps) {
  const { slug } = await params;
  const compPlan = getCompPlanBySlug(slug);

  if (!compPlan) {
    notFound();
  }

  const company = getCompanyBySlug(slug);

  // JSON-LD for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much do you earn per customer with ${compPlan.companyName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: compPlan.directCustomerResidual
            ? `Direct customers typically generate approximately $${compPlan.directCustomerResidual} per month in residual commission.`
            : `Commission varies based on rank, volume, and product type. See the full breakdown for details.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the ${compPlan.companyName} monthly requirement?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: compPlan.qualificationNote,
        },
      },
      {
        '@type': 'Question',
        name: `How big does your team need to be to earn $1,000/month with ${compPlan.companyName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: compPlan.teamSizeNeeded.goal1000
            ? `Approximately ${compPlan.teamSizeNeeded.goal1000} customers needed. ${compPlan.teamSizeNeeded.assumptions}`
            : `Team size varies based on commission structure. ${compPlan.teamSizeNeeded.assumptions}`,
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
            <Link href="/compensation-plan" className="hover:text-navy-600">Comp Plans</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{compPlan.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {compPlan.companyName} Compensation Plan Explained ({new Date().getFullYear()})
          </h1>
          <p className="text-gray-300 text-lg">
            Simple breakdown: how much you actually earn per customer
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Last updated: {new Date(compPlan.lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* The Key Number Box */}
          <section className={`rounded-xl border-2 p-6 md:p-8 ${getResidualColor(compPlan.directCustomerResidual)}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💰</span>
              <span className="text-sm font-semibold uppercase tracking-wide opacity-75">
                The Key Number
              </span>
            </div>
            {compPlan.directCustomerResidual !== null ? (
              <>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  ~${compPlan.directCustomerResidual.toFixed(2)}
                </p>
                <p className="text-lg opacity-90">
                  per direct customer per month
                </p>
                <p className="text-sm mt-3 opacity-75">
                  {getResidualLabel(compPlan.directCustomerResidual)} per-customer residual
                </p>
              </>
            ) : (
              <>
                <p className="text-3xl md:text-4xl font-bold mb-2">
                  Varies by rank/volume
                </p>
                <p className="text-lg opacity-90">
                  This company uses a commission structure without fixed per-customer residual
                </p>
              </>
            )}
          </section>

          {/* Income Goal Calculator */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🎯</span> Income Goal Calculator
            </h2>
            <p className="text-gray-600 mb-6">
              How big does your team need to be to hit your income goal?
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Monthly Goal</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Team Size Needed</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-4 font-medium text-gray-900">$1,000/mo</td>
                    <td className="px-4 py-4">
                      {compPlan.teamSizeNeeded.goal1000 !== null ? (
                        <span className="font-semibold text-navy-700">
                          ~{compPlan.teamSizeNeeded.goal1000.toLocaleString()} customers
                        </span>
                      ) : (
                        <span className="text-gray-500">Varies</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {compPlan.teamSizeNeeded.goal1000 !== null
                        ? 'Based on direct customer residuals'
                        : 'Depends on sales volume and rank'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-4 font-medium text-gray-900">$3,000/mo</td>
                    <td className="px-4 py-4">
                      {compPlan.teamSizeNeeded.goal3000 !== null ? (
                        <span className="font-semibold text-navy-700">
                          ~{compPlan.teamSizeNeeded.goal3000.toLocaleString()} customers
                        </span>
                      ) : (
                        <span className="text-gray-500">Varies</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {compPlan.teamSizeNeeded.goal3000 !== null
                        ? 'Requires consistent customer retention'
                        : 'Depends on team building and rank'}
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-4 font-medium text-gray-900">$10,000/mo</td>
                    <td className="px-4 py-4">
                      {compPlan.teamSizeNeeded.goal10000 !== null ? (
                        <span className="font-semibold text-navy-700">
                          ~{compPlan.teamSizeNeeded.goal10000.toLocaleString()} customers
                        </span>
                      ) : (
                        <span className="text-gray-500">Varies / Requires team</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {compPlan.teamSizeNeeded.goal10000 !== null
                        ? 'Typically requires leadership rank'
                        : 'Requires significant team building'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">
              {compPlan.teamSizeNeeded.assumptions}
            </p>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📋</span> How It Works
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {compPlan.simpleSummary}
              </p>
            </div>
          </section>

          {/* Levels Breakdown */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📊</span> Commission Levels Breakdown
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-navy-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Level</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">$/Customer/Month</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {compPlan.levels.map((level, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-4 font-medium text-gray-900">{level.label}</td>
                      <td className="px-4 py-4">
                        {level.residualPerCustomer !== null ? (
                          <span className={`inline-block px-2 py-1 rounded text-sm font-semibold ${
                            level.residualPerCustomer >= 10
                              ? 'bg-emerald-100 text-emerald-800'
                              : level.residualPerCustomer >= 5
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-gray-100 text-gray-800'
                          }`}>
                            ${level.residualPerCustomer.toFixed(2)}
                          </span>
                        ) : (
                          <span className="text-gray-500 text-sm">Varies</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">{level.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Monthly Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📅</span> Monthly Requirements
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="font-semibold text-amber-900 text-lg mb-2">
                {compPlan.monthlyRequirement}
              </p>
              <p className="text-amber-800">
                {compPlan.qualificationNote}
              </p>
            </div>
          </section>

          {/* Key Gotchas */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>⚠️</span> Key Gotchas
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <ul className="space-y-3">
                {compPlan.keyGotchas.map((gotcha, index) => (
                  <li key={index} className="flex items-start gap-3 text-red-900">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{gotcha}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Compare Section */}
          <section className="bg-navy-50 border border-navy-100 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Compare with Alternatives
            </h2>
            <p className="text-gray-600 mb-4">
              See how {compPlan.companyName}&apos;s per-customer earnings compare to other opportunities
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/compare/${slug}-vs-home-business-academy`}
                className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                Compare vs Home Business Academy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              {company && (
                <Link
                  href={`/companies/${slug}`}
                  className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
                >
                  View Full Company Review
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </section>

          {/* Source */}
          <p className="text-sm text-gray-500">
            Source: <a href={compPlan.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-navy-600">{compPlan.sourceUrl}</a>
          </p>

          {/* Ebook Banner */}
          <EbookBanner />

        </div>
      </div>
    </>
  );
}
