import { Company, CompanyUpdate, UserReview, ComparisonPage } from '@/types';
import { extendedCompanies } from './companies-extended';
import { companiesBatchA1 } from './companies-batch-a1';
import { companiesBatchA2 } from './companies-batch-a2';
import { companiesBatchA3 } from './companies-batch-a3';
import { companiesBatchB1 } from './companies-batch-b1';
import { companiesBatchB2 } from './companies-batch-b2';
import { companiesBatchC1a } from './companies-batch-c1a';
import { companiesBatchC1b } from './companies-batch-c1b';
import { companiesBatchC2a } from './companies-batch-c2a';
import { companiesBatchC2b } from './companies-batch-c2b';
import { companiesBatchC3 } from './companies-batch-c3';
import { companiesBatchC4a } from './companies-batch-c4a';
import { companiesBatchC4b } from './companies-batch-c4b';
import { companiesBatchC5 } from './companies-batch-c5';
import { companiesBatchC6 } from './companies-batch-c6';

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
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: true,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z',
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
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z',
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
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z',
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
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '2',
    company_id: '2',
    title: 'Amway Reports Declining Revenue for Third Consecutive Year',
    summary: 'Global MLM giant continues to face headwinds as distributor recruitment slows.',
    source_url: null,
    published_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '3',
    company_id: '3',
    title: 'Herbalife Faces New Lawsuit Over Income Claims',
    summary: 'Class action lawsuit alleges company continues to make misleading income representations.',
    source_url: null,
    published_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '4',
    company_id: '4',
    title: 'Amazon Associates Commission Rates Remain Stable for 2024',
    summary: 'After years of cuts, Amazon maintains current commission structure.',
    source_url: null,
    published_at: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '5',
    company_id: '160',
    title: 'OLSP System Removes Lifetime Membership in 2026 Relaunch',
    summary: 'OLSP System relaunched in early 2026 with significant compensation changes. Wayne Crowe removed the lifetime membership option that many affiliates had built their business around, switching to monthly/annual subscriptions only. Affiliates who relied on high-ticket lifetime commissions are expressing frustration with the abrupt change.',
    source_url: null,
    published_at: new Date('2026-03-01').toISOString(),
    created_at: '2026-01-15T00:00:00.000Z'
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
      verdict: 'Amway (founded 1959) is one of the most established direct sales companies in the world with quality products and global brand recognition. Home Business Academy offers a simpler one-tier model with 80% flat commissions and lower startup costs. For those seeking a straightforward path to residual income without building a team, HBA\'s structure is more accessible.',
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
          company_value: 'Multi-level PV/BV system with team bonuses',
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
          company_value: 'Requires building team volume for higher earnings',
          vs_company_value: '2 referrals = profit, 24 = full-time potential',
          winner: 'vs_company'
        }
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '2',
    company_id: '3',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Herbalife (founded 1980) is a global nutrition company operating in 90+ countries. However, its $200M FTC settlement and required monthly autoship create legitimate concerns. HBA offers a simpler model with 80% commissions, no autoship requirements, and a clean regulatory record.',
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
          company_value: 'Multi-level breakaway with team-building focus',
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
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // doTERRA vs Home Business Academy
  {
    id: '3',
    company_id: '101',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'doTERRA (founded 2008) has built a strong reputation for quality essential oils and a loyal customer base. The structural question is the 100 PV monthly autoship requirement ($100-150/mo) to earn commissions. HBA offers a one-tier model with 80% commissions and no mandatory autoship — a simpler path for those focused on residual income.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Monthly Minimum', company_value: '100 LRP points (~$100-150/mo) required to earn', vs_company_value: '$10-160/month, no earning minimum', winner: 'vs_company' },
        { category: 'Commission Model', company_value: 'Multi-level unilevel with recruiting bonuses', vs_company_value: '80% commissions: $128/mo per full-suite customer', winner: 'vs_company' },
        { category: 'Business Model', company_value: 'MLM — unilevel with recruiting bonuses', vs_company_value: 'One-tier affiliate — earn on direct referrals only', winner: 'vs_company' },
        { category: 'Comp Plan Stability', company_value: 'New comp plan launched 2023', vs_company_value: 'Unchanged since 2016', winner: 'vs_company' },
        { category: 'Product Type', company_value: 'Essential oils (physical, perishable)', vs_company_value: 'Digital training tools (no inventory)', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Young Living vs Home Business Academy
  {
    id: '4',
    company_id: '102',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Young Living (founded 1993) pioneered the essential oils MLM industry and has a devoted customer base. The compensation model requires 100 PV/month to stay active and earn. HBA offers a simpler one-tier model with 80% commissions and no mandatory autoship — a more accessible path for those focused purely on residual income.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Per-Customer Residual', company_value: 'Modest per-customer pay — team building required for scale', vs_company_value: '$128/mo per full-suite customer, paid every Thursday', winner: 'vs_company' },
        { category: 'Monthly Autoship', company_value: '100 PV/month required to stay active and earn', vs_company_value: 'No mandatory autoship', winner: 'vs_company' },
        { category: 'Business Model', company_value: 'Stairstep breakaway MLM', vs_company_value: 'One-tier flat affiliate commissions', winner: 'vs_company' },
        { category: 'Startup Cost', company_value: 'Premium Starter Kit $165+', vs_company_value: 'Start for $10/month', winner: 'vs_company' },
        { category: 'Income Transparency', company_value: 'Complex multi-level compensation structure', vs_company_value: 'Clear math: 2 referrals = profit', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Melaleuca vs Home Business Academy
  {
    id: '5',
    company_id: '129',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Melaleuca (founded 1985) has operated for nearly 40 years with a loyal customer base around eco-friendly wellness products. The structural question is per-customer earnings — the comp plan pays ~$3.50/mo per active customer (7% ongoing). HBA\'s 80% commissions and one-tier model offer higher per-customer income for those focused on direct sales.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Monthly Minimum', company_value: '35 product points (~$55-70/mo) to earn commissions', vs_company_value: 'No monthly purchase required to earn', winner: 'vs_company' },
        { category: 'Per-Customer Residual', company_value: '~$3.50/mo per customer (7% ongoing) in 8-level MLM structure', vs_company_value: '80% commissions: $128/mo per full-suite customer', winner: 'vs_company' },
        { category: 'Company Stability', company_value: 'Founded 1985, 40 years in business', vs_company_value: 'Founded 2016, never changed comp plan', winner: 'tie' },
        { category: 'Business Model', company_value: '8-level MLM organization with Director ranks', vs_company_value: 'One-tier affiliate — income depends on YOU', winner: 'vs_company' },
        { category: 'Products', company_value: 'Physical household/wellness products', vs_company_value: 'Digital training and tools', winner: 'tie' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // USANA vs Home Business Academy
  {
    id: '6',
    company_id: '113',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'USANA (founded 1992) is a publicly traded company with a reputation for high-quality nutritional supplements and a loyal customer base. The structural consideration is the $120-200/month autoship required to earn commissions. HBA\'s $10 entry point and 80% flat commissions make it more accessible for those seeking a simpler path to residual income.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Monthly Minimum', company_value: '$120-200/month autoship required', vs_company_value: '$10/month minimum, no earning requirement', winner: 'vs_company' },
        { category: 'Commission Rate', company_value: 'Complex multi-level points system', vs_company_value: '80% flat residual commissions', winner: 'vs_company' },
        { category: 'Startup Cost', company_value: '$30-150 enrollment + monthly autoship', vs_company_value: '$10/month, no inventory', winner: 'vs_company' },
        { category: 'Business Model', company_value: 'Binary MLM with weekly qualifications', vs_company_value: 'One-tier affiliate, earn on direct referrals', winner: 'vs_company' },
        { category: 'Per-Customer Income', company_value: 'Binary structure splits commissions across legs', vs_company_value: '$128/mo per full-suite customer (24 = $3,072/mo)', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Primerica vs Home Business Academy
  {
    id: '7',
    company_id: '103',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Different models for different goals. Primerica is a licensed insurance career path — legitimate but requires Series 6/63 licensing, cold calling, and recruiting. Home Business Academy is a simpler digital affiliate model with no licensing, no cold calling, and higher earning efficiency per customer. For most home business seekers, HBA is the faster path to income.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Licensing Required', company_value: 'State insurance license required ($200-500)', vs_company_value: 'No licensing required', winner: 'vs_company' },
        { category: 'Business Model', company_value: 'MLM insurance distribution, recruiting-heavy', vs_company_value: 'One-tier digital affiliate', winner: 'vs_company' },
        { category: 'Compensation Model', company_value: 'Multi-level insurance commissions with recruiting bonuses', vs_company_value: '80% residual: $128/mo per full-suite customer', winner: 'vs_company' },
        { category: 'Activity Required', company_value: 'Cold calling, meetings, insurance sales', vs_company_value: 'Online marketing, content creation', winner: 'tie' },
        { category: 'Comp Plan Stability', company_value: 'Multi-level, recruiting required for promotion', vs_company_value: 'Unchanged since 2016', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Mary Kay vs Home Business Academy
  {
    id: '8',
    company_id: '104',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Mary Kay (founded 1963) is one of the most recognized names in direct sales with over 60 years of history and a devoted consultant base. The model requires purchasing inventory upfront. HBA offers a digital alternative with no inventory, 80% commissions, and a simpler one-tier structure for those who prefer online marketing.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Inventory Required', company_value: '$100 starter kit + ongoing inventory purchases', vs_company_value: 'No physical inventory', winner: 'vs_company' },
        { category: 'Commission Structure', company_value: 'Stairstep breakaway MLM', vs_company_value: 'Flat 80% one-tier residual', winner: 'vs_company' },
        { category: 'Per-Customer Model', company_value: 'Retail margin on cosmetics sales plus team bonuses', vs_company_value: '2 referrals = in profit; 24 = $3,072/month', winner: 'vs_company' },
        { category: 'Startup Cost', company_value: '$100 starter kit + ongoing product orders', vs_company_value: '$10-160/month, no inventory', winner: 'vs_company' },
        { category: 'Product Model', company_value: 'Physical cosmetics, inventory-based selling', vs_company_value: 'Digital tools and training', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // MONAT vs Home Business Academy
  {
    id: '9',
    company_id: '107',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'MONAT has faced thousands of BBB complaints about product issues and multiple class action lawsuits — legitimate concerns for prospective distributors. HBA offers a cleaner alternative with 80% commissions, zero lawsuits, no product liability issues, and no recruiting requirement.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Legal Issues', company_value: 'Multiple class action lawsuits, BBB complaints', vs_company_value: 'No FTC actions, no lawsuits', winner: 'vs_company' },
        { category: 'Business Structure', company_value: 'MLM with recruiting-focused compensation', vs_company_value: '$128/mo per full-suite customer', winner: 'vs_company' },
        { category: 'Monthly Cost', company_value: '$30-100/month product requirement', vs_company_value: '$10-160/month, no autoship', winner: 'vs_company' },
        { category: 'Business Model', company_value: 'MLM with recruiting income', vs_company_value: 'One-tier affiliate, no recruiting needed', winner: 'vs_company' },
        { category: 'Product Type', company_value: 'Physical hair care (shipping, returns)', vs_company_value: 'Digital products (no inventory)', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Isagenix vs Home Business Academy
  {
    id: '10',
    company_id: '106',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Isagenix has built a community around health and wellness products since 2002. The structural consideration is the $100-150/month autoship requirement to qualify for commissions. HBA offers a digital model with 80% flat commissions and no mandatory autoship — a simpler path for those focused on residual income.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Monthly Autoship', company_value: '100-150 BV/month required to earn', vs_company_value: 'No autoship required', winner: 'vs_company' },
        { category: 'Commission Rate', company_value: 'Binary + team commissions, complex structure', vs_company_value: '80% flat residual commissions', winner: 'vs_company' },
        { category: 'Entry Cost', company_value: '$200-500 enrollment packs', vs_company_value: '$10/month starter', winner: 'vs_company' },
        { category: 'Income per Customer', company_value: 'Binary structure splits commissions', vs_company_value: '$128/mo per full-suite customer', winner: 'vs_company' },
        { category: 'Comp Plan History', company_value: 'Multiple comp plan changes over the years', vs_company_value: 'Unchanged since 2016', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // It Works vs Home Business Academy
  {
    id: '11',
    company_id: '131',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'It Works! is known for the body wrap product and has an active distributor community. The model requires monthly autoship ($80-200/mo) and emphasizes team building. HBA offers a one-tier digital affiliate model with 80% commissions and no inventory — a simpler structure for those focused on direct sales.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Monthly Requirement', company_value: '$80-200/month autoship to stay active', vs_company_value: '$10-160/month, no autoship', winner: 'vs_company' },
        { category: 'Business Model', company_value: 'Binary MLM with recruiting emphasis', vs_company_value: 'One-tier digital affiliate', winner: 'vs_company' },
        { category: 'Inventory', company_value: 'Physical products (wraps, supplements)', vs_company_value: 'Digital products, no inventory', winner: 'vs_company' },
        { category: 'Comp Plan Stability', company_value: 'Changed multiple times', vs_company_value: 'Unchanged since 2016', winner: 'vs_company' },
        { category: 'Entry Cost', company_value: '$99-500 starter kit', vs_company_value: '$10/month', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // ClickBank vs Home Business Academy
  {
    id: '12',
    company_id: '5',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Both are legitimate affiliate platforms, but they serve different purposes. ClickBank is a marketplace for one-time digital product sales with highly variable commission rates and quality. Home Business Academy offers recurring residual commissions on subscription products — providing stable monthly income rather than unpredictable one-time payouts.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Income Type', company_value: 'Mostly one-time commissions', vs_company_value: 'Recurring monthly residual commissions', winner: 'vs_company' },
        { category: 'Product Quality', company_value: 'Variable — from excellent to low-quality', vs_company_value: 'Consistent: personal dev, funnels, training tools', winner: 'vs_company' },
        { category: 'Commission Rate', company_value: '20-75% (varies by vendor)', vs_company_value: '80% flat residual', winner: 'vs_company' },
        { category: 'Per-Customer Value', company_value: 'One-time payout, no residual', vs_company_value: '$128/month recurring per full-suite customer', winner: 'vs_company' },
        { category: 'Done-For-You System', company_value: 'No — must build own funnels/email sequences', vs_company_value: 'Full turnkey system included', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Wealthy Affiliate vs Home Business Academy
  {
    id: '13',
    company_id: '153',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Both target online marketers, but with different models. Wealthy Affiliate focuses on training and building niche affiliate sites — a slow, long-term SEO strategy. Home Business Academy provides a turnkey system, done-for-you funnels, and 80% residual commissions — a faster path to consistent monthly income for most people.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Time to Income', company_value: 'Months to years of SEO work before income', vs_company_value: 'Turnkey system, potential income from day one', winner: 'vs_company' },
        { category: 'Commission Model', company_value: 'Affiliate commissions on own content', vs_company_value: '80% residual on subscription products', winner: 'vs_company' },
        { category: 'Done-For-You', company_value: 'Training only — must build everything yourself', vs_company_value: 'Full funnel, email sequence, chatbot included', winner: 'vs_company' },
        { category: 'Monthly Cost', company_value: '$49-99/month membership', vs_company_value: '$10-160/month with income potential built in', winner: 'vs_company' },
        { category: 'Community', company_value: 'Large active community, good training', vs_company_value: 'Smaller but focused on affiliate income', winner: 'tie' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Legendary Marketer vs Home Business Academy
  {
    id: '14',
    company_id: '157',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Important update: Legendary Marketer officially closed on February 16, 2026. Home Business Academy remains the active, stable choice. Even before the closure, HBA offered a more straightforward 80% residual commission model versus Legendary\'s high-ticket affiliate structure. HBA has never missed a payout and has never changed its comp plan.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Current Status', company_value: 'CLOSED — shut down February 16, 2026', vs_company_value: 'Active since 2016, never missed a commission', winner: 'vs_company' },
        { category: 'Commission Model', company_value: 'High-ticket one-time commissions (while active)', vs_company_value: '80% residual monthly commissions', winner: 'vs_company' },
        { category: 'Income Stability', company_value: 'One-time payouts, then nothing', vs_company_value: '$128/mo recurring per full-suite customer', winner: 'vs_company' },
        { category: 'Business Risk', company_value: 'Company closed with no warning', vs_company_value: 'Comp plan unchanged since 2016', winner: 'vs_company' },
        { category: 'Entry Cost', company_value: '$2,500-30,000 courses (while active)', vs_company_value: '$10-160/month', winner: 'vs_company' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // eXp Realty vs Home Business Academy
  {
    id: '15',
    company_id: '195',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Different audiences, different models. eXp Realty is a cloud-based real estate brokerage — great if you\'re a licensed agent. Home Business Academy is a digital affiliate program requiring no license. For people without a real estate license looking for home-based income, HBA is far more accessible and faster to start.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'License Required', company_value: 'Real estate license required in your state', vs_company_value: 'No license required', winner: 'vs_company' },
        { category: 'Monthly Fee', company_value: '$85/month + transaction fees', vs_company_value: '$10-160/month', winner: 'vs_company' },
        { category: 'Revenue Share Model', company_value: 'Revenue share on agent recruits (MLM-like)', vs_company_value: 'One-tier affiliate, no recruiting needed', winner: 'vs_company' },
        { category: 'Time to Start', company_value: 'Weeks-months to get licensed', vs_company_value: 'Start same day', winner: 'vs_company' },
        { category: 'Residual Potential', company_value: 'High if you recruit top producing agents', vs_company_value: '$128/mo per full-suite customer, all from your effort', winner: 'tie' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Rodan + Fields vs Home Business Academy
  {
    id: '16',
    company_id: '110',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Home Business Academy wins clearly. Rodan + Fields pivoted away from MLM in September 2024 — former consultants lost their multi-level residual income overnight. HBA\'s comp plan has never changed since 2016. This comparison illustrates exactly why the one-tier model matters: your income depends on your effort, not a company decision.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Business Model Change', company_value: 'Ended MLM model Sept 2024 — consultants lost downline income', vs_company_value: 'Comp plan unchanged since 2016', winner: 'vs_company' },
        { category: 'Monthly Cost', company_value: '$80-200/month product requirement', vs_company_value: '$10-160/month, no autoship', winner: 'vs_company' },
        { category: 'Income Stability', company_value: 'Multi-level income eliminated in 2024', vs_company_value: 'Paid every Thursday since 2016', winner: 'vs_company' },
        { category: 'Current Model', company_value: 'Single-level affiliate now (post-pivot)', vs_company_value: 'One-tier residual — original model since founding', winner: 'vs_company' },
        { category: 'Products', company_value: 'Dermatologist skincare regimens', vs_company_value: 'Digital training and marketing tools', winner: 'tie' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  },
  // Nu Skin vs Home Business Academy
  {
    id: '17',
    company_id: '105',
    vs_company_name: 'Home Business Academy',
    vs_company_slug: 'home-business-academy',
    content: {
      verdict: 'Nu Skin (founded 1984) is a publicly traded company with a 40-year track record in anti-aging products. The model requires $50-150/month autoship and has faced FTC and international regulatory actions. HBA offers a simpler one-tier model with 80% commissions, no regulatory issues, and a never-changed comp plan.',
      winner: 'vs_company',
      comparison_points: [
        { category: 'Regulatory History', company_value: 'FTC settlements, China government fines', vs_company_value: 'No regulatory actions', winner: 'vs_company' },
        { category: 'Monthly Autoship', company_value: '$50-150/month to maintain active status', vs_company_value: 'No mandatory autoship', winner: 'vs_company' },
        { category: 'Commission Structure', company_value: 'Complex stairstep breakaway MLM', vs_company_value: 'Flat 80% one-tier residual', winner: 'vs_company' },
        { category: 'Comp Plan Changes', company_value: 'Multiple revisions over the years', vs_company_value: 'Unchanged since 2016', winner: 'vs_company' },
        { category: 'Products', company_value: 'Anti-aging skincare and supplements', vs_company_value: 'Digital training and business tools', winner: 'tie' },
      ]
    },
    last_updated: '2026-01-15T00:00:00.000Z'
  }
];

// Helper function to get a company by slug
export const allCompanies: Company[] = [
  ...companies,
  ...extendedCompanies,
  ...companiesBatchA1,
  ...companiesBatchA2,
  ...companiesBatchA3,
  ...companiesBatchB1,
  ...companiesBatchB2,
  ...companiesBatchC1a,
  ...companiesBatchC1b,
  ...companiesBatchC2a,
  ...companiesBatchC2b,
  ...companiesBatchC3,
  ...companiesBatchC4a,
  ...companiesBatchC4b,
  ...companiesBatchC5,
  ...companiesBatchC6,
];

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

export function getRecentlyAddedCompanies(limit: number = 6): Company[] {
  return [...allCompanies]
    .filter(c => c.is_published)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
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

// All comparison slugs for internal linking
const allComparisonSlugs: string[] = [
  // Existing HBA comparisons (derived from comparisonPages)
  'amway-vs-home-business-academy',
  'herbalife-vs-home-business-academy',
  'doterra-vs-home-business-academy',
  'young-living-vs-home-business-academy',
  'melaleuca-vs-home-business-academy',
  'usana-health-sciences-vs-home-business-academy',
  'primerica-vs-home-business-academy',
  'mary-kay-vs-home-business-academy',
  'monat-global-vs-home-business-academy',
  'isagenix-vs-home-business-academy',
  'it-works-vs-home-business-academy',
  'clickbank-vs-home-business-academy',
  'wealthy-affiliate-vs-home-business-academy',
  'legendary-marketer-vs-home-business-academy',
  'exp-realty-vs-home-business-academy',
  'rodan-fields-vs-home-business-academy',
  'nu-skin-enterprises-vs-home-business-academy',
  // MLM vs MLM comparison pages
  'doterra-vs-young-living',
  'young-living-vs-doterra',
  'mary-kay-vs-avon-products',
  'monat-global-vs-rodan-fields',
  'arbonne-international-vs-monat-global',
  'nu-skin-enterprises-vs-arbonne-international',
  'herbalife-vs-isagenix',
  'isagenix-vs-amway',
  'plexus-worldwide-vs-herbalife',
  'usana-health-sciences-vs-nu-skin-enterprises',
  'four-life-research-vs-usana-health-sciences',
  'lularoe-vs-mary-kay',
  'scentsy-vs-pampered-chef',
  'forever-living-products-vs-herbalife',
  'tupperware-vs-pampered-chef',
  'amway-vs-herbalife',
  'herbalife-vs-amway',
  'amway-vs-avon-products',
  'mary-kay-vs-herbalife',
  'doterra-vs-herbalife',
  'amway-vs-clickbank',
  'herbalife-vs-amazon-associates',
  'doterra-vs-amazon-associates',
  'monat-global-vs-amazon-associates',
  'mary-kay-vs-clickbank',
];

// Helper to convert slug to title case (e.g., "home-business-academy" → "Home Business Academy")
function slugToTitleCase(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to get all comparison pages that include a given company
export function getCompanyComparisons(companySlug: string): { slug: string; otherCompanyName: string }[] {
  const comparisons: { slug: string; otherCompanyName: string }[] = [];

  for (const compSlug of allComparisonSlugs) {
    const parts = compSlug.split('-vs-');
    if (parts.length !== 2) continue;

    const [company1Slug, company2Slug] = parts;

    if (company1Slug === companySlug) {
      comparisons.push({
        slug: compSlug,
        otherCompanyName: slugToTitleCase(company2Slug),
      });
    } else if (company2Slug === companySlug) {
      comparisons.push({
        slug: compSlug,
        otherCompanyName: slugToTitleCase(company1Slug),
      });
    }
  }

  return comparisons;
}
