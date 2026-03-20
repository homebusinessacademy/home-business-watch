import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact HomeBusinessWatch',
  description: 'Contact HomeBusinessWatch to report inaccurate information, suggest a company, or ask a question.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">We&apos;re always looking to improve our data.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid gap-6">

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Report Inaccurate Information</h3>
                    <p className="text-gray-600 text-sm">Found something wrong in one of our reviews? Let us know the company, what&apos;s incorrect, and a source if you have one. We update our database regularly.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Suggest a Missing Company</h3>
                    <p className="text-gray-600 text-sm">Know a home business opportunity we haven&apos;t reviewed? Send us the company name and website and we&apos;ll add it to our research queue.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">General Questions</h3>
                    <p className="text-gray-600 text-sm">Have a question about a company, our rating system, or anything else? We&apos;re happy to help.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-gray-700 font-medium mb-2">📧 Email us at:</p>
                <a
                  href="mailto:contact@homebusinesswatch.com"
                  className="text-navy-600 hover:text-navy-800 font-semibold text-lg"
                >
                  contact@homebusinesswatch.com
                </a>
                <p className="text-gray-500 text-sm mt-2">We typically respond within 1-2 business days.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
