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
    directCustomerResidual: 10,
    levels: [
      { level: 1, label: 'Performance Bonus', residualPerCustomer: 3, notes: '3% of $100 order = $3' },
      { level: 2, label: 'Customer Sales Incentive', residualPerCustomer: 7, notes: '7% CSI (first 3 years only)' },
      { level: 3, label: 'Combined (first 3 years)', residualPerCustomer: 10, notes: '3% + 7% CSI = $10 per $100 order' },
      { level: 4, label: 'Downline commissions', residualPerCustomer: null, notes: 'Requires Group PV; varies by rank' },
    ],
    monthlyRequirement: '100 PV (~$300-400 in product)',
    qualificationNote: 'New reps earn ~$10 per $100 customer order (3% Performance + 7% CSI). After 3 years, CSI ends and you earn only 3% unless you reach higher ranks (up to 25%).',
    simpleSummary: 'Amway pays 3% Performance Bonus on direct customer orders plus 7% Customer Sales Incentive in your first 3 years (total ~$10 per $100 order). After CSI expires, meaningful income requires reaching higher ranks for the 25% performance bonus level.',
    teamSizeNeeded: {
      goal1000: 100,
      goal3000: 300,
      goal10000: 1000,
      assumptions: 'Based on $10/customer (3% + 7% CSI) on $100 orders. After 3 years, drops to $3/customer without rank advancement.',
    },
    sourceUrl: 'https://www.amway.com/media-location/AmwayBusinessReferenceGuide_USEN.pdf',
    keyGotchas: [
      'Customer Sales Incentive (7%) phases out after your first 3 years',
      'Must maintain 100 PV monthly or you earn $0 that month',
      'When downline members "break away" to higher ranks, you lose volume',
      'Average IBO at Founders Platinum and below earns $723/year before expenses (2024)',
      'Complex PV/BV system makes true earnings difficult to calculate',
    ],
  },
  {
    companySlug: 'herbalife',
    companyName: 'Herbalife',
    lastUpdated: '2026-03-21',
    directCustomerResidual: null,
    levels: [
      { level: 1, label: 'Member (25% discount)', residualPerCustomer: 12.50, notes: '25% retail margin on $50 order' },
      { level: 2, label: 'Senior Consultant (35-42%)', residualPerCustomer: 17.50, notes: '35% margin on $50 order' },
      { level: 3, label: 'Supervisor (50%)', residualPerCustomer: 25, notes: '50% margin on $50 order + royalties' },
      { level: 4, label: 'Royalty override (Supervisor+)', residualPerCustomer: 2.50, notes: '5% per level, up to 3 levels deep' },
    ],
    monthlyRequirement: '$94.10/month autoship minimum',
    qualificationNote: 'Entry-level recurring commission: Varies. Herbalife uses a discount differential system. New distributors get 25% off retail, but most customers also sign up as members (also 25% off), so the actual recurring margin is often $0. You only profit if selling at full retail to non-members. Higher-level distributors can undercut you with their bigger discounts.',
    simpleSummary: 'Herbalife offers 25-50% retail margins depending on your rank. New members earn 25% margin ($12.50 on a $50 order). Reaching Supervisor ($4,000 in purchases) unlocks 50% margin plus 5% royalty overrides 3 levels deep.',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 800,
      assumptions: 'Based on ~$12.50 retail profit per $50 order at 25% margin. Higher ranks earn more per customer.',
    },
    sourceUrl: 'https://www.herbalife.com/content/dam/global-reusable-assets/documents/pd-statement-typical-distributor-earnings-en-us.pdf',
    keyGotchas: [
      'Paid $200M FTC settlement in 2016 for deceptive practices',
      'Approximately 50% of distributors earn $0 in a typical month (2024)',
      'Must reach Supervisor rank ($4,000 in purchases) for 50% margin and royalty overrides',
      'Higher-level distributors can undercut your prices with their bigger discounts (35-50%)',
      'Most customers sign up as members (25% discount), eliminating your margin entirely',
    ],
  },
  {
    companySlug: 'doterra',
    companyName: 'doTERRA',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 6.25,
    levels: [
      { level: 1, label: 'Retail profit', residualPerCustomer: 6.25, notes: '25% of $25 avg monthly order' },
      { level: 2, label: 'Fast Start (60 days)', residualPerCustomer: 5, notes: '20% on new enrollee orders (you) + 10% (enroller) + 5% (their enroller)' },
      { level: 3, label: 'Unilevel Level 1', residualPerCustomer: 0.50, notes: '2% of $25 order' },
      { level: 4, label: 'Unilevel Level 7', residualPerCustomer: 1.75, notes: '7% at deepest level' },
    ],
    monthlyRequirement: '100 PV (~$100-150/month LRP)',
    qualificationNote: 'Must maintain 100 Loyalty Rewards Points monthly. doTERRA pays out 48% of commissionable volume to Wellness Advocates. New June 2025 "Elevated" plan requires Team Growth Volume to unlock deeper commission levels.',
    simpleSummary: 'doTERRA pays 25% retail profit on direct customers plus unilevel commissions (2-7%) across 7 levels. Fast Start pays 20% on new enrollee orders for 60 days. The June 2025 "Elevated" comp plan requires ongoing recruitment activity for deep commissions.',
    teamSizeNeeded: {
      goal1000: 160,
      goal3000: 480,
      goal10000: 1600,
      assumptions: 'Based on $6.25 retail profit per $25 customer order at 25%. Team volume adds 2-7% per level but requires rank advancement.',
    },
    sourceUrl: 'https://media.doterra.com/us/en/flyers/compensation-plan.pdf',
    keyGotchas: [
      'June 2025 "Elevated" plan requires "Team Growth Volume" from recent enrollees to unlock deep commissions',
      'Typical Wellness Advocate earned $0-100 in commissions (2024)',
      'Fast Start bonuses only last 60 days per customer',
      'Must maintain LRP autoship every month to stay qualified',
      'doTERRA pays out 48% of commissionable volume to Wellness Advocates',
    ],
  },
  {
    companySlug: 'young-living',
    companyName: 'Young Living',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 4,
    levels: [
      { level: 1, label: 'Unilevel Level 1', residualPerCustomer: 4, notes: '8% of $50 avg order' },
      { level: 2, label: 'Unilevel Level 2', residualPerCustomer: 2.50, notes: '5% of $50 order' },
      { level: 3, label: 'Unilevel Levels 3-5', residualPerCustomer: 2, notes: '4% of $50 order each' },
      { level: 4, label: 'Fast Start (first 3 months)', residualPerCustomer: 12.50, notes: '25% bonus on new enrollee purchases' },
    ],
    monthlyRequirement: '100 PV (~$100/month)',
    qualificationNote: 'Must have 100 PV monthly from personal purchases or customer orders. April 2025 plan includes new rank achievement bonuses ($100-200 for Senior Star through Silver).',
    simpleSummary: 'Young Living pays 8% on Level 1, 5% on Level 2, and 4% on Levels 3-5 through their unilevel structure. Fast Start bonuses (25%) apply to new enrollee orders in their first 3 months. Generation commissions (3%) available at Silver rank and above.',
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
      'Generation commissions (3%) require Silver rank or higher (10,000 OGV, 2 legs with 4,000 OGV)',
    ],
  },
  {
    companySlug: 'mary-kay',
    companyName: 'Mary Kay',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 25,
    levels: [
      { level: 1, label: 'Retail profit', residualPerCustomer: 25, notes: '50% margin on $50 retail sale (buy wholesale at 50% off)' },
      { level: 2, label: 'Senior Consultant (1-2 recruits)', residualPerCustomer: null, notes: '4% team commission' },
      { level: 3, label: 'Star Team Builder (3-4 recruits)', residualPerCustomer: null, notes: '4-8% team commission based on volume' },
      { level: 4, label: 'Team Leader (5+ recruits)', residualPerCustomer: null, notes: '9-13% team commission' },
    ],
    monthlyRequirement: '$225 wholesale in Section 1 products',
    qualificationNote: 'Active consultant status requires $225 wholesale purchases (good for 2 months). You buy at 50% off wholesale and sell at retail for 50% margin. Team commission tiers: 4% (under $1,000 team), 6% ($1,000-1,799), 8% ($1,800+), 9-13% (5+ recruits).',
    simpleSummary: 'Mary Kay offers 50% retail profit on personal sales (buy at 50% off, sell at retail). Team commissions range from 4-13% based on recruit count and team volume. $50 team bonus when new recruit places $600 wholesale order.',
    teamSizeNeeded: {
      goal1000: 40,
      goal3000: 120,
      goal10000: 400,
      assumptions: 'Based on $25 profit per $50 sale at 50% margin. Assumes selling at full retail price without discounts.',
    },
    sourceUrl: 'https://www.shanisoffice.pink/uploads/5/0/9/8/5098161/compensation-plan-en-us.pdf',
    keyGotchas: [
      'Canadian NSD average dropped from $149,440 (2023) to $122,000 (2024)',
      'Requires purchasing inventory upfront',
      'Sales Directors average income: $19,658/year in Canada (2024)',
      'Pink Cadillac requires maintaining volume or you pay the lease difference',
      '$50 team-building bonus when new recruit places $600 wholesale order',
    ],
  },
  {
    companySlug: 'monat-global',
    companyName: 'MONAT Global',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 15,
    levels: [
      { level: 1, label: 'Retail Customer commission', residualPerCustomer: 15, notes: '30% retail bonus on $50 order' },
      { level: 2, label: 'VIP Customer commission', residualPerCustomer: 7.50, notes: '15% on VIP customer $50 order' },
      { level: 3, label: 'Product Pack bonus', residualPerCustomer: null, notes: '$50-250 for enrolling new Market Partners with packs' },
      { level: 4, label: 'Generation bonuses', residualPerCustomer: null, notes: 'Varies by rank and generation' },
    ],
    monthlyRequirement: '$99 Starter Kit to start; maintain activity through sales',
    qualificationNote: 'Market Partners earn 30% on retail customers and 15% on VIP customers. PowerStart period (Dec 2024 - May 2025) offers enhanced bonuses. $50-250 bonus for enrolling new Market Partners with Product Packs.',
    simpleSummary: 'MONAT pays 30% commission on retail customer orders and 15% on VIP customer orders. Product Pack bonuses ($50-250) for recruiting. Average Market Partner earns $758/year (2024), with 41% earning nothing.',
    teamSizeNeeded: {
      goal1000: 67,
      goal3000: 200,
      goal10000: 667,
      assumptions: 'Based on $15 per retail customer ($50 order at 30%). VIP customers earn 15% ($7.50).',
    },
    sourceUrl: 'https://monatglobal.com/wp-content/uploads/2024/12/US_Compensation-Plan_112524_v23-1.pdf',
    keyGotchas: [
      'Multiple class action lawsuits over product issues',
      'Average Market Partner earns $758/year (2024 IDS)',
      '41% of Market Partners earned $0 in 2024',
      'Retail customers earn you 30%, VIP customers earn you 15%',
      'PowerStart period Dec 2024 - May 2025 offers enhanced bonuses',
    ],
  },
  {
    companySlug: 'nu-skin-enterprises',
    companyName: 'Nu Skin Enterprises',
    lastUpdated: '2026-03-21',
    directCustomerResidual: 4,
    levels: [
      { level: 1, label: 'Selling Bonus (entry)', residualPerCustomer: 4, notes: '4% base on $100 order = $4 (Nov 2024+ plan)' },
      { level: 2, label: 'Selling Bonus (max)', residualPerCustomer: 21, notes: 'Up to 21% based on monthly Direct Customer Sales targets' },
      { level: 3, label: 'Building Bonus (1 block)', residualPerCustomer: null, notes: '5% on first 500-point block' },
      { level: 4, label: 'Building Bonus (16 blocks)', residualPerCustomer: null, notes: 'Up to 40% at 16 blocks' },
    ],
    monthlyRequirement: '100 PSV (~$100/month)',
    qualificationNote: 'Entry-level recurring: $4 per $100 order (4% Selling Bonus). November 2024 plan replaced "Sharing Bonus" (5-15%) with "Selling Bonus" starting at 4%. Rate scales to 21% as you hit monthly Direct Customer Sales targets. Building Bonus (5-40%) requires completing 500-point team blocks.',
    simpleSummary: 'Nu Skin pays 4-21% Selling Bonus on customer orders (paid daily, rate scales with monthly sales targets) plus Building Bonus (5-40%) based on completing 500-point team sales blocks. Company paid $122M in sales compensation to US Brand Affiliates in 2024.',
    teamSizeNeeded: {
      goal1000: 250,
      goal3000: 750,
      goal10000: 2500,
      assumptions: 'Based on $4 per $100 customer order at 4% entry-level Selling Bonus. Higher volume unlocks up to 21%.',
    },
    sourceUrl: 'https://www.nuskin.com/en_US/corporate/compliance-corner/compensation.html',
    keyGotchas: [
      'Only 24.67% of Brand Affiliates were "Active" in 2024',
      'Average monthly earnings for Active affiliates: $178.35 (2024)',
      'November 2024 plan: Selling Bonus starts at 4%, scales to 21% based on monthly sales targets',
      'Building Bonus requires completing 500-point blocks (5% per block, up to 40% at 16 blocks)',
      'Company paid $122M in US sales compensation in 2024',
    ],
  },
  {
    companySlug: 'avon-products',
    companyName: 'Avon Products',
    lastUpdated: '2026-03-21',
    directCustomerResidual: 25,
    levels: [
      { level: 1, label: 'Campaign sales ($40+)', residualPerCustomer: 25, notes: '25% on Beauty/Jewelry per $100 order (20% Home/Fashion)' },
      { level: 2, label: 'Variable campaign commission', residualPerCustomer: null, notes: 'Up to 50% based on campaign volume' },
      { level: 3, label: 'Star Promoter bonuses', residualPerCustomer: null, notes: 'Team sales bonuses at Star Promoter+' },
    ],
    monthlyRequirement: '$40 minimum order per campaign',
    qualificationNote: 'Entry-level recurring: $25 per $100 Beauty/Jewelry order (25% base). January 2025 restructure makes commission variable per-campaign (2-week cycle) based on volume, scaling up to 50%. Home/Fashion earns 20% base. Must hit $40 minimum per campaign to earn.',
    simpleSummary: 'Avon restructured in January 2025 with variable per-campaign commissions up to 50%. Commission starts at 25% (Beauty/Jewelry) or 20% (Home/Fashion) when orders reach $40+ per campaign. Replaces the old annual sales-tier model.',
    teamSizeNeeded: {
      goal1000: 40,
      goal3000: 120,
      goal10000: 400,
      assumptions: 'Based on $25 per $100 Beauty/Jewelry order at 25% base. Higher campaign volume unlocks up to 50%.',
    },
    sourceUrl: 'https://www.avon.com/representative/compensation-plan',
    keyGotchas: [
      'Major compensation plan restructure effective January 2025',
      'Commission now variable per-Campaign (up to 50%), not fixed annual tiers',
      'Must hit $40 minimum order to earn commission that campaign',
      'Beauty/Jewelry earns 25% base; Home/Fashion earns 20%',
      'Median active rep sees $200-500/month gross sales, $50-150/month commission',
    ],
  },
  {
    companySlug: 'primerica',
    companyName: 'Primerica',
    lastUpdated: '2026-03-21',
    directCustomerResidual: null,
    levels: [
      { level: 1, label: 'Representative (25%)', residualPerCustomer: null, notes: '25% commission on life insurance sales (~$250 on $1000 annual premium)' },
      { level: 2, label: 'Senior Representative (35%)', residualPerCustomer: null, notes: '35% personal + 10% override on Reps' },
      { level: 3, label: 'District Leader (50%)', residualPerCustomer: null, notes: '50% personal + 15% override on Sr Reps + 25% on Reps' },
      { level: 4, label: 'Division Leader (60%)', residualPerCustomer: null, notes: '60% personal + overrides on all levels' },
    ],
    monthlyRequirement: 'Active insurance license required',
    qualificationNote: 'Entry-level recurring: Not applicable. Primerica sells insurance/financial products, not consumables with monthly reorders. Reps earn 25% on life insurance sales (e.g., $250 on $1000 annual premium). Renewals provide some residual but vary by product.',
    simpleSummary: 'Primerica is an insurance/financial services MLM. Representatives earn 25% commission on life insurance, scaling to 60% at Division Leader. Overrides on team sales: Dist Leaders earn 25% on Reps, 15% on Sr Reps. Average rep earned $8,199 in 2025.',
    teamSizeNeeded: {
      goal1000: null,
      goal3000: null,
      goal10000: null,
      assumptions: 'Commission-based insurance sales. No monthly product residual—insurance is not a consumable with recurring orders.',
    },
    sourceUrl: 'https://www.primerica.com/public/primerica_disclosures.html',
    keyGotchas: [
      'Insurance sales, not consumable products—no monthly reorder residual',
      'Requires state insurance license ($200-500 to obtain)',
      'Must pass securities exams for investment products',
      '$99 startup fee plus licensing costs',
      'Average rep earned $8,199 (Jan 1 - Dec 31, 2025)',
    ],
  },
  {
    companySlug: 'melaleuca',
    companyName: 'Melaleuca',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 3.50,
    levels: [
      { level: 1, label: 'Product Intro (1st month)', residualPerCustomer: 25, notes: '50% of Product Points on first order' },
      { level: 2, label: '1-7 customers (ongoing)', residualPerCustomer: 3.50, notes: '7% of $50 order' },
      { level: 3, label: '8-19 customers', residualPerCustomer: 7, notes: '14% of $50 order' },
      { level: 4, label: '20+ customers (20/20 Bonus)', residualPerCustomer: 10, notes: '20% + one-time $500 bonus' },
      { level: 5, label: 'Organization commissions', residualPerCustomer: 3.50, notes: '7% on organization purchases' },
    ],
    monthlyRequirement: '35 Product Points (~$55-70/month)',
    qualificationNote: 'Product Introduction Commission pays 50% of PP on customer first month. Ongoing commission scales: 7% (1-7 customers), 14% (8-19), 20% (20+). 20/20 Bonus: hit 20 customers in 4 months = $500 bonus + 20% ongoing rate.',
    simpleSummary: 'Melaleuca pays 50% on customer first-month orders, then 7-20% ongoing based on your customer count. 20/20 Bonus rewards reaching 20 customers in 4 months with $500 + 20% permanent rate. Organization commission is 7%.',
    teamSizeNeeded: {
      goal1000: 100,
      goal3000: 300,
      goal10000: 1000,
      assumptions: 'Based on $10 per customer at 20% rate (20+ customers). First-month orders earn 50% ($25 on $50).',
    },
    sourceUrl: 'https://cdnus.melaleuca.com/PDF/BusinessCenter/enus/melaleuca-compensation-book-enus.pdf',
    keyGotchas: [
      '82% of members earned $0 (per income disclosure)',
      'Product Advocates average $110-520/year (2024 IDS); Director 1-2 average $2,191/year',
      '50% Product Introduction Commission on first-month orders only',
      '35 product point monthly minimum to stay qualified',
      '20/20 Bonus: 20 customers in 4 months = $500 bonus + permanent 20% rate',
    ],
  },
  {
    companySlug: 'usana-health-sciences',
    companyName: 'USANA Health Sciences',
    lastUpdated: '2026-03-21',
    directCustomerResidual: null,
    levels: [
      { level: 1, label: 'Binary commission', residualPerCustomer: null, notes: '20% of lesser leg SVP weekly (min 125 SVP)' },
      { level: 2, label: 'Example: 300/700 SVP', residualPerCustomer: null, notes: '20% of 300 = $60/week' },
      { level: 3, label: 'Fast Start (Oct 2025+)', residualPerCustomer: 10, notes: '10% bonus on first 6 months of purchases ($10 per $100)' },
      { level: 4, label: 'Matching bonus', residualPerCustomer: null, notes: 'Up to 15% lifetime on sponsored associates' },
    ],
    monthlyRequirement: '100 PSV per Rolling 4-Week Period',
    qualificationNote: 'Entry-level recurring: Cannot calculate. USANA uses a binary plan where you earn 20% of the lesser leg SVP weekly (min 125 SVP to qualify). Your earnings depend on team balance, not individual customer orders. October 2025 adds 10% Fast Start on new customer purchases for 6 months.',
    simpleSummary: 'USANA uses a binary plan paying 20% of the lesser leg SVP weekly. Up to 15% lifetime matching bonus on sponsored associates. October 2025 update adds 10% Fast Start on first 6 months of new customer/partner purchases.',
    teamSizeNeeded: {
      goal1000: null,
      goal3000: null,
      goal10000: null,
      assumptions: 'Binary compensation depends on balancing two legs. Cannot calculate fixed per-customer residual.',
    },
    sourceUrl: 'https://www.usana.com/static/images/na/Training/CompensationPlan/CompPlan-US-CA-EN.pdf',
    keyGotchas: [
      'Binary model requires balancing two legs—earnings depend on weaker leg volume',
      '20% commission on lesser leg SVP (minimum 125 SVP to qualify each week)',
      'Per-customer residual is not meaningful in binary plans—team structure matters more',
      'October 2025 plan adds 10% Fast Start + 3 new Milestone Bonuses',
      'Net income fell from $124.7M (2021) to $54.3M (2024)',
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
      { level: 3, label: 'Cycle bonus', residualPerCustomer: null, notes: '$54 per cycle (600/300 BV); paid weekly' },
      { level: 4, label: 'Executive Matching', residualPerCustomer: null, notes: '10% on Paid-As Consultant+ weekly Team bonus' },
    ],
    monthlyRequirement: '100 BV (~$100-150/month)',
    qualificationNote: 'Comp plan effective January 1, 2024. Isagenix has paid $4B+ in commissions. Cycles pay $54/week when you accumulate 600 BV on one leg and 300 BV on the other. Executive Matching = 10% on team\'s weekly bonus.',
    simpleSummary: 'Isagenix pays 20% Product Introduction Bonus on new customer first orders, plus 20% ongoing retail. Cycle bonuses ($54 each, weekly) require 600/300 BV split. Rank advancement bonuses total up to $10,550.',
    teamSizeNeeded: {
      goal1000: 100,
      goal3000: 300,
      goal10000: 1000,
      assumptions: 'Based on $10 per customer at 20% commission on $50 orders. Cycle bonuses add team-based income.',
    },
    sourceUrl: 'https://www.isagenix.com/en-us/~/media/C4BBC4AB0EBF4DCA965CDE479CFA23ED',
    keyGotchas: [
      'Comp plan effective January 1, 2024; $4B+ in total commissions paid',
      'Binary structure requires building two legs (600/300 BV for cycles)',
      '$54 cycle bonus paid weekly; up to 250 cycles/week with Executive Matching',
      'Rank advancement bonuses: $50 (Consultant) to $3,000 (3-Star) = $10,550 total',
      '10% Executive Matching on Paid-As Consultant/Manager/Director/Executive team bonus',
    ],
  },
  {
    companySlug: 'rodan-fields',
    companyName: 'Rodan + Fields',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 15,
    levels: [
      { level: 1, label: 'Affiliate commission (2024+)', residualPerCustomer: 15, notes: '30% on all sales (no limit)' },
      { level: 2, label: 'Product discount', residualPerCustomer: null, notes: '30% discount on personal purchases' },
      { level: 3, label: 'Former MLM structure', residualPerCustomer: null, notes: 'ENDED September 2024' },
    ],
    monthlyRequirement: '$9.99/year affiliate fee',
    qualificationNote: 'R+F ended MLM September 1, 2024. Now single-level affiliate: 30% commission on all sales (no limit) + 30% product discount. $9.99 annual fee. Over 90% of former consultants have "higher earning potential" under new model per R+F.',
    simpleSummary: 'Rodan + Fields ended its MLM model September 1, 2024. Now a single-level affiliate program: 30% commission on all sales with no cap, 30% product discount, $9.99/year fee. Multi-level downline income was eliminated overnight.',
    teamSizeNeeded: {
      goal1000: 67,
      goal3000: 200,
      goal10000: 667,
      assumptions: 'Based on $15 per $50 sale at 30% affiliate commission. No team building income available.',
    },
    sourceUrl: 'https://www.rodanandfields.com/en-us/blog/uncategorized/rodan-fields-business-changes-and-what-they-mean-for-you/',
    keyGotchas: [
      'ENDED MLM model September 1, 2024 - transitioned to single-level affiliate',
      '30% affiliate commission on all sales + 30% product discount',
      '$9.99 annual fee to participate (down from $75 starter kit)',
      'R+F received up to $75M in new funding for the transition',
      'Example of MLM income disappearing with company decisions - no more downline income',
    ],
  },
  {
    companySlug: 'lularoe',
    companyName: 'LuLaRoe',
    lastUpdated: '2026-03-21',
    directCustomerResidual: null,
    levels: [
      { level: 1, label: 'Retail profit', residualPerCustomer: null, notes: 'Buy wholesale, sell at markup (varies by item, est. 35% commission payout)' },
      { level: 2, label: 'Leadership pool', residualPerCustomer: null, notes: 'Team-based bonus pool qualification (9.63% participated in 2024)' },
    ],
    monthlyRequirement: 'Inventory purchases required',
    qualificationNote: 'Entry-level recurring: Not applicable. LuLaRoe is inventory-based—you buy clothing wholesale ($499 starter kit) and sell at markup. No monthly reorder residual like consumable MLMs. 2024 median gross profit: $1,046 (avg $10,897 skewed by top sellers).',
    simpleSummary: 'LuLaRoe uses an inventory-based retail model. 2024 average gross profit: $10,897 (median: $1,046 - skewed by top sellers). Leadership Compensation Plan participation: 9.63% in 2024. Expenses can be hundreds to thousands annually.',
    teamSizeNeeded: {
      goal1000: null,
      goal3000: null,
      goal10000: null,
      assumptions: 'Inventory-based retail—no monthly customer reorder residual. Profit depends on selling what you bought.',
    },
    sourceUrl: 'https://lularoe.com/pages/income-disclosure-statement',
    keyGotchas: [
      'Inventory-based model—no recurring monthly residual like consumable MLMs',
      '$499 startup kit required for 65 pieces of inventory',
      '2024 median gross profit: $1,046 (avg $10,897 heavily skewed by top sellers)',
      'Only 9.63% participated in Leadership Compensation Plan in 2024',
      'Inventory risk—unsold clothing is a direct loss',
    ],
  },
  {
    companySlug: 'plexus-worldwide',
    companyName: 'Plexus Worldwide',
    lastUpdated: '2026-03-21',
    directCustomerResidual: null,
    levels: [
      { level: 1, label: 'Under 100 PV', residualPerCustomer: 0, notes: '0% retail commission—must hit 100 PV first' },
      { level: 2, label: '100-499 PV tier', residualPerCustomer: 7.50, notes: '15% on volume ABOVE 100 PV ($50 order = $7.50)' },
      { level: 3, label: '500+ PV tier', residualPerCustomer: 12.50, notes: '25% on volume ABOVE 100 PV ($50 order = $12.50)' },
      { level: 4, label: 'BBB (new VIP orders)', residualPerCustomer: 10, notes: '20% Business Building Bonus on new VIP 100+ PV initial orders' },
    ],
    monthlyRequirement: '100 PV + Plexus Annual Membership ($39.95)',
    qualificationNote: 'Entry-level recurring: $0 until you hit 100 PV, then 15% on volume above 100 PV. Rate scales to 25% at 500+ PV. Key gotcha: you only earn commission on PV exceeding 100, not on the first 100 PV. 2024 average Active Ambassador earnings: $2,952.',
    simpleSummary: 'Plexus pays 0-25% retail commission based on monthly PV tier. You must hit 100 PV to earn anything, then earn only on volume above 100 PV. Business Building Bonus pays 20% on new VIP customer first 100+ PV orders. 2024 average active earnings: $2,952.',
    teamSizeNeeded: {
      goal1000: null,
      goal3000: null,
      goal10000: null,
      assumptions: 'Commission structure (0% until 100 PV, then % on excess) makes per-customer residual unpredictable.',
    },
    sourceUrl: 'https://helpcenter.plexusworldwide.com/hc/en-us/articles/360018731252-Brand-Ambassador-Compensation-Plan',
    keyGotchas: [
      'You earn $0 commission until you hit 100 PV monthly',
      'Commission is only earned on PV exceeding 100, not the first 100 PV',
      '2024 average Active Ambassador earnings: $2,952 (before expenses)',
      'Must hit 500+ PV monthly for 25% commission rate (vs 15% at 100-499 PV)',
      'Plexus Annual Membership ($39.95) required to remain qualified',
    ],
  },
  {
    companySlug: 'forever-living-products',
    companyName: 'Forever Living Products',
    lastUpdated: '2026-03-21',
    directCustomerResidual: 5,
    levels: [
      { level: 1, label: 'New distributor (5%)', residualPerCustomer: 5, notes: '5% retail margin on $100 order = $5 (entry level)' },
      { level: 2, label: 'Wholesale Qualified (30%)', residualPerCustomer: 30, notes: '30% margin after 2CC in 2 months ($100 = $30)' },
      { level: 3, label: 'Manager (team commissions)', residualPerCustomer: null, notes: '18% on Manager volume + 5-13% overrides' },
      { level: 4, label: 'Leadership Bonus', residualPerCustomer: null, notes: '6%/3%/2% on 3 generations of Managers' },
    ],
    monthlyRequirement: '2 Case Credits in 2 months for wholesale',
    qualificationNote: 'Entry-level recurring: $5 per $100 order (5% margin). New distributors start at 5% discount. After purchasing 2 Case Credits in 2 consecutive months, you become Wholesale Qualified (30% margin = $30 per $100). Comp plan unchanged since 2010.',
    simpleSummary: 'Forever Living pays 5-30% based on discount level. New distributors start at 5%; Wholesale Qualified (2CC in 2 months) unlocks 30%. Managers earn 18% on volume + 5-13% overrides. Leadership Bonus: 6%/3%/2% on 3 generations. Est. $595M annual commissions (35% payout).',
    teamSizeNeeded: {
      goal1000: 200,
      goal3000: 600,
      goal10000: 2000,
      assumptions: 'Based on $5 per $100 order at entry-level 5%. Wholesale Qualified (30%) earns $30 per $100.',
    },
    sourceUrl: 'https://cdn.foreverliving.com/content/staticpages/pdfs/footer_staticpage_pdf_1581937518166.pdf',
    keyGotchas: [
      'Entry level is only 5% margin—must purchase 2CC in 2 months for 30%',
      'Compensation plan unchanged since 2010',
      'Novus Customers (15% discount) provide you 15% bonus on their orders',
      'Leadership Bonus: 6% Gen1, 3% Gen2, 2% Gen3 (Manager+ only)',
      'Estimated $595M in annual commissions (35% payout rate)',
    ],
  },
  {
    companySlug: 'scentsy',
    companyName: 'Scentsy',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 12.50,
    levels: [
      { level: 1, label: 'New Consultant (under 1,000 PRV)', residualPerCustomer: 10, notes: '20% on $50 order' },
      { level: 2, label: 'Certified (250+ PRV/month)', residualPerCustomer: 12.50, notes: '25% on $50 order' },
      { level: 3, label: 'Volume Bonus (2,500+ PRV)', residualPerCustomer: null, notes: 'Additional 5% bonus' },
      { level: 4, label: 'Maximum with bonuses', residualPerCustomer: 18, notes: 'Up to 36% (25% + 9% rank + 2% volume)' },
    ],
    monthlyRequirement: '250 PRV (~$250/month) for Active status (April 2025+)',
    qualificationNote: 'April 2025 changes: Active status now requires 250 PRV (up from 200). Below 250 PRV = 20% commission and no bonuses. Certified Consultants at 250+ PRV earn 25%. Volume bonus at 2,500+ PRV adds 5%.',
    simpleSummary: 'Scentsy pays 20-25% base commission: 20% for new/inactive, 25% for Certified (250+ PRV monthly). Up to 36% total with volume + rank bonuses. April 2025 increased monthly requirement to 250 PRV. Consultants earn 10-36% total.',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 800,
      assumptions: 'Based on $12.50 per $50 customer order at 25% Certified rate.',
    },
    sourceUrl: 'https://scentsy.com/join/compensation-and-income-disclosure',
    keyGotchas: [
      'April 2025: Active status now requires 250 PRV (up from 200)',
      'Monthly Sales Award Bonus now requires 2,500 PRV (up from 2,000)',
      'Below 250 PRV monthly = only 20% commission, no bonuses',
      'Wax warmers are durable goods - may limit repeat purchases',
      'Consultants earn between 10% and 36% total on personal sales',
    ],
  },
  {
    companySlug: 'pampered-chef',
    companyName: 'Pampered Chef',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 10,
    levels: [
      { level: 1, label: 'Base commission', residualPerCustomer: 10, notes: '20% on $50 order' },
      { level: 2, label: 'After $15K career sales', residualPerCustomer: 11, notes: '22% (20% + 2% monthly bonus)' },
      { level: 3, label: 'Top tier', residualPerCustomer: 13.50, notes: 'Up to 27% for Directors' },
      { level: 4, label: 'Team building', residualPerCustomer: null, notes: 'Up to 33% with team commissions' },
    ],
    monthlyRequirement: '$30 in sales every 6 months',
    qualificationNote: 'Low maintenance: just $30 in sales per 6 months. Commission: 20% base, +2% monthly bonus after $15K career sales, up to 27% for Directors, 33% with team. 2024 startup costs: $70-320 for kit.',
    simpleSummary: 'Pampered Chef pays 20-27% commission on personal sales (33% with team). After $15,000 career sales, earn extra 2% monthly. Typical Active Consultant earns $0-262 annually (Canada 2024). 28% of consultants were not Active and earned $0.',
    teamSizeNeeded: {
      goal1000: 100,
      goal3000: 300,
      goal10000: 1000,
      assumptions: 'Based on $10 per $50 sale at 20% base rate. Higher career sales unlock +2%.',
    },
    sourceUrl: 'https://www.pamperedchef.com/iceberg/com/bac/us-careerplanchart.pdf',
    keyGotchas: [
      'Kitchen tools are durable - limited repeat customer purchases',
      'Typical Active Consultant earned $0-262 annually (Canada 2024)',
      '28% of consultants were not Active and earned $0',
      '2024 startup kit options: $70, $200, or $320',
      'All income earned on product sales - no recruiting commissions',
    ],
  },
  {
    companySlug: 'arbonne-international',
    companyName: 'Arbonne International',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 17.50,
    levels: [
      { level: 1, label: 'Client commission', residualPerCustomer: 17.50, notes: '35% on $50 Client order (paid weekly)' },
      { level: 2, label: 'Preferred Client commission', residualPerCustomer: 7.50, notes: '15% on $50 Preferred Client order' },
      { level: 3, label: 'District Manager override', residualPerCustomer: null, notes: '8% on OV (personal + registered clients)' },
    ],
    monthlyRequirement: '150 PQV monthly (or 100 PQV avg over 12 months)',
    qualificationNote: 'Client Commission: 35% of SRP (paid weekly). Preferred Client Commission: 15% of SRP. Most ranks require 150 PQV monthly; ICs can qualify with 100 PQV averaged over 12 months. District Manager+ gets 8% override on OV.',
    simpleSummary: 'Arbonne pays 35% on Client orders and 15% on Preferred Client orders (weekly). District Managers earn 8% override on organization volume. Modified unilevel structure uses generations within levels. Vegan/clean beauty positioning.',
    teamSizeNeeded: {
      goal1000: 57,
      goal3000: 171,
      goal10000: 571,
      assumptions: 'Based on $17.50 profit per $50 Client order at 35%. Preferred Clients earn less (15%).',
    },
    sourceUrl: 'https://www.arbonne.com/us/en/earnings',
    keyGotchas: [
      'Client Commission: 35% of SRP (paid weekly)',
      'Preferred Client Commission: 15% of SRP (paid weekly)',
      'Must generate 150 PQV monthly for most qualifications (500 PQV for paid-as overrides)',
      'District Manager+ earns 8% override on Organization Volume',
      'Vegan/clean beauty positioning appeals to niche market',
    ],
  },
  {
    companySlug: 'four-life-research',
    companyName: '4Life Research',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 12.50,
    levels: [
      { level: 1, label: 'Rapid Rewards (first order)', residualPerCustomer: 12.50, notes: '25% on new customer first LP order (paid daily)' },
      { level: 2, label: 'Level 1 ongoing', residualPerCustomer: 1, notes: '2% on ongoing orders' },
      { level: 3, label: 'Level 2 ongoing', residualPerCustomer: 12.50, notes: '25% on ongoing orders' },
      { level: 4, label: 'Level 3 (Builder+)', residualPerCustomer: 2.50, notes: '5% on ongoing orders (requires Builder rank)' },
    ],
    monthlyRequirement: '100 LP (~$100/month)',
    qualificationNote: 'Rapid Rewards pays 25% on first orders (daily). Ongoing residuals: L1 = 2%, L2 = 25%, L3 = 5% (Builder rank). Power Pool = 3% of company monthly LP. Up to 64% payout at highest ranks. Billions paid in commissions.',
    simpleSummary: '4Life pays 25% Rapid Rewards on new customer first orders (paid daily) plus 2-25% ongoing residuals by level. Power Pool is 3% of company monthly sales. Est. $300M revenue (2024) with 35% commission payout (~$105M/year).',
    teamSizeNeeded: {
      goal1000: 80,
      goal3000: 240,
      goal10000: 800,
      assumptions: 'Based on $12.50 Rapid Rewards per new customer first order. Ongoing L1 residuals are only 2%.',
    },
    sourceUrl: 'https://media2.4life.com/document/Life_Rewards_Feb2025_Eng.pdf',
    keyGotchas: [
      'Rapid Rewards (25%) paid daily but only on first customer order',
      'Ongoing Level 1 residuals drop to just 2%',
      'Power Pool = 3% of company monthly LP (requires 3 new distributors with 100 LP for 2 months)',
      'Est. $300M revenue (2024), 35% payout = ~$105M in commissions',
      'Transfer Factor products are niche immune support supplements',
    ],
  },
  {
    companySlug: 'livegood',
    companyName: 'LiveGood',
    lastUpdated: '2026-03-20',
    directCustomerResidual: 0.25,
    levels: [
      { level: 1, label: 'Direct referral (Level 1)', residualPerCustomer: 0.25, notes: '2.5% of $9.95 membership = ~$0.25/member/month' },
      { level: 2, label: 'Level 2', residualPerCustomer: 0.25, notes: '2.5% per level — same rate applies down to 12-15 levels depending on rank' },
      { level: 3, label: 'Levels 3-15', residualPerCustomer: 0.25, notes: '2.5% per level across remaining levels (theoretical max $16,383.50/mo requires full 2x15 matrix)' },
    ],
    monthlyRequirement: '$9.95/month membership fee to stay active',
    qualificationNote: 'Unlike most MLMs, LiveGood does NOT require a monthly product purchase to earn commissions — only the $9.95 membership fee.',
    simpleSummary: 'LiveGood uses a forced 2x15 matrix. You have 2 positions at Level 1, 4 at Level 2, and so on — up to 32,768 positions at Level 15. The catch: your upline fills your matrix from spillover. Earnings are tiny per person ($0.50-$1/month) but theoretically scale with a full matrix. In practice, the forced matrix rewards early joiners most — the later you join, the harder it is to fill your matrix.',
    teamSizeNeeded: {
      goal1000: 4000,
      goal3000: 12000,
      goal10000: 40000,
      assumptions: 'Based on $0.25/member/month (2.5% of $9.95). Assumes active paying members across all levels.',
    },
    sourceUrl: 'https://livegood.com/compensation-plan',
    keyGotchas: [
      'Forced 2x15 matrix heavily favors early joiners — position in matrix is everything',
      'Earnings per person are extremely low ($0.50-$1/month) — requires massive team to earn meaningful income',
      'Matrix spillover from upline sounds appealing but is unpredictable and not guaranteed',
      '$9.95/month membership required — adds up ($119/year) before earning a dollar',
      'No published income disclosure statement as of 2026 — red flag for transparency',
      'Fast-growth companies like LiveGood often see slowdowns — joining late increases risk significantly',
    ],
  },
  {
    companySlug: 'five-rings-financial',
    companyName: 'Five Rings Financial',
    lastUpdated: '2026-03-22',
    directCustomerResidual: 8.00,
    levels: [
      { level: 1, label: 'Direct insurance sale commission', residualPerCustomer: 8.00, notes: 'Estimated ~5-15% override on annual premium; on $160/yr avg term life = ~$8/mo residual' },
      { level: 2, label: 'Downline override', residualPerCustomer: 3.00, notes: 'Override commission on downline agent sales' },
    ],
    monthlyRequirement: 'State insurance license required; monthly fees vary by state',
    qualificationNote: 'Entry-level recurring commission on insurance renewals. Actual amount varies significantly by policy type and premium size. Insurance renewals typically pay 2-5% annually after first year.',
    simpleSummary: 'Five Rings Financial pays commissions on insurance sales plus overrides on downline agents. The recurring residual on an insurance policy is the annual renewal commission — typically 2-5% of premium after the first year. For a $200/yr term life policy, that is $4-10/yr in residual. Building meaningful income requires either large premium clients or a large recruiting downline.',
    teamSizeNeeded: {
      goal1000: null,
      goal3000: null,
      goal10000: null,
      assumptions: 'Too variable to calculate — depends heavily on insurance policy sizes and mix',
    },
    sourceUrl: 'https://fiveringsfinancial.com',
    keyGotchas: [
      'Insurance residuals are paid annually (not monthly) and diminish after year 1',
      'State licensing required before earning — cost and time investment upfront',
      'Company not BBB accredited',
      'Income primarily from recruiting downline agents rather than insurance renewals',
      'No public income disclosure',
    ],
  },
  {
    companySlug: 'mwr-financial',
    companyName: 'MWR Financial (MWR Life)',
    lastUpdated: '2026-03-22',
    directCustomerResidual: 5.00,
    levels: [
      { level: 1, label: 'Financial Edge subscription commission', residualPerCustomer: 5.00, notes: 'Estimated commission on ~$30-50/mo Financial Edge subscription' },
      { level: 2, label: 'Binary downline volume', residualPerCustomer: 3.00, notes: 'Binary override on lesser leg volume' },
    ],
    monthlyRequirement: 'Monthly Financial Edge subscription required to earn commissions',
    qualificationNote: 'Binary compensation plan — requires balanced left/right legs to maximize commissions. Unbalanced binary means commissions on stronger leg are lost.',
    simpleSummary: 'MWR Financial uses a binary compensation structure where you have a left and right team. You earn a percentage of the lesser leg volume. This means if your right leg is much larger than your left, the excess volume on the right leg does nothing — you only earn on the balanced portion. This is a structural feature that creates predictable commission loss.',
    teamSizeNeeded: {
      goal1000: 200,
      goal3000: 600,
      goal10000: null,
      assumptions: 'Estimated based on binary structure with ~$5/customer/month. Binary balancing makes actual calculations complex.',
    },
    sourceUrl: 'https://mwrfinancial.com',
    keyGotchas: [
      'Binary structure means unbalanced legs forfeit commissions to the company (breakage)',
      'Monthly subscription required to earn commissions',
      'Company has rebranded multiple times — stability concern',
      'Compensation plan complexity makes actual earnings difficult to calculate',
      'No public income disclosure',
    ],
  },
  {
    companySlug: 'unicity-international',
    companyName: 'Unicity International',
    lastUpdated: '2026-03-22',
    directCustomerResidual: 9.00,
    levels: [
      { level: 1, label: 'Direct customer commission', residualPerCustomer: 9.00, notes: 'Estimated ~15% on ~$60 avg monthly order' },
      { level: 2, label: 'Level 2 override', residualPerCustomer: 4.00, notes: 'Team development bonus on downline volume' },
      { level: 3, label: 'Level 3 override', residualPerCustomer: 2.00, notes: 'Third level team bonus' },
    ],
    monthlyRequirement: 'Auto-order recommended to qualify for full commissions; $40 entry fee',
    qualificationNote: 'Three-level compensation structure. Full details not publicly disclosed. Commission rates estimated from available public information.',
    simpleSummary: 'Unicity uses a three-level compensation plan where you earn commissions on your direct customers and overrides on your team. The compensation plan is not fully disclosed publicly, which makes it difficult to calculate exact earnings. Estimated at ~15% on direct customer orders.',
    teamSizeNeeded: {
      goal1000: 112,
      goal3000: 334,
      goal10000: null,
      assumptions: 'Based on estimated $9/customer/month direct commission. Does not account for team overrides.',
    },
    sourceUrl: 'https://unicity.com/usa/en/opportunity',
    keyGotchas: [
      'Compensation plan not fully disclosed to public',
      'Products significantly more expensive than retail alternatives',
      'No public income disclosure statement',
      'Team development bonuses create strong recruiting incentive',
      'Auto-order recommended to maintain commission qualification',
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
