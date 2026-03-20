import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { QuickFactsBox, RatingBreakdown, StarRating } from '@/components';
import { getCompanyBySlug, getCompanyUpdates, getCompanyReviews, allCompanies, getCompanyComparison } from '@/lib/seed-data';
import HBAReviewsSection from '@/components/HBAReviewsSection';
import { CATEGORY_LABELS } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allCompanies.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    return {
      title: 'Company Not Found',
    };
  }

  return {
    title: `${company.name} Review ${new Date().getFullYear()} - Is It Worth It?`,
    description: `Honest ${company.name} review with ${company.overall_rating}/5 rating. ${company.products_summary} Costs $${company.monthly_cost_min}-${company.monthly_cost_max}/mo. Read pros, cons, and real user reviews.`,
    openGraph: {
      title: `${company.name} Review ${new Date().getFullYear()} - Is It Worth It?`,
      description: `Honest ${company.name} review with ${company.overall_rating}/5 rating. Read our complete analysis.`,
      type: 'article',
    },
  };
}

export default async function CompanyPage({ params }: PageProps) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  const updates = getCompanyUpdates(company.id);
  const reviews = getCompanyReviews(company.id);
  const comparison = getCompanyComparison(slug);

  const ratingColor = company.overall_rating >= 4
    ? 'text-emerald-600'
    : company.overall_rating >= 3
      ? 'text-amber-600'
      : 'text-red-600';

  const ratingBgColor = company.overall_rating >= 4
    ? 'bg-emerald-50 border-emerald-200'
    : company.overall_rating >= 3
      ? 'bg-amber-50 border-amber-200'
      : 'bg-red-50 border-red-200';

  // JSON-LD Structured Data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.website,
    foundingDate: company.founded_year?.toString(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.hq_location,
    },
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: company.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: company.overall_rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HomeBusinessWatch',
    },
    reviewBody: `${company.name} receives a ${company.overall_rating}/5 rating. ${company.pros[0]} However, ${company.cons[0]}`,
  };

  const faqSchema = company.faq && company.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: company.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/category/${company.category}`} className="hover:text-navy-600">
              {CATEGORY_LABELS[company.category]}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{company.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <header>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded mb-2">
                    {CATEGORY_LABELS[company.category]}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {company.name} Review {new Date().getFullYear()}
                  </h1>
                  {company.tagline && (
                    <p className="text-lg text-gray-600 mt-2">{company.tagline}</p>
                  )}
                </div>
                {company.is_featured && (
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded">
                    Editor&apos;s Pick
                  </span>
                )}
              </div>

              {/* Rating Summary Box */}
              <div className={`rounded-lg border p-6 ${ratingBgColor}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl font-bold ${ratingColor}`}>
                      {company.overall_rating.toFixed(1)}
                    </div>
                    <div>
                      <StarRating rating={company.overall_rating} showValue={false} size="lg" />
                      <p className="text-sm text-gray-600 mt-1">
                        HomeBusinessWatch Rating
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 md:text-right">
                    <p className="text-sm text-gray-600">
                      Last updated: {new Date(company.last_updated).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* Products Summary */}
            {company.products_summary && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">What is {company.name}?</h2>
                <p className="text-gray-700 leading-relaxed">{company.products_summary}</p>
              </section>
            )}

            {/* Pros and Cons */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pros
                </h3>
                <ul className="space-y-3">
                  {company.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cons
                </h3>
                <ul className="space-y-3">
                  {company.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Rating Breakdown */}
            <RatingBreakdown company={company} />

            {/* Recent Updates */}
            {updates.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Updates</h2>
                <div className="space-y-4">
                  {updates.map((update) => (
                    <article key={update.id} className="bg-white rounded-lg border border-gray-200 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{update.title}</h3>
                          {update.summary && (
                            <p className="text-sm text-gray-600 mt-1">{update.summary}</p>
                          )}
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                          {update.published_at && new Date(update.published_at).toLocaleDateString()}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* HBA Official Reviews Widget */}
            {company.slug === 'home-business-academy' && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Member Reviews</h2>
                <p className="text-sm text-gray-500 mb-4">Real reviews from verified HBA members via thehba.app/reviews</p>
                <HBAReviewsSection />
              </section>
            )}

            {/* User Reviews */}
            {company.slug !== 'home-business-academy' && reviews.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">User Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <article key={review.id} className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                            <span className="text-navy-600 font-semibold">
                              {review.reviewer_name?.[0] || 'A'}
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">
                                {review.reviewer_name || 'Anonymous'}
                              </span>
                              {review.is_verified && (
                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                                  Verified
                                </span>
                              )}
                            </div>
                            <StarRating rating={review.rating} size="sm" showValue={false} />
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {review.title && (
                        <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                      )}
                      {review.body && (
                        <p className="text-gray-700">{review.body}</p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ Section */}
            {company.faq && company.faq.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions About {company.name}
                </h2>
                <div className="space-y-4">
                  {company.faq.map((item, index) => (
                    <details
                      key={index}
                      className="bg-white rounded-lg border border-gray-200 group"
                    >
                      <summary className="p-4 cursor-pointer font-medium text-gray-900 flex items-center justify-between">
                        {item.question}
                        <svg
                          className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 text-gray-700">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Comparison CTA */}
            {comparison && (
              <section className="bg-navy-50 rounded-lg border border-navy-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Compare {company.name} with Alternatives
                </h2>
                <p className="text-gray-600 mb-4">
                  See how {company.name} stacks up against the competition
                </p>
                <Link
                  href={`/compare/${company.slug}-vs-${comparison.vs_company_slug}`}
                  className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Compare with {comparison.vs_company_name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <QuickFactsBox company={company} />

            {/* CTA Box */}
            {company.is_featured && (
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Ready to Get Started?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Join thousands of successful affiliates with {company.name}
                </p>
                <a
                  href="https://onlinegoldrush.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-500 hover:bg-amber-600 text-navy-900 text-center px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Visit Official Website
                </a>
              </div>
            )}

            {/* Related Companies */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Related Companies</h3>
              <div className="space-y-3">
                {allCompanies
                  .filter(c => c.category === company.category && c.slug !== company.slug)
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.slug}
                      href={`/companies/${related.slug}`}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{related.name}</span>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-amber-500">★</span>
                        <span>{related.overall_rating.toFixed(1)}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
