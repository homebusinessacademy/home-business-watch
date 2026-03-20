import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ComparisonTable, StarRating } from '@/components';
import { companies, comparisonPages, getCompanyBySlug } from '@/lib/seed-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate comparison slugs like "amway-vs-home-business-academy"
export async function generateStaticParams() {
  return comparisonPages.map((comparison) => {
    const company = companies.find(c => c.id === comparison.company_id);
    if (!company) return null;
    return {
      slug: `${company.slug}-vs-${comparison.vs_company_slug}`,
    };
  }).filter(Boolean);
}

function parseComparisonSlug(slug: string): { company1Slug: string; company2Slug: string } | null {
  const parts = slug.split('-vs-');
  if (parts.length !== 2) return null;
  return {
    company1Slug: parts[0],
    company2Slug: parts[1],
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseComparisonSlug(slug);

  if (!parsed) {
    return { title: 'Comparison Not Found' };
  }

  const company1 = getCompanyBySlug(parsed.company1Slug);
  const company2 = getCompanyBySlug(parsed.company2Slug);

  if (!company1 || !company2) {
    return { title: 'Comparison Not Found' };
  }

  return {
    title: `${company1.name} vs ${company2.name} ${new Date().getFullYear()} - Which Is Better?`,
    description: `Detailed comparison of ${company1.name} vs ${company2.name}. Compare costs, compensation plans, ratings, and features to find the best option for you.`,
    openGraph: {
      title: `${company1.name} vs ${company2.name} - Full Comparison`,
      description: `Which is better: ${company1.name} or ${company2.name}? See our side-by-side analysis.`,
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const parsed = parseComparisonSlug(slug);

  if (!parsed) {
    notFound();
  }

  const company1 = getCompanyBySlug(parsed.company1Slug);
  const company2 = getCompanyBySlug(parsed.company2Slug);

  if (!company1 || !company2) {
    notFound();
  }

  // Find the comparison data
  const comparison = comparisonPages.find(
    (cp) => cp.company_id === company1.id && cp.vs_company_slug === company2.slug
  );

  if (!comparison) {
    notFound();
  }

  const winner = comparison.content.winner === 'vs_company' ? company2 : company1;
  const winnerColor = winner.overall_rating >= 4 ? 'text-emerald-600' : 'text-amber-600';

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{company1.name} vs {company2.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="inline-block text-xs font-semibold text-amber-400 bg-amber-900/30 px-3 py-1 rounded-full mb-4">
              Side-by-Side Comparison
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {company1.name} vs {company2.name}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              An honest comparison to help you choose the right opportunity
            </p>
          </div>

          {/* Quick Rating Comparison */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <Link href={`/companies/${company1.slug}`} className="block hover:opacity-80 transition-opacity">
                  <div className="text-lg font-semibold mb-2">{company1.name}</div>
                  <div className="flex justify-center mb-2">
                    <StarRating rating={company1.overall_rating} showValue={false} size="md" />
                  </div>
                  <div className="text-3xl font-bold">{company1.overall_rating.toFixed(1)}</div>
                </Link>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-500">VS</span>
              </div>
              <div className="text-center">
                <Link href={`/companies/${company2.slug}`} className="block hover:opacity-80 transition-opacity">
                  <div className="text-lg font-semibold mb-2">{company2.name}</div>
                  <div className="flex justify-center mb-2">
                    <StarRating rating={company2.overall_rating} showValue={false} size="md" />
                  </div>
                  <div className="text-3xl font-bold">{company2.overall_rating.toFixed(1)}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Feature Comparison
          </h2>
          <ComparisonTable company={company1} vsCompany={company2} comparison={comparison} />
        </section>

        {/* Detailed Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <Link href={`/companies/${company1.slug}`} className="group">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-navy-600 mb-4">
                  {company1.name}
                </h3>
              </Link>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {company1.pros.slice(0, 4).map((pro, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {company1.cons.slice(0, 3).map((con, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/companies/${company1.slug}`}
                  className="inline-block text-navy-600 hover:text-navy-800 font-medium text-sm"
                >
                  Read Full {company1.name} Review →
                </Link>
              </div>
            </div>

            {/* Company 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <Link href={`/companies/${company2.slug}`} className="group">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-navy-600 mb-4">
                  {company2.name}
                </h3>
              </Link>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {company2.pros.slice(0, 4).map((pro, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {company2.cons.slice(0, 3).map((con, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/companies/${company2.slug}`}
                  className="inline-block text-navy-600 hover:text-navy-800 font-medium text-sm"
                >
                  Read Full {company2.name} Review →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-navy-50 to-emerald-50 rounded-xl border border-gray-200 p-8">
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-semibold text-navy-700 bg-navy-100 px-3 py-1 rounded-full mb-4">
                Our Verdict
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Winner: <span className={winnerColor}>{winner.name}</span>
              </h2>
              <div className="flex justify-center items-center gap-2">
                <StarRating rating={winner.overall_rating} size="lg" />
              </div>
            </div>

            <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
              {comparison.content.verdict}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-900 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started with {winner.name}?</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Based on our analysis, {winner.name} offers the best opportunity for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/companies/${winner.slug}`}
              className="inline-block bg-white text-navy-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Full Review
            </Link>
            {winner.slug === 'home-business-academy' && (
              <a
                href="https://onlinegoldrush.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-navy-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Visit Official Website
              </a>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
