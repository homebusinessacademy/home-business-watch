'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/category/mlm', label: 'MLM Reviews' },
    { href: '/category/affiliate', label: 'Affiliate Programs' },
    { href: '/category/other', label: 'Work From Home' },
    { href: '/income-disclosure', label: 'Income Data' },
    { href: '/guides', label: 'Guides' },
    { href: '/news', label: '📰 News' },
    { href: '/how-we-rate', label: '⚖️ How We Rate' },
  ];

  return (
    <header className="bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xl font-bold">HomeBusinessWatch</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="/companies/home-business-academy" className="bg-amber-500 hover:bg-amber-600 text-navy-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
              #1 Rated: HBA
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-navy-700 bg-navy-900">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-navy-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-navy-700">
              <Link
                href="/companies/home-business-academy"
                className="block bg-amber-500 hover:bg-amber-600 text-navy-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors text-center"
                onClick={() => setMobileOpen(false)}
              >
                #1 Rated: HBA
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
