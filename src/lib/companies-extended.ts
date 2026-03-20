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
];
