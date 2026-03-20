import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Evaluate Any Home Business Opportunity: 7-Step Checklist | HomeBusinessWatch',
  description: 'A practical 7-step checklist to evaluate any MLM, affiliate program, or home business before you join. Covers income disclosures, costs, comp plans, and red flags.',
  keywords: 'how to evaluate home business opportunity, mlm checklist, home business red flags',
  openGraph: {
    title: 'How to Evaluate Any Home Business Opportunity: 7-Step Checklist | HomeBusinessWatch',
    description: 'A practical 7-step checklist to evaluate any MLM, affiliate program, or home business before you join.',
    type: 'article',
  },
};

export default function HowToEvaluatePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Evaluate Any Home Business Opportunity: 7-Step Checklist',
    description: 'A practical 7-step checklist to evaluate any MLM, affiliate program, or home business before you join.',
    author: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    datePublished: '2026-01-22',
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
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
            <Link href="/guides" className="hover:text-navy-600">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">How to Evaluate Home Business</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              9 min read
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to Evaluate Any Home Business Opportunity: 7-Step Checklist
            </h1>
            <p className="text-xl text-gray-300">
              Before you invest time and money in any opportunity, run it through this checklist. It could save you thousands.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Whether it&apos;s an MLM, affiliate program, franchise, or online business—every opportunity deserves scrutiny before you commit. This 7-step checklist will help you evaluate any home business objectively, using the same criteria we use at HomeBusinessWatch.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Don&apos;t skip steps. Each one reveals something different about whether the opportunity is legitimate and whether it can actually work for you.
              </p>
            </div>

            {/* Step 1 */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                <h2 className="text-2xl font-bold text-gray-900">Find and Read the Income Disclosure Statement</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is the most important step. Income Disclosure Statements (IDS) are documents companies publish showing what their participants actually earn. For MLMs, they&apos;re often legally required.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">What to look for:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Median income</strong> (not average)—averages are skewed by top earners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Percentage earning each level</strong>—what % reach $1K/month? $5K? $10K?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Active vs. all participants</strong>—some IDS only count &quot;active&quot; members (gaming the numbers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Gross vs. net</strong>—IDS shows gross earnings, not profit after expenses</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-red-800 mb-2">Red flags:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• No IDS available (major warning sign)</li>
                  <li>• IDS only shows &quot;top earners&quot; without context</li>
                  <li>• 80%+ earn less than $1,000/year</li>
                  <li>• Company claims IDS is &quot;not representative&quot;</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Real example:</strong> <Link href="/companies/young-living" className="text-amber-600 hover:underline">Young Living&apos;s</Link> income disclosure shows median annual earnings of just $4. <Link href="/companies/amway" className="text-amber-600 hover:underline">Amway&apos;s</Link> shows a median of $657/year. These are real numbers from real disclosures.
              </p>
            </section>

            {/* Step 2 */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                <h2 className="text-2xl font-bold text-gray-900">Calculate Your True Monthly Minimum Cost</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most MLMs and some affiliate programs have ongoing costs to stay &quot;active&quot; or commission-qualified. These eat into any earnings you make.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Add up all of these:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Autoship/personal purchase requirements</strong>—typically $100-200/month in MLMs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Website/back office fees</strong>—$10-50/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Required training/tools</strong>—often pushed as &quot;optional&quot; but essential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Event attendance</strong>—regional events, annual conferences (often $500-2,000/year)</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Now compare this to the income disclosure. If the median earner makes $657/year and monthly costs are $150+, that&apos;s a guaranteed loss for most participants.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Example:</strong> <Link href="/companies/doterra" className="text-amber-600 hover:underline">doTERRA</Link> requires 100 PV monthly (~$100) to earn commissions. Their IDS shows 91% of distributors earn $0. That&apos;s $1,200/year in expenses with no income for 9 out of 10 people.
              </p>
            </section>

            {/* Step 3 */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
                <h2 className="text-2xl font-bold text-gray-900">Understand the Compensation Plan Type</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Different comp plan structures have different implications for your earning potential and daily activities.
              </p>
              <div className="grid gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">Binary</h3>
                  <p className="text-gray-600 text-sm">Two legs, must balance volume. Forces constant recruitment to keep legs active. Used by: <Link href="/companies/usana" className="text-amber-600 hover:underline">USANA</Link>, many newer MLMs.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">Unilevel</h3>
                  <p className="text-gray-600 text-sm">Unlimited width on front line, limited depth for commissions. Simpler but typically lower payouts. Used by: <Link href="/companies/doterra" className="text-amber-600 hover:underline">doTERRA</Link>, <Link href="/companies/young-living" className="text-amber-600 hover:underline">Young Living</Link>.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">Stairstep Breakaway</h3>
                  <p className="text-gray-600 text-sm">Build volume, hit rank, repeat. When your people rank up, they &quot;break away&quot;—you earn less on them. Used by: <Link href="/companies/amway" className="text-amber-600 hover:underline">Amway</Link>, Herbalife.</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <h3 className="font-bold text-gray-900 mb-1">One-Tier (Affiliate)</h3>
                  <p className="text-gray-600 text-sm">You earn on your direct referrals only. Simple, transparent, no multi-level complexity. Used by: <Link href="/companies/home-business-academy" className="text-amber-600 hover:underline">Home Business Academy</Link>, most affiliate programs.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The simpler the comp plan, the easier it is to understand your actual earnings potential. Complex plans often hide unfavorable math.
              </p>
            </section>

            {/* Step 4 */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">4</div>
                <h2 className="text-2xl font-bold text-gray-900">Check Regulatory History</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Has the company had run-ins with the FTC, FDA, or state attorneys general? Past issues don&apos;t guarantee future problems, but patterns matter.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Where to check:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>FTC.gov</strong>—search for company name + &quot;FTC&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>BBB.org</strong>—check ratings and complaint history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>State AG websites</strong>—many post enforcement actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>News search</strong>—&quot;[Company name] lawsuit&quot; or &quot;settlement&quot;</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Companies like Herbalife ($200M FTC settlement in 2016) and AdvoCare (shut down MLM operations after FTC action) have significant regulatory histories. This doesn&apos;t mean you can&apos;t make money, but it&apos;s important context.
              </p>
            </section>

            {/* Step 5 */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">5</div>
                <h2 className="text-2xl font-bold text-gray-900">Test the &quot;2 Customer Rule&quot;</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                This simple test reveals whether the opportunity is product-focused or recruitment-focused:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 font-medium mb-2">Ask yourself:</p>
                <p className="text-gray-700 text-lg italic">
                  &quot;If I had just 2 customers (not recruits), would my commissions cover my monthly costs?&quot;
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                In most MLMs, the answer is no. With $150/month in autoship and commissions of $10-20 per customer order, you&apos;d need 10+ active customers just to break even—before you&apos;ve made a dime of profit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Contrast:</strong> With a high-commission subscription affiliate like <Link href="/companies/home-business-academy" className="text-amber-600 hover:underline">Home Business Academy</Link> ($128/month commission, no personal purchase requirement), 2 customers = $256/month profit immediately.
              </p>
            </section>

            {/* Step 6 */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">6</div>
                <h2 className="text-2xl font-bold text-gray-900">Check Compensation Plan Stability</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Has the company changed its comp plan recently? How often do they modify payout structures? Frequent changes are a warning sign.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-red-800 mb-2">Cautionary tale: Beachbody (2024)</h3>
                <p className="text-gray-700 text-sm">
                  In late 2024, Beachbody announced they were eliminating their MLM compensation structure entirely, transitioning to a standard affiliate model. Thousands of coaches who had built teams over years lost their recurring team income overnight. Some had been earning $5,000-10,000/month from team commissions—gone in a single announcement.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Questions to ask:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span className="text-gray-700">When was the last comp plan change?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span className="text-gray-700">How did existing distributors respond to recent changes?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span className="text-gray-700">Is the company publicly traded (more transparent) or private (less accountability)?</span>
                </li>
              </ul>
            </section>

            {/* Step 7 */}
            <section className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">7</div>
                <h2 className="text-2xl font-bold text-gray-900">Talk to Real Participants (Not Just Promoters)</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anyone recruiting you has an incentive to paint a rosy picture. You need to hear from people who aren&apos;t trying to sign you up.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Where to find honest feedback:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Reddit</strong>—r/antiMLM for critical perspectives, company-specific subreddits for both sides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>YouTube</strong>—search &quot;[company] honest review&quot; or &quot;[company] I quit&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Glassdoor</strong>—employee/contractor reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Ask for proof</strong>—if someone claims to earn $X/month, ask for a screenshot of their back office or commission statement</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Be wary of anyone who gets defensive when you ask questions or dismisses all critics as &quot;haters who just didn&apos;t work hard enough.&quot;
              </p>
            </section>

            {/* Summary */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The 7-Step Summary</h2>
              <div className="bg-navy-50 rounded-lg p-6 border border-navy-100">
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                    <span className="text-gray-700">Find and read the Income Disclosure Statement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                    <span className="text-gray-700">Calculate your true monthly minimum cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                    <span className="text-gray-700">Understand the compensation plan type</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                    <span className="text-gray-700">Check regulatory history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">5</span>
                    <span className="text-gray-700">Test the &quot;2 Customer Rule&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">6</span>
                    <span className="text-gray-700">Check compensation plan stability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">7</span>
                    <span className="text-gray-700">Talk to real participants (not just promoters)</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-amber-100 border border-amber-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Looking for a program that passes this checklist?</h3>
              <p className="text-gray-700 mb-6">
                Home Business Academy passes all 7 steps: transparent income data, no autoship requirements, simple one-tier commissions, clean regulatory history, and 80% recurring payouts. See our full review.
              </p>
              <Link
                href="/companies/home-business-academy"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                See our #1 rated program
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
