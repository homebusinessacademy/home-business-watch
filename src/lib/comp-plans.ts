export interface CompPlanData {
  companySlug: string;
  companyName: string;
  lastUpdated: string;
  directCustomerResidual: number | null; // $ per month per direct customer
  levels: Array<{
    level: number;
    label: string;
    residualPerCustomer: number | null;
    notes: string;
  }>;
  monthlyRequirement: string;
  qualificationNote: string;
  simpleSummary: string;
  teamSizeNeeded: {
    goal1000: number | null;
    goal3000: number | null;
    goal10000: number | null;
    assumptions: string;
  };
  sourceUrl: string;
  keyGotchas: string[];
}

export const compPlans: CompPlanData[] = [
  {
    companySlug: 'amway',
    companyName: 'Amway',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 3,
    levels: [
      { level: 1, label: 'Direct customer', residualPerCustomer: 3, notes: '3% of $100 order = $3' },
      { level: 2, label: 'Customer Sales Incentive', residualPerCustomer: 7, notes: '7% CSI (first 3 years only)' },
      { level: 3, label: 'Downline commissions', residualPerCustomer: null, notes: 'Requires Group PV; varies by rank' },
    ],
    monthlyRequirement: '100 PV (~$300-400 in product)',
    qualificationNote: 'You must hit 100 Point Value monthly through personal purchases or sales to earn any commissions. PV requirements reset each month.',
    simpleSummary: 'Amway pays 3% on direct customer orders plus up to 7% Customer Sales Incentive in your first 3 years. After that, meaningful income requires building a team. The complex PV/BV system means most IBOs earn far less than expected.',
    teamSizeNeeded: {
      goal1000: 333,
      goal3000: 1000,
      goal10000: null,
      assumptions: 'Based on $3/customer at 3% commission. Higher earnings require team building or reaching higher ranks.',
    },
    sourceUrl: 'https://www.amway.com/business-documents',
    keyGotchas: [
      'Customer Sales Incentive (7%) phases out after your first 3 years',
      'Must maintain 100 PV monthly or you earn $0 that month',
      'When downline members "break away" to higher ranks, you lose volume',
      'Average IBO at Founders Platinum and below earns $723/year before expenses',
      'Complex PV/BV system makes true earnings difficult to calculate',
    ],
  },
  {
    companySlug: 'herbalife',
    companyName: 'Herbalife',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 5,
    levels: [
      { level: 1, label: 'Direct retail profit', residualPerCustomer: 12.50, notes: '25% retail margin on $50 order' },
      { level: 2, label: 'Wholesale commission', residualPerCustomer: 5, notes: '~10% on downline purchases' },
      { level: 3, label: 'Royalty override (Supervisor+)', residualPerCustomer: 2.50, notes: '5% per level, up to 3 levels deep' },
    ],
    monthlyRequirement: '$94.10/month autoship minimum',
    qualificationNote: 'To remain active and earn commissions, you must maintain $94.10+ monthly in personal volume. Most distributors spend $200-400/month to maintain higher discount levels.',
    simpleSummary: 'Herbalife offers 25-50% retail margins depending on your rank. Residual income comes from royalty overrides (5% per level, 3 levels deep) once you reach Supervisor. Most earnings come from retail profit, not residual commissions.',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 800,
      assumptions: 'Based on ~$12.50 retail profit per $50 customer order. Actual results depend on customer reorder rates.',
    },
    sourceUrl: 'https://www.herbalife.com/content/dam/global-reusable-assets/documents/pd-statement-typical-distributor-earnings-en-us.pdf',
    keyGotchas: [
      'Paid $200M FTC settlement in 2016 for deceptive practices',
      'Approximately 50% of distributors earn $0 in a typical month',
      'Must reach Supervisor rank ($4,000 in purchases) for royalty overrides',
      'Products are 2-3x retail pricing compared to grocery alternatives',
      'Median established distributor earns $3,216/year before expenses',
    ],
  },
  {
    companySlug: 'doterra',
    companyName: 'doTERRA',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 6.25,
    levels: [
      { level: 1, label: 'Retail profit', residualPerCustomer: 6.25, notes: '25% of $25 avg monthly order' },
      { level: 2, label: 'Fast Start (60 days)', residualPerCustomer: 5, notes: '20% on new enrollee orders' },
      { level: 3, label: 'Unilevel Level 1', residualPerCustomer: 0.50, notes: '2% of $25 order' },
      { level: 4, label: 'Unilevel Level 7', residualPerCustomer: 1.75, notes: '7% at deepest level' },
    ],
    monthlyRequirement: '100 PV (~$100-150/month LRP)',
    qualificationNote: 'Must maintain 100 Loyalty Rewards Points monthly through autoship or sales to earn commissions. New 2025 "Elevated" plan requires Team Growth Volume from recent enrollments to unlock deeper commission levels.',
    simpleSummary: 'doTERRA pays 25% retail profit on direct customers plus unilevel commissions (2-7%) across 7 levels. The 2025 "Elevated" comp plan now requires ongoing recruitment activity to access your deepest commission levels.',
    teamSizeNeeded: {
      goal1000: 160,
      goal3000: 480,
      goal10000: 1600,
      assumptions: 'Based on $6.25 retail profit per customer. Team volume adds 2-7% per level but requires rank advancement.',
    },
    sourceUrl: 'https://media.doterra.com/us/en/flyers/compensation-plan.pdf',
    keyGotchas: [
      '2025 plan requires "Team Growth Volume" from recent enrollees to unlock deep commissions',
      '91% of Wellness Advocates earned $0 in commissions (per 2023 IDS)',
      'Fast Start bonuses only last 60 days per customer',
      'Must maintain LRP autoship every month to stay qualified',
      'Essential oils are consumable but reorder rates vary significantly',
    ],
  },
  {
    companySlug: 'young-living',
    companyName: 'Young Living',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 4,
    levels: [
      { level: 1, label: 'Direct referral', residualPerCustomer: 4, notes: '8% of $50 avg order' },
      { level: 2, label: 'Level 2', residualPerCustomer: 2.50, notes: '5% of $50 order' },
      { level: 3, label: 'Levels 3-5', residualPerCustomer: 2, notes: '4% of $50 order each' },
    ],
    monthlyRequirement: '100 PV (~$100/month)',
    qualificationNote: 'Must have 100 PV monthly from personal purchases or customer orders. Essential Rewards autoship program is heavily encouraged.',
    simpleSummary: 'Young Living pays 8% on Level 1, 5% on Level 2, and 4% on Levels 3-5 through their unilevel structure. Fast Start bonuses (up to 25%) apply to new enrollee orders in their first 3 months only.',
    teamSizeNeeded: {
      goal1000: 250,
      goal3000: 750,
      goal10000: 2500,
      assumptions: 'Based on $4 per direct customer ($50 order at 8%). Deep levels require significant team building.',
    },
    sourceUrl: 'https://static.youngliving.com/en-US/PDFS/April1_2025_YL_CompensationPlan_US_EN.pdf',
    keyGotchas: [
      'Income disclosure shows ~94% of business builders earn median of $4/year',
      'Fast Start bonus (25%) only applies to first 3 months of new enrollees',
      'Premium Starter Kit costs $165+ to join',
      'Must maintain monthly 100 PV to remain qualified',
      'Generation commissions require Silver rank or higher',
    ],
  },
  {
    companySlug: 'mary-kay',
    companyName: 'Mary Kay',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 25,
    levels: [
      { level: 1, label: 'Retail profit', residualPerCustomer: 25, notes: '50% margin on $50 retail sale' },
      { level: 2, label: 'Team commissions', residualPerCustomer: null, notes: 'Varies by Director rank' },
    ],
    monthlyRequirement: '$225 wholesale in Section 1 products',
    qualificationNote: 'Must maintain $225 in wholesale Section 1 product purchases to stay active. Inventory purchases count toward this requirement.',
    simpleSummary: 'Mary Kay offers up to 50% retail profit on personal sales. However, this requires selling at full retail price and managing inventory. Team commissions kick in at Director level but most consultants earn from retail sales only.',
    teamSizeNeeded: {
      goal1000: 40,
      goal3000: 120,
      goal10000: 400,
      assumptions: 'Based on $25 profit per $50 sale. Assumes selling at full retail price without discounts.',
    },
    sourceUrl: 'https://www.shanisoffice.pink/uploads/5/0/9/8/5098161/compensation-plan-en-us.pdf',
    keyGotchas: [
      '73%+ of consultants earn under $1,000/year before expenses',
      'Requires purchasing inventory upfront',
      'Average consultant eligible for commissions earned $206 in 2019',
      'Pink Cadillac requires maintaining volume or you pay the lease difference',
      'Typical participant earns no commissions or bonuses at all',
    ],
  },
  {
    companySlug: 'monat-global',
    companyName: 'MONAT Global',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 7.50,
    levels: [
      { level: 1, label: 'Retail bonus', residualPerCustomer: 7.50, notes: 'Difference between MP and retail price (~15%)' },
      { level: 2, label: 'Group Volume', residualPerCustomer: 1, notes: '2% on personal group' },
      { level: 3, label: 'Generation bonuses', residualPerCustomer: null, notes: 'Varies by rank and generation' },
    ],
    monthlyRequirement: '$99 Starter Kit + monthly product orders',
    qualificationNote: 'Market Partners need to maintain activity through personal or team sales volume. Commission rates increase from 10-25% based on rank.',
    simpleSummary: 'MONAT offers 10-25% commissions on personal sales depending on rank, plus generation bonuses on downline volume. The average Market Partner earns $758/year (2024), though 41% earn nothing.',
    teamSizeNeeded: {
      goal1000: 133,
      goal3000: 400,
      goal10000: 1333,
      assumptions: 'Based on $7.50 retail bonus per $50 customer order. Higher commissions require rank advancement.',
    },
    sourceUrl: 'https://monatglobal.com/income-disclosure-statement/',
    keyGotchas: [
      'Multiple class action lawsuits over product issues',
      'Average Market Partner earns $758/year (2024 IDS)',
      '41% of Market Partners earned $0 in 2024',
      'Thousands of BBB complaints about hair loss and scalp issues',
      'Commission rates start at 10% for new Market Partners',
    ],
  },
  {
    companySlug: 'nu-skin-enterprises',
    companyName: 'Nu Skin Enterprises',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 7.50,
    levels: [
      { level: 1, label: 'Sharing Bonus', residualPerCustomer: 7.50, notes: '5-15% of $50 CSV' },
      { level: 2, label: 'Building Bonus', residualPerCustomer: null, notes: '5-40% based on blocks completed' },
      { level: 3, label: 'Leading Bonus', residualPerCustomer: null, notes: 'Requires Brand Representative rank' },
    ],
    monthlyRequirement: '100 PSV (~$100/month)',
    qualificationNote: 'Must generate 100 Personal Sales Volume monthly. New November 2024 Sales Performance Plan replaced the Velocity Plan.',
    simpleSummary: 'Nu Skin pays 5-15% Sharing Bonus on customer orders plus Building Bonus (5-40%) based on team sales volume. Average monthly earnings for Active Brand Affiliates was $178.35 in 2024.',
    teamSizeNeeded: {
      goal1000: 133,
      goal3000: 400,
      goal10000: 1333,
      assumptions: 'Based on $7.50 avg per customer at 15% Sharing Bonus. Building bonuses require significant team volume.',
    },
    sourceUrl: 'https://www.nuskin.com/en_US/corporate/compliance-corner/compensation.html',
    keyGotchas: [
      'Only 24.67% of Brand Affiliates were "Active" in 2024',
      'Average monthly earnings for Active affiliates: $178.35',
      'FTC settlements and China government fines in company history',
      'New compensation plan launched November 2024',
      'Complex binary/unilevel hybrid requires learning curve',
    ],
  },
  {
    companySlug: 'avon-products',
    companyName: 'Avon Products',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 12.50,
    levels: [
      { level: 1, label: 'Personal sales', residualPerCustomer: 12.50, notes: '25% on $50 sale (new reps)' },
      { level: 2, label: 'Advanced commission', residualPerCustomer: 15, notes: 'Up to 30% at higher levels' },
      { level: 3, label: 'Team bonuses', residualPerCustomer: null, notes: 'Star Promoter and above' },
    ],
    monthlyRequirement: '$40 minimum order per campaign',
    qualificationNote: 'Commission earned when orders reach $40+ per campaign. New 2025 commission structure bases earnings on per-Campaign sales volume rather than annual totals.',
    simpleSummary: 'Avon pays 25% commission on sales over $40 for new reps, scaling up to 30% for advanced sellers. The January 2025 restructuring moved to per-campaign commission calculations for faster earnings.',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 667,
      assumptions: 'Based on $12.50 per $50 customer order at 25%. Higher commission rates available at advanced levels.',
    },
    sourceUrl: 'https://www.avon.com/representative/compensation-plan',
    keyGotchas: [
      'Major compensation plan restructure effective January 2025',
      'Commission now calculated per-Campaign, not annually',
      'Must hit $40 minimum order to earn commission that campaign',
      'Fashion & Home products earn lower commission than Beauty',
      'Team building required for Star Promoter bonuses',
    ],
  },
  {
    companySlug: 'primerica',
    companyName: 'Primerica',
    lastUpdated: '2026-03-20',
    directCustomerResidual: null,
    levels: [
      { level: 1, label: 'Representative', residualPerCustomer: null, notes: '25% commission on insurance sales' },
      { level: 2, label: 'Senior Representative', residualPerCustomer: null, notes: '35% personal + 10% override' },
      { level: 3, label: 'District Leader', residualPerCustomer: null, notes: '50% personal + team overrides' },
    ],
    monthlyRequirement: 'Active insurance license required',
    qualificationNote: 'Must obtain and maintain state insurance license. Income comes from commission on insurance and financial product sales, not recurring subscriptions.',
    simpleSummary: 'Primerica is an insurance/financial services MLM requiring licensing. Representatives earn 25-60% commission on sales depending on rank, plus overrides on team sales. Residual income comes from policy renewals and investment products.',
    teamSizeNeeded: {
      goal1000: null,
      goal3000: null,
      goal10000: null,
      assumptions: 'Commission-based insurance sales. No fixed per-customer residual. Average rep earned $7,757 in 2024.',
    },
    sourceUrl: 'https://www.primerica.com/public/primerica_disclosures.html',
    keyGotchas: [
      'Requires state insurance license ($200-500 to obtain)',
      'Must pass securities exams for investment products',
      '$99 startup fee plus licensing costs',
      'Average rep earned $7,757 in 2024 (before expenses)',
      'Income depends on closing insurance sales, not just referrals',
    ],
  },
  {
    companySlug: 'melaleuca',
    companyName: 'Melaleuca',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 3.50,
    levels: [
      { level: 1, label: '1-7 customers', residualPerCustomer: 3.50, notes: '7% of 50 PP ($50 order)' },
      { level: 2, label: '8-19 customers', residualPerCustomer: 7, notes: '14% rate unlocked' },
      { level: 3, label: '20+ customers', residualPerCustomer: 10, notes: '20% rate + $500 bonus' },
      { level: 4, label: 'Director (organization)', residualPerCustomer: 3.50, notes: '7% on 7 generations deep' },
    ],
    monthlyRequirement: '35 Product Points (~$55-70/month)',
    qualificationNote: 'Must maintain 35 Product Points monthly. Commission rates scale from 7% to 20% based on number of active personally enrolled customers.',
    simpleSummary: 'Melaleuca pays 7-20% commission based on your customer count, plus 7% on organization volume up to 7 levels deep at Director rank. The 96% reorder rate among Preferred Customers supports residual income.',
    teamSizeNeeded: {
      goal1000: 100,
      goal3000: 300,
      goal10000: 1000,
      assumptions: 'Based on $10 per customer at 20% rate (20+ customers). Scaling commissions reward customer acquisition.',
    },
    sourceUrl: 'https://cdnus.melaleuca.com/PDF/BusinessCenter/enus/melaleuca-compensation-book-enus.pdf',
    keyGotchas: [
      '82% of members earned $0 (per income disclosure)',
      'Product Advocates average only $110-510/year',
      'Must reach Director rank for organization commissions',
      '35 product point monthly minimum to stay qualified',
      'Company claims 96% reorder rate but this includes autoship',
    ],
  },
  {
    companySlug: 'usana-health-sciences',
    companyName: 'USANA Health Sciences',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 10,
    levels: [
      { level: 1, label: 'Retail margin', residualPerCustomer: 10, notes: '~20% markup on $50 product' },
      { level: 2, label: 'Binary commission', residualPerCustomer: null, notes: '20% of lesser leg SVP' },
      { level: 3, label: 'Matching bonus', residualPerCustomer: null, notes: 'Up to 15% on sponsored associates' },
    ],
    monthlyRequirement: '100 PSV (~$100-150/month)',
    qualificationNote: 'Binary compensation requires balancing volume between two legs. Must maintain personal sales volume to qualify for weekly commissions.',
    simpleSummary: 'USANA uses a binary compensation plan paying 20% commission on the lesser leg\'s volume. Weekly payouts plus matching bonuses up to 15% on personally sponsored associates. New October 2025 plan adds 10% Fast Start bonus.',
    teamSizeNeeded: {
      goal1000: 100,
      goal3000: 300,
      goal10000: 1000,
      assumptions: 'Based on $10 retail margin per customer. Binary model requires balanced team building.',
    },
    sourceUrl: 'https://www.usana.com/static/images/na/Training/CompensationPlan/CompPlan-US-CA-EN.pdf',
    keyGotchas: [
      'Binary model requires balancing two legs to maximize earnings',
      'Weekly qualification requirements must be met',
      'Net income fell from $124.7M (2021) to $54.3M (2024)',
      'New compensation plan launching October 2025',
      'Maximum $1,000/week per Business Center when maxed out',
    ],
  },
  {
    companySlug: 'isagenix',
    companyName: 'Isagenix',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 10,
    levels: [
      { level: 1, label: 'PIB (new customers)', residualPerCustomer: 10, notes: '20% on first qualifying purchase' },
      { level: 2, label: 'Retail commission', residualPerCustomer: 10, notes: '20% on repeat purchases' },
      { level: 3, label: 'Cycle bonus', residualPerCustomer: null, notes: '$54 per cycle (600/300 BV)' },
    ],
    monthlyRequirement: '100 BV (~$100-150/month)',
    qualificationNote: 'Must maintain 100 Business Volume monthly. Cycle bonuses require building team volume in binary structure.',
    simpleSummary: 'Isagenix pays 20% Product Introduction Bonus on new customer first orders, plus ongoing retail commissions. Cycle bonuses ($54 each) provide team-based income when you accumulate 600 BV on one leg and 300 BV on the other.',
    teamSizeNeeded: {
      goal1000: 100,
      goal3000: 300,
      goal10000: 1000,
      assumptions: 'Based on $10 per customer at 20% commission on $50 orders. Cycle bonuses add team-based income.',
    },
    sourceUrl: 'https://www.isagenix.com/en-us/~/media/C4BBC4AB0EBF4DCA965CDE479CFA23ED',
    keyGotchas: [
      'Current comp plan effective January 1, 2024',
      'Binary structure requires building two legs',
      '$54 cycle bonus requires specific volume thresholds',
      'Executive Matching Bonus requires Paid-As Executive rank',
      'Individual results vary significantly based on effort and skills',
    ],
  },
  {
    companySlug: 'rodan-fields',
    companyName: 'Rodan + Fields',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 5,
    levels: [
      { level: 1, label: 'Retail profit', residualPerCustomer: 15, notes: '~30% margin on $50 skincare' },
      { level: 2, label: 'L1 Commission', residualPerCustomer: 5, notes: '10% on personally sponsored' },
      { level: 3, label: 'Generation commissions', residualPerCustomer: 2.50, notes: '5% per generation (G1-G5)' },
    ],
    monthlyRequirement: '100 SV (~$100/month)',
    qualificationNote: 'Must generate 100 Sales Volume monthly. NOTE: R+F ended its MLM model in September 2024, transitioning to single-level affiliate program.',
    simpleSummary: 'NOTE: Rodan + Fields ended its MLM structure in September 2024. Former consultants lost multi-level income overnight. The company now operates as a single-level affiliate program with different compensation.',
    teamSizeNeeded: {
      goal1000: 67,
      goal3000: 200,
      goal10000: 667,
      assumptions: 'Historical MLM structure. Company transitioned to single-level in September 2024.',
    },
    sourceUrl: 'https://www.rodanandfields.com/helpcenter/s/topic/0TO2L0000008E8CWAU/compensation-plan',
    keyGotchas: [
      'MAJOR: Ended MLM model September 2024 - consultants lost downline income',
      'Now operates as single-level affiliate program only',
      'Former multi-level residual income structure eliminated',
      'Example of why MLM income can disappear with company decisions',
      '$75 Business Starter Pack was required for MLM participation',
    ],
  },
  {
    companySlug: 'lularoe',
    companyName: 'LuLaRoe',
    lastUpdated: '2026-03-20',
    directCustomerResidual: null,
    levels: [
      { level: 1, label: 'Retail profit', residualPerCustomer: null, notes: 'Buy wholesale, sell at markup' },
      { level: 2, label: 'Leadership pool', residualPerCustomer: null, notes: '2% company bonus pool' },
    ],
    monthlyRequirement: 'Inventory purchases required',
    qualificationNote: 'LuLaRoe operates on an inventory-based model. Retailers buy clothing inventory upfront and profit from the markup when selling to customers.',
    simpleSummary: 'LuLaRoe uses an inventory-based retail model. You purchase clothing wholesale and sell at retail markup. Only 9.63% participated in Leadership bonus pool in 2024. Average Leadership compensation was $10,573 but median was just $875.',
    teamSizeNeeded: {
      goal1000: null,
      goal3000: null,
      goal10000: null,
      assumptions: 'Profit depends on inventory management and actual sales. No fixed per-customer residual.',
    },
    sourceUrl: 'https://lularoe.com/pages/income-disclosure-statement',
    keyGotchas: [
      '$499 startup kit required for 65 pieces of inventory',
      'Only 9.63% participated in Leadership Compensation Plan in 2024',
      'Median Leadership compensation: $875.53 vs average $10,573 (skewed by top earners)',
      '90.37% of retailers did not participate in Leadership bonuses',
      'Inventory risk - unsold clothing represents a loss',
    ],
  },
  {
    companySlug: 'plexus-worldwide',
    companyName: 'Plexus Worldwide',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 7.50,
    levels: [
      { level: 1, label: 'Retail commission', residualPerCustomer: 7.50, notes: '15% on $50 order ($100-499 PV tier)' },
      { level: 2, label: 'Advanced retail', residualPerCustomer: 12.50, notes: '25% at $500+ PV tier' },
      { level: 3, label: 'Retail override', residualPerCustomer: null, notes: 'On Level 1 Ambassador volume' },
    ],
    monthlyRequirement: '100 PV (~$100/month)',
    qualificationNote: 'Must be Commission Qualified with current Annual Membership and 100 Personal Volume. Retail commission rate scales from 0% to 25% based on monthly volume.',
    simpleSummary: 'Plexus pays 15-25% retail commission based on your personal volume tier, plus Jewel Pool bonuses at higher ranks. 50% of commissionable volume is paid out monthly, with 5% reserved for Jewel bonus pools.',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 800,
      assumptions: 'Based on $12.50 per customer at 25% rate ($500+ PV tier). Lower tiers earn less.',
    },
    sourceUrl: 'https://static.plexusworldwide.com/cdn/comp-plan-full-en-us.pdf',
    keyGotchas: [
      'Average annual earnings in 2020 were only $544',
      'Retail commission is 0% if under $100 PV monthly',
      'Jewel Car Bonus ($600-1,450/mo) requires high rank achievement',
      'Must scale to $500+ PV monthly for 25% commission rate',
      'Annual membership fee required to remain qualified',
    ],
  },
  {
    companySlug: 'forever-living-products',
    companyName: 'Forever Living Products',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 7.50,
    levels: [
      { level: 1, label: 'Retail commission', residualPerCustomer: 7.50, notes: '15% on $50 order (entry level)' },
      { level: 2, label: 'Wholesale profit', residualPerCustomer: 15, notes: '30% at Wholesale Qualified' },
      { level: 3, label: 'Team commissions', residualPerCustomer: null, notes: 'Manager rank and above' },
    ],
    monthlyRequirement: '2 Case Credits in 2 months for wholesale',
    qualificationNote: 'Novus Customers get 15% discount. Wholesale Qualification (30% discount) requires purchasing 2 Case Credits within two consecutive months.',
    simpleSummary: 'Forever Living pays 15-30% retail commissions plus team volume commissions at Manager rank and above. The unilevel structure pays on entire group sales regardless of levels. Estimated $595M in annual commissions.',
    teamSizeNeeded: {
      goal1000: 67,
      goal3000: 200,
      goal10000: 667,
      assumptions: 'Based on $15 profit per customer at 30% wholesale rate. Entry level earns 15%.',
    },
    sourceUrl: 'https://foreverliving.com/income-disclosure',
    keyGotchas: [
      'Must purchase 2 Case Credits in 2 months for wholesale pricing',
      'Retail commissions range from 15-30% depending on your level',
      'Leadership bonuses require Manager rank or higher',
      'Team commissions based on total group sales, not individual levels',
      'Aloe vera products have niche market appeal',
    ],
  },
  {
    companySlug: 'scentsy',
    companyName: 'Scentsy',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 10,
    levels: [
      { level: 1, label: 'Personal sales (new)', residualPerCustomer: 10, notes: '20% on $50 order (first 1,000 PRV)' },
      { level: 2, label: 'Certified Consultant', residualPerCustomer: 12.50, notes: '25% at 250+ PRV monthly' },
      { level: 3, label: 'Bonus tier', residualPerCustomer: 15, notes: 'Up to 30% at high volume + rank bonuses' },
    ],
    monthlyRequirement: '250 PRV (~$250/month) for full commission',
    qualificationNote: '2025 changes increased requirement from 200 to 250 PRV monthly for active status. Consultants below 250 PRV still earn 20% but miss bonuses.',
    simpleSummary: 'Scentsy pays 20-25% base commission on personal sales, scaling to 36% with bonuses at high ranks. April 2025 changes increased monthly requirements to 250 PRV. Leadership bonuses add earnings from team sales.',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 800,
      assumptions: 'Based on $12.50 per $50 customer order at 25% Certified rate. Volume bonuses add 5-11%.',
    },
    sourceUrl: 'https://scentsy.com/join/compensation-and-income-disclosure',
    keyGotchas: [
      '2025 changes increased monthly requirement to 250 PRV (from 200)',
      'Monthly Sales Award Bonus now requires 2,500 PRV (up from 2,000)',
      'Below 250 PRV monthly, you only earn 20% commission',
      'Wax warmers are durable goods - may limit repeat purchases',
      'Leadership bonuses require building and maintaining active team',
    ],
  },
  {
    companySlug: 'pampered-chef',
    companyName: 'Pampered Chef',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 11.25,
    levels: [
      { level: 1, label: 'Base commission', residualPerCustomer: 10, notes: '20% on $50 order' },
      { level: 2, label: 'Advanced', residualPerCustomer: 11.25, notes: '22% after $15,000 career sales' },
      { level: 3, label: 'Top tier', residualPerCustomer: 13.50, notes: 'Up to 27% for top performers' },
    ],
    monthlyRequirement: '$30 in sales every 6 months',
    qualificationNote: 'Remain eligible with just $30 in commissionable sales within 6 months. Relatively low maintenance requirement compared to other MLMs.',
    simpleSummary: 'Pampered Chef pays 20-27% commission on product sales. After $15,000 in career sales, you earn an extra 2% monthly bonus. Kitchen tools have moderate repeat purchase rates. Average consultant earns $0-262 annually in Canada (2024).',
    teamSizeNeeded: {
      goal1000: 89,
      goal3000: 267,
      goal10000: 889,
      assumptions: 'Based on $11.25 per $50 sale at 22.5% average rate. Kitchen tools have limited repeat purchase.',
    },
    sourceUrl: 'https://www.pamperedchef.com/iceberg/com/bac/us-careerplanchart.pdf',
    keyGotchas: [
      'Kitchen tools are durable - limited repeat customer purchases',
      'Average Canadian consultant earned $0-262 annually (2024)',
      '28% of consultants were not Active and earned $0',
      'PC Digital Toolkit costs $15-18/month after 90-day trial',
      'Party-based selling model requires consistent hosting',
    ],
  },
  {
    companySlug: 'arbonne-international',
    companyName: 'Arbonne International',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 8.75,
    levels: [
      { level: 1, label: 'Client commission', residualPerCustomer: 8.75, notes: '~35% margin on $25 client purchase' },
      { level: 2, label: 'Preferred Client', residualPerCustomer: null, notes: 'Commission on PC orders' },
      { level: 3, label: 'Unilevel residuals', residualPerCustomer: null, notes: 'Based on team volume at rank' },
    ],
    monthlyRequirement: '150 PV (~$150/month) or 100 PV over 12 months',
    qualificationNote: 'Most ranks require 150 PV monthly. Independent Consultants can qualify with 100 PV monthly averaged over 12 months (1200 PV total).',
    simpleSummary: 'Arbonne pays up to 35% retail profit on Client purchases plus unilevel commissions on team volume. The modified unilevel structure uses generations within standard levels. Most income comes from retail profit at entry levels.',
    teamSizeNeeded: {
      goal1000: 114,
      goal3000: 343,
      goal10000: 1143,
      assumptions: 'Based on $8.75 profit per $25 client order at 35%. Team commissions require rank advancement.',
    },
    sourceUrl: 'https://www.arbonne.com/us/en/earnings',
    keyGotchas: [
      'Must generate 150 PV monthly for most commission qualifications',
      'Modified unilevel structure can be complex to understand',
      'Consultants earn on product sales and team volume, not recruiting',
      'Vegan/clean beauty positioning appeals to niche market',
      'SuccessPlan documentation can be difficult to navigate',
    ],
  },
  {
    companySlug: 'four-life-research',
    companyName: '4Life Research',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 12.50,
    levels: [
      { level: 1, label: 'Rapid Rewards (first order)', residualPerCustomer: 12.50, notes: '25% on new customer first LP order' },
      { level: 2, label: 'Level 2', residualPerCustomer: 6, notes: '12% on first orders' },
      { level: 3, label: 'Level 3', residualPerCustomer: 2.50, notes: '5% on first orders' },
      { level: 4, label: 'Residual', residualPerCustomer: null, notes: '2-25% on ongoing orders by level' },
    ],
    monthlyRequirement: '100 LP (~$100/month)',
    qualificationNote: 'Rapid Rewards pays 25% on first orders, then residual commissions (2-25% by level) on ongoing purchases. Builder rank unlocks Level 3 commissions.',
    simpleSummary: '4Life pays 25% on new customer first orders (Rapid Rewards) plus 2-25% residual commissions across three levels. The Infinity Bonus extends commissions deeper. Claims up to 64% payout potential at highest ranks.',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 800,
      assumptions: 'Based on $12.50 Rapid Rewards per new customer. Ongoing residuals are 2-25% depending on level.',
    },
    sourceUrl: 'https://media2.4life.com/document/Life_Rewards_Feb2025_Eng.pdf',
    keyGotchas: [
      'Rapid Rewards (25%) only applies to first customer order',
      'Ongoing residuals drop to 2% on Level 1, 25% on Level 2',
      'Power Pool requires 3 new distributors with 100 LP for 2 months each',
      'Transfer Factor products are niche immune support supplements',
      'Estimated 35% commission payout rate company-wide',
    ],
  },
];

// Helper to get comp plan by slug
export function getCompPlanBySlug(slug: string): CompPlanData | undefined {
  return compPlans.find(cp => cp.companySlug === slug);
}

// Helper to check if a company has a comp plan page
export function hasCompPlan(slug: string): boolean {
  return compPlans.some(cp => cp.companySlug === slug);
}

// Get all comp plan slugs for static generation
export function getAllCompPlanSlugs(): string[] {
  return compPlans.map(cp => cp.companySlug);
}

// Get comp plans sorted by direct customer residual (highest first)
export function getCompPlansSortedByResidual(): CompPlanData[] {
  return [...compPlans].sort((a, b) => {
    // Put null values at the end
    if (a.directCustomerResidual === null && b.directCustomerResidual === null) return 0;
    if (a.directCustomerResidual === null) return 1;
    if (b.directCustomerResidual === null) return -1;
    return b.directCustomerResidual - a.directCustomerResidual;
  });
}
