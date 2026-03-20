import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CompanyCard } from '@/components';
import { companies, getCompaniesByCategory } from '@/lib/seed-data';
import { CompanyCategory, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const validCategories: CompanyCategory[] = ['mlm', 'affiliate', 'direct_sales', 'other'];

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    slug: category,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!validCategories.includes(slug as CompanyCategory)) {
    return {
      title: 'Category Not Found',
    };
  }

  const category = slug as CompanyCategory;
  const label = CATEGORY_LABELS[category];
  const description = CATEGORY_DESCRIPTIONS[category];
  const count = getCompaniesByCategory(category).length;

  return {
    title: `${label} Reviews ${new Date().getFullYear()} - ${count}+ Companies Reviewed`,
    description: `Honest ${label.toLowerCase()} reviews and ratings. ${description}. Compare costs, compensation plans, and real user experiences.`,
    openGraph: {
      title: `${label} Reviews - HomeBusinessWatch`,
      description: `Honest ${label.toLowerCase()} reviews and ratings. Compare costs and compensation plans.`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  if (!validCategories.includes(slug as CompanyCategory)) {
    notFound();
  }

  const category = slug as CompanyCategory;
  const categoryCompanies = getCompaniesByCategory(category);
  const label = CATEGORY_LABELS[category];
  const description = CATEGORY_DESCRIPTIONS[category];

  // Sort options - default by rating
  const sortedCompanies = [...categoryCompanies].sort(
    (a, b) => b.overall_rating - a.overall_rating
  );

  const highRated = sortedCompanies.filter(c => c.overall_rating >= 4);
  const mediumRated = sortedCompanies.filter(c => c.overall_rating >= 3 && c.overall_rating < 4);
  const lowRated = sortedCompanies.filter(c => c.overall_rating < 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{label}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {label} Reviews {new Date().getFullYear()}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            {description}. We&apos;ve reviewed {categoryCompanies.length}+ companies to help you make an informed decision.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{categoryCompanies.length}</div>
              <div className="text-sm text-gray-600">Companies Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{highRated.length}</div>
              <div className="text-sm text-gray-600">Highly Rated (4+)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{mediumRated.length}</div>
              <div className="text-sm text-gray-600">Average (3-4)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{lowRated.length}</div>
              <div className="text-sm text-gray-600">Below Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
                <h3 className="font-bold text-gray-900 mb-4">Filter & Sort</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        4+ Stars ({highRated.length})
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        3-4 Stars ({mediumRated.length})
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        Below 3 Stars ({lowRated.length})
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cost
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        Free
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        Under $50/mo
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        $50-100/mo
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        $100+/mo
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sort By
                    </label>
                    <select className="w-full rounded-lg border-gray-300 text-sm">
                      <option>Highest Rating</option>
                      <option>Lowest Cost</option>
                      <option>Most Recent</option>
                      <option>Alphabetical</option>
                    </select>
                  </div>
                </div>
              </div>
            </aside>

            {/* Company Grid */}
            <div className="flex-1">
              {sortedCompanies.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No companies found in this category yet.</p>
                  <Link href="/" className="text-navy-600 hover:text-navy-800 font-medium mt-2 inline-block">
                    Browse all companies →
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-600">
                      Showing {sortedCompanies.length} {sortedCompanies.length === 1 ? 'company' : 'companies'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sortedCompanies.map((company) => (
                      <CompanyCard key={company.slug} company={company} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Info */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About {label}
            </h2>
            <div className="prose prose-gray max-w-none">
              {category === 'mlm' && (
                <>
                  <p>
                    Multi-level marketing (MLM) companies, also known as network marketing or direct selling with tiered compensation,
                    involve earning commissions both from personal sales and from recruiting other distributors.
                  </p>
                  <p>
                    While MLMs are legal, it&apos;s important to understand that most participants do not profit. The FTC has found that
                    in many MLMs, the vast majority of participants lose money. Always research thoroughly before joining.
                  </p>
                  <h3>What to Look For:</h3>
                  <ul>
                    <li>Income disclosure statements (required by FTC)</li>
                    <li>Product-to-recruitment focus ratio</li>
                    <li>Startup and ongoing costs</li>
                    <li>Refund policies and inventory requirements</li>
                  </ul>
                </>
              )}
              {category === 'affiliate' && (
                <>
                  <p>
                    Affiliate marketing programs allow you to earn commissions by promoting products or services.
                    Unlike MLMs, affiliate programs don&apos;t require recruiting others to earn income.
                  </p>
                  <p>
                    Commission structures vary widely, from a few percent on physical products to 50%+ on digital products.
                    The best programs offer recurring commissions for subscription products.
                  </p>
                  <h3>What to Look For:</h3>
                  <ul>
                    <li>Commission rates and cookie duration</li>
                    <li>Product quality and market demand</li>
                    <li>Training and marketing resources</li>
                    <li>Payment terms and thresholds</li>
                  </ul>
                </>
              )}
              {category === 'direct_sales' && (
                <>
                  <p>
                    Direct sales companies sell products directly to consumers, typically through independent representatives
                    who earn commissions on their sales.
                  </p>
                  <p>
                    Some direct sales companies operate like MLMs with tiered compensation, while others focus purely
                    on product sales without recruitment incentives.
                  </p>
                </>
              )}
              {category === 'other' && (
                <>
                  <p>
                    This category includes various work from home opportunities that don&apos;t fit neatly into MLM,
                    affiliate marketing, or traditional direct sales categories.
                  </p>
                  <p>
                    These may include freelance platforms, online service businesses, digital product creation,
                    and other remote work opportunities.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Check out our #1 recommended program - perfect for beginners and experienced marketers alike.
          </p>
          <Link
            href="/companies/home-business-academy"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-navy-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            See Our Top Pick
          </Link>
        </div>
      </section>
    </>
  );
}
