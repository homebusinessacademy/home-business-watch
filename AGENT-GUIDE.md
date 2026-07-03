# Agent Guide — HomeBusinessWatch.com

How to access, edit, and deploy this site. Read this before making changes.

## The essentials

| | |
|---|---|
| Live site | **https://www.homebusinesswatch.com** (www is canonical; non-www 308-redirects) |
| Repo (source of truth) | https://github.com/homebusinessacademy/home-business-watch — branch `main` |
| Hosting | Vercel (project `home-business-watch`) — **auto-deploys production on every push to `main`** |
| Local working copy | `/Volumes/MAINSTORAGE/04-HomeBusinessWatch.org` (this folder, a git clone) |
| Auth | `gh` CLI on this Mac is logged in as `homebusinessacademy` with push access |

Note the folder is named `.org` but the live domain is **.com** — the .org domain does not resolve.

## How to update the website

```bash
cd /Volumes/MAINSTORAGE/04-HomeBusinessWatch.org
git pull                    # ALWAYS pull first — see "History lesson" below
# ...edit files...
npm run build               # verify (see caveat below)
git add -A && git commit -m "..."
git push                    # → Vercel deploys production automatically, ~1-2 min
```

There is no manual deploy step. Verify by checking the live URL after a couple of minutes, e.g. `curl -sI https://www.homebusinesswatch.com/companies/<slug>`.

**Build caveat:** `npm run build` on this Mac fails at the prerender step for `/admin/news` with "supabaseUrl is required" because Supabase env vars only exist on Vercel (there is no `.env.local` here). That failure is expected and harmless — what matters locally is that **"Compiled successfully" and TypeScript both pass** before the prerender stage. The Vercel build has the env vars and completes fully.

**exFAT quirks:** this drive is exFAT. `core.fileMode=false` is set (don't trust mode changes), and `._*` AppleDouble junk files are excluded via `.git/info/exclude`. If you see stray `._foo.ts` files, they are Finder metadata — never commit or import them.

## Where content lives

Nearly all site content is **static TypeScript checked into the repo** — editing content means editing code and pushing:

- **Company reviews** (the core of the site): `src/lib/companies-batch-*.ts`, all aggregated by `src/lib/seed-data.ts`. Each company is a `Company` object (type in `src/types/index.ts`) with slug, ratings, pros/cons, FAQs, optional `detailed_content`, etc.
  - **To add a company:** append to the most recent batch file (currently `companies-batch-c6.ts`) with a **unique numeric `id`** (grep all batch files to confirm: `grep -rn "id: '<n>'" src/lib/`) and a unique `slug`. It appears on the site, category pages, and sitemap automatically.
  - **To edit a review:** find it with `grep -rln "<slug>" src/lib/`.
- **Ratings must follow `RATING-ALGORITHM.md`** (in this folder): 5 dimensions, residual income weighted 40%, automatic disqualifiers → 0.0 and "High Risk". Don't invent scores.
- Other static datasets: `src/lib/compensation-plans.ts`, `pitfalls.ts`, `pyramid-scheme-data.ts`, `scam-data.ts`.
- **Guides** are static pages under `src/app/guides/<slug>/page.tsx` (`guides-prompt.md` documents the voice/format used to write them).
- SEO: sitemap (`src/app/sitemap.ts`) and JSON-LD are generated from the data files — no manual SEO work needed when adding companies.

## What Supabase is (and isn't) used for

Supabase does **not** hold company reviews. It only backs:
- The news feed: `/news`, `/admin/news`, and `/api/scrape-news` (a Vercel cron hits it daily at 08:00 UTC — see `vercel.json`).
- Form submissions: contact, submit-company, report-inaccuracy (API routes under `src/app/api/`).

Credentials (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, plus Resend and `ANTHROPIC_API_KEY`) live in the Vercel project's environment variables, not on this Mac. Schema: `supabase/schema.sql`.

## Editorial context

The site reviews MLM / affiliate / direct-sales / work-from-home opportunities with a skeptical, consumer-protection voice. Home Business Academy (HBA, company id '1') is Paul's own company and the site's benchmark "top alternative" — reviews of weak opportunities often point to it. Keep the factual, research-backed tone; every claim in a review should be defensible.

## History lesson (why "pull first" matters)

Before July 2026 this folder lost its `.git` (exFAT copy) and silently diverged from GitHub for months: GitHub had newer commits AND the folder had unpushed edits (an expanded Velocity Bank Network review + the Bright Way company) that never went live. It was re-converted to a proper clone and reconciled on 2026-07-03. Don't recreate that situation: pull before editing, push after committing, and never edit a copy of this project that isn't a git clone.
