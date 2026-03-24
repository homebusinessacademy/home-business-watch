import { Company } from '@/types';

export const extendedCompanies: Company[] = [
  // --- MLM COMPANIES ---
  {
    id: '101',
    slug: 'doterra',
    name: 'doTERRA',
    category: 'mlm',
    founded_year: 2008,
    hq_location: 'Pleasant Grove, Utah, USA',
    website: 'https://doterra.com',
    products_summary: 'Essential oils, supplements, and personal care products sold through a network of independent Wellness Advocates. One of the largest MLM companies in the world.',
    monthly_cost_min: 35,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level unilevel with rank advancement',
    overall_rating: 2.5,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 3.5,
    value_rating: 2.5,
    pros: [
      'High-quality, popular essential oil products with strong consumer demand',
      'Large and passionate community of advocates',
      'Strong brand recognition — doTERRA is the world\'s largest essential oil company',
      'Products can be sold retail without requiring downline'
    ],
    cons: [
      'Compensation structure requires building substantial customer base for meaningful returns',
      'Required monthly Loyalty Rewards order to maintain rank qualification',
      'Required monthly Loyalty Rewards order (~$35-150/mo) to maintain eligibility',
      'Products priced significantly higher than comparable retail alternatives',
      'Heavy emphasis on recruiting to advance ranks and earn meaningful income'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Pleasant Grove, Utah',
      'Business Model': 'Multi-level marketing',
      'Monthly Autoship': '$35–$150+ to qualify',
      'Qualification': '100 PV monthly Loyalty Rewards'
    },
    faq: [
      {
        question: 'Is doTERRA a pyramid scheme?',
        answer: 'doTERRA is a legal MLM company, not a pyramid scheme. The company has been in business since 2008 and is the world\'s largest essential oil company. As with most MLMs, meaningful income requires building a substantial customer base or team.'
      },
      {
        question: 'How much do doTERRA Wellness Advocates earn?',
        answer: 'Earnings depend on building a customer base and maintaining sales volume. doTERRA offers multiple compensation streams including retail profit (25%), Fast Start bonuses, and unilevel commissions. Higher ranks unlock additional bonuses.'
      },
      {
        question: 'What is the monthly cost to be a doTERRA Wellness Advocate?',
        answer: 'There is no mandatory monthly fee, but maintaining a Loyalty Rewards order (typically $35–$150+/month) is strongly encouraged and required for rank qualification and maximum commission eligibility.'
      },
      {
        question: 'Are doTERRA essential oils good quality?',
        answer: 'doTERRA uses CPTG (Certified Pure Tested Grade) testing and their products are generally well-regarded for quality. However, comparable quality essential oils are available at significantly lower prices through retail channels.'
      }
    ],
    tagline: 'World\'s largest essential oil MLM company',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '102',
    slug: 'young-living',
    name: 'Young Living Essential Oils',
    category: 'mlm',
    founded_year: 1993,
    hq_location: 'Lehi, Utah, USA',
    website: 'https://youngliving.com',
    products_summary: 'Essential oils, supplements, personal care, and household products sold through a network of independent Brand Partners. Founded by D. Gary Young, one of the original essential oil MLMs.',
    monthly_cost_min: 35,
    monthly_cost_max: 100,
    comp_plan_type: 'Multi-level unilevel',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Pioneer in the essential oil industry — founded 1993',
      'Owns its own farms for seed-to-seal quality control',
      'Large, loyal customer base',
      'Wide product catalog beyond just oils'
    ],
    cons: [
      'Compensation structure requires significant sales volume for meaningful returns',
      'Required monthly Essential Rewards order (~$35-100/mo)',
      'Products significantly overpriced vs. retail equivalents',
      'Aggressive recruiting culture reported by former members',
      'FDA has issued warning letters regarding health claims by distributors'
    ],
    quick_facts: {
      'Founded': '1993',
      'Headquarters': 'Lehi, Utah',
      'Business Model': 'Multi-level marketing',
      'Monthly Requirement': '~$35–$100 Essential Rewards order',
      'Qualification': '100 PV monthly Essential Rewards'
    },
    faq: [
      {
        question: 'Is Young Living a scam?',
        answer: 'Young Living is a legitimate MLM company that has been in business since 1993. They own their own farms and maintain seed-to-seal quality control. As with most MLMs, meaningful income requires building a substantial customer base.'
      },
      {
        question: 'Young Living vs doTERRA — which is better?',
        answer: 'Both are large essential oil MLMs with similar business models, pricing, and income outcomes. Young Living is older (founded 1993) and owns its farms; doTERRA is larger by revenue. Product quality is comparable.'
      },
      {
        question: 'How much does it cost to join Young Living?',
        answer: 'Starter kits range from $35–$165+. To remain active and earn commissions, most members maintain a monthly Essential Rewards order of $35–$100+.'
      }
    ],
    tagline: 'The original essential oil MLM, founded 1993',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '103',
    slug: 'primerica',
    name: 'Primerica',
    category: 'mlm',
    founded_year: 1977,
    hq_location: 'Duluth, Georgia, USA',
    website: 'https://primerica.com',
    products_summary: 'Financial services company selling term life insurance, mutual funds, annuities, and debt management programs through a network of licensed sales representatives. Publicly traded on NYSE (PRI).',
    monthly_cost_min: 0,
    monthly_cost_max: 30,
    comp_plan_type: 'Multi-level with licensing requirements',
    overall_rating: 3.0,
    residual_rating: 2.5,
    simplicity_rating: 2.5,
    transparency_rating: 3.5,
    community_rating: 3.5,
    value_rating: 3.0,
    pros: [
      'Publicly traded company (NYSE: PRI) — more transparent than typical MLMs',
      'Publicly traded since 2010 — financial transparency uncommon in MLMs',
      'Legitimate financial products with real consumer value (term life insurance)',
      'Can lead to a real career in financial services with proper licensing',
      'Products are independently useful — not just sold to other distributors'
    ],
    cons: [
      '$99 startup fee plus ongoing licensing costs',
      'Must obtain state life insurance license (costly and time-consuming)',
      'Recruiting is heavily emphasized alongside sales',
      'Products often not competitively priced vs. independent insurance brokers',
      'High turnover rate among new representatives'
    ],
    quick_facts: {
      'Founded': '1977',
      'Headquarters': 'Duluth, Georgia',
      'Stock Ticker': 'NYSE: PRI (since 2010)',
      'Startup Fee': '$99 USD'
    },
    faq: [
      {
        question: 'Is Primerica an MLM?',
        answer: 'Primerica operates with an MLM-style recruiting structure but sells legitimate financial products (term life insurance, investments). It is publicly traded on the NYSE, which provides more transparency than typical MLMs.'
      },
      {
        question: 'How much do Primerica representatives earn?',
        answer: 'Representative earnings depend on sales volume and building a team. As a publicly traded company, Primerica offers more transparency than typical MLMs. Successful reps can transition to full careers in financial services.'
      },
      {
        question: 'Do I need a license to sell Primerica products?',
        answer: 'Yes. To sell life insurance, you must obtain a state life insurance license. Primerica provides training but you bear the cost of the license exam (~$50-150 per state) and the $99 startup fee.'
      }
    ],
    tagline: 'Publicly traded financial services MLM selling term life insurance',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '104',
    slug: 'mary-kay',
    name: 'Mary Kay',
    category: 'mlm',
    founded_year: 1963,
    hq_location: 'Addison, Texas, USA',
    website: 'https://marykay.com',
    products_summary: 'Cosmetics, skincare, and fragrance products sold through a network of independent Beauty Consultants. One of the oldest and largest direct sales cosmetics companies in the world.',
    monthly_cost_min: 0,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level with inventory purchase requirements',
    overall_rating: 2.2,
    residual_rating: 1.5,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Iconic brand with 60+ years of history',
      'Strong community culture and recognition programs',
      'No mandatory monthly purchase to stay active',
      'Products are widely recognized and trusted by consumers'
    ],
    cons: [
      'Compensation structure requires building substantial customer base',
      'Strong pressure to purchase and maintain inventory',
      'Pink Cadillac incentive requires significant team and sales production',
      'Products considered overpriced by many compared to retail alternatives'
    ],
    quick_facts: {
      'Founded': '1963',
      'Headquarters': 'Addison, Texas',
      'Business Model': 'Multi-level marketing / direct sales',
      'Starter Kit': '~$100',
      'Recognition': 'Famous pink Cadillac career car program'
    },
    faq: [
      {
        question: 'Is Mary Kay a pyramid scheme?',
        answer: 'Mary Kay is a legal direct sales company that has been in business since 1963. The company is one of the largest direct sales cosmetics companies in the world with a strong brand recognition.'
      },
      {
        question: 'Can you make real money with Mary Kay?',
        answer: 'Consultant earnings depend on building a customer base and maintaining sales volume. Top directors and national sales directors who build large teams can earn significant income. The pink Cadillac program rewards top performers.'
      },
      {
        question: 'What is the startup cost for Mary Kay?',
        answer: 'The Starter Kit is approximately $100 and includes products and business supplies. However, consultants are strongly encouraged to purchase inventory ($200–$1,800+) which is where most losses occur.'
      }
    ],
    tagline: 'Iconic cosmetics MLM founded in 1963',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '105',
    slug: 'nu-skin-enterprises',
    name: 'Nu Skin Enterprises',
    category: 'mlm',
    founded_year: 1984,
    hq_location: 'Provo, Utah, USA',
    website: 'https://nuskin.com',
    products_summary: 'Anti-aging skincare, nutritional supplements (Pharmanex), and beauty devices sold through a network of Brand Affiliates. Publicly traded on NYSE (NUS).',
    monthly_cost_min: 30,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level with Sales Leader qualification',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.5,
    community_rating: 2.5,
    value_rating: 2.0,
    pros: [
      'Publicly traded company (NYSE: NUS) — financial transparency via SEC filings',
      'Innovative product line including patented ageLOC skincare technology',
      'Global presence in 50+ markets',
      'Strong R&D investment compared to typical MLMs'
    ],
    cons: [
      'FTC investigation history and significant regulatory settlements in China',
      'Revenue has declined significantly — from $2.7B (2013) to under $2B in recent years',
      'Complex compensation plan requiring monthly qualifying purchases',
      'Compensation structure requires significant sales volume for meaningful returns',
      'Products priced at significant premium over comparable retail items'
    ],
    quick_facts: {
      'Founded': '1984',
      'Headquarters': 'Provo, Utah',
      'Stock Ticker': 'NYSE: NUS',
      'Monthly Qualification': '~$30–$150+ product purchases',
      'Markets': '50+ countries worldwide'
    },
    faq: [
      {
        question: 'Is Nu Skin a legitimate company?',
        answer: 'Nu Skin is a publicly traded company with real products and over 40 years of history. However, it has faced regulatory scrutiny including FTC action and Chinese government investigations. Most Brand Affiliates earn minimal income.'
      },
      {
        question: 'What happened to Nu Skin\'s revenue?',
        answer: 'Nu Skin\'s revenue peaked around $2.7 billion in 2013 and has declined significantly since. Full-year 2024 results showed continued revenue challenges in key markets including China.'
      },
      {
        question: 'What is Nu Skin\'s ageLOC product line?',
        answer: 'ageLOC is Nu Skin\'s flagship anti-aging product line, including skincare serums and the LumiSpa device. Products are positioned as premium with prices ranging from $50–$400+.'
      }
    ],
    tagline: 'Anti-aging MLM, publicly traded since 1996',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },

  // --- AFFILIATE PROGRAMS ---
  {
    id: '151',
    slug: 'shareasale',
    name: 'ShareASale',
    category: 'affiliate',
    founded_year: 2000,
    hq_location: 'Chicago, Illinois, USA',
    website: 'https://shareasale.com',
    products_summary: 'One of the largest affiliate marketing networks with 25,000+ merchant programs spanning physical products, software, services, and subscriptions. Owned by Awin since 2017.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Commission-based affiliate network (varies by merchant)',
    overall_rating: 4.0,
    residual_rating: 3.0,
    simplicity_rating: 4.0,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 4.5,
    pros: [
      'Free to join — no cost to affiliates',
      '25,000+ merchant programs across virtually every niche',
      'Reliable monthly payments with $50 minimum threshold',
      'Real-time tracking and detailed reporting dashboard',
      'Includes many recurring commission programs for passive income',
      'Long cookie durations available (some merchants offer 30-180 days)'
    ],
    cons: [
      'Interface feels dated compared to newer platforms',
      'Application required per merchant — not instant access to all programs',
      'Some merchants have strict approval requirements',
      'Minimum $50 payout threshold',
      'Owned by Awin (some consolidation concerns)'
    ],
    quick_facts: {
      'Founded': '2000',
      'Headquarters': 'Chicago, Illinois',
      'Merchants': '25,000+',
      'Cost to Join': 'Free',
      'Minimum Payout': '$50'
    },
    faq: [
      {
        question: 'Is ShareASale legitimate?',
        answer: 'Yes. ShareASale has been operating since 2000 and is one of the most established affiliate networks. It was acquired by Awin in 2017. Tens of thousands of affiliates and merchants use the platform.'
      },
      {
        question: 'How do I get paid through ShareASale?',
        answer: 'ShareASale pays via check, direct deposit, or international wire transfer. Payments are issued on the 20th of each month when your balance reaches the $50 minimum threshold.'
      },
      {
        question: 'ShareASale vs ClickBank — which is better?',
        answer: 'ShareASale focuses primarily on physical products and software with real merchant brands. ClickBank specializes in digital info products with higher commission rates. Both are legitimate — the best choice depends on your niche.'
      }
    ],
    tagline: 'One of the most established affiliate networks with 25,000+ programs',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '152',
    slug: 'cj-affiliate',
    name: 'CJ Affiliate (Commission Junction)',
    category: 'affiliate',
    founded_year: 1998,
    hq_location: 'Santa Barbara, California, USA',
    website: 'https://cj.com',
    products_summary: 'One of the oldest and largest affiliate networks, featuring major brand partnerships including Barnes & Noble, IHG Hotels, Lowe\'s, and hundreds of Fortune 500 companies.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Commission-based affiliate network (CPA, CPL, revenue share)',
    overall_rating: 3.8,
    residual_rating: 2.5,
    simplicity_rating: 3.0,
    transparency_rating: 4.0,
    community_rating: 3.0,
    value_rating: 4.0,
    pros: [
      'Access to major brand advertisers not available on other networks',
      'Free to join for affiliates',
      'Advanced tracking technology and cross-device attribution',
      'Reliable payments from established brands',
      'Strong compliance and fraud protection'
    ],
    cons: [
      'Account deactivated after 6 months of no earnings — must reapply',
      'Interface has a steep learning curve',
      'Many top programs require separate approval',
      'Customer support can be slow',
      'Less suitable for beginners vs. simpler networks'
    ],
    quick_facts: {
      'Founded': '1998',
      'Headquarters': 'Santa Barbara, California',
      'Parent Company': 'Alliance Data Systems',
      'Cost to Join': 'Free',
      'Specialty': 'Major brands and Fortune 500 advertisers'
    },
    faq: [
      {
        question: 'What is CJ Affiliate best for?',
        answer: 'CJ Affiliate is best for established content creators and publishers who want to partner with major brand advertisers. It\'s less suited for beginners due to the complexity and strict activity requirements.'
      },
      {
        question: 'Does CJ Affiliate deactivate accounts?',
        answer: 'Yes. CJ will deactivate publisher accounts that have no earnings for 6 consecutive months. If deactivated, any balance under $10 is forfeited and you must reapply.'
      },
      {
        question: 'How does CJ Affiliate compare to ShareASale?',
        answer: 'CJ has more major brand advertisers but a more complex interface. ShareASale has more total programs and is generally considered more beginner-friendly. Both are free to join.'
      }
    ],
    tagline: 'Premier affiliate network featuring major brand advertisers',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '153',
    slug: 'wealthy-affiliate',
    name: 'Wealthy Affiliate',
    category: 'affiliate',
    founded_year: 2005,
    hq_location: 'Carson City, Nevada, USA',
    website: 'https://wealthyaffiliate.com',
    products_summary: 'Affiliate marketing training platform offering courses, website hosting, keyword research tools, and a community. Free starter membership available; premium membership at $49/month or $497/year.',
    monthly_cost_min: 0,
    monthly_cost_max: 49,
    comp_plan_type: 'Affiliate program for referring new premium members',
    overall_rating: 3.2,
    simplicity_rating: 3.5,
    residual_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 4.0,
    value_rating: 3.0,
    pros: [
      'Free starter membership to test the platform',
      'Active community with peer support and feedback',
      'All-in-one: training + hosting + keyword research included',
      'Beginner-friendly step-by-step training approach'
    ],
    cons: [
      'Heavy emphasis on promoting Wealthy Affiliate itself as the primary affiliate strategy',
      'Training can feel dated — focused on older SEO/blogging methods',
      'Premium membership ($49/mo) required to unlock most features',
      'Some members report limited results outside of promoting WA itself',
      'Better free/cheaper alternatives exist for most individual tools'
    ],
    quick_facts: {
      'Founded': '2005',
      'Headquarters': 'Carson City, Nevada',
      'Free Plan': 'Available (limited)',
      'Premium': '$49/month or $497/year',
      'Best For': 'Beginners learning affiliate marketing basics'
    },
    faq: [
      {
        question: 'Is Wealthy Affiliate worth it in 2025?',
        answer: 'Wealthy Affiliate offers genuine value for beginners wanting an all-in-one platform. However, the training leans heavily toward promoting Wealthy Affiliate itself, and results outside that niche are mixed. Free alternatives like Authority Hacker and Income School provide comparable education.'
      },
      {
        question: 'Is Wealthy Affiliate a scam?',
        answer: 'No, Wealthy Affiliate is a legitimate training platform that has been operating since 2005. However, be aware that much of their success stories and content are from members who make money by promoting Wealthy Affiliate — which can create a misleading picture of typical results.'
      },
      {
        question: 'What is the Wealthy Affiliate affiliate commission?',
        answer: 'WA pays $23.50/month recurring for each premium member you refer, or $175 for annual members. This creates an incentive for members to promote WA heavily, which is reflected in the volume of WA-positive content online.'
      }
    ],
    tagline: 'Beginner-friendly affiliate marketing training platform since 2005',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '106',
    slug: 'isagenix',
    name: 'Isagenix',
    category: 'mlm',
    founded_year: 2002,
    hq_location: 'Chandler, Arizona, USA',
    website: 'https://isagenix.com',
    products_summary: 'Nutritional cleansing and weight loss systems, meal replacements, energy products, and supplements sold through a network of Associates. Known for the IsaBody Challenge.',
    monthly_cost_min: 100,
    monthly_cost_max: 300,
    comp_plan_type: 'Multi-level binary with rank advancement',
    overall_rating: 2.2,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Products have a loyal following with genuine repeat customers',
      'IsaBody Challenge creates strong community and engagement',
      'Some quality nutritional products backed by research',
      'Global presence in 20+ markets'
    ],
    cons: [
      'Compensation structure requires significant sales volume for meaningful returns',
      'Requires ~$100-300/month in product purchases to maintain active status',
      'Products significantly overpriced vs. comparable retail nutrition brands',
      'Revenue declining — company has faced layoffs and restructuring',
      'Binary compensation plan is complex and favors early adopters'
    ],
    quick_facts: {
      'Founded': '2002',
      'Headquarters': 'Chandler, Arizona',
      'Business Model': 'Multi-level marketing with binary cycles',
      'Monthly Products': '~$100–$300 to stay active'
    },
    faq: [
      {
        question: 'Is Isagenix a pyramid scheme?',
        answer: 'Isagenix is a legal MLM company with real products. They have been in business since 2002 and offer nutritional cleansing programs. As with most MLMs, meaningful income requires building a substantial customer base.'
      },
      {
        question: 'How much does Isagenix cost per month?',
        answer: 'Maintaining active Associate status typically requires $100–$300/month in product purchases, plus the initial enrollment pack ($161–$554). Total first-year costs can easily exceed $2,000–$4,000.'
      },
      {
        question: 'Do Isagenix products work for weight loss?',
        answer: 'Some customers report positive results with Isagenix\'s 30-day cleansing programs. However, comparable nutrition products are available at significantly lower prices from retail brands.'
      }
    ],
    tagline: 'Nutritional cleansing MLM founded in 2002',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '107',
    slug: 'monat-global',
    name: 'MONAT Global',
    category: 'mlm',
    founded_year: 2014,
    hq_location: 'Doral, Florida, USA',
    website: 'https://monatglobal.com',
    products_summary: 'Premium haircare, skincare, and wellness products sold through a network of Market Partners. Known for controversial product reviews alongside passionate supporters.',
    monthly_cost_min: 84,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level unilevel with VIP customer program',
    overall_rating: 2.0,
    residual_rating: 1.8,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 2.5,
    value_rating: 1.8,
    pros: [
      'Significant VIP customer base shows genuine product demand',
      'Clean ingredient formulas with no harmful chemicals (per brand claims)',
      'Strong social media presence and marketing materials provided',
      'Monthly residual from VIP customer subscriptions'
    ],
    cons: [
      'Compensation structure requires significant customer base for meaningful returns',
      'Monthly personal purchases (~$84+) required to qualify for commissions',
      'Hundreds of lawsuits from customers claiming hair loss from products',
      'Required monthly personal purchases (~$84+) to qualify for commissions',
      'BBB monitoring inquiry for income claim compliance issues',
      'Products face significant negative reviews alongside positive ones'
    ],
    quick_facts: {
      'Founded': '2014',
      'Headquarters': 'Doral, Florida',
      'Business Model': 'Multi-level marketing',
      'Monthly Requirement': '$84+ SMART Start order',
      'Notable Issue': 'Hundreds of hair loss lawsuits from customers'
    },
    faq: [
      {
        question: 'Does MONAT cause hair loss?',
        answer: 'MONAT has faced hundreds of lawsuits from customers claiming their products caused hair loss. The company denies these claims. Independent testing has produced mixed results. Potential buyers should research extensively before purchasing.'
      },
      {
        question: 'How much do MONAT Market Partners earn?',
        answer: 'Earnings depend on building a customer base and maintaining sales volume. MONAT pays 30% on retail customers and 15% on VIP customers. Higher ranks unlock additional team bonuses.'
      },
      {
        question: 'What is the monthly cost to be a MONAT Market Partner?',
        answer: 'Market Partners typically pay an $84+ monthly SMART Start order to maintain active status and qualify for commissions. Plus the initial Market Partner kit at $99-$599.'
      }
    ],
    tagline: 'Haircare MLM with controversial product reviews',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '108',
    slug: 'plexus-worldwide',
    name: 'Plexus Worldwide',
    category: 'mlm',
    founded_year: 2008,
    hq_location: 'Scottsdale, Arizona, USA',
    website: 'https://plexusworldwide.com',
    products_summary: 'Health and wellness products focused on gut health, weight management, and blood sugar support. Known for the flagship Plexus Slim "Pink Drink."',
    monthly_cost_min: 40,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level unilevel with rank bonuses',
    overall_rating: 2.1,
    residual_rating: 1.8,
    simplicity_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Popular flagship product (Plexus Slim) with loyal customer base',
      'Focus on gut health aligns with growing wellness trend',
      'Transparent income disclosure available on website',
      'Lower entry cost compared to some MLMs'
    ],
    cons: [
      'Compensation structure requires significant customer volume for meaningful returns',
      'FDA warning letters received for making unsubstantiated health claims',
      'Required monthly autoship (~$40-150) to maintain active status',
      'Products make bold health claims with limited clinical evidence',
      'Recruiting heavily emphasized over retail sales'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Scottsdale, Arizona',
      'Business Model': 'Multi-level marketing',
      'Monthly Requirement': '$40-150 autoship',
      'FDA Status': 'Received warning letters for health claim violations'
    },
    faq: [
      {
        question: 'Is Plexus FDA approved?',
        answer: 'No dietary supplement is "FDA approved" — they are regulated but not pre-approved. Plexus has received FDA warning letters for making unsubstantiated health claims about their products treating or preventing disease.'
      },
      {
        question: 'How much do Plexus Ambassadors earn?',
        answer: 'Ambassador earnings depend on building a customer base and maintaining sales volume. Plexus pays commissions on personal volume above 100 PV. Higher PV tiers unlock better commission rates.'
      },
      {
        question: 'What is the Plexus Slim Pink Drink?',
        answer: 'Plexus Slim is Plexus\'s flagship product — a pink-colored drink mix claimed to support blood sugar, weight management, and gut health. It contains chromium, green coffee bean extract, and proprietary blend ingredients.'
      }
    ],
    tagline: 'Gut health and weight management MLM known for the Pink Drink',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '109',
    slug: 'arbonne-international',
    name: 'Arbonne International',
    category: 'mlm',
    founded_year: 1980,
    hq_location: 'Irvine, California, USA',
    website: 'https://arbonne.com',
    products_summary: 'Premium botanically-based skincare, cosmetics, nutrition, and wellness products. Positioned as vegan, cruelty-free, and "clean" beauty. Filed for Chapter 11 bankruptcy in 2020 and restructured.',
    monthly_cost_min: 30,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level unilevel',
    overall_rating: 2.1,
    residual_rating: 1.8,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Vegan, cruelty-free, gluten-free positioning appeals to clean beauty market',
      'Founded 1980 — over 40 years in business',
      'Premium brand perception with lifestyle marketing',
      'Genuine product fans in the clean beauty space'
    ],
    cons: [
      '2023 typical consultant earned just $265 in gross commissions (per BBB National Programs review)',
      'Filed Chapter 11 bankruptcy in 2020 before restructuring',
      'Products priced at extreme premium — similar quality available for much less',
      'BBB monitoring inquiry for income claim compliance in 2024',
      'Heavy emphasis on lifestyle and aspiration over realistic income expectations'
    ],
    quick_facts: {
      'Founded': '1980',
      'Headquarters': 'Irvine, California',
      'Business Model': 'Multi-level marketing',
      'Typical Earnings': '$265 gross commissions (2023 per BBB/DSSRC review)',
      'Notable': 'Filed Chapter 11 bankruptcy in 2020, restructured'
    },
    faq: [
      {
        question: 'Did Arbonne go bankrupt?',
        answer: 'Yes. Arbonne filed for Chapter 11 bankruptcy protection in 2020. The company was acquired through the restructuring process and continued operating. It is currently active but the bankruptcy history is relevant for potential consultants.'
      },
      {
        question: 'How much do Arbonne consultants make?',
        answer: 'According to a 2024 BBB National Programs review of Arbonne\'s 2023 earnings statement, the typical distributor earned $265 in gross commissions and overrides — before product purchases and business expenses.'
      },
      {
        question: 'Are Arbonne products really clean/vegan?',
        answer: 'Arbonne\'s products are certified vegan and cruelty-free, and the company avoids certain ingredients including mineral oil, animal by-products, and parabens. Their clean beauty positioning is generally considered legitimate.'
      }
    ],
    tagline: 'Vegan clean beauty MLM, founded 1980, filed bankruptcy 2020',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '110',
    slug: 'rodan-fields',
    name: 'Rodan + Fields',
    category: 'affiliate',
    founded_year: 2002,
    hq_location: 'San Francisco, California, USA',
    website: 'https://rodanandfields.com',
    products_summary: 'Premium skincare brand co-founded by dermatologists Dr. Katie Rodan and Dr. Kathy Fields (creators of Proactiv). Pivoted from MLM to affiliate model in September 2024 after raising $75M.',
    monthly_cost_min: 0,
    monthly_cost_max: 80,
    comp_plan_type: 'Affiliate program (pivoted from MLM in September 2024)',
    overall_rating: 3.0,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 3.0,
    pros: [
      'Pivoted away from MLM to affiliate model in September 2024 — more transparent earning structure',
      'Products developed by credentialed dermatologists (creators of Proactiv)',
      'Strong brand recognition and loyal customer base',
      'Raised $75 million in funding — financially stable for growth'
    ],
    cons: [
      'Former MLM consultants saw significant income changes with the 2024 model pivot',
      'Products remain significantly premium-priced vs. comparable skincare',
      'Transition to affiliate model resulted in 100+ job cuts',
      'Previous MLM model required building customer base and team for meaningful income',
      'Retail availability increases competition for affiliates'
    ],
    quick_facts: {
      'Founded': '2002',
      'Headquarters': 'San Francisco, California',
      'Business Model': 'Affiliate (pivoted from MLM in September 2024)',
      'Funding': '$75 million raised (2024)',
      'Founders': 'Dr. Katie Rodan & Dr. Kathy Fields (Proactiv creators)'
    },
    faq: [
      {
        question: 'Did Rodan + Fields stop being an MLM?',
        answer: 'Yes. In July 2024, Rodan + Fields announced a pivot away from its multi-level marketing model to an affiliate-based structure, effective September 1, 2024. The change was driven by competition from TikTok Shop, Amazon, and direct-to-consumer brands.'
      },
      {
        question: 'Can you still make money with Rodan + Fields?',
        answer: 'Under the new affiliate model (post-September 2024), former consultants who continue selling receive increased commissions on customer sales. The multi-level recruiting income opportunity is no longer available.'
      },
      {
        question: 'Are Rodan + Fields products effective?',
        answer: 'Rodan + Fields products have strong consumer reviews, particularly for their Redefine and Reverse regimens. They are developed by board-certified dermatologists with clinical-grade ingredients. However, comparable results can often be achieved with less expensive products.'
      }
    ],
    tagline: 'Premium dermatologist skincare brand, pivoted from MLM to affiliate in 2024',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '112',
    slug: 'tupperware',
    name: 'Tupperware Brands',
    category: 'direct_sales',
    founded_year: 1948,
    hq_location: 'Orlando, Florida, USA (operations winding down)',
    website: 'https://tupperware.com',
    products_summary: 'Iconic food storage containers, kitchen products, and cookware sold through home parties and direct sales. Filed Chapter 11 bankruptcy in September 2024 after years of declining sales.',
    monthly_cost_min: 0,
    monthly_cost_max: 100,
    comp_plan_type: 'Direct sales / party plan (operations winding down post-bankruptcy)',
    overall_rating: 1.5,
    residual_rating: 1.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 2.0,
    value_rating: 2.0,
    pros: [
      'Iconic brand with 76 years of history and genuine product recognition',
      'Products are functional and durable',
      'Strong nostalgia factor — many consumers grew up with Tupperware'
    ],
    cons: [
      'Filed Chapter 11 bankruptcy in September 2024 — future highly uncertain',
      'Business opportunity is NOT recommended — company is in liquidation proceedings',
      'Sales declining for years as consumers shift to Amazon, TikTok Shop',
      'Consultant income was already low before bankruptcy',
      'Party plan model considered outdated in digital age'
    ],
    quick_facts: {
      'Founded': '1948',
      'Headquarters': 'Orlando, Florida',
      'Status': '⚠️ Filed Chapter 11 bankruptcy September 2024',
      'Business Model': 'Direct sales / party plan',
      'Recommendation': 'Do not join — company in bankruptcy proceedings'
    },
    faq: [
      {
        question: 'Did Tupperware go bankrupt?',
        answer: 'Yes. Tupperware Brands filed for Chapter 11 bankruptcy protection in Delaware on September 18, 2024, citing mounting losses and poor demand. The company had been struggling for years as consumers shifted to online retailers.'
      },
      {
        question: 'Can you still sell Tupperware?',
        answer: 'As of late 2024/2025, Tupperware operations are in various stages of wind-down following bankruptcy. We do not recommend joining as a consultant given the company\'s financial situation.'
      },
      {
        question: 'Why did Tupperware fail?',
        answer: 'Tupperware\'s party plan model became outdated as consumers moved to Amazon and social commerce. Declining sales, high debt, and an inability to adapt to digital retail led to the 2024 bankruptcy filing.'
      }
    ],
    tagline: '⚠️ Iconic food storage brand — filed Chapter 11 bankruptcy September 2024',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '113',
    slug: 'usana-health-sciences',
    name: 'USANA Health Sciences',
    category: 'mlm',
    founded_year: 1992,
    hq_location: 'Salt Lake City, Utah, USA',
    website: 'https://usana.com',
    products_summary: 'Nutritional supplements, diet and energy products, and personal care products sold through a network of Associates. Publicly traded on NYSE (USNA). Revenue declined from $921M (2023) to $855M (2024).',
    monthly_cost_min: 100,
    monthly_cost_max: 300,
    comp_plan_type: 'Binary multi-level compensation plan',
    overall_rating: 2.4,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Publicly traded (NYSE: USNA) — financial transparency via SEC filings',
      'Products generally well-regarded for quality and manufacturing standards',
      'Strong presence in Asia Pacific markets',
      'No required autoship order — flexible purchase structure'
    ],
    cons: [
      'Revenue declining — $921M (2023) to $855M (2024), net earnings dropped from $63.8M to $42M',
      'Binary compensation plan is complex and favors positioning over effort',
      'Products significantly overpriced vs. comparable retail supplements',
      'Majority of Associates earn minimal income',
      'Heavy recruiting emphasis to advance and earn meaningful commissions'
    ],
    quick_facts: {
      'Founded': '1992',
      'Headquarters': 'Salt Lake City, Utah',
      'Stock Ticker': 'NYSE: USNA',
      '2024 Revenue': '$855 million (down from $921M in 2023)',
      'Business Model': 'Multi-level marketing (binary plan)'
    },
    faq: [
      {
        question: 'Is USANA a good MLM?',
        answer: 'USANA is publicly traded (NYSE: USNA), providing transparency unusual in MLMs. Products are manufactured to pharmaceutical-grade standards. The binary compensation structure requires building balanced teams for meaningful income.'
      },
      {
        question: 'Is USANA publicly traded?',
        answer: 'Yes. USANA Health Sciences (USNA) trades on the NYSE. Full-year 2024 results showed net sales of $855 million and net earnings of $42 million — down from $921M and $63.8M respectively in 2023.'
      },
      {
        question: 'What are USANA\'s best products?',
        answer: 'USANA\'s CellSentials (multivitamin/antioxidant), BiOmega (fish oil), and Active Nutrition products are among their most popular. Products are manufactured to pharmaceutical-grade standards in their own facility.'
      }
    ],
    tagline: 'Publicly traded nutrition MLM with declining revenue trend',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '114',
    slug: 'scentsy',
    name: 'Scentsy',
    category: 'direct_sales',
    founded_year: 2004,
    hq_location: 'Meridian, Idaho, USA',
    website: 'https://scentsy.com',
    products_summary: 'Fragrance products including wickless candles, wax warmers, diffusers, and personal care items sold through a network of independent Consultants via home parties and social selling.',
    monthly_cost_min: 0,
    monthly_cost_max: 75,
    comp_plan_type: 'Direct sales with multi-level team bonuses',
    overall_rating: 2.8,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 3.5,
    value_rating: 2.5,
    pros: [
      'Unique and popular products with genuine consumer demand',
      'Wickless candle safety angle resonates with safety-conscious buyers',
      'Low startup cost — $99 starter kit',
      'Idaho-based company with reputation for treating consultants well',
      'Wide product catalog updated seasonally'
    ],
    cons: [
      'Most consultants earn modest supplemental income, not full-time wages',
      'Fragrance market is competitive with many retail alternatives',
      'Seasonal products require ongoing purchasing by consultants to demo',
      'Party plan/social selling model requires continuous networking',
      'Quarterly minimums (~$150 PRV) required to stay active'
    ],
    quick_facts: {
      'Founded': '2004',
      'Headquarters': 'Meridian, Idaho',
      'Starter Kit': '$99',
      'Quarterly Minimum': '~$150 PRV to stay active',
      'Products': 'Wickless candles, wax warmers, diffusers, body care'
    },
    faq: [
      {
        question: 'Is Scentsy a pyramid scheme?',
        answer: 'No. Scentsy is a legitimate direct sales company with popular fragrance products. Unlike some MLMs, Scentsy has genuine retail customers and products with consumer demand outside the distributor network.'
      },
      {
        question: 'How much do Scentsy Consultants earn?',
        answer: 'Scentsy pays a 20-25% commission on personal sales plus team bonuses for higher ranks. Most active consultants earn supplemental income ($200-$1,000/month) rather than full-time wages. A small percentage of high-ranking consultants earn significant income.'
      },
      {
        question: 'What is the startup cost for Scentsy?',
        answer: 'The Scentsy Starter Kit costs $99 and includes testers, business supplies, and samples. To remain active and earn commissions, consultants must generate at least $150 in PRV (Personal Retail Volume) per quarter.'
      }
    ],
    tagline: 'Wickless candle and fragrance direct sales company founded in Idaho',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '154',
    slug: 'clickfunnels-affiliate',
    name: 'ClickFunnels Affiliate Program',
    category: 'affiliate',
    founded_year: 2014,
    hq_location: 'Boise, Idaho, USA',
    website: 'https://clickfunnels.com',
    products_summary: 'Sales funnel software and marketing platform co-founded by Russell Brunson. Affiliates earn recurring commissions promoting ClickFunnels subscriptions and related products like books, courses, and the One Funnel Away Challenge.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate — 20-40% recurring commissions',
    overall_rating: 3.5,
    residual_rating: 4.0,
    simplicity_rating: 3.0,
    transparency_rating: 3.5,
    community_rating: 4.0,
    value_rating: 3.5,
    pros: [
      'Strong recurring commissions (20-40%) on software subscriptions',
      'Proven high-converting sales funnels and webinars for affiliates to promote',
      'Multiple products to promote: software, books (DotCom Secrets, Expert Secrets), courses',
      'Large, engaged online marketing community',
      'Russell Brunson is a well-known authority in the marketing space'
    ],
    cons: [
      'ClickFunnels product itself is expensive ($97-$297/mo) — limits conversion rate',
      'Highly competitive affiliate space — many marketers promoting the same offer',
      'ClickFunnels 2.0 transition caused some affiliate friction',
      'Affiliate tracking dashboard can be complex for beginners',
      'Requires marketing knowledge and audience to see meaningful results'
    ],
    quick_facts: {
      'Founded': '2014',
      'Headquarters': 'Boise, Idaho',
      'Commission Rate': '20-40% recurring',
      'Cookie Duration': '45 days',
      'Cost to Join': 'Free'
    },
    faq: [
      {
        question: 'How much commission does ClickFunnels pay affiliates?',
        answer: 'ClickFunnels pays 20% recurring commission to standard affiliates and 40% to Dream Car affiliates (100+ active referrals). At $97/mo, a standard affiliate earns ~$19.40/month per referral indefinitely.'
      },
      {
        question: 'What is the ClickFunnels Dream Car program?',
        answer: 'The Dream Car contest pays affiliates $500/month toward a car lease when they reach 100 active referrals, and $1,000/month at 200 active referrals, in addition to commissions.'
      },
      {
        question: 'Is promoting ClickFunnels a good affiliate opportunity?',
        answer: 'ClickFunnels has strong recurring commissions but the space is extremely competitive. Success requires an established audience interested in online marketing and sales funnels.'
      }
    ],
    tagline: 'Recurring commission affiliate program for popular sales funnel software',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '155',
    slug: 'convertkit',
    name: 'ConvertKit (now Kit)',
    category: 'affiliate',
    founded_year: 2013,
    hq_location: 'Boise, Idaho, USA',
    website: 'https://kit.com',
    products_summary: 'Email marketing platform built for creators — bloggers, YouTubers, podcasters, and course creators. Rebranded from ConvertKit to Kit in 2024. Offers 30% recurring affiliate commissions.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate — 30% recurring commission for 24 months',
    overall_rating: 4.0,
    residual_rating: 4.0,
    simplicity_rating: 4.0,
    transparency_rating: 4.5,
    community_rating: 4.0,
    value_rating: 4.0,
    pros: [
      '30% recurring commission for 24 months — strong passive income potential',
      'Free plan available ($0) makes it easy to recommend honestly',
      'Genuinely popular product among content creators',
      'Creator-focused features (landing pages, automations, digital products)',
      'Rebranded to Kit in 2024 — growing beyond just email'
    ],
    cons: [
      '24-month commission limit (not lifetime recurring like some programs)',
      'Market getting more competitive from Beehiiv, Ghost, Substack',
      'Not suitable for e-commerce businesses (focused on creators)',
      'Free plan has limited features — paid plans start at $25+/month'
    ],
    quick_facts: {
      'Founded': '2013',
      'Headquarters': 'Boise, Idaho',
      'Rebranded': 'ConvertKit → Kit (2024)',
      'Commission Rate': '30% recurring for 24 months',
      'Cost to Join': 'Free'
    },
    faq: [
      {
        question: 'How much can you earn as a ConvertKit/Kit affiliate?',
        answer: 'Kit pays 30% recurring commissions for 24 months. If you refer a customer paying $100/month, you earn $30/month for 2 years ($720 total per customer). Building a portfolio of referrals creates meaningful recurring income.'
      },
      {
        question: 'Why did ConvertKit rebrand to Kit?',
        answer: 'ConvertKit rebranded to Kit in 2024 to better reflect its evolution beyond email marketing into a broader creator platform including digital product sales, landing pages, and more.'
      },
      {
        question: 'ConvertKit vs Beehiiv for affiliates?',
        answer: 'Kit pays 30% recurring (24 months) while Beehiiv pays 50% recurring (12 months). Kit has a larger existing customer base; Beehiiv is growing faster. Both are legitimate affiliate opportunities for the creator niche.'
      }
    ],
    tagline: 'Creator-focused email platform with 30% recurring affiliate commissions',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '156',
    slug: 'shopify-affiliate',
    name: 'Shopify Affiliate Program',
    category: 'affiliate',
    founded_year: 2006,
    hq_location: 'Ottawa, Ontario, Canada',
    website: 'https://shopify.com/affiliates',
    products_summary: 'Earn commissions promoting Shopify — the world\'s largest e-commerce platform. Affiliates earn a flat bounty per new merchant referral. Shopify powers over 1.7 million businesses globally.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate — flat bounty per new paid merchant (up to $150)',
    overall_rating: 3.8,
    residual_rating: 2.5,
    simplicity_rating: 4.0,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 4.0,
    pros: [
      'Shopify is the world\'s leading e-commerce platform — easy to recommend',
      'High brand recognition increases conversion rates',
      'Up to $150 bounty per new merchant referred',
      'Free 14-day trial offer makes referral easier',
      'Massive market of potential merchants'
    ],
    cons: [
      'One-time bounty only — no recurring commissions',
      'Bounty paid only when referred merchant starts paying (after free trial)',
      'Highly competitive affiliate space',
      'Shopify pricing has increased — harder conversion at higher price points',
      'Limited to e-commerce audience'
    ],
    quick_facts: {
      'Founded': '2006',
      'Headquarters': 'Ottawa, Canada',
      'Commission': 'Up to $150 flat bounty per new paid merchant',
      'Commission Type': 'One-time (not recurring)',
      'Cost to Join': 'Free (application required)'
    },
    faq: [
      {
        question: 'How much do Shopify affiliates earn per referral?',
        answer: 'Shopify pays up to $150 for each new merchant you refer who starts a paid plan. The exact amount varies by plan. Unlike some affiliate programs, this is a one-time bounty, not a recurring commission.'
      },
      {
        question: 'Is the Shopify affiliate program worth it?',
        answer: 'Shopify\'s affiliate program is worthwhile for content creators in the e-commerce, dropshipping, or entrepreneurship niche. The one-time bounty model means you need consistent new referrals rather than building a passive recurring base.'
      },
      {
        question: 'How do I apply for the Shopify affiliate program?',
        answer: 'Apply at shopify.com/affiliates. Shopify reviews applications and approves creators with relevant content and an established audience. You need an active website or content channel to qualify.'
      }
    ],
    tagline: 'Earn bounties promoting the world\'s largest e-commerce platform',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '115',
    slug: 'forever-living-products',
    name: 'Forever Living Products',
    category: 'mlm',
    founded_year: 1978,
    hq_location: 'Scottsdale, Arizona, USA',
    website: 'https://foreverliving.com',
    products_summary: 'World\'s largest grower, manufacturer, and distributor of aloe vera products including drinks, skincare, supplements, and personal care items. Sold through Forever Business Owners (FBOs) in 160+ countries.',
    monthly_cost_min: 100,
    monthly_cost_max: 300,
    comp_plan_type: 'Multi-level with case credit qualification system',
    overall_rating: 2.2,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 1.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Vertically integrated — grows, manufactures, and sells its own aloe vera',
      'Global presence in 160+ countries',
      'Aloe vera products have genuine consumer demand',
      'Founded 1978 — over 45 years in business'
    ],
    cons: [
      'Compensation structure requires building substantial customer base and team',
      'FBOs are prohibited from making income representations per company policy',
      'Required to maintain ~$200/month in product purchases to qualify for commissions',
      'Products significantly overpriced vs. comparable retail aloe products',
      'Compensation plan based on complex Case Credit (CC) system'
    ],
    quick_facts: {
      'Founded': '1978',
      'Headquarters': 'Scottsdale, Arizona',
      'Legacy': '45+ years in business since 1978',
      'Monthly Requirement': '~$200+ in products to qualify',
      'Markets': '160+ countries'
    },
    faq: [
      {
        question: 'Is Forever Living a pyramid scheme?',
        answer: 'Forever Living is a legal MLM company selling real aloe vera products with over 45 years in business. They own their own aloe farms and manufacturing facilities. As with most MLMs, meaningful income requires building a substantial customer base and team.'
      },
      {
        question: 'How much does it cost to join Forever Living?',
        answer: 'Initial enrollment costs vary by country but typically require purchasing a starter pack (~$200-300 in products). To earn commissions, FBOs must maintain ongoing monthly product purchases, typically valued at 2+ case credits (~$200+).'
      },
      {
        question: 'How does Forever Living compensation work?',
        answer: 'Forever Living uses a Case Credit (CC) system for qualification. FBOs earn margins on product sales and team bonuses at higher ranks. Maintaining qualification requires consistent monthly product volume.'
      }
    ],
    tagline: 'World\'s largest aloe vera MLM with 45+ years in business',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '116',
    slug: 'pampered-chef',
    name: 'Pampered Chef',
    category: 'direct_sales',
    founded_year: 1980,
    hq_location: 'Addison, Illinois, USA',
    website: 'https://pamperedchef.com',
    products_summary: 'Kitchen tools, cookware, and food products sold through cooking shows and direct sales. Owned by Berkshire Hathaway since 2002. Known for quality products and the cooking show party model.',
    monthly_cost_min: 0,
    monthly_cost_max: 60,
    comp_plan_type: 'Direct sales with tiered commission (20-25%) and team bonuses',
    overall_rating: 3.0,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 3.5,
    value_rating: 3.0,
    pros: [
      'Owned by Berkshire Hathaway (Warren Buffett) — financially stable, reputable owner',
      'High-quality kitchen products with genuine consumer appeal',
      'No required monthly purchase to stay active',
      'Cooking show model creates a natural selling environment',
      '20-25% commissions on personal sales'
    ],
    cons: [
      'Party-based selling model requires ongoing social networking',
      'Most consultants earn supplemental income, not full-time wages',
      'Products priced at premium vs. comparable kitchen tools',
      'Cooking show invitations can strain personal relationships',
      'Market saturation in some areas'
    ],
    quick_facts: {
      'Founded': '1980',
      'Headquarters': 'Addison, Illinois',
      'Owner': 'Berkshire Hathaway (since 2002)',
      'Commission': '20-25% on personal sales',
      'Starter Kit': '~$109'
    },
    faq: [
      {
        question: 'Who owns Pampered Chef?',
        answer: 'Warren Buffett\'s Berkshire Hathaway acquired Pampered Chef in 2002. This makes it one of the few direct sales companies with a well-capitalized, publicly traded parent company.'
      },
      {
        question: 'How much do Pampered Chef consultants earn?',
        answer: 'Pampered Chef consultants earn 20-25% commission on personal sales, with up to 27% for Directors. Low maintenance requirement of just $30 in sales every 6 months makes it accessible. Higher ranks unlock team bonuses.'
      },
      {
        question: 'Do you need to host parties to sell Pampered Chef?',
        answer: 'Cooking shows (parties) are the traditional selling method, but consultants can also sell online through their personal Pampered Chef website. However, hosting parties typically generates the best sales results.'
      }
    ],
    tagline: 'Berkshire Hathaway-owned kitchen products direct sales company',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '157',
    slug: 'legendary-marketer',
    name: 'Legendary Marketer',
    category: 'affiliate',
    founded_year: 2016,
    hq_location: 'St. Petersburg, Florida, USA',
    website: 'https://legendarymarketer.com',
    products_summary: '⚠️ CLOSED FEBRUARY 2026. Online marketing training program founded by David Sharpe offering courses on affiliate marketing, digital products, and online business. Announced closure after 9 years in business in February 2026.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate program (closed — no longer accepting affiliates)',
    overall_rating: 2.5,
    residual_rating: 1.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 1.5,
    pros: [
      'Was one of the more transparent high-ticket affiliate programs',
      'Low $2.95 entry point (15-Day Business Builder Challenge) made it accessible',
      'David Sharpe was a recognizable and credible face in the industry',
      'Produced genuinely useful affiliate marketing training content'
    ],
    cons: [
      '⚠️ OFFICIALLY CLOSED — announced shutdown in February 2026 after 9 years',
      'Affiliates can no longer earn commissions — program is defunct',
      'High-ticket upsells ($2,500-$25,000) were primary revenue source',
      'Significant income claims by affiliates drew FTC scrutiny concerns',
      'Many affiliates built entire businesses around LM — those businesses are now disrupted'
    ],
    quick_facts: {
      'Founded': '2016',
      'Closed': '⚠️ February 2026',
      'Founder': 'David Sharpe',
      'Status': 'PERMANENTLY CLOSED — affiliate program no longer active',
      'Years in Business': '9 years (2016-2026)'
    },
    faq: [
      {
        question: 'Is Legendary Marketer still open?',
        answer: 'No. Legendary Marketer officially closed in February 2026 after 9 years in business. Founder David Sharpe announced the shutdown on social media, ending the affiliate program and all courses. Affiliates can no longer earn commissions.'
      },
      {
        question: 'Why did Legendary Marketer close?',
        answer: 'David Sharpe announced the closure on social media in February 2026, describing it as "ending our 9-year run." The specific reasons were not fully disclosed publicly. The platform had faced increasing competition and scrutiny of income claims made by affiliates.'
      },
      {
        question: 'What should former Legendary Marketer affiliates do now?',
        answer: 'Former LM affiliates should explore alternative affiliate programs with sustainable recurring income models. Platforms like HBA, ClickFunnels, and ConvertKit offer legitimate recurring commission programs.'
      }
    ],
    tagline: '⚠️ CLOSED FEBRUARY 2026 — Online marketing training program after 9-year run',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '158',
    slug: 'jvzoo',
    name: 'JVZoo',
    category: 'affiliate',
    founded_year: 2011,
    hq_location: 'Plant City, Florida, USA',
    website: 'https://jvzoo.com',
    products_summary: 'Digital product marketplace and affiliate network specializing in internet marketing, software, and online business tools. Popular for product launches with instant commissions.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate marketplace — varies by product (typically 30-70%)',
    overall_rating: 3.0,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 3.0,
    pros: [
      'Free to join as an affiliate',
      'High commission rates (30-70% common on digital products)',
      'Instant or same-day payments via PayPal for approved affiliates',
      'Large marketplace of internet marketing products',
      'Good for promoting product launches to email lists'
    ],
    cons: [
      'Many low-quality "get rich quick" products on the platform',
      'Product quality varies wildly — due diligence required',
      'New affiliates must request approval per product — not instant access',
      'Platform has reputation for promoting overhyped products',
      'High refund rates on some products damage reputation'
    ],
    quick_facts: {
      'Founded': '2011',
      'Headquarters': 'Plant City, Florida',
      'Specialty': 'Internet marketing and software digital products',
      'Commission Rate': '30-70% typical',
      'Cost to Join': 'Free'
    },
    faq: [
      {
        question: 'Is JVZoo legitimate?',
        answer: 'JVZoo is a legitimate marketplace that has paid out millions in commissions. However, product quality varies significantly. Many products make exaggerated income claims. Careful vetting of products before promoting is essential.'
      },
      {
        question: 'JVZoo vs ClickBank — which is better?',
        answer: 'Both are legitimate digital product marketplaces. ClickBank has a larger selection and better brand recognition. JVZoo is more focused on internet marketing tools and software with faster payment options. Both require careful product vetting.'
      },
      {
        question: 'How do you get approved as a JVZoo affiliate?',
        answer: 'Create a free JVZoo account, then request approval from individual product vendors. New affiliates with no sales history may face more rejections. Building a track record with smaller products first helps.'
      }
    ],
    tagline: 'Digital product marketplace for internet marketing affiliates',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '159',
    slug: 'rakuten-advertising',
    name: 'Rakuten Advertising',
    category: 'affiliate',
    founded_year: 1996,
    hq_location: 'New York City, New York, USA',
    website: 'https://rakutenadvertising.com',
    products_summary: 'One of the largest global affiliate networks (formerly LinkShare), owned by Japanese e-commerce giant Rakuten. Features premium brand partnerships across fashion, retail, finance, and travel.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate network — commission rates vary by merchant',
    overall_rating: 3.7,
    residual_rating: 2.5,
    simplicity_rating: 3.0,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 3.8,
    pros: [
      'Access to premium brand advertisers (Walmart, Best Buy, Macy\'s, etc.)',
      'Free to join for publishers/affiliates',
      'Backed by Rakuten — financially stable global company',
      'Strong tracking and attribution technology',
      'Good for high-volume content sites with established traffic'
    ],
    cons: [
      'Interface less user-friendly than CJ or ShareASale',
      'Minimum $50 payout threshold',
      'Smaller overall network than CJ Affiliate or ShareASale',
      'Some advertisers require significant traffic/audience to approve',
      'Support response times can be slow'
    ],
    quick_facts: {
      'Founded': '1996 (as LinkShare)',
      'Headquarters': 'New York City',
      'Parent Company': 'Rakuten Group (Japan)',
      'Cost to Join': 'Free',
      'Specialty': 'Premium retail and brand advertisers'
    },
    faq: [
      {
        question: 'What is Rakuten Advertising?',
        answer: 'Rakuten Advertising (formerly LinkShare) is one of the oldest affiliate networks, founded in 1996. It connects publishers with premium advertisers including major retailers. It is owned by Japanese e-commerce giant Rakuten.'
      },
      {
        question: 'Rakuten Advertising vs CJ Affiliate — which is better?',
        answer: 'Both networks feature major brand advertisers. CJ has a larger network and better-known brands overall. Rakuten has strength in retail (Walmart, Best Buy) and is a good complement to CJ for diverse monetization.'
      },
      {
        question: 'Is Rakuten Advertising free to join?',
        answer: 'Yes, joining as a publisher/affiliate is free. You apply to individual advertiser programs within the network, many of which have their own traffic and content requirements.'
      }
    ],
    tagline: 'Global affiliate network with premium retail brand partnerships',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '160',
    slug: 'olsp-system',
    name: 'OLSP System',
    category: 'affiliate',
    founded_year: 2019,
    hq_location: 'United Kingdom',
    website: 'https://olspsystem.com',
    products_summary: 'Online marketing platform and affiliate system founded by Wayne Crowe. Provides tools, traffic training, and done-for-you lead generation for affiliate marketers. Relaunched in 2026 with new pricing: $199/month or $1,997/year, offering 200% commissions + 2-tier earnings. Removed the one-time lifetime membership option that affiliates had relied on.',
    monthly_cost_min: 7,
    monthly_cost_max: 199,
    comp_plan_type: '200% commissions + 2-tier — $199/mo or $1,997/yr (lifetime option removed 2026)',
    overall_rating: 2.8,
    residual_rating: 2.5,
    simplicity_rating: 3.0,
    transparency_rating: 2.5,
    community_rating: 3.5,
    value_rating: 2.5,
    pros: [
      'Low entry point — $7 Mega Link to start',
      'Done-for-you traffic generation appeals to beginners',
      'New 2026 structure: 200% commissions + 2-tier earnings on $199/mo plan',
      'Active Facebook community with regular training',
      'Wayne Crowe is accessible and engages with members'
    ],
    cons: [
      '⚠️ 2026 RELAUNCH: One-time lifetime membership removed — now $199/mo or $1,997/yr only',
      'Affiliates say "99% of people will choose monthly over yearly" — killing the big annual commission paydays',
      'Former affiliates calling the change "an easy way to leave a company" — significant community pushback',
      'Business model centers on selling OLSP itself rather than independent external products',
      'Comp plan changes signal instability — exactly the kind of change Paul Hutchings built HBA to avoid',
      'Entry cost escalates quickly: $7 Mega Link → $199/mo for full community builder access'
    ],
    quick_facts: {
      'Founded': '~2019',
      'Founder': 'Wayne Crowe (UK)',
      'Entry Price': '$7 (Mega Link)',
      'Monthly Cost': '$99–$199+ for full access',
      '2026 Change': '⚠️ Lifetime option removed — now $199/mo or $1,997/yr',
    'New Pricing': '$199/mo or $1,997/yr — 200% commissions + 2-tier',
    'Old Lifetime Option': '$49 one-time (REMOVED in 2026 relaunch)'
    },
    faq: [
      {
        question: 'What happened to OLSP System in 2026?',
        answer: 'In early 2026, OLSP System was relaunched with significant pricing changes. Wayne Crowe removed the lifetime membership option that many affiliates had relied on for high-ticket commissions. The new structure is monthly or annual subscriptions only, with 50% commissions — a change that frustrated many established affiliates.'
      },
      {
        question: 'Is OLSP System legitimate?',
        answer: 'OLSP System is a legitimate affiliate marketing platform with real tools and training. However, the 2026 comp plan change is a cautionary example of why income in affiliate programs that frequently change their structure can be unreliable. Affiliates who built businesses around the lifetime offer saw their strategy undermined overnight.'
      },
      {
        question: 'How much does OLSP System cost?',
        answer: 'OLSP starts with a $7 Mega Link entry point, but full access to tools and training requires monthly subscriptions ranging from $99-$199+/month or $997/year. The previously available lifetime membership option was removed in the 2026 relaunch.'
      },
      {
        question: 'Should I join OLSP System after the 2026 changes?',
        answer: 'The removal of the lifetime option significantly reduces the earning potential for affiliates. Monthly commissions on $199/month subscriptions are sustainable but less compelling than the high-ticket lifetime commissions were. Consider alternatives with stable, unchanged compensation structures.'
      }
    ],
    tagline: 'Affiliate marketing platform — comp plan changed in 2026, lifetime option removed',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '161',
    slug: 'impact-affiliate',
    name: 'Impact (impact.com)',
    category: 'affiliate',
    founded_year: 2008,
    hq_location: 'Santa Barbara, California, USA',
    website: 'https://impact.com',
    products_summary: 'Enterprise-grade partnership management platform connecting publishers with major brand advertisers. Features advanced tracking, fraud detection, and flexible commission structures. Free for publishers — brands pay $2,500+/month.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate network — commission rates vary by brand partner',
    overall_rating: 4.0,
    residual_rating: 3.0,
    simplicity_rating: 3.0,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 4.0,
    pros: [
      'Free for publishers/affiliates to join',
      'Access to premium enterprise brands not available on smaller networks',
      'Advanced real-time tracking and cross-device attribution',
      'Flexible payout structures including performance bonuses',
      'Strong fraud detection protects affiliate earnings'
    ],
    cons: [
      'Steeper learning curve than beginner-friendly networks',
      'Application process can be selective — not instant access',
      'Best suited for established publishers with meaningful traffic',
      'Customer support quality varies',
      'Interface complexity can overwhelm beginners'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Santa Barbara, California',
      'Cost for Publishers': 'Free',
      'Brand Cost': '$2,500+/month (enterprise pricing)',
      'Best For': 'Established publishers and content creators'
    },
    faq: [
      {
        question: 'Is Impact.com free for affiliates?',
        answer: 'Yes. Publishers and affiliates join Impact for free. The platform charges brands/advertisers — starting at $2,500/month for enterprise access. Affiliates earn commissions set by individual brand partners.'
      },
      {
        question: 'Impact vs ShareASale — which is better for affiliates?',
        answer: 'Impact has more premium enterprise brands and better technology, but is more complex. ShareASale has more total programs and is more beginner-friendly. Impact is better for established publishers; ShareASale is better for those just starting out.'
      },
      {
        question: 'What brands are on Impact?',
        answer: 'Impact features major brands across retail, travel, finance, and software including Adidas, Airbnb, Lenovo, and many Fortune 500 companies. Brand availability varies by niche.'
      }
    ],
    tagline: 'Enterprise affiliate network with premium brand partnerships',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '162',
    slug: 'awin',
    name: 'Awin',
    category: 'affiliate',
    founded_year: 2000,
    hq_location: 'Berlin, Germany',
    website: 'https://awin.com',
    products_summary: 'Global affiliate network formed from the merger of Zanox and Affiliate Window. Owns ShareASale. Features 25,000+ advertisers across 180 countries with a $5 publisher sign-up deposit (refunded on first payment).',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate network — commission rates vary by advertiser',
    overall_rating: 3.8,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 4.0,
    pros: [
      'One of the largest global networks — 25,000+ advertisers in 180 countries',
      'Owns ShareASale — access to both networks from one company',
      '$5 sign-up deposit refunded on first payment',
      'Strong international advertiser selection',
      'Access plan available for smaller publishers'
    ],
    cons: [
      '$5 deposit required upfront (refunded but still a barrier)',
      'Publisher support can be limited — community noted weak direct support',
      'Interface less polished than newer platforms',
      'Application approval per advertiser required',
      '2.5% transaction tracking fee on the Access plan'
    ],
    quick_facts: {
      'Founded': '2000 (Zanox + Affiliate Window merger)',
      'Headquarters': 'Berlin, Germany',
      'Advertisers': '25,000+ across 180 countries',
      'Sign-Up Deposit': '$5 (refunded on first payment)',
      'Owns': 'ShareASale'
    },
    faq: [
      {
        question: 'Is Awin free to join as an affiliate?',
        answer: 'Awin requires a $5 deposit when joining as a publisher. This is refunded when you receive your first commission payment. The deposit helps prevent spam accounts.'
      },
      {
        question: 'Awin vs ShareASale — what\'s the difference?',
        answer: 'Awin owns ShareASale. Awin focuses more on international advertisers and larger brands, while ShareASale is more US-centric with a wider variety of programs. Many affiliates use both.'
      },
      {
        question: 'What is the Awin Access plan?',
        answer: 'Awin Access is a self-managed publisher plan for smaller affiliates. It charges a 2.5% transaction fee but allows access to the full advertiser marketplace. Larger publishers can negotiate custom arrangements.'
      }
    ],
    tagline: 'Global affiliate network with 25,000+ advertisers — owns ShareASale',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '163',
    slug: 'digistore24',
    name: 'Digistore24',
    category: 'affiliate',
    founded_year: 2012,
    hq_location: 'Hameln, Germany',
    website: 'https://digistore24.com',
    products_summary: 'Digital product marketplace and affiliate network with 8,500+ offers spanning health, business, self-help, and software. Popular in Europe and growing in the US. Free for affiliates — vendors pay 7.9% + $1 per transaction.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate marketplace — commission rates set by vendors (typically 40-75%)',
    overall_rating: 3.3,
    residual_rating: 2.5,
    simplicity_rating: 3.8,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 3.5,
    pros: [
      'Free to join as an affiliate',
      '8,500+ offers across multiple niches',
      'Fast payout — weekly payments available',
      'Stronger in European markets than ClickBank',
      'Good for health, finance, and self-help niches'
    ],
    cons: [
      'Smaller selection than ClickBank in the US market',
      'Product quality varies — due diligence required',
      'Less brand recognition among US audiences',
      'Some overhyped products similar to ClickBank',
      'Customer support can be slow'
    ],
    quick_facts: {
      'Founded': '2012',
      'Headquarters': 'Hameln, Germany',
      'Offers': '8,500+',
      'Cost to Join': 'Free for affiliates',
      'Payout': 'Weekly available'
    },
    faq: [
      {
        question: 'Digistore24 vs ClickBank — which is better?',
        answer: 'Digistore24 is stronger in European markets and has a more transparent fee structure for vendors. ClickBank has a larger US selection and more brand recognition. Both require careful product vetting. Many affiliates use both platforms.'
      },
      {
        question: 'Is Digistore24 free for affiliates?',
        answer: 'Yes, completely free. Digistore24 charges vendors 7.9% + $1 per transaction (or 4.9% for amounts over $400). Affiliates earn commission rates set by individual vendors, typically 40-75%.'
      },
      {
        question: 'What niches work best on Digistore24?',
        answer: 'Digistore24 performs well in health and wellness, personal development, business and finance, and software tools. European audiences are particularly well-served given the platform\'s German origins.'
      }
    ],
    tagline: 'European digital product marketplace — strong alternative to ClickBank',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '164',
    slug: 'warriorplus',
    name: 'WarriorPlus',
    category: 'affiliate',
    founded_year: 2006,
    hq_location: 'Online',
    website: 'https://warriorplus.com',
    products_summary: 'Digital product marketplace specializing in internet marketing tools, software, and online business courses. Known for product launches with instant PayPal commissions. Free to join, with commissions ranging from 50-100%.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate marketplace — 50-100% commissions, instant PayPal payments',
    overall_rating: 3.0,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 3.0,
    pros: [
      'Free to join as an affiliate',
      '50-100% commissions — among the highest in digital marketing',
      'Instant PayPal payments on many offers',
      'Active marketplace with frequent new product launches',
      'Good for email list promotions and launches'
    ],
    cons: [
      'Notorious for low-quality "make money online" products',
      'Many products make exaggerated income claims',
      'High refund rates on lower-quality products damage reputation',
      'Requires vendor approval per product for new affiliates',
      'Platform dominated by get-rich-quick style offers'
    ],
    quick_facts: {
      'Founded': '2006',
      'Specialty': 'Internet marketing tools and courses',
      'Commission Range': '50-100%',
      'Payment': 'Instant PayPal on many offers',
      'Cost to Join': 'Free'
    },
    faq: [
      {
        question: 'Is WarriorPlus legitimate?',
        answer: 'WarriorPlus is a legitimate platform that has processed millions in affiliate commissions. However, it has a reputation for hosting low-quality products with exaggerated claims. Careful product vetting is essential before promoting anything.'
      },
      {
        question: 'WarriorPlus vs JVZoo — which is better?',
        answer: 'Both are similar internet marketing affiliate marketplaces. WarriorPlus is known for faster PayPal payments and a slightly more active launch calendar. JVZoo has a larger product catalog. Both require the same careful vetting approach.'
      },
      {
        question: 'How do you make money as a WarriorPlus affiliate?',
        answer: 'Most successful WarriorPlus affiliates build email lists and promote product launches to their subscribers. Cold traffic rarely converts well on IM offers. Building an audience in the make-money-online or marketing niche is typically required.'
      }
    ],
    tagline: 'Internet marketing affiliate marketplace with instant PayPal commissions',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '165',
    slug: 'partnerstack',
    name: 'PartnerStack',
    category: 'affiliate',
    founded_year: 2015,
    hq_location: 'Toronto, Ontario, Canada',
    website: 'https://partnerstack.com',
    products_summary: 'B2B SaaS affiliate and partner network specializing in software companies. Features recurring commissions on SaaS subscriptions. Top SaaS brands like Notion, Freshbooks, and Webflow use PartnerStack for their affiliate programs.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'B2B SaaS affiliate network — typically 20-50% recurring commissions',
    overall_rating: 4.1,
    residual_rating: 4.5,
    simplicity_rating: 3.5,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 4.0,
    pros: [
      'Specializes in SaaS recurring commissions — strong passive income potential',
      'Free for publishers to join',
      'Access to top SaaS brands: Notion, Freshbooks, Webflow, Monday.com',
      'Typically 20-50% recurring commissions on software subscriptions',
      'B2B audience often has higher LTV than consumer products'
    ],
    cons: [
      'Focused on B2B/SaaS — not suitable for all audiences',
      'Requires technology or business-focused content to convert',
      'Some programs have minimum traffic or audience requirements',
      'Commission payments via Stripe — may not suit all publishers',
      'Smaller marketplace than CJ or ShareASale'
    ],
    quick_facts: {
      'Founded': '2015',
      'Headquarters': 'Toronto, Canada',
      'Specialty': 'B2B SaaS and software companies',
      'Commission Type': 'Typically 20-50% recurring',
      'Cost to Join': 'Free'
    },
    faq: [
      {
        question: 'What is PartnerStack best for?',
        answer: 'PartnerStack is ideal for content creators, bloggers, and YouTubers whose audience includes businesses and professionals who buy software tools. If you create content about productivity, marketing, or business tools, PartnerStack\'s recurring SaaS commissions can be very lucrative.'
      },
      {
        question: 'What companies use PartnerStack?',
        answer: 'Notable PartnerStack programs include Notion, Freshbooks, Webflow, Monday.com, Brevo (formerly Sendinblue), and hundreds of other SaaS companies. Most offer 20-50% recurring commissions.'
      },
      {
        question: 'How does PartnerStack compare to other affiliate networks?',
        answer: 'PartnerStack is uniquely focused on B2B SaaS, while networks like ShareASale and CJ cover all categories. For technology and business audiences, PartnerStack\'s recurring SaaS commissions often outperform traditional retail affiliate programs.'
      }
    ],
    tagline: 'B2B SaaS affiliate network with recurring commissions from top software brands',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '201',
    slug: 'fiverr',
    name: 'Fiverr',
    category: 'other',
    founded_year: 2010,
    hq_location: 'Tel Aviv, Israel',
    website: 'https://fiverr.com',
    products_summary: 'Global freelance marketplace connecting buyers with sellers of digital services including graphic design, writing, programming, video editing, marketing, and more. Sellers ("Sellers") set their own prices starting at $5.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Freelance marketplace — seller keeps 80% (Fiverr takes 20%)',
    overall_rating: 4.0,
    residual_rating: 2.0,
    simplicity_rating: 4.5,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 4.5,
    pros: [
      'Free to join and start selling immediately',
      'Massive buyer marketplace — millions of active buyers',
      'Flexible — work on your own schedule, set your own prices',
      'No cold outreach needed — buyers come to you through search',
      'Fiverr Pro program for top sellers with premium pricing',
      'Global market — work with clients worldwide'
    ],
    cons: [
      'Fiverr takes 20% commission on every sale',
      'Highly competitive in popular categories (writing, design)',
      'Income is active — you stop working, income stops',
      'New sellers may struggle to get initial reviews',
      'Pricing pressure — race to the bottom in some categories',
      'Algorithm changes can affect seller visibility'
    ],
    quick_facts: {
      'Founded': '2010',
      'Headquarters': 'Tel Aviv, Israel',
      'Cost to Join': 'Free',
      'Commission': 'Fiverr takes 20% of each order',
      'Best For': 'Skilled freelancers in design, writing, tech, marketing'
    },
    faq: [
      {
        question: 'Can you make good money on Fiverr?',
        answer: 'Yes — top Fiverr sellers earn $5,000-$50,000+/month. Success depends on your skill set, niche selection, gig optimization, and reviews. High-skill categories (programming, video production, specialized writing) command much higher rates than commodity services.'
      },
      {
        question: 'How much does Fiverr take from sellers?',
        answer: 'Fiverr charges sellers a 20% service fee on all earnings. If a buyer pays $100, the seller receives $80. Fiverr also charges buyers a service fee of 5.5% (minimum $2.50) on top of the seller\'s price.'
      },
      {
        question: 'Is Fiverr good for beginners?',
        answer: 'Fiverr is one of the best starting points for freelancers because buyers come to you. The challenge is getting initial reviews. Starting with competitive pricing, creating multiple gigs, and optimizing for search terms helps new sellers get traction.'
      }
    ],
    tagline: 'World\'s largest freelance marketplace — work from anywhere, on your terms',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '202',
    slug: 'upwork',
    name: 'Upwork',
    category: 'other',
    founded_year: 2015,
    hq_location: 'San Francisco, California, USA',
    website: 'https://upwork.com',
    products_summary: 'Leading freelance platform for professional services connecting businesses with independent talent. Focuses on longer-term client relationships and higher-value projects in tech, design, writing, marketing, and more.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Freelance marketplace — sliding commission: 20% up to $500, 10% $500-$10K, 5% above $10K per client',
    overall_rating: 4.1,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 4.0,
    pros: [
      'Higher-value projects than Fiverr — better for professionals',
      'Commission drops to 5% for long-term clients over $10K — very fair',
      'Top Rated and Expert Vetted badges increase earning potential significantly',
      'Fixed-price and hourly contract options',
      'Strong client pool — major companies hire on Upwork',
      'Upwork Payment Protection for both parties'
    ],
    cons: [
      'Highly competitive for new freelancers without reviews',
      '20% commission until $500 earned per client',
      'Connects system — you spend credits to apply to jobs',
      'Can take months to land first clients without a track record',
      'Some clients have very low budgets'
    ],
    quick_facts: {
      'Founded': '2015 (merger of oDesk and Elance)',
      'Headquarters': 'San Francisco, California',
      'Cost to Join': 'Free (10 free Connects/month)',
      'Commission': '20% → 10% → 5% sliding scale per client',
      'Best For': 'Professionals in tech, design, writing, marketing'
    },
    faq: [
      {
        question: 'Is Upwork worth it for freelancers?',
        answer: 'Yes, especially for professionals with marketable skills. The sliding commission structure rewards long-term client relationships. Top Rated freelancers on Upwork consistently earn $50-$200+/hour. The platform takes time to build on but is one of the most legitimate freelance income paths available.'
      },
      {
        question: 'Upwork vs Fiverr — which is better?',
        answer: 'Upwork is better for professional services and longer-term projects. Fiverr is better for project-based work with a clear deliverable. Upwork clients tend to have higher budgets; Fiverr is more accessible for new freelancers. Many freelancers use both.'
      },
      {
        question: 'How much can you earn on Upwork?',
        answer: 'Earnings vary dramatically by skill and niche. Entry-level freelancers might earn $15-25/hour. Experienced developers, designers, and consultants routinely earn $75-200+/hour. Top freelancers with Expert Vetted status earn $150-500+/hour.'
      }
    ],
    tagline: 'Professional freelance platform with sliding commissions — reward long-term client relationships',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '203',
    slug: 'google-adsense',
    name: 'Google AdSense',
    category: 'affiliate',
    founded_year: 2003,
    hq_location: 'Mountain View, California, USA',
    website: 'https://adsense.google.com',
    products_summary: 'Google\'s advertising program allowing website and YouTube publishers to earn revenue by displaying targeted ads. Pays per click (CPC) and per thousand impressions (RPM). Free to join — Google takes ~32% of ad revenue.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Display advertising — CPC and CPM (publishers keep ~68% of ad revenue)',
    overall_rating: 3.8,
    residual_rating: 3.5,
    simplicity_rating: 4.0,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 4.0,
    pros: [
      'Free to join — no cost to publishers',
      'Passive income once set up — ads run automatically',
      'Trusted by millions of publishers worldwide',
      'Works on websites AND YouTube channels',
      'Payments via direct deposit — reliable monthly payments',
      'Easy to implement — copy/paste code snippet'
    ],
    cons: [
      'Low RPMs for most niches ($1-5/1,000 pageviews)',
      'Requires significant traffic to earn meaningful income',
      'Account can be banned for policy violations — sometimes without clear reason',
      '$100 minimum payment threshold',
      'Better alternatives (Mediavine, Raptive) available at higher traffic levels',
      'Ad quality and relevance can vary'
    ],
    quick_facts: {
      'Founded': '2003',
      'Headquarters': 'Mountain View, California',
      'Cost to Join': 'Free',
      'Publisher Share': '~68% of ad revenue',
      'Minimum Payout': '$100'
    },
    faq: [
      {
        question: 'How much does Google AdSense pay?',
        answer: 'AdSense RPM (revenue per 1,000 pageviews) varies widely by niche: $1-3 for entertainment, $3-8 for lifestyle/food, $10-30 for finance/insurance. Most small sites earn $0.50-$5 per 1,000 visitors. Significant income requires hundreds of thousands of monthly visitors.'
      },
      {
        question: 'When should I switch from AdSense to Mediavine or Raptive?',
        answer: 'Mediavine requires 50,000 monthly sessions; Raptive requires 100,000 pageviews. Both pay 2-3x more than AdSense in most niches. If you qualify, switching is almost always worth it.'
      },
      {
        question: 'Can my AdSense account be banned?',
        answer: 'Yes. Google has strict policies and can ban accounts for invalid click activity, policy violations, or even mistakenly. Always follow AdSense policies carefully and avoid placing ads in ways that encourage accidental clicks.'
      }
    ],
    tagline: 'Google\'s display advertising program — the starting point for publisher monetization',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '204',
    slug: 'mediavine',
    name: 'Mediavine',
    category: 'affiliate',
    founded_year: 2004,
    hq_location: 'Lake Worth, Florida, USA',
    website: 'https://mediavine.com',
    products_summary: 'Premium ad management network for content creators requiring a minimum of 50,000 monthly sessions. Pays significantly higher RPMs than AdSense — typically $15-40+ per 1,000 visitors. Creator-first approach with 75% revenue share.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Ad management — publishers receive 75% of net ad revenue',
    overall_rating: 4.4,
    residual_rating: 4.0,
    simplicity_rating: 4.0,
    transparency_rating: 4.5,
    community_rating: 4.5,
    value_rating: 4.5,
    pros: [
      '75% revenue share — significantly better than AdSense',
      'RPMs typically 2-4x higher than AdSense in most niches',
      'Exceptional publisher support and community',
      'Creator-first philosophy — genuinely treats publishers as partners',
      'Strong ad quality and page speed optimization',
      'Transparent reporting and payment structure'
    ],
    cons: [
      'Requires minimum 50,000 monthly sessions to apply',
      'Not suitable for brand new websites',
      'Exclusive contract — cannot run other ad networks simultaneously',
      'RPMs vary significantly by niche and season',
      'Travel and some niches saw RPM drops post-COVID'
    ],
    quick_facts: {
      'Founded': '2004',
      'Headquarters': 'Lake Worth, Florida',
      'Minimum Traffic': '50,000 monthly sessions',
      'Publisher Share': '75% of net ad revenue',
      'Best For': 'Established content sites in food, lifestyle, travel, parenting'
    },
    faq: [
      {
        question: 'How much does Mediavine pay?',
        answer: 'Mediavine RPMs typically range from $15-40+ per 1,000 sessions depending on niche, season, and traffic quality. Food, home decor, and personal finance blogs often earn the highest RPMs. Most publishers see 2-4x income increase switching from AdSense.'
      },
      {
        question: 'How do I qualify for Mediavine?',
        answer: 'You need a minimum of 50,000 monthly sessions (not pageviews), original content, and a site in good standing with Google. Apply through the Mediavine website — acceptance typically takes 2-4 weeks.'
      },
      {
        question: 'Mediavine vs Raptive (AdThrive) — which is better?',
        answer: 'Both are premium ad networks. Raptive requires 100,000 pageviews/month and is better for very high-traffic sites. Mediavine is more accessible (50,000 sessions) and is consistently praised for better publisher support. Most publishers are happy with either.'
      }
    ],
    tagline: 'Premium ad management network — 75% revenue share, 2-4x better than AdSense',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '205',
    slug: 'udemy-instructor',
    name: 'Udemy (Course Instructor)',
    category: 'other',
    founded_year: 2010,
    hq_location: 'San Francisco, California, USA',
    website: 'https://udemy.com',
    products_summary: 'World\'s largest online learning marketplace with 210,000+ courses and 73 million students. Instructors create and sell courses on any topic. Udemy takes 63% when they market your course; instructors keep 97% of sales from their own promotions.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Course marketplace — instructors earn 37% (Udemy sale) or 97% (own coupon)',
    overall_rating: 4.0,
    residual_rating: 4.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.5,
    value_rating: 4.0,
    pros: [
      'Free to create and publish courses',
      'Access to 73 million students worldwide',
      'Passive income once course is created — sells 24/7',
      '97% revenue when you drive your own traffic via coupons',
      'Udemy\'s marketplace can drive organic sales with no marketing effort',
      'No technical skills needed — Udemy handles hosting and delivery'
    ],
    cons: [
      'Udemy takes 63% on marketplace sales — instructors keep 37%',
      'Frequent Udemy-wide sales (courses often discounted to $9.99) reduce per-sale revenue',
      'High competition in popular categories',
      'Udemy owns the customer relationship — limited ability to build email list',
      'Revenue can be inconsistent due to Udemy\'s heavy discounting strategy'
    ],
    quick_facts: {
      'Founded': '2010',
      'Headquarters': 'San Francisco, California',
      'Students': '73 million+',
      'Courses': '210,000+',
      'Instructor Revenue': '37% (Udemy sale) or 97% (own coupon)'
    },
    faq: [
      {
        question: 'How much can you earn as a Udemy instructor?',
        answer: 'Top Udemy instructors earn $100,000-$1,000,000+/year. Average instructors with 2-5 courses in competitive niches might earn $1,000-$5,000/month. Success depends heavily on course quality, niche demand, and reviews.'
      },
      {
        question: 'Why does Udemy take so much commission?',
        answer: 'Udemy takes 63% on marketplace sales because they handle all marketing, payment processing, student support, and hosting. When you drive your own traffic using instructor coupons, you keep 97% — paying only a 3% transaction fee.'
      },
      {
        question: 'Should I sell on Udemy or my own platform (Teachable/Kajabi)?',
        answer: 'Udemy for discoverability and passive income from their marketplace. Your own platform (Teachable, Kajabi) for higher margins and owning the customer relationship. Many successful instructors use both — Udemy for traffic, own platform for premium offers.'
      }
    ],
    tagline: 'World\'s largest course marketplace — 73M students, passive income potential',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '206',
    slug: 'substack',
    name: 'Substack',
    category: 'other',
    founded_year: 2017,
    hq_location: 'San Francisco, California, USA',
    website: 'https://substack.com',
    products_summary: 'Newsletter and content subscription platform. Writers publish free and paid newsletters, keeping 90% of subscription revenue (Substack takes 10%). Top publications earn millions annually. Free to start — no cost until you monetize.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Newsletter platform — writers keep 90% of paid subscription revenue',
    overall_rating: 4.2,
    residual_rating: 4.0,
    simplicity_rating: 4.5,
    transparency_rating: 4.5,
    community_rating: 4.0,
    value_rating: 4.5,
    pros: [
      'Free to start — no fees until you charge subscribers',
      'Writers keep 90% of subscription revenue',
      'Simple, distraction-free writing interface',
      'Built-in audience discovery via Substack recommendations',
      'Own your subscriber list — can export anytime',
      'Growing ecosystem with 35M+ active subscriptions'
    ],
    cons: [
      '10% fee is higher than alternatives (Beehiiv, Ghost)',
      'Discoverability limited — requires own audience building',
      'No advanced email automation or segmentation',
      'Substack can potentially change terms — platform risk',
      'Better for writers; less suited for heavy HTML email designs'
    ],
    quick_facts: {
      'Founded': '2017',
      'Headquarters': 'San Francisco, California',
      'Revenue Share': 'Writers keep 90%',
      'Cost to Start': 'Free',
      'Active Subscriptions': '35 million+ (2024)'
    },
    faq: [
      {
        question: 'How much can you earn on Substack?',
        answer: 'Top Substack writers earn millions per year. A writer with 10,000 paid subscribers at $10/month earns ~$108,000/year after Substack\'s 10% fee. Even 500 paid subscribers at $8/month generates ~$43,200/year — a meaningful income stream.'
      },
      {
        question: 'Is Substack free?',
        answer: 'Yes. Substack is completely free to use for free newsletters. Substack only takes 10% when you charge paid subscribers. There are no monthly platform fees.'
      },
      {
        question: 'Substack vs Beehiiv — which is better?',
        answer: 'Beehiiv charges a monthly platform fee ($42+/month) but takes 0% of revenue. Substack is free but takes 10%. Beehiiv breaks even over Substack at ~$420/month in subscriber revenue. Beehiiv also has better analytics and monetization features for serious newsletter businesses.'
      }
    ],
    tagline: 'Newsletter platform — writers keep 90%, free to start',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '207',
    slug: 'patreon',
    name: 'Patreon',
    category: 'other',
    founded_year: 2013,
    hq_location: 'San Francisco, California, USA',
    website: 'https://patreon.com',
    products_summary: 'Membership platform for creators to earn recurring income from fans. Creators offer exclusive content, community access, and perks to paying members. Used by podcasters, artists, writers, musicians, and YouTubers.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Creator membership — Patreon takes 5-12% depending on plan',
    overall_rating: 4.0,
    residual_rating: 4.5,
    simplicity_rating: 4.0,
    transparency_rating: 4.0,
    community_rating: 4.0,
    value_rating: 4.0,
    pros: [
      'Genuine recurring income — members pay monthly, consistently',
      'Works for virtually any creator type (podcasters, artists, YouTubers)',
      'Free to launch — only pay when you earn',
      'Direct relationship with your most dedicated fans',
      'Multiple membership tier options',
      'Patreon handles payment processing and membership management'
    ],
    cons: [
      'Patreon takes 5-12% depending on plan tier',
      'Requires existing audience — doesn\'t bring you new fans',
      'Member churn can be challenging to manage',
      'Payment processor fees additional (~2.9% + $0.30)',
      'Competition from alternatives (Ko-fi, Buy Me a Coffee)'
    ],
    quick_facts: {
      'Founded': '2013',
      'Headquarters': 'San Francisco, California',
      'Creator Fee': '5% (Lite), 8% (Pro), 12% (Premium)',
      'Cost to Start': 'Free',
      'Creators': '250,000+ active creators'
    },
    faq: [
      {
        question: 'How much do Patreon creators earn?',
        answer: 'Top Patreon creators earn $100,000+/month. The median Patreon creator earns much less — most creators with under 1,000 patrons earn $100-$2,000/month. Success correlates strongly with existing audience size and content quality.'
      },
      {
        question: 'Is Patreon free to use?',
        answer: 'Patreon is free to set up. They take a percentage of your earnings: 5% on Lite, 8% on Pro, and 12% on Premium. Payment processor fees (2.9% + $0.30 per transaction) are additional.'
      },
      {
        question: 'What types of creators succeed on Patreon?',
        answer: 'Podcasters, musicians, artists, comic creators, YouTubers, writers, and educators all thrive on Patreon. The key is offering exclusive value that fans can\'t get for free. Consistent, quality content and genuine community engagement drive retention.'
      }
    ],
    tagline: 'Creator membership platform — genuine recurring income from your biggest fans',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '208',
    slug: 'amazon-merch-on-demand',
    name: 'Amazon Merch on Demand',
    category: 'affiliate',
    founded_year: 2015,
    hq_location: 'Seattle, Washington, USA',
    website: 'https://merch.amazon.com',
    products_summary: 'Print-on-demand service allowing creators to sell custom t-shirts, hoodies, and other apparel on Amazon with no upfront costs. Amazon handles printing, shipping, and customer service. Creators earn royalties per sale.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Print-on-demand royalties — typically $2-10 per sale depending on product and price',
    overall_rating: 3.8,
    residual_rating: 3.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 4.0,
    pros: [
      'Zero upfront cost — no inventory or printing expenses',
      'Amazon\'s massive marketplace provides built-in traffic',
      'Truly passive — earn royalties while you sleep',
      'Amazon handles fulfillment, customer service, and returns',
      'Prime-eligible products increase conversion rates',
      'Scale to thousands of designs with no additional cost'
    ],
    cons: [
      'Invite/application required — approval not guaranteed',
      'Royalties are relatively low ($2-10 per shirt)',
      'Highly competitive — millions of designs on the platform',
      'Limited to Amazon\'s product catalog',
      'Tier system limits uploads until you reach sales milestones',
      'Design copyright enforcement is your responsibility'
    ],
    quick_facts: {
      'Founded': '2015',
      'Headquarters': 'Seattle, Washington',
      'Cost': 'Free (invite required)',
      'Royalty': '$2-10 per item sold (varies by price point)',
      'Products': 'T-shirts, hoodies, PopSockets, phone cases, and more'
    },
    faq: [
      {
        question: 'How much can you earn with Amazon Merch on Demand?',
        answer: 'Successful Merch sellers with hundreds of designs earn $1,000-$10,000+/month. Most beginners earn $50-$500/month. Volume is key — more quality designs means more sales. Niche research and SEO are critical skills for success.'
      },
      {
        question: 'Is Amazon Merch on Demand free?',
        answer: 'Yes. There are no fees to join or use the service. Amazon handles all production and shipping costs. You earn a royalty each time a product sells. You need to request an invitation to join.'
      },
      {
        question: 'What sells best on Amazon Merch?',
        answer: 'Niche-specific designs outperform generic ones. Popular categories include humor/novelty, hobbies (fishing, hunting, gaming), occupations, family milestones, and holiday themes. Keyword research and trending topics are essential for visibility.'
      }
    ],
    tagline: 'Sell custom apparel on Amazon with zero upfront cost — truly passive income',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '117',
    slug: 'livegood',
    name: 'LiveGood',
    category: 'mlm',
    founded_year: 2022,
    hq_location: 'Osprey, Florida, USA',
    website: 'https://livegood.com',
    products_summary: 'Health and wellness MLM founded by Ben Glinsky in 2022. Sells supplements, CBD products, and personal care items through a unique membership model ($9.95/month) with no required product purchases to earn. Explosive growth — estimated $85-125M in 2024 revenue, 350,000+ members globally.',
    monthly_cost_min: 9,
    monthly_cost_max: 10,
    comp_plan_type: 'Forced matrix (2x15) — members pay $9.95/month, affiliates earn from matrix positions',
    overall_rating: 2.8,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 3.0,
    pros: [
      'Very low membership cost — $9.95/month vs $100+ at most MLMs',
      'No required product purchase to earn commissions',
      'Explosive growth — 350,000+ members and estimated $85-125M revenue in 2024',
      'Products positioned as "wholesale" pricing for members',
      'Simple concept attracts beginners to the opportunity'
    ],
    cons: [
      'Does not publish a transparent income disclosure statement',
      'Forced matrix (2x15) heavily favors early joiners — late entrants struggle',
      'Most income claims online are from top recruiters, not typical members',
      'Rapid growth of new MLMs often followed by plateau or decline',
      'Business model fundamentally relies on continuous recruitment',
      'Founded only 2022 — no long-term track record of stability'
    ],
    quick_facts: {
      'Founded': '2022',
      'Headquarters': 'Osprey, Florida',
      'Founder': 'Ben Glinsky',
      'Membership Cost': '$9.95/month',
      'Matrix Type': 'Forced 2x15 matrix',
      '2024 Est. Revenue': '$85-125 million (1,600% growth)'
    },
    faq: [
      {
        question: 'Is LiveGood a pyramid scheme?',
        answer: 'LiveGood is structured as a legal MLM with real products. However, like most matrix-based MLMs, income potential is heavily dependent on your position in the matrix and how early you joined. The forced 2x15 matrix rewards early adopters disproportionately.'
      },
      {
        question: 'How does LiveGood make money?',
        answer: 'LiveGood earns revenue through $9.95/month member subscriptions plus product sales. Affiliates who recruit new members earn commissions based on their matrix position. The low entry cost has been a key driver of the company\'s rapid growth.'
      },
      {
        question: 'Is LiveGood\'s growth sustainable?',
        answer: 'LiveGood\'s 1,600% revenue growth in 2024 is impressive but typical of new MLMs in their early surge phase. Historically, many MLMs experience rapid growth followed by plateau or decline as recruitment slows. LiveGood is too new to have a proven long-term track record.'
      },
      {
        question: 'How much do LiveGood affiliates earn?',
        answer: 'LiveGood uses a forced 2x15 matrix compensation structure. As with any MLM, meaningful income requires building a substantial team. The company has grown rapidly since 2022.'
      }
    ],
    tagline: 'Fast-growing $9.95/month wellness MLM — 350,000+ members since 2022',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '118',
    slug: 'beachbody-bodi',
    name: 'Beachbody / BODi',
    category: 'affiliate',
    founded_year: 1998,
    hq_location: 'Los Angeles, California, USA',
    website: 'https://bodi.com',
    products_summary: 'Fitness and nutrition company behind P90X, Insanity, and 21 Day Fix. Rebranded from Beachbody to BODi in 2022. Pivoted from MLM to single-level affiliate model on November 1, 2024 — eliminating the multi-level coaching structure and cutting 33% of workforce (170 employees). Publicly traded on NYSE (BODI).',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Single-level affiliate (pivoted from MLM in November 2024)',
    overall_rating: 3.0,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.5,
    value_rating: 3.0,
    pros: [
      'Pivoted from MLM to single-level affiliate model in November 2024 — more transparent structure',
      'Iconic fitness brand — P90X, Insanity, and 21 Day Fix have broad recognition',
      'Subscription streaming platform (BODi) includes 1,000s of workouts',
      'Real, high-quality fitness products with genuine consumer demand',
      'Affiliate model eliminates recruiting pressure of MLM'
    ],
    cons: [
      'Former MLM coaches who built multi-level teams lost those residual income streams in the pivot',
      'Previous MLM model required building customer base and team for meaningful income',
      'Only 1% of former coaches earned more than $10,000/year under MLM model',
      'Pivot came with 33% workforce reduction — company in financial restructuring',
      'Publicly traded (NYSE: BODI) — share price has declined significantly',
      'New affiliate program commissions lower than top MLM coach earnings'
    ],
    quick_facts: {
      'Founded': '1998',
      'Headquarters': 'Los Angeles, California',
      'Stock Ticker': 'NYSE: BODI',
      'MLM Pivot Date': 'November 1, 2024',
      'Workforce Cut': '170 employees (33%) during pivot',
      'Current Model': 'Affiliate (2024 transition)'
    },
    faq: [
      {
        question: 'Did Beachbody stop being an MLM?',
        answer: 'Yes. On September 30, 2024, Beachbody (BODi) announced a pivot from its multi-level marketing model to a single-level affiliate program, effective November 1, 2024. The change eliminated the multi-level coaching compensation structure and resulted in 170 layoffs (33% of workforce).'
      },
      {
        question: 'What happened to Beachbody coaches after the pivot?',
        answer: 'Former Beachbody coaches who had built multi-level teams lost the residual income from their downline. The new affiliate model pays commissions only on direct personal sales. Many coaches who built their businesses around the team-building income were significantly impacted.'
      },
      {
        question: 'How much did Beachbody coaches earn under the MLM model?',
        answer: 'Under the previous MLM model, compensation was tied to building a customer base and team. The 2024 transition to affiliate structure changed the compensation model to simpler per-referral commissions without multi-level recruiting.'
      },
      {
        question: 'Is BODi (Beachbody) a good fitness product?',
        answer: 'BODi\'s streaming fitness platform includes thousands of workouts from P90X, Insanity, 21 Day Fix, and more. As a fitness product, it has genuine value. As a business opportunity under either the old MLM or new affiliate model, results for most participants are modest.'
      }
    ],
    tagline: 'Iconic fitness brand that pivoted from MLM to affiliate model in November 2024',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '119',
    slug: 'avon-products',
    name: 'Avon Products',
    category: 'direct_sales',
    founded_year: 1886,
    hq_location: 'London, UK (international operations) / US under LG H&H',
    website: 'https://avon.com',
    products_summary: 'Iconic door-to-door beauty company founded in 1886. Avon Products Inc. filed for bankruptcy in August 2024 due to $225M+ in talcum powder lawsuit liabilities. U.S. operations continue under LG Household & Health Care Ltd. International operations affected by bankruptcy.',
    monthly_cost_min: 0,
    monthly_cost_max: 25,
    comp_plan_type: 'Direct sales with multi-level team earnings',
    overall_rating: 2.0,
    residual_rating: 1.5,
    simplicity_rating: 3.0,
    transparency_rating: 2.0,
    community_rating: 2.5,
    value_rating: 2.0,
    pros: [
      'Iconic 138-year-old brand with global recognition',
      'U.S. operations continue under LG Household & Health Care Ltd.',
      'Low startup cost — starter kit available',
      'Broad product catalog: cosmetics, skincare, fashion accessories'
    ],
    cons: [
      '⚠️ Avon Products Inc. filed for Chapter 11 bankruptcy in August 2024',
      'Bankruptcy triggered by $225M+ in talcum powder personal injury lawsuit liabilities',
      'International operations significantly affected by bankruptcy proceedings',
      'Business opportunity highly uncertain given ongoing restructuring',
      'Competition from Sephora, Ulta, Amazon has eroded direct sales model',
      'Compensation depends on sales volume and team building'
    ],
    quick_facts: {
      'Founded': '1886',
      'Status': '⚠️ Avon Products Inc. filed bankruptcy August 2024',
      'U.S. Owner': 'LG Household & Health Care Ltd. (post-bankruptcy)',
      'Bankruptcy Cause': '$225M+ talcum powder lawsuit liabilities',
      'Former Parent': 'Natura & Co (sold Avon US operations)'
    },
    faq: [
      {
        question: 'Did Avon go out of business?',
        answer: 'Avon Products Inc. filed for Chapter 11 bankruptcy in August 2024 due to massive talcum powder lawsuit liabilities exceeding $225 million. U.S. operations continue under LG Household & Health Care Ltd. International operations were affected by the bankruptcy proceedings.'
      },
      {
        question: 'Is it safe to sell Avon in 2025?',
        answer: 'Given the ongoing bankruptcy and restructuring, the Avon business opportunity carries significant risk. U.S. Representatives continue under LG H&H ownership, but the business model was already struggling against modern beauty retail before the bankruptcy.'
      },
      {
        question: 'Why did Avon file for bankruptcy?',
        answer: 'Avon Products Inc. filed bankruptcy primarily due to $225+ million in costs defending and settling personal injury lawsuits related to talcum powder in its products. The company\'s revenues had also been declining as consumers shifted to specialty retailers and e-commerce.'
      }
    ],
    tagline: '⚠️ 138-year-old beauty icon — Avon Products Inc. filed bankruptcy August 2024',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '120',
    slug: 'younique',
    name: 'Younique',
    category: 'mlm',
    founded_year: 2012,
    hq_location: 'Lehi, Utah, USA',
    website: 'https://youniqueproducts.com',
    products_summary: 'Social media-focused makeup and skincare MLM founded in 2012 by Derek Maxfield and Melanie Huscroft. Known for its Moodstruck mascara and pioneering the "virtual makeup party" model on Facebook. Coty Inc. sold its 60% stake back to Younique in 2019.',
    monthly_cost_min: 0,
    monthly_cost_max: 75,
    comp_plan_type: 'Multi-level with color status ranks (White through Black)',
    overall_rating: 2.0,
    residual_rating: 1.8,
    simplicity_rating: 3.0,
    transparency_rating: 1.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Pioneered social media direct sales model on Facebook',
      'Strong brand recognition among MLM makeup buyers',
      'Virtual party model allows selling from anywhere',
      'Some popular products (Moodstruck mascara)'
    ],
    cons: [
      'Does not publish a transparent income disclosure — major concern',
      'Compensation structure requires building substantial customer base for meaningful returns',
      'Coty Inc. divested its 60% stake in 2019 — confidence signal',
      'Products considered overpriced vs. retail makeup alternatives',
      'Social media selling model creates strain on personal relationships',
      'Required monthly purchase (~$125 Presenter Status Volume) to stay active'
    ],
    quick_facts: {
      'Founded': '2012',
      'Headquarters': 'Lehi, Utah',
      'Founders': 'Derek Maxfield & Melanie Huscroft',
      'Business Model': 'Social media-focused direct sales',
      'Notable': 'Coty sold its 60% stake back to Younique in 2019'
    },
    faq: [
      {
        question: 'Is Younique a pyramid scheme?',
        answer: 'Younique is a legal MLM with real makeup products. The company pioneered virtual parties and social media-based selling. Compensation depends on building a customer base and team.'
      },
      {
        question: 'Why did Coty sell its Younique stake?',
        answer: 'Coty Inc. acquired a 60% stake in Younique in 2017 for $600 million, then sold it back to Younique in 2019 for a fraction of the price. The exit was attributed to the challenging MLM market and underperformance vs. projections.'
      },
      {
        question: 'Do Younique products work?',
        answer: 'Younique\'s Moodstruck mascara has a dedicated following. Other products receive mixed reviews. The products are significantly overpriced compared to comparable makeup at Sephora, Ulta, or even drugstore brands.'
      }
    ],
    tagline: 'Social media makeup MLM — Coty exited investment',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '121',
    slug: 'optavia-medifast',
    name: 'OPTAVIA / Medifast',
    category: 'mlm',
    founded_year: 1981,
    hq_location: 'Baltimore, Maryland, USA',
    website: 'https://optavia.com',
    products_summary: 'Weight loss program sold through a network of Coaches. Medifast (NYSE: MED) is the publicly traded parent company. OPTAVIA is their direct sales/MLM channel. Sells pre-packaged "fuelings" (meal replacements) with 1-on-1 health coaching. Revenue peaked at $1.5B in 2022 and has since declined significantly.',
    monthly_cost_min: 300,
    monthly_cost_max: 500,
    comp_plan_type: 'Multi-level with client-based coaching model',
    overall_rating: 2.4,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Publicly traded parent company (NYSE: MED) — financial transparency',
      'Structured weight loss program with real clinical support',
      'Coaches earn from client product orders — not purely recruiting',
      'Some clients achieve genuine weight loss results'
    ],
    cons: [
      'Very expensive program — clients spend $300-500+/month on fuelings',
      'Revenue peaked at $1.5B in 2022, declining significantly since — business contraction',
      'Most Coaches earn very modest income from client base management',
      'Program is difficult to sustain long-term — high dropout/churn rates',
      'Products (fuelings) are heavily processed meal replacements',
      'Coach income heavily dependent on continuous client recruitment'
    ],
    quick_facts: {
      'Founded': '1981 (Medifast)',
      'Headquarters': 'Baltimore, Maryland',
      'Stock Ticker': 'NYSE: MED',
      'Monthly Client Cost': '$300-500+ for program',
      '2022 Peak Revenue': '$1.5 billion (declining since)'
    },
    faq: [
      {
        question: 'Is OPTAVIA an MLM?',
        answer: 'OPTAVIA operates through an MLM-style distribution model where Coaches earn commissions from their clients\' product purchases and from recruiting new Coaches. The parent company, Medifast, is publicly traded (NYSE: MED).'
      },
      {
        question: 'How much do OPTAVIA Coaches earn?',
        answer: 'Coach earnings depend on building and maintaining a client base on the OPTAVIA weight loss program. The company is publicly traded (NYSE: MED), providing transparency. Revenue has been declining from the 2022 peak.'
      },
      {
        question: 'Is OPTAVIA effective for weight loss?',
        answer: 'Clinical studies show meal replacement programs can be effective for short-term weight loss. However, the program\'s high cost ($300-500+/month), reliance on processed food products, and high dropout rates raise questions about long-term sustainability.'
      }
    ],
    tagline: 'Publicly traded weight loss MLM — $1.5B peak revenue in 2022, declining since',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '122',
    slug: 'jeunesse-global',
    name: 'Jeunesse Global',
    category: 'mlm',
    founded_year: 2009,
    hq_location: 'Lake Mary, Florida, USA',
    website: 'https://jeunesseglobal.com',
    products_summary: 'Anti-aging skincare and nutritional supplements MLM founded by Randy Ray and Wendy Lewis in 2009. Known for Luminesce serum, Instantly Ageless, and NV makeup. Rapid growth in Asia Pacific markets. Subject to multiple lawsuits and regulatory investigations.',
    monthly_cost_min: 50,
    monthly_cost_max: 300,
    comp_plan_type: 'Binary hybrid multi-level compensation plan',
    overall_rating: 2.0,
    residual_rating: 1.8,
    simplicity_rating: 1.8,
    transparency_rating: 1.5,
    community_rating: 2.5,
    value_rating: 1.8,
    pros: [
      'Rapidly growing company with strong Asia Pacific presence',
      'Some popular products with genuine before/after results (Instantly Ageless)',
      'Multiple income streams including retail, team bonuses, and rank bonuses',
      'Founded by experienced direct sales entrepreneurs'
    ],
    cons: [
      'Multiple class action lawsuits alleging pyramid scheme characteristics',
      'FTC and DOJ investigations reported',
      'Complex binary hybrid compensation plan heavily favors early joiners',
      'Compensation structure requires significant sales volume for meaningful returns',
      'Aggressive recruiting tactics reported by former distributors',
      'Products priced at extreme premium vs. comparable skincare'
    ],
    quick_facts: {
      'Founded': '2009',
      'Headquarters': 'Lake Mary, Florida',
      'Founders': 'Randy Ray & Wendy Lewis',
      'Legal Issues': 'Multiple class action lawsuits, regulatory investigations',
      'Primary Market': 'Asia Pacific'
    },
    faq: [
      {
        question: 'Is Jeunesse Global a scam?',
        answer: 'Jeunesse is a legal MLM company with real products. However, it has faced multiple class action lawsuits alleging pyramid scheme characteristics and has been subject to regulatory investigation. Income outcomes for most distributors are poor, and the compensation plan is complex and favors early joiners.'
      },
      {
        question: 'What lawsuits has Jeunesse faced?',
        answer: 'Jeunesse has faced multiple class action lawsuits alleging it operates as a pyramid scheme, that income claims are deceptive, and that the business model prioritizes recruitment over retail sales. The company has settled some lawsuits while others remain ongoing.'
      },
      {
        question: 'What are Jeunesse\'s best products?',
        answer: 'Instantly Ageless (a temporary eye cream that reduces wrinkles within minutes) is Jeunesse\'s most viral product and generates significant social media buzz. Luminesce serum is also popular. Both are heavily overpriced vs. clinical alternatives.'
      }
    ],
    tagline: 'Anti-aging MLM with multiple lawsuits — rapid growth in Asia Pacific',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '123',
    slug: 'beautycounter',
    name: 'Beautycounter',
    category: 'mlm',
    founded_year: 2013,
    hq_location: 'Santa Monica, California, USA',
    website: 'https://beautycounter.com',
    products_summary: '⚠️ TERMINATED ALL MLM DISTRIBUTORS APRIL 2024. Clean beauty brand founded by Gregg Renfrew in 2013. Was known for advocating safer cosmetics legislation while operating an MLM distribution model. Terminated all Brand Advocate agreements on April 17, 2024, shutting down the MLM side of the business.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ MLM distribution model terminated April 17, 2024',
    overall_rating: 1.5,
    residual_rating: 1.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 2.0,
    value_rating: 2.0,
    pros: [
      'Championed clean beauty and safer cosmetics legislation',
      'High-quality products with genuine clean beauty positioning',
      'Strong brand reputation in the natural/clean beauty space',
      'Products now available through direct retail channels'
    ],
    cons: [
      '⚠️ Terminated ALL Brand Advocate (MLM) agreements on April 17, 2024',
      'Thousands of distributors lost their income streams overnight with 1-day notice',
      'Business opportunity no longer exists — company exited MLM model entirely',
      'Former advocates unable to earn commissions on ongoing sales',
      'Demonstrates the fundamental risk of building income on someone else\'s platform'
    ],
    quick_facts: {
      'Founded': '2013',
      'Headquarters': 'Santa Monica, California',
      'MLM Terminated': '⚠️ April 17, 2024 — ALL distributors terminated',
      'Founder': 'Gregg Renfrew',
      'Current Model': 'Direct retail only (no affiliate/MLM opportunity)'
    },
    faq: [
      {
        question: 'Did Beautycounter shut down its MLM?',
        answer: 'Yes. Beautycounter terminated all Brand Advocate agreements on April 17, 2024, effectively shutting down its MLM distribution model. Thousands of advocates received written termination notices with essentially no advance warning. The company continues selling products through direct retail channels.'
      },
      {
        question: 'Can you still sell Beautycounter products?',
        answer: 'Beautycounter products are still sold, but no longer through an MLM distribution model. There is no brand advocate/distributor program to join. Products are sold directly through beautycounter.com.'
      },
      {
        question: 'Why did Beautycounter shut down its MLM?',
        answer: 'The specific reasons were not publicly disclosed. The shutdown followed a period of ownership and leadership changes. The abrupt termination highlighted the risk that MLM participants face when companies decide to change their business models with little notice.'
      }
    ],
    tagline: '⚠️ Clean beauty brand that terminated ALL MLM distributors on April 17, 2024',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '124',
    slug: 'pruvit',
    name: 'Prüvit',
    category: 'mlm',
    founded_year: 2015,
    hq_location: 'Springville, Utah, USA',
    website: 'https://pruvit.com',
    products_summary: 'Ketone supplement MLM founded by Brian Underwood. Sells exogenous ketone drinks (KETO//OS) and related products. Positions products as supporting ketosis, energy, and weight management. Subject to TINA.org income claims audit in 2024.',
    monthly_cost_min: 80,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level with rank-based Promoter system',
    overall_rating: 2.1,
    residual_rating: 1.8,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Ketone supplements have growing consumer interest with keto diet trend',
      'Some users report genuine energy and mental clarity benefits',
      'Active community with regular challenges and events',
      'Products available in multiple flavors'
    ],
    cons: [
      'Compensation structure requires building substantial customer base',
      'Exogenous ketones are significantly overpriced vs. DIY or retail alternatives',
      'Health claims by distributors audited by TINA.org for FTC compliance issues (2024)',
      'Monthly autoship ~$80-200 required to stay active and earn',
      'Scientific evidence for exogenous ketone benefits is mixed',
      'Most Promoters earn far below the cost of their required product purchases'
    ],
    quick_facts: {
      'Founded': '2015',
      'Headquarters': 'Springville, Utah',
      'Founder': 'Brian Underwood',
      'Business Model': 'Unilevel compensation with autoship',
      'TINA.org Audit': 'Income claims audited October 2024'
    },
    faq: [
      {
        question: 'Does Prüvit KETO//OS actually work?',
        answer: 'Exogenous ketones can raise blood ketone levels, but the health benefits of this effect are debated in the scientific literature. Some users report increased energy and mental focus. However, the products are significantly overpriced compared to alternatives, and the ketogenic diet itself (without supplements) achieves similar results.'
      },
      {
        question: 'How much do Prüvit Promoters earn?',
        answer: 'Promoter earnings depend on building a customer base. Monthly autoship costs ($80-200) must be factored into profitability calculations. Higher ranks unlock better commission structures.'
      },
      {
        question: 'Is Prüvit an MLM?',
        answer: 'Yes. Prüvit operates a multi-level marketing compensation plan where Promoters earn commissions on product sales and from recruiting new Promoters. TINA.org audited Prüvit\'s income claims in 2024 for FTC compliance.'
      }
    ],
    tagline: 'Ketone supplement MLM focused on exogenous ketones',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '125',
    slug: '4life-research',
    name: '4Life Research',
    category: 'mlm',
    founded_year: 1998,
    hq_location: 'Sandy, Utah, USA',
    website: 'https://4life.com',
    products_summary: 'Nutritional supplement MLM known for Transfer Factor products — supplements claimed to support immune health. Founded by David and Bianca Lisonbee in 1998. Estimated $300M revenue in 2024. Active in 80+ countries.',
    monthly_cost_min: 80,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level with Diamond bonus pool',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Transfer Factor is a unique product category with patented technology',
      'Founded 1998 — stable 26-year track record',
      'Active in 80+ countries with global distributor base',
      'Estimated $300M revenue in 2024 — financially stable'
    ],
    cons: [
      'Income disclosure audited by TINA.org for compliance issues (2024)',
      'Most distributors earn minimal income — typical MLM income distribution',
      'Health claims for Transfer Factor products not evaluated by FDA',
      'Required monthly purchases ($80-200) to maintain active status and qualify for commissions',
      'Products significantly overpriced vs. comparable immune supplements'
    ],
    quick_facts: {
      'Founded': '1998',
      'Headquarters': 'Sandy, Utah',
      'Founders': 'David & Bianca Lisonbee',
      'Est. 2024 Revenue': '$300 million',
      'Markets': '80+ countries'
    },
    faq: [
      {
        question: 'What are 4Life Transfer Factor products?',
        answer: '4Life\'s flagship products are Transfer Factor supplements — proprietary extracts from cow colostrum and egg yolks claimed to support immune system function. The technology is patented. However, FDA has not evaluated these claims, and independent clinical evidence is limited.'
      },
      {
        question: 'Is 4Life a legitimate MLM?',
        answer: '4Life is a legitimate MLM company with 26 years in business and real products. However, like most MLMs, the income opportunity is challenging — most distributors earn minimal income after accounting for required monthly product purchases.'
      },
      {
        question: 'How much do 4Life distributors earn?',
        answer: '4Life has been in business since 1998 and is known for its Transfer Factor immune support products. Compensation depends on building a customer base. TINA.org reviewed 4Life\'s income claims in 2024 for FTC compliance.'
      }
    ],
    tagline: 'Transfer factor immune supplement MLM — 26 years, 80+ countries',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '126',
    slug: 'atomy',
    name: 'Atomy',
    category: 'mlm',
    founded_year: 2009,
    hq_location: 'Gongju, South Korea',
    website: 'https://atomy.com',
    products_summary: 'South Korean MLM founded by Han-Gil Park selling health, beauty, and household products. Known for its "absolute quality, absolute price" positioning offering premium products at accessible prices. Strong in Asia Pacific markets with over 20 million members globally.',
    monthly_cost_min: 0,
    monthly_cost_max: 100,
    comp_plan_type: 'Sliding scale / customer accumulation plan',
    overall_rating: 2.5,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 3.0,
    pros: [
      '"Absolute quality, absolute price" positioning — products claim to offer value vs. premium brands',
      'Over 20 million members globally — significant scale',
      'Free to join — no starter kit required',
      'Strong in Asian markets with well-established infrastructure',
      'No required monthly purchases to remain a member'
    ],
    cons: [
      'Complex "pay to play" rank advancement system',
      'Income potential heavily dependent on recruiting and team volume',
      'Limited income disclosure transparency for Western markets',
      'Primarily designed for and dominant in Asian markets — harder to build in US',
      'Some critics label as having pyramid scheme characteristics in structure'
    ],
    quick_facts: {
      'Founded': '2009',
      'Headquarters': 'Gongju, South Korea',
      'Founder': 'Han-Gil Park',
      'Members': '20 million+ globally',
      'Cost to Join': 'Free'
    },
    faq: [
      {
        question: 'Is Atomy a pyramid scheme?',
        answer: 'Atomy is a legal MLM company with real products and free membership. However, its compensation structure requires significant team-building to advance ranks and earn meaningful income. Critics note the "pay to play" nature of rank advancement. Atomy operates legally under South Korea\'s Fair Trade Commission regulations.'
      },
      {
        question: 'Is Atomy free to join?',
        answer: 'Yes. Unlike most MLMs, Atomy has no starter kit cost and no required monthly purchases to remain a member. This low barrier to entry has contributed to their 20+ million member count, though membership numbers don\'t directly translate to active earners.'
      },
      {
        question: 'Can you make money with Atomy in the US?',
        answer: 'Atomy\'s business model works best in Asian markets where the company has strong brand recognition. Building an Atomy business in the US is challenging due to limited brand awareness, competition from established supplement brands, and the general difficulty of MLM income generation.'
      }
    ],
    tagline: 'South Korean MLM with 20M+ members — "absolute quality, absolute price"',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '300',
    slug: 'onecoin',
    name: 'OneCoin',
    category: 'other',
    founded_year: 2014,
    hq_location: 'Sofia, Bulgaria (operations worldwide)',
    website: 'N/A — defunct',
    products_summary: '⚠️ FRAUD — THE LARGEST CRYPTOCURRENCY SCAM IN HISTORY. OneCoin defrauded investors of an estimated $4-25 billion worldwide between 2014-2017. Founded by Ruja Ignatova ("Cryptoqueen"), who disappeared in 2017 and remains a fugitive. The FBI offers a $5 million reward for information leading to her arrest (increased from $250K in June 2024). OneCoin was never a real cryptocurrency — there was no blockchain.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ FRAUD — Ponzi/pyramid scheme disguised as cryptocurrency MLM',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.0,
    transparency_rating: 1.0,
    community_rating: 1.0,
    value_rating: 1.0,
    pros: [
      'There are no legitimate pros — OneCoin was a complete fraud'
    ],
    cons: [
      '⚠️ FRAUD — Estimated $4-25 billion stolen from investors worldwide',
      'OneCoin was never a real cryptocurrency — no blockchain ever existed',
      'Founder Ruja Ignatova ("Cryptoqueen") disappeared in 2017 — still a fugitive',
      'FBI offering $5 million reward for information leading to arrest (2024)',
      'Co-founder Sebastian Greenwood sentenced to 20 years in federal prison (2024)',
      'Ruja\'s brother Konstantin Ignatov pleaded guilty to fraud charges',
      'UK court issued global asset freeze orders on associates (2024)',
      'Millions of victims across 175 countries lost life savings'
    ],
    quick_facts: {
      'Founded': '2014',
      'Status': '⚠️ CRIMINAL FRAUD — Defunct',
      'Founder': 'Ruja Ignatova ("Cryptoqueen") — FBI fugitive',
      'Estimated Fraud': '$4-25 billion stolen from investors',
      'FBI Reward': '$5 million for information on Ruja\'s whereabouts (2024)',
      'Co-Founder Sentence': 'Sebastian Greenwood — 20 years federal prison (2024)'
    },
    faq: [
      {
        question: 'Is OneCoin a real cryptocurrency?',
        answer: 'No. OneCoin was never a real cryptocurrency. There was no blockchain — it was entirely fabricated. Victims were sold "educational packages" that came with fake coins stored on a centralized database controlled by OneCoin. The coins could never be traded on real exchanges.'
      },
      {
        question: 'Where is Ruja Ignatova (the Cryptoqueen) now?',
        answer: 'Ruja Ignatova disappeared in October 2017 after being secretly indicted by US authorities. She has not been seen publicly since. The FBI increased its reward for information leading to her arrest to $5 million in June 2024. She was placed on the FBI\'s Ten Most Wanted Fugitives list.'
      },
      {
        question: 'How much money did OneCoin steal?',
        answer: 'Estimates range from $4 billion to $25 billion stolen from an estimated 3 million victims in 175 countries between 2014-2017. It is widely considered the largest cryptocurrency fraud in history. Many victims lost their entire life savings.'
      },
      {
        question: 'Can OneCoin victims get their money back?',
        answer: 'Recovering funds is extremely difficult. Some asset recovery efforts are ongoing through court proceedings in the UK and other jurisdictions. A UK court issued worldwide freezing orders on Ignatova\'s assets in August 2024. Most victims are unlikely to recover significant funds.'
      }
    ],
    tagline: '⚠️ THE LARGEST CRYPTO FRAUD IN HISTORY — $4-25B stolen, founder is FBI fugitive',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '301',
    slug: 'digital-altitude-mobe',
    name: 'Digital Altitude / MOBE',
    category: 'affiliate',
    founded_year: 2014,
    hq_location: 'USA / Malaysia (operations shut down)',
    website: 'N/A — shut down by FTC',
    products_summary: '⚠️ SHUT DOWN BY FTC. Digital Altitude and MOBE (My Online Business Education) were high-ticket internet marketing coaching programs shut down by the FTC in 2018. Digital Altitude settled with the FTC for fraud. MOBE\'s Matt Lloyd was ordered to pay $12.9 million. Both programs claimed members could make "six figures in 90 days" — claims the FTC deemed deceptive.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ SHUT DOWN BY FTC 2018 — high-ticket coaching scheme',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.0,
    transparency_rating: 1.0,
    community_rating: 1.0,
    value_rating: 1.0,
    pros: [
      'No legitimate pros — both programs were shut down by the FTC for fraud'
    ],
    cons: [
      '⚠️ Digital Altitude: FTC settlement 2019 for deceptive income claims',
      '⚠️ MOBE: FTC shut down June 2018, Matt Lloyd ordered to pay $12.9 million',
      'Both programs claimed "six figures in 90 days" — deemed deceptive by FTC',
      'Thousands of victims paid $1,000-$50,000+ in high-ticket upsells',
      'Both programs are permanently shut down',
      'David Sharpe (later of Legendary Marketer) was a co-founder of Empower Network, a similar program that also went bankrupt'
    ],
    quick_facts: {
      'Digital Altitude Founded': '2014 (by Michael Force)',
      'MOBE Founded': '~2012 (by Matt Lloyd)',
      'FTC Action': 'Both shut down 2018',
      'MOBE Settlement': 'Matt Lloyd ordered to pay $12.9 million',
      'Digital Altitude': 'Executives settled 2019 for deceptive income claims',
      'Status': '⚠️ PERMANENTLY SHUT DOWN'
    },
    faq: [
      {
        question: 'What happened to Digital Altitude?',
        answer: 'The FTC took action against Digital Altitude in 2018, and four executives settled in March 2019 over allegations of deceiving consumers with claims of making "six figures in 90 days." The program was permanently shut down.'
      },
      {
        question: 'What happened to MOBE?',
        answer: 'The FTC halted MOBE (My Online Business Education) in June 2018, calling it a "massive internet business coaching scheme." MOBE\'s founder Matt Lloyd was ordered to pay $12.9 million. The program was permanently shut down and consumers were warned not to pay any money to MOBE.'
      },
      {
        question: 'Were Digital Altitude and MOBE related?',
        answer: 'Both were similar high-ticket internet marketing coaching programs operating at the same time. Both used similar business models with escalating upsells ranging from hundreds to tens of thousands of dollars. Both were shut down by the FTC for deceptive income claims in 2018.'
      }
    ],
    tagline: '⚠️ SHUT DOWN BY FTC 2018 — deceptive high-ticket coaching schemes',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '302',
    slug: 'empower-network',
    name: 'Empower Network',
    category: 'affiliate',
    founded_year: 2011,
    hq_location: 'Tampa, Florida, USA (defunct)',
    website: 'N/A — bankrupt',
    products_summary: '⚠️ BANKRUPT 2017. Blogging and internet marketing MLM founded by David Wood and David Sharpe in 2011. At its peak had 100,000+ affiliates promoting viral blog posts and digital training products. Filed for bankruptcy in August 2017 following David Wood\'s highly publicized personal struggles. David Sharpe later founded Legendary Marketer (also now closed).',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ BANKRUPT — defunct MLM/affiliate program',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.0,
    transparency_rating: 1.0,
    community_rating: 1.0,
    value_rating: 1.0,
    pros: [
      'Was genuinely innovative — pioneered viral blog-based affiliate marketing in 2011',
      'Provided income for some early affiliates before collapse',
      'David Sharpe\'s teaching was considered valuable by some members'
    ],
    cons: [
      '⚠️ Filed for bankruptcy August 2017 — all affiliates lost income overnight',
      'Co-founder David Wood experienced public personal breakdown before bankruptcy',
      'David Sharpe left in 2015 amid personal and professional conflicts',
      'Illustrates the catastrophic risk of building income on someone else\'s platform',
      'Many affiliates lost significant income when the company collapsed',
      'Successor Legendary Marketer (David Sharpe) also closed in February 2026'
    ],
    quick_facts: {
      'Founded': '2011',
      'Founders': 'David Wood & David Sharpe',
      'Peak Affiliates': '100,000+',
      'Bankruptcy Filed': 'August 2017',
      'David Sharpe\'s Next Venture': 'Legendary Marketer (also closed February 2026)'
    },
    faq: [
      {
        question: 'Why did Empower Network fail?',
        answer: 'Empower Network filed for bankruptcy in August 2017. Co-founder David Wood cited an accounting error and his own personal struggles (which became very public) as contributing factors. The company had been declining for years before the final collapse.'
      },
      {
        question: 'What happened to David Sharpe after Empower Network?',
        answer: 'David Sharpe left Empower Network in 2015 and went on to found Legendary Marketer in 2016. Legendary Marketer grew significantly before David Sharpe announced its closure in February 2026 — ending another 9-year run. Two major internet marketing platforms, both gone.'
      },
      {
        question: 'What happened to Empower Network affiliates?',
        answer: 'When Empower Network filed for bankruptcy in 2017, all affiliate agreements and income streams ended immediately. Affiliates who had built significant income from the platform lost everything. This is one of the most cited examples of the risk of MLM income dependency.'
      }
    ],
    tagline: '⚠️ BANKRUPT 2017 — Pioneer internet marketing MLM, co-founded by David Sharpe (Legendary Marketer)',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '127',
    slug: 'lularoe',
    name: 'LuLaRoe',
    category: 'mlm',
    founded_year: 2012,
    hq_location: 'Corona, California, USA',
    website: 'https://lularoe.com',
    products_summary: 'Colorful patterned clothing and leggings MLM founded by DeAnne and Mark Stidham in 2012. At its peak had 80,000+ retailers. Paid $4.75 million to Washington State AG to settle pyramid scheme lawsuit. Subject of the Amazon Prime documentary "LuLaRich." Still operating but significantly scaled back.',
    monthly_cost_min: 0,
    monthly_cost_max: 100,
    comp_plan_type: 'Multi-level with inventory purchase requirements',
    overall_rating: 1.8,
    residual_rating: 1.5,
    simplicity_rating: 2.0,
    transparency_rating: 1.5,
    community_rating: 2.5,
    value_rating: 1.5,
    pros: [
      'Unique, recognizable patterned clothing with a dedicated fan base',
      'Flexible home-based business model',
      'Company still operating post-settlement'
    ],
    cons: [
      'Thousands of consultants lost money; multiple class-action lawsuits',
      'Paid $4.75 million to settle Washington State pyramid scheme lawsuit',
      'Settlement prohibits operating a pyramid scheme and requires accurate income disclosures',
      'Subject of Amazon Prime documentary "LuLaRich" exposing business practices',
      'Former retailers reported losing tens of thousands of dollars in unsellable inventory',
      'Peak 80,000+ retailers crashed — massive oversaturation destroyed most businesses',
      'Clothing quality issues and legging defects generated enormous negative press'
    ],
    quick_facts: {
      'Founded': '2012',
      'Headquarters': 'Corona, California',
      'Founders': 'DeAnne & Mark Stidham',
      'Legal Issues': 'Multiple lawsuits from former consultants; FTC investigation; Washington state AG settlement',
      'Settlement': '$4.75M to Washington State AG — pyramid scheme lawsuit',
      'Documentary': 'LuLaRich (Amazon Prime, 2021)'
    },
    faq: [
      {
        question: 'Is LuLaRoe a pyramid scheme?',
        answer: 'LuLaRoe paid $4.75 million to settle a Washington State Attorney General lawsuit asserting it operated a pyramid scheme. The settlement prohibits the company from operating a pyramid scheme and requires accurate income disclosures. The Amazon Prime documentary "LuLaRich" detailed the practices that led to the lawsuit.'
      },
      {
        question: 'Is LuLaRoe still in business?',
        answer: 'Yes. LuLaRoe is still operating as of 2025, but at a significantly reduced scale compared to its peak of 80,000+ retailers. The company has faced major scrutiny, multiple lawsuits, and continues under the terms of its settlement with Washington State.'
      },
      {
        question: 'Did LuLaRoe retailers make money?',
        answer: 'Many LuLaRoe retailers reported significant financial losses, particularly as the market became oversaturated with 80,000+ retailers all competing in the same model. Former retailers documented losing $10,000-$100,000+ in unsellable inventory in the Amazon documentary LuLaRich.'
      }
    ],
    tagline: 'Patterned leggings MLM — $4.75M pyramid scheme settlement, subject of Amazon documentary',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '128',
    slug: 'acn-inc',
    name: 'ACN Inc.',
    category: 'mlm',
    founded_year: 1993,
    hq_location: 'Concord, North Carolina, USA',
    website: 'https://acn.com',
    products_summary: 'Telecom and energy services MLM founded in 1993. Sells phone, internet, TV, and energy services through a network of Independent Business Owners (IBOs). Known for being endorsed by Donald Trump on Celebrity Apprentice. Federal lawsuit filed dismissed in January 2024, with plaintiffs directed to refile in state courts.',
    monthly_cost_min: 500,
    monthly_cost_max: 500,
    comp_plan_type: 'Multi-level residual commissions on customer service bills',
    overall_rating: 2.2,
    residual_rating: 2.5,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 2.5,
    value_rating: 2.0,
    pros: [
      'Services people already need (phone, internet, energy) — easier sell than supplements',
      'Residual commissions on recurring service bills',
      'International presence in 25+ countries',
      'Founded 1993 — over 30 years in business'
    ],
    cons: [
      'Only 1% of representatives earn income consistent with top of compensation plan',
      '$499 startup fee required',
      'Customers must switch providers — significant barrier vs. supplements',
      'Federal lawsuit filed against ACN (dismissed January 2024, state courts pending)',
      'Trump endorsement on Celebrity Apprentice raised ethical concerns — paid endorsement',
      'Competition from lower-cost telecom providers makes customer acquisition difficult'
    ],
    quick_facts: {
      'Founded': '1993',
      'Headquarters': 'Concord, North Carolina',
      'Startup Fee': '$499',
      'Top Earners': 'Only 1% earn top-plan income (per ACN disclosure)',
      'Notable': 'Featured on Donald Trump\'s Celebrity Apprentice (paid endorsement)'
    },
    faq: [
      {
        question: 'Is ACN a legitimate business?',
        answer: 'ACN is a legal MLM selling real telecom and energy services. The $499 startup fee and difficulty convincing customers to switch service providers are significant barriers. Compensation depends on building a customer base and team.'
      },
      {
        question: 'Did Donald Trump endorse ACN?',
        answer: 'Donald Trump promoted ACN on Celebrity Apprentice and at speaking events. It was later revealed Trump was paid for these endorsements. Trump stated in 2015 that he only promoted the company, never endorsed it as a business opportunity. Lawsuits were filed by former ACN participants citing Trump\'s promotion.'
      },
      {
        question: 'How do ACN representatives make money?',
        answer: 'ACN IBOs earn residual commissions on customers\' monthly service bills for telecom, internet, TV, and energy. The appeal is that customers pay bills every month, creating recurring income. In practice, customer acquisition is difficult and most IBOs earn very modest income.'
      }
    ],
    tagline: 'Telecom MLM with Trump endorsement — only 1% earn top-plan income',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '129',
    slug: 'melaleuca',
    name: 'Melaleuca',
    category: 'direct_sales',
    founded_year: 1985,
    hq_location: 'Idaho Falls, Idaho, USA',
    website: 'https://melaleuca.com',
    products_summary: 'Wellness company founded by Frank VanderSloot selling health, wellness, cleaning, and personal care products. Self-described as "referral marketing" — not MLM. Customers must purchase a minimum monthly order (~$75+). One of the few direct sales companies with genuinely positive reputation among its members.',
    monthly_cost_min: 75,
    monthly_cost_max: 150,
    comp_plan_type: 'Single-level referral commissions (company insists it is not MLM)',
    overall_rating: 3.2,
    residual_rating: 3.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 4.0,
    value_rating: 3.0,
    pros: [
      'One of the better-regarded direct sales companies — genuine customer loyalty',
      'Products sold to real consumers, not just to distributors',
      'Founder Frank VanderSloot known for ethical business leadership',
      'Transparent income statistics available on website',
      'Some Marketing Executives earn meaningful supplemental income',
      'Single-level structure reduces recruiting pressure vs. traditional MLM'
    ],
    cons: [
      'Required monthly minimum purchase (~$75-150) to stay active',
      'Most Marketing Executives earn modest supplemental income ($250-500/month)',
      'Customer acquisition requires convincing friends/family to switch brands',
      'Products not available in retail — subscription-only model limits reach',
      'Company insists it is "not MLM" but structure has multi-level elements'
    ],
    quick_facts: {
      'Founded': '1985',
      'Headquarters': 'Idaho Falls, Idaho',
      'Founder': 'Frank VanderSloot',
      'Monthly Minimum': '35 product points (~$55-70/mo) required to earn commissions',
      'Classification': 'MLM — 8-level organization, ranks from Product Advocate to Presidential Director',
      'Business Model': 'Customer-focused with referral income'
    },
    faq: [
      {
        question: 'Is Melaleuca an MLM?',
        answer: 'Melaleuca calls itself a "referral marketing" company, not an MLM — but the structure is MLM in practice. There is an 8-level Marketing Executive organization with ranks (Product Advocate, Director 1-9, Senior Director, Executive Director, etc.), and members must purchase a minimum of 35 product points (~$55-70/mo) every month to qualify for commissions. Marketing Executives earn residual commissions based on their organization\'s purchases. The 2022 income disclosure shows 82% of members earn $0 (customers only), and Product Advocates average just $110-510/year.'
      },
      {
        question: 'How much do Melaleuca Marketing Executives earn?',
        answer: 'Melaleuca Marketing Executives earn commission based on customer retention and team volume. The company has been in business since 1985 and emphasizes customer acquisition over recruiting. Higher ranks unlock better commission rates.'
      },
      {
        question: 'Are Melaleuca products good?',
        answer: 'Melaleuca has a generally positive reputation for product quality, particularly their Renew lotion and EcoSense cleaning products. Products are competitively priced compared to premium natural brands but require a subscription purchase commitment.'
      }
    ],
    tagline: 'Idaho wellness MLM — 8-level organization, monthly product purchase required to earn commissions',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '303',
    slug: 'bitconnect',
    name: 'BitConnect',
    category: 'other',
    founded_year: 2016,
    hq_location: 'India / UK (defunct)',
    website: 'N/A — collapsed',
    products_summary: '⚠️ FRAUD — $2.4 BILLION PONZI SCHEME. BitConnect was a cryptocurrency lending platform that promised returns of up to 40% per month. It collapsed in January 2018 after cease and desist orders from multiple US states. Founder Satishkumar Kumbhani was indicted by a US grand jury in 2022 for orchestrating the $2.4 billion fraud. Promoter Glenn Arcaro pleaded guilty and was sentenced to 38 months in prison.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ FRAUD — Crypto Ponzi scheme with MLM referral structure',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.0,
    transparency_rating: 1.0,
    community_rating: 1.0,
    value_rating: 1.0,
    pros: [
      'There are no legitimate pros — BitConnect was a criminal Ponzi scheme'
    ],
    cons: [
      '⚠️ FRAUD — $2.4 billion stolen from investors worldwide (DOJ indictment)',
      'Promised returns of 40%+/month — mathematically impossible and a classic Ponzi red flag',
      'Collapsed January 2018 — BCC token crashed from ~$400 to near zero in hours',
      'Founder Satishkumar Kumbhani indicted by US grand jury 2022 — fugitive',
      'Top US promoter Glenn Arcaro pleaded guilty, sentenced to 38 months in prison',
      'Thousands of victims worldwide lost life savings'
    ],
    quick_facts: {
      'Founded': '2016',
      'Collapsed': 'January 2018',
      'Total Fraud': '$2.4 billion (DOJ indictment)',
      'Founder Status': 'Satishkumar Kumbhani — indicted, fugitive',
      'Top Promoter': 'Glenn Arcaro — pleaded guilty, 38 months prison'
    },
    faq: [
      {
        question: 'What was BitConnect?',
        answer: 'BitConnect was a cryptocurrency lending platform that promised investors returns of up to 40% per month through a "trading bot." It was a Ponzi scheme — early investors were paid using money from new investors. It collapsed in January 2018 when US state regulators issued cease and desist orders, wiping out an estimated $2.4 billion in investor funds.'
      },
      {
        question: 'Who ran BitConnect?',
        answer: 'BitConnect was founded by Satishkumar Kumbhani of India. He was indicted by a US grand jury in 2022 but remains a fugitive. The top US promoter, Glenn Arcaro, pleaded guilty and was sentenced to 38 months in prison in 2022.'
      },
      {
        question: 'Can BitConnect victims get their money back?',
        answer: 'The DOJ has taken action to recover funds and has distributed some recovered assets to victims. However, the vast majority of the $2.4 billion in losses has not been recovered. If you were a victim, check the DOJ\'s victim notification system.'
      }
    ],
    tagline: '⚠️ $2.4 BILLION CRYPTO PONZI — collapsed January 2018, founder is fugitive',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '304',
    slug: 'zeek-rewards',
    name: 'ZeekRewards',
    category: 'other',
    founded_year: 2010,
    hq_location: 'Lexington, North Carolina, USA (defunct)',
    website: 'N/A — shut down by SEC',
    products_summary: '⚠️ FRAUD — $600 MILLION PONZI SCHEME SHUT DOWN BY SEC. ZeekRewards was an online penny auction and profit-sharing scheme shut down by the SEC in August 2012. It had 1 million+ participants in 225 countries. Founder Paul Burks was convicted of fraud. Over $375 million had been paid out to early investors using money from new participants.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ FRAUD — Penny auction / profit sharing Ponzi scheme',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.0,
    transparency_rating: 1.0,
    community_rating: 1.0,
    value_rating: 1.0,
    pros: [
      'No legitimate pros — ZeekRewards was a criminal Ponzi scheme'
    ],
    cons: [
      '⚠️ FRAUD — $600 million Ponzi scheme shut down by SEC August 2012',
      'Over 1 million participants in 225 countries defrauded',
      'Grew to $8.4 million in daily revenue by Q3 2012 before collapse',
      'Founder Paul Burks convicted of wire fraud and other charges',
      'At least 9 other defendants convicted or pleaded guilty',
      'Most victims recovered only cents on the dollar through court proceedings'
    ],
    quick_facts: {
      'Founded': '2010',
      'Shut Down': 'August 2012 by SEC',
      'Total Fraud': '$600 million',
      'Participants': '1 million+ in 225 countries',
      'Founder': 'Paul Burks — convicted of wire fraud'
    },
    faq: [
      {
        question: 'What was ZeekRewards?',
        answer: 'ZeekRewards was marketed as a penny auction profit-sharing program where participants could earn by recruiting others and placing daily bids. The SEC determined it was a Ponzi scheme — the $600M in "profits" were actually being funded by new participants\' money. It was shut down by the SEC in August 2012.'
      },
      {
        question: 'Were ZeekRewards participants criminally prosecuted?',
        answer: 'Founder Paul Burks was convicted on charges including wire fraud. At least 9 other defendants — including promoters who earned over $1 million — were convicted or pleaded guilty to various fraud charges.'
      },
      {
        question: 'Did ZeekRewards victims get their money back?',
        answer: 'A court-appointed receiver worked to recover and distribute funds. Due to the nature of Ponzi schemes, most victims recovered only a fraction of their losses. Net winners (those who received more than they invested) were required to disgorge their profits.'
      }
    ],
    tagline: '⚠️ $600 MILLION PONZI SCHEME — shut down by SEC 2012, founder convicted',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '305',
    slug: 'vemma',
    name: 'Vemma Nutrition',
    category: 'mlm',
    founded_year: 2004,
    hq_location: 'Scottsdale, Arizona, USA',
    website: 'https://vemma.com',
    products_summary: 'Health and energy drink MLM halted by the FTC on August 21, 2015 as an alleged pyramid scheme. Known for its Verve energy drink and targeting college students. Settled with the FTC in December 2016, agreeing to ban pyramid scheme practices and pay $238 million judgment (largely suspended). Still operating under the settlement terms.',
    monthly_cost_min: 0,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level (reformed post-FTC settlement)',
    overall_rating: 1.5,
    residual_rating: 1.5,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 2.0,
    value_rating: 1.5,
    pros: [
      'Still operating — has reformed practices under FTC settlement',
      'Verve energy drink has some brand recognition',
      'Settlement required improved income disclosure transparency'
    ],
    cons: [
      'FTC halted operations August 2015 as alleged pyramid scheme',
      'Specifically targeted college students — criticized for predatory recruiting tactics',
      'Settled with FTC December 2016 — $238 million judgment (largely suspended)',
      'Settlement permanently bans business practices that FTC alleged created pyramid scheme',
      'Required to verify that participants actually make retail sales before paying bonuses',
      'Reputation severely damaged by FTC action'
    ],
    quick_facts: {
      'Founded': '2004',
      'Headquarters': 'Scottsdale, Arizona',
      'FTC Action': 'Halted August 21, 2015 as alleged pyramid scheme',
      'FTC Settlement': '$238 million judgment (largely suspended), December 2016',
      'Status': 'Operating under FTC settlement terms'
    },
    faq: [
      {
        question: 'Did the FTC shut down Vemma?',
        answer: 'The FTC halted Vemma\'s operations on August 21, 2015, alleging it operated as a pyramid scheme that primarily rewarded recruitment over retail sales. Vemma settled with the FTC in December 2016, agreeing to ban the alleged pyramid scheme practices and paying a $238 million judgment (largely suspended based on inability to pay).'
      },
      {
        question: 'Is Vemma still in business?',
        answer: 'Yes. Vemma continues to operate under the terms of its FTC settlement. The settlement permanently bans the business practices that the FTC alleged created a pyramid scheme, including requiring proof of actual retail sales before paying recruitment bonuses.'
      },
      {
        question: 'Why did Vemma target college students?',
        answer: 'Vemma\'s "Young People Revolution" (YPR) program specifically recruited college students, promising financial freedom and a luxury lifestyle. The FTC criticized this targeting as predatory, noting that young people were encouraged to spend money on products and recruitment while their actual earnings were minimal.'
      }
    ],
    tagline: 'Energy drink MLM — FTC halted as pyramid scheme 2015, settled 2016, still operating',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '130',
    slug: 'world-financial-group',
    name: 'World Financial Group (WFG)',
    category: 'mlm',
    founded_year: 1991,
    hq_location: 'Johns Creek, Georgia, USA',
    website: 'https://worldfinancialgroup.com',
    products_summary: 'Financial services MLM selling life insurance, annuities, mutual funds, and other financial products through a network of agents. Subsidiary of Transamerica (owned by Aegon). Known for aggressive recruiting tactics and targeting immigrant communities. Subject to IUL fraud lawsuits.',
    monthly_cost_min: 0,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level with licensing requirements',
    overall_rating: 2.0,
    residual_rating: 2.0,
    simplicity_rating: 1.8,
    transparency_rating: 1.5,
    community_rating: 2.5,
    value_rating: 1.8,
    pros: [
      'Sells legitimate financial products (life insurance, investments)',
      'Can lead to a real career in financial services with proper licensing',
      'Parent company Transamerica (Aegon) is a regulated financial institution',
      'Training provided for licensing requirements'
    ],
    cons: [
      'Aggressive recruiting tactics — heavily targets immigrant communities',
      'Compensation tied to insurance licensing and team building',
      'Subject to IUL (Indexed Universal Life) fraud lawsuits for inadequate fee disclosure',
      'WFG agents criticized for recommending high-commission products over client\'s best interests',
      'Licensing costs ($200+) required before earning any income',
      'MLM recruiting culture conflicts with fiduciary duty to clients'
    ],
    quick_facts: {
      'Founded': '1991',
      'Headquarters': 'Johns Creek, Georgia',
      'Parent Company': 'Transamerica (owned by Aegon)',
      'Products': 'Life insurance, annuities, mutual funds',
      'Notable': 'IUL fraud lawsuits for inadequate fee disclosure'
    },
    faq: [
      {
        question: 'Is WFG (World Financial Group) a pyramid scheme?',
        answer: 'WFG is a legal MLM selling real financial products. However, critics argue its business model prioritizes recruiting over client-focused financial advice, creating conflicts of interest. Agents earn both from client sales and from recruiting new agents — a structure that can incentivize recommending high-commission products over suitable ones.'
      },
      {
        question: 'Is WFG legit for financial advice?',
        answer: 'WFG agents are licensed but not necessarily fiduciaries — they are not legally required to act in clients\' best interests. WFG has faced lawsuits alleging agents recommended unsuitable Indexed Universal Life (IUL) products without adequately disclosing fees. Consumers seeking financial advice should consider fee-only fiduciary advisors.'
      },
      {
        question: 'How much do WFG agents earn?',
        answer: 'WFG agent earnings depend on insurance sales and building a team. Licensing requirements (~$200+ to get started) are necessary for selling financial products. Successful agents can transition to full careers in financial services.'
      }
    ],
    tagline: 'Financial services MLM — Transamerica subsidiary, IUL fraud lawsuits, targets immigrant communities',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '131',
    slug: 'it-works',
    name: 'It Works! Global',
    category: 'mlm',
    founded_year: 2001,
    hq_location: 'Palmetto, Florida, USA',
    website: 'https://itworks.com',
    products_summary: 'Health and wellness MLM known for its "crazy wrap thing" body wraps and supplement products. Founded by Mark and Cindy Pentecost.',
    monthly_cost_min: 80,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level with autoship requirements',
    overall_rating: 2.0,
    residual_rating: 1.8,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Recognizable brand with viral "crazy wrap thing" marketing',
      'Wide product catalog beyond just body wraps (supplements, skincare)',
      'Active social media community',
      'Low initial entry cost'
    ],
    cons: [
      'Compensation structure requires substantial customer base for meaningful returns',
      'Body wrap "results" are temporary — water weight loss, not fat loss',
      'Required monthly autoship ($80-150) to maintain Distributor status',
      'Products significantly overpriced vs. retail alternatives',
      'Heavy social media recruiting pressure creates relationship strain'
    ],
    quick_facts: {
      'Founded': '2001',
      'Headquarters': 'Palmetto, Florida',
      'Known For': '"The Crazy Wrap Thing" body wraps',
      'Business Model': 'Binary compensation structure',
      'Monthly Autoship': '~$80-150 required'
    },
    faq: [
      {
        question: 'Do It Works body wraps actually work?',
        answer: 'It Works body wraps may produce temporary inch loss results primarily through fluid reduction. The results are not permanent fat loss. Most medical professionals consider the dramatic before/after photos misleading, as results disappear after rehydration.'
      },
      {
        question: 'How much do It Works distributors earn?',
        answer: 'Distributor earnings depend on building a customer base and maintaining sales volume. Required autoship purchases (~$80-150/month) are a cost that must be factored into profitability calculations.'
      },
      {
        question: 'Is It Works a pyramid scheme?',
        answer: 'It Works is a legal MLM with real products. The binary compensation structure requires building balanced teams for maximum commissions. Required monthly product purchases must be factored into profitability.'
      }
    ],
    tagline: 'Body wrap and supplement MLM with binary compensation structure',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '132',
    slug: 'mannatech',
    name: 'Mannatech',
    category: 'mlm',
    founded_year: 1993,
    hq_location: 'Flower Mound, Texas, USA',
    website: 'https://mannatech.com',
    products_summary: 'Health supplement MLM founded by Samuel Caster in 1993. Known for glyconutrient products (Ambrotose) and the "glycobiology" health claims. Publicly traded (NASDAQ: MTEX). Revenue has been declining — approximately 119,000 associates and preferred customers as of Q3 2025.',
    monthly_cost_min: 50,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level with associate rank system',
    overall_rating: 2.2,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.5,
    community_rating: 2.5,
    value_rating: 2.0,
    pros: [
      'Publicly traded (NASDAQ: MTEX) — financial transparency',
      'Unique glyconutrient product category',
      'Founded 1993 — over 30 years in business',
      'Profitable in recent quarters despite declining revenue'
    ],
    cons: [
      'Paid $7 million to settle Texas AG lawsuit over misleading health claims (2009)',
      'Revenue and associate count declining significantly',
      'Glyconutrient health claims not accepted by mainstream medical community',
      'Products significantly overpriced vs. comparable supplements',
      'Most associates earn minimal income'
    ],
    quick_facts: {
      'Founded': '1993',
      'Headquarters': 'Flower Mound, Texas',
      'Stock Ticker': 'NASDAQ: MTEX',
      'Associates': '~119,000 (Q3 2025, declining)',
      'Past Legal Issue': '$7 million Texas AG settlement for health claim violations'
    },
    faq: [
      {
        question: 'Are Mannatech glyconutrients effective?',
        answer: 'Mannatech\'s Ambrotose glyconutrient products are based on the concept of glycobiology — the study of sugars in cellular function. While glycobiology is a legitimate scientific field, independent research has not validated the specific health claims made for Mannatech\'s products. Mannatech paid a $7 million settlement with the Texas AG in 2009 for misleading health claims.'
      },
      {
        question: 'Is Mannatech a legitimate company?',
        answer: 'Mannatech is a legitimate publicly traded company (NASDAQ: MTEX) that has been in business since 1993. However, like most MLMs, the income opportunity is challenging and the company has faced scrutiny over health claims. Revenue and associate counts have been declining.'
      }
    ],
    tagline: 'Glyconutrient MLM — publicly traded (NASDAQ: MTEX), declining revenue',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '133',
    slug: 'kyani',
    name: 'Kyäni',
    category: 'mlm',
    founded_year: 2005,
    hq_location: 'Idaho Falls, Idaho, USA',
    website: 'https://kyani.com',
    products_summary: 'Health and wellness MLM founded in 2005 in Idaho Falls, Idaho. Known for a triangle of health products: Kyäni Sunrise (superfoods), Kyäni Sunset (omega-3s), and Kyäni Nitro (nitric oxide). Strong presence in European and Latin American markets.',
    monthly_cost_min: 50,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level binary hybrid',
    overall_rating: 2.1,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 1.8,
    community_rating: 2.8,
    value_rating: 2.0,
    pros: [
      'Products focused on real nutritional ingredients (wild Alaskan blueberries, fish oil)',
      'Strong international presence in European and Latin American markets',
      'Idaho-based company with roots in traditional values',
      'Simple three-product "triangle of health" system easy to explain'
    ],
    cons: [
      'Compensation depends on building customer base and team',
      'Binary hybrid plan favors early joiners and heavy recruiters',
      'Products significantly overpriced vs. comparable supplements',
      'Most distributors earn minimal income',
      'Autoship required to stay active and qualify for commissions'
    ],
    quick_facts: {
      'Founded': '2005',
      'Headquarters': 'Idaho Falls, Idaho',
      'Core Products': 'Sunrise, Sunset, Nitro (Triangle of Health)',
      'Business Model': 'Binary compensation with autoship',
      'Strong Markets': 'Europe, Latin America'
    },
    faq: [
      {
        question: 'Is Kyäni a legitimate MLM?',
        answer: 'Kyäni is a legal MLM with real nutritional products. The company has been in business since 2005 with strong presence in European and Latin American markets. Compensation depends on building a customer base and team.'
      },
      {
        question: 'What are the Kyäni products?',
        answer: 'Kyäni\'s core Triangle of Health includes: Sunrise (superfood blend with wild Alaskan blueberries), Sunset (omega-3 fish oil with tocotrienols), and Nitro (nitric oxide support). The products use genuine nutritional ingredients but are priced at a significant premium over comparable retail alternatives.'
      },
      {
        question: 'Is Kyäni still in business?',
        answer: 'As of 2025, Kyäni continues to operate with presence in multiple international markets. The company focuses on nitric oxide-based nutrition products.'
      }
    ],
    tagline: 'Idaho wellness MLM focused on nitric oxide nutrition',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '306',
    slug: 'numis-network',
    name: 'Numis Network',
    category: 'mlm',
    founded_year: 2009,
    hq_location: 'Tampa, Florida, USA (defunct)',
    website: 'N/A — merged with WorldVentures 2013',
    products_summary: '⚠️ DEFUNCT — merged with WorldVentures in July 2013, which itself filed for bankruptcy in 2020. Numis Network was a unique MLM that sold numismatic (collectible) coins — rare U.S. Mint coins, gold and silver — through a direct sales model. Founded by MLM veterans Ian Cordell, Chris Kent, and Jake Kevorkian in 2009.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ DEFUNCT — merged into WorldVentures (bankrupt 2020)',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.0,
    transparency_rating: 1.0,
    community_rating: 1.0,
    value_rating: 1.0,
    pros: [
      'Unique and innovative concept — collectible numismatic coins in MLM format',
      'Founded by experienced MLM veterans with real industry knowledge',
      'Numismatic coins are legitimate collectible assets with real market value'
    ],
    cons: [
      '⚠️ No longer exists — merged with WorldVentures on July 19, 2013',
      'WorldVentures (the acquiring company) filed for bankruptcy in 2020',
      'Most distributors who joined Numis Network ultimately lost their business twice',
      'Collectible coins are a niche market with limited mass appeal',
      'MLM model for collectibles was an unusual concept that proved unsustainable'
    ],
    quick_facts: {
      'Founded': '2009',
      'Headquarters': 'Tampa, Florida',
      'Founders': 'Ian Cordell, Chris Kent, Jake Kevorkian',
      'Merged': 'WorldVentures — July 19, 2013',
      'Status': '⚠️ DEFUNCT (WorldVentures also bankrupt 2020)'
    },
    faq: [
      {
        question: 'What happened to Numis Network?',
        answer: 'Numis Network merged with WorldVentures, a luxury travel MLM, on July 19, 2013. Distributors could choose to sell WorldVentures travel products, continue selling coins, or both. WorldVentures itself filed for bankruptcy in 2020, effectively ending both opportunities.'
      },
      {
        question: 'Was Numis Network a scam?',
        answer: 'Numis Network sold real numismatic coins and was not considered a scam. The company was founded by legitimate MLM industry veterans. However, the business model proved unsustainable, leading to the 2013 merger with WorldVentures. Like most MLMs, the majority of distributors likely earned little to nothing.'
      },
      {
        question: 'Are numismatic coins a good investment?',
        answer: 'Numismatic (collectible) coins can be legitimate investments, but the market is niche and values are highly speculative. Buying coins through an MLM at inflated prices to earn commissions is generally considered a poor investment strategy compared to buying directly from coin dealers.'
      }
    ],
    tagline: '⚠️ DEFUNCT — numismatic coin MLM merged with WorldVentures 2013 (also bankrupt)',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '307',
    slug: 'ilearning-global',
    name: 'iLearning Global',
    category: 'affiliate',
    founded_year: 2008,
    hq_location: 'USA (defunct)',
    website: 'N/A — closed March 2010',
    products_summary: '⚠️ CLOSED MARCH 2010. Online education and personal development MLM that featured content from well-known speakers including Brian Tracy and Alex Dey. Terminated all distributors on March 17, 2010 — citing competitive pressures and lack of market demand as free educational content became widely available online.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: '⚠️ CLOSED — MLM model terminated March 17, 2010',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.0,
    transparency_rating: 1.0,
    community_rating: 1.0,
    value_rating: 1.0,
    pros: [
      'Featured content from legitimate personal development experts (Brian Tracy)',
      'Online education was an innovative MLM category in 2008',
      'Concept was ahead of its time — online learning is now a massive industry'
    ],
    cons: [
      '⚠️ CLOSED — terminated all distributors March 17, 2010 with 30 days notice',
      'Closed because free educational content became widely available online — business model undermined',
      'Distributors who built businesses lost all income overnight',
      'Classic example of MLM income disappearing when company changes direction',
      'All commission streams ended when company closed'
    ],
    quick_facts: {
      'Founded': '2008',
      'Closed': '⚠️ March 17, 2010',
      'Reason': 'Lack of market demand; free content available online',
      'Featured Speakers': 'Brian Tracy, Alex Dey, others',
      'Notice Given': '30 days to distributors'
    },
    faq: [
      {
        question: 'Why did iLearning Global close?',
        answer: 'iLearning Global terminated its MLM model on March 17, 2010, citing competitive pressures and lack of market demand. The rise of free educational content online (YouTube, blogs, podcasts) made it difficult to charge subscription fees for educational content. The company gave distributors 30 days notice.'
      },
      {
        question: 'What happened to iLearning Global distributors?',
        answer: 'All iLearning Global distributors had their agreements terminated on April 17, 2010. Those who had built significant income from the platform lost it entirely. This is a frequently cited example of the inherent risk of building income on someone else\'s platform.'
      },
      {
        question: 'Was iLearning Global legitimate?',
        answer: 'iLearning Global offered real educational content from credible speakers and was not considered a scam. The business model simply could not compete with free online educational content. The sudden closure, however, demonstrated the risk that MLM participants face when companies change direction.'
      }
    ],
    tagline: '⚠️ CLOSED March 2010 — online education MLM terminated after free content made it obsolete',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '134',
    slug: '7k-metals',
    name: '7K Metals',
    category: 'affiliate',
    founded_year: 2016,
    hq_location: 'Idaho Falls, Idaho, USA',
    website: 'https://7kmetals.com',
    products_summary: 'Precious metals company (gold and silver coins/bullion) that transitioned from a network marketing model to a direct retail and affiliate model on March 3, 2026. Founded in Idaho Falls in 2016. CEO Blake Davis cited the "rising influencer economy" and desire to simplify participation as drivers of the change.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate model (pivoted from MLM in March 2026)',
    overall_rating: 3.0,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 3.0,
    pros: [
      'Proactively pivoted from MLM to affiliate model — more transparent and accessible',
      'Gold and silver are real tangible assets with intrinsic value',
      'CEO acknowledged the transition improves accessibility for participants',
      'Fintech-oriented platform focus for faster, global transactions',
      'Idaho-based company with focus on precious metals education'
    ],
    cons: [
      'Network marketing members who built teams lost their multi-level income streams in the March 2026 pivot',
      'Precious metals purchased through membership programs typically carry significant premiums over spot price',
      'Previous membership-only model required purchase to access products — limited accessibility',
      'Affiliate commissions on precious metals are inherently lower than digital products',
      'Precious metals are volatile assets — not suitable for everyone'
    ],
    quick_facts: {
      'Founded': '2016',
      'Headquarters': 'Idaho Falls, Idaho',
      'CEO': 'Blake Davis',
      'MLM Pivot Date': 'March 3, 2026',
      'Products': 'Gold and silver coins, bullion, collectibles'
    },
    faq: [
      {
        question: 'Did 7K Metals leave MLM?',
        answer: 'Yes. On March 3, 2026, 7K Metals announced a strategic transition from its network marketing model to a direct retail and affiliate-driven model. CEO Blake Davis cited changing marketplace dynamics and the rise of the influencer economy as key drivers. The company joins Beachbody and Rodan+Fields in making this transition.'
      },
      {
        question: 'Is 7K Metals a good investment?',
        answer: 'Gold and silver are legitimate tangible assets that serve as inflation hedges. However, buying precious metals through a membership program typically involves significant premiums over spot price. For pure investment purposes, buying directly from bullion dealers (APMEX, JM Bullion, SD Bullion) generally offers better pricing than membership-based programs.'
      },
      {
        question: 'What happened to 7K Metals network marketing members?',
        answer: 'Members who had built multi-level teams under the network marketing model lost their downline commissions when the company transitioned to an affiliate model on March 3, 2026. The new affiliate model pays commissions on direct referrals only — no multi-level structure.'
      }
    ],
    tagline: 'Precious metals company — pivoted from MLM to affiliate model March 2026',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '135',
    slug: 'rain-international',
    name: 'Rain International',
    category: 'mlm',
    founded_year: 2011,
    hq_location: 'American Fork, Utah, USA',
    website: 'https://rainintl.com',
    products_summary: 'Seed-based nutrition MLM founded in 2011. Products are based on plant seeds, focusing on antioxidants and wellness. Subject to BBB National Programs monitoring for income claims (2025).',
    monthly_cost_min: 50,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level binary',
    overall_rating: 2.0,
    residual_rating: 1.8,
    simplicity_rating: 2.5,
    transparency_rating: 1.5,
    community_rating: 2.8,
    value_rating: 2.0,
    pros: [
      'Unique seed-based nutrition concept differentiates from typical supplement MLMs',
      'Founded 2011 — over 13 years in business',
      'International presence in multiple markets'
    ],
    cons: [
      'BBB National Programs income claim monitoring (2025)',
      'BBB National Programs government referral in 2025 for income claim violations',
      'Products significantly overpriced vs. comparable seed/antioxidant supplements',
      'Binary compensation plan heavily favors early joiners',
      'Most distributors earn minimal income per third-party reviews'
    ],
    quick_facts: {
      'Founded': '2011',
      'Headquarters': 'American Fork, Utah',
      'BBB Status': 'Government referral 2025 for income claim issues',
      'Products': 'Seed-based antioxidant supplements'
    },
    faq: [
      {
        question: 'Is Rain International a legitimate MLM?',
        answer: 'Rain International sells real nutritional products and has been in business since 2011. The company is subject to BBB National Programs monitoring for income claims (2025). Compensation depends on building a customer base.'
      },
      {
        question: 'How does Rain International compensation work?',
        answer: 'Rain uses a binary compensation structure. Distributors earn commissions on product sales and team volume. The company has been subject to BBB National Programs review for income claim compliance.'
      }
    ],
    tagline: 'Seed-based nutrition MLM with BBB monitoring',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '136',
    slug: 'total-life-changes',
    name: 'Total Life Changes',
    category: 'mlm',
    founded_year: 1999,
    hq_location: 'Fair Haven, Michigan, USA',
    website: 'https://totallifechanges.com',
    products_summary: 'Health and wellness MLM known for its Iaso Tea detox tea and CBD/hemp products. Founded by Jack Fallon in 1999. Estimated $250M revenue in 2024. Popular in social media with strong African American community following.',
    monthly_cost_min: 40,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level binary',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 3.0,
    transparency_rating: 2.0,
    community_rating: 3.5,
    value_rating: 2.5,
    pros: [
      'Strong community following, particularly in African American wellness space',
      'Iaso Tea has genuine viral popularity and brand recognition',
      'Low entry point compared to many MLMs',
      'CBD and hemp products align with growing wellness trend',
      'Founded 1999 — 25+ years in business'
    ],
    cons: [
      'Compensation depends on building customer base and team',
      'Iaso Tea health claims are not clinically substantiated',
      'Required autoship to maintain active distributor status',
      'Binary compensation plan favors heavy recruiters',
      'Most distributors earn minimal income'
    ],
    quick_facts: {
      'Founded': '1999',
      'Headquarters': 'Fair Haven, Michigan',
      'Founder': 'Jack Fallon',
      'Est. 2024 Revenue': '$250 million',
      'Known For': 'Iaso Detox Tea, CBD/hemp products'
    },
    faq: [
      {
        question: 'Does Iaso Tea actually work for weight loss?',
        answer: 'Iaso Tea is a detox/herbal tea blend marketed for weight loss and cleansing. While some users report positive experiences, the health claims are not clinically substantiated. Any initial weight loss is likely water weight from the detox effect rather than fat loss.'
      },
      {
        question: 'Is Total Life Changes a good business opportunity?',
        answer: 'Total Life Changes has a strong community following, particularly on social media. The binary compensation structure requires building balanced teams. Meaningful income depends on building a substantial customer base.'
      }
    ],
    tagline: 'Iaso Tea and hemp wellness MLM with strong social media community',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '137',
    slug: 'neora',
    name: 'Neora (formerly Nerium International)',
    category: 'mlm',
    founded_year: 2011,
    hq_location: 'Addison, Texas, USA',
    website: 'https://neora.com',
    products_summary: 'Anti-aging skincare and wellness MLM formerly known as Nerium International (rebranded 2019). Became the first direct selling company to defeat the FTC in a pyramid scheme lawsuit — the court ruled in Neora\'s favor in September 2023 on all five FTC claims. However, the court also ruled the FTC\'s position was "substantially justified," preventing Neora from recovering legal fees.',
    monthly_cost_min: 50,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level unilevel',
    overall_rating: 2.5,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.5,
    pros: [
      'First direct selling company to defeat FTC in pyramid scheme lawsuit (September 2023)',
      'Rebranded from Nerium to Neora in 2019 with expanded product line',
      'Skincare products have genuine consumer following',
      'Transparency about legal history — posts court victory on website'
    ],
    cons: [
      'FTC sued alleging pyramid scheme — won the case but battle signals scrutiny',
      'Court found FTC\'s position "substantially justified" despite Neora winning',
      'Most brand partners earn minimal income after product purchase requirements',
      'Products priced at premium vs. comparable skincare',
      'Previous Nerium brand had controversial marketing claims'
    ],
    quick_facts: {
      'Founded': '2011 (as Nerium International)',
      'Rebranded': 'Neora (2019)',
      'Headquarters': 'Addison, Texas',
      'FTC Lawsuit': 'Won — court ruled in Neora\'s favor September 2023',
      'Founder': 'Jeff Olson'
    },
    faq: [
      {
        question: 'Did Neora win its FTC lawsuit?',
        answer: 'Yes. In September 2023, the district court ruled against the FTC on all five of its pyramid scheme claims against Neora. This made Neora the first direct selling company to defeat an FTC pyramid scheme lawsuit. However, the court also ruled in May 2024 that Neora could not recover its legal fees because the FTC\'s position was "substantially justified."'
      },
      {
        question: 'Why did the FTC sue Neora?',
        answer: 'The FTC sued Neora (then still operating under the Nerium name) alleging it operated as a pyramid scheme from the start, made deceptive health claims, and made misleading income claims. Despite winning in court, the case put a spotlight on how Neora\'s compensation structure was structured.'
      },
      {
        question: 'Is Neora a good MLM to join?',
        answer: 'Neora has real skincare products and won its FTC lawsuit, which is notable. However, like most MLMs, the income opportunity is difficult for most participants. The required monthly product purchases and recruiting-dependent income structure present challenges for the average brand partner.'
      }
    ],
    tagline: 'First direct selling company to defeat FTC pyramid scheme lawsuit — September 2023',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '138',
    slug: 'shaklee',
    name: 'Shaklee Corporation',
    category: 'mlm',
    founded_year: 1956,
    hq_location: 'Pleasanton, California, USA',
    website: 'https://shaklee.com',
    products_summary: 'One of the oldest nutrition MLMs in America, founded by Dr. Forrest C. Shaklee in 1956. Known for quality supplements, protein shakes, and cleaning products. First company to certify its products as Climate Neutral. Considered one of the more reputable MLMs due to product quality and 68-year track record.',
    monthly_cost_min: 50,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level with rank advancement',
    overall_rating: 2.8,
    residual_rating: 2.5,
    simplicity_rating: 2.5,
    transparency_rating: 3.0,
    community_rating: 3.5,
    value_rating: 2.5,
    pros: [
      'Founded 1956 — 68-year track record, one of the oldest US nutrition MLMs',
      'First company certified Climate Neutral — strong environmental commitment',
      'Products generally well-regarded for quality',
      'Provides public earnings data on website',
      'Strong legacy brand with loyal long-term customer base'
    ],
    cons: [
      'Most Shaklee Ambassadors earn modest supplemental income',
      'Products significantly overpriced vs. comparable retail supplements',
      'Required monthly purchases to maintain active status and earn commissions',
      'MLM income structure still heavily dependent on team building',
      'Legacy brand has slower growth compared to newer MLMs'
    ],
    quick_facts: {
      'Founded': '1956',
      'Headquarters': 'Pleasanton, California',
      'Founder': 'Dr. Forrest C. Shaklee',
      'Distinction': 'First company certified Climate Neutral',
      'Earnings': 'Public data available on website'
    },
    faq: [
      {
        question: 'Is Shaklee a reputable MLM?',
        answer: 'Shaklee is considered one of the more reputable MLMs in the industry. With 68 years in business, genuine product quality, environmental certifications, and public earnings data, it scores better than most on transparency. However, the income opportunity is still challenging for most participants.'
      },
      {
        question: 'Are Shaklee products good quality?',
        answer: 'Shaklee products are generally well-regarded for quality. The company was the first to earn Climate Neutral certification and has strong manufacturing standards. However, like most MLM brands, the products are significantly overpriced compared to comparable retail alternatives.'
      }
    ],
    tagline: 'One of America\'s oldest nutrition MLMs — founded 1956, first Climate Neutral company',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '139',
    slug: 'forever-living-aloe',
    name: 'Aloe Vera of America (AloeCure)',
    category: 'mlm',
    founded_year: 1985,
    hq_location: 'Irving, Texas, USA',
    website: 'https://aloecure.com',
    products_summary: 'Aloe vera health products MLM selling drinks, supplements, and skincare through independent distributors. One of several aloe-focused direct sales companies competing with Forever Living Products.',
    monthly_cost_min: 30,
    monthly_cost_max: 100,
    comp_plan_type: 'Multi-level',
    overall_rating: 2.0,
    residual_rating: 1.8,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 2.5,
    value_rating: 2.0,
    pros: [
      'Aloe vera has genuine health benefits and consumer demand',
      'Natural/organic positioning appeals to wellness-conscious buyers',
      'Low startup cost compared to many MLMs'
    ],
    cons: [
      'Highly competitive niche — Forever Living dominates aloe MLM space',
      'Compensation depends on customer acquisition',
      'Products overpriced vs. retail aloe alternatives',
      'Limited brand recognition compared to larger competitors'
    ],
    quick_facts: {
      'Founded': '1985',
      'Headquarters': 'Irving, Texas',
      'Products': 'Aloe vera drinks, supplements, skincare',
      'Business Model': 'Multi-level marketing'
    },
    faq: [
      {
        question: 'Is AloeCure a legitimate MLM?',
        answer: 'AloeCure sells real aloe vera products and is a legal MLM. It competes in a niche dominated by Forever Living Products. Compensation depends on building a customer base.'
      },
      {
        question: 'Does aloe vera actually have health benefits?',
        answer: 'Aloe vera has well-documented benefits for skin care and sunburn treatment. Some studies support benefits for digestive health. However, the dramatic health claims often made by MLM distributors exceed what clinical evidence supports.'
      }
    ],
    tagline: 'Aloe vera wellness MLM competing in Forever Living\'s space',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '166',
    slug: 'maxbounty',
    name: 'MaxBounty',
    category: 'affiliate',
    founded_year: 2004,
    hq_location: 'Ottawa, Ontario, Canada',
    website: 'https://maxbounty.com',
    products_summary: 'Performance marketing (CPA) affiliate network founded in 2004 in Ottawa. Specializes in cost-per-action offers including lead generation, app downloads, and email submits. Known for weekly payments and responsive affiliate managers.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'CPA affiliate network — pay per action (lead, install, sale)',
    overall_rating: 3.8,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.8,
    community_rating: 3.5,
    value_rating: 4.0,
    pros: [
      'Weekly payments — faster than most networks',
      'Dedicated affiliate managers for each publisher',
      'Specializes in CPA (cost-per-action) — earn per lead, not just sale',
      'Free to join',
      'Strong reputation among performance marketers since 2004'
    ],
    cons: [
      'Approval process can be selective for new affiliates',
      'CPA marketing requires paid traffic expertise to profit',
      'Phone interview required for new affiliates',
      'Higher-paying offers require proven traffic volumes',
      'Not suitable for beginners without paid media experience'
    ],
    quick_facts: {
      'Founded': '2004',
      'Headquarters': 'Ottawa, Canada',
      'Network Type': 'CPA (Cost Per Action)',
      'Payment Schedule': 'Weekly',
      'Cost to Join': 'Free (application + phone interview)'
    },
    faq: [
      {
        question: 'What is CPA affiliate marketing?',
        answer: 'CPA (Cost Per Action) marketing pays affiliates when a user completes a specific action — filling out a form, installing an app, signing up for a trial, or making a purchase. Unlike revenue share, you earn a fixed amount per completed action regardless of future customer value.'
      },
      {
        question: 'Is MaxBounty good for beginners?',
        answer: 'MaxBounty requires a phone interview and is better suited for affiliates with some experience. CPA marketing typically requires paid traffic (Facebook Ads, Google Ads, native ads) to generate volume, making it less suitable for beginners building organic audiences.'
      },
      {
        question: 'MaxBounty vs ClickBank — which is better?',
        answer: 'MaxBounty specializes in CPA (pay-per-lead/action) while ClickBank focuses on revenue share commissions on digital product sales. MaxBounty is better for paid traffic performance marketers; ClickBank is better for content marketers with organic audiences.'
      }
    ],
    tagline: 'Weekly-paying CPA affiliate network since 2004 — best for performance marketers',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '167',
    slug: 'flexoffers',
    name: 'FlexOffers',
    category: 'affiliate',
    founded_year: 2008,
    hq_location: 'Coconut Creek, Florida, USA',
    website: 'https://flexoffers.com',
    products_summary: 'Large affiliate network with 12,000+ advertisers across virtually every niche. Offers both CPA and revenue share programs. Known for competitive commission rates and a large selection of financial services, insurance, and retail programs.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Affiliate network — CPA and revenue share (varies by advertiser)',
    overall_rating: 3.7,
    residual_rating: 2.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.0,
    value_rating: 4.0,
    pros: [
      'Free to join',
      '12,000+ advertisers — one of the largest networks',
      'Strong financial services and insurance category',
      'Net 7 payments for approved publishers (very fast)',
      'Deep links and flexible tracking options'
    ],
    cons: [
      '$25 minimum payout threshold',
      'Interface not as polished as CJ or Impact',
      'Some advertisers have traffic quality requirements',
      'Less brand recognition than CJ or ShareASale among newcomers'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Coconut Creek, Florida',
      'Advertisers': '12,000+',
      'Cost to Join': 'Free',
      'Payment': 'Net 7 for approved publishers'
    },
    faq: [
      {
        question: 'Is FlexOffers a good affiliate network?',
        answer: 'Yes. FlexOffers is a legitimate, established network with 12,000+ advertisers. Its strength is in financial services, insurance, and retail categories. The Net 7 payment schedule is faster than most networks. It\'s a solid addition alongside ShareASale and CJ for diversifying affiliate income.'
      },
      {
        question: 'FlexOffers vs ShareASale — which is better?',
        answer: 'Both are strong mid-size affiliate networks. FlexOffers has more financial services advertisers and faster payments. ShareASale has slightly better brand recognition and a wider variety of e-commerce merchants. Most serious affiliates use both.'
      }
    ],
    tagline: 'Large affiliate network — 12,000+ advertisers, Net 7 payments',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '168',
    slug: 'ezoic',
    name: 'Ezoic',
    category: 'affiliate',
    founded_year: 2010,
    hq_location: 'Carlsbad, California, USA',
    website: 'https://ezoic.com',
    products_summary: 'AI-powered ad optimization platform for content publishers. Uses machine learning to optimize ad placement and maximize revenue. Entry-level alternative to Mediavine and Raptive — accessible with lower traffic requirements. Now has no minimum traffic requirement.',
    monthly_cost_min: 0,
    monthly_cost_max: 0,
    comp_plan_type: 'Ad management — publishers keep ~90% of ad revenue',
    overall_rating: 3.5,
    residual_rating: 3.5,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 3.8,
    pros: [
      'No minimum traffic requirement — accessible to new publishers',
      'AI optimization often outperforms manually placed AdSense ads',
      'Better RPMs than AdSense for most niches',
      'Free to join and use',
      'Good stepping stone between AdSense and Mediavine'
    ],
    cons: [
      'RPMs lower than Mediavine or Raptive at comparable traffic',
      'Can slow website page speed if not properly configured',
      'Dashboard complexity can be overwhelming for beginners',
      'Some publishers report inconsistent support',
      'Must use Ezoic CDN which adds a layer of complexity'
    ],
    quick_facts: {
      'Founded': '2010',
      'Headquarters': 'Carlsbad, California',
      'Minimum Traffic': 'None (removed requirement)',
      'Publisher Share': '~90% of ad revenue',
      'Best For': 'Publishers between AdSense and Mediavine traffic levels'
    },
    faq: [
      {
        question: 'Ezoic vs Google AdSense — which pays more?',
        answer: 'Ezoic typically pays 50-300% more than AdSense because of AI optimization that tests thousands of ad placement combinations. Most publishers see significant RPM improvements switching from AdSense to Ezoic, especially in niches like finance, business, and technology.'
      },
      {
        question: 'When should I switch from Ezoic to Mediavine?',
        answer: 'When you reach Mediavine\'s 50,000 session minimum, it\'s worth applying. Mediavine generally pays higher RPMs than Ezoic and has better publisher support. However, Ezoic is a solid monetization option for growing sites below that threshold.'
      }
    ],
    tagline: 'AI-powered ad optimization — better than AdSense, accessible to new publishers',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '209',
    slug: 'amazon-fba',
    name: 'Amazon FBA (Fulfillment by Amazon)',
    category: 'other',
    founded_year: 2006,
    hq_location: 'Seattle, Washington, USA',
    website: 'https://sell.amazon.com',
    products_summary: 'Amazon\'s fulfillment program allowing sellers to store products in Amazon warehouses. Amazon handles storage, packing, shipping, and customer service. Sellers pay storage and fulfillment fees. One of the most popular e-commerce business models — accessible to entrepreneurs worldwide.',
    monthly_cost_min: 40,
    monthly_cost_max: 500,
    comp_plan_type: 'E-commerce — seller keeps revenue minus Amazon fees (typically 25-40% total fees)',
    overall_rating: 3.8,
    residual_rating: 3.0,
    simplicity_rating: 3.0,
    transparency_rating: 4.0,
    community_rating: 3.5,
    value_rating: 3.5,
    pros: [
      'Access to Amazon\'s 300+ million customers and Prime audience',
      'Amazon handles storage, packing, shipping, returns, and customer service',
      'Prime badge significantly increases conversion rates',
      'Scalable — can grow from side hustle to 7-figure business',
      'Can be operated remotely from anywhere in the world',
      'Proven business model with thousands of successful sellers'
    ],
    cons: [
      'Significant upfront inventory investment required ($2,000-$10,000+ to start)',
      'Amazon fees (FBA fees + referral fees) typically total 25-40% of revenue',
      'Highly competitive — many niches are saturated',
      'Amazon can suspend accounts or change rules without notice',
      'Inventory storage fees can accumulate for slow-moving products',
      'Requires market research, product sourcing, and PPC advertising knowledge'
    ],
    quick_facts: {
      'Founded': '2006',
      'Monthly Fees': '$39.99 Professional plan + FBA fees',
      'Total Amazon Fees': 'Typically 25-40% of sale price',
      'Startup Cost': '$2,000-$10,000+ for initial inventory',
      'Best For': 'Entrepreneurs willing to invest capital and learn e-commerce'
    },
    faq: [
      {
        question: 'How much money do you need to start Amazon FBA?',
        answer: 'Most successful FBA sellers recommend starting with $2,000-$5,000 minimum — covering product inventory, samples, Amazon fees, and initial advertising. Budget sellers can start with less ($500-$1,000) but have less margin for error. Courses and tools add additional costs.'
      },
      {
        question: 'Is Amazon FBA still profitable in 2025?',
        answer: 'Amazon FBA remains profitable but is more competitive than in 2015-2020. Successful sellers focus on differentiated products, strong branding, and superior customer reviews. Margins have compressed as more sellers enter, but experienced operators continue to build successful businesses.'
      },
      {
        question: 'Amazon FBA vs dropshipping — which is better?',
        answer: 'Amazon FBA typically offers better margins and faster shipping times than dropshipping. FBA requires more upfront capital for inventory. Dropshipping has no inventory risk but lower margins and more fulfillment complexity. Many e-commerce entrepreneurs try both to find what works for their situation.'
      }
    ],
    tagline: 'Sell products using Amazon\'s warehouse and fulfillment network — scalable e-commerce business',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '210',
    slug: 'etsy',
    name: 'Etsy',
    category: 'other',
    founded_year: 2005,
    hq_location: 'Brooklyn, New York, USA',
    website: 'https://etsy.com',
    products_summary: 'Global marketplace for handmade, vintage, and craft supply items. 7.5 million active sellers, 90 million active buyers. Free to create a shop — Etsy charges $0.20 per listing plus 6.5% transaction fee plus payment processing. One of the most accessible platforms for creative entrepreneurs.',
    monthly_cost_min: 0,
    monthly_cost_max: 10,
    comp_plan_type: 'Marketplace — sellers keep revenue minus $0.20 listing fee + 6.5% transaction + payment processing (~3%)',
    overall_rating: 4.0,
    residual_rating: 2.5,
    simplicity_rating: 4.0,
    transparency_rating: 4.5,
    community_rating: 4.0,
    value_rating: 4.0,
    pros: [
      'Free to open a shop — only pay when you sell',
      '90 million active buyers provide built-in marketplace traffic',
      'Great for handmade, digital products, vintage, and craft supplies',
      'Strong brand reputation — buyers trust Etsy',
      'Easy to sell digital downloads (printables, templates) with no shipping',
      'Transparent fee structure'
    ],
    cons: [
      '6.5% transaction fee plus $0.20 listing fee plus ~3% payment processing',
      'Competition is fierce in popular categories (jewelry, printables, art)',
      'Etsy algorithm changes can significantly impact shop visibility',
      'Income is primarily active — requires ongoing new listings and marketing',
      'Customer service and returns handled by sellers',
      'Etsy can suspend shops for policy violations'
    ],
    quick_facts: {
      'Founded': '2005',
      'Headquarters': 'Brooklyn, New York',
      'Active Sellers': '7.5 million',
      'Active Buyers': '90 million',
      'Total Fees': '~10-12% of each sale (listing + transaction + payment)'
    },
    faq: [
      {
        question: 'How much can you earn on Etsy?',
        answer: 'Etsy earnings vary dramatically. New sellers might earn $100-$500/month. Established shops with popular products earn $1,000-$10,000+/month. Top Etsy sellers earning $100,000+/year exist but represent a tiny fraction of the 7.5 million sellers. Success requires great products, photos, and SEO optimization.'
      },
      {
        question: 'What sells best on Etsy?',
        answer: 'Top categories include digital downloads (printables, templates, SVGs), handmade jewelry, custom gifts, wedding items, and art prints. Digital products are particularly attractive because they have no shipping, no inventory, and can generate income 24/7 from a single creation.'
      },
      {
        question: 'Is Etsy good for beginners?',
        answer: 'Yes — Etsy is one of the most beginner-friendly ways to start selling online. The marketplace provides built-in traffic, the platform is easy to use, and starting costs are minimal. The main challenge is standing out in competitive categories.'
      }
    ],
    tagline: '90 million buyer marketplace — ideal for handmade, digital products, and vintage',
    last_updated: '2026-01-15T00:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-01-15T00:00:00.000Z'
  },
  {
    id: '602',
    slug: 'superone',
    name: 'SuperOne (Super.One)',
    category: 'mlm',
    founded_year: 2019,
    hq_location: 'Singapore (registered as Lootbox International)',
    website: 'super.one',
    products_summary: 'SuperOne is a blockchain-based trivia and sports entertainment app that has relaunched multiple times since 2019 after repeatedly failing. Users play sports and entertainment trivia in a "Battle Royale" format. The app is a front for an MLM/Ponzi compensation structure involving "Lootbox" token purchases, affiliate recruitment, and passive rewards for holding digital assets. BehindMLM has reviewed SuperOne three times (2020, 2022, 2025) — each review documents a relaunch after the previous version collapsed with participants unable to cash out.',
    monthly_cost_min: 0,
    monthly_cost_max: 500,
    comp_plan_type: 'MLM Ponzi — affiliate recruitment + passive "Lootbox" token holding rewards',
    overall_rating: 1.0,
    residual_rating: 1.0,
    simplicity_rating: 1.5,
    transparency_rating: 1.0,
    community_rating: 1.5,
    value_rating: 1.0,
    pros: [
      'App is free to download',
      'Trivia gameplay concept is legitimately entertaining in principle',
    ],
    cons: [
      'Three failed relaunches since 2019 — pattern of collapse and rebrand',
      'Participants from previous versions unable to cash out their earnings',
      'Compensation plan mostly hidden from consumers — lack of transparency is a major red flag',
      'Passive income from "holding Lootbox assets" has no external revenue source — funded by new participant purchases',
      'CEO Andreas Christensen has promoted previous failed versions of the same scheme',
      'Registered in Singapore as Lootbox International — offshore jurisdiction limits legal recourse for participants',
      'Blockchain and crypto wrapper obscures money flow without providing real transparency',
      'No regulatory approval in any major jurisdiction',
      'Founded 2019 but has never achieved stable operation — fails repeatedly',
    ],
    quick_facts: {
      'Founded': '2019 (multiple relaunches)',
      'Headquarters': 'Singapore (Lootbox International)',
      'CEO': 'Andreas Christensen',
      'Business Model': 'MLM Ponzi — trivia app front',
      'Status (2025)': '3rd relaunch — bagholders from v1/v2 still unable to cash out',
      'Regulatory Action': 'None officially — offshore registration',
      'App Stores': 'Available on iOS and Android',
    },
    last_updated: '2026-03-22T14:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-03-22T14:00:00.000Z',
    tagline: 'Sports trivia app with a Ponzi compensation structure — three failed relaunches since 2019',
    faq: [
      {
        question: 'Is SuperOne a scam?',
        answer: 'SuperOne has the characteristics of a Ponzi scheme. It has launched and failed three times since 2019, with participants from previous versions unable to cash out their earnings. The passive income from "holding Lootbox assets" has no external revenue source — rewards are funded by new participant purchases. When recruitment slows, the system collapses. The trivia app is a legitimate product concept but is used as a front for the MLM/investment structure.',
      },
      {
        question: 'Is SuperOne a pyramid scheme?',
        answer: 'SuperOne operates as a Ponzi scheme with MLM recruitment mechanics. Unlike traditional MLMs that sell physical products, SuperOne\'s primary value proposition is passive returns from holding digital "Lootbox" assets — with those returns funded by new participant investments. This meets the definition of a Ponzi scheme: no real external revenue, early participants paid by later ones.',
      },
      {
        question: 'Who is behind SuperOne?',
        answer: 'SuperOne is led by CEO Andreas Christensen and registered in Singapore as Lootbox International. The company has relaunched the same basic scheme under different framings multiple times since 2019.',
      },
      {
        question: 'Can you make money with SuperOne?',
        answer: 'Early participants in each launch cycle have made money — funded by later participants. However, multiple rounds of SuperOne participants have been left holding worthless tokens unable to cash out when the system stalled. As with all Ponzi-structured schemes, the majority of participants lose money.',
      },
      {
        question: 'Is the SuperOne trivia app real?',
        answer: 'The trivia app is real and functional — it runs sports and entertainment trivia in a Battle Royale format. However, the app does not generate sufficient revenue to fund the passive income promises made to investors/affiliates. The app is a recruitment and legitimacy tool for the underlying investment scheme.',
      },
    ],
  },
  {
    id: '603',
    slug: 'five-rings-financial',
    name: 'Five Rings Financial',
    category: 'mlm',
    founded_year: 2012,
    hq_location: 'Littleton, Colorado, USA',
    website: 'fiveringsfinancial.com',
    products_summary: 'Five Rings Financial is a financial services MLM that sells life insurance (indexed universal life, whole life, term) and financial products through independent agents. The company is based in Colorado and operates similarly to Primerica — agents earn commissions on insurance sales plus overrides on recruits. Heavy emphasis on recruiting over retail sales, with a business model that requires licensing. Not BBB accredited. Glassdoor reviews are mixed — some rate it highly while others describe it as an MLM scam where income depends primarily on recruitment.',
    monthly_cost_min: 0,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level insurance commissions + recruitment overrides',
    overall_rating: 2.0,
    residual_rating: 2.0,
    simplicity_rating: 1.5,
    transparency_rating: 2.0,
    community_rating: 2.5,
    value_rating: 2.0,
    pros: [
      'Legitimate insurance products — real value for customers',
      'Can build a career in financial services with proper licensing',
      'Part-time entry possible before full commitment',
      'Insurance commissions can be meaningful with right clientele',
    ],
    cons: [
      'Heavy recruitment emphasis — income primarily from building a downline',
      'Requires state insurance licensing (time and money investment upfront)',
      'Not BBB accredited',
      'Glassdoor reviews describe pressure tactics and MLM-style recruitment',
      'Commission splits across multiple levels reduce per-sale income',
      'Compensation tied to insurance sales and team building',
      'Financial products often more expensive than alternatives',
    ],
    quick_facts: {
      'Founded': '2012',
      'Headquarters': 'Littleton, Colorado',
      'Products': 'Life insurance, IUL, financial services',
      'Licensing': 'State insurance license required',
      'BBB Rating': 'Not accredited',
      'Business Model': 'MLM financial services',
    },
    last_updated: '2026-03-22T14:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-03-22T14:00:00.000Z',
    tagline: 'Financial services MLM with insurance products and heavy recruitment focus',
    faq: [
      {
        question: 'Is Five Rings Financial a pyramid scheme?',
        answer: 'Five Rings Financial is not a pyramid scheme — it sells legitimate insurance products and requires proper licensing. However, it operates with an MLM structure where income from recruiting downlines is heavily emphasized alongside product sales. Like Primerica, the model blurs the line between financial services career and MLM recruitment.',
      },
      {
        question: 'Is Five Rings Financial legit?',
        answer: 'The company is legally operating and sells real insurance products. However, it is not BBB accredited and has received mixed reviews on Glassdoor, with some employees describing it as an MLM where income primarily comes from recruiting rather than client-based insurance sales.',
      },
      {
        question: 'How much can you make with Five Rings Financial?',
        answer: 'Agent earnings depend on insurance sales volume and building a team. Agents earn commissions on personal sales plus overrides on downline agent production. Success depends on obtaining proper licensing and building a client base.',
      },
    ],
  },
  {
    id: '604',
    slug: 'mwr-financial',
    name: 'MWR Financial (MWR Life)',
    tagline: 'MWR Life travel savings and MWR Financial services — MLM with binary structure and multiple rebrands',
    category: 'mlm',
    founded_year: 2013,
    hq_location: 'United States',
    website: 'mwrfinancial.com',
    products_summary: 'Formerly known as MWR Life, a travel savings MLM, MWR Financial pivoted to financial services in 2020. The company sells a subscription called Financial Edge covering credit, tax, and financial wellness tools. The original MWR Life product — Travel Advantage (discounted travel bookings) — is still part of the offering. Founded by Brian House, the company has operated under multiple names since 2013. BehindMLM reviewed MWR Life v2 in August 2025, noting binary compensation structure complexity and pyramid scheme ambiguity. Representatives earn commissions on Financial Edge subscriptions and Travel Advantage memberships plus recruitment overrides.',
    monthly_cost_min: 30,
    monthly_cost_max: 150,
    comp_plan_type: 'Binary MLM — Financial Edge subscription commissions + travel savings + recruitment overrides',
    overall_rating: 1.8,
    residual_rating: 2.0,
    simplicity_rating: 1.5,
    transparency_rating: 1.5,
    community_rating: 2.0,
    value_rating: 1.5,
    pros: [
      'Financial Edge subscription has real tools (credit, tax, financial wellness)',
      'Low entry cost compared to some MLMs',
      'Travel savings component adds tangible value',
    ],
    cons: [
      'Complex binary compensation plan with pyramid ambiguity (per BehindMLM 2025)',
      'Company has operated under multiple names suggesting instability',
      'Compensation plan requires monthly subscription fees to earn commissions',
      'Heavy recruitment focus — income primarily from downline building',
      'Founder Brian House has been accused of trying to hide company MLM origins',
      'No public income disclosure',
      'Binary structure can trap commissions through uneven leg requirements',
    ],
    quick_facts: {
      'Founded': '2013',
      'Also Known As': 'MWR Life, MWR Financial',
      'Products': 'Financial Edge subscription, Travel Advantage',
      'Business Model': 'Binary MLM — financial services subscriptions',
      'BehindMLM Review': 'August 2025 — pyramid ambiguity noted',
    },
    last_updated: '2026-03-22T14:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-03-22T14:00:00.000Z',
    faq: [
      {
        question: 'Is MWR Financial a pyramid scheme?',
        answer: 'MWR Financial (MWR Life) is not technically a pyramid scheme — it sells real subscription products including financial tools and travel savings. However, BehindMLM noted "pyramid ambiguity" in its 2025 review due to the binary compensation structure and heavy recruitment emphasis. The company has operated under multiple names, which raises stability concerns.',
      },
      {
        question: 'Is MWR Financial legit?',
        answer: 'MWR Financial is a legal MLM operation with real products. The financial tools in the Financial Edge subscription have genuine value. However, like most financial services MLMs, income potential is heavily tied to recruitment rather than product sales alone.',
      },
      {
        question: 'What is MWR Life vs MWR Financial?',
        answer: 'MWR Life was the original company name focused on travel savings. MWR Financial is the evolved version focused on financial wellness tools (credit, tax, financial education). They share the same founder and basic MLM structure.',
      },
    ],
  },
  {
    id: '605',
    slug: 'unicity-international',
    name: 'Unicity International',
    category: 'mlm',
    founded_year: 1951,
    hq_location: 'Orem, Utah, USA',
    website: 'unicity.com',
    products_summary: 'Unicity International is a long-established health and wellness MLM founded in 1951 (originally as Rexall Drug Company). The company sells nutritional supplements, weight management, and personal care products through a network of independent distributors. Best known for "Unimate" (yerba mate drink) and "Feel Great" weight management system. Operates in 60+ countries. The compensation plan uses a three-level approach and is not fully disclosed publicly. Products are positioned around metabolic health and "solving the global metabolic epidemic." $40 entry fee with optional product packages.',
    monthly_cost_min: 40,
    monthly_cost_max: 300,
    comp_plan_type: 'Multi-level (3-level approach) — product commissions + team development bonuses',
    overall_rating: 2.6,
    residual_rating: 2.5,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.5,
    pros: [
      'Founded 1951 — over 70 years of operation, strong longevity score',
      'Operates in 60+ countries — established global presence',
      'Feel Great system has loyal customer following',
      'No mandatory autoship to join (optional product packages)',
      '$40 entry fee is low compared to most MLMs',
      'Products backed by some clinical research',
    ],
    cons: [
      'Compensation plan not fully disclosed to the public — lack of transparency',
      'Heavy recruitment emphasis according to independent reviewers',
      'No public income disclosure statement',
      'Products significantly more expensive than retail alternatives',
      'Metabolic health claims are bold and not fully substantiated for all products',
      'Team development bonuses create recruiting incentive over retail focus',
    ],
    quick_facts: {
      'Founded': '1951',
      'Headquarters': 'Orem, Utah',
      'Countries': '60+',
      'Entry Fee': '$40',
      'Key Products': 'Unimate, Feel Great system, nutritional supplements',
      'Business Model': 'Multi-level (3-level) health & wellness',
    },
    last_updated: '2026-03-22T14:00:00.000Z',
    is_featured: false,
    is_published: true,
    created_at: '2026-03-22T14:00:00.000Z',
    tagline: 'Health and wellness MLM founded 1951 — one of the oldest in the industry',
    faq: [
      {
        question: 'Is Unicity a pyramid scheme?',
        answer: 'No. Unicity sells real nutritional products and has been operating legally for over 70 years. It is a legitimate MLM, not a pyramid scheme. However, like most MLMs, income potential depends significantly on recruitment, and the compensation plan is not fully transparent.',
      },
      {
        question: 'Is Unicity legit?',
        answer: 'Yes — Unicity is a legitimate company with real products and a 70+ year operating history. It passes the 5-year company stability test easily. The main concerns are compensation plan transparency and the heavy recruitment emphasis that is typical of MLMs.',
      },
      {
        question: 'What is the Unicity Feel Great system?',
        answer: 'The Feel Great system is Unicitys flagship weight management program combining Unimate (yerba mate drink) and Balance (fiber supplement). It is positioned around metabolic health and intermittent fasting support. The system has a loyal customer base, though the products are priced significantly higher than comparable retail alternatives.',
      },
      {
        question: 'How long has Unicity been in business?',
        answer: 'Unicity traces its roots to 1951 through its predecessor Rexall Drug Company. The Unicity brand has been operating for decades and is one of the longest-established MLM companies in the world. This longevity is a genuine positive differentiator in an industry where most companies fail within 5 years.',
      },
    ],
  },
];
