export interface ScamComplaint {
  complaint: string;
  verdict: 'legitimate_concern' | 'business_model' | 'exaggerated' | 'red_flag';
}

export interface ScamData {
  companySlug: string;
  companyName: string;
  isHighRisk: boolean;
  directAnswer: string;
  topComplaints: ScamComplaint[];
  legalRecord: string;
  verdict: string;
}

export const scamData: ScamData[] = [
  {
    companySlug: 'amway',
    companyName: 'Amway',
    isHighRisk: false,
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
    isHighRisk: false,
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
    isHighRisk: false,
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
    isHighRisk: false,
    directAnswer: 'No, Young Living is not a scam. They sell real essential oil products and have operated legally since 1993. The company has faced FDA warnings but not fraud charges.',
    topComplaints: [
      { complaint: '100 PV monthly requirement to stay qualified', verdict: 'business_model' },
      { complaint: 'Distributors make unauthorized therapeutic claims about oils', verdict: 'legitimate_concern' },
      { complaint: 'Prices significantly higher than competitors for similar oils', verdict: 'legitimate_concern' },
      { complaint: 'Aggressive non-compete clause specifically targets doTERRA', verdict: 'business_model' },
      { complaint: 'Per-customer residual is ~$4/mo (8% of avg $50 order), requiring volume to earn meaningfully', verdict: 'business_model' },
    ],
    legalRecord: 'Multiple FDA warning letters for unauthorized health claims by distributors. No major FTC fraud action. Company has operated since 1993 with a loyal customer base.',
    verdict: 'Young Living is not a scam — they have sold real essential oils since 1993 with a loyal customer base. The structural question is whether the per-customer residual (~$4/mo per customer) works at your expected volume. FDA warning letters about distributor health claims are the primary regulatory concern.',
  },
  {
    companySlug: 'mary-kay',
    companyName: 'Mary Kay',
    isHighRisk: false,
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
    isHighRisk: false,
    directAnswer: 'No, MONAT is not a scam in the legal sense. They sell real hair care products. The controversies center on product liability claims and income expectations, not deliberate fraud.',
    topComplaints: [
      { complaint: 'Multiple class action lawsuits claiming products caused hair loss and scalp damage', verdict: 'legitimate_concern' },
      { complaint: 'BBB rating dropped significantly due to product complaints', verdict: 'legitimate_concern' },
      { complaint: 'Aggressive social media marketing tactics by distributors', verdict: 'legitimate_concern' },
      { complaint: 'High product prices compared to salon alternatives', verdict: 'legitimate_concern' },
      { complaint: 'Per-customer commissions require consistent sales volume', verdict: 'business_model' },
    ],
    legalRecord: 'Multiple class action lawsuits over product safety (hair loss claims) - some settled. BBB rating dropped due to complaints. No major FTC fraud action.',
    verdict: 'MONAT is not a scam — they deliver real hair care products. The legitimate concerns are different from fraud: multiple product liability lawsuits (disputed by the company) and BBB complaints about product safety. Evaluate the product safety litigation, not pyramid scheme accusations.',
  },
  {
    companySlug: 'nu-skin-enterprises',
    companyName: 'Nu Skin Enterprises',
    isHighRisk: false,
    directAnswer: 'No, Nu Skin is not a scam. They are a publicly traded company (NYSE: NUS) with SEC oversight, selling real skincare and nutrition products since 1984.',
    topComplaints: [
      { complaint: 'Complex block-based compensation makes earnings unpredictable', verdict: 'business_model' },
      { complaint: 'High-ticket devices (LumiSpa, ageLOC) require significant customer investment', verdict: 'business_model' },
      { complaint: 'Paid $47M FTC fine in 1994 for income claims in China', verdict: 'legitimate_concern' },
      { complaint: 'Stock price has declined from 2018 highs', verdict: 'legitimate_concern' },
      { complaint: 'Compensation complexity makes earnings hard to project', verdict: 'business_model' },
    ],
    legalRecord: '$47M FTC fine (1994) related to China operations and income claims. Various international regulatory issues. As a public company (NYSE: NUS) since 1996, subject to SEC oversight.',
    verdict: 'Nu Skin is not a scam — they are a publicly traded company (NYSE: NUS) with SEC oversight, selling real products since 1984. The concerns are business model related: complex block-based compensation and high-ticket devices requiring significant customer investment.',
  },
  {
    companySlug: 'avon-products',
    companyName: 'Avon Products',
    isHighRisk: false,
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
    isHighRisk: false,
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
    isHighRisk: false,
    directAnswer: 'No, Melaleuca is not a scam. They sell real wellness and household products and position themselves as a "consumer direct" company rather than a traditional MLM.',
    topComplaints: [
      { complaint: 'Monthly 35 Product Points (~$55-70) required to stay qualified', verdict: 'business_model' },
      { complaint: 'Ongoing commission drops from 50% first-month to 7-20%', verdict: 'business_model' },
      { complaint: 'Must reach 20+ personal customers for 20% ongoing commission', verdict: 'business_model' },
      { complaint: 'Products are quality but priced above retail alternatives', verdict: 'exaggerated' },
      { complaint: 'Commission structure rewards customer retention over one-time sales', verdict: 'business_model' },
    ],
    legalRecord: 'Clean regulatory record. Company emphasizes customer focus over recruiting. No major FTC actions or fraud findings. Operating since 1985.',
    verdict: 'Melaleuca is not a scam — they have operated since 1985 with a focus on customer retention rather than recruiting, positioning themselves as "consumer direct" rather than traditional MLM. The structural consideration is the commission drop from 50% first-month to 7-20% ongoing.',
  },
  {
    companySlug: 'usana-health-sciences',
    companyName: 'USANA Health Sciences',
    isHighRisk: false,
    directAnswer: 'No, USANA is not a scam. They are a publicly traded company (NYSE: USNA) selling real nutritional supplements and skincare products since 1992.',
    topComplaints: [
      { complaint: 'Binary compensation model requires balancing two legs to maximize earnings', verdict: 'business_model' },
      { complaint: 'Complex Sales Volume Points system makes earnings hard to predict', verdict: 'business_model' },
      { complaint: 'October 2025 plan adds new requirements and complexity', verdict: 'business_model' },
      { complaint: 'Premium pricing limits market for products', verdict: 'legitimate_concern' },
      { complaint: 'Publicly traded company faces typical market pressures', verdict: 'business_model' },
    ],
    legalRecord: 'Subject to SEC oversight as a public company (NYSE: USNA). Some international regulatory issues over the years. No major FTC fraud actions in the US. Operating since 1992.',
    verdict: 'USANA is not a scam — they are a publicly traded company (NYSE: USNA) with SEC oversight, selling real nutritional supplements since 1992. The structural concerns are the binary compensation complexity and whether the business model works for you in a competitive supplement market.',
  },
  {
    companySlug: 'isagenix',
    companyName: 'Isagenix',
    isHighRisk: false,
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
    isHighRisk: false,
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
    isHighRisk: false,
    directAnswer: 'No, LuLaRoe is not a scam in the strict legal sense - they sell real clothing products. However, they have faced more legal action than most MLMs, including a Washington state AG lawsuit and settlement.',
    topComplaints: [
      { complaint: 'Failed to honor buyback policies, leaving retailers stuck with unsellable inventory', verdict: 'legitimate_concern' },
      { complaint: 'High defect rates on leggings — ripping, holes, quality issues', verdict: 'legitimate_concern' },
      { complaint: '$499+ minimum inventory purchase to start with no control over patterns', verdict: 'legitimate_concern' },
      { complaint: '$4.75M Washington state AG settlement for pyramid scheme allegations', verdict: 'legitimate_concern' },
      { complaint: 'Documentary "LuLaRich" detailed company problems publicly', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Washington state AG lawsuit (2019) - $4.75M settlement for pyramid scheme allegations. Multiple lawsuits from retailers over inventory and buyback issues. Documentary "LuLaRich" detailed company problems.',
    verdict: 'LuLaRoe is not technically a scam in the strict legal sense — they sell real clothing products. However, the $4.75M Washington AG settlement, documented buyback failures, product quality lawsuits, and ongoing controversies make this one of the most legally troubled MLMs. The history matters.',
  },
  {
    companySlug: 'plexus-worldwide',
    companyName: 'Plexus Worldwide',
    isHighRisk: false,
    directAnswer: 'No, Plexus is not a scam. They sell real health and wellness products including their popular "Pink Drink" and gut health supplements. No major FTC action has been taken.',
    topComplaints: [
      { complaint: 'Earn 0% commission if under 100 PV monthly — harsh threshold', verdict: 'business_model' },
      { complaint: 'Must scale to 500+ PV for 25% commission rate', verdict: 'business_model' },
      { complaint: 'FDA warning letters sent for health claims about products', verdict: 'legitimate_concern' },
      { complaint: 'Premium pricing makes customer acquisition challenging', verdict: 'legitimate_concern' },
      { complaint: 'Tiered structure means first 100 PV pays nothing', verdict: 'business_model' },
    ],
    legalRecord: 'FDA warning letters for unauthorized health claims. No major FTC fraud action. Generally lower regulatory profile than larger MLMs.',
    verdict: 'Plexus is not a scam — they sell real health products with genuine customers. The unique structural concern is the tiered commission where you earn 0% below 100 PV monthly. This is harsher than most MLMs and deserves careful analysis.',
  },
  {
    companySlug: 'forever-living-products',
    companyName: 'Forever Living Products',
    isHighRisk: false,
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
    isHighRisk: false,
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
    isHighRisk: false,
    directAnswer: 'No, Pampered Chef is not a scam. They sell real kitchen tools and cookware, owned by Berkshire Hathaway since 2002. Warren Buffett does not invest in scams.',
    topComplaints: [
      { complaint: 'Kitchen tools are durable — limited repeat purchase opportunities', verdict: 'legitimate_concern' },
      { complaint: 'Party-plan model increasingly outdated compared to online shopping', verdict: 'legitimate_concern' },
      { complaint: 'Competition from Amazon and big-box retailers on similar products', verdict: 'legitimate_concern' },
      { complaint: 'Low activity minimum ($30/6 months) makes it accessible but also low-commitment', verdict: 'business_model' },
      { complaint: 'Durable goods business requires constant new customer acquisition', verdict: 'business_model' },
    ],
    legalRecord: 'Clean regulatory record. Berkshire Hathaway ownership since 2002 provides corporate legitimacy. No major FTC actions. Operating since 1980.',
    verdict: 'Pampered Chef is not a scam — they have sold real kitchen products since 1980 and are owned by Warren Buffett\'s Berkshire Hathaway since 2002. The structural consideration is that durable goods require constant new customer acquisition, unlike consumables with repeat purchases.',
  },
  {
    companySlug: 'arbonne-international',
    companyName: 'Arbonne International',
    isHighRisk: false,
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
    isHighRisk: false,
    directAnswer: 'No, 4Life Research is not a scam. They sell real immune support supplements (Transfer Factor products) and have operated legally since 1998.',
    topComplaints: [
      { complaint: 'Ongoing Level 1 commissions drop from 25% first-order to 2%', verdict: 'business_model' },
      { complaint: 'Power Pool access requires recruiting 3 new distributors with specific volume', verdict: 'business_model' },
      { complaint: 'Transfer Factor products are niche — focused market appeal', verdict: 'legitimate_concern' },
      { complaint: 'New customer acquisition more important than in consumable-repeat models', verdict: 'business_model' },
      { complaint: 'Health claims about Transfer Factor products must stay compliant', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Clean regulatory record with no major FTC actions. Operates since 1998 in the immune health supplement niche.',
    verdict: '4Life is not a scam — they have sold real Transfer Factor supplements since 1998 with a specialized immune health focus. The structural consideration is the commission drop from 25% first-order to 2% ongoing, which means new customer acquisition matters more than in typical consumable models.',
  },
  {
    companySlug: 'livegood',
    companyName: 'LiveGood',
    isHighRisk: false,
    directAnswer: 'No, LiveGood is not technically a scam. They sell real nutritional supplements with a membership model. However, the compensation structure raises concerns about sustainability.',
    topComplaints: [
      { complaint: 'Forced 2x15 matrix heavily favors early joiners — position matters', verdict: 'legitimate_concern' },
      { complaint: 'No published income disclosure statement as of 2026', verdict: 'legitimate_concern' },
      { complaint: 'Low per-member matrix earnings require large team', verdict: 'business_model' },
      { complaint: 'Company is relatively new with limited track record', verdict: 'legitimate_concern' },
      { complaint: 'DSSRC inquiries about distributor income claims', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'Two DSSRC inquiries (2025) about problematic income claims by distributors. Company did not indicate intent to comply with DSSRC recommendations. Relatively new, not yet tested by FTC scrutiny.',
    verdict: 'LiveGood is not a scam — they sell real supplements at competitive prices. The structural concerns are the forced matrix (mathematically favoring early joiners), lack of income disclosure transparency, and DSSRC concerns about distributor income claims.',
  },
  {
    companySlug: 'velocity-bank-network',
    companyName: 'Velocity Bank Network',
    isHighRisk: true,
    directAnswer: 'Velocity Bank Network exhibits multiple high-risk characteristics. There is no real product or service — money paid by new participants funds returns to earlier participants. Exercise extreme caution.',
    topComplaints: [
      { complaint: 'No actual product or service - pure peer-to-peer money transfer dressed in crypto language', verdict: 'red_flag' },
      { complaint: 'Anonymous founders with no verifiable identities or business registration', verdict: 'red_flag' },
      { complaint: '"Two behind one" structure requires continuous recruitment to sustain payouts', verdict: 'red_flag' },
      { complaint: 'Claims of $500/day passive income appear mathematically unsustainable', verdict: 'red_flag' },
      { complaint: 'Unregistered with any financial regulatory body', verdict: 'red_flag' },
    ],
    legalRecord: 'Not registered with SEC, FTC, or any state financial regulator. Anonymous operation. No legal business structure.',
    verdict: 'Velocity Bank Network displays characteristics that regulators have historically associated with high-risk investment schemes. The peer-to-peer payment structure with no external revenue source raises significant concerns. Exercise extreme caution.',
  },
  {
    companySlug: 'superone',
    companyName: 'SuperOne (Super.One)',
    isHighRisk: true,
    directAnswer: 'SuperOne exhibits multiple high-risk characteristics. BehindMLM has documented three relaunch cycles since 2019, with participants from previous versions reporting withdrawal difficulties.',
    topComplaints: [
      { complaint: 'Participants from previous versions have reported withdrawal difficulties', verdict: 'red_flag' },
      { complaint: 'Compensation plan not fully transparent to participants', verdict: 'red_flag' },
      { complaint: 'Three relaunch cycles documented by BehindMLM (2020, 2022, 2025)', verdict: 'red_flag' },
      { complaint: 'Passive income model tied to new participant activity', verdict: 'red_flag' },
      { complaint: 'Offshore registration in Singapore limits legal recourse', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'No formal regulatory action as of 2026, likely due to offshore Singapore registration. BehindMLM has documented three review cycles (2020, 2022, 2025) noting concerns about the business model.',
    verdict: 'SuperOne has been reviewed by BehindMLM three times since 2019, with each review documenting participant withdrawal concerns. The trivia app is functional but the passive income model raises questions about sustainability. Exercise extreme caution.',
  },
  {
    companySlug: 'five-rings-financial',
    companyName: 'Five Rings Financial',
    isHighRisk: false,
    directAnswer: 'No, Five Rings Financial is not a scam. They sell real licensed insurance products (life insurance, annuities, retirement planning), agents must pass state licensing exams, and the company operates legally within the insurance industry.',
    topComplaints: [
      { complaint: 'MLM-style recruiting pressure rather than focus on insurance sales', verdict: 'legitimate_concern' },
      { complaint: 'Company not BBB accredited — limited external oversight visibility', verdict: 'legitimate_concern' },
      { complaint: 'No public income disclosure statement — cannot verify typical earnings', verdict: 'legitimate_concern' },
      { complaint: 'Captive agent model — cannot sell competing products or take clients if you leave', verdict: 'business_model' },
      { complaint: 'State licensing costs and time investment required before earning', verdict: 'business_model' },
    ],
    legalRecord: 'No major regulatory actions. Company operates as a licensed insurance agency. Individual agents must maintain state insurance licenses subject to regulatory oversight.',
    verdict: 'Five Rings Financial is not a scam — they sell real licensed insurance products. The complaints center on MLM-style recruiting dynamics, lack of BBB accreditation, and no public income disclosure. These are legitimate concerns about the business model, not fraud.',
  },
  {
    companySlug: 'mwr-financial',
    companyName: 'MWR Financial (MWR Life)',
    isHighRisk: false,
    directAnswer: 'No, MWR Financial is not a scam in the legal sense. They sell real subscription products (Financial Edge financial tools, Travel Advantage travel savings). The concerns are about the binary compensation complexity and company rebranding history, not deliberate fraud.',
    topComplaints: [
      { complaint: 'Company has rebranded multiple times since 2013 — suggests business model instability', verdict: 'legitimate_concern' },
      { complaint: 'Binary compensation structure complexity makes earnings unpredictable', verdict: 'business_model' },
      { complaint: 'BehindMLM noted "pyramid ambiguity" in compensation structure', verdict: 'legitimate_concern' },
      { complaint: 'No public income disclosure statement', verdict: 'legitimate_concern' },
      { complaint: 'Monthly subscription required to earn commissions — ongoing costs', verdict: 'business_model' },
    ],
    legalRecord: 'No major regulatory actions. BehindMLM reviewed MWR Life v2 in August 2025, noting binary compensation structure complexity and "pyramid scheme ambiguity" but did not label it a scam.',
    verdict: 'MWR Financial is not a scam — real subscription products exist and provide value. The concerns are the rebranding history (stability), binary compensation complexity, and BehindMLM\'s "pyramid ambiguity" observation. Evaluate these structural issues, not fraud allegations.',
  },
  {
    companySlug: 'unicity-international',
    companyName: 'Unicity International',
    isHighRisk: false,
    directAnswer: 'No, Unicity International is not a scam. They have operated since 1991, sell real health and wellness products, and have over 70 years of combined corporate history through mergers. The company operates legally in multiple countries.',
    topComplaints: [
      { complaint: 'Compensation plan not publicly disclosed — cannot evaluate opportunity fully', verdict: 'legitimate_concern' },
      { complaint: 'Products significantly more expensive than retail alternatives', verdict: 'legitimate_concern' },
      { complaint: 'No public income disclosure statement', verdict: 'legitimate_concern' },
      { complaint: 'Auto-order recommended to maintain commission qualification — ongoing costs', verdict: 'business_model' },
      { complaint: 'Team development bonuses create recruiting pressure', verdict: 'business_model' },
    ],
    legalRecord: 'Long operating history with no major regulatory fraud actions. Company has roots dating back to 1950s through predecessor companies. Operates in multiple countries with established regulatory presence.',
    verdict: 'Unicity International is not a scam — the long company history and real products confirm legitimacy. The concern is the undisclosed compensation plan, which makes it impossible to fully evaluate whether the opportunity math works. Premium pricing may also limit retail sales potential.',
  },
  {
    companySlug: 'kajabi-platform',
    companyName: 'Kajabi',
    isHighRisk: false,
    directAnswer: 'No, Kajabi is not a scam. It\'s a legitimate SaaS company (course platform) founded in 2010 with a standard affiliate program. Unlike MLMs, there\'s no multi-level structure, no recruitment requirements, and no questionable business practices. It\'s used by thousands of course creators and has a solid reputation in the knowledge commerce industry.',
    topComplaints: [
      { complaint: 'Must be a paying Kajabi customer ($89-399/month) to join the partner program', verdict: 'business_model' },
      { complaint: '12-month inactivity cliff requires 3 new referrals/year or you lose partner status', verdict: 'legitimate_concern' },
      { complaint: '60-day payout delay on commissions', verdict: 'business_model' },
      { complaint: 'High product price ($89-399/month) limits the target audience for referrals', verdict: 'business_model' },
      { complaint: 'New partners on tiered structure, not automatic 30% rate', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'No regulatory actions, FTC investigations, or fraud charges. Kajabi is a legitimate SaaS company that has operated since 2010. It\'s not an MLM and has never faced the pyramid scheme scrutiny that MLMs encounter.',
    verdict: 'Kajabi is not a scam — it\'s a legitimate software company with a standard affiliate program. The complaints are about business model choices (subscription requirement to be a partner, inactivity cliff, payout delay), not fraud. At $26-120/month per referral with no recruitment requirements, it\'s actually a stronger income opportunity than most MLMs.',
  },
  {
    companySlug: 'bright-way-business-personal-essentials',
    companyName: 'Bright Way Business & Personal Essentials',
    isHighRisk: false,
    directAnswer: 'We found no evidence that Bright Way is a scam — no regulatory actions, no fraud complaints, and a visitor report describes real business tools delivered for the fees paid. The honest caveat: the company has a limited public footprint and does not publish its compensation plan, so key terms cannot be independently verified.',
    topComplaints: [
      { complaint: 'Very limited public information — no published compensation plan, income disclosure, or participant agreement', verdict: 'legitimate_concern' },
      { complaint: '$299 one-time startup cost plus $30/month is required before earning anything', verdict: 'business_model' },
      { complaint: 'Income potential cannot be verified because commission rates are not publicly documented', verdict: 'legitimate_concern' },
      { complaint: 'Company details (founding year, headquarters, leadership) are not readily available online', verdict: 'legitimate_concern' },
    ],
    legalRecord: 'No FTC, SEC, or state attorney general actions found as of July 2026. No pattern of fraud complaints located. The company has a small public footprint, which limits what can be verified either way.',
    verdict: 'Bright Way does not appear to be a scam — a visitor correction (June 2026) describes real tools (website, sales, tracking systems) delivered for the $299 + $30/month cost, and the MLM component is reportedly optional. But absence of complaints is not proof of quality: with no published comp plan and a thin public record, do the verification yourself — request the official documents and refund policy in writing before paying.',
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

// Get scam data sorted (high risk first, then alphabetically)
export function getScamDataSorted(): ScamData[] {
  return [...scamData].sort((a, b) => {
    // Put high risk first
    if (a.isHighRisk && !b.isHighRisk) return -1;
    if (!a.isHighRisk && b.isHighRisk) return 1;
    // Alphabetically
    return a.companyName.localeCompare(b.companyName);
  });
}
