import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About HomeBusinessWatch — Independent Home Business Reviews',
  description: 'Why we built this site: we got tired of biased MLM reviews. Here\'s how we rate 500+ companies — and why we\'re different from the rest.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About HomeBusinessWatch</h1>
          <p className="text-gray-300 text-lg">Independent research on home business opportunities.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-600 leading-relaxed">
                HomeBusinessWatch is an independent research site reviewing 500+ home business opportunities — MLMs, affiliate programs, direct sales, and work-from-home platforms.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We analyze compensation plans, income disclosure statements, monthly costs, and real member experiences so you can make an informed decision before investing your time and money.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our ratings are based on publicly available data including company income disclosures, FTC records, and BBB filings.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Rating System</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every company is rated across five dimensions:
              </p>
              <ul className="space-y-3">
                {[
                  ['Residual Potential', 'How much per customer/teammate, how stable is the income'],
                  ['Startup Simplicity', 'How easy to get started and see real results'],
                  ['Transparency', 'Comp plan clarity, income disclosure, company history'],
                  ['Community & Support', 'Training, tools, and accessibility of help'],
                  ['Value for Cost', 'Monthly investment vs realistic return'],
                ].map(([name, desc]) => (
                  <li key={name} className="flex gap-3">
                    <span className="text-amber-500 font-bold mt-0.5">★</span>
                    <div>
                      <span className="font-semibold text-gray-900">{name}</span>
                      <span className="text-gray-500"> — {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">A Note on Income Data</h2>
              <p className="text-gray-600 leading-relaxed">
                Where available, our reviews include data from official company income disclosure statements (IDS). These are published by the companies themselves and represent the most accurate picture of typical earnings. We also reference FTC reports, BBB records, and court documents for companies with regulatory history.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Always verify current terms, costs, and income potential directly with each company before joining. Past earnings of top performers are not typical.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Looking for a home business that actually pays?</h3>
              <p className="text-gray-600 mb-4">We review hundreds of opportunities. See which one earned our highest rating.</p>
              <Link
                href="/companies/home-business-academy"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                See Our Editor&apos;s Pick →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
