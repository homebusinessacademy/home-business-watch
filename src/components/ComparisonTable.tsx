import { Company, ComparisonPage } from '@/types';
import { StarRating } from './StarRating';
import Link from 'next/link';

interface ComparisonTableProps {
  company: Company;
  vsCompany: Company;
  comparison: ComparisonPage;
}

export function ComparisonTable({ company, vsCompany, comparison }: ComparisonTableProps) {
  const getWinnerBadge = (winner: 'company' | 'vs_company' | 'tie') => {
    if (winner === 'tie') {
      return <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Tie</span>;
    }
    return <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Winner</span>;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 bg-navy-50 border-b border-gray-200">
        <div className="p-4 font-semibold text-gray-700">Category</div>
        <div className="p-4 text-center border-l border-gray-200">
          <Link href={`/companies/${company.slug}`} className="font-semibold text-navy-700 hover:underline">
            {company.name}
          </Link>
          <div className="mt-1">
            <StarRating rating={company.overall_rating} size="sm" showValue={false} />
          </div>
        </div>
        <div className="p-4 text-center border-l border-gray-200">
          <Link href={`/companies/${vsCompany.slug}`} className="font-semibold text-navy-700 hover:underline">
            {vsCompany.name}
          </Link>
          <div className="mt-1">
            <StarRating rating={vsCompany.overall_rating} size="sm" showValue={false} />
          </div>
        </div>
      </div>

      {/* Comparison Rows */}
      {comparison.content.comparison_points.map((point, index) => (
        <div
          key={point.category}
          className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="p-4 font-medium text-gray-700 border-b border-gray-100">
            {point.category}
          </div>
          <div className={`p-4 text-center text-sm border-l border-b border-gray-100 ${
            point.winner === 'company' ? 'bg-emerald-50' : ''
          }`}>
            <div className="text-gray-900">{point.company_value}</div>
            {point.winner === 'company' && (
              <div className="mt-1">{getWinnerBadge('company')}</div>
            )}
          </div>
          <div className={`p-4 text-center text-sm border-l border-b border-gray-100 ${
            point.winner === 'vs_company' ? 'bg-emerald-50' : ''
          }`}>
            <div className="text-gray-900">{point.vs_company_value}</div>
            {point.winner === 'vs_company' && (
              <div className="mt-1">{getWinnerBadge('vs_company')}</div>
            )}
            {point.winner === 'tie' && (
              <div className="mt-1">{getWinnerBadge('tie')}</div>
            )}
          </div>
        </div>
      ))}

      {/* Overall Rating Row */}
      <div className="grid grid-cols-3 bg-navy-50 border-t border-gray-200">
        <div className="p-4 font-bold text-gray-900">Overall Rating</div>
        <div className={`p-4 text-center border-l border-gray-200 ${
          company.overall_rating > vsCompany.overall_rating ? 'bg-emerald-50' : ''
        }`}>
          <span className="text-2xl font-bold text-amber-600">{company.overall_rating.toFixed(1)}</span>
          <span className="text-gray-500">/5</span>
          {company.overall_rating > vsCompany.overall_rating && (
            <div className="mt-1">{getWinnerBadge('company')}</div>
          )}
        </div>
        <div className={`p-4 text-center border-l border-gray-200 ${
          vsCompany.overall_rating > company.overall_rating ? 'bg-emerald-50' : ''
        }`}>
          <span className="text-2xl font-bold text-amber-600">{vsCompany.overall_rating.toFixed(1)}</span>
          <span className="text-gray-500">/5</span>
          {vsCompany.overall_rating > company.overall_rating && (
            <div className="mt-1">{getWinnerBadge('vs_company')}</div>
          )}
        </div>
      </div>
    </div>
  );
}
