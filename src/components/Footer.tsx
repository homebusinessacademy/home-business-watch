import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-xl font-bold">HomeBusinessWatch</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Honest, unbiased reviews of 500+ home business opportunities. We help you research before you join.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/category/mlm" className="hover:text-white transition-colors">
                  MLM Companies
                </Link>
              </li>
              <li>
                <Link href="/category/affiliate" className="hover:text-white transition-colors">
                  Affiliate Programs
                </Link>
              </li>
              <li>
                <Link href="/category/direct_sales" className="hover:text-white transition-colors">
                  Direct Sales
                </Link>
              </li>
              <li>
                <Link href="/category/other" className="hover:text-white transition-colors">
                  Work From Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/companies/home-business-academy" className="hover:text-white transition-colors">
                  Editor&apos;s Pick
                </Link>
              </li>
              <li>
                <span className="text-gray-500">About Us (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500">Contact (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            Information on this site is based on publicly available data including company income disclosure statements, FTC records, and BBB filings. Always verify current terms, costs, and income potential directly with each company before joining. Past earnings of top performers are not typical. See each company&apos;s income disclosure statement for typical results.
          </p>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} HomeBusinessWatch.com. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Affiliate Disclosure: We may earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
