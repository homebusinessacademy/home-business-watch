export interface ScamComplaint {
  complaint: string;
  verdict: 'legitimate_concern' | 'business_model' | 'exaggerated' | 'fraud';
}

export interface ScamData {
  companySlug: string;
  companyName: string;
  isActualScam: boolean;
  directAnswer: string;
  topComplaints: ScamComplaint[];
  legalRecord: string;
  verdict: string;
}

export const scamData: ScamData[] = [
  {
    companySlug: 'amway',
    companyName: 'Amway',
    isActualScam: false,
    directAnswer: 'No, Amway is not a scam. They sell real consumer products and have operated legally since 1959. The FTC investigated them in 1979 and ruled they are a legitimate MLM, not a pyramid scheme.',
    topComplaints: [
      { complaint: 'Income opportunity exaggerated by upline recruiters who show lifestyle without showing actual income disclosures', verdict: 'legitimate_concern' },
      { complaint: 'Pressure to buy tools, training materials, and event tickets from upline-owned companies', verdict: 'legitimate_concern' },
      { complaint: 'Monthly 100 PV requirement (~$300-400) to remain qualified for commissions', verdict: 'business_model' },
      { complaint: 'Losing downline volume when team members advance (breakaway structure)', verdict: 'business_model' },
      { complaint: 'Products are overpriced compared to retail alternatives', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'FTC vs Amway (1979): Ruled legitimate MLM, not pyramid scheme. $56M settlement (2010) with distributors over income claims from tools/training system. Various international regulatory actions over the years but company continues operating legally.',
    verdict: 'Amway is not a scam - they sell real products and the FTC cleared them. The real concerns are the high monthly costs to stay qualified, the tools/training expense pushed by uplines, and income claims that rarely reflect reality for most participants.',
  },
  {
    companySlug: 'herbalife',
    companyName: 'Herbalife',
    isActualScam: false,
    directAnswer: 'No, Herbalife is not a scam in the legal sense. The FTC investigated them thoroughly and required a $200M settlement and restructuring in 2016, but explicitly did not label them a pyramid scheme.',
    topComplaints: [
      { complaint: 'Income claims by distributors are often misleading - most earn little to nothing', verdict: 'legitimate_concern' },
      { complaint: 'High startup costs to reach Supervisor level ($4,000 in purchases required)', verdict: 'business_model' },
      { complaint: 'Pressure to recruit rather than focus on retail sales', verdict: 'legitimate_concern' },
      { complaint: 'Products cost significantly more than comparable nutrition products', verdict: 'legitimate_concern' },
      { complaint: 'Nutrition club model requires significant ongoing investment', verdict: 'business_model' },
    ],
    legalRecord: '$200M FTC settlement (2016) for deceptive practices - required major business restructuring. FTC explicitly declined to call them a pyramid scheme. Multiple state investigations over the years. Bill Ackman publicly accused them of being a pyramid scheme but lost his short position.',
    verdict: 'Herbalife is not a scam - they sell real nutrition products and the FTC chose not to shut them down. The $200M settlement shows significant past issues. Focus on whether the business model math works for you, not whether it is fraud.',
  },
  {
    companySlug: 'doterra',
    companyName: 'doTERRA',
    isActualScam: false,
    directAnswer: 'No, doTERRA is not a scam. They sell real essential oil products to millions of customers and have operated legally since 2008. No major FTC action has been taken against them.',
    topComplaints: [
      { complaint: 'Required 100 PV/month (~$100-150) personal purchase to earn commissions', verdict: 'business_model' },
      { complaint: 'Income claims by Wellness Advocates often unrealistic for new participants', verdict: 'legitimate_concern' },
      { complaint: 'Cult-like culture at conventions and team events', verdict: 'exaggerated' },
      { complaint: 'Distributors make unauthorized health claims about essential oils', verdict: 'legitimate_concern' },
      { complaint: 'June 2025 Elevated comp plan increases recruitment requirements', verdict: 'business_model' },
    ],
    legalRecord: 'FDA warning letters sent to distributors for unauthorized health claims about essential oils. No major FTC action against the company itself. Generally clean regulatory record compared to other MLMs.',
    verdict: 'doTERRA is not a scam - real products with real customers. The complaints center on the business model economics: monthly purchase requirements, low per-customer residual (~$6.25 per order), and unrealistic income expectations set by recruiters.',
  },
  {
    companySlug: 'young-living',
    companyName: 'Young Living',
    isActualScam: false,
    directAnswer: 'No, Young Living is not a scam. They sell real essential oil products and have operated legally since 1993. The company has faced FDA warnings but not fraud charges.',
    topComplaints: [
      { complaint: 'Income disclosure shows ~94% of business builders earn median of $4/year', verdict: 'legitimate_concern' },
      { complaint: '100 PV monthly requirement to stay qualified', verdict: 'business_model' },
      { complaint: 'Distributors make unauthorized therapeutic claims about oils', verdict: 'legitimate_concern' },
      { complaint: 'Prices significantly higher than competitors for similar oils', verdict: 'legitimate_concern' },
      { complaint: 'Aggressive non-compete clause specifically targets doTERRA', verdict: 'business_model' },
    ],
    legalRecord: 'Multiple FDA warning letters for unauthorized health claims by distributors. No major FTC fraud action. Founder had controversial background but company operates legally.',
    verdict: 'Young Living is not a scam - they have real products. The concerning data point is their own income disclosure: 94% of active distributors earn essentially nothing. That is not fraud, but it is an important fact.',
  },
  {
    companySlug: 'mary-kay',
    companyName: 'Mary Kay',
    isActualScam: false,
    directAnswer: 'No, Mary Kay is not a scam. They sell real cosmetics products and have operated legally since 1963. The primary income method is genuine retail profit (50% margin), not recruitment.',
    topComplaints: [
      { complaint: 'Pressure to purchase large inventory upfront before building customer base', verdict: 'legitimate_concern' },
      { complaint: 'Pink Cadillac requires maintaining volume or you pay the lease difference', verdict: 'business_model' },
      { complaint: 'Directors face chargebacks when recruits return products', verdict: 'business_model' },
      { complaint: 'Outdated direct sales model struggles against online retail', verdict: 'legitimate_concern' },
      { complaint: 'Pressure to recruit comes primarily from upline, not company', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Clean regulatory record with no major FTC actions. Occasional lawsuits from individual consultants but no systemic fraud findings. One of the older and more established direct sales companies.',
    verdict: 'Mary Kay is not a scam - the 50% retail margin is actually strong by industry standards. The main risks are inventory pressure, car payment penalties if volume drops, and the declining relevance of door-to-door cosmetics sales.',
  },
  {
    companySlug: 'monat-global',
    companyName: 'MONAT Global',
    isActualScam: false,
    directAnswer: 'No, MONAT is not a scam in the legal sense. They sell real hair care products. The controversies center on product liability claims and income expectations, not deliberate fraud.',
    topComplaints: [
      { complaint: 'Multiple class action lawsuits claiming products caused hair loss and scalp damage', verdict: 'legitimate_concern' },
      { complaint: '41% of Market Partners earned $0 in 2024 per income disclosure', verdict: 'legitimate_concern' },
      { complaint: 'Average Market Partner earns $758/year before expenses', verdict: 'business_model' },
      { complaint: 'Aggressive social media marketing tactics by distributors', verdict: 'legitimate_concern' },
      { complaint: 'High product prices compared to salon alternatives', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Multiple class action lawsuits over product safety (hair loss claims) - some settled. BBB rating dropped due to complaints. No major FTC fraud action.',
    verdict: 'MONAT is not a scam - they deliver real products. The real concerns are the product liability lawsuits (though disputed by the company) and the income reality where 41% earn nothing. Those are legitimate complaints, not fraud.',
  },
  {
    companySlug: 'nu-skin-enterprises',
    companyName: 'Nu Skin Enterprises',
    isActualScam: false,
    directAnswer: 'No, Nu Skin is not a scam. They are a publicly traded company (NYSE: NUS) with SEC oversight, selling real skincare and nutrition products since 1984.',
    topComplaints: [
      { complaint: 'Only 24.67% of Brand Affiliates were "Active" in 2024', verdict: 'legitimate_concern' },
      { complaint: 'Company net income dropped from $124.7M (2021) to $54.3M (2024)', verdict: 'legitimate_concern' },
      { complaint: 'Complex block-based compensation makes earnings unpredictable', verdict: 'business_model' },
      { complaint: 'Paid $47M FTC fine in 1994 for income claims in China', verdict: 'legitimate_concern' },
      { complaint: 'High-ticket devices (LumiSpa, ageLOC) require significant customer investment', verdict: 'business_model' },
    ],
    legalRecord: '$47M FTC fine (1994) related to China operations and income claims. Various international regulatory issues. As a public company, subject to SEC oversight. Stock price has declined significantly from 2018 highs.',
    verdict: 'Nu Skin is not a scam - public companies have real oversight. The concerns are declining company profits, complex compensation, and low distributor activity rates. These are business model issues, not fraud.',
  },
  {
    companySlug: 'avon-products',
    companyName: 'Avon Products',
    isActualScam: false,
    directAnswer: 'No, Avon is not a scam. They have sold real beauty products since 1886 and pioneered door-to-door direct sales. The company has faced financial struggles but not fraud accusations.',
    topComplaints: [
      { complaint: 'Company has changed ownership multiple times and faced bankruptcy concerns', verdict: 'legitimate_concern' },
      { complaint: 'January 2025 compensation restructure changed commission calculations', verdict: 'business_model' },
      { complaint: 'Direct sales model increasingly outdated in e-commerce era', verdict: 'legitimate_concern' },
      { complaint: 'Variable per-campaign commissions make income unpredictable', verdict: 'business_model' },
      { complaint: 'Star Promoter bonuses require team building to unlock', verdict: 'business_model' },
    ],
    legalRecord: 'Clean fraud record. Company financial struggles led to acquisition by Natura (2020). Various corporate restructurings but no regulatory fraud actions.',
    verdict: 'Avon is not a scam - they are one of the oldest direct sales companies with real products. The concerns are about the company\'s financial health and whether the door-to-door model remains viable, not about fraud.',
  },
  {
    companySlug: 'primerica',
    companyName: 'Primerica',
    isActualScam: false,
    directAnswer: 'No, Primerica is not a scam. They sell regulated financial products (life insurance, investments), representatives must be state-licensed, and the company is publicly traded (NYSE: PRI).',
    topComplaints: [
      { complaint: 'Captive agent model - can only sell Primerica products, limiting options for clients', verdict: 'legitimate_concern' },
      { complaint: 'Starting commission rates (25%) are low compared to independent agents', verdict: 'business_model' },
      { complaint: 'Licensing costs ($200-500+) come out of your pocket before earning', verdict: 'business_model' },
      { complaint: 'Client relationships belong to Primerica if you leave', verdict: 'legitimate_concern' },
      { complaint: 'Heavy emphasis on recruiting rather than insurance sales', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Subject to state insurance department regulation and FINRA oversight. Some individual agent violations over the years but no systemic fraud findings. Publicly traded with SEC oversight.',
    verdict: 'Primerica is not a scam - they sell legitimate, regulated financial products. The concerns are about the captive agent restrictions, low starting commissions, and whether you could do better as an independent agent. These are career choice issues, not fraud.',
  },
  {
    companySlug: 'melaleuca',
    companyName: 'Melaleuca',
    isActualScam: false,
    directAnswer: 'No, Melaleuca is not a scam. They sell real wellness and household products and position themselves as a "consumer direct" company rather than a traditional MLM.',
    topComplaints: [
      { complaint: '82% of members earned $0 in commissions per income disclosure', verdict: 'legitimate_concern' },
      { complaint: 'Monthly 35 Product Points (~$55-70) required to stay qualified', verdict: 'business_model' },
      { complaint: 'Ongoing commission drops from 50% first-month to just 7%', verdict: 'business_model' },
      { complaint: 'Must reach 20+ personal customers for 20% ongoing commission', verdict: 'business_model' },
      { complaint: 'Products are good but not significantly better than retail alternatives', verdict: 'exaggerated' },
    ],
    legalRecord: 'Clean regulatory record. Company emphasizes customer focus over recruiting. No major FTC actions or fraud findings.',
    verdict: 'Melaleuca is not a scam - they focus more on customer retention than typical MLMs. The math is challenging: 50% drops to 7% after the first month, and 82% earn nothing. That is the business model reality, not fraud.',
  },
  {
    companySlug: 'usana-health-sciences',
    companyName: 'USANA Health Sciences',
    isActualScam: false,
    directAnswer: 'No, USANA is not a scam. They are a publicly traded company (NYSE: USNA) selling real nutritional supplements and skincare products since 1992.',
    topComplaints: [
      { complaint: 'Binary compensation model requires balancing two legs to maximize earnings', verdict: 'business_model' },
      { complaint: 'Net income fell from $124.7M (2021) to $54.3M (2024)', verdict: 'legitimate_concern' },
      { complaint: 'Complex Sales Volume Points system makes earnings hard to predict', verdict: 'business_model' },
      { complaint: 'October 2025 plan adds new requirements and complexity', verdict: 'business_model' },
      { complaint: 'Premium pricing limits market for products', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Subject to SEC oversight as a public company. Some international regulatory issues over the years. No major FTC fraud actions in the US.',
    verdict: 'USANA is not a scam - public company oversight adds legitimacy. The concerns are declining profitability, complex binary compensation, and whether the business model works in a competitive supplement market.',
  },
  {
    companySlug: 'isagenix',
    companyName: 'Isagenix',
    isActualScam: false,
    directAnswer: 'No, Isagenix is not a scam. They sell real weight loss and nutrition products and have operated legally since 2002. No major FTC action has been taken against them.',
    topComplaints: [
      { complaint: 'Binary structure requires building two balanced legs to earn', verdict: 'business_model' },
      { complaint: '100 BV monthly (~$100-150) required to stay qualified', verdict: 'business_model' },
      { complaint: 'Premium product pricing limits customer acquisition', verdict: 'legitimate_concern' },
      { complaint: 'Rank advancement bonuses create pressure for rapid team growth', verdict: 'legitimate_concern' },
      { complaint: 'Income claims by top earners not representative of typical results', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Clean regulatory record with no major FTC actions. Company has generally avoided the regulatory scrutiny faced by larger MLMs.',
    verdict: 'Isagenix is not a scam - real products in the wellness space. The challenges are the binary structure difficulty, premium pricing, and typical MLM income distribution where few earn significantly.',
  },
  {
    companySlug: 'rodan-fields',
    companyName: 'Rodan + Fields',
    isActualScam: false,
    directAnswer: 'No, Rodan + Fields is not a scam. They sold real dermatologist-developed skincare products through their MLM model. In September 2024, they ended the MLM structure entirely and became a single-level affiliate program.',
    topComplaints: [
      { complaint: 'Multi-level income eliminated overnight in September 2024 - consultants lost downline income', verdict: 'legitimate_concern' },
      { complaint: 'Years of team building effort became worthless with the transition', verdict: 'legitimate_concern' },
      { complaint: 'No advance notice given to consultants before the change', verdict: 'legitimate_concern' },
      { complaint: 'Premium pricing makes products difficult to sell competitively', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'No major fraud actions. Company made a business decision to end MLM model in 2024. Now operates as a 30% single-level affiliate program.',
    verdict: 'Rodan + Fields was not a scam as an MLM, and certainly is not now as an affiliate program. The important lesson: this case proves MLM "residual income" can disappear with a corporate decision. Build accordingly.',
  },
  {
    companySlug: 'lularoe',
    companyName: 'LuLaRoe',
    isActualScam: false,
    directAnswer: 'No, LuLaRoe is not a scam in the strict legal sense - they sell real clothing products. However, they have faced more legal action than most MLMs, including a Washington state AG lawsuit and settlement.',
    topComplaints: [
      { complaint: 'Failed to honor buyback policies, leaving retailers stuck with unsellable inventory', verdict: 'legitimate_concern' },
      { complaint: 'High defect rates on leggings - ripping, holes, quality issues', verdict: 'legitimate_concern' },
      { complaint: '$499+ minimum inventory purchase to start with no control over patterns', verdict: 'legitimate_concern' },
      { complaint: 'Median gross profit only $1,046/year (2024) while average is $10,897 - heavily skewed', verdict: 'legitimate_concern' },
      { complaint: 'Only 9.63% participated in Leadership Compensation Plan in 2024', verdict: 'business_model' },
    ],
    legalRecord: 'Washington state AG lawsuit (2019) - $4.75M settlement for pyramid scheme allegations. Multiple lawsuits from retailers over inventory and buyback issues. Documentary "LuLaRich" detailed company problems.',
    verdict: 'LuLaRoe is not technically a scam - they sell real products. However, the troubled history of lawsuits, buyback failures, product quality issues, and the $4.75M AG settlement put them among the most controversial MLMs. The median $1,046/year earnings tells the story.',
  },
  {
    companySlug: 'plexus-worldwide',
    companyName: 'Plexus Worldwide',
    isActualScam: false,
    directAnswer: 'No, Plexus is not a scam. They sell real health and wellness products including their popular "Pink Drink" and gut health supplements. No major FTC action has been taken.',
    topComplaints: [
      { complaint: 'Earn 0% commission if under 100 PV monthly - harsh all-or-nothing threshold', verdict: 'business_model' },
      { complaint: 'Must scale to 500+ PV for 25% commission rate', verdict: 'business_model' },
      { complaint: '2024 average Active Ambassador earnings only $2,952/year', verdict: 'legitimate_concern' },
      { complaint: 'FDA warning letters sent for health claims about products', verdict: 'legitimate_concern' },
      { complaint: 'Premium pricing makes customer acquisition challenging', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'FDA warning letters for unauthorized health claims. No major FTC fraud action. Generally lower regulatory profile than larger MLMs.',
    verdict: 'Plexus is not a scam - real products with real customers. The unique concern is the tiered commission where you literally earn 0% below 100 PV. That is harsher than most MLMs and deserves attention.',
  },
  {
    companySlug: 'forever-living-products',
    companyName: 'Forever Living Products',
    isActualScam: false,
    directAnswer: 'No, Forever Living is not a scam. They sell real aloe vera-based health and beauty products and have operated legally since 1978. They are one of the world\'s largest aloe vera product manufacturers.',
    topComplaints: [
      { complaint: 'Only 5% discount at entry level - must invest to reach 30% wholesale pricing', verdict: 'business_model' },
      { complaint: 'Must purchase 2 Case Credits in 2 months to unlock wholesale pricing', verdict: 'business_model' },
      { complaint: 'Aloe vera products have niche market appeal, limiting customer base', verdict: 'legitimate_concern' },
      { complaint: 'International structure can create shipping and inventory challenges', verdict: 'business_model' },
      { complaint: 'Manager rank requirements create pressure to build teams', verdict: 'business_model' },
    ],
    legalRecord: 'Clean regulatory record in the US. Some international regulatory issues. Generally operates without major FTC scrutiny.',
    verdict: 'Forever Living is not a scam - they have been selling real aloe products for 45+ years. The concerns are the tiered discount structure where new distributors earn very little until they invest more.',
  },
  {
    companySlug: 'scentsy',
    companyName: 'Scentsy',
    isActualScam: false,
    directAnswer: 'No, Scentsy is not a scam. They sell real wax warmers and home fragrance products with genuine customer demand. The company has operated legally since 2004.',
    topComplaints: [
      { complaint: 'April 2025: Active status now requires 250 PRV (up from 200)', verdict: 'business_model' },
      { complaint: 'Below 250 PRV monthly = only 20% commission with no bonuses', verdict: 'business_model' },
      { complaint: 'Wax warmers are durable goods - customers do not need to repurchase frequently', verdict: 'legitimate_concern' },
      { complaint: 'Market saturation in some areas with many consultants', verdict: 'legitimate_concern' },
      { complaint: 'Holiday seasonality creates income fluctuation', verdict: 'business_model' },
    ],
    legalRecord: 'Clean regulatory record with no major FTC actions. Generally well-regarded in the direct sales industry.',
    verdict: 'Scentsy is not a scam - real products that customers genuinely like. The main challenges are the April 2025 requirement increases and the durable goods problem: once someone has a warmer, they only need wax refills.',
  },
  {
    companySlug: 'pampered-chef',
    companyName: 'Pampered Chef',
    isActualScam: false,
    directAnswer: 'No, Pampered Chef is not a scam. They sell real kitchen tools and cookware, owned by Berkshire Hathaway since 2002. Warren Buffett does not invest in scams.',
    topComplaints: [
      { complaint: 'Low activity minimum ($30/6 months) but also means low engagement', verdict: 'business_model' },
      { complaint: 'Kitchen tools are durable - limited repeat purchase opportunities', verdict: 'legitimate_concern' },
      { complaint: 'Typical Active Consultant earned $0-262 annually (Canada 2024)', verdict: 'legitimate_concern' },
      { complaint: 'Party-plan model increasingly outdated compared to online shopping', verdict: 'legitimate_concern' },
      { complaint: 'Competition from Amazon and big-box retailers on similar products', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Clean regulatory record. Berkshire Hathaway ownership since 2002 provides corporate legitimacy. No major FTC actions.',
    verdict: 'Pampered Chef is not a scam - the Berkshire Hathaway ownership adds significant legitimacy. The challenges are the durable goods problem (people do not need new pots often) and competition from online retail.',
  },
  {
    companySlug: 'arbonne-international',
    companyName: 'Arbonne International',
    isActualScam: false,
    directAnswer: 'No, Arbonne is not a scam. They sell real vegan, cruelty-free skincare and nutrition products and have operated legally since 1980.',
    topComplaints: [
      { complaint: '150 PQV monthly required for most rank qualifications', verdict: 'business_model' },
      { complaint: '500 PQV required to actually receive team override commissions', verdict: 'business_model' },
      { complaint: 'Preferred Client program (15%) cannibalizes higher-margin Client sales (35%)', verdict: 'business_model' },
      { complaint: 'Premium vegan positioning limits market size', verdict: 'legitimate_concern' },
      { complaint: 'Income claims from top earners not representative of typical results', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Clean regulatory record with no major FTC actions. Company went through bankruptcy restructuring in 2010 but continues operating.',
    verdict: 'Arbonne is not a scam - real products with a genuine vegan/cruelty-free positioning. The strong 35% client commission is offset by dual PQV requirements (150 basic, 500 for overrides) that create significant purchase pressure.',
  },
  {
    companySlug: 'four-life-research',
    companyName: '4Life Research',
    isActualScam: false,
    directAnswer: 'No, 4Life Research is not a scam. They sell real immune support supplements (Transfer Factor products) and have operated legally since 1998.',
    topComplaints: [
      { complaint: 'Ongoing Level 1 commissions drop dramatically from 25% first-order to just 2%', verdict: 'business_model' },
      { complaint: 'Power Pool access requires recruiting 3 new distributors with specific volume', verdict: 'business_model' },
      { complaint: 'Transfer Factor products are niche - limited mainstream market appeal', verdict: 'legitimate_concern' },
      { complaint: 'Constant need for new customers to maintain income due to low residual', verdict: 'business_model' },
      { complaint: 'Health claims about Transfer Factor products can cross regulatory lines', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Clean regulatory record with no major FTC actions. Operates primarily in the immune health supplement niche.',
    verdict: '4Life is not a scam - real products with a specific immune health focus. The structural concern is the dramatic drop from 25% first-order to 2% ongoing, meaning you constantly need new customers to maintain income.',
  },
  {
    companySlug: 'livegood',
    companyName: 'LiveGood',
    isActualScam: false,
    directAnswer: 'No, LiveGood is not technically a scam. They sell real nutritional supplements with a membership model. However, the compensation structure raises concerns about sustainability.',
    topComplaints: [
      { complaint: 'Forced 2x15 matrix heavily favors early joiners - position is everything', verdict: 'legitimate_concern' },
      { complaint: 'No published income disclosure statement as of 2026', verdict: 'legitimate_concern' },
      { complaint: 'Tiny per-member earnings (~$0.25-0.50/month) require massive team for real income', verdict: 'business_model' },
      { complaint: 'Need roughly 4,000 active members in matrix to reach $1,000/month', verdict: 'business_model' },
      { complaint: 'Company is relatively new with limited track record', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'No regulatory actions yet - company is relatively new. Lack of income disclosure is a red flag for transparency. Not yet tested by FTC scrutiny.',
    verdict: 'LiveGood is not a scam in the fraud sense - they sell real supplements. The concerns are the matrix structure heavily favoring early adopters, no income disclosure transparency, and whether the math works for latecomers.',
  },
  {
    companySlug: 'velocity-bank-network',
    companyName: 'Velocity Bank Network',
    isActualScam: true,
    directAnswer: 'Yes - Velocity Bank Network meets the actual definition of a scam and pyramid scheme. There is no real product or service. Money paid by new participants funds returns to earlier participants. This is textbook pyramid scheme mechanics.',
    topComplaints: [
      { complaint: 'No actual product or service - pure peer-to-peer money transfer dressed in crypto language', verdict: 'fraud' },
      { complaint: 'Anonymous founders with no verifiable identities or business registration', verdict: 'fraud' },
      { complaint: '"Two behind one" structure requires infinite recruitment to sustain payouts', verdict: 'fraud' },
      { complaint: 'Claims of $500/day passive income are mathematically impossible without endless new money', verdict: 'fraud' },
      { complaint: 'Unregistered with any financial regulatory body', verdict: 'fraud' },
    ],
    legalRecord: 'Not registered with SEC, FTC, or any state financial regulator. Anonymous operation. No legal business structure. This is the profile of operations that regulators eventually shut down.',
    verdict: 'This is not a home business opportunity. It is a peer-to-peer payment matrix with pyramid scheme mechanics dressed in cryptocurrency language. When recruitment slows - as it always does - participants lose their money. This is a scam.',
  },
  {
    companySlug: 'superone',
    companyName: 'SuperOne (Super.One)',
    isActualScam: true,
    directAnswer: 'Yes — SuperOne displays classic Ponzi scheme characteristics and has a documented history of collapse and rebrand since 2019. Participants from multiple previous versions have been unable to cash out their earnings.',
    topComplaints: [
      { complaint: 'Unable to cash out earnings from previous versions', verdict: 'fraud' },
      { complaint: 'Compensation plan hidden from participants', verdict: 'fraud' },
      { complaint: 'Three relaunch cycles with same structure each time', verdict: 'fraud' },
      { complaint: 'Passive income promises not backed by real revenue', verdict: 'fraud' },
      { complaint: 'Offshore registration makes legal recourse difficult', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'No formal regulatory action as of 2026, likely due to offshore Singapore registration. BehindMLM has documented three review cycles (2020, 2022, 2025) each confirming Ponzi characteristics.',
    verdict: 'SuperOne is one of the more documented Ponzi/MLM hybrids in the crypto-entertainment space. The trivia app is real but does not generate revenue sufficient to support the passive income model. Multiple collapse cycles and participant cashout failures make this a clear avoid.',
  },
];

// Helper to get scam data by slug
export function getScamBySlug(slug: string): ScamData | undefined {
  return scamData.find((s) => s.companySlug === slug);
}

// Helper to check if a company has a scam page
export function hasScamPage(slug: string): boolean {
  return scamData.some((s) => s.companySlug === slug);
}

// Get all scam slugs for static generation
export function getAllScamSlugs(): string[] {
  return scamData.map((s) => s.companySlug);
}

// Get scam data sorted (actual scams last, then alphabetically)
export function getScamDataSorted(): ScamData[] {
  return [...scamData].sort((a, b) => {
    // Put actual scams last
    if (a.isActualScam && !b.isActualScam) return 1;
    if (!a.isActualScam && b.isActualScam) return -1;
    // Alphabetically
    return a.companyName.localeCompare(b.companyName);
  });
}
