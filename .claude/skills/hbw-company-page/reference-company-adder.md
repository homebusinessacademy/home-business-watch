# HBW Company Adder

Add companies to HomeBusinessWatch.com with verified data, proper sourcing, and complete internal linking.

## What Goes Wrong Without This

**Generic data kills trust.** When a pitfall says "Industry Standard - MLM Contracts" instead of "Amway Rules of Conduct, Rule 6.2," Google sees thin content. Readers see bullshit. The site's entire value proposition—actual document citations, real per-customer math—evaporates.

**Guessed comp plan numbers destroy credibility.** If you estimate "$15 per customer" when the real number is $3, you've published misinformation. One Reddit thread calling out a bad number poisons the site's reputation. Verified or null. No middle ground.

**Orphan pages don't get crawled.** Google discovers pages through internal links. A company profile with zero inbound links sits in the index graveyard. Every new company needs links FROM existing content, not just links TO it.

**Revealing the verdict kills CTR.** "Is Amway a pyramid scheme? No, it's not." ← This meta description gets 2% CTR. "Is Amway a pyramid scheme? We read the actual FTC ruling. The answer isn't what most people think." ← This gets 8% CTR. Same content, 4x the traffic.

**Incomplete profiles rank worse.** A company with only a main page and comp plan is missing 3 pages of content. That's 3 fewer keyword targets, 3 fewer internal linking opportunities, 3 fewer chances to rank. Every company gets all 5 page types.

---

## The 5 Page Types (All Required)

Every company needs entries in all 5 data files:

| File | What It Is | URL Pattern |
|------|------------|-------------|
| `companies-extended.ts` or batch file | Main company profile | `/companies/[slug]` |
| `compensation-plans.ts` | Per-customer residual math | `/compensation-plan/[slug]` |
| `pitfalls.ts` | Policy document risks | `/pitfalls/[slug]` |
| `pyramid-scheme-data.ts` | Pyramid scheme analysis | `/pyramid-scheme/[slug]` |
| `scam-data.ts` | Scam complaints analysis | `/scam/[slug]` |

---

## Tone: Fair, Not Attack-First

**products_summary** leads with what the company DOES — products, positioning, value proposition, achievements.

**Never mention income disclosure stats in the main company article.** No "X% earned nothing" anywhere on the main page. That's a hit piece, not a review.

Instead, use the **per-customer residual number** — this is actually useful information. "$6.25/month per customer" tells people what they can earn. "53% earned nothing" just attacks the company.

Income disclosure analysis belongs ONLY on the dedicated `/income-disclosure/[slug]` page if we create one. The main company profile stays fair and product-focused.

### Praise Noteworthy Achievements

Balance requires acknowledging what companies do well. Actively look for:

- **Longevity:** "Operating since 1959" matters — they didn't collapse or get shut down
- **Comp plan stability:** "Never changed their compensation plan" is HUGE — most MLMs tweak plans to reduce payouts over time. Stability = trust.
- **Commission consistency:** "Never missed a commission payment" — sounds obvious but many companies have had payment issues
- **Charitable work:** Donations, foundations, meals provided, community programs. Real numbers if available.
- **Cool milestones:** First to market, patents held, industry firsts, growth records
- **Revenue milestones:** "$5B annual revenue" signals real product demand
- **Breakthrough science:** Peer-reviewed studies, university partnerships, genuine R&D, novel ingredients or delivery systems. If they actually advanced the science (not just marketing claims), say so.
- **Product innovation:** Patents held, third-party certifications, industry awards
- **Regulatory compliance:** Clean FTC record, BBB A+ rating, DSA membership
- **Industry recognition:** DSN Global 100 ranking, growth awards
- **Customer metrics:** High reorder rates, retail customer percentages, customer retention stats

Put these in `pros`, `quick_facts`, and the opening of `products_summary`. A company that's operated 30+ years, never changed their comp plan, never missed a commission, and donates millions to charity deserves that context BEFORE we mention income disclosure stats.

---

## Rating Algorithm Integration

**All ratings are calculated using the Residual Rating Algorithm** (see `RATING-ALGORITHM.md`).

Never manually assign ratings. Calculate them from:

| Factor | Weight | Data Needed |
|--------|--------|-------------|
| Per-Customer Residual | 40% | Real $ earned per customer/month |
| Maintenance Requirements | 20% | PV requirements, rank maintenance, activity requirements |
| Company Stability | 15% | Years in business, comp plan changes, missed payments |
| Product Value | 10% | Retail customer base vs affiliate-only |
| Transparency | 10% | Comp plan simplicity, IDS published |
| Policies & Procedures | 5% | Income-stripping clauses, termination traps |

### Automatic Disqualifiers (Score = 0.0, category = high_risk)
- Promised passive/daily returns with no clear product
- No real product (obscure, vague, or nonexistent)
- Shut down by FTC/regulators

### Key Calculation Notes
- **BV/Points systems:** Calculate REAL dollars earned, not % of inflated BV
- **One-time purchase models:** Cap residual score at 2.0 max
- **Physical vs digital:** Score on absolute dollars, note context in review

### Pros/Cons Generation
- **Pros** = Where company scores well (high residual, no maintenance, longevity, etc.)
- **Cons** = Where company scores poorly (low residual, PV requirements, comp plan changes, etc.)
- Digital products are NOT a con (higher margins = advantage)
- "Most customers are affiliates" is NOT a con for business tools

---

## The #1 Rule: Verified or Null

Every number comes from an official source or it's `null`.

**Acceptable sources:**
- Official comp plan PDF from company website
- Distributor/Consultant Agreement PDF
- Income Disclosure Statement
- Policies and Procedures document
- FTC filings, SEC filings, court documents

**NOT acceptable:**
- BehindMLM (secondary source—context only, never data)
- Third-party blog estimates
- "Industry standard" anything
- "Approximately" or "around" or "varies"

**When the docs aren't public:**
```typescript
directCustomerResidual: null,
qualificationNote: 'Comp plan documents are not publicly available. Request the official Compensation Plan PDF and Distributor Agreement before joining.',
```

---

## Research Workflow

### Phase 0: Algorithm Data Collection (NEW - Do First)

Collect data for ALL algorithm factors before writing anything:

```
□ Per-Customer Residual:
  - Direct customer commission ($ per month, not %)
  - Downline customer commission ($ per month)
  - Is it BV/points or real dollars?
  - One-time or recurring?

□ Maintenance Requirements:
  - Personal volume (PV) requirements?
  - Team volume requirements?
  - Rank/leadership maintenance?
  - Activity requirements to keep income?

□ Company Stability:
  - Year founded
  - Has comp plan EVER changed? (research thoroughly)
  - Has company ever missed/delayed commissions?

□ Product Value:
  - Do non-affiliates buy the products?
  - What % of customers are also distributors?

□ Transparency:
  - How complex is the comp plan? (ranks, tiers, bonuses)
  - Is IDS published publicly?

□ Policies & Procedures:
  - Termination clauses
  - Volume lapse consequences
  - Non-compete terms
  - Arbitration requirements
```

### Phase 1: Comp Plan Research

```
□ Search: "[company] compensation plan PDF official"
□ Search: "[company] distributor agreement PDF"
□ Search: "[company] consultant agreement PDF"
□ Search: "[company] income disclosure statement"
□ Find the entry-level direct customer commission
□ Document the source URL
□ If not found: set directCustomerResidual to null with honest qualificationNote
```

**The key questions:**
1. "How much does a new rep earn per DIRECT customer per month?" (customers you personally enroll)
2. "How much do you earn per DOWNLINE customer per month?" (customers enrolled by your team)

These are often different numbers. Capture both.

**What you're looking for:**
- Percentage or dollar amount per customer order
- Whether it's one-time or recurring
- Monthly PV/autoship requirements to stay qualified
- Any time-limited bonuses (like Amway's 3-year CSI)

### Phase 2: Pitfalls Research

```
□ Search: "[company] policies and procedures PDF"
□ Search: "[company] rules of conduct"
□ Search: "[company] distributor agreement termination"
□ Look for these specific clauses:
  - Non-compete (how long after leaving?)
  - Non-solicitation (can you recruit former teammates?)
  - Monthly PV requirements
  - Termination for inactivity
  - Arbitration clause
  - Buyback policy
  - Contract amendment clause
□ Document each pitfall with document name + section number
```

### Phase 3: Company Profile

```
□ Founded year (Wikipedia or company website)
□ HQ location
□ Product categories
□ Monthly cost range (startup + ongoing)
□ Find income disclosure for cons data
□ Write 4-6 specific pros (not generic)
□ Write 4-6 specific cons (cite IDS numbers)
□ Write 3-4 FAQ questions people actually ask
```

### Phase 4: Pyramid Scheme Analysis

Real-product MLMs are NOT pyramid schemes. The analysis pivots to:
- What's the per-customer residual?
- 80% of any team produces little → YOU find most customers
- Is the income from products or recruitment?

```typescript
isActualPyramidScheme: false,  // true only for crypto/no-product schemes
directAnswer: 'No. [Company] is not a pyramid scheme. They sell real products...',
mathSummary: 'At entry level, you earn $X per customer per month...',
```

### Phase 5: Scam Analysis

```
□ Search: "[company] complaints"
□ Search: "[company] lawsuit"
□ Search: "[company] FTC" or "[company] SEC"
□ Categorize each complaint:
  - legitimate_concern (valid criticism)
  - business_model (how MLM works, not specific to company)
  - exaggerated (grain of truth, blown out of proportion)
  - fraud (only if actual fraud documented)
```

---

## Internal Linking (High-Leverage SEO)

Pages without inbound links don't rank. This is the most common mistake.

### When Adding a New Company:

```
□ Company main page links to all 4 supporting pages:
  → /compensation-plan/[slug]
  → /pitfalls/[slug]
  → /pyramid-scheme/[slug]
  → /scam/[slug]

□ Add company to /compensation-plan comparison chart

□ Add company to /income-disclosure if IDS available

□ Update 2-3 existing company pages to link to new company:
  → Find companies in same category
  → Add contextual link: "See how [NewCompany]'s comp plan compares"

□ Update relevant guides with new company as example:
  → /guides/mlm-duplication-myth → mention company if relevant
  → /guides/mlm-compensation-flaws → link to comp plan page

□ Create compare page vs closest competitor:
  → /compare/[new-company]-vs-[competitor]
  → Update BOTH company main pages to link to compare page

□ Pyramid/scam pages link back to main company page:
  → "See our full [Company] review"
  → "View the actual comp plan numbers"
```

### Anchor Text Rules

**Good:**
- "Amway's 6-month non-compete clause" → /pitfalls/amway
- "how Herbalife's comp plan compares" → /compensation-plan/herbalife
- "See the full doTERRA review" → /companies/doterra

**Bad:**
- "click here" → (wastes link equity)
- "read more" → (no keywords)
- "learn more" → (tells Google nothing)

---

## Meta Description Formula

**150-160 characters. Never reveal the verdict.**

| Page Type | Formula |
|-----------|---------|
| Pyramid | "Is [Company] a pyramid scheme? We read the actual [document]. The answer isn't what most people think." |
| Scam | "Is [Company] a scam? Before you decide, read what we found in the complaints, lawsuits, and distributor agreement." |
| Company | "Thinking about [Company]? We broke down the real per-customer residual, what happens if you quit, and what the income disclosure actually reveals." |
| Compare | "[A] vs [B] — which actually pays more per customer? We ran the real numbers. The gap is bigger than you think." |

---

## Data File Templates

### companies-extended.ts

**IMPORTANT: Calculate ratings using the algorithm, don't manually assign.**

```typescript
{
  id: 'XXX',
  slug: 'company-name',
  name: 'Company Name',
  category: 'mlm',  // mlm | affiliate | direct_sales | other | high_risk
  founded_year: 2010,
  hq_location: 'City, State, USA',
  website: 'https://company.com',
  products_summary: 'Health supplements, skincare, and essential oils targeting wellness consumers.',
  monthly_cost_min: 50,
  monthly_cost_max: 200,
  comp_plan_type: 'Unilevel with rank advancement',
  
  // CALCULATE THESE - See RATING-ALGORITHM.md
  // overall_rating = weighted sum of all factors
  // residual_rating = per-customer residual score (40% of overall)
  // simplicity_rating = transparency score
  // transparency_rating = same as simplicity (comp plan clarity + IDS)
  // community_rating = product value score
  // value_rating = weighted combo considering maintenance + stability
  overall_rating: 2.5,      // Algorithm-calculated
  residual_rating: 2.0,     // From per-customer $ amount
  simplicity_rating: 2.5,   // From comp plan complexity
  transparency_rating: 3.0, // From IDS + documentation
  community_rating: 3.5,    // From product value assessment
  value_rating: 2.0,        // From stability + maintenance
  
  // GENERATE FROM ALGORITHM SCORES - where company scores well
  pros: [
    // High per-customer residual? → "$X/mo per customer residual"
    // No maintenance? → "No monthly volume requirements"
    // Long track record? → "X years in business"
    // Never changed comp plan? → "Never changed compensation plan"
    // Simple comp plan? → "Simple X-tier compensation structure"
    // Clean P&P? → "Affiliate-friendly policies"
    // Low startup? → "$X startup cost"
  ],
  
  // GENERATE FROM ALGORITHM SCORES - where company scores poorly
  cons: [
    // Low per-customer residual? → "$X/mo per customer (below average)"
    // BV/points system? → "BV system reduces real dollar earnings"
    // Excessive purchase requirement? → ONLY a con if requirement exceeds reasonable personal consumption
    //   - $100/mo skincare you use = NOT a con (standard)
    //   - $300/mo forced inventory = CON
    // Changed comp plan? → "Has changed compensation plan"
    // Complex comp plan? → "Complex multi-tier compensation structure"
    // High startup? → "$X+ startup cost"
    // P&P traps? → "X policy may impact residual income"
  ],
  quick_facts: {
    'Founded': '2010',
    'Headquarters': 'City, State',
    'Business Model': 'Multi-level marketing',
    'Monthly Minimum': '$100 autoship',
    'Zero Earners': '54% earned $0 (2023 IDS)'
  },
  faq: [
    {
      question: 'Is Company Name a pyramid scheme?',
      answer: 'Company Name is a legal MLM company. They sell real products...'
    },
    {
      question: 'How much can you make with Company Name?',
      answer: 'According to the 2023 Income Disclosure...'
    }
  ],
  tagline: 'Brief positioning statement',
  last_updated: '2026-03-22T00:00:00.000Z',
  is_featured: false,
  is_published: true,
  created_at: '2026-03-22T00:00:00.000Z'
}
```

### compensation-plans.ts

```typescript
{
  companySlug: 'company-name',
  companyName: 'Company Name',
  lastUpdated: '2026-03-22',
  directCustomerResidual: 8,  // $ per customer/month, or null
  levels: [
    {
      level: 1,
      label: 'Retail Commission',
      residualPerCustomer: 5,
      notes: '25% of $20 average order'
    },
    {
      level: 2,
      label: 'Customer Bonus',
      residualPerCustomer: 3,
      notes: 'Additional 15% on preferred customers'
    },
    {
      level: 3,
      label: 'Team Overrides',
      residualPerCustomer: null,
      notes: 'Requires rank advancement; varies by structure'
    }
  ],
  monthlyRequirement: '100 PV (~$150 in product)',
  qualificationNote: 'New reps earn $8 per customer on average monthly orders. Verified from 2024 Compensation Plan PDF.',
  simpleSummary: 'Company Name pays 25% retail commission plus 15% on preferred customers...',
  teamSizeNeeded: {
    goal1000: 125,
    goal3000: 375,
    goal10000: 1250,
    assumptions: 'Based on $8/customer average on monthly orders of $25'
  },
  sourceUrl: 'https://company.com/compensation-plan.pdf',
  keyGotchas: [
    'Must maintain 100 PV monthly or earn $0 that month',
    'Rank advancement requires team building, not just customers',
    'Preferred customer bonus requires customer enrollment',
    'Override percentages drop when downline advances'
  ]
}
```

### pitfalls.ts

```typescript
{
  companySlug: 'company-name',
  companyName: 'Company Name',
  lastUpdated: '2026-03-22',
  overallRisk: 'high',  // high | medium | low
  riskReason: 'Summary of the key risks in one sentence.',
  pitfalls: [
    {
      category: 'Non-Compete',
      severity: 'high',
      title: '12-month non-compete after termination',
      details: 'Per Section 8.3 of the Distributor Agreement, for 12 months following termination...',
      sourceNote: 'Distributor Agreement, Section 8.3 (company.com/agreement.pdf)'
    },
    {
      category: 'Arbitration',
      severity: 'high',
      title: 'Mandatory binding arbitration',
      details: 'All disputes must be resolved through binding arbitration...',
      sourceNote: 'Policies and Procedures, Section 12.1'
    }
  ],
  bottomLine: '2-3 sentences summarizing the key risks and what to watch for.',
  policyUrl: 'https://company.com/policies-and-procedures.pdf'
}
```

### pyramid-scheme-data.ts

```typescript
{
  companySlug: 'company-name',
  companyName: 'Company Name',
  isActualPyramidScheme: false,
  directAnswer: 'No. Company Name is not a pyramid scheme. They sell real products to real customers, and distributors earn commissions based on actual sales volume.',
  whyNotPyramidScheme: 'Company Name has operated legally since [year], sells tangible products, and does not require recruitment to earn income.',
  mathSummary: 'At entry level, you earn approximately $8 per customer per month on recurring orders. To reach $1,000/month, you need roughly 125 active customers.',
  structuralNotes: [
    'Monthly autoship requirement means you pay whether you sell or not',
    'Rank advancement requires team building, reducing focus on customers',
    'Per-customer income drops significantly at scale without team'
  ],
  verdict: 'Company Name is not a pyramid scheme. It is a legal MLM with real products. However, the $8 per-customer residual and 100 PV monthly requirement mean most participants earn modest income. Evaluate the per-customer math, not the income claims.'
}
```

### scam-data.ts

```typescript
{
  companySlug: 'company-name',
  companyName: 'Company Name',
  isActualScam: false,
  directAnswer: 'No, Company Name is not a scam. They sell real products and have operated legally since [year].',
  topComplaints: [
    {
      complaint: 'Upline recruiters exaggerate income potential without showing income disclosure data',
      verdict: 'legitimate_concern'
    },
    {
      complaint: 'Monthly autoship of $100+ required to stay qualified for commissions',
      verdict: 'business_model'
    },
    {
      complaint: 'Products are overpriced compared to retail alternatives',
      verdict: 'legitimate_concern'
    }
  ],
  legalRecord: 'No major FTC or SEC actions. BBB rating: [X].',
  verdict: 'Company Name is not a scam—they sell real products. The real concerns are the monthly costs, income exaggeration by recruiters, and product pricing.'
}
```

---

## When Docs Aren't Available

Some companies don't publish policy documents publicly.

**Comp Plan:**
```typescript
directCustomerResidual: null,
qualificationNote: 'Compensation plan documents are not publicly available. Request the official Compensation Plan PDF and Distributor Agreement from a current representative before joining.',
sourceUrl: '',
```

**Pitfalls:**
```typescript
pitfalls: [
  {
    category: 'Documentation',
    severity: 'medium',
    title: 'Policy documents not publicly available',
    details: 'The company does not publish their Policies and Procedures or Distributor Agreement publicly. Request and carefully review all contractual documents before joining.',
    sourceNote: 'Manual review of company website conducted March 2026'
  }
],
bottomLine: 'We could not verify specific policy terms. Before joining, request: (1) Compensation Plan, (2) Policies and Procedures, (3) Distributor Agreement, (4) Income Disclosure Statement.',
```

---

## Post-Add Checklist

### Always Do
- [ ] `public/llms.txt` — add to compensation table if per-customer residual is verified
- [ ] Link from 2-3 existing similar companies to the new company page
- [ ] Create one compare page vs closest competitor (`/compare/[new]-vs-[competitor]`)

### Only If Relevant
- [ ] Update a guide **only if the company is a perfect example of a specific point** (e.g., worst non-compete, lowest per-customer residual). Don't force it.
- [ ] Guides stay lean — they're not company directories. If a guide already has 3 examples, don't add a 4th just because a new company exists.

### Never Update (Auto-Handled)
- Sitemap — auto-generated
- Compensation plan chart — pulls from data file automatically
- Category pages — auto-populate from companies data
- NEW/UPDATED badges — trigger from lastUpdated date field

---

## Build & Deploy

```bash
cd ~/Projects/home-business-watch

# Build must pass with zero errors
npm run build

# Stage all changes
git add -A

# Commit with source documentation
git commit -m "Add [Company]: comp plan verified from [source], pitfalls from [source]"

# Push to deploy (Vercel auto-deploys main)
git push origin main
```

---

## Quality Checklist

Before every commit:

```
□ All 5 page types created
□ Comp plan data verified from official source (or explicitly null)
□ Every pitfall has real sourceNote (document name + section number)
□ Meta descriptions: 150-160 chars, curiosity gap, no verdict revealed
□ Company main page links to all 4 supporting pages
□ 2-3 existing company pages updated with links to new company
□ Relevant guides updated with new company as example
□ Compare page created vs closest competitor
□ Both companies' main pages link to compare page
□ npm run build passes with zero errors
```

---

## Anti-Patterns

| Don't Do This | Why It's Bad |
|---------------|--------------|
| `sourceNote: 'Industry Standard - MLM Contracts'` | Not a real source. Kills credibility. |
| `directCustomerResidual: 15` (estimated) | Guesses become misinformation. |
| Meta: "Is Amway a pyramid scheme? No." | Reveals verdict. Kills CTR. |
| Missing any of 5 page types | Incomplete profiles rank worse. |
| `residualPerCustomer: 'Varies'` | Never acceptable. Number or null. |
| Company page with no inbound links | Orphan pages don't get crawled. |
| Anchor text: "click here" | Wastes link equity. Use keywords. |
| Compare page without links from both companies | Breaks internal link structure. |

---

## File Locations

```
~/Projects/home-business-watch/
├── src/lib/
│   ├── companies-extended.ts      # Main company data
│   ├── companies-batch-*.ts       # Additional companies
│   ├── compensation-plans.ts      # Comp plan data
│   ├── pitfalls.ts                # Policy pitfalls
│   ├── pyramid-scheme-data.ts     # Pyramid scheme analysis
│   ├── scam-data.ts               # Scam analysis
│   └── seed-data.ts               # Consolidates all data
```
