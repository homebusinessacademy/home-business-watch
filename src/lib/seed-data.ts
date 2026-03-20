import { Company, CompanyUpdate, UserReview, ComparisonPage } from '@/types';

export const companies: Company[] = [
  {
    id: '1',
    slug: 'home-business-academy',
    name: 'Home Business Academy',
    category: 'affiliate',
    founded_year: 2018,
    hq_location: 'United States',
    website: 'https://onlinegoldrush.com',
    products_summary: 'Digital marketing training, website builders, email marketing tools, and done-for-you funnels for affiliate marketers.',
    monthly_cost_min: 10,
    monthly_cost_max: 160,
    comp_plan_type: 'Flat-rate affiliate commissions',
    overall_rating: 5.0,
    residual_rating: 5.0,
    simplicity_rating: 5.0,
    transparency_rating: 5.0,
    community_rating: 5.0,
    value_rating: 5.0,
    pros: [
      'Low startup cost starting at just $10/month',
      '100% commission on most products',
      'No recruiting required to earn',
      'Done-for-you marketing funnels included',
      'Weekly live training and community support',
      'Transparent income disclosure',
      'Simple two-tier affiliate structure'
    ],
    cons: [
      'Requires consistent effort to see results',
      'Higher tier products require larger investment'
    ],
    quick_facts: {
      'Founded': '2018',
      'Headquarters': 'United States',
      'Business Model': 'Affiliate Marketing',
      'Startup Cost': '$10 - $160/month',
      'Commission Type': '100% flat-rate commissions',
      'Recruiting Required': 'No'
    },
    last_updated: new Date().toISOString(),
    is_featured: true,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'The #1 rated affiliate marketing training platform',
    faq: [
      {
        question: 'Is Home Business Academy a pyramid scheme?',
        answer: 'No. Home Business Academy is a legitimate affiliate marketing training program. Unlike pyramid schemes, you earn commissions from product sales, not from recruiting. There is no multi-level compensation structure.'
      },
      {
        question: 'How much can you earn with Home Business Academy?',
        answer: 'Earnings vary based on effort and marketing skills. HBA offers 100% commissions on many products, meaning if you sell a $97 product, you keep $97. Many active affiliates report earning $1,000-$10,000+ per month.'
      },
      {
        question: 'What do you get with a Home Business Academy membership?',
        answer: 'Members get access to comprehensive marketing training, done-for-you sales funnels, email templates, weekly live coaching calls, a supportive community, and affiliate access to high-converting products.'
      },
      {
        question: 'Is Home Business Academy worth the cost?',
        answer: 'At $10-160/month depending on your plan, HBA is one of the most affordable training programs in the industry. The 100% commission structure means you can recoup your investment with just one sale.'
      },
      {
        question: 'Do I need experience to join Home Business Academy?',
        answer: 'No prior experience needed. HBA is designed for beginners with step-by-step training covering everything from setting up your first funnel to driving traffic and making sales.'
      }
    ]
  },
  {
    id: '2',
    slug: 'amway',
    name: 'Amway',
    category: 'mlm',
    founded_year: 1959,
    hq_location: 'Ada, Michigan, USA',
    website: 'https://amway.com',
    products_summary: 'Health supplements (Nutrilite), beauty products (Artistry), home care products, and water/air treatment systems.',
    monthly_cost_min: 5,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level unilevel',
    overall_rating: 2.5,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.5,
    community_rating: 3.5,
    value_rating: 2.5,
    pros: [
      'Established company with 60+ years in business',
      'Wide range of quality products',
      'Global presence in 100+ countries',
      'Strong training and events culture'
    ],
    cons: [
      'Complex compensation plan difficult to understand',
      'High pressure to recruit rather than sell',
      'Expensive products compared to retail alternatives',
      'Low success rate for distributors (less than 1% profit)',
      'Required monthly purchases to stay active',
      'Controversial MLM business model',
      '$62/year registration plus ongoing product purchases'
    ],
    quick_facts: {
      'Founded': '1959',
      'Headquarters': 'Ada, Michigan, USA',
      'Business Model': 'Multi-Level Marketing',
      'Startup Cost': '$62/year + product purchases',
      'Commission Type': 'Multi-level unilevel',
      'Recruiting Required': 'Effectively yes'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'One of the oldest MLM companies in the world',
    faq: [
      {
        question: 'Is Amway a pyramid scheme?',
        answer: 'Amway is legally classified as a legitimate MLM company, not a pyramid scheme. However, critics argue the business model heavily emphasizes recruitment over product sales, and FTC data shows the vast majority of participants lose money.'
      },
      {
        question: 'How much do Amway distributors actually make?',
        answer: 'According to Amway\'s own income disclosure, the average monthly gross income for U.S. registered IBOs was $207. However, after accounting for expenses and product purchases, most distributors operate at a net loss.'
      },
      {
        question: 'What is required to stay active with Amway?',
        answer: 'To remain active and earn commissions, Amway IBOs must maintain a minimum monthly Personal Volume (PV), typically requiring $100-200+ in personal product purchases.'
      },
      {
        question: 'Why do people fail at Amway?',
        answer: 'Most people fail because the MLM model requires extensive recruiting to succeed. Products are often overpriced compared to retail alternatives, making sales difficult. The compensation structure heavily favors those at the top.'
      }
    ]
  },
  {
    id: '3',
    slug: 'herbalife',
    name: 'Herbalife',
    category: 'mlm',
    founded_year: 1980,
    hq_location: 'Los Angeles, California, USA',
    website: 'https://herbalife.com',
    products_summary: 'Nutritional supplements, weight management products, protein shakes, energy drinks, and skin care products.',
    monthly_cost_min: 94,
    monthly_cost_max: 400,
    comp_plan_type: 'Multi-level breakaway',
    overall_rating: 2.0,
    residual_rating: 1.5,
    simplicity_rating: 1.5,
    transparency_rating: 1.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Well-known brand with global recognition',
      'Large product catalog',
      'Active community and events',
      'Some quality nutritional products'
    ],
    cons: [
      'Paid $200M FTC settlement for deceptive practices',
      'Very complex compensation structure',
      'High monthly autoship requirements ($94.10+)',
      'Products significantly overpriced',
      'Heavy emphasis on recruitment',
      'Most participants lose money',
      'Controversial "nutrition club" model',
      'Multiple lawsuits and regulatory actions'
    ],
    quick_facts: {
      'Founded': '1980',
      'Headquarters': 'Los Angeles, California',
      'Business Model': 'Multi-Level Marketing',
      'Startup Cost': '$94.10/month minimum',
      'Commission Type': 'Multi-level breakaway',
      'Recruiting Required': 'Effectively yes',
      'Notable': '$200M FTC settlement (2016)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Controversial nutrition MLM',
    faq: [
      {
        question: 'Is Herbalife a scam?',
        answer: 'Herbalife is a legal MLM company, but paid a $200 million FTC settlement in 2016 for deceiving consumers about income potential. The FTC found most participants made little to no money, with many losing money.'
      },
      {
        question: 'How much does it really cost to join Herbalife?',
        answer: 'The starter kit costs around $94.10, but to maintain active status and qualify for commissions, most distributors spend $200-400+ monthly on products. Annual costs often exceed $2,000-5,000.'
      },
      {
        question: 'What percentage of Herbalife distributors make money?',
        answer: 'According to Herbalife\'s own Statement of Gross Compensation, roughly 50% of distributors earned nothing, and of those who did earn, the median was just a few hundred dollars annually before expenses.'
      },
      {
        question: 'Why is Herbalife controversial?',
        answer: 'Herbalife has faced multiple regulatory actions, including a $200M FTC settlement. Critics argue products are overpriced, the business model primarily rewards recruiting, and income claims are misleading.'
      }
    ]
  },
  {
    id: '4',
    slug: 'amazon-associates',
    name: 'Amazon Associates',
    category: 'affiliate',
    founded_year: 1996,
    hq_location: 'Seattle, Washington, USA',
    website: 'https://affiliate-program.amazon.com',
    products_summary: 'Earn commissions promoting any product sold on Amazon.com - the world\'s largest online marketplace.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Commission-based affiliate',
    overall_rating: 3.5,
    residual_rating: 2.0,
    simplicity_rating: 4.5,
    transparency_rating: 4.0,
    community_rating: 2.5,
    value_rating: 4.0,
    pros: [
      'Completely free to join',
      'Access to millions of products',
      'Trusted Amazon brand increases conversions',
      'Easy to use and implement',
      'Cookie earns commission on any product purchased',
      'Great for content creators and bloggers',
      'No selling or recruitment required'
    ],
    cons: [
      'Low commission rates (1-4% on most categories)',
      'Short 24-hour cookie duration',
      'Commissions cut frequently over the years',
      'Must make 3 sales in first 180 days or account closed',
      'No recurring/residual income',
      'Difficult to scale to significant income',
      'Account can be terminated for violations'
    ],
    quick_facts: {
      'Founded': '1996',
      'Headquarters': 'Seattle, Washington',
      'Business Model': 'Affiliate Marketing',
      'Startup Cost': 'Free',
      'Commission Type': '1-10% per sale',
      'Recruiting Required': 'No',
      'Cookie Duration': '24 hours'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'The original affiliate program',
    faq: [
      {
        question: 'Is Amazon Associates worth it in 2024?',
        answer: 'Amazon Associates can be worth it as a supplementary income for content creators with existing traffic. However, with 1-4% commissions and 24-hour cookies, it\'s difficult to build significant income without massive traffic volumes.'
      },
      {
        question: 'How much do Amazon affiliates make?',
        answer: 'Income varies dramatically. Most casual affiliates earn under $100/month. Successful niche site owners might earn $1,000-10,000/month. Top affiliates with major content sites can earn $50,000+/month.'
      },
      {
        question: 'Why are Amazon affiliate commissions so low?',
        answer: 'Amazon has reduced commissions multiple times because they don\'t need affiliates as much as before. Their brand recognition and Prime membership drive sales regardless of affiliate referrals.'
      },
      {
        question: 'What are the requirements to join Amazon Associates?',
        answer: 'You need a website, app, or YouTube channel with original content. You must make at least 3 qualifying sales within 180 days or your account is closed. You must comply with FTC disclosure requirements.'
      }
    ]
  },
  {
    id: '5',
    slug: 'clickbank',
    name: 'ClickBank',
    category: 'affiliate',
    founded_year: 1998,
    hq_location: 'Boise, Idaho, USA',
    website: 'https://clickbank.com',
    products_summary: 'Digital product marketplace featuring courses, software, ebooks, and health/fitness products from independent vendors.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Commission-based marketplace',
    overall_rating: 3.0,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 2.5,
    value_rating: 3.5,
    pros: [
      'Free to join as an affiliate',
      'High commission rates (50-75% common)',
      'Weekly or bi-weekly payments',
      'Large marketplace of digital products',
      'No approval needed for most products',
      'Some products offer recurring commissions',
      'Long cookie durations (60+ days common)'
    ],
    cons: [
      'Many low-quality or scammy products',
      'Reputation issues due to bad vendors',
      'High refund rates on some products',
      'Marketplace can be overwhelming',
      'Some products make exaggerated claims',
      'Requires careful product vetting',
      'Customer support can be slow'
    ],
    quick_facts: {
      'Founded': '1998',
      'Headquarters': 'Boise, Idaho',
      'Business Model': 'Affiliate Marketplace',
      'Startup Cost': 'Free',
      'Commission Type': '50-75% per sale typical',
      'Recruiting Required': 'No',
      'Cookie Duration': '60+ days (varies by vendor)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'High-commission digital product marketplace',
    faq: [
      {
        question: 'Is ClickBank legitimate?',
        answer: 'ClickBank itself is a legitimate marketplace that has paid out billions in commissions. However, product quality varies widely, and some vendors sell low-quality or misleading products. Careful vetting is essential.'
      },
      {
        question: 'How much can you make with ClickBank?',
        answer: 'With 50-75% commissions common, successful ClickBank affiliates can earn $1,000-50,000+/month. However, most beginners earn little because traffic generation and product selection are challenging.'
      },
      {
        question: 'What are the best ClickBank products to promote?',
        answer: 'Look for products with gravity scores between 20-100, low refund rates, quality sales pages, and products you\'d actually recommend. Health/fitness, make money online, and self-improvement niches are popular.'
      },
      {
        question: 'Why does ClickBank have a bad reputation?',
        answer: 'ClickBank\'s open marketplace has historically allowed low-quality products with exaggerated claims. While ClickBank has improved vendor vetting, the platform\'s reputation still suffers from past issues.'
      }
    ]
  }
];

export const companyUpdates: CompanyUpdate[] = [
  {
    id: '1',
    company_id: '1',
    title: 'Home Business Academy Launches New AI-Powered Funnel Builder',
    summary: 'HBA introduces cutting-edge AI tools to help affiliates create high-converting funnels in minutes.',
    source_url: 'https://onlinegoldrush.com',
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    company_id: '2',
    title: 'Amway Reports Declining Revenue for Third Consecutive Year',
    summary: 'Global MLM giant continues to face headwinds as distributor recruitment slows.',
    source_url: null,
    published_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    company_id: '3',
    title: 'Herbalife Faces New Lawsuit Over Income Claims',
    summary: 'Class action lawsuit alleges company continues to make misleading income representations.',
    source_url: null,
    published_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    company_id: '4',
    title: 'Amazon Associates Commission Rates Remain Stable for 2024',
    summary: 'After years of cuts, Amazon maintains current commission structure.',
    source_url: null,
    published_at: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString()
  }
];

export const userReviews: UserReview[] = [
  {
    id: '1',
    company_id: '1',
    rating: 5,
    title: 'Changed my life!',
    body: 'I joined HBA six months ago with zero online experience. The training is incredible and the community support helped me make my first sale in week two. Now earning $3,000+/month part-time.',
    reviewer_name: 'Sarah M.',
    is_verified: true,
    is_approved: true,
    created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    company_id: '1',
    rating: 5,
    title: 'Finally found something that works',
    body: 'After wasting money on MLMs for years, HBA was a breath of fresh air. No recruiting, no inventory, just straightforward affiliate marketing with amazing training.',
    reviewer_name: 'Mike R.',
    is_verified: true,
    is_approved: true,
    created_at: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    company_id: '2',
    rating: 2,
    title: 'Lost money after 2 years',
    body: 'I worked hard for two years, hit multiple ranks, and still lost money overall. Between autoship and event costs, expenses ate everything. The top earners at meetings make it look easy but they never mention how long they struggled.',
    reviewer_name: 'Jennifer K.',
    is_verified: true,
    is_approved: true,
    created_at: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '4',
    company_id: '3',
    rating: 1,
    title: 'Classic pyramid scheme behavior',
    body: 'Products are overpriced, upline pressure is intense, and the only people making money recruited 10+ years ago. Save your money.',
    reviewer_name: 'David L.',
    is_verified: true,
    is_approved: true,
    created_at: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export const comparisonPages: ComparisonPage[] = [
  {
    id: '1',
    company_id: '2',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Home Business Academy offers a simpler, more affordable alternative to Amway with higher earning potential for most people. While Amway has brand recognition, HBA\'s flat-rate commission structure and low startup costs make it the better choice for those seeking legitimate home business income.',
      winner: 'vs_company',
      comparison_points: [
        {
          category: 'Startup Cost',
          company_value: '$62/year + $100-200/month products',
          vs_company_value: '$10-160/month, no inventory',
          winner: 'vs_company'
        },
        {
          category: 'Commission Structure',
          company_value: 'Complex multi-level (most earn < $200/month)',
          vs_company_value: '100% flat-rate commissions',
          winner: 'vs_company'
        },
        {
          category: 'Recruiting Required',
          company_value: 'Effectively required to profit',
          vs_company_value: 'No recruiting required',
          winner: 'vs_company'
        },
        {
          category: 'Product Quality',
          company_value: 'Good quality, but overpriced',
          vs_company_value: 'Digital training and tools',
          winner: 'tie'
        },
        {
          category: 'Success Rate',
          company_value: 'Less than 1% profit',
          vs_company_value: 'Higher with consistent effort',
          winner: 'vs_company'
        }
      ]
    },
    last_updated: new Date().toISOString()
  },
  {
    id: '2',
    company_id: '3',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Home Business Academy is the clear winner over Herbalife. With no FTC settlements, transparent commissions, and significantly lower costs, HBA provides a sustainable path to online income without the regulatory concerns and high failure rates associated with Herbalife.',
      winner: 'vs_company',
      comparison_points: [
        {
          category: 'Regulatory History',
          company_value: '$200M FTC settlement',
          vs_company_value: 'Clean regulatory record',
          winner: 'vs_company'
        },
        {
          category: 'Monthly Cost',
          company_value: '$94-400+/month required',
          vs_company_value: '$10-160/month optional tiers',
          winner: 'vs_company'
        },
        {
          category: 'Business Model',
          company_value: 'MLM with recruiting focus',
          vs_company_value: 'Affiliate marketing',
          winner: 'vs_company'
        },
        {
          category: 'Transparency',
          company_value: 'History of misleading claims',
          vs_company_value: 'Clear income disclosure',
          winner: 'vs_company'
        }
      ]
    },
    last_updated: new Date().toISOString()
  }
];

// Helper function to get a company by slug
export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find(c => c.slug === slug);
}

// Helper function to get companies by category
export function getCompaniesByCategory(category: string): Company[] {
  return companies.filter(c => c.category === category && c.is_published);
}

// Helper function to get featured companies
export function getFeaturedCompanies(): Company[] {
  return companies.filter(c => c.is_featured && c.is_published);
}

// Helper function to get recently updated companies
export function getRecentlyUpdatedCompanies(limit: number = 6): Company[] {
  return [...companies]
    .filter(c => c.is_published)
    .sort((a, b) => new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime())
    .slice(0, limit);
}

// Helper to get updates for a company
export function getCompanyUpdates(companyId: string): CompanyUpdate[] {
  return companyUpdates
    .filter(u => u.company_id === companyId)
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime());
}

// Helper to get reviews for a company
export function getCompanyReviews(companyId: string): UserReview[] {
  return userReviews
    .filter(r => r.company_id === companyId && r.is_approved)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

// Helper to get comparison for a company
export function getCompanyComparison(companySlug: string): ComparisonPage | undefined {
  const company = getCompanyBySlug(companySlug);
  if (!company) return undefined;
  return comparisonPages.find(cp => cp.company_id === company.id);
}
