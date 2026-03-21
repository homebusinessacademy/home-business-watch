import { MetadataRoute } from 'next';
import { allCompanies as companies, comparisonPages } from '@/lib/seed-data';
import { compPlans } from '@/lib/compensation-plans';
import { CompanyCategory } from '@/types';

const BASE_URL = 'https://homebusinesswatch.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/income-disclosure`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/news`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
  ];

  // Guide pages
  const guidePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/guides`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/guides/mlm-vs-affiliate-marketing`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/guides/best-mlm-companies-2026`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/guides/residual-income-math`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/guides/how-to-evaluate-home-business`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/guides/real-cost-mlm-team`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
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

  // Comp plan index page
  const compPlanIndexPage: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/compensation-plan`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Individual comp plan pages
  const compPlanPages: MetadataRoute.Sitemap = compPlans.map((cp) => ({
    url: `${BASE_URL}/compensation-plan/${cp.companySlug}`,
    lastModified: cp.lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...guidePages, ...categoryPages, ...companyPages, ...comparisonPageUrls, ...compPlanIndexPage, ...compPlanPages];
}
