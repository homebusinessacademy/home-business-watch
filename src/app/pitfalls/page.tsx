import { Metadata } from 'next';
import Link from 'next/link';
import { EbookBanner } from '@/components';
import { getPitfallsSortedByRisk } from '@/lib/pitfalls';

export const metadata: Metadata = {
  title: 'MLM Pitfalls & Hidden Policies - What to Know Before You Join (2026)',
  description: 'Expose the hidden gotchas buried in MLM company policies. Non-compete clauses, termination risks, income clawbacks, and arbitration requirements - know before you sign.',
  openGraph: {
    title: 'MLM Pitfalls & Hidden Policies - What to Know Before You Join',
    description: 'The hidden policy gotchas MLM companies don\'t tell you about before you join.',
    type: 'website',
  },
};

function getRiskBadge(risk: 'high' | 'medium' | 'low'): { text: string; color: string; bgColor: string } {
  switch (risk) {
    case 'high':
      return { text: 'High Risk', color: 'text-red-700', bgColor: 'bg-red-100' };
    case 'medium':
      return { text: 'Medium Risk', color: 'text-amber-700', bgColor: 'bg-amber-100' };
    case 'low':
      return { text: 'Lower Risk', color: 'text-emerald-700', bgColor: 'bg-emerald-100' };
  }
}

function getRiskRowColor(risk: 'high' | 'medium' | 'low'): string {
  switch (risk) {
    case 'high':
      return 'bg-red-50 hover:bg-red-100';
    case 'medium':
      return 'bg-amber-50 hover:bg-amber-100';
    case 'low':
      return 'bg-emerald-50 hover:bg-emerald-100';
  }
}

export default function PitfallsIndexPage() {
  const pitfalls = getPitfallsSortedByRisk();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Policy Pitfalls</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            MLM Pitfalls & Hidden Policies ({new Date().getFullYear()})
          </h1>
          <p className="text-red-100 text-lg max-w-3xl">
            What they don&apos;t tell you before you sign. We analyzed the policies and procedures of 21 major MLM companies to expose the hidden gotchas buried in the fine print.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">

          {/* Why This Matters */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <span className="text-3xl">&#9888;&#65039;</span>
              <div>
                <h2 className="font-bold text-gray-900 text-lg mb-2">
                  Why Policies Matter More Than Compensation Plans
                </h2>
                <p className="text-gray-700 mb-3">
                  Most people focus on how much they can earn, but policies determine whether you can <strong>keep</strong> what you earn. Hidden clauses can:
                </p>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Take away your income overnight if you violate any rule</li>
                  <li>Prevent you from taking your team if you leave</li>
                  <li>Require arbitration instead of lawsuits if something goes wrong</li>
                  <li>Claw back commissions you&apos;ve already earned</li>
                  <li>Block you from joining competitors for months after leaving</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Level Key */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              <strong>Risk Level Key:</strong>{' '}
              <span className="inline-block px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-medium mx-1">High Risk</span>
              Significant policy concerns that could impact your income
              <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-xs font-medium mx-1 ml-3">Medium Risk</span>
              Typical MLM policies with some areas of concern
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs font-medium mx-1 ml-3">Lower Risk</span>
              Fewer restrictive policies than industry average
            </p>
          </div>

          {/* Company Table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-red-900 text-white">
                <tr>
                  <th className="px-4 py-4 text-left text-sm font-semibold">Company</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">Risk Level</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold hidden md:table-cell">Biggest Concern</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold">View Report</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pitfalls.map((company) => {
                  const badge = getRiskBadge(company.overallRisk);
                  const topPitfall = company.pitfalls.find(p => p.severity === 'high') || company.pitfalls[0];
                  return (
                    <tr key={company.companySlug} className={`${getRiskRowColor(company.overallRisk)} transition-colors`}>
                      <td className="px-4 py-4">
                        <Link
                          href={`/pitfalls/${company.companySlug}`}
                          className="font-semibold text-gray-900 hover:text-red-700 transition-colors"
                        >
                          {company.companyName}
                        </Link>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-block px-2.5 py-1 rounded text-xs font-semibold ${badge.bgColor} ${badge.color}`}>
                          {badge.text}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700 hidden md:table-cell">
                        {topPitfall.title}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Link
                          href={`/pitfalls/${company.companySlug}`}
                          className="inline-flex items-center gap-1 text-red-700 hover:text-red-900 font-medium text-sm transition-colors"
                        >
                          Full Report
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

          {/* Common Pitfalls Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-10">
            <h2 className="font-bold text-gray-900 text-xl mb-4">Common Pitfalls Across All MLMs</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Non-Compete Clauses</p>
                  <p className="text-sm text-gray-600">You can&apos;t recruit your team to competing businesses after leaving</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Downline Retention</p>
                  <p className="text-sm text-gray-600">Your organization stays with the company if you leave or are terminated</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Mandatory Arbitration</p>
                  <p className="text-sm text-gray-600">You waive your right to sue and must resolve disputes through arbitration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Monthly Purchase Requirements</p>
                  <p className="text-sm text-gray-600">You must buy products every month to qualify for any commissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">5</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Third-Party Sales Ban</p>
                  <p className="text-sm text-gray-600">You cannot sell products on Amazon, eBay, or similar marketplaces</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">6</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Social Media Restrictions</p>
                  <p className="text-sm text-gray-600">Strict rules about what you can and cannot post online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Questions to Ask */}
          <div className="bg-navy-50 border border-navy-100 rounded-lg p-6 mb-10">
            <h2 className="font-bold text-gray-900 text-xl mb-4">5 Questions to Ask Before You Join Any MLM</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <span><strong>&quot;Can I see the full Policies and Procedures document before I sign?&quot;</strong> — If they hesitate, that&apos;s a red flag.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <span><strong>&quot;What happens to my team if I leave or am terminated?&quot;</strong> — Expect &quot;they stay with the company&quot; but watch for deflection.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <span><strong>&quot;What are the monthly purchase requirements to qualify for commissions?&quot;</strong> — Calculate the annual cost before earnings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                <span><strong>&quot;Are there non-compete restrictions if I leave?&quot;</strong> — Know how long and what&apos;s restricted.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                <span><strong>&quot;Can I see your official income disclosure statement?&quot;</strong> — If there isn&apos;t one or they won&apos;t share it, walk away.</span>
              </li>
            </ol>
          </div>

          {/* Compare Link */}
          <div className="bg-gray-100 rounded-lg p-6 mb-10 text-center">
            <p className="text-gray-700 mb-4">
              Want to see the compensation plans behind these policies?
            </p>
            <Link
              href="/compensation-plan"
              className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Per-Customer Residual Chart
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Ebook Banner */}
          <EbookBanner />

        </div>
      </div>
    </>
  );
}
