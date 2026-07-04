# AEO Strategy — Answer Engine Optimization for HomeBusinessWatch.com

Source: AEO audit insights adopted July 2026 (Paul). This is the strategy layer; the per-page
mechanics live in `.claude/skills/hbw-company-page/` and `AGENT-GUIDE.md`. Read this before
planning content or strategy work for this site.

Context that makes AEO the whole game here: Google algorithmically deindexed the site in
April 2026; AI-assistant citations (ChatGPT via Bing, 15K citations/3mo and rising) are the
primary channel. These ten insights are the operating rules.

## The 10 rules, applied to HBW

1. **Build pages for buyer questions, not just entities.** Our entity pages work, but the
   question-shaped inventory is thin. Priority page patterns to add:
   - "Best alternative to [company]" — we own this angle; every weak-opportunity review
     already points to HBA. Dedicated alternatives pages capture the query directly.
   - "[Company] cost / pricing" — we hold monthly_cost data on 800+ companies; surface it
     as answerable cost sections and category cost roundups.
   - "How to choose a [category]" — decision-criteria pages (checklist format).
2. **Citable proof beats marketing copy.** Every claim needs a number, a document, or a
   named source. Our differentiators: RATING-ALGORITHM methodology (public at /how-we-rate),
   per-customer residual math, official IDS/comp-plan citations, FTC/court records. Keep
   leading with these; they are why AIs pick us over generic review blogs.
3. **Don't optimize for one engine.** Today ~95% of AI referrals are ChatGPT (Bing index).
   Track visibility separately: GA4 sessionSource (chatgpt.com, perplexity.ai, claude.ai,
   copilot.com, gemini.google.com) monthly + Bing AI Performance export. Claude cites most
   strictly → our verified-or-null sourcing is exactly what earns strict-engine citations;
   Gemini requires Google indexing, which is currently our dead channel — treat any Gemini
   traffic as a Google-recovery signal.
4. **Buyer-intent queries dominate.** Comparison pages earn our highest citation shares
   (44–67% measured). Keep shipping decision pages: X-vs-Y comparisons, category explainers,
   best-for-use-case roundups, buying-criteria checklists.
5. **AI borrows trust from third-party sources.** Off-site authority is our weakest flank
   (Bing flagged "not enough inbound links from high quality domains"). Ethical workstream:
   directory profiles for the site, Reddit/YouTube presence citing our data, offering our
   income-disclosure datasets to journalists/bloggers as a citation source, monthly citable
   "MLM industry report". No paid links, no astroturfing.
6. **Pages must be easy to extract.** Standard already enforced by the skill: verdict block
   first, clean H2s, FAQ sections phrased as real queries, JSON-LD schema, quick-facts box,
   summaries above long copy. Keep HTML crawlable (static SSG — already true).
7. **Freshness and authorship.** "Last verified: <month year>" on every touched page +
   changelog-style notes on significant updates ("What changed in this review"). Authorship:
   the site deliberately has NO personal byline (SPEC decision — never mention Paul).
   Compromise adopted: editorial attribution ("HomeBusinessWatch Research Team") + visible
   methodology link + dated verification. If AI engines start demanding named authors, this
   decision needs revisiting with Paul — do not add named authors unilaterally.
8. **Ship alternatives/migration-style pages.** For us: "best alternative to [MLM]",
   "leaving [MLM] — what to do next", "[platform] vs building your own" pages. These map to
   the highest-intent moment (someone about to quit or join).
9. **Finance-adjacent = trust-constrained.** Income/business-opportunity content gets extra
   scrutiny from AI engines. Non-negotiables: cite regulators (FTC/SEC/state AGs), include
   earnings disclaimers, link primary documents, keep the fair-not-attack-first tone, show
   the methodology. Never publish an unverifiable earnings number — one bad number
   disqualifies the domain for strict engines.
10. **llms.txt is hygiene, not strategy.** Ours exists and is good; update it when verified
    residuals change, then move on. The real work is being cite-worthy: specific claims,
    evidence, structure, freshness, corroboration.

## Standing monthly ops loop

1. Export Bing AI Performance grounding queries → re-rank CONTENT-ROADMAP tiers.
2. GA4 per-engine referral check (rule 3).
3. Freshness pass on top-cited pages (rule 7) → IndexNow ping.
4. One off-site authority action (rule 5).
