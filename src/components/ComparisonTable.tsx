import { Company, ComparisonPage } from '@/types';
import { StarRating } from './StarRating';
import Link from 'next/link';

interface ComparisonTableProps {
  company: Company;
  vsCompany: Company;
  comparison?: ComparisonPage;
}

function determineWinner(companyValue: number, vsCompanyValue: number): 'company' | 'vs_company' | 'tie' {
  if (companyValue > vsCompanyValue) return 'company';
  if (vsCompanyValue > companyValue) return 'vs_company';
  return 'tie';
}

function parseStartupCost(value: string | undefined): number {
  if (!value) return 0;
  // Extract first number from strings like "$99-$500", "$199", "Free", etc.
  const match = value.match(/\$?([\d,]+)/);
  if (match) {
    return parseInt(match[1].replace(/,/g, ''), 10);
  }
  if (value.toLowerCase().includes('free')) return 0;
  return 0;
}

export function ComparisonTable({ company, vsCompany, comparison }: ComparisonTableProps) {
  const getWinnerBadge = (winner: 'company' | 'vs_company' | 'tie') => {
    if (winner === 'tie') {
      return <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Tie</span>;
    }
    return <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Winner</span>;
  };

  // Generate comparison points from company data when no explicit comparison exists
  const comparisonPoints = comparison?.content.comparison_points || [
    {
      category: 'Overall Rating',
      company_value: `${company.overall_rating.toFixed(1)}/5`,
      vs_company_value: `${vsCompany.overall_rating.toFixed(1)}/5`,
      winner: determineWinner(company.overall_rating, vsCompany.overall_rating),
    },
    {
      category: 'Startup Cost',
      company_value: company.quick_facts?.startup_cost || 'N/A',
      vs_company_value: vsCompany.quick_facts?.startup_cost || 'N/A',
      winner: determineWinner(parseStartupCost(vsCompany.quick_facts?.startup_cost), parseStartupCost(company.quick_facts?.startup_cost)), // Lower is better, so reversed
    },
    {
      category: 'Residual Income',
      company_value: company.residual_rating.toFixed(1),
      vs_company_value: vsCompany.residual_rating.toFixed(1),
      winner: determineWinner(company.residual_rating, vsCompany.residual_rating),
    },
    {
      category: 'Simplicity',
      company_value: company.simplicity_rating.toFixed(1),
      vs_company_value: vsCompany.simplicity_rating.toFixed(1),
      winner: determineWinner(company.simplicity_rating, vsCompany.simplicity_rating),
    },
    {
      category: 'Transparency',
      company_value: company.transparency_rating.toFixed(1),
      vs_company_value: vsCompany.transparency_rating.toFixed(1),
      winner: determineWinner(company.transparency_rating, vsCompany.transparency_rating),
    },
    {
      category: 'Community & Support',
      company_value: company.community_rating.toFixed(1),
      vs_company_value: vsCompany.community_rating.toFixed(1),
      winner: determineWinner(company.community_rating, vsCompany.community_rating),
    },
    {
      category: 'Value for Money',
      company_value: company.value_rating.toFixed(1),
      vs_company_value: vsCompany.value_rating.toFixed(1),
      winner: determineWinner(company.value_rating, vsCompany.value_rating),
    },
  ];

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
      {comparisonPoints.map((point, index) => (
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
