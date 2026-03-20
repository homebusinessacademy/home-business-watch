import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
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

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/category/mlm"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              MLM Reviews
            </Link>
            <Link
              href="/category/affiliate"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Affiliate Programs
            </Link>
            <Link
              href="/category/direct_sales"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Direct Sales
            </Link>
            <Link
              href="/companies/home-business-academy"
              className="bg-amber-500 hover:bg-amber-600 text-navy-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              #1 Rated: HBA
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
