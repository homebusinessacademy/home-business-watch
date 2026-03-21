import { Metadata } from 'next';
import Link from 'next/link';
import { EbookBanner } from '@/components/EbookBanner';

export const metadata: Metadata = {
  title: 'The MLM Duplication Myth: Why the Math Never Works Out | HomeBusinessWatch',
  description: 'The "get 2 who get 2" pitch sounds achievable until you apply the Pareto Principle. Learn why duplication math fails and what actually determines MLM income potential.',
  keywords: 'mlm duplication, 2 who get 2, pareto principle mlm, mlm math, network marketing duplication',
  openGraph: {
    title: 'The MLM Duplication Myth: Why the Math Never Works Out',
    description: 'The "get 2 who get 2" pitch sounds achievable until you apply the Pareto Principle. Learn why duplication math fails and what actually determines MLM income potential.',
    type: 'article',
  },
};

export default function MLMDuplicationMythPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the duplication myth in MLM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The duplication myth is the MLM pitch that if you recruit 2 people who each recruit 2 people, and so on, you will build a massive organization that generates income for you. The problem: the Pareto Principle means 80% of your team will be inactive, so YOU will end up doing most of the work anyway. When that is the reality, the per-customer residual is the only number that matters — because your income will be built primarily through your own personal effort, not your team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the 2 who get 2 system actually work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The "2 who get 2" system rarely works as pitched because it assumes everyone you recruit will perform equally. In reality, the Pareto Principle applies: roughly 20% of your recruits will generate 80% of results, while the other 80% do little or nothing. This is not unique to MLM—it applies to every sales organization in history, from Fortune 500 companies to real estate agencies.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the Pareto principle apply to MLM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pareto Principle (80/20 rule) states that roughly 20% of people produce 80% of results. In MLM, this means most of your recruits will not actively build the business. The Pareto Principle exposes a false assumption at the core of the duplication pitch: you join believing your team will help find customers, but 80% produce little or nothing. This means YOU end up doing most of the customer acquisition yourself. The duplication was never going to happen as promised — and that makes per-customer residual the only number that actually matters.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I look for in an MLM compensation plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Focus on per-customer residual income—how much you earn per active customer. At $3/customer (typical MLM), you need 1,000 customers for $3,000/month. At $128/customer (higher-paying models), you need only 24 customers. Higher per-customer residual means you do not need "duplication" at all—you can hit income goals with a small number of customers you personally serve.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The MLM Duplication Myth: Why the Math Never Works Out',
    description: 'An analytical look at why the "get 2 who get 2" MLM pitch fails when you apply the Pareto Principle, and what metric actually determines income potential.',
    author: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    datePublished: '2026-03-21',
    dateModified: new Date().toISOString().split('T')[0],
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
            <Link href="/guides" className="hover:text-navy-600">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">The MLM Duplication Myth</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              12 min read
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The MLM Duplication Myth: Why the Math Never Works Out
            </h1>
            <p className="text-xl text-gray-300">
              The &quot;get 2 who get 2&quot; pitch sounds achievable—until you apply a law that governs every sales organization in history.
            </p>
          </div>
        </div>
      </section>

      {/* Ebook Banner */}
      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <EbookBanner />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Section 1: The Pitch Everyone Hears */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Pitch Everyone Hears</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have ever attended an MLM presentation, you have heard some version of this:
                </p>
                <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 bg-amber-50 rounded-r-lg">
                  <p className="text-gray-800 italic text-lg">
                    &quot;You just need to find 2 serious people. They each find 2 serious people. Those 4 each find 2. In just 10 levels, you have over 1,000 people in your organization—all generating residual income for you.&quot;
                  </p>
                </blockquote>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The math is technically correct. 2<sup>10</sup> = 1,024. If everyone in your downline brought 2 customers each, you would have a massive organization.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The pitch is compelling because it sounds <em>achievable</em>. Finding 2 serious people feels realistic. You probably know 2 people who might be interested.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  But there is a problem. This math assumes something that has never been true in any sales organization in human history.
                </p>
              </div>
            </section>

            {/* Section 2: The Pareto Principle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Pareto Principle: The Law That Breaks the Math</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In 1896, Italian economist Vilfredo Pareto observed that 80% of Italy&apos;s land was owned by 20% of the population. Since then, this ratio has been found in almost every measurable distribution:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span className="text-gray-700">80% of sales come from 20% of salespeople</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span className="text-gray-700">80% of revenue comes from 20% of customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span className="text-gray-700">80% of results come from 20% of effort</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is not a theory. It is one of the most reliable patterns in business. It applies to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-1">Fortune 500 Sales Teams</p>
                    <p className="text-gray-600 text-sm">Top 20% of reps generate 80% of revenue</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-1">Real Estate Agencies</p>
                    <p className="text-gray-600 text-sm">Top 20% of agents close 80% of deals</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-1">Insurance Companies</p>
                    <p className="text-gray-600 text-sm">Top 20% of agents write 80% of policies</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-1">Network Marketing</p>
                    <p className="text-gray-600 text-sm">Same pattern applies—no exceptions</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>The Pareto Principle is not a pessimistic opinion about MLM.</strong> It is an observable law that applies to every sales organization. MLM is not exempt from it.
                </p>
              </div>
            </section>

            {/* Section 3: Applying Pareto to Duplication Math */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Problem: You&apos;ll Be Doing Most of the Work Anyway</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here is what the Pareto Principle actually means for you in practice:
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Because 80% of your team will produce little or nothing, you will end up doing most of the work yourself.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is not a criticism of the people you recruit — it is simply how every sales organization in history has worked. Most of your team will be passive. The active work of acquiring customers will fall primarily to you and the small percentage of your team who are genuinely motivated.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  And this is where the duplication pitch collapses. Because if you are going to do most of the heavy lifting yourself, the only question that actually matters is:
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
                  <p className="text-xl font-bold text-gray-900">
                    &quot;When I personally go out and acquire a customer, how much do I earn per month from that customer?&quot;
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The duplication pitch is designed to make you not ask this question. It directs your attention to the theoretical future team — the dream of 1,000 people in your downline all producing. But Pareto tells you that future is unlikely. <strong>Your income will be built primarily by you.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  So what does a realistic income look like when <em>you</em> are doing the work?
                </p>

                <div className="bg-gray-100 rounded-lg p-6 my-6">
                  <h3 className="font-bold text-gray-900 mb-4">The Math That Actually Matters: Your Personal Effort</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-900">Per-Customer Residual</th>
                          <th className="text-left py-2 pr-4 font-semibold text-gray-900">Customers YOU Acquire</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Monthly Income</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-2 pr-4 text-gray-700">$3/customer</td>
                          <td className="py-2 pr-4 text-gray-700">100 customers</td>
                          <td className="py-2 text-red-700 font-medium">$300/month</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 text-gray-700">$3/customer</td>
                          <td className="py-2 pr-4 text-gray-700">1,000 customers</td>
                          <td className="py-2 text-amber-700 font-medium">$3,000/month</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 text-gray-700">$128/customer</td>
                          <td className="py-2 pr-4 text-gray-700">24 customers</td>
                          <td className="py-2 text-green-700 font-medium">$3,000/month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Based on per-customer monthly residual at entry level. See <Link href="/compensation-plan" className="text-amber-600 hover:underline">compensation plan data</Link> for each company.</p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  At $3/customer, you need to personally acquire — and retain — 1,000 active customers to earn $3,000/month. That is an enormous personal sales effort. The duplication promise was supposed to make this easier, but Pareto says most of your team will not help.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At $128/customer, you need 24. That is achievable by a single motivated person. And if your team does duplicate — even partially — every customer they add is genuinely meaningful to your income. <strong>High per-customer residual makes duplication a bonus, not a requirement.</strong>
                </p>
              </div>
            </section>

            {/* Section: The Tell — Ask a 6-Figure Earner */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Tell: Ask Any 6-Figure MLM Earner How Many They Personally Recruited</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here is a simple test you can run. Find someone making real money in MLM — a top earner, someone on stage at the events, someone held up as proof the system works. Ask them one question:
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
                  <p className="text-xl font-bold text-gray-900">
                    &quot;How many people did YOU personally recruit?&quot;
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The answer is almost never 2. It is rarely 10. The honest answer from real top earners is typically <strong>100, 200, sometimes 300+ personal recruits</strong> over years of relentless work.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  They succeeded because they are exceptional salespeople who worked extremely hard and personally drove the majority of their organization&apos;s growth. Their team helped — but they built it themselves first.
                </p>
                <div className="bg-gray-100 rounded-lg p-6 my-6">
                  <p className="text-lg font-bold text-gray-900 mb-3">If you are going to personally recruit 100+ people anyway...</p>
                  <p className="text-gray-700 mb-4">Why do it for $3 per customer in monthly residual?</p>
                  <p className="text-gray-700">If that same recruiting skill and hustle was applied to a model paying $128 per customer — even with no team at all — the math changes completely. <strong>Your income is in your own hands, not dependent on whether your team duplicates.</strong></p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This is the real insight behind per-customer residual. It does not just change the math for people who build teams. It changes what your own personal effort is worth — with or without duplication.
                </p>
              </div>
            </section>

            {/* Section 4: The Per-Customer Residual Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Only Math That Actually Works</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If duplication math fails because of the Pareto Principle, what does work?
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Per-customer residual income.</strong> This is how much you earn per active customer—independent of team building.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-6">
                  <h3 className="font-bold text-emerald-800 mb-3">The Simple Math</h3>
                  <p className="text-gray-700 mb-4">
                    Monthly income = (Per-customer residual) × (Number of customers)
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <p className="text-sm text-gray-500 mb-1">At $3/customer</p>
                      <p className="text-xl font-bold text-gray-900">1,000 customers = $3,000/mo</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <p className="text-sm text-gray-500 mb-1">At $128/customer</p>
                      <p className="text-xl font-bold text-emerald-700">24 customers = $3,072/mo</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The key insight: <strong>If each customer generates meaningful residual income, you do not need duplication at all.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You do not need to recruit a team of thousands. You do not need &quot;10 levels&quot; of people below you. You do not need to defy the Pareto Principle.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You need customers who pay enough to make the math work <em>without</em> massive team building.
                </p>
              </div>
            </section>

            {/* Section 5: Why Low Per-Customer Residuals Exist */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Companies Use Low Per-Customer Residuals</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If higher per-customer residuals make the math easier, why do most MLMs pay $3-10/customer?
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Because low per-customer residuals force you to recruit.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Think about it: If you earned $128 per customer, you would focus on finding customers. You could hit your income goal with a handful of people you personally serve.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  But at $3 per customer, the only way to hit meaningful income is team building. You <em>have</em> to recruit. You <em>have</em> to get others recruiting below you. The low per-customer residual makes recruiting the only viable path.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
                  <p className="text-gray-800 font-medium mb-2">The duplication pitch exists to make a structural weakness sound like a feature.</p>
                  <p className="text-gray-700 text-sm">
                    &quot;Get 2 who get 2&quot; is not a benefit of the business model—it is a requirement created by low per-customer residuals. If the per-customer payout was higher, duplication would be irrelevant.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  This is why most MLM income disclosures look the way they do. The math requires thousands of people to hit modest income goals—and the Pareto Principle guarantees most people will not perform.
                </p>
              </div>
            </section>

            {/* Section 6: The Honest Evaluation Framework */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Honest Evaluation Framework</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before joining any MLM or network marketing company, ask two questions:
                </p>

                <div className="bg-navy-50 border border-navy-200 rounded-lg p-6 my-6">
                  <h3 className="font-bold text-navy-900 mb-4">Question 1: Per-Customer Residual</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>&quot;How much do I earn per active customer I bring in?&quot;</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    This is the most important number in any compensation plan. It determines how many customers you need for your income goal.
                  </p>
                </div>

                <div className="bg-navy-50 border border-navy-200 rounded-lg p-6 my-6">
                  <h3 className="font-bold text-navy-900 mb-4">Question 2: Customer Requirement</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>&quot;How many customers do I realistically need for my income goal?&quot;</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    If the answer is &quot;thousands&quot;—and you are relying on team duplication to get there—remember the Pareto Principle. 80% of those people will not perform.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  If the per-customer residual is low, you will need duplication. And duplication math—when you apply the Pareto Principle—requires recruiting thousands of people for modest income.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If the per-customer residual is high, duplication becomes irrelevant. You can hit income goals with customers you personally acquire.
                </p>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">See the Per-Customer Residual Data</h3>
              <p className="text-gray-700 mb-6">
                Our compensation plan analysis shows per-customer residual income for major MLM companies—the number that actually determines how many people you need to hit your income goal.
              </p>
              <Link
                href="/compensation-plan"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Compensation Plan Analysis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What is the duplication myth in MLM?
                  </h3>
                  <p className="text-gray-600">
                    The duplication myth is the belief that your MLM team will multiply your efforts through recruiting — get 2 who get 2 who get 2, and so on. The reality: the Pareto Principle means 80% of your team produces little or nothing. So instead of your team helping you find customers, you end up doing most of the work yourself. The pitch sold you on team leverage. The reality is largely solo effort.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Does the 2 who get 2 system actually work?
                  </h3>
                  <p className="text-gray-600">
                    The &quot;2 who get 2&quot; system rarely works as pitched because it assumes everyone you recruit will perform equally. In reality, the Pareto Principle applies: roughly 20% of your recruits will generate 80% of results, while the other 80% do little or nothing. This is not unique to MLM—it applies to every sales organization in history, from Fortune 500 companies to real estate agencies.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How does the Pareto principle apply to MLM?
                  </h3>
                  <p className="text-gray-600">
                    The Pareto Principle (80/20 rule) means 80% of your team will produce little or nothing. In an MLM context, this means you join expecting your team to share the customer acquisition work — but most of that work ends up falling on you personally. You still need the same number of customers to hit your income goal. You just end up having to find most of them yourself, not through the team duplication you were promised.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What should I look for in an MLM compensation plan?
                  </h3>
                  <p className="text-gray-600">
                    Focus on per-customer residual income—how much you earn per active customer. At $3/customer (typical MLM), you need 1,000 customers for $3,000/month. At $128/customer (higher-paying models), you need only 24 customers. Higher per-customer residual means you do not need &quot;duplication&quot; at all—you can hit income goals with a small number of customers you personally serve. See our{' '}
                    <Link href="/compensation-plan" className="text-amber-600 hover:underline">
                      compensation plan analysis
                    </Link>{' '}
                    for this data.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom EbookBanner */}
            <EbookBanner />
          </div>
        </div>
      </article>
    </>
  );
}
