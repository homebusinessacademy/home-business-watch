export type CompanyCategory = 'mlm' | 'affiliate' | 'direct_sales' | 'other';

export interface Company {
  id: string;
  slug: string;
  name: string;
  category: CompanyCategory;
  founded_year: number | null;
  hq_location: string | null;
  website: string | null;
  products_summary: string | null;
  monthly_cost_min: number | null;
  monthly_cost_max: number | null;
  comp_plan_type: string | null;
  overall_rating: number;
  residual_rating: number;
  simplicity_rating: number;
  transparency_rating: number;
  community_rating: number;
  value_rating: number;
  pros: string[];
  cons: string[];
  quick_facts: Record<string, string>;
  last_updated: string;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  tagline?: string;
  faq?: FAQ[];
}

export interface CompanyUpdate {
  id: string;
  company_id: string;
  title: string;
  summary: string | null;
  source_url: string | null;
  published_at: string | null;
  created_at: string;
}

export interface UserReview {
  id: string;
  company_id: string;
  rating: number;
  title: string | null;
  body: string | null;
  reviewer_name: string | null;
  is_verified: boolean;
  is_approved: boolean;
  created_at: string;
}

export interface ComparisonPage {
  id: string;
  company_id: string;
  vs_company_name: string;
  vs_company_slug: string;
  content: ComparisonContent;
  last_updated: string;
}

export interface ComparisonContent {
  verdict: string;
  winner: 'company' | 'vs_company' | 'tie';
  comparison_points: ComparisonPoint[];
}

export interface ComparisonPoint {
  category: string;
  company_value: string;
  vs_company_value: string;
  winner: 'company' | 'vs_company' | 'tie';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RatingDimension {
  key: keyof Pick<Company, 'residual_rating' | 'simplicity_rating' | 'transparency_rating' | 'community_rating' | 'value_rating'>;
  label: string;
  description: string;
}

export const RATING_DIMENSIONS: RatingDimension[] = [
  {
    key: 'residual_rating',
    label: 'Residual Income',
    description: 'Potential for ongoing passive income'
  },
  {
    key: 'simplicity_rating',
    label: 'Simplicity',
    description: 'Easy to understand and execute'
  },
  {
    key: 'transparency_rating',
    label: 'Transparency',
    description: 'Clear about costs, requirements, and income'
  },
  {
    key: 'community_rating',
    label: 'Community & Support',
    description: 'Quality of training and community'
  },
  {
    key: 'value_rating',
    label: 'Value for Money',
    description: 'Worth the investment'
  }
];

export const CATEGORY_LABELS: Record<CompanyCategory, string> = {
  mlm: 'MLM Companies',
  affiliate: 'Affiliate Programs',
  direct_sales: 'Direct Sales',
  other: 'Work From Home'
};

export const CATEGORY_DESCRIPTIONS: Record<CompanyCategory, string> = {
  mlm: 'Multi-level marketing companies with tiered compensation structures',
  affiliate: 'Affiliate marketing programs with commission-based earnings',
  direct_sales: 'Direct sales opportunities selling products directly to consumers',
  other: 'Other work from home and remote business opportunities'
};
