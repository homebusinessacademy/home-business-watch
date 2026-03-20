import { Company } from '@/types';
import { StarRating } from './StarRating';

interface QuickFactsBoxProps {
  company: Company;
}

export function QuickFactsBox({ company }: QuickFactsBoxProps) {
  return (
    <div className="bg-navy-50 rounded-lg border border-navy-100 p-6">
      <h2 className="text-lg font-bold text-navy-900 mb-4">Quick Facts</h2>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Overall Rating</span>
          <StarRating rating={company.overall_rating} size="md" />
        </div>

        <div className="border-t border-navy-100 pt-3">
          {Object.entries(company.quick_facts).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 border-b border-navy-50 last:border-0">
              <span className="text-gray-600 text-sm">{key}</span>
              <span className="text-gray-900 text-sm font-medium text-right max-w-[60%]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
