import { Company, CompanyUpdate, UserReview, ComparisonPage } from '@/types';
import { extendedCompanies } from './companies-extended';
import { companiesBatchA2 } from './companies-batch-a2';
import { companiesBatchA3 } from './companies-batch-a3';
import { companiesBatchA1 } from './companies-batch-a1';

export const companies: Company[] = [
  {
    id: '1',
    slug: 'home-business-academy',
    name: 'Home Business Academy (HBA)',
    category: 'affiliate',
    founded_year: 2016,
    hq_location: 'United States',
    website: 'https://onlinegoldrush.com',
    products_summary: 'Personal development, funnel building, traffic training, and financial literacy tools for home business owners and affiliate marketers.',
    monthly_cost_min: 10,
    monthly_cost_max: 160,
    comp_plan_type: 'One-tier flat-rate affiliate (80% commissions)',
    overall_rating: 4.8,
    residual_rating: 5.0,
    simplicity_rating: 4.8,
    transparency_rating: 4.9,
    community_rating: 4.7,
    value_rating: 4.9,
    pros: [
      '80% commissions — you earn more than the company keeps',
      'Paid every Thursday without fail since 2016 (never missed a payment)',
      'One-tier model: income depends on YOU, not a downline',
      'Comp plan has never changed since 2016',
      'Start for as little as $10/month',
      '2 referrals = in profit; 24 full-suite customers = $3,072+/month',
      'Done-for-you Turnkey system: ebook, landing page, sales page, AI chatbot, follow-up emails',
      'Weekly payouts via iPayout (Direct Deposit, Check, PrePaid Card, or Bitcoin)',
      'No rank requirements, no production quotas',
      'Donates to Feed My Starving Children (400,000+ days of meals)'
    ],
    cons: [
      'Must own a product to earn commission on it (qualified sale rule)',
      'Requires consistent marketing effort — not passive without work'
    ],
    quick_facts: {
      'Founded': '2016',
      'Founders': 'Paul Hutchings & Mike Hobbs',
      'Business Model': 'One-tier affiliate marketing',
      'Monthly Cost': '$10 – $160/month',
      'Commission Rate': '80% on subscription products',
      'Pay Schedule': 'Every Thursday via iPayout',
      'Comp Plan Changes': 'Zero since founding in 2016',
      'Income Model': 'One-tier — earn on your direct referrals'
    },
    last_updated: new Date().toISOString(),
    is_featured: true,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'The highest-paying one-tier affiliate program in the industry',
    faq: [
      {
        question: 'Is Home Business Academy a pyramid scheme?',
        answer: 'No. HBA is a one-tier affiliate program. You earn commissions on products you sell directly — there is no multi-level structure. You do not earn on anyone your referrals recruit. Income comes from product sales, not recruitment.'
      },
      {
        question: 'How much can you earn with Home Business Academy?',
        answer: "At 80% commissions, you earn $8/mo per Let's Goal customer, $20/mo per Funnel Builder customer, and $100/mo per Premium customer. With 24 full-suite customers, that's $3,072/month in residual income. Results depend on your marketing effort and consistency."
      },
      {
        question: 'What is the HBA compensation plan?',
        answer: 'HBA pays 80% commissions on a one-tier structure. You earn on your personal referrals only — no multi-level math. You must own the product to earn commission on it. Commissions are paid every Thursday.'
      },
      {
        question: 'Has HBA ever changed its compensation plan?',
        answer: 'No. The compensation plan has remained identical since HBA was founded in 2016. Paul and Mike built HBA specifically because they were burned by 4 previous companies that changed their comp plans.'
      },
      {
        question: 'What do you get with a Home Business Academy membership?',
        answer: "Depending on your tier: personal development tools (Let's Goal), funnel building (Funnel Builder), traffic and conversion training plus live coaching (Premium), and financial literacy education (FLA). All tiers include access to the Turnkey Residual System — a done-for-you marketing system with ebook, landing page, sales page, AI chatbot, and follow-up email sequences."
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
    products_summary: 'One of the world\'s largest direct sales companies selling health supplements (Nutrilite), beauty products (Artistry), home care, and water/air treatment systems. Privately held by the DeVos and Van Andel families. $7.7 billion revenue.',
    monthly_cost_min: 0,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level unilevel with PV/BV qualification system',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 1.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Founded 1959 — one of the most established direct sales companies',
      'Global presence in 100+ countries with ~$7.7 billion revenue',
      'No cost to register as an IBO',
      'Nutrilite is the world\'s #1 selling nutritional supplement brand'
    ],
    cons: [
      '2024 average annual earnings for U.S. IBOs: $723 before expenses (per Amway income disclosure)',
      '40% of U.S. IBOs received zero payments in 2024',
      'Notoriously complex PV/BV compensation system',
      '$62/year annual renewal fee plus ongoing product purchase expectations',
      'Strong recruitment culture — meaningful income requires large downline'
    ],
    quick_facts: {
      'Founded': '1959',
      'Headquarters': 'Ada, Michigan, USA',
      'Annual Revenue': '~$7.7 billion',
      '2024 Avg. Earnings': '$723/year before expenses (per Amway)',
      'Annual IBO Fee': '$62 renewal'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'One of the oldest MLM companies in the world',
    faq: [
      {
        question: 'Is Amway a pyramid scheme?',
        answer: 'Amway is legally classified as a legitimate MLM company, not a pyramid scheme. However, critics argue the business model heavily emphasizes recruitment over product sales, and income disclosure data shows the vast majority of participants earn very little.'
      },
      {
        question: 'How much do Amway distributors actually make?',
        answer: 'According to Amway\'s income disclosure, 80% of IBOs earn less than $2,000/year. After accounting for expenses, product purchases, and the $62/year registration fee, most distributors operate at a net loss.'
      },
      {
        question: 'What is required to stay active with Amway?',
        answer: 'To remain active and earn commissions, Amway IBOs must maintain a minimum monthly Personal Volume (PV), typically requiring $100-200 in personal product purchases each month.'
      },
      {
        question: 'Why do people fail at Amway?',
        answer: 'Most people fail because the MLM model requires extensive recruiting to succeed. Products are often overpriced compared to retail alternatives, making sales difficult. The complex PV/BV compensation structure heavily favors those at the top.'
      }
    ]
  },
  {
    id: '3',
    slug: 'herbalife',
    name: 'Herbalife Nutrition',
    category: 'mlm',
    founded_year: 1980,
    hq_location: 'Los Angeles, California, USA',
    website: 'https://herbalife.com',
    products_summary: 'Nutritional supplements, weight management products, protein shakes, energy drinks, and skin care products.',
    monthly_cost_min: 94,
    monthly_cost_max: 400,
    comp_plan_type: 'Multi-level breakaway',
    overall_rating: 1.8,
    residual_rating: 1.5,
    simplicity_rating: 1.4,
    transparency_rating: 1.3,
    community_rating: 2.8,
    value_rating: 1.8,
    pros: [
      'Well-known brand with global recognition',
      'Large product catalog',
      'Active community and events',
      'Some quality nutritional products'
    ],
    cons: [
      'Paid $200M FTC settlement in 2016 for deceptive practices',
      'Very complex compensation structure',
      'Minimum autoship of $94.10/month to stay active',
      'Products significantly overpriced',
      'Heavy emphasis on recruitment',
      '~50% of distributors earned $0 according to income disclosure',
      'Controversial "nutrition club" model',
      'Multiple lawsuits and regulatory actions'
    ],
    quick_facts: {
      'Founded': '1980',
      'Headquarters': 'Los Angeles, California',
      'Business Model': 'Multi-Level Marketing',
      'Minimum Autoship': '$94.10/month to stay active',
      'Commission Type': 'Multi-level breakaway',
      'Recruiting Required': 'Effectively yes',
      'FTC Settlement': '$200 million (2016)',
      'Income Reality': '~50% of distributors earned $0'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Controversial nutrition MLM',
    faq: [
      {
        question: 'Is Herbalife a scam?',
        answer: 'Herbalife (now Herbalife Nutrition) is a legal MLM company, but paid a $200 million FTC settlement in 2016 for deceiving consumers about income potential. The FTC found most participants made little to no money, with many losing money.'
      },
      {
        question: 'How much does it really cost to join Herbalife?',
        answer: 'The minimum autoship to stay active is $94.10/month. However, to maintain active status and qualify for commissions, most distributors spend $200-400+ monthly on products. Annual costs often exceed $2,000-5,000.'
      },
      {
        question: 'What percentage of Herbalife distributors make money?',
        answer: 'According to Herbalife\'s own income disclosure, approximately 50% of distributors earned $0. Of those who did earn, the median was just a few hundred dollars annually before expenses.'
      },
      {
        question: 'Why is Herbalife controversial?',
        answer: 'Herbalife has faced multiple regulatory actions, including a $200M FTC settlement in 2016. Critics argue products are overpriced, the business model primarily rewards recruiting, and income claims are misleading. The company rebranded as "Herbalife Nutrition" but concerns remain.'
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
    overall_rating: 3.2,
    residual_rating: 1.8,
    simplicity_rating: 4.5,
    transparency_rating: 4.0,
    community_rating: 2.5,
    value_rating: 3.5,
    pros: [
      'Completely free to join',
      'Access to millions of products',
      'Trusted Amazon brand increases conversions',
      'Easy to use and implement',
      'Cookie earns commission on any product purchased',
      'Great for content creators and bloggers',
      'No selling or recruitment required',
      'No monthly requirements'
    ],
    cons: [
      'Low commission rates (1-20%, but most categories are 1-4%)',
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
      'Commission Rates': '1-20% (most categories 1-4%)',
      'Recruiting Required': 'No',
      'Cookie Duration': '24 hours',
      'Monthly Requirement': 'None'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'The original affiliate program',
    faq: [
      {
        question: 'Is Amazon Associates worth it?',
        answer: 'Amazon Associates can be worth it as a supplementary income for content creators with existing traffic. However, with 1-4% commissions on most categories and 24-hour cookies, it\'s difficult to build significant income without massive traffic volumes.'
      },
      {
        question: 'How much do Amazon affiliates make?',
        answer: 'Income varies dramatically. Most casual affiliates earn under $100/month. Successful niche site owners might earn $1,000-10,000/month. Top affiliates with major content sites can earn $50,000+/month.'
      },
      {
        question: 'What are Amazon Associates commission rates?',
        answer: 'Commission rates range from 1% to 20% depending on the product category. However, most popular categories like electronics and general products are in the 1-4% range. Some niche categories like luxury beauty can reach 10-20%.'
      },
      {
        question: 'What are the requirements to join Amazon Associates?',
        answer: 'You need a website, app, or YouTube channel with original content. You must make at least 3 qualifying sales within 180 days or your account is closed. You must comply with FTC disclosure requirements. It is completely free to join with no monthly requirements.'
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
      'High commission rates (50-75% typical on digital products)',
      'Weekly or bi-weekly payments',
      'Large marketplace of digital products',
      'No approval needed for most products',
      'Some products offer recurring commissions',
      'Cookie duration varies by vendor (often 60 days)'
    ],
    cons: [
      'Many low-quality or scammy products',
      'Reputation issues due to bad vendors',
      'High refund rates on some products',
      'Marketplace can be overwhelming',
      'Some products make exaggerated claims',
      'Requires careful product vetting',
      '$49.95 one-time activation fee to sell as a vendor'
    ],
    quick_facts: {
      'Founded': '1998',
      'Headquarters': 'Boise, Idaho',
      'Business Model': 'Affiliate Marketplace',
      'Affiliate Cost': 'Free to join',
      'Vendor Cost': '$49.95 one-time activation fee',
      'Commission Type': '50-75% per sale typical',
      'Recruiting Required': 'No',
      'Cookie Duration': 'Varies by vendor (often 60 days)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'High-commission digital product marketplace',
    faq: [
      {
        question: 'Is ClickBank legitimate?',
        answer: 'ClickBank itself is a legitimate marketplace founded in 1998 in Boise, Idaho that has paid out billions in commissions. However, product quality varies widely, and some vendors sell low-quality or misleading products. Careful vetting is essential.'
      },
      {
        question: 'How much does it cost to use ClickBank?',
        answer: 'It is completely free to join ClickBank as an affiliate. If you want to sell your own products as a vendor, there is a one-time $49.95 activation fee.'
      },
      {
        question: 'How much can you make with ClickBank?',
        answer: 'With 50-75% commissions typical on digital products, successful ClickBank affiliates can earn $1,000-50,000+/month. However, most beginners earn little because traffic generation and product selection are challenging.'
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
    title: 'HBA Launches Built-In Email Marketing Tool',
    summary: 'Home Business Academy released its own integrated emailer — pay-as-you-go credits, 300 free emails to start, no domain setup required, and Email Alchemist AI writing tool included for Premium members.',
    source_url: 'https://thehba.app',
    published_at: new Date('2026-03-17').toISOString(),
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
  },
  {
    id: '5',
    company_id: '160',
    title: 'OLSP System Removes Lifetime Membership in 2026 Relaunch',
    summary: 'OLSP System relaunched in early 2026 with significant compensation changes. Wayne Crowe removed the lifetime membership option that many affiliates had built their business around, switching to monthly/annual subscriptions only. Affiliates who relied on high-ticket lifetime commissions are expressing frustration with the abrupt change.',
    source_url: null,
    published_at: new Date('2026-03-01').toISOString(),
    created_at: new Date().toISOString()
  }
];

export const userReviews: UserReview[] = [];

export const comparisonPages: ComparisonPage[] = [
  {
    id: '1',
    company_id: '2',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Home Business Academy offers a simpler, more affordable alternative to Amway with higher earning potential for most people. While Amway has brand recognition, HBA\'s 80% flat-rate commission structure and low startup costs make it the better choice for those seeking legitimate home business income.',
      winner: 'vs_company',
      comparison_points: [
        {
          category: 'Startup Cost',
          company_value: '$62/year IBO fee + $100-200/month products',
          vs_company_value: '$10-160/month, no inventory',
          winner: 'vs_company'
        },
        {
          category: 'Commission Structure',
          company_value: 'Complex multi-level PV/BV (avg ~$207/month gross)',
          vs_company_value: '80% flat-rate residual ($128/mo per customer)',
          winner: 'vs_company'
        },
        {
          category: 'Recruiting Required',
          company_value: 'Effectively required to profit',
          vs_company_value: 'One-tier: earn on your direct referrals',
          winner: 'vs_company'
        },
        {
          category: 'Product Quality',
          company_value: 'Good quality, but overpriced',
          vs_company_value: 'Digital training and tools',
          winner: 'tie'
        },
        {
          category: 'Path to Profit',
          company_value: 'Complex, most lose money',
          vs_company_value: '2 referrals = profit, 24 = full-time potential',
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
      verdict: 'Home Business Academy is the clear winner over Herbalife. With no FTC settlements, transparent 80% commissions, and significantly lower costs, HBA provides a sustainable path to online income without the regulatory concerns and high failure rates associated with Herbalife.',
      winner: 'vs_company',
      comparison_points: [
        {
          category: 'Regulatory History',
          company_value: '$200M FTC settlement (2016)',
          vs_company_value: 'Clean regulatory record',
          winner: 'vs_company'
        },
        {
          category: 'Monthly Cost',
          company_value: '$94.10+ autoship required to stay active',
          vs_company_value: '$10-160/month optional tiers',
          winner: 'vs_company'
        },
        {
          category: 'Business Model',
          company_value: 'MLM with recruiting focus (~50% earn $0)',
          vs_company_value: 'One-tier affiliate (80% residual commissions)',
          winner: 'vs_company'
        },
        {
          category: 'Transparency',
          company_value: 'History of misleading claims',
          vs_company_value: 'Clear model: 2 referrals = profit',
          winner: 'vs_company'
        }
      ]
    },
    last_updated: new Date().toISOString()
  }
];

// Helper function to get a company by slug
export const allCompanies: Company[] = [...companies, ...extendedCompanies, ...companiesBatchA2, ...companiesBatchA3, ...companiesBatchA1];

export function getCompanyBySlug(slug: string): Company | undefined {
  return allCompanies.find(c => c.slug === slug);
}

// Helper function to get companies by category
export function getCompaniesByCategory(category: string): Company[] {
  return allCompanies.filter(c => c.category === category && c.is_published);
}

// Helper function to get featured companies
export function getFeaturedCompanies(): Company[] {
  return allCompanies.filter(c => c.is_featured && c.is_published);
}

// Helper function to get recently updated companies
export function getRecentlyUpdatedCompanies(limit: number = 6): Company[] {
  return [...allCompanies]
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
