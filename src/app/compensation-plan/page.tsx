import { Metadata } from 'next';
import Link from 'next/link';
import { EbookBanner } from '@/components';
import { getCompPlansSortedByResidual } from '@/lib/compensation-plans';

export const metadata: Metadata = {
  title: 'MLM Compensation Plan Comparison: Per-Customer Residual Chart (2026)',
  description: 'Compare per-customer residual income across 20 top MLM companies. See exactly how much you earn per customer per month with Amway, Herbalife, doTERRA, and more.',
  openGraph: {
    title: 'MLM Compensation Plan Comparison: Per-Customer Residual Chart (2026)',
    description: 'Side-by-side comparison of MLM per-customer earnings. Find out which company pays the most.',
    type: 'website',
  },
};

function getResidualBgColor(amount: number | null): string {
  if (amount === null) return 'bg-gray-50';
  if (amount >= 20) return 'bg-emerald-50';
  if (amount >= 5) return 'bg-amber-50';
  return 'bg-red-50';
}

function getResidualTextColor(amount: number | null): string {
  if (amount === null) return 'text-gray-600';
  if (amount >= 20) return 'text-emerald-700';
  if (amount >= 5) return 'text-amber-700';
  return 'text-red-700';
}

function getResidualBadge(amount: number | null): { text: string; color: string } {
  if (amount === null) return { text: 'Varies', color: 'bg-gray-200 text-gray-700' };
  if (amount >= 20) return { text: 'Strong', color: 'bg-emerald-200 text-emerald-800' };
  if (amount >= 5) return { text: 'Moderate', color: 'bg-amber-200 text-amber-800' };
  return { text: 'Low', color: 'bg-red-200 text-red-800' };
}

export default function CompPlansIndexPage() {
  const compPlans = getCompPlansSortedByResidual();

  // JSON-LD for the comparison table
  const tableSchema = {
    '@context': 'https://schema.org',
    '@type': 'Table',
    about: 'MLM Compensation Plan Per-Customer Residual Comparison',
    mainEntity: compPlans.map((cp, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: cp.companyName,
      description: `${cp.companyName} pays approximately $${cp.directCustomerResidual ?? 'varies'} per customer per month`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Compensation Plans</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            MLM Per-Customer Residual Chart ({new Date().getFullYear()})
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            How much do you actually earn per customer per month? We analyzed the compensation plans of 20 top MLM companies to find out.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">

          {/* Key Insight Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h2 className="font-bold text-gray-900 text-lg mb-2">
                  Why This Matters
                </h2>
                <p className="text-gray-700">
                  Most MLM presentations focus on top-earner income or complex rank bonuses. But the real question is simple: <strong>how much do you earn per customer who stays?</strong> This chart answers that question.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Color key: <span className="inline-block w-3 h-3 rounded bg-emerald-400 mx-1"></span> Strong ($20+)
                  <span className="inline-block w-3 h-3 rounded bg-amber-400 mx-1 ml-3"></span> Moderate ($5-20)
                  <span className="inline-block w-3 h-3 rounded bg-red-400 mx-1 ml-3"></span> Low (&lt;$5)
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-semibold">#</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">Company</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">$/Customer/Month</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold hidden md:table-cell">Monthly Requirement</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">View Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {compPlans.map((cp, index) => {
                  const badge = getResidualBadge(cp.directCustomerResidual);
                  return (
                    <tr key={cp.companySlug} className={`${getResidualBgColor(cp.directCustomerResidual)} hover:bg-opacity-75 transition-colors`}>
                      <td className="px-4 py-4 text-gray-500 font-medium">{index + 1}</td>
                      <td className="px-4 py-4">
                        <Link
                          href={`/compensation-plan/${cp.companySlug}`}
                          className="font-semibold text-gray-900 hover:text-navy-600 transition-colors"
                        >
                          {cp.companyName}
                        </Link>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-lg ${getResidualTextColor(cp.directCustomerResidual)}`}>
                            {cp.directCustomerResidual !== null
                              ? `$${cp.directCustomerResidual.toFixed(2)}`
                              : 'Varies'}
                          </span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${badge.color}`}>
                            {badge.text}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600 hidden md:table-cell">
                        {cp.monthlyRequirement}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Link
                          href={`/compensation-plan/${cp.companySlug}`}
                          className="inline-flex items-center gap-1 text-navy-600 hover:text-navy-800 font-medium text-sm transition-colors"
                        >
                          Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* HBA Comparison Box */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-xl p-6 md:p-8 text-white mb-10">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🏆</span>
              <div>
                <h2 className="font-bold text-xl mb-2">
                  For Comparison: Home Business Academy
                </h2>
                <p className="text-gray-300 mb-4">
                  HBA pays <span className="text-amber-400 font-bold">$128/month per full-suite customer</span> — 80% flat commissions on a one-tier model. No recruiting required for that income. No PV requirements. Never changed since 2016.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/companies/home-business-academy"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                  >
                    See Full HBA Review
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
            <h3 className="font-bold text-gray-900 mb-3">Important Notes</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Per-customer amounts are estimates based on typical order sizes and entry-level commission rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Higher ranks often unlock additional bonuses, but most participants never reach those ranks.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>&quot;Monthly Requirement&quot; is what you must spend/sell each month to stay qualified for any commissions.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Click &quot;Details&quot; on any company to see full breakdown, gotchas, and team size calculations.</span>
              </li>
            </ul>
          </div>

          {/* Ebook Banner */}
          <EbookBanner />

        </div>
      </div>
    </>
  );
}
