import Link from 'next/link';
import { Company, CATEGORY_LABELS } from '@/types';
import { StarRating } from './StarRating';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const costDisplay = company.monthly_cost_min === 0 && company.monthly_cost_max === 0
    ? 'Free'
    : company.monthly_cost_min === company.monthly_cost_max
      ? `$${company.monthly_cost_min}/mo`
      : `$${company.monthly_cost_min}-${company.monthly_cost_max}/mo`;

  const ratingColor = company.overall_rating >= 4
    ? 'text-emerald-600'
    : company.overall_rating >= 3
      ? 'text-amber-600'
      : 'text-red-600';

  return (
    <Link href={`/companies/${company.slug}`} className="block group">
      <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-navy-300 transition-all duration-200">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-navy-700 transition-colors">
              {company.name}
            </h3>
            <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded mt-1">
              {CATEGORY_LABELS[company.category]}
            </span>
          </div>
          {company.is_featured && (
            <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded">
              Editor&apos;s Pick
            </span>
          )}
        </div>

        {company.tagline && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {company.tagline}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <StarRating rating={company.overall_rating} size="sm" />
            <span className={`text-sm font-bold ${ratingColor}`}>
              {company.overall_rating.toFixed(1)}/5
            </span>
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {costDisplay}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {company.comp_plan_type}
          </span>
          <span className="text-sm font-medium text-navy-600 group-hover:text-navy-800">
            Read Review →
          </span>
        </div>
      </article>
    </Link>
  );
}
