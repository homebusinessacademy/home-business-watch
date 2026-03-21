import { getCompPlanBySlug } from './compensation-plans';
import { getPitfallsBySlug } from './pitfalls';

export interface PyramidSchemeData {
  companySlug: string;
  companyName: string;
  isActualPyramidScheme: boolean; // false for all real-product MLMs, true for OneCoin etc
  directAnswer: string; // 2-3 sentence direct answer
  whyNotPyramidScheme: string; // specific to company
  mathSummary: string; // per-customer residual summary
  structuralNotes: string[]; // 2-3 bullet points
  verdict: string; // 2-3 sentence verdict
}

export const pyramidSchemeData: PyramidSchemeData[] = [
  {
    companySlug: 'amway',
    companyName: 'Amway',
    isActualPyramidScheme: false,
    directAnswer: 'No. Amway is not a pyramid scheme. They sell real consumer products (nutrition, beauty, home care), require real work to earn commissions, and have operated legally since 1959.',
    whyNotPyramidScheme: 'Amway famously won a landmark 1979 FTC case that established the legal distinction between pyramid schemes and legitimate MLMs. They sell real products to real customers, distributors earn commissions based on actual sales, and the company has operated in over 100 countries for 65+ years.',
    mathSummary: 'At entry level, you earn approximately $10 per $100 customer order (3% Performance Bonus + 7% Customer Sales Incentive in your first 3 years). After CSI expires, you drop to just $3 per $100 unless you advance in rank.',
    structuralNotes: [
      'The 7% Customer Sales Incentive phases out after your first 3 years',
      'Must maintain 100 PV monthly (~$300-400) or earn nothing',
      'Complex breakaway structure means losing volume when downline advances',
    ],
    verdict: 'Amway is not a pyramid scheme. It is a legitimate MLM with real products. However, the low per-customer residual ($3-10 per $100 order) and monthly purchase requirements mean most participants earn modest income. Evaluate the math, not the legality.',
  },
  {
    companySlug: 'herbalife',
    companyName: 'Herbalife',
    isActualPyramidScheme: false,
    directAnswer: 'No. Herbalife is not a pyramid scheme. They sell real nutrition products, distributors earn based on product sales, and the company operates legally worldwide. The FTC investigated them thoroughly and required restructuring, but did not label them a pyramid scheme.',
    whyNotPyramidScheme: 'Herbalife sells actual nutrition and weight management products. In 2016, they paid a $200M FTC settlement and restructured their practices, but the FTC explicitly did not call them a pyramid scheme. Commissions are tied to real product sales.',
    mathSummary: 'Commission varies dramatically by rank: 25% margin at entry level (~$12.50 per $50 order), up to 50% at Supervisor rank. Reaching Supervisor requires $4,000 in cumulative purchases.',
    structuralNotes: [
      'Paid $200M FTC settlement in 2016 for deceptive practices (not a pyramid scheme finding)',
      'Must reach Supervisor rank ($4,000 in purchases) for 50% margins',
      '$94.10/month autoship required to stay active',
    ],
    verdict: 'Herbalife is not a pyramid scheme. However, the $200M FTC settlement shows the business model had significant issues. The real question is whether the math works for you: low starting margins (25%) and high costs to reach meaningful commission levels.',
  },
  {
    companySlug: 'doterra',
    companyName: 'doTERRA',
    isActualPyramidScheme: false,
    directAnswer: 'No. doTERRA is not a pyramid scheme. They sell real essential oil products, require actual sales to earn commissions, and have operated legally since 2008.',
    whyNotPyramidScheme: 'doTERRA sells essential oils and wellness products to millions of customers. Wellness Advocates earn commissions on actual product sales. The products have real value and are consumed by non-distributors.',
    mathSummary: 'Entry-level earnings are approximately $6.25 per $25 customer order (25% retail margin). The June 2025 "Elevated" plan adds complexity with Team Growth Volume requirements for deeper commissions.',
    structuralNotes: [
      'June 2025 "Elevated" comp plan requires ongoing recruitment for deep commissions',
      'Must maintain 100 LRP monthly (~$100-150) to stay qualified',
      'FDA warning letters for unauthorized health claims by distributors',
    ],
    verdict: 'doTERRA is not a pyramid scheme. It sells real products people use. The concern is the math: $6.25 per customer means you need 480+ customers for $3,000/month. The 2025 comp plan changes increased recruitment requirements.',
  },
  {
    companySlug: 'young-living',
    companyName: 'Young Living',
    isActualPyramidScheme: false,
    directAnswer: 'No. Young Living is not a pyramid scheme. They sell real essential oil products, distributors earn based on actual sales, and the company has operated legally since 1993.',
    whyNotPyramidScheme: 'Young Living sells essential oils and wellness products. Commissions are earned on actual product sales through their unilevel compensation structure. The products are consumed by both distributors and retail customers.',
    mathSummary: 'You earn approximately $4 per direct customer on a $50 order (8% Level 1 commission). Fast Start bonuses (25%) apply only to new enrollees in their first 3 months.',
    structuralNotes: [
      'Income disclosure shows ~94% of business builders earn median of $4/year',
      'Must maintain 100 PV monthly to stay qualified',
      'Specific targeting of doTERRA in non-compete provisions',
    ],
    verdict: 'Young Living is not a pyramid scheme. It has real products people use daily. However, the income disclosure is stark: 94% of business builders earn essentially nothing. The $4 per customer residual explains why.',
  },
  {
    companySlug: 'mary-kay',
    companyName: 'Mary Kay',
    isActualPyramidScheme: false,
    directAnswer: 'No. Mary Kay is not a pyramid scheme. They sell real cosmetics products, consultants earn based on actual sales (buying wholesale at 50% off and selling at retail), and the company has operated legally since 1963.',
    whyNotPyramidScheme: 'Mary Kay sells cosmetics, skincare, and fragrances. The primary earning method is retail profit: consultants buy products at 50% off wholesale and sell at retail prices. Team commissions are secondary.',
    mathSummary: 'Strong per-customer earnings potential: 50% retail margin means $25 profit on a $50 retail sale. The challenge is maintaining enough sales volume and the upfront inventory investment.',
    structuralNotes: [
      'Pressure to purchase inventory upfront is common',
      'Pink Cadillac requires maintaining volume or you pay the lease difference',
      'Directors face chargebacks when recruits return products',
    ],
    verdict: 'Mary Kay is not a pyramid scheme. The 50% retail margin is actually strong compared to most MLMs. The risks are inventory pressure, car payment penalties, and chargeback exposure - not whether it is a scheme.',
  },
  {
    companySlug: 'monat-global',
    companyName: 'MONAT Global',
    isActualPyramidScheme: false,
    directAnswer: 'No. MONAT is not a pyramid scheme. They sell real hair care and skincare products, Market Partners earn commissions on product sales, and the company operates legally.',
    whyNotPyramidScheme: 'MONAT sells haircare, skincare, and wellness products. Commissions are earned on actual customer orders - 30% on retail customers, 15% on VIP customers. The products exist and are used by real consumers.',
    mathSummary: 'Retail customers generate $15 commission per $50 order (30%), while VIP customers generate $7.50 (15%). The company claims 41% of Market Partners earned $0 in 2024.',
    structuralNotes: [
      'Multiple class action lawsuits over product-related hair loss claims',
      '41% of Market Partners earned nothing in 2024',
      'Average Market Partner earns $758/year before expenses',
    ],
    verdict: 'MONAT is not a pyramid scheme. It sells real products. The concerns are different: product liability lawsuits and the income reality where 41% earn nothing. Focus on those issues, not pyramid scheme accusations.',
  },
  {
    companySlug: 'nu-skin-enterprises',
    companyName: 'Nu Skin Enterprises',
    isActualPyramidScheme: false,
    directAnswer: 'No. Nu Skin is not a pyramid scheme. They sell real skincare, nutrition, and technology products, commissions are based on actual sales, and the company has operated legally since 1984.',
    whyNotPyramidScheme: 'Nu Skin sells skincare devices, supplements, and personal care products. The company is publicly traded (NYSE: NUS) with regulatory oversight. Commissions come from actual product sales through their Sharing Bonus and Building Bonus structures.',
    mathSummary: 'Sharing Bonus pays 5-15% on customer orders (paid daily). Building Bonus ranges 5-40% based on completing 500-point team sales blocks. Complex block-based system makes earnings less predictable.',
    structuralNotes: [
      'Only 24.67% of Brand Affiliates were "Active" in 2024',
      'Net income dropped from $124.7M (2021) to $54.3M (2024)',
      'Complex block-based compensation is hard to calculate',
    ],
    verdict: 'Nu Skin is not a pyramid scheme. However, declining company profits and the fact that only 1 in 4 affiliates are "active" should raise questions. The compensation complexity makes it hard to predict actual earnings.',
  },
  {
    companySlug: 'avon-products',
    companyName: 'Avon Products',
    isActualPyramidScheme: false,
    directAnswer: 'No. Avon is not a pyramid scheme. They have sold real beauty and personal care products since 1886, representatives earn based on product sales, and the company pioneered door-to-door direct sales.',
    whyNotPyramidScheme: 'Avon sells cosmetics, skincare, jewelry, and home products. Representatives earn commission on actual customer orders. The company has operated for over 135 years with a clear retail focus.',
    mathSummary: 'January 2025 restructure changed to variable per-campaign commissions up to 50%. Base rate is 25% on beauty products, 20% on home/fashion. Commission starts at $40+ per campaign.',
    structuralNotes: [
      'Major compensation plan restructure in January 2025',
      'Commission now varies per 2-week campaign based on volume',
      'Star Promoter bonuses require team building',
    ],
    verdict: 'Avon is not a pyramid scheme. It is one of the oldest direct sales companies with real products. The 2025 restructuring changes how commissions work, so understand the new variable system before joining.',
  },
  {
    companySlug: 'primerica',
    companyName: 'Primerica',
    isActualPyramidScheme: false,
    directAnswer: 'No. Primerica is not a pyramid scheme. They sell real life insurance and financial products, representatives must be licensed by state regulators, and the company is publicly traded (NYSE: PRI).',
    whyNotPyramidScheme: 'Primerica sells term life insurance and investment products - all regulated by state insurance departments and the SEC. Representatives must pass licensing exams. Commissions are earned on actual insurance policy sales.',
    mathSummary: 'New reps earn 25% commission on life insurance sales, scaling to 60% at Division Leader level. Average rep earned $8,199 in 2025. No fixed per-customer residual - insurance is commission-based.',
    structuralNotes: [
      'Requires state insurance license ($200-500+ to obtain)',
      'Captive agent - can only sell Primerica products',
      'Clients belong to Primerica, not you, if you leave',
    ],
    verdict: 'Primerica is not a pyramid scheme. It is a licensed insurance business with regulatory oversight. The real concerns are captive agent restrictions, low starting commissions (25%), and licensing costs.',
  },
  {
    companySlug: 'melaleuca',
    companyName: 'Melaleuca',
    isActualPyramidScheme: false,
    directAnswer: 'No. Melaleuca is not a pyramid scheme. They sell real wellness, cleaning, and personal care products, earnings are based on customer purchases, and the company positions itself as a "consumer direct" company rather than an MLM.',
    whyNotPyramidScheme: 'Melaleuca sells over 400 wellness and household products. They distinguish themselves by focusing on customer retention rather than recruiting. Commissions are earned on actual customer orders.',
    mathSummary: 'First-month orders earn 50% Product Introduction Commission, then ongoing 7-20% depending on your customer count. At 20+ customers (20/20 Bonus), you earn 20% ongoing.',
    structuralNotes: [
      '82% of members earned $0 in commissions (per income disclosure)',
      'Monthly 35 Product Points (~$55-70) required to stay qualified',
      'Ongoing commission drops to 7% after first-month bonus',
    ],
    verdict: 'Melaleuca is not a pyramid scheme. They focus more on customer retention than typical MLMs. The challenge is the dramatic drop from 50% first-month to 7% ongoing - you need many active customers to earn meaningfully.',
  },
  {
    companySlug: 'usana-health-sciences',
    companyName: 'USANA Health Sciences',
    isActualPyramidScheme: false,
    directAnswer: 'No. USANA is not a pyramid scheme. They sell real nutritional supplements and skincare products, the company is publicly traded (NYSE: USNA), and commissions are based on product sales through their binary compensation structure.',
    whyNotPyramidScheme: 'USANA sells nutritional supplements, skincare products, and weight management products. As a public company, they have SEC oversight. Commissions come from actual product volume in their binary compensation plan.',
    mathSummary: 'Binary plan pays 20% of the lesser leg Sales Volume Points weekly. Complex structure makes per-customer residual impossible to calculate - it depends on leg balancing.',
    structuralNotes: [
      'Binary model requires balancing two legs to maximize earnings',
      'Net income fell from $124.7M (2021) to $54.3M (2024)',
      'October 2025 plan adds new Fast Start bonuses and requirements',
    ],
    verdict: 'USANA is not a pyramid scheme. It is a publicly traded company with real products. The challenge is the binary compensation complexity and the company\'s declining profitability in recent years.',
  },
  {
    companySlug: 'isagenix',
    companyName: 'Isagenix',
    isActualPyramidScheme: false,
    directAnswer: 'No. Isagenix is not a pyramid scheme. They sell real weight loss and nutrition products, commissions are based on actual product sales, and the company has operated legally since 2002.',
    whyNotPyramidScheme: 'Isagenix sells cleanse systems, protein shakes, and nutritional supplements. Commissions come from Product Introduction Bonuses and cycle bonuses based on actual customer orders.',
    mathSummary: 'Product Introduction Bonus pays 20% on new customer first orders (~$10 per $50 order). Cycle bonuses pay $54 weekly when you accumulate 600 BV on one leg and 300 BV on the other.',
    structuralNotes: [
      'Binary structure requires building two balanced legs',
      '100 BV monthly (~$100-150) required to stay qualified',
      'Rank advancement bonuses encourage rapid growth pressure',
    ],
    verdict: 'Isagenix is not a pyramid scheme. It has real products in the wellness space. The binary structure is challenging to build, and premium pricing may limit customer acquisition.',
  },
  {
    companySlug: 'rodan-fields',
    companyName: 'Rodan + Fields',
    isActualPyramidScheme: false,
    directAnswer: 'No. Rodan + Fields is not a pyramid scheme. They sell real dermatologist-developed skincare products. However, they ended their MLM model in September 2024 and now operate as a single-level affiliate program.',
    whyNotPyramidScheme: 'Rodan + Fields sold real skincare products through their MLM model from 2008-2024. In September 2024, they transitioned to a single-level affiliate model, eliminating multi-level income entirely.',
    mathSummary: 'Now a simple 30% affiliate commission on all sales with no cap. Multi-level downline income was eliminated overnight in 2024.',
    structuralNotes: [
      'MLM model completely ended September 1, 2024',
      'Consultants who built downline teams lost that income overnight',
      'Now $9.99/year affiliate fee with 30% commission on personal sales only',
    ],
    verdict: 'Rodan + Fields was not a pyramid scheme when it was an MLM, and it certainly is not now as a simple affiliate program. The important lesson: this company proves that MLM "residual income" can disappear with a corporate decision.',
  },
  {
    companySlug: 'lularoe',
    companyName: 'LuLaRoe',
    isActualPyramidScheme: false,
    directAnswer: 'No. LuLaRoe is not a pyramid scheme. They sell real clothing products, retailers earn by buying wholesale and selling at retail markup, and the company operates legally (though controversially).',
    whyNotPyramidScheme: 'LuLaRoe sells clothing - leggings, dresses, and other apparel. Retailers buy inventory at wholesale prices and sell at markup. The product exists and has value to consumers.',
    mathSummary: 'Inventory-based retail model with variable profit margins depending on markup achieved. 2024 average gross profit was $10,897 (median only $1,046 - heavily skewed by top sellers).',
    structuralNotes: [
      'History of not honoring buyback policies led to lawsuits',
      '$499 minimum inventory purchase to start',
      'Only 9.63% participated in Leadership Compensation Plan in 2024',
    ],
    verdict: 'LuLaRoe is not a pyramid scheme in the legal sense - they sell real products. However, the troubled history of lawsuits, buyback failures, and median earnings of just $1,046/year tell a cautionary tale.',
  },
  {
    companySlug: 'plexus-worldwide',
    companyName: 'Plexus Worldwide',
    isActualPyramidScheme: false,
    directAnswer: 'No. Plexus is not a pyramid scheme. They sell real weight loss and gut health products, commissions are based on actual product sales, and the company operates legally.',
    whyNotPyramidScheme: 'Plexus sells health and wellness products including their popular "Pink Drink" and gut health supplements. Ambassadors earn commissions on customer orders.',
    mathSummary: 'Tiered commission: 0% if under 100 PV monthly, 15% at 100-499 PV, 25% at 500+ PV. You must hit 100 PV to earn anything, then earn on volume above that threshold.',
    structuralNotes: [
      'Earn 0% commission if under 100 PV monthly - harsh threshold',
      'Must scale to 500+ PV for 25% commission rate',
      '2024 average Active Ambassador earnings: $2,952/year',
    ],
    verdict: 'Plexus is not a pyramid scheme. It has real products. The unique concern is the tiered commission structure where you literally earn nothing below 100 PV - harsher than most MLMs.',
  },
  {
    companySlug: 'forever-living-products',
    companyName: 'Forever Living Products',
    isActualPyramidScheme: false,
    directAnswer: 'No. Forever Living Products is not a pyramid scheme. They sell real aloe vera-based health and beauty products, distributors earn based on product sales, and the company has operated legally since 1978.',
    whyNotPyramidScheme: 'Forever Living sells aloe vera drinks, skincare, and nutritional products. The company is one of the largest aloe vera product manufacturers globally. Commissions are earned on actual sales.',
    mathSummary: 'Tiered discount structure: 5% at entry (Preferred Customer), 30% at Wholesale Qualified (requires 2 Case Credits in 2 months). Manager rank unlocks team overrides.',
    structuralNotes: [
      'Only 5% discount at entry level - must invest to reach 30%',
      'Must purchase 2 Case Credits in 2 months for wholesale pricing',
      'Aloe vera products have niche market appeal',
    ],
    verdict: 'Forever Living is not a pyramid scheme. They have been selling real aloe products for 45+ years. The challenge is the tiered discount structure where new distributors earn very little until they invest in inventory.',
  },
  {
    companySlug: 'scentsy',
    companyName: 'Scentsy',
    isActualPyramidScheme: false,
    directAnswer: 'No. Scentsy is not a pyramid scheme. They sell real wax warmers and home fragrance products, consultants earn based on product sales, and the company has operated legally since 2004.',
    whyNotPyramidScheme: 'Scentsy sells wax warmers, wax bars, and home fragrance products. Consultants earn 20-36% commission on actual customer orders. The products have real value to consumers.',
    mathSummary: 'Base commission is 20-25% depending on monthly PRV. Certified Consultants (250+ PRV) earn 25% (~$12.50 per $50 order). Total commission can reach 36% with volume bonuses.',
    structuralNotes: [
      'April 2025: Active status now requires 250 PRV (up from 200)',
      'Below 250 PRV monthly = only 20% commission, no bonuses',
      'Wax warmers are durable goods - limited repeat purchases',
    ],
    verdict: 'Scentsy is not a pyramid scheme. Real products, real customers. The challenges are the April 2025 requirement increases and the durable nature of warmers limiting repeat sales.',
  },
  {
    companySlug: 'pampered-chef',
    companyName: 'Pampered Chef',
    isActualPyramidScheme: false,
    directAnswer: 'No. Pampered Chef is not a pyramid scheme. They sell real kitchen tools and cookware, consultants earn based on product sales, and the company has operated legally since 1980. Owned by Berkshire Hathaway since 2002.',
    whyNotPyramidScheme: 'Pampered Chef sells kitchen tools, cookware, and food products. Consultants earn commission on actual customer orders - all income is tied to product sales. Warren Buffett\'s Berkshire Hathaway owns the company.',
    mathSummary: 'Base commission is 20% (~$10 per $50 sale). After $15,000 career sales, you earn an additional 2% monthly bonus. Directors can earn up to 27% personal, 33% with team.',
    structuralNotes: [
      'Low activity minimum: just $30 in sales every 6 months',
      'Kitchen tools are durable - limited repeat purchases',
      'Typical Active Consultant earned $0-262 annually (Canada 2024)',
    ],
    verdict: 'Pampered Chef is not a pyramid scheme. Low barriers to entry and Berkshire Hathaway ownership add legitimacy. The limitation is durable products - customers don\'t need new cookware frequently.',
  },
  {
    companySlug: 'arbonne-international',
    companyName: 'Arbonne International',
    isActualPyramidScheme: false,
    directAnswer: 'No. Arbonne is not a pyramid scheme. They sell real vegan skincare, nutrition, and wellness products, Independent Consultants earn based on product sales, and the company has operated legally since 1980.',
    whyNotPyramidScheme: 'Arbonne sells vegan, cruelty-free skincare, cosmetics, and nutrition products. Commissions are earned on actual client orders - 35% on regular clients, 15% on Preferred Clients.',
    mathSummary: 'Strong per-customer potential: 35% on Client orders (~$17.50 per $50 sale). However, 500 PQV monthly required for paid-as overrides on team sales.',
    structuralNotes: [
      '150 PQV monthly required for most rank qualifications',
      '500 PQV required to actually receive team override commissions',
      'Preferred Client program (15%) cannibalizes higher-margin Client sales (35%)',
    ],
    verdict: 'Arbonne is not a pyramid scheme. The 35% client commission is strong by MLM standards. The challenge is the dual PQV requirements (150 basic, 500 for overrides) create significant personal purchase pressure.',
  },
  {
    companySlug: 'four-life-research',
    companyName: '4Life Research',
    isActualPyramidScheme: false,
    directAnswer: 'No. 4Life Research is not a pyramid scheme. They sell real immune support supplements (Transfer Factor products), affiliates earn based on product sales, and the company has operated legally since 1998.',
    whyNotPyramidScheme: '4Life sells Transfer Factor immune support products and other nutritional supplements. Commissions come from Rapid Rewards (25% on first orders) and ongoing residuals on customer purchases.',
    mathSummary: 'Rapid Rewards pays 25% on new customer first orders (~$12.50 per $50 order, paid daily). However, ongoing Level 1 commissions drop to just 2% - a dramatic decrease.',
    structuralNotes: [
      'Ongoing Level 1 commissions drop from 25% first-order to just 2%',
      'Power Pool access requires recruiting 3 new distributors with specific volume',
      'Niche Transfer Factor products may limit market appeal',
    ],
    verdict: '4Life is not a pyramid scheme. It sells real products. The structural concern is the dramatic drop from 25% first-order bonus to 2% ongoing - you constantly need new customers to maintain income.',
  },
  {
    companySlug: 'livegood',
    companyName: 'LiveGood',
    isActualPyramidScheme: false,
    directAnswer: 'No. LiveGood is not a pyramid scheme. They sell real nutritional supplements and health products, members earn based on membership fees and product sales, and the company operates legally.',
    whyNotPyramidScheme: 'LiveGood sells vitamins, supplements, and wellness products. Their model includes membership access to wholesale pricing. Commissions come from actual membership subscriptions in a matrix structure.',
    mathSummary: 'Forced 2x15 matrix pays approximately $0.25 per member per month (2.5% of $9.95 membership). Reaching $1,000/month requires roughly 4,000 active paying members in your matrix.',
    structuralNotes: [
      'Forced matrix heavily favors early joiners - position is everything',
      'No published income disclosure statement as of 2026',
      'Tiny per-member earnings ($0.25-0.50/month) require massive team',
    ],
    verdict: 'LiveGood is not a pyramid scheme - they sell real products. The concerns are the matrix structure favoring early adopters, no income disclosure transparency, and the massive team size needed for meaningful income.',
  },
  {
    companySlug: 'beachbody',
    companyName: 'Beachbody',
    isActualPyramidScheme: false,
    directAnswer: 'No. Beachbody is not a pyramid scheme. They sell real fitness programs, nutrition products, and streaming workout content. Coaches earn based on product sales and subscription signups, and the company is publicly traded.',
    whyNotPyramidScheme: 'Beachbody (now BODi) sells fitness programs like P90X, Insanity, and their streaming workout platform. Coaches earn commissions on actual product and subscription sales. The company merged with MYX Fitness and trades publicly.',
    mathSummary: 'Coaches earn 25% commission on product sales and customer subscriptions. Challenge pack commissions and team volume bonuses add to earnings potential.',
    structuralNotes: [
      'Company struggled financially post-pandemic with declining revenue',
      'Shifted focus from physical DVDs to streaming subscriptions',
      'Coach requirements include monthly subscription to remain active',
    ],
    verdict: 'Beachbody is not a pyramid scheme. They have real fitness products millions have used. The concern is the company\'s financial struggles in recent years as the fitness market evolved.',
  },
  {
    companySlug: 'network-marketing-general',
    companyName: 'Network Marketing (General)',
    isActualPyramidScheme: false,
    directAnswer: 'No. Network marketing (MLM) is not inherently a pyramid scheme. The distinction comes from the 1979 FTC vs Amway ruling: legitimate MLMs sell real products to real customers and compensate based on actual sales, not just recruitment.',
    whyNotPyramidScheme: 'The FTC\'s 1979 Amway decision established that multi-level marketing is legal when: (1) real products are sold to real end consumers, (2) compensation is based on actual sales rather than recruitment alone, (3) there are no large required inventory purchases, and (4) buyback policies exist for unsold inventory.',
    mathSummary: 'The math varies dramatically by company. Per-customer residual ranges from $0.25/month (LiveGood) to $25/sale (Mary Kay). Understanding YOUR company\'s specific per-customer earnings is essential.',
    structuralNotes: [
      'Legal MLM requires real products, real customers, and sales-based compensation',
      'The FTC examines whether recruitment payments dominate over retail sales',
      'Most participants in legal MLMs still earn little due to low per-customer residuals',
    ],
    verdict: 'Network marketing is not a pyramid scheme when it follows the FTC\'s Amway ruling guidelines. However, being legal does not mean it is profitable. Most participants earn modest income because per-customer residuals are low and maintaining volume is hard.',
  },
  {
    companySlug: 'crypto-mlm-schemes',
    companyName: 'Crypto MLM Schemes',
    isActualPyramidScheme: true,
    directAnswer: 'Yes. Many crypto MLMs ARE effectively pyramid schemes. OneCoin defrauded investors of $4-25 billion with no real blockchain. BitConnect was shut down by the SEC as a Ponzi scheme. These differ fundamentally from product-based MLMs.',
    whyNotPyramidScheme: 'THESE ARE PYRAMID SCHEMES. Unlike legitimate MLMs that sell real products, crypto pyramid schemes typically: (1) promise guaranteed returns for no work, (2) have no real underlying product or technology, (3) pay old investors with new investor money, and (4) collapse when recruitment slows.',
    mathSummary: 'The "math" in pyramid schemes is simple: early investors get paid with later investors\' money until the scheme collapses. OneCoin promised 100%+ returns. BitConnect promised 1% daily returns from "trading bots" that did not exist.',
    structuralNotes: [
      'OneCoin: $4-25 billion fraud, founder Ruja Ignatova still fugitive (FBI $5M reward)',
      'BitConnect: SEC/CFTC shutdown, leaders charged with fraud',
      'Red flags: guaranteed returns, no real product, promised passive income',
    ],
    verdict: 'Crypto MLMs promising guaranteed returns are pyramid/Ponzi schemes. OneCoin and BitConnect are proven frauds. If someone promises daily returns from "trading bots" or "crypto mining" requiring you to recruit others, run.',
  },
];

// Helper to get pyramid scheme data by slug
export function getPyramidSchemeBySlug(slug: string): PyramidSchemeData | undefined {
  return pyramidSchemeData.find(p => p.companySlug === slug);
}

// Helper to check if a company has pyramid scheme page
export function hasPyramidSchemePage(slug: string): boolean {
  return pyramidSchemeData.some(p => p.companySlug === slug);
}

// Get all pyramid scheme slugs for static generation
export function getAllPyramidSchemeSlugs(): string[] {
  return pyramidSchemeData.map(p => p.companySlug);
}

// Get pyramid scheme data sorted (actual schemes first, then alphabetically)
export function getPyramidSchemeDataSorted(): PyramidSchemeData[] {
  return [...pyramidSchemeData].sort((a, b) => {
    // Put actual pyramid schemes (crypto-mlm-schemes) last
    if (a.isActualPyramidScheme && !b.isActualPyramidScheme) return 1;
    if (!a.isActualPyramidScheme && b.isActualPyramidScheme) return -1;
    // Sort general last but before crypto schemes
    if (a.companySlug === 'network-marketing-general') return 1;
    if (b.companySlug === 'network-marketing-general') return -1;
    // Alphabetically
    return a.companyName.localeCompare(b.companyName);
  });
}

// Get comp plan data for a pyramid scheme entry (if available)
export function getPyramidSchemeCompPlanData(slug: string) {
  return getCompPlanBySlug(slug);
}

// Get pitfalls data for a pyramid scheme entry (if available)
export function getPyramidSchemePitfallsData(slug: string) {
  return getPitfallsBySlug(slug);
}
