# AI-Visibility Content Roadmap — July 2026

Data-driven priorities from Bing Webmaster "AI Performance" report (15K citations, Apr–Jul 2026,
export 2026-07-03) + GA4 AI-referral landing pages. Background: Google deindexed the site in
April 2026; the growth channel is AI assistants (ChatGPT ≈95%), which cite via Bing's index.
See AGENT-GUIDE.md for deploy + IndexNow workflow.

**The metric that matters: citation share** = of all times an AI answered this query with web
sources, how often it cited us. High query volume + low share = biggest upside.

## Tier 1 — Upgrade existing pages (highest leverage, do first)

These pages already get cited but at low share. Upgrade = refresh all data, add a quotable
2–3 sentence verdict box at top, "Last verified: <month year>" date, FAQ entries phrased like
the actual queries below, and hard numbers (income disclosure, fees, payout math).

| Page | Citations (3mo) | Share | Notes |
|---|---|---|---|
| `/companies/atomy` ✅ DONE 2026-07-03 | **1,395** | **9.8%** | Upgraded: verdict box, 2026 profile w/ revenue trend, official comp-plan breakdown, 7 FAQs matching query shapes, IndexNow pinged. Watch share in next monthly export. |
| `/companies/bigcommerce-affiliate` ✅ DONE 2026-07-03 | ~700 across variants | 8–25% | **Program CLOSED May 17, 2025 (verified from official closure notice)** — page rewritten as the definitive closure answer: dates, payout terms, per-country "no", alternatives (Shopify/Wix/HBA). Being the site with the CORRECT answer should win share as stale competitors get filtered. |
| `/companies/teespring-spring` | ~300 | 30–52% | Queries pair Teespring with "Etsy dropshipping" and "Amazon dropshipping" — add sections addressing those angles explicitly. |
| `/companies/monat-global` | 247 | 25.5% | Refresh + verdict box. |
| `/companies/wix-affiliate` | ~80 | 6–30% | Same country-variant pattern as BigCommerce. |
| `/companies/taskrabbit` | ~200 across variants | 9–57% | Long-tail: cleaning, assembly, home improvement — add per-service-category FAQs. |
| `/companies/mwr-life` + `/scam/mwr-financial` | ~120 | 16–24% | Already #1 GA landing page; keep fresh monthly. |

## Tier 2 — New comparison pages (comparison queries earn 44–67% share)

Comparison content wins the highest citation shares on the site. Use the existing `/compare/`
route pattern.

1. **Neora vs Monat** ✅ DONE 2026-07-03 — live at `/compare/neora-vs-monat-global` with tailored verdict + 8 comparison points (first non-HBA comparison on the site).
2. **Neora vs Amway vs Monat vs Arbonne** (beauty-MLM commissions roundup) — 66 @ 67% share.
3. **Primerica vs PHP Agency vs World Financial Group** (insurance MLM cluster — "is primerica legit", "PHP agency reviews", WFG queries all fire).
4. **Teespring vs Zazzle vs Printful vs Redbubble** (print-on-demand roundup; all four pages exist).

## Tier 3 — New entity pages (queries cite us with no dedicated page)

| New page | Evidence |
|---|---|
| PHP Agency (insurance MLM) | 115 citations @ 34% share with NO page — a dedicated review captures far more. |
| SolidGigs (freelance leads) | 90 citations. |
| Codementor | 50 citations. |
| Turing.com | "Turing AI recruitment platform remote jobs review" 10 @ 56%. |
| Family First Life (insurance MLM) | Cluster logic: PHP/Primerica/WFG demand proves insurance-MLM queries. |
| Trending crypto-matrix schemes as they emerge | VBN page is the template — "is X legit" is the #1 AI question shape when people get pitched. |

## Ongoing ops

- After every content deploy: `curl "https://www.homebusinesswatch.com/api/indexnow?paths=..."` (see AGENT-GUIDE.md).
- Monthly: freshness pass on Tier 1 pages (update "Last verified" + any new data).
- Monthly: re-export Bing AI Performance grounding queries; re-rank this file's tiers from the new data.
- Page format rules: verdict box first, hard numbers, FAQs phrased as real questions, visible dates.
