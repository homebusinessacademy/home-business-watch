import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EbookBanner } from '@/components';
import { getPitfallsBySlug, getAllPitfallSlugs, PitfallData } from '@/lib/pitfalls';
import { getCompanyBySlug } from '@/lib/seed-data';
import { hasCompPlan } from '@/lib/compensation-plans';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPitfallSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pitfalls = getPitfallsBySlug(slug);

  if (!pitfalls) {
    return {
      title: 'Pitfalls Not Found',
    };
  }

  const topPitfall = pitfalls.pitfalls.find(p => p.severity === 'high') || pitfalls.pitfalls[0];

  return {
    title: `${pitfalls.companyName} Pitfalls: Hidden Policy Gotchas (${new Date().getFullYear()})`,
    description: `${pitfalls.companyName} policy pitfalls exposed. ${topPitfall.title}. ${pitfalls.riskReason} Know before you join.`,
    openGraph: {
      title: `${pitfalls.companyName} Pitfalls: What They Don't Tell You`,
      description: `${pitfalls.pitfalls.length} hidden policy gotchas in ${pitfalls.companyName}'s fine print.`,
      type: 'article',
    },
  };
}

function getRiskBadge(risk: 'high' | 'medium' | 'low'): { text: string; color: string; bgColor: string; borderColor: string } {
  switch (risk) {
    case 'high':
      return { text: 'High Risk', color: 'text-red-700', bgColor: 'bg-red-100', borderColor: 'border-red-300' };
    case 'medium':
      return { text: 'Medium Risk', color: 'text-amber-700', bgColor: 'bg-amber-100', borderColor: 'border-amber-300' };
    case 'low':
      return { text: 'Lower Risk', color: 'text-emerald-700', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-300' };
  }
}

function getSeverityBadge(severity: 'high' | 'medium' | 'low'): { color: string; bgColor: string } {
  switch (severity) {
    case 'high':
      return { color: 'text-red-700', bgColor: 'bg-red-100' };
    case 'medium':
      return { color: 'text-amber-700', bgColor: 'bg-amber-100' };
    case 'low':
      return { color: 'text-gray-700', bgColor: 'bg-gray-100' };
  }
}

export default async function PitfallsPage({ params }: PageProps) {
  const { slug } = await params;
  const pitfalls = getPitfallsBySlug(slug);

  if (!pitfalls) {
    notFound();
  }

  const company = getCompanyBySlug(slug);
  const hasCompPlanPage = hasCompPlan(slug);
  const riskBadge = getRiskBadge(pitfalls.overallRisk);

  // Count pitfalls by severity
  const highCount = pitfalls.pitfalls.filter(p => p.severity === 'high').length;
  const mediumCount = pitfalls.pitfalls.filter(p => p.severity === 'medium').length;
  const lowCount = pitfalls.pitfalls.filter(p => p.severity === 'low').length;

  // JSON-LD for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What are the biggest policy risks with ${pitfalls.companyName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: pitfalls.riskReason,
        },
      },
      {
        '@type': 'Question',
        name: `Can ${pitfalls.companyName} terminate you and take your downline?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, like most MLMs, your organization stays with the company if you leave or are terminated for policy violations.',
        },
      },
      {
        '@type': 'Question',
        name: `Does ${pitfalls.companyName} have a non-compete clause?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: pitfalls.pitfalls.find(p => p.category === 'Non-Compete')?.details || 'Check the full policies and procedures document for non-compete and non-solicitation provisions.',
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
            <Link href="/pitfalls" className="hover:text-navy-600">Policy Pitfalls</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{pitfalls.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-block px-3 py-1.5 rounded-lg text-sm font-bold ${riskBadge.bgColor} ${riskBadge.color}`}>
              {riskBadge.text}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {pitfalls.companyName} Pitfalls: What They Don&apos;t Tell You Before You Join
          </h1>
          <p className="text-red-100 text-lg max-w-3xl">
            {pitfalls.riskReason}
          </p>
          <p className="text-red-200 text-sm mt-4">
            Last updated: {new Date(pitfalls.lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Severity Summary */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-red-700">{highCount}</p>
              <p className="text-sm text-red-600">High Severity</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-amber-700">{mediumCount}</p>
              <p className="text-sm text-amber-600">Medium Severity</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-gray-700">{lowCount}</p>
              <p className="text-sm text-gray-600">Lower Severity</p>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">&#9888;&#65039;</span>
              <div>
                <h2 className="font-bold text-gray-900 text-lg mb-2">
                  Why This Page Exists
                </h2>
                <p className="text-gray-700">
                  MLM recruiters focus on income potential, but policies determine whether you can <strong>keep</strong> what you earn. We analyzed {pitfalls.companyName}&apos;s policies and procedures to identify the hidden gotchas that most people don&apos;t discover until it&apos;s too late.
                </p>
              </div>
            </div>
          </div>

          {/* Pitfalls List */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span>&#128270;</span> Policy Pitfalls Breakdown
            </h2>
            <div className="space-y-4">
              {pitfalls.pitfalls.map((pitfall, index) => {
                const severityBadge = getSeverityBadge(pitfall.severity);
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${severityBadge.bgColor} ${severityBadge.color}`}>
                        {pitfall.severity.toUpperCase()}
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                        {pitfall.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {pitfall.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {pitfall.details}
                    </p>
                    <p className="text-xs text-gray-500">
                      Source: {pitfall.sourceNote}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom Line */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>&#128221;</span> The Bottom Line
            </h2>
            <div className={`rounded-xl border-2 p-6 ${riskBadge.bgColor} ${riskBadge.borderColor}`}>
              <p className={`text-lg ${riskBadge.color === 'text-red-700' ? 'text-red-800' : riskBadge.color === 'text-amber-700' ? 'text-amber-800' : 'text-emerald-800'}`}>
                {pitfalls.bottomLine}
              </p>
            </div>
          </section>

          {/* Before You Join Checklist */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>&#9989;</span> Before You Join {pitfalls.companyName}: 5 Questions to Ask
            </h2>
            <div className="bg-navy-50 border border-navy-100 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                  <span><strong>&quot;Can I see the complete Policies and Procedures before signing anything?&quot;</strong> — Review the actual document, not just summaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                  <span><strong>&quot;What exactly happens to my organization if I leave or am terminated?&quot;</strong> — Get specifics, not vague reassurances.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                  <span><strong>&quot;What are the non-compete or non-solicitation restrictions after leaving?&quot;</strong> — Know how long and what&apos;s restricted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                  <span><strong>&quot;What is the exact monthly purchase or activity requirement to qualify for commissions?&quot;</strong> — Calculate the annual cost before any earnings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                  <span><strong>&quot;Can you show me the official income disclosure statement?&quot;</strong> — See what typical participants actually earn.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Source Link */}
          <p className="text-sm text-gray-500">
            Official policies: <a href={pitfalls.policyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-navy-600">{pitfalls.policyUrl}</a>
          </p>

          {/* Learn More Link */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700">
              Want to understand these issues in depth?{' '}
              <Link href="/guides/mlm-compensation-flaws" className="text-amber-600 hover:text-amber-700 font-medium">
                Read: 7 Structural Flaws in MLM Compensation Plans →
              </Link>
            </p>
          </div>

          {/* Compare Section */}
          <section className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Compare & Learn More
            </h2>
            <p className="text-gray-600 mb-4">
              See how {pitfalls.companyName} compares to alternatives
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
              {hasCompPlanPage && (
                <Link
                  href={`/compensation-plan/${slug}`}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
                >
                  View Comp Plan Breakdown
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
              {company && (
                <Link
                  href={`/companies/${slug}`}
                  className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
                >
                  Full Company Review
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </section>

          {/* Ebook Banner */}
          <EbookBanner />

        </div>
      </div>
    </>
  );
}
