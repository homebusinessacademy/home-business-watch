import { Company, RATING_DIMENSIONS } from '@/types';
import { StarRating } from './StarRating';

interface RatingBreakdownProps {
  company: Company;
}

export function RatingBreakdown({ company }: RatingBreakdownProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Rating Breakdown</h2>

      <div className="space-y-4">
        {RATING_DIMENSIONS.map((dimension) => {
          const rating = company[dimension.key];
          return (
            <div key={dimension.key} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{dimension.label}</span>
                <StarRating rating={rating} size="sm" />
              </div>
              <p className="text-xs text-gray-500">{dimension.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-gray-900">Overall Rating</span>
          <div className="flex items-center gap-2">
            <StarRating rating={company.overall_rating} size="lg" showValue={false} />
            <span className="text-2xl font-bold text-amber-600">{company.overall_rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
