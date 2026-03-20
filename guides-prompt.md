Create a /guides section for HomeBusinessWatch.com with 5 pillar SEO articles.

## Files to Create

1. src/app/guides/page.tsx — listing page
2. src/app/guides/mlm-vs-affiliate-marketing/page.tsx
3. src/app/guides/best-mlm-companies-2026/page.tsx
4. src/app/guides/residual-income-math/page.tsx
5. src/app/guides/how-to-evaluate-home-business/page.tsx
6. src/app/guides/real-cost-mlm-team/page.tsx

Also:
- Add "Guides" nav link to src/components/Header.tsx
- Add guide pages to src/app/sitemap.ts

## Design Rules

Each guide page must:
- Export Metadata with title + description
- Use navy-900/amber-500/gray-50 Tailwind classes (matching site style)
- Have a clean hero, article body with H2/H3 structure
- Include a CTA box at the end: "See our #1 rated program → /companies/home-business-academy"
- Link to relevant company review pages internally
- Include Article schema JSON-LD script tag

---

## GUIDE LISTING PAGE (src/app/guides/page.tsx)

Title: "Home Business Guides | HomeBusinessWatch"
Description: "In-depth guides on MLM vs affiliate marketing, residual income math, how to evaluate home businesses, and more."

Show 5 guide cards with title, description, read time, and link.

---

## GUIDE 1: mlm-vs-affiliate-marketing

Title: "MLM vs Affiliate Marketing: The Honest Comparison (2026)"
Keywords: mlm vs affiliate marketing 2026

Full article with these sections:
- Intro: Two popular home business models, most comparisons are biased. This uses real data.
- H2: The Core Difference — MLM earns on team sales (multi-level), affiliate earns on your referrals (one-tier)
- H2: The Income Math — Table comparing MLM (Amway median $657/yr) vs HBA affiliate (80% = $128/mo per customer, 24 = $3,072/mo)
- H2: Hidden Costs of MLM — autoship, FTC data, doTERRA 91% earn $0, Young Living median $4/yr
- H2: Hidden Costs of Affiliate Marketing — traffic required, one-time vs recurring commissions
- H2: Side-by-Side Comparison Table — 6 rows: income type, recruiting required, inventory, FTC risk, typical earnings, path to $3K/mo
- H2: The Best of Both Worlds — subscription affiliate programs pay recurring commissions without MLM complexity
- H2: Bottom Line — links to /companies/home-business-academy and /guides/residual-income-math

---

## GUIDE 2: best-mlm-companies-2026

Title: "Best MLM Companies 2026: Ranked by Real Income Data"
Keywords: best mlm companies 2026

Sections:
- Intro: Most lists are from affiliates. This uses income disclosure statements.
- H2: How We Rate MLM Companies — 5-dimension system
- H2: Hard Truth About MLM Income — FTC Sept 2024 report, median under $1K/yr
- H2: Top-Rated MLM Companies — Melaleuca (3.4★ /companies/melaleuca), Pampered Chef (3.5★ /companies/pampered-chef), Scentsy (3.0★ /companies/scentsy), doTERRA (2.6★ /companies/doterra), Young Living (2.5★ /companies/young-living), Amsoil (3.0★ /companies/amsoil)
- H2: Companies to Avoid — Valentus (1.8★), OneCoin (fraud), Black Oxygen Organics (shutdown 2021)
- H2: Companies That Left MLM (2024-2026) — Beachbody, Rodan+Fields, Legendary Marketer closed Feb 2026
- H2: Is There a Better Alternative? — bridge to affiliate model, link /guides/mlm-vs-affiliate-marketing

---

## GUIDE 3: residual-income-math

Title: "The Real Math Behind Residual Income From Home (2026)"
Keywords: residual income from home 2026

Sections:
- Intro: "Residual income" is overused. Here's what it actually means.
- H2: What Is Residual Income? — income after initial work done (rentals, royalties, subscriptions)
- H2: Three Models — MLM (requires 500+ team), Traditional Affiliate (mostly one-time), Subscription Affiliate (recurring per customer)
- H2: $3,000/Month Comparison Table:
  | Model | Customers Needed | Monthly per Customer | Residual? |
  | MLM | 500+ team | ~$1.30/person | Team-dependent |
  | One-time affiliate | N/A | One-time | No |
  | Subscription affiliate (HBA) | 24 | $128/month | Yes |
- H2: What Makes Residual Income Stick — low churn, genuine products, stable company
- H2: The Honest Caveat — requires real upfront work

---

## GUIDE 4: how-to-evaluate-home-business

Title: "How to Evaluate Any Home Business Opportunity: 7-Step Checklist"
Keywords: how to evaluate home business opportunity

7 steps, each 200+ words:
1. Find and Read the Income Disclosure Statement — what to look for, red flags, Young Living/Amway examples
2. Calculate Monthly Minimum Cost — add up autoship + fees, compare to IDS earnings, doTERRA example
3. Understand the Comp Plan Type — binary/unilevel/stairstep/one-tier explained
4. Check Regulatory History — FTC search, BBB, settlement history
5. Test the "2 Customer Rule" — can 2 customers cover your monthly cost?
6. Check Comp Plan History — Beachbody changed overnight 2024 as cautionary tale
7. Talk to Real Participants (Not Just Promoters) — Reddit, YouTube, ask for real income screenshots

---

## GUIDE 5: real-cost-mlm-team

Title: "The Real Cost of Building an MLM Team (What Your Upline Won't Tell You)"
Keywords: cost of building mlm team, mlm team building

Sections:
- Intro: MLM pitches focus on team income potential, rarely on what it costs to build one
- H2: Financial Cost — autoship $100-200/mo, events, tools, samples, 2000-5000/yr typical
- H2: Time Cost — 10-20 hrs/week for prospecting, training, meetings
- H2: Relationship Cost — warm market exhaustion, "NFL club" (No Friends Left), 42% say it damaged relationships
- H2: The Attrition Problem — 50% quit in year one, running a leaky bucket, need 50 recruits/year just to stay flat at 100
- H2: Real Math Example — "I built 600 people, made $1,200/month. When I counted the costs, I was losing money." (Paul's story — this is authentic, use it)
- H2: The Alternative — 24 customers at $128/month = $3,072. No training downline, no attrition, no burning relationships.

---

## Sitemap addition (src/app/sitemap.ts)

After the static pages array, add these:
```
{ url: `${BASE_URL}/guides`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
{ url: `${BASE_URL}/guides/mlm-vs-affiliate-marketing`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
{ url: `${BASE_URL}/guides/best-mlm-companies-2026`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
{ url: `${BASE_URL}/guides/residual-income-math`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
{ url: `${BASE_URL}/guides/how-to-evaluate-home-business`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
{ url: `${BASE_URL}/guides/real-cost-mlm-team`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
```

## Header update (src/components/Header.tsx)

Add between existing nav links:
```tsx
<Link href="/guides" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
  Guides
</Link>
```

## After all files created:

1. npm run build — fix any TypeScript errors before proceeding
2. git add -A && git commit -m "feat: add /guides section with 5 pillar SEO articles (MLM vs Affiliate, Best MLM 2026, Residual Income Math, How to Evaluate, Real Cost of MLM Team)"
3. git push

When done: openclaw system event --text "Done: 5 pillar content guides live on HomeBusinessWatch. Pushed to GitHub." --mode now
