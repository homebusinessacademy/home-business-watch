import { Company } from '@/types';

export const companiesBatch1: Company[] = [
  {
    id: '101',
    slug: 'nu-skin-enterprises',
    name: 'Nu Skin Enterprises',
    category: 'mlm',
    founded_year: 1984,
    hq_location: 'Provo, Utah, USA',
    website: 'https://nuskin.com',
    products_summary: 'Skincare and nutritional supplements sold through direct sales. Known for ageLOC anti-aging products and Pharmanex supplements. Publicly traded company (NYSE: NUS).',
    monthly_cost_min: 50,
    monthly_cost_max: 200,
    comp_plan_type: 'Multi-level (Stairstep Breakaway)',
    overall_rating: 2.2,
    residual_rating: 2.0,
    simplicity_rating: 1.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Publicly traded company with financial transparency',
      'Products sold in 50+ countries globally',
      'ageLOC product line has loyal customer base',
      'Long-established company founded 1984'
    ],
    cons: [
      'Paid $47M FTC settlement in 1997 over pyramid scheme allegations',
      'Complex Stairstep Breakaway compensation plan difficult to understand',
      'High personal sales volume requirements to qualify for commissions',
      'Income disclosure shows majority of distributors earn under $1,000/year',
      'Significant revenue decline in recent years'
    ],
    quick_facts: {
      'Founded': '1984',
      'Headquarters': 'Provo, Utah, USA',
      'Business Model': 'Multi-level marketing',
      'Stock': 'NYSE: NUS (publicly traded)',
      'FTC Action': '$47M settlement (1997)',
      'Monthly Requirement': '$50-200+ in personal volume'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Publicly traded skincare and nutrition MLM',
    faq: [
      { question: 'Is Nu Skin a pyramid scheme?', answer: 'Nu Skin paid a $47M settlement to the FTC in 1997 over pyramid scheme allegations but was not shut down. It operates as a legal MLM, though critics note the heavy emphasis on recruitment over retail sales.' },
      { question: 'How much do Nu Skin distributors earn?', answer: 'According to Nu Skin\'s income disclosure, the majority of active brand affiliates earn less than $1,000 per year before expenses. Only a small percentage at the top earn significant income.' },
      { question: 'What products does Nu Skin sell?', answer: 'Nu Skin sells skincare (ageLOC line), nutritional supplements (Pharmanex), and beauty devices. Products are generally premium-priced compared to retail alternatives.' }
    ]
  },
  {
    id: '102',
    slug: 'primerica',
    name: 'Primerica',
    category: 'mlm',
    founded_year: 1977,
    hq_location: 'Duluth, Georgia, USA',
    website: 'https://primerica.com',
    products_summary: 'Term life insurance, mutual funds, variable annuities, and financial products sold through a network of licensed representatives. One of the largest independent distributors of term life insurance in North America.',
    monthly_cost_min: 99,
    monthly_cost_max: 199,
    comp_plan_type: 'Multi-level (override commissions on downline)',
    overall_rating: 2.4,
    residual_rating: 2.5,
    simplicity_rating: 2.0,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Publicly traded company (NYSE: PRI) with regulatory oversight',
      'Legitimate financial products (term life insurance)',
      'Extensive training and licensing support',
      'Can build a real career in financial services'
    ],
    cons: [
      'Upfront licensing fees and required training courses',
      'High pressure to recruit family and friends',
      'Products often more expensive than competitors',
      'MLM structure means commissions heavily favor those who recruit',
      'Most representatives earn little to nothing before licensing'
    ],
    quick_facts: {
      'Founded': '1977',
      'Headquarters': 'Duluth, Georgia',
      'Business Model': 'MLM — financial services',
      'Stock': 'NYSE: PRI (publicly traded)',
      'Licensing': 'Requires state insurance license',
      'Startup Cost': '~$99 + licensing fees'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'MLM-based life insurance and financial services',
    faq: [
      { question: 'Is Primerica a legitimate company?', answer: 'Primerica is a legitimate, publicly traded insurance company. However, its MLM recruitment model is controversial — many representatives spend money on licensing and training but earn very little.' },
      { question: 'How much does it cost to join Primerica?', answer: 'There is typically a $99 background check fee plus the cost of state licensing courses, which can run $100-300+. Most new reps must recruit others to earn meaningful income.' },
      { question: 'Is Primerica a pyramid scheme?', answer: 'Primerica is not a pyramid scheme — it sells legitimate insurance products. However, its heavy emphasis on recruiting over selling has drawn criticism and comparisons to MLM structures.' }
    ]
  },
  {
    id: '103',
    slug: 'mary-kay',
    name: 'Mary Kay',
    category: 'mlm',
    founded_year: 1963,
    hq_location: 'Addison, Texas, USA',
    website: 'https://marykay.com',
    products_summary: 'Direct-sales cosmetics, skincare, and fragrances sold primarily by independent beauty consultants. One of the most recognizable MLM brands in the world, famous for its pink Cadillac car reward program.',
    monthly_cost_min: 100,
    monthly_cost_max: 300,
    comp_plan_type: 'Multi-level (frontline commissions + director overrides)',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.5,
    value_rating: 2.0,
    pros: [
      'Iconic brand with 60+ years of history',
      'Strong community and sisterhood culture',
      'Flexible working hours and schedule',
      'Pink Cadillac incentive is aspirational for many'
    ],
    cons: [
      'Required to purchase inventory upfront (\$100+ minimum)',
      'Front-loading pressure: pushed to buy excessive inventory',
      'Income disclosure shows ~73% of consultants earned $0 in commissions',
      'Saturated market — difficult to find new customers and recruits',
      'Products must be sold at full retail to earn decent margins'
    ],
    quick_facts: {
      'Founded': '1963',
      'Headquarters': 'Addison, Texas',
      'Business Model': 'Direct sales / MLM',
      'Starter Kit': '~$100',
      'Key Stat': '73% of consultants reported $0 in commissions (IDS)',
      'Famous For': 'Pink Cadillac car reward'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Iconic pink cosmetics direct sales company',
    faq: [
      { question: 'Is Mary Kay worth it?', answer: 'Mary Kay income disclosure shows approximately 73% of Independent Beauty Consultants reported zero commissions. The small percentage who earn substantial income typically have large downlines and spend significant time recruiting.' },
      { question: 'Do you have to buy inventory with Mary Kay?', answer: 'While not technically required, there is significant pressure to purchase inventory upfront. The starter kit is ~$100, but consultants are encouraged to invest much more in "inventory on hand."' },
      { question: 'How much do Mary Kay consultants make?', answer: 'Based on income disclosures, the vast majority of consultants earn very little. Only those who build large recruiting networks (directors and above) typically earn meaningful income.' }
    ]
  },
  {
    id: '104',
    slug: 'avon-products',
    name: 'Avon Products',
    category: 'direct_sales',
    founded_year: 1886,
    hq_location: 'London, United Kingdom (owned by Natura &Co)',
    website: 'https://avon.com',
    products_summary: 'One of the oldest direct sales companies in the world. Sells cosmetics, skincare, fragrance, and fashion through independent representatives (Avon Reps). Acquired by Natura &Co in 2019.',
    monthly_cost_min: 0,
    monthly_cost_max: 30,
    comp_plan_type: 'Direct sales with leadership bonuses (multi-level)',
    overall_rating: 2.8,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 3.5,
    value_rating: 3.0,
    pros: [
      'Free to join as an Avon representative',
      '138+ year old brand with global recognition',
      'Catalog-based selling model is simple to understand',
      'Low startup costs compared to other direct sales'
    ],
    cons: [
      'Declining brand relevance in competitive beauty market',
      'Representatives must purchase products to sell (catalog model)',
      'Commission rates relatively low (20-50% depending on tier)',
      'Company has faced multiple legal/regulatory challenges globally',
      'Saturated market — most people already know someone who sells Avon'
    ],
    quick_facts: {
      'Founded': '1886',
      'Headquarters': 'London, UK',
      'Parent Company': 'Natura &Co (since 2019)',
      'Startup Cost': 'Free to join',
      'Business Model': 'Catalog direct sales',
      'Presence': '100+ countries'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'The original door-to-door beauty company',
    faq: [
      { question: 'Is selling Avon worth it in 2025?', answer: 'Avon has struggled with declining sales and relevance. While it is free to join, many representatives find it difficult to compete in a market saturated with Avon reps and lower-priced alternatives online.' },
      { question: 'How much do Avon reps make?', answer: 'Avon reps typically earn 20-50% commission on products they sell. Most earn part-time supplemental income rather than full-time wages, with earnings heavily dependent on personal sales volume.' },
      { question: 'Is Avon an MLM?', answer: 'Avon is primarily a direct sales company with some MLM-like elements (leadership bonuses for recruiting). It is generally considered less MLM-focused than companies like Amway or Herbalife.' }
    ]
  },
  {
    id: '105',
    slug: 'doterra',
    name: 'doTERRA',
    category: 'mlm',
    founded_year: 2008,
    hq_location: 'Pleasant Grove, Utah, USA',
    website: 'https://doterra.com',
    products_summary: 'Premium essential oils, oil blends, and wellness products sold through Wellness Advocates. One of the fastest-growing MLMs, known for high-quality sourcing (Certified Pure Tested Grade). Products are positioned as therapeutic-grade alternatives to conventional medicine.',
    monthly_cost_min: 35,
    monthly_cost_max: 150,
    comp_plan_type: 'Unilevel MLM with power of 3 bonus',
    overall_rating: 2.5,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 4.0,
    value_rating: 2.0,
    pros: [
      'Genuinely high quality essential oils with third-party testing',
      'Strong, passionate community of wellness advocates',
      'Wide product range beyond just oils (supplements, cleaning products)',
      'Company grew rapidly and has significant brand recognition'
    ],
    cons: [
      '91% of Wellness Advocates earn $0; monthly LRP purchase required',
      'Products are significantly overpriced vs comparable alternatives',
      'FTC warning letter received regarding income claims (2019)',
      'Managers-Executives (9%) avg up to $1,600/yr — vast majority earn nothing',
      'Pressure to maintain monthly Loyalty Rewards Program (LRP) orders (100 PV)',
      'Therapeutic claims for oils are not FDA-approved'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Pleasant Grove, Utah',
      'Business Model': 'Multi-level marketing',
      'Income Disclosure': '91% of Wellness Advocates earned $0. Managers-Executives (9%) avg up to $1,600/yr. Monthly 100 LRP required.',
      'Monthly Autoship': 'LRP minimum ~100 PV required',
      'FTC': 'Warning letter for income claims (2019)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Premium essential oils MLM with strong community',
    faq: [
      { question: 'Is doTERRA a pyramid scheme?', answer: 'doTERRA is a legitimate MLM company, not a pyramid scheme. However, its income disclosure shows most Wellness Advocates earn very little. The FTC sent a warning letter in 2019 regarding exaggerated income and health claims.' },
      { question: 'Are doTERRA oils worth the price?', answer: 'doTERRA oils are high quality and third-party tested. However, they are significantly more expensive than comparable alternatives. Independent testing has found similar quality oils available at much lower prices.' },
      { question: 'How much do doTERRA Wellness Advocates earn?', answer: 'According to doTERRA\'s income disclosure, the majority of Wellness Advocates earn less than $1,200 per year. Meaningful income typically requires building a large downline, which few achieve.' }
    ]
  },
  {
    id: '106',
    slug: 'young-living',
    name: 'Young Living Essential Oils',
    category: 'mlm',
    founded_year: 1993,
    hq_location: 'Lehi, Utah, USA',
    website: 'https://youngliving.com',
    products_summary: 'Essential oils and oil-infused products including supplements, cleaning products, and personal care items. Claims to own its own farms (Seed to Seal standard). One of the two dominant essential oil MLMs alongside doTERRA.',
    monthly_cost_min: 35,
    monthly_cost_max: 150,
    comp_plan_type: 'Unilevel MLM',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.5,
    value_rating: 2.0,
    pros: [
      'Pioneered the essential oil MLM industry',
      'Seed to Seal farming standard adds perceived authenticity',
      'Large product catalog beyond just oils',
      'Strong brand loyalty among existing customers'
    ],
    cons: [
      '~94% of distributors earn near $0; median income $4/yr for business builders',
      'FTC warning letter for COVID-19 treatment claims (2020)',
      'Products significantly overpriced vs retail alternatives',
      'Required Essential Rewards autoship (100 PV monthly) to qualify for commissions',
      'History of founder controversies (Gary Young)'
    ],
    quick_facts: {
      'Founded': '1993',
      'Headquarters': 'Lehi, Utah',
      'Business Model': 'Multi-level marketing',
      'Income Disclosure': '~94% of members who built a business earned median $4/yr. Monthly 100 PV autoship required to earn.',
      'FTC Action': 'Warning letter for COVID-19 claims (2020)',
      'Monthly Requirement': 'Essential Rewards ~100 PV minimum'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'The original essential oils MLM company',
    faq: [
      { question: 'Is Young Living legit?', answer: 'Young Living is a legitimate company that sells real products. However, the FTC issued a warning letter in 2020 for COVID-19 treatment claims. Income disclosures show most members earn very little.' },
      { question: 'Young Living vs doTERRA — which is better?', answer: 'Both are legitimate essential oil MLMs with similar business models. doTERRA has slightly more distributor growth in recent years. Both have income disclosures showing most participants earn minimal commissions.' },
      { question: 'How much does it cost to join Young Living?', answer: 'Starter kits range from $165-$260. To qualify for commissions, members typically need to maintain 100 PV (about $100-150) in monthly Essential Rewards purchases.' }
    ]
  },
  {
    id: '107',
    slug: 'arbonne-international',
    name: 'Arbonne International',
    category: 'mlm',
    founded_year: 1980,
    hq_location: 'Irvine, California, USA',
    website: 'https://arbonne.com',
    products_summary: 'Vegan, plant-based skincare, nutrition, and personal care products. Positioned as premium, clean-label wellness brand. Sold through Independent Consultants. Filed for bankruptcy in 2009, restructured and relaunched.',
    monthly_cost_min: 30,
    monthly_cost_max: 150,
    comp_plan_type: 'Multi-level (Merit Plan)',
    overall_rating: 2.2,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.0,
    community_rating: 3.5,
    value_rating: 2.0,
    pros: [
      'Vegan and cruelty-free positioning appeals to modern consumers',
      'Premium product quality with clean ingredient standards',
      'Strong community events and culture',
      'Increasing demand for clean beauty products'
    ],
    cons: [
      'Filed for bankruptcy in 2009 — restructured under new ownership',
      'Income disclosure shows ~68% of consultants earned $0',
      'Very expensive products compared to vegan alternatives',
      'Required to maintain preferred client orders to qualify for bonuses',
      'Pyramid-like structure where top earners dominate income'
    ],
    quick_facts: {
      'Founded': '1980',
      'Headquarters': 'Irvine, California',
      'Business Model': 'Multi-level marketing',
      'Products': 'Vegan/plant-based wellness',
      'History': 'Filed bankruptcy 2009, restructured',
      'Income': '~68% consultants earn $0 (IDS)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Vegan wellness MLM with premium positioning',
    faq: [
      { question: 'Did Arbonne go bankrupt?', answer: 'Yes — Arbonne filed for Chapter 11 bankruptcy in 2009 with $600M+ in debt. It was restructured and relaunched, and has operated successfully since, though the event raises questions about long-term stability.' },
      { question: 'Is Arbonne worth joining?', answer: 'Arbonne income disclosure shows approximately 68% of consultants earned $0 in commissions. Success is heavily concentrated among the top few percent who built large recruiting networks.' },
      { question: 'Are Arbonne products good quality?', answer: 'Arbonne products are genuinely vegan and cruelty-free with clean ingredient standards. However, they are very expensive compared to other vegan alternatives available in mainstream retail.' }
    ]
  },
  {
    id: '108',
    slug: 'monat-global',
    name: 'MONAT Global',
    category: 'mlm',
    founded_year: 2014,
    hq_location: 'Doral, Florida, USA',
    website: 'https://monatglobal.com',
    products_summary: 'Premium haircare, skincare, and wellness products sold through Market Partners. One of the fastest-growing MLMs of the 2010s, known for anti-aging hair products. Has faced significant controversy over product safety.',
    monthly_cost_min: 84,
    monthly_cost_max: 250,
    comp_plan_type: 'Unilevel MLM',
    overall_rating: 1.8,
    residual_rating: 1.5,
    simplicity_rating: 2.0,
    transparency_rating: 1.5,
    community_rating: 2.5,
    value_rating: 1.5,
    pros: [
      'High-growth company — rapid distributor expansion',
      'Products focus on trendy hair health/anti-aging space',
      'Strong social media presence and marketing materials'
    ],
    cons: [
      'Hundreds of lawsuits alleging products cause hair loss and scalp damage',
      'Class action lawsuit settled in 2021 for $17.4M',
      'FTC investigation into business practices',
      'Income disclosure shows majority earn under \$500/year',
      'Requires \$84/month VIP Membership to maintain status',
      'Very expensive products with high required autoship'
    ],
    quick_facts: {
      'Founded': '2014',
      'Headquarters': 'Doral, Florida',
      'Business Model': 'Multi-level marketing',
      'Legal': 'Class action settled for $17.4M (2021)',
      'Monthly Minimum': '~$84 VIP membership',
      'Controversy': 'Hair loss and scalp damage lawsuits'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Controversial haircare MLM with significant legal issues',
    faq: [
      { question: 'Does MONAT cause hair loss?', answer: 'Hundreds of lawsuits alleged MONAT products caused hair loss, scalp irritation, and damage. MONAT settled a class action lawsuit for $17.4M in 2021 without admitting wrongdoing. Product safety remains controversial.' },
      { question: 'Is MONAT a scam?', answer: 'MONAT is a legal company, not technically a scam. However, it faces significant legal issues over product safety, and income disclosure shows most Market Partners earn little to nothing.' },
      { question: 'How much do MONAT Market Partners make?', answer: 'MONAT income disclosure shows the majority of Market Partners earn under $500 per year. Top earners who build large recruiting networks can earn more, but this represents a very small percentage.' }
    ]
  },
  {
    id: '109',
    slug: 'isagenix',
    name: 'Isagenix',
    category: 'mlm',
    founded_year: 2002,
    hq_location: 'Gilbert, Arizona, USA',
    website: 'https://isagenix.com',
    products_summary: 'Nutritional cleansing and replenishing products including protein shakes, supplements, and weight management systems. Uses a system-based approach (30-day cleanse, etc.) to position products as complete wellness programs.',
    monthly_cost_min: 150,
    monthly_cost_max: 400,
    comp_plan_type: 'Binary MLM',
    overall_rating: 2.2,
    residual_rating: 2.0,
    simplicity_rating: 1.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 1.5,
    pros: [
      'System-based approach makes selling easier than individual products',
      'Some customers see genuine results from cleanse programs',
      'Strong culture and community events',
      'Long-established company with stable operations'
    ],
    cons: [
      'Very high monthly product requirements (\$150-400+)',
      'Binary compensation plan is complex and favors top recruiters',
      'Products very expensive compared to alternatives',
      'Income disclosure shows ~79% of associates earn under \$1,000/year',
      'Cleansing claims are not scientifically validated'
    ],
    quick_facts: {
      'Founded': '2002',
      'Headquarters': 'Gilbert, Arizona',
      'Business Model': 'Binary MLM',
      'Monthly Cost': '\$150-400+ autoship',
      'Income': '~79% earn under \$1,000/year',
      'Key Product': '30-day cleanse system'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Nutritional cleansing system sold through binary MLM',
    faq: [
      { question: 'Is Isagenix a pyramid scheme?', answer: 'Isagenix is a legal MLM company. Its income disclosure shows about 79% of associates earn under $1,000 per year. The binary compensation plan is complex and requires significant recruiting to earn meaningful income.' },
      { question: 'Does Isagenix really work?', answer: 'Some customers report positive results from Isagenix programs. However, nutritional scientists note the cleansing claims are not scientifically validated, and similar results could be achieved with less expensive dietary changes.' },
      { question: 'How much does Isagenix cost per month?', answer: 'Maintaining active status typically requires $150-400+ in monthly product purchases. This high ongoing cost makes it difficult for most associates to profit after expenses.' }
    ]
  },
  {
    id: '110',
    slug: 'rodan-fields',
    name: 'Rodan + Fields',
    category: 'mlm',
    founded_year: 2002,
    hq_location: 'San Francisco, California, USA',
    website: 'https://rodanandfields.com',
    products_summary: 'Premium skincare products created by Stanford-trained dermatologists Dr. Katie Rodan and Dr. Kathy Fields (creators of Proactiv). Sold through independent Consultants. Known for REDEFINE and UNBLEMISH skincare regimens.',
    monthly_cost_min: 80,
    monthly_cost_max: 250,
    comp_plan_type: 'Unilevel MLM',
    overall_rating: 2.4,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Created by credentialed dermatologists (Proactiv founders)',
      'Products have genuine clinical efficacy for some skin concerns',
      'Strong brand recognition among skincare enthusiasts',
      'Exited retail stores in 2016 to focus on direct sales'
    ],
    cons: [
      'Very expensive — regimens cost \$100-200+/month for customers',
      'Income disclosure shows majority of consultants earn under \$600/year',
      'High enrollment kit cost (\$295-695)',
      'Extremely saturated market — everyone knows a Rodan+Fields consultant',
      'Products available cheaper through third-party resellers'
    ],
    quick_facts: {
      'Founded': '2002',
      'Headquarters': 'San Francisco, California',
      'Business Model': 'Multi-level marketing',
      'Founders': 'Dr. Katie Rodan & Dr. Kathy Fields',
      'Enrollment Kit': '\$295-695',
      'Annual Revenue': '~\$1B+ at peak'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Dermatologist-created premium skincare MLM',
    faq: [
      { question: 'Are Rodan + Fields products worth it?', answer: 'Products are created by real dermatologists and have clinical support. However, they are significantly overpriced — similar active ingredients are available in drugstore and mid-range brands for much less.' },
      { question: 'Is Rodan + Fields a good business opportunity?', answer: 'Income disclosure shows the majority of Rodan + Fields Consultants earn under $600 per year. The market is heavily saturated with Consultants, making new customer acquisition very difficult.' },
      { question: 'How much does it cost to join Rodan + Fields?', answer: 'Enrollment kits range from $295-695. Monthly Preferred Customer subscriptions are required to maintain active status and qualify for commissions, typically $80-250/month.' }
    ]
  },
  {
    id: '111',
    slug: 'lularoe',
    name: 'LuLaRoe',
    category: 'mlm',
    founded_year: 2012,
    hq_location: 'Corona, California, USA',
    website: 'https://lularoe.com',
    products_summary: 'Colorful, limited-edition patterned clothing (leggings, tops, dresses) sold through Fashion Retailers via home parties and online boutiques. At its peak, LuLaRoe had hundreds of thousands of consultants. Has faced major legal and operational controversies.',
    monthly_cost_min: 100,
    monthly_cost_max: 500,
    comp_plan_type: 'Multi-level (retail + sponsor bonuses)',
    overall_rating: 1.5,
    residual_rating: 1.5,
    simplicity_rating: 2.0,
    transparency_rating: 1.0,
    community_rating: 2.0,
    value_rating: 1.0,
    pros: [
      'Unique limited-edition prints created scarcity and demand (at peak)',
      'Flexible model — online boutique or home parties'
    ],
    cons: [
      'Required to purchase \$499-5,000+ in inventory upfront',
      'Washington State AG lawsuit settled for \$4.75M (pyramid scheme allegations)',
      'Amazon Prime documentary "LuLaRich" exposed deceptive practices',
      'Thousands of consultants lost money on unsellable inventory',
      'Significant decline in company since 2017 peak',
      'Complex, changing compensation plan with buyback issues'
    ],
    quick_facts: {
      'Founded': '2012',
      'Headquarters': 'Corona, California',
      'Business Model': 'MLM — fashion/clothing',
      'Legal': 'WA AG settled for \$4.75M (2021)',
      'Startup Inventory': '\$499-5,000+ required',
      'Documentary': '"LuLaRich" (Amazon Prime, 2021)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Controversial fashion MLM with significant legal history',
    faq: [
      { question: 'What happened to LuLaRoe?', answer: 'LuLaRoe peaked around 2017 with 80,000+ consultants, then collapsed amid lawsuits, inventory quality issues, and a 2021 Amazon Prime documentary "LuLaRich" exposing deceptive practices. The company settled with Washington State AG for $4.75M over pyramid scheme allegations.' },
      { question: 'Did people lose money with LuLaRoe?', answer: 'Many LuLaRoe Fashion Retailers lost significant money — required to purchase $499-5,000+ in inventory upfront, many were left with unsellable stock when demand collapsed. Class action lawsuits alleged the company operated as a pyramid scheme.' },
      { question: 'Is LuLaRoe still in business?', answer: 'LuLaRoe is still operating as of 2025 but is a fraction of its peak size. The company has significantly downsized its consultant base and changed operations following legal settlements.' }
    ]
  },
  {
    id: '112',
    slug: 'plexus-worldwide',
    name: 'Plexus Worldwide',
    category: 'mlm',
    founded_year: 2008,
    hq_location: 'Scottsdale, Arizona, USA',
    website: 'https://plexusworldwide.com',
    products_summary: 'Health and wellness products focused on gut health, weight management, and energy. Most famous for Plexus Slim "Pink Drink" — a fiber and chromium supplement marketed for blood sugar support and weight loss.',
    monthly_cost_min: 35,
    monthly_cost_max: 150,
    comp_plan_type: 'Unilevel MLM',
    overall_rating: 2.0,
    residual_rating: 1.5,
    simplicity_rating: 2.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Simple product line centered on one hero product (Slim)',
      'Growing gut health category with genuine consumer interest',
      'Low startup cost compared to many MLMs'
    ],
    cons: [
      'FTC warning letters regarding health claims (unproven)',
      'Income disclosure shows ~73% of Ambassadors earned $0',
      'Products not FDA-evaluated for weight loss or blood sugar claims',
      'Required monthly autoship to qualify for commissions',
      'Significant competition from retail health products'
    ],
    quick_facts: {
      'Founded': '2008',
      'Headquarters': 'Scottsdale, Arizona',
      'Business Model': 'Multi-level marketing',
      'Hero Product': 'Plexus Slim (Pink Drink)',
      'Income': '~73% of Ambassadors earned $0',
      'FTC': 'Warning letters for health claims'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Gut health and weight management MLM (The Pink Drink)',
    faq: [
      { question: 'Does Plexus Slim actually work?', answer: 'Plexus Slim contains fiber and chromium, which have some scientific support for blood sugar support. However, the dramatic weight loss claims made by many Ambassadors are not supported by clinical evidence.' },
      { question: 'Is Plexus a scam?', answer: 'Plexus is a legal MLM company. However, income disclosure shows ~73% of Ambassadors earned $0, and the FTC has issued warning letters over exaggerated health claims.' },
      { question: 'How much does it cost to join Plexus?', answer: 'The starter pack costs approximately $34.95-99. To qualify for commissions, Ambassadors must maintain monthly autoship purchases, typically $35-150.' }
    ]
  },
  {
    id: '113',
    slug: 'forever-living-products',
    name: 'Forever Living Products',
    category: 'mlm',
    founded_year: 1978,
    hq_location: 'Scottsdale, Arizona, USA',
    website: 'https://foreverliving.com',
    products_summary: 'Aloe vera-based drinks, skincare, nutrition, and personal care products. One of the world\'s largest producers of aloe vera products. Sold through a network of Forever Business Owners (FBOs) globally.',
    monthly_cost_min: 100,
    monthly_cost_max: 250,
    comp_plan_type: 'Multi-level (unique case credit system)',
    overall_rating: 2.2,
    residual_rating: 2.0,
    simplicity_rating: 1.5,
    transparency_rating: 2.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Genuinely owns its own aloe vera farms (vertical integration)',
      'Long-established company with 45+ years in business',
      'Strong global presence in 160+ countries',
      'Aloe vera has genuine health benefits and consumer demand'
    ],
    cons: [
      'Very complex "case credit" compensation system confuses new recruits',
      'Required case credit volume can cost \$100-250+/month',
      'Income disclosure shows majority earn minimal income',
      'Products significantly overpriced vs retail aloe alternatives',
      'Heavy emphasis on recruiting to build significant income'
    ],
    quick_facts: {
      'Founded': '1978',
      'Headquarters': 'Scottsdale, Arizona',
      'Business Model': 'Multi-level marketing',
      'Specialty': 'Aloe vera products',
      'Presence': '160+ countries',
      'Monthly Requirement': '2 case credits (~\$100-250)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Global aloe vera MLM with 45+ years in business',
    faq: [
      { question: 'Is Forever Living a legitimate company?', answer: 'Forever Living is a legitimate, long-established MLM company that genuinely owns aloe vera farms. However, like most MLMs, income disclosure data shows most distributors earn little to nothing.' },
      { question: 'Is Forever Living profitable?', answer: 'Forever Living uses a complex case credit system. Most Forever Business Owners earn minimal income. Significant earnings require building a large international team.' },
      { question: 'What does Forever Living sell?', answer: 'Primarily aloe vera drinks, gels, skincare, and nutritional supplements. The aloe vera drinks are their flagship product and have genuine consumer demand in health-conscious markets.' }
    ]
  },
  {
    id: '114',
    slug: 'usana-health-sciences',
    name: 'USANA Health Sciences',
    category: 'mlm',
    founded_year: 1992,
    hq_location: 'Salt Lake City, Utah, USA',
    website: 'https://usana.com',
    products_summary: 'Premium nutritional supplements, weight management products, and personal care items. Publicly traded company (NYSE: USNA). Known for quality manufacturing standards and NSF certification. Popular with athletes and health-conscious consumers.',
    monthly_cost_min: 100,
    monthly_cost_max: 300,
    comp_plan_type: 'Binary MLM',
    overall_rating: 2.5,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 3.0,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Publicly traded (NYSE: USNA) with financial transparency',
      'NSF Certified for Sport — supplements tested for banned substances',
      'Manufacturing facility meets pharmaceutical-grade standards',
      'Positive reviews from athletes and health professionals'
    ],
    cons: [
      'Binary compensation plan requires building two equal "legs" — difficult',
      'Very high monthly autoship requirement (\$100-300+)',
      'Income disclosure shows majority of Associates earn under \$1,000/year',
      'Products extremely expensive vs comparable supplements',
      'Binary plan means unbalanced teams earn significantly less'
    ],
    quick_facts: {
      'Founded': '1992',
      'Headquarters': 'Salt Lake City, Utah',
      'Business Model': 'Binary MLM',
      'Stock': 'NYSE: USNA (publicly traded)',
      'Certification': 'NSF Certified for Sport',
      'Monthly Requirement': '~100+ PV (\$100-300)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Publicly traded nutrition MLM with pharmaceutical-grade standards',
    faq: [
      { question: 'Is USANA FDA approved?', answer: 'USANA manufactures supplements in an FDA-registered facility meeting pharmaceutical standards. The supplements themselves are not FDA-approved (dietary supplements generally are not), but USANA has NSF certification for many products.' },
      { question: 'Is USANA worth joining as a business?', answer: 'USANA income disclosure shows the majority of Associates earn minimal income. The binary compensation plan requires building two balanced teams simultaneously, which most find difficult.' },
      { question: 'Are USANA supplements good quality?', answer: 'USANA supplements are genuinely high quality — pharmaceutical-grade manufacturing, NSF Certified for Sport, and third-party tested. However, similar quality supplements are available for significantly less from other brands.' }
    ]
  },
  {
    id: '115',
    slug: 'scentsy',
    name: 'Scentsy',
    category: 'direct_sales',
    founded_year: 2004,
    hq_location: 'Meridian, Idaho, USA',
    website: 'https://scentsy.com',
    products_summary: 'Wickless candles, wax warmers, and home fragrance products sold through independent Consultants via home parties, online, and catalog sales. Privately owned company based in Idaho. One of the most successful direct sales companies in the fragrance category.',
    monthly_cost_min: 0,
    monthly_cost_max: 150,
    comp_plan_type: 'Direct sales with sponsor bonuses (multi-level)',
    overall_rating: 3.0,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.0,
    community_rating: 4.0,
    value_rating: 3.0,
    pros: [
      'Genuinely popular products with strong repeat customer demand',
      'Wickless candles fill a real safety niche (no open flame)',
      'Party-based model still works well for home fragrance',
      'Starter kit is reasonable (\$99)',
      'Strong culture and consultant community'
    ],
    cons: [
      'Saturated market — many consultants competing for same customers',
      'Income heavily dependent on personal retail sales, not just recruiting',
      'Seasonal product lines require constant inventory management',
      'Online competition from Amazon and retail stores growing',
      'Must maintain minimum sales to stay active'
    ],
    quick_facts: {
      'Founded': '2004',
      'Headquarters': 'Meridian, Idaho',
      'Business Model': 'Direct sales',
      'Starter Kit': '~\$99',
      'Products': 'Wickless candles, wax warmers, fragrance',
      'Ownership': 'Privately owned'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Popular home fragrance direct sales company from Idaho',
    faq: [
      { question: 'Is Scentsy worth joining as a consultant?', answer: 'Scentsy has genuinely popular products, which helps with retail sales. Unlike many MLMs, real product demand exists. However, the market is saturated and most consultants earn supplemental rather than full-time income.' },
      { question: 'How much does it cost to become a Scentsy consultant?', answer: 'The starter kit costs $99. There is no ongoing monthly fee, but consultants must sell $200 in products every rolling 3-month period to stay active.' },
      { question: 'Is Scentsy an MLM?', answer: 'Scentsy is primarily a direct sales company with some MLM-like elements (sponsor bonuses). It is generally considered more retail-focused than typical MLMs, with real product demand driving sales.' }
    ]
  },
  {
    id: '116',
    slug: 'pampered-chef',
    name: 'Pampered Chef',
    category: 'direct_sales',
    founded_year: 1980,
    hq_location: 'Addison, Illinois, USA',
    website: 'https://pamperedchef.com',
    products_summary: 'High-quality kitchen tools, cookware, and food products sold through cooking shows (home parties) and online. Founded by Doris Christopher in her basement. Acquired by Warren Buffett\'s Berkshire Hathaway in 2002.',
    monthly_cost_min: 0,
    monthly_cost_max: 109,
    comp_plan_type: 'Direct sales with team building bonuses',
    overall_rating: 3.2,
    residual_rating: 2.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 4.0,
    value_rating: 3.0,
    pros: [
      'Owned by Berkshire Hathaway — financially stable, reputable parent company',
      'Genuinely high-quality kitchen products with loyal customers',
      'Cooking show format creates fun, engaging sales experience',
      'Founded by Doris Christopher — classic American success story',
      'Reasonable starter kit cost (~\$99-109)'
    ],
    cons: [
      'Cooking show model requires scheduling and hosting logistics',
      'Online competition from Amazon, Williams Sonoma, etc.',
      'Saturated consultant market in many areas',
      'Income primarily from personal sales, recruiting bonuses modest',
      'Must maintain sales minimums to stay active'
    ],
    quick_facts: {
      'Founded': '1980',
      'Headquarters': 'Addison, Illinois',
      'Parent Company': 'Berkshire Hathaway (Warren Buffett)',
      'Business Model': 'Direct sales / cooking shows',
      'Starter Kit': '~\$99-109',
      'Acquired': '2002 by Berkshire Hathaway'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Berkshire Hathaway-owned kitchen tools direct sales company',
    faq: [
      { question: 'Is Pampered Chef a good company to work for?', answer: 'Pampered Chef has genuine products, a reputable parent company (Berkshire Hathaway), and a fun party-based sales model. It is considered one of the more legitimate direct sales opportunities.' },
      { question: 'How much do Pampered Chef consultants make?', answer: 'Consultants earn 20-27% commission on personal sales. Income is primarily tied to personal selling rather than recruitment, which means earnings depend heavily on your ability to host and sell at cooking shows.' },
      { question: 'Is Pampered Chef still relevant?', answer: 'Pampered Chef remains a solid direct sales company, though the cooking show model faces competition from online shopping. Products are genuinely quality kitchen tools that customers use and repurchase.' }
    ]
  },
  {
    id: '117',
    slug: 'tupperware',
    name: 'Tupperware Brands',
    category: 'direct_sales',
    founded_year: 1948,
    hq_location: 'Orlando, Florida, USA',
    website: 'defunct - brand sold after bankruptcy',
    products_summary: 'Iconic food storage containers and kitchen products. Filed Chapter 11 bankruptcy September 2023, brand sold in 2024. One of the most recognized brand names in the world that failed to adapt to modern retail.',
    monthly_cost_min: 0,
    monthly_cost_max: 109,
    comp_plan_type: 'Direct sales (Defunct)',
    overall_rating: 1.5,
    residual_rating: 1.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 2.5,
    value_rating: 2.0,
    pros: [
      'Iconic brand recognized worldwide',
      'Products had genuine utility and loyal customer base',
      '75+ year history and brand legacy'
    ],
    cons: [
      'Company no longer operating as direct sales - brand sold after bankruptcy',
      'Filed Chapter 11 bankruptcy September 2023',
      'Consultants lost their businesses when company restructured',
      'Direct sales model disrupted by Amazon and retail competition',
      'Declining sales for multiple consecutive years before bankruptcy'
    ],
    quick_facts: {
      'Status': 'DEFUNCT - Filed bankruptcy 2023, brand sold',
      'Founded': '1948',
      'Headquarters': 'Orlando, Florida',
      'Bankruptcy': 'Chapter 11 filed September 2023',
      'Brand Sold': '2024 - direct sales ended'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Iconic brand (Defunct - Filed Bankruptcy 2023, Brand Sold)',
    faq: [
      { question: 'Did Tupperware go bankrupt?', answer: 'Yes. Tupperware Brands filed for Chapter 11 bankruptcy protection in September 2023 after years of declining sales and debt problems. The company had warned of potential bankruptcy earlier in 2023.' },
      { question: 'Is Tupperware still in business?', answer: 'As of 2024, Tupperware is attempting to restructure and continue operations through bankruptcy proceedings. The company is seeking buyers or investors. Business operations continue but the future is uncertain.' },
      { question: 'Should I become a Tupperware consultant?', answer: 'Given Tupperware\'s bankruptcy filing and uncertain future, joining as a consultant carries significant risk. New consultants should research the company\'s current status before investing.' }
    ]
  },
  {
    id: '118',
    slug: 'melaleuca',
    name: 'Melaleuca: The Wellness Company',
    category: 'direct_sales',
    founded_year: 1985,
    hq_location: 'Idaho Falls, Idaho, USA',
    website: 'https://melaleuca.com',
    products_summary: 'Wellness products including cleaning supplies, supplements, and personal care items sold through a membership model. Members earn commissions by referring other customers (not classic recruiting). Melaleuca emphasizes it is NOT an MLM — customers buy for themselves.',
    monthly_cost_min: 55,
    monthly_cost_max: 75,
    comp_plan_type: 'Unilevel with Director ranks (Marketing Executive program)',
    overall_rating: 3.4,
    residual_rating: 3.0,
    simplicity_rating: 3.5,
    transparency_rating: 3.5,
    community_rating: 3.5,
    value_rating: 3.5,
    pros: [
      'Explicitly not an MLM — focuses on customer referrals, not recruitment chains',
      'Products replace everyday household items (practical repeat purchases)',
      'Products are concentrated and often cost-competitive when calculated per use',
      'Long-established and financially stable company',
      'Mission-based (wellness, eco-friendly positioning)'
    ],
    cons: [
      '82% of members earn $0; monthly product purchase required to qualify for commissions',
      'Must convert customers from existing brands they already use',
      'Monthly membership purchase requirement (35 product points ~$55-70/mo)',
      'Some people find the business model confusing',
      'Commissions from referrals can be modest',
      'Products not available in retail — only through members'
    ],
    quick_facts: {
      'Founded': '1985',
      'Headquarters': 'Idaho Falls, Idaho',
      'Business Model': 'Customer referral / direct sales (not MLM)',
      '2022 Income Disclosure': '82% of members earn $0 (customers only). Product Advocates avg $110-510/yr. Monthly 35 product points required to earn.',
      'Monthly Minimum': '35 product points (~$55-70/mo) to earn commissions',
      'Member Count': '2+ million customers'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Wellness membership company that insists it\'s not an MLM',
    faq: [
      { question: 'Is Melaleuca an MLM?', answer: 'Melaleuca strongly insists it is not an MLM. Unlike traditional MLMs, members earn commissions by referring customers who buy for personal use — there is no emphasis on building recruitment chains. It operates more like a membership club.' },
      { question: 'Is Melaleuca worth it as a member?', answer: 'Melaleuca products are genuinely quality household and wellness items. The membership requirement (\$35-75/month) can be worth it for members who actually use and like the products, especially the cleaning supplies and supplements.' },
      { question: 'Can you make money with Melaleuca?', answer: 'Melaleuca marketing executives earn commissions from customer referrals. While income potential is more modest than typical MLMs, the business model is more sustainable since it\'s based on actual product consumption rather than recruitment.' }
    ]
  },
  {
    id: '119',
    slug: 'four-life-research',
    name: '4Life Research',
    category: 'mlm',
    founded_year: 1998,
    hq_location: 'Sandy, Utah, USA',
    website: 'https://4life.com',
    products_summary: 'Nutritional supplements based on Transfer Factor technology — patented immune system support molecules derived from cow colostrum and egg yolks. 4Life holds patents on Transfer Factor extraction and claims unique immune health benefits.',
    monthly_cost_min: 100,
    monthly_cost_max: 300,
    comp_plan_type: 'Binary MLM',
    overall_rating: 2.3,
    residual_rating: 2.0,
    simplicity_rating: 2.0,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Unique patented Transfer Factor technology not widely replicated',
      'Some clinical research supporting immune modulation benefits',
      'Privately owned — less pressure for quarterly earnings',
      'Present in 70+ countries'
    ],
    cons: [
      'Very expensive products — Transfer Factor products cost significantly more than standard supplements',
      'Binary compensation plan difficult to balance',
      'Income disclosure shows majority earn minimal income',
      'Health claims for Transfer Factor not FDA-evaluated',
      'Monthly autoship required to qualify for commissions'
    ],
    quick_facts: {
      'Founded': '1998',
      'Headquarters': 'Sandy, Utah',
      'Business Model': 'Binary MLM',
      'Unique Technology': 'Patented Transfer Factor',
      'Presence': '70+ countries',
      'Monthly Requirement': '~100 LP (\$100-300)'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Transfer Factor immune health supplements sold via binary MLM',
    faq: [
      { question: 'What makes 4Life products unique?', answer: '4Life holds patents on Transfer Factor technology — molecules from cow colostrum and egg yolks that may support immune function. This is a genuinely unique product angle, though health claims are not FDA-evaluated.' },
      { question: 'Is 4Life a pyramid scheme?', answer: '4Life is a legal MLM company, not a pyramid scheme. Its binary compensation plan requires building two balanced teams, which most distributors find challenging. Income disclosure shows the majority earn minimal commissions.' },
      { question: 'How much does it cost to join 4Life?', answer: 'Enrollment kits range from $80-200+. To qualify for binary commissions, distributors must maintain monthly autoship orders, typically $100-300 per month depending on their qualification level.' }
    ]
  },
  {
    id: '120',
    slug: 'juice-plus',
    name: 'Juice Plus+',
    category: 'mlm',
    founded_year: 1970,
    hq_location: 'Memphis, Tennessee, USA',
    website: 'https://juiceplus.com',
    products_summary: 'Fruit and vegetable concentrate supplements (capsules and chewables), protein shakes, and whole food nutrition bars. Founded by Natural Alternatives International (NSA). Over 30 clinical studies cited for products. Sold through Virtual Franchise Partners.',
    monthly_cost_min: 44,
    monthly_cost_max: 120,
    comp_plan_type: 'Multi-level (Juice Plus NSA)',
    overall_rating: 2.4,
    residual_rating: 2.0,
    simplicity_rating: 2.5,
    transparency_rating: 2.5,
    community_rating: 3.0,
    value_rating: 2.0,
    pros: [
      'Claims 30+ published clinical studies on products',
      'Relatively affordable entry-level pricing (~\$44/mo)',
      'Long company history (since 1970)',
      'Genuine focus on whole food nutrition vs synthetic vitamins'
    ],
    cons: [
      'Clinical studies cited are industry-funded, limiting independence',
      'Products are expensive per nutrient vs eating actual fruits/vegetables',
      'Income disclosure shows majority of distributors earn under \$1,000/year',
      'Name confusingly similar to juice/beverage products',
      'Required to buy personally to qualify for commissions'
    ],
    quick_facts: {
      'Founded': '1970 (NSA)',
      'Headquarters': 'Memphis, Tennessee',
      'Business Model': 'Multi-level marketing',
      'Monthly Cost': '~\$44-120',
      'Products': 'Fruit/vegetable concentrate supplements',
      'Studies': '30+ cited clinical studies'
    },
    last_updated: new Date().toISOString(),
    is_featured: false,
    is_published: true,
    created_at: new Date().toISOString(),
    tagline: 'Fruit and vegetable supplement MLM with 30+ clinical studies cited',
    faq: [
      { question: 'Is Juice Plus+ evidence-based?', answer: 'Juice Plus+ cites 30+ clinical studies. However, independent nutritionists note that eating actual fruits and vegetables provides equivalent or better nutrition at lower cost. The studies are largely industry-funded.' },
      { question: 'Can you make money selling Juice Plus?', answer: 'Juice Plus income disclosure shows most Virtual Franchise Partners earn under $1,000 per year. Success requires either strong personal sales or building a large recruitment network.' },
      { question: 'Is Juice Plus+ worth the cost?', answer: 'At ~$44/month for capsules, Juice Plus is significantly more expensive per nutrient than eating whole foods. For those unable or unwilling to eat adequate fruits and vegetables, it may provide some benefit.' }
    ]
  },
];
