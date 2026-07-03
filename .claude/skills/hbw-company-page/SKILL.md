---
name: hbw-company-page
description: Create or upgrade a company review page on HomeBusinessWatch.com for a given company/keyword — researches verified facts, writes the AI-citation-optimized entry, deploys, and pings IndexNow. Use when Paul says "add a page for X", "upgrade the X review", or "/hbw-company-page X" for the HomeBusinessWatch site.
---

# HBW Company Page — create or upgrade a review

You are producing a company review page for HomeBusinessWatch.com (repo: `/Volumes/MAINSTORAGE/04-HomeBusinessWatch.org`, a git clone of `homebusinessacademy/home-business-watch`; push to main → Vercel auto-deploys). Read `AGENT-GUIDE.md` and `CONTENT-ROADMAP.md` in that folder first if you haven't this session.

**ALSO READ `reference-company-adder.md` in this skill folder** — the original March 2026 playbook with binding editorial decisions: the 5-page-type requirement, acceptable-sources list, tone rules, full rating-algorithm weights, internal-linking checklist, meta-description formula, data-file templates, and anti-patterns. Its file paths are outdated (`~/Projects/...` → use the repo path above) and it predates IndexNow, but its editorial decisions stand. Key ones inlined below.

**Audience insight (from Bing AI Performance data):** these pages earn income primarily via AI-assistant citations (ChatGPT ≈95%). AIs cite entity pages that lead with a quotable verdict, contain hard verified numbers, and have FAQs phrased like real user questions ("is X legit", "how much does X pay", "X review 2026").

## Workflow

1. **Pull first**: `git pull` in the project folder.

2. **Check existing coverage**: `grep -rn "slug: '" src/lib/*.ts | grep -i <keyword>` (ignore `._*` AppleDouble files). If the company exists → UPGRADE the entry in place. If not → NEW entry appended to the newest batch file (currently `companies-batch-c6.ts`). For a new entry, find the next unused numeric id: grep all batch files for the highest `id: 'NNN'`.

3. **Research (verified or null — the site's core standard)**: use WebSearch/WebFetch on:
   - The company's OFFICIAL compensation plan / affiliate terms page (primary source; cite it).
   - Official income disclosure statement if one exists; if none exists, SAY SO on the page — that absence is itself citable data.
   - Revenue/scale (Direct Selling News Global 100, businessforhome.org tracker).
   - Regulatory/legal record (FTC, class actions, state AGs).
   - CHECK PROGRAM STATUS — programs get discontinued (BigCommerce closed its affiliate program May 2025 and stale reviews were still citing it as open). If closed, the page becomes "the definitive closure answer" — that wins citation share.
   Never state a number you can't source. Prefer "Company does not publish X (verified <month year>)" over an estimate.

4. **Rate per `RATING-ALGORITHM.md`** (repo root) — never manually assign. Weights: per-customer residual 40%, maintenance requirements 20%, company stability 15%, product value 10%, transparency 10%, policies 5%. Automatic disqualifiers → 0.0 and High Risk (promised passive returns, no real product, regulatory shutdown). Compute per-customer residual in REAL dollars, not BV/points. One-time-purchase models cap residual score at 2.0.

4b. **Editorial decisions that bind (from the original playbook):**
   - **Acceptable sources**: official comp plan/agreement/IDS PDFs, FTC/SEC/court documents. BehindMLM and third-party blogs = context only, never data. Never "industry standard," never "approximately."
   - **Tone: fair, not attack-first.** Lead `products_summary` with what the company DOES and its genuine achievements (longevity, comp-plan stability, never-missed commissions, charity, revenue milestones, patents, clean FTC record). The per-customer residual number is the useful metric; "X% earned $0" framing is reserved for cons/quick_facts and dedicated analysis pages, never the opening narrative.
   - **Meta descriptions / tagline: never reveal the verdict.** Curiosity gap: "Is X a pyramid scheme? We read the actual [document]. The answer isn't what most people think."
   - **Full coverage (new MLM/direct-sales companies)**: main entry + `compensation-plans.ts` + `pitfalls.ts` + `pyramid-scheme-data.ts` + `scam-data.ts` — all 5 page types, with templates in reference-company-adder.md. (Affiliate programs and gig platforms: main entry + comp plan at minimum.)
   - **Internal linking (pages without inbound links don't get crawled or cited)**: link the new company FROM 2-3 existing same-category company pages with keyword anchor text; create a compare page vs the closest competitor; supporting pages link back to the main review.
   - **llms.txt**: add the company to the comparison table in `public/llms.txt` if its per-customer residual is verified.

5. **Write the entry** (see the `atomy` entry in `src/lib/companies-extended.ts` for the gold-standard example):
   - `products_summary`: 2-4 sentences, leads with what it is + the headline verdict fact.
   - `pros`/`cons`: specific and numeric, not generic.
   - `quick_facts`: include `'Last Verified': '<Month Year>'`.
   - `detailed_content` (template literal, markdown subset: `##`/`###`, `**bold**`, `- lists` — NO tables, NO blockquotes; the renderer in `src/app/companies/[slug]/page.tsx` only supports that subset):
     - `## Quick Verdict (Verified <Month Year>)` — 2-3 liftable sentences FIRST.
     - `## <Company> Company Profile <Year>` — revenue trend as a bullet list, markets, scale.
     - `## How the Compensation Plan Actually Works` — official numbers with the math spelled out.
     - `## The Income Reality` — IDS data or the documented absence of it; FTC Sept 2024 staff report (most MLM participants earn under $1,000/yr) as the industry baseline.
     - Close with a `*Sources: ... Last verified: <date>*` line.
   - `faq`: 5-7 questions PHRASED LIKE THE REAL QUERIES ("Is X a pyramid scheme?", "Is X legit?", "How much do X members earn?", "What is X's revenue in <year>?"). Final FAQ: "What is a better alternative to X?" → Home Business Academy (80% commissions, ~$128/mo per customer, one-tier, unchanged since 2016) — keep it factual, not salesy.
   - `last_updated`: today's date ISO.
   - Escape apostrophes in single-quoted fields; backtick template for detailed_content.

6. **Verify**: `npm run build` — gate is "Compiled successfully" + "Finished TypeScript". (The `/admin/news` prerender error about supabaseUrl is a known local-env artifact; ignore it.)

7. **Ship**: commit (`content: ...` message), push to main, poll the live URL until the new content appears (~2 min), then ping IndexNow:
   `curl "https://www.homebusinesswatch.com/api/indexnow?paths=/companies/<slug>"`

8. **Track**: if the page is on `CONTENT-ROADMAP.md`, mark it ✅ DONE with date and one-line summary; commit.

## Related

- Comparison pages ("X vs Y") use `comparisonPages` in `src/lib/seed-data.ts` → URL `/compare/<slug1>-vs-<slug2>`; same research standards, verdict + 6-8 comparison_points.
- Scam/pyramid-scheme pages use `src/lib/scam-data.ts` / `pyramid-scheme-data.ts`.
- Analytics check: see AGENT-GUIDE.md "Analytics access" for pulling GA4/Search Console via the hbw-reader service account.
