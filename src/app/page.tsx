import Link from 'next/link';
import { SearchBar, CompanyCard } from '@/components';
import { allCompanies as companies, getRecentlyUpdatedCompanies, getRecentlyAddedCompanies, getFeaturedCompanies } from '@/lib/seed-data';
import { RATING_DIMENSIONS } from '@/types';

export default function HomePage() {
  const recentlyUpdated = getRecentlyUpdatedCompanies(6);
  const recentlyAdded = getRecentlyAddedCompanies(6);
  const featured = getFeaturedCompanies();

  const categories = [
    {
      slug: 'mlm',
      name: 'MLM Companies',
      description: 'Multi-level marketing reviews with compensation analysis',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      count: companies.filter(c => c.category === 'mlm').length,
    },
    {
      slug: 'affiliate',
      name: 'Affiliate Programs',
      description: 'Legitimate affiliate opportunities with commission details',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      count: companies.filter(c => c.category === 'affiliate').length,
    },
    {
      slug: 'direct_sales',
      name: 'Direct Sales',
      description: 'Direct selling companies and product-based opportunities',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      count: companies.filter(c => c.category === 'direct_sales').length,
    },
    {
      slug: 'other',
      name: 'Work From Home',
      description: 'Remote work and freelance opportunities reviewed',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      count: companies.filter(c => c.category === 'other').length,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Research Before You Join
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Honest, unbiased reviews of <span className="text-amber-500 font-semibold">500+</span> home business opportunities.
              We analyze MLM companies, affiliate programs, and work from home options so you can make informed decisions.
            </p>
            <SearchBar />
            <p className="mt-4 text-sm text-gray-400">
              Search by company name, category, or type
            </p>
            <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
              <span className="text-2xl">📖</span>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Free Ebook: The Residual Income Shortcut</p>
                <p className="text-gray-300 text-xs">The model that replaced 600 MLM team members with 24 customers</p>
              </div>
              <a
                href="https://onlinegoldrush.com"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
              >
                Get it Free →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore our comprehensive directory of home business opportunities, organized by type
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-navy-300 transition-all duration-200"
              >
                <div className="text-navy-600 mb-4 group-hover:text-navy-800 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-navy-700">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>
                <span className="text-xs font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  {category.count} {category.count === 1 ? 'Company' : 'Companies'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Rate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            How We Rate Companies
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Our 5-dimension rating system provides a comprehensive view of each opportunity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {RATING_DIMENSIONS.map((dimension) => (
              <div key={dimension.key} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{dimension.label}</h3>
                <p className="text-sm text-gray-600">{dimension.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Updated */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Recently Updated
              </h2>
              <p className="text-gray-600 mt-2">
                Our latest reviews and analysis
              </p>
            </div>
            <Link
              href="/category/mlm"
              className="hidden md:inline-flex items-center text-navy-600 hover:text-navy-800 font-medium"
            >
              View All Reviews
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyUpdated.map((company) => {
              const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
              const isNew = new Date(company.created_at).getTime() > thirtyDaysAgo;
              const isUpdated = !isNew && new Date(company.last_updated).getTime() > thirtyDaysAgo;
              const badge = isNew ? 'new' : isUpdated ? 'updated' : undefined;
              return <CompanyCard key={company.slug} company={company} badge={badge} />;
            })}
          </div>
        </div>
      </section>



      {/* Editor's Pick */}
      {featured.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-4">
                  Editor&apos;s Pick
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Top Recommendation
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  After reviewing hundreds of opportunities, this is the program we recommend for beginners and experienced marketers alike.
                </p>
              </div>

              {featured.map((company) => (
                <Link
                  key={company.slug}
                  href={`/companies/${company.slug}`}
                  className="block bg-gradient-to-r from-navy-50 to-amber-50 rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {company.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {company.tagline}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          100% commissions
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          No recruiting required
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Low startup cost
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-3xl font-bold text-gray-900">{company.overall_rating.toFixed(1)}</span>
                      <span className="text-sm text-gray-500">out of 5</span>
                      <span className="mt-3 text-navy-600 font-medium">
                        Read Full Review →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find Your Perfect Opportunity?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Don&apos;t risk your time and money on the wrong program. Use our research to make an informed decision.
          </p>
          <Link
            href="/companies/home-business-academy"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            See Our #1 Recommendation
          </Link>
        </div>
      </section>
    </>
  );
}
