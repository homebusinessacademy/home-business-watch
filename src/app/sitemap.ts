import { MetadataRoute } from 'next';
import { companies, comparisonPages } from '@/lib/seed-data';
import { CompanyCategory } from '@/types';

const BASE_URL = 'https://homebusinesswatch.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Category pages
  const categories: CompanyCategory[] = ['mlm', 'affiliate', 'direct_sales', 'other'];
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Company pages
  const companyPages: MetadataRoute.Sitemap = companies
    .filter((company) => company.is_published)
    .map((company) => ({
      url: `${BASE_URL}/companies/${company.slug}`,
      lastModified: company.last_updated,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }));

  // Comparison pages
  const comparisonPageUrls: MetadataRoute.Sitemap = comparisonPages.map((comparison) => {
    const company = companies.find((c) => c.id === comparison.company_id);
    if (!company) return null;

    return {
      url: `${BASE_URL}/compare/${company.slug}-vs-${comparison.vs_company_slug}`,
      lastModified: comparison.last_updated,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  }).filter((page): page is NonNullable<typeof page> => page !== null);

  return [...staticPages, ...categoryPages, ...companyPages, ...comparisonPageUrls];
}
