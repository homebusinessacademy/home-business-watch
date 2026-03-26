import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Rate | HomeBusinessWatch",
  description: "Our Residual Rating Algorithm explained. See exactly how we evaluate business opportunities based on per-customer income, maintenance requirements, and more.",
};

export default function HowWeRatePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">How We Rate Business Opportunities</h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Our Residual Rating measures how well a business opportunity supports building <strong>true residual income</strong> — income that continues without ongoing work requirements.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-800">
          <strong>Why residual income?</strong> It's the only metric that matters for long-term financial freedom. One-time commissions require constant work. Residual income compounds.
        </p>
      </div>

      {/* Rating Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Rating Scale</h2>
        <div className="grid gap-2">
          <div className="flex items-center gap-4 p-3 bg-green-50 rounded">
            <span className="text-2xl font-bold text-green-700 w-20">4.5 - 5.0</span>
            <span className="text-green-800 font-medium">Exceptional residual income potential</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-green-50/70 rounded">
            <span className="text-2xl font-bold text-green-600 w-20">4.0 - 4.4</span>
            <span className="text-green-700 font-medium">Strong residual income potential</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded">
            <span className="text-2xl font-bold text-yellow-700 w-20">3.0 - 3.9</span>
            <span className="text-yellow-800 font-medium">Moderate residual income potential</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-orange-50 rounded">
            <span className="text-2xl font-bold text-orange-700 w-20">2.0 - 2.9</span>
            <span className="text-orange-800 font-medium">Limited residual income potential</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-red-50 rounded">
            <span className="text-2xl font-bold text-red-600 w-20">1.0 - 1.9</span>
            <span className="text-red-700 font-medium">Poor residual income potential</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-red-100 rounded">
            <span className="text-2xl font-bold text-red-700 w-20">0.0 - 0.9</span>
            <span className="text-red-800 font-medium">High Risk / Disqualified</span>
          </div>
        </div>
      </section>

      {/* Automatic Disqualifiers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Automatic Disqualifiers</h2>
        <p className="text-gray-600 mb-4">These result in an immediate 0.0 rating:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Promised passive returns</strong> — Company promises daily, weekly, or compounding returns without clear product/service delivery</li>
          <li><strong>No real product</strong> — Company has obscure, vague, or no actual product that people use</li>
          <li><strong>Regulatory shutdown</strong> — Company has been shut down by FTC, state AGs, or equivalent regulators</li>
        </ul>
      </section>

      {/* Scoring Factors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Scoring Factors</h2>

        {/* Factor 1 */}
        <div className="mb-8 border-b pb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">1. Per-Customer Residual Income</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">40% weight</span>
          </div>
          <p className="text-gray-600 mb-4">
            The single most important factor. How much do you earn monthly, residually, per customer in your organization?
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">Per-Customer Residual</th>
                  <th className="text-left p-2">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-2">$100+/month</td><td className="p-2 font-semibold">5.0</td></tr>
                <tr className="border-b"><td className="p-2">$50-99/month</td><td className="p-2 font-semibold">4.0</td></tr>
                <tr className="border-b"><td className="p-2">$25-49/month</td><td className="p-2 font-semibold">3.0</td></tr>
                <tr className="border-b"><td className="p-2">$10-24/month</td><td className="p-2 font-semibold">2.0</td></tr>
                <tr className="border-b"><td className="p-2">$1-9/month</td><td className="p-2 font-semibold">1.0</td></tr>
                <tr><td className="p-2">$0 or unclear</td><td className="p-2 font-semibold">0.5</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p><strong>Note:</strong> We calculate real dollars earned, not percentages of "Business Volume" or points. Many companies pay on inflated BV numbers — we cut through that.</p>
          </div>
        </div>

        {/* Factor 2 */}
        <div className="mb-8 border-b pb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">2. Residual Penalties</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">20% weight</span>
          </div>
          <p className="text-gray-600 mb-4">
            Does the company penalize your residual payout rate if you stop producing — or keep money that should be yours?
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-green-800 text-sm">
              <strong>Natural and fair:</strong> Your team volume drops from $10,000 to $5,000, so your 10% commission drops from $1,000 to $500. That's just math — less volume means less commission. No problem.
            </p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <p className="text-red-800 text-sm">
              <strong>Penalty (what we score against):</strong> Your team volume drops to $5,000, you "lose your rank," and now you only get 5% instead of 10% — so you earn $250 instead of $500. <em>The company kept $250 that should have been your residual.</em>
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">Policy</th>
                  <th className="text-left p-2">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-2">No penalties — you keep your rate on whatever volume exists</td><td className="p-2 font-semibold">5.0</td></tr>
                <tr className="border-b"><td className="p-2">Simple annual renewal fee only</td><td className="p-2 font-semibold">4.0</td></tr>
                <tr className="border-b"><td className="p-2">Rank/rate drops if team volume falls below threshold</td><td className="p-2 font-semibold">1.5</td></tr>
                <tr className="border-b"><td className="p-2">Must maintain personal production or enrollment quotas to keep rate</td><td className="p-2 font-semibold">1.5</td></tr>
                <tr className="border-b"><td className="p-2">Multiple penalty mechanisms combined</td><td className="p-2 font-semibold">0.5</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            <strong>The question:</strong> If your customers keep buying but you stop working, do you keep earning the same percentage on the volume? Or does the company cut your rate and pocket the difference?
          </p>
        </div>

        {/* Factor 3 */}
        <div className="mb-8 border-b pb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">3. Company Stability</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">15% weight</span>
          </div>
          <p className="text-gray-600 mb-4">
            How likely is the company to be around long-term, protecting your residual income?
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
            <li><strong>Longevity:</strong> 10+ years = bonus, under 10 years = penalty</li>
            <li><strong>Comp plan changes:</strong> Never changed = bonus, any changes = penalty</li>
            <li><strong>Commission history:</strong> Never missed a payment = bonus</li>
          </ul>
          <div className="mt-4 bg-yellow-50 p-3 rounded text-sm">
            <strong>Why comp plan changes matter:</strong> When you signed up, you agreed to specific terms. Any change — even an "improvement" — violates that original agreement. Companies that change comp plans have broken trust.
          </div>
        </div>

        {/* Factor 4 */}
        <div className="mb-8 border-b pb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">4. Product Value</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">10% weight</span>
          </div>
          <p className="text-gray-600 mb-4">
            We evaluate two things: Is this a legitimate product people actually use? And is the price reasonable compared to alternatives?
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">A. Product Legitimacy</h4>
            <p className="text-sm text-gray-600 mb-2">Is this a real product that solves a real problem or provides a real benefit?</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2">Indicator</th>
                    <th className="text-left p-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Clear, useful product with genuine demand</td><td className="p-2 font-semibold">5.0</td></tr>
                  <tr className="border-b"><td className="p-2">Legitimate product but niche appeal</td><td className="p-2 font-semibold">3.5</td></tr>
                  <tr className="border-b"><td className="p-2">Product exists but questionable utility</td><td className="p-2 font-semibold">2.0</td></tr>
                  <tr><td className="p-2">Vague, unclear, or no real product</td><td className="p-2 font-semibold">0.5</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">B. Price Reasonableness</h4>
            <p className="text-sm text-gray-600 mb-2">How does pricing compare to similar products customers could buy elsewhere?</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2">Pricing</th>
                    <th className="text-left p-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">Competitive with retail alternatives</td><td className="p-2 font-semibold">5.0</td></tr>
                  <tr className="border-b"><td className="p-2">Slight premium (10-30% above retail)</td><td className="p-2 font-semibold">4.0</td></tr>
                  <tr className="border-b"><td className="p-2">Moderate premium (30-50% above retail)</td><td className="p-2 font-semibold">3.0</td></tr>
                  <tr className="border-b"><td className="p-2">Significant premium (50-100% above retail)</td><td className="p-2 font-semibold">2.0</td></tr>
                  <tr><td className="p-2">Extreme premium or no comparable products</td><td className="p-2 font-semibold">1.0</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            <strong>Final Product Value score:</strong> Average of Legitimacy + Price Reasonableness
          </p>
        </div>

        {/* Factor 5 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">5. Transparency & Simplicity</h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">15% weight</span>
          </div>
          <p className="text-gray-600 mb-4">
            Can an average person understand how they'll get paid?
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
            <li>Simple, clear comp plan = 5.0</li>
            <li>Complex with many ranks/bonuses = 2.0</li>
            <li>Hidden or unavailable = 0.5</li>
            <li><strong>No published Income Disclosure:</strong> -1.0 penalty (compliance risk)</li>
          </ul>
        </div>
      </section>

      {/* What We Note But Don't Score */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Note (But Don't Score)</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Startup Costs</h3>
            <p className="text-sm text-gray-600">
              We document costs but don't penalize the rating. High costs increase <em>your</em> risk (80/20 rule applies), but don't reduce residual income potential.
            </p>
            <ul className="text-sm mt-2 space-y-1">
              <li>Under $500: Accessible</li>
              <li>$500-1,000: Reasonable</li>
              <li>$1,500+: Danger zone</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Regulatory History</h3>
            <p className="text-sm text-gray-600">
              FTC settlements, warnings, and investigations are documented but don't affect the score — unless the company was shut down or materially damaged.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              A company that settled and complied shouldn't be penalized forever.
            </p>
          </div>
        </div>
      </section>

      {/* Formula */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Formula</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`Final Score = (Per-Customer Residual × 0.40)
            + (Residual Penalties × 0.20)
            + (Company Stability × 0.15)
            + (Product Value × 0.10)
            + (Transparency × 0.15)`}</pre>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
        <p className="text-gray-700 mb-4">
          Most "reviews" focus on income disclosure stats ("X% earned nothing") or product quality. Those matter, but they miss the point.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>The real question is:</strong> If I do the work to build customers, will that income continue? Or will I have to keep grinding just to maintain what I built?
        </p>
        <p className="text-gray-700">
          That's what our Residual Rating measures. A company can have great products and still score poorly if they require monthly volume maintenance. A company can be newer and still score well if they pay high per-customer residuals with no strings attached.
        </p>
      </section>

    </main>
  );
}
