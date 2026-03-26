import { Metadata } from 'next';
import Link from 'next/link';
import { EbookBanner } from '@/components';
import { getScamDataSorted } from '@/lib/scam-data';

export const metadata: Metadata = {
  title: 'Is Your MLM a Scam? Honest Answers for 22 Companies',
  description: 'We looked at the actual complaints, legal records, and business models for 22 MLM companies. Here is what the evidence shows for each one.',
  openGraph: {
    title: 'Is Your MLM a Scam? Honest Answers for 22 Companies',
    description: 'We looked at the actual complaints, legal records, and business models. Here is what the evidence shows.',
    type: 'website',
  },
  keywords: [
    'is mlm a scam',
    'mlm scam list',
    'pyramid scheme companies',
    'is network marketing a scam',
    'mlm companies to avoid',
    'legitimate mlm companies',
  ],
};

export default function ScamIndexPage() {
  const scamData = getScamDataSorted();

  // Separate actual scams from legitimate companies
  const legitimateCompanies = scamData.filter((s) => !s.isHighRisk);
  const actualScams = scamData.filter((s) => s.isHighRisk);

  // Build FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are MLM companies scams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most MLM companies are not scams in the legal sense. They sell real products and operate legally. The 1979 FTC vs Amway ruling established that MLMs with real products are legal. However, the business model economics often make it difficult for most participants to earn significant income. A bad business opportunity is different from fraud.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if an MLM is a scam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Real scam red flags include: no actual product or service, guaranteed returns for no work, anonymous founders, unregistered with regulators, and money that only comes from recruiting. Most MLM complaints are about business model issues (low residual, high requirements) rather than actual fraud.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a scam and a bad business opportunity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A scam involves deliberate fraud - taking money with no intention to deliver value. A bad business opportunity is a legal business where the economics simply do not favor most participants. Most MLMs fall into the second category: legal businesses where the math rarely works out.',
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
            <span className="text-gray-900">Scam Reviews</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-navy-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Is Your MLM a Scam?
            <br />
            <span className="text-gray-300">Honest Answers for 22 Companies</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            We looked at the actual complaints, the legal records, and the business models. Here is what the evidence shows for each company.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Understanding the Distinction */}
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              What &ldquo;Scam&rdquo; Actually Means
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>A scam = deliberate fraud.</strong> Taking money with no intention to deliver value. Fake products. False promises. Criminal deception.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Most MLM complaints are about the business model, not fraud.</strong> Low residual income, high monthly requirements, unrealistic income claims from uplines - these are legitimate concerns about whether the opportunity works, but they are not the same as criminal fraud.
            </p>
            <p className="text-gray-600 italic">
              We use this distinction below. A &ldquo;No&rdquo; does not mean it is a good opportunity - it means it is not literal fraud.
            </p>
          </section>

          {/* Company Table - Legitimate MLMs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              MLM Companies: Scam or Not?
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold text-gray-900">Company</th>
                      <th className="text-center px-6 py-4 font-semibold text-gray-900">Scam?</th>
                      <th className="text-left px-6 py-4 font-semibold text-gray-900">Quick Summary</th>
                      <th className="text-center px-6 py-4 font-semibold text-gray-900"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {legitimateCompanies.map((company) => (
                      <tr key={company.companySlug} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">{company.companyName}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-800">
                            No
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-md">
                          {company.directAnswer.length > 120
                            ? company.directAnswer.slice(0, 120) + '...'
                            : company.directAnswer}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Link
                            href={`/scam/${company.companySlug}`}
                            className="text-navy-600 hover:text-navy-800 font-medium text-sm whitespace-nowrap"
                          >
                            Full Report &rarr;
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Actual Scams Section */}
          {actualScams.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-500">&#128680;</span>
                Actual Scams / Pyramid Schemes
              </h2>
              <p className="text-gray-600 mb-6">
                These operations meet the actual legal definition of fraud or pyramid scheme. No real product, money from new participants funds old ones.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-red-100 border-b border-red-200">
                      <tr>
                        <th className="text-left px-6 py-4 font-semibold text-red-900">Company</th>
                        <th className="text-center px-6 py-4 font-semibold text-red-900">Scam?</th>
                        <th className="text-left px-6 py-4 font-semibold text-red-900">Why</th>
                        <th className="text-center px-6 py-4 font-semibold text-red-900"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-red-200">
                      {actualScams.map((company) => (
                        <tr key={company.companySlug} className="hover:bg-red-100">
                          <td className="px-6 py-4">
                            <span className="font-medium text-red-900">{company.companyName}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-200 text-red-800">
                              Yes
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-red-800 max-w-md">
                            {company.directAnswer.length > 120
                              ? company.directAnswer.slice(0, 120) + '...'
                              : company.directAnswer}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Link
                              href={`/scam/${company.companySlug}`}
                              className="text-red-700 hover:text-red-900 font-medium text-sm whitespace-nowrap"
                            >
                              Full Report &rarr;
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Red Flags Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <span>&#128680;</span> Actual Red Flags (Run Away)
              </h3>
              <ul className="space-y-2 text-red-900 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  No real product or service being sold
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Guaranteed returns promised for no work
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Anonymous founders or no verifiable business
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Income comes only from recruiting
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Not registered with any regulator
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                <span>&#9888;</span> Business Model Issues (Evaluate Carefully)
              </h3>
              <ul className="space-y-2 text-amber-900 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Low per-customer residual ($3-10 per order)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Monthly purchase requirements to stay active
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Income claims from top earners only
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Most participants earn little or nothing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">&#8226;</span>
                  Pressure to recruit over selling
                </li>
              </ul>
            </div>
          </section>

          {/* Related Resources */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/pyramid-scheme"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">Pyramid Scheme Guide</h3>
                <p className="text-sm text-gray-600">Is your MLM a pyramid scheme? 25+ companies analyzed.</p>
              </Link>
              <Link
                href="/compensation-plan"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">Comp Plan Breakdowns</h3>
                <p className="text-sm text-gray-600">Per-customer residual ranked for 20+ companies.</p>
              </Link>
              <Link
                href="/pitfalls"
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-navy-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">Policy Pitfalls</h3>
                <p className="text-sm text-gray-600">Hidden contract gotchas for 20+ companies.</p>
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
