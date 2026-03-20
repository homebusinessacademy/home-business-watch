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
      '50.35% of U.S. Wellness Advocates received zero earnings (per doTERRA income disclosure)',
      'Entry-level ranks (Manager/Director/Executive) earn up to $1,600 annually — before expenses',
      'Required monthly Loyalty Rewards order (~$35-150/mo) to maintain eligibility',
      'Products priced significantly higher than comparable retail alternatives',
      'Heavy emphasis on recruiting to advance ranks and earn meaningful income'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Pleasant Grove, Utah',
      'Business Model': 'Multi-level marketing',
      'Monthly Autoship': '$35–$150+ to qualify',
      'Zero Earners': '50.35% of U.S. Wellness Advocates (per income disclosure)'
    },
    faq: [
      {
        question: 'Is doTERRA a pyramid scheme?',
        answer: 'doTERRA is a legal MLM company, not a pyramid scheme. However, per their own income disclosure, over 50% of U.S. Wellness Advocates earned nothing. Meaningful income typically requires significant recruiting and team building.'
      },
      {
        question: 'How much do doTERRA Wellness Advocates earn?',
        answer: 'Per doTERRA\'s income disclosure, entry-level advocates (Manager through Executive) earn up to $1,600 annually — before expenses including required autoship purchases. Less than 1% of advocates earn meaningful full-time income.'
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Vast majority of Brand Partners earn little to no income',
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
      'Income Disclosure': 'Most Brand Partners earn under $1,000/year'
    },
    faq: [
      {
        question: 'Is Young Living a scam?',
        answer: 'Young Living is a legitimate MLM company with real products. However, like most MLMs, the income opportunity is very difficult — most Brand Partners earn little to nothing after expenses, per their income disclosure.'
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      '2024 income disclosure: average earnings of $7,757 for licensed reps',
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
      'Stock Ticker': 'NYSE: PRI',
      'Startup Fee': '$99 USD',
      '2024 Avg. Earnings': '$7,757 for licensed sales force members'
    },
    faq: [
      {
        question: 'Is Primerica an MLM?',
        answer: 'Primerica operates with an MLM-style recruiting structure but sells legitimate financial products (term life insurance, investments). It is publicly traded on the NYSE, which provides more transparency than typical MLMs.'
      },
      {
        question: 'How much do Primerica representatives earn?',
        answer: 'Per Primerica\'s 2024 earnings statement, the average annual earnings for licensed sales force members was $7,757. However, this includes a wide range — many earn little while a small percentage earn significant income.'
      },
      {
        question: 'Do I need a license to sell Primerica products?',
        answer: 'Yes. To sell life insurance, you must obtain a state life insurance license. Primerica provides training but you bear the cost of the license exam (~$50-150 per state) and the $99 startup fee.'
      }
    ],
    tagline: 'Publicly traded financial services MLM selling term life insurance',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Average earnings of just $206/year for eligible consultants (per Canadian income disclosure)',
      '85% of Canadian sales force earned $0 according to disclosed figures',
      'Strong pressure to purchase and maintain inventory',
      'Pink Cadillac incentive requires significant team and sales production',
      'U.S. law does not require income disclosure — limited transparency',
      'Products considered overpriced by many compared to retail alternatives'
    ],
    quick_facts: {
      'Founded': '1963',
      'Headquarters': 'Addison, Texas',
      'Business Model': 'Multi-level marketing / direct sales',
      'Starter Kit': '~$100',
      'Canadian Income Disclosure': 'Average $206/year for eligible consultants'
    },
    faq: [
      {
        question: 'Is Mary Kay a pyramid scheme?',
        answer: 'Mary Kay is a legal direct sales/MLM company, not a pyramid scheme. However, income disclosures from Canada (where disclosure is required) show ~85% of the sales force earned $0, and average eligible earnings were just $206/year before expenses.'
      },
      {
        question: 'Can you make real money with Mary Kay?',
        answer: 'A very small percentage of top directors and national sales directors earn significant income. Most consultants earn little to nothing after accounting for required inventory purchases and business expenses.'
      },
      {
        question: 'What is the startup cost for Mary Kay?',
        answer: 'The Starter Kit is approximately $100 and includes products and business supplies. However, consultants are strongly encouraged to purchase inventory ($200–$1,800+) which is where most losses occur.'
      }
    ],
    tagline: 'Iconic cosmetics MLM founded in 1963',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Majority of Brand Affiliates earn little to no income',
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      '2024 average earnings of all U.S. Associates: $986.74 before expenses (per Isagenix)',
      'Requires ~$100-300/month in product purchases to maintain active status',
      'Products significantly overpriced vs. comparable retail nutrition brands',
      'Revenue declining — company has faced layoffs and restructuring',
      'Binary compensation plan is complex and favors early adopters'
    ],
    quick_facts: {
      'Founded': '2002',
      'Headquarters': 'Chandler, Arizona',
      'Business Model': 'Multi-level marketing',
      'Monthly Products': '~$100–$300 to stay active',
      '2024 Avg. Earnings': '$986.74/year before expenses (all U.S. Associates)'
    },
    faq: [
      {
        question: 'Is Isagenix a pyramid scheme?',
        answer: 'Isagenix is a legal MLM company with real products. However, per their own 2024 disclosure, the average earnings for all U.S. Associates were $986.74 before expenses — including the cost of required product purchases.'
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      '2024 average annual income for all U.S. Market Partners: $758 (per MONAT disclosure)',
      '41% of U.S. Market Partners were inactive and earned $0 in 2024',
      'Hundreds of lawsuits from customers claiming hair loss from products',
      'Required monthly personal purchases (~$84+) to qualify for commissions',
      'BBB monitoring inquiry for income claim compliance issues',
      'Products face significant negative reviews alongside positive ones'
    ],
    quick_facts: {
      'Founded': '2014',
      'Headquarters': 'Doral, Florida',
      'Business Model': 'Multi-level marketing',
      '2024 Avg. Earnings': '$758/year for all U.S. Market Partners',
      'Notable Issue': 'Hundreds of hair loss lawsuits from customers'
    },
    faq: [
      {
        question: 'Does MONAT cause hair loss?',
        answer: 'MONAT has faced hundreds of lawsuits from customers claiming their products caused hair loss. The company denies these claims. Independent testing has produced mixed results. Potential buyers should research extensively before purchasing.'
      },
      {
        question: 'How much do MONAT Market Partners earn?',
        answer: 'Per MONAT\'s 2024 income disclosure, the average annual income for all U.S. Market Partners was $758. 41% were inactive and earned nothing. Only top ranks (above Market Mentor) earn meaningful income.'
      },
      {
        question: 'What is the monthly cost to be a MONAT Market Partner?',
        answer: 'Market Partners typically pay an $84+ monthly SMART Start order to maintain active status and qualify for commissions. Plus the initial Market Partner kit at $99-$599.'
      }
    ],
    tagline: 'Haircare MLM with controversial product reviews',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      '2024 average annual earnings for all U.S. Brand Ambassadors: $742 (per Plexus disclosure)',
      'FDA warning letters received for making unsubstantiated health claims',
      'Required monthly autoship (~$40-150) to maintain active status',
      'Products make bold health claims with limited clinical evidence',
      'Recruiting heavily emphasized over retail sales'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Scottsdale, Arizona',
      'Business Model': 'Multi-level marketing',
      '2024 Avg. Earnings': '$742/year for all U.S. Brand Ambassadors',
      'FDA Status': 'Received warning letters for health claim violations'
    },
    faq: [
      {
        question: 'Is Plexus FDA approved?',
        answer: 'No dietary supplement is "FDA approved" — they are regulated but not pre-approved. Plexus has received FDA warning letters for making unsubstantiated health claims about their products treating or preventing disease.'
      },
      {
        question: 'How much do Plexus Ambassadors earn?',
        answer: 'Per Plexus\'s 2024 income disclosure, the average annual earnings for all U.S. Brand Ambassadors (active and inactive) were $742 before expenses. Less than 1% of Ambassadors achieve meaningful full-time income.'
      },
      {
        question: 'What is the Plexus Slim Pink Drink?',
        answer: 'Plexus Slim is Plexus\'s flagship product — a pink-colored drink mix claimed to support blood sugar, weight management, and gut health. It contains chromium, green coffee bean extract, and proprietary blend ingredients.'
      }
    ],
    tagline: 'Gut health and weight management MLM known for the Pink Drink',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Previous MLM income disclosure: vast majority of consultants earned under $7,000/year',
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
        answer: 'USANA has higher quality products than many MLMs and is publicly traded for transparency. However, like most MLMs, the majority of Associates earn little to no income. Revenue has been declining, and the binary compensation plan favors those who join early.'
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Forever Living does not publish an income disclosure — major transparency concern',
      'FBOs are prohibited from making income representations per company policy',
      'Required to maintain ~$200/month in product purchases to qualify for commissions',
      'Products significantly overpriced vs. comparable retail aloe products',
      'Compensation plan based on complex Case Credit (CC) system'
    ],
    quick_facts: {
      'Founded': '1978',
      'Headquarters': 'Scottsdale, Arizona',
      'Income Disclosure': 'Not publicly published ⚠️',
      'Monthly Requirement': '~$200+ in products to qualify',
      'Markets': '160+ countries'
    },
    faq: [
      {
        question: 'Is Forever Living a pyramid scheme?',
        answer: 'Forever Living is a legal MLM company selling real aloe vera products. However, the company does not publish an income disclosure, which makes it difficult to assess typical earnings. FBOs are also prohibited from making income representations.'
      },
      {
        question: 'How much does it cost to join Forever Living?',
        answer: 'Initial enrollment costs vary by country but typically require purchasing a starter pack (~$200-300 in products). To earn commissions, FBOs must maintain ongoing monthly product purchases, typically valued at 2+ case credits (~$200+).'
      },
      {
        question: 'Does Forever Living publish income disclosures?',
        answer: 'No. Unlike most major MLMs, Forever Living does not publish a public income disclosure statement. This lack of transparency is a significant concern for those evaluating the business opportunity.'
      }
    ],
    tagline: 'World\'s largest aloe vera MLM — no public income disclosure',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
        answer: 'Pampered Chef consultants earn 20-25% commission on personal sales. Based on the Canadian 2024 income disclosure, most active consultants earn modest supplemental income. A smaller percentage advance to Director and above, earning meaningful additional team bonuses.'
      },
      {
        question: 'Do you need to host parties to sell Pampered Chef?',
        answer: 'Cooking shows (parties) are the traditional selling method, but consultants can also sell online through their personal Pampered Chef website. However, hosting parties typically generates the best sales results.'
      }
    ],
    tagline: 'Berkshire Hathaway-owned kitchen products direct sales company',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
        answer: 'LiveGood does not publish a transparent income disclosure. Claims online vary widely. Like most MLMs, the majority of affiliates earn modest income or none. Top recruiters with large downlines earn significantly more. Without an official income disclosure, verify claims carefully.'
      }
    ],
    tagline: 'Fast-growing $9.95/month wellness MLM — 350,000+ members since 2022',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Previous MLM income disclosure: 57% of coaches earned $0 annually',
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
      'Former Income Disclosure': '57% of coaches earned $0/year'
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
        answer: 'Per income disclosure data: 57% of coaches earned $0 in a given year. Only 1% of coaches earned more than $10,000/year. The average income across all coaches was approximately $3,000/year in 2020-2021 — before expenses including required product purchases.'
      },
      {
        question: 'Is BODi (Beachbody) a good fitness product?',
        answer: 'BODi\'s streaming fitness platform includes thousands of workouts from P90X, Insanity, 21 Day Fix, and more. As a fitness product, it has genuine value. As a business opportunity under either the old MLM or new affiliate model, results for most participants are modest.'
      }
    ],
    tagline: 'Iconic fitness brand that pivoted from MLM to affiliate model in November 2024',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Most representatives earn very little — no public U.S. income disclosure'
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Per disclosed data: 57% of Presenters earned average $833/year, 34% earned average $190/year',
      'Coty Inc. divested its 60% stake in 2019 — confidence signal',
      'Products considered overpriced vs. retail makeup alternatives',
      'Social media selling model creates strain on personal relationships',
      'Required monthly purchase (~$125 Presenter Status Volume) to stay active'
    ],
    quick_facts: {
      'Founded': '2012',
      'Headquarters': 'Lehi, Utah',
      'Founders': 'Derek Maxfield & Melanie Huscroft',
      'Income Disclosure': 'No full public disclosure ⚠️',
      'Notable': 'Coty sold its 60% stake back to Younique in 2019'
    },
    faq: [
      {
        question: 'Is Younique a pyramid scheme?',
        answer: 'Younique is a legal MLM with real makeup products. However, it does not publish a full income disclosure. Limited disclosed data shows 57% of Presenters earning an average $833/year and 34% earning only $190/year — before expenses including required product purchases.'
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
    tagline: 'Social media makeup MLM — no public income disclosure, Coty exited investment',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
        answer: 'Per Medifast\'s income disclosure, most OPTAVIA Coaches earn modest supplemental income. Coach earnings are primarily driven by the size and activity of their client base. Revenue has been declining from the 2022 peak, creating challenges for Coach income.'
      },
      {
        question: 'Is OPTAVIA effective for weight loss?',
        answer: 'Clinical studies show meal replacement programs can be effective for short-term weight loss. However, the program\'s high cost ($300-500+/month), reliance on processed food products, and high dropout rates raise questions about long-term sustainability.'
      }
    ],
    tagline: 'Publicly traded weight loss MLM — $1.5B peak revenue in 2022, declining since',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Income disclosure shows vast majority of distributors earn little to nothing',
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Per income disclosure: R1 Promoters (16% of all Promoters) average only $304/year',
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
      'Income Disclosure': 'R1 Promoters (largest group) avg. $304/year (2022)',
      'TINA.org Audit': 'Income claims audited October 2024'
    },
    faq: [
      {
        question: 'Does Prüvit KETO//OS actually work?',
        answer: 'Exogenous ketones can raise blood ketone levels, but the health benefits of this effect are debated in the scientific literature. Some users report increased energy and mental focus. However, the products are significantly overpriced compared to alternatives, and the ketogenic diet itself (without supplements) achieves similar results.'
      },
      {
        question: 'How much do Prüvit Promoters earn?',
        answer: 'Per Prüvit\'s own income disclosure, R1 Promoters (the largest active group, comprising 16% of all Promoters) averaged just $304/year in 2022. Given monthly autoship costs of $80-200, most Promoters lose money on the opportunity.'
      },
      {
        question: 'Is Prüvit an MLM?',
        answer: 'Yes. Prüvit operates a multi-level marketing compensation plan where Promoters earn commissions on product sales and from recruiting new Promoters. TINA.org audited Prüvit\'s income claims in 2024 for FTC compliance.'
      }
    ],
    tagline: 'Ketone supplement MLM — R1 Promoters average $304/year per income disclosure',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
        answer: '4Life has an income disclosure but specific average earnings data varies by rank. TINA.org audited 4Life\'s income claims in 2024 for FTC compliance. As with most MLMs, the vast majority of active distributors earn less than their monthly product purchase requirements.'
      }
    ],
    tagline: 'Transfer factor immune supplement MLM — 26 years, 80+ countries',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
        answer: 'ACN is a legal MLM selling real telecom and energy services. However, per their own income disclosure, only 1% of representatives earn income consistent with the top of the compensation plan. The $499 startup fee and difficulty convincing customers to switch service providers are significant barriers.'
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Monthly Minimum': '~$75-150 product order',
      'Classification': 'Self-described "referral marketing" (not MLM per company)'
    },
    faq: [
      {
        question: 'Is Melaleuca an MLM?',
        answer: 'Melaleuca strongly insists it is not an MLM, calling itself a "wellness company" and "referral marketing" company. The structure has some MLM-like elements (residual commissions from referred customers) but differs in that there are no distributor ranks, no required product purchases to recruit, and products are primarily sold to end consumers, not to distributors themselves.'
      },
      {
        question: 'How much do Melaleuca Marketing Executives earn?',
        answer: 'Per Melaleuca\'s income statistics, Marketing Executives can earn $250-$2,500+/month depending on their customer base. The company states the opportunity is possible for "average, everyday families." Most active Marketing Executives earn supplemental income rather than full-time wages.'
      },
      {
        question: 'Are Melaleuca products good?',
        answer: 'Melaleuca has a generally positive reputation for product quality, particularly their Renew lotion and EcoSense cleaning products. Products are competitively priced compared to premium natural brands but require a subscription purchase commitment.'
      }
    ],
    tagline: 'Idaho wellness company — calls itself "referral marketing" not MLM, generally positive reputation',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
      'Most agents earn little to nothing after licensing costs and required product purchases',
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
        answer: 'WFG does not publish a transparent income disclosure. Given licensing requirements (~$200+ to get started), required product purchases, and the MLM structure, most new agents earn very little in their first year. A small percentage build successful teams and earn significant income.'
      }
    ],
    tagline: 'Financial services MLM — Transamerica subsidiary, IUL fraud lawsuits, targets immigrant communities',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
  },
  {
    id: '131',
    slug: 'it-works',
    name: 'It Works! Global',
    category: 'mlm',
    founded_year: 2001,
    hq_location: 'Palmetto, Florida, USA',
    website: 'https://itworks.com',
    products_summary: 'Health and wellness MLM known for its "crazy wrap thing" body wraps and supplement products. Founded by Mark and Cindy Pentecost. Per income disclosure analysis, 97.57% of distributors earn less than a full-time income.',
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
      '97.57% of distributors earn less than full-time income (per income disclosure analysis)',
      'Body wrap "results" are temporary — water weight loss, not fat loss',
      'Required monthly autoship ($80-150) to maintain Distributor status',
      'Products significantly overpriced vs. retail alternatives',
      'Heavy social media recruiting pressure creates relationship strain'
    ],
    quick_facts: {
      'Founded': '2001',
      'Headquarters': 'Palmetto, Florida',
      'Known For': '"The Crazy Wrap Thing" body wraps',
      'Income Reality': '97.57% of distributors earn less than full-time income',
      'Monthly Autoship': '~$80-150 required'
    },
    faq: [
      {
        question: 'Do It Works body wraps actually work?',
        answer: 'It Works body wraps may produce temporary inch loss results primarily through fluid reduction. The results are not permanent fat loss. Most medical professionals consider the dramatic before/after photos misleading, as results disappear after rehydration.'
      },
      {
        question: 'How much do It Works distributors earn?',
        answer: 'Per income disclosure analysis, 97.57% of It Works distributors earn less than a full-time income. After accounting for required autoship purchases (~$80-150/month), the vast majority of distributors operate at a net loss.'
      },
      {
        question: 'Is It Works a pyramid scheme?',
        answer: 'It Works is a legal MLM with real products. However, the income structure where 97.57% of distributors don\'t earn full-time income, combined with required monthly product purchases, means most participants lose money on the business opportunity.'
      }
    ],
    tagline: 'Body wrap MLM — 97.57% of distributors earn less than full-time income',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
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
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
  },
  {
    id: '133',
    slug: 'kyani',
    name: 'Kyäni',
    category: 'mlm',
    founded_year: 2005,
    hq_location: 'Idaho Falls, Idaho, USA',
    website: 'https://kyani.com',
    products_summary: 'Health and wellness MLM founded in 2005 in Idaho Falls, Idaho. Known for a triangle of health products: Kyäni Sunrise (superfoods), Kyäni Sunset (omega-3s), and Kyäni Nitro (nitric oxide). Strong presence in European and Latin American markets. Income disclosure data only available through 2020.',
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
      'Income disclosure not updated since 2020 — major transparency concern',
      'Binary hybrid plan favors early joiners and heavy recruiters',
      'Products significantly overpriced vs. comparable supplements',
      'Most distributors earn minimal income',
      'Autoship required to stay active and qualify for commissions'
    ],
    quick_facts: {
      'Founded': '2005',
      'Headquarters': 'Idaho Falls, Idaho',
      'Core Products': 'Sunrise, Sunset, Nitro (Triangle of Health)',
      'Income Disclosure': 'Last published 2020 — not updated ⚠️',
      'Strong Markets': 'Europe, Latin America'
    },
    faq: [
      {
        question: 'Is Kyäni a legitimate MLM?',
        answer: 'Kyäni is a legal MLM with real nutritional products. However, the company\'s failure to update its income disclosure since 2020 is a transparency concern. Like most MLMs, the majority of distributors earn minimal income after accounting for autoship costs.'
      },
      {
        question: 'What are the Kyäni products?',
        answer: 'Kyäni\'s core Triangle of Health includes: Sunrise (superfood blend with wild Alaskan blueberries), Sunset (omega-3 fish oil with tocotrienols), and Nitro (nitric oxide support). The products use genuine nutritional ingredients but are priced at a significant premium over comparable retail alternatives.'
      },
      {
        question: 'Is Kyäni still in business?',
        answer: 'As of 2025, Kyäni appears to still be operating. However, the lack of an updated income disclosure since 2020 and limited recent news coverage raises questions about the company\'s current scale and direction.'
      }
    ],
    tagline: 'Idaho wellness MLM — income disclosure not updated since 2020',
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString()
  },
];
