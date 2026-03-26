You are building content for HomeBusinessWatch.com — an SEO-driven home business opportunity directory.

## Your task: Add ~360 new company profiles to reach 500 total

The site currently has ~149 unique companies. Create 6 new batch files (companies-batch-c1.ts through companies-batch-c6.ts), each with 60 companies.

## TypeScript interface (must match exactly):
```typescript
import { Company } from "@/types";
// Company type fields:
// id: string (sequential, start at "150")
// slug: string (kebab-case, unique)
// name: string
// category: "mlm" | "affiliate" | "direct_sales" | "other"
// founded_year: number | null
// hq_location: string | null
// website: string | null
// products_summary: string | null
// monthly_cost_min: number | null
// monthly_cost_max: number | null
// comp_plan_type: string | null
// overall_rating: number (1.0-5.0)
// residual_rating: number
// simplicity_rating: number
// transparency_rating: number
// community_rating: number
// value_rating: number
// pros: string[] (4-8 items)
// cons: string[] (2-5 items)
// quick_facts: Record<string, string>
// last_updated: string ("2026-03-20")
// is_featured: boolean (false for all new)
// is_published: boolean (true for all)
// created_at: string ("2026-03-20T00:00:00Z")
// tagline?: string
// faq?: { question: string; answer: string; }[]
```

## DO NOT duplicate these existing slugs:
4life-research, 7k-metals, 99designs, acn-inc, advocare, amazon-fba, amazon-merch-on-demand, arbonne-international, atomy, avon-products, awin, beachbody-bodi, beautycounter, beehiiv-affiliate, betterware-de-mexico, binance-affiliate, bitconnect, bluehost-affiliate, builderall, cambly, care-com, cj-affiliate, clickfunnels-affiliate, coinbase-earn, color-street, convertkit, creative-market, cutco-vector-marketing, digistore24, digital-altitude-mobe, doba-dropshipping, doterra, dropshipping-shopify, ebay-selling, empower-network, etsy, ezoic, fiverr, flexoffers, forever-living-aloe, forever-living-products, four-life-research, ghost-newsletter, global-wealth-trade, google-adsense, groove-funnels, gumroad-creator, guru, hempworx-my-daily-choice, hostinger-affiliate, ilearning-global, immunotec, impact-affiliate, isagenix, it-works, jasper-ai-affiliate, jeunesse-global, juice-plus, juice-plus-nsa, jvzoo, kajabi-affiliate, kartra, ko-fi-creator, kraken-affiliate, kyani, legalshield, legendary-marketer, life-plus-international, livegood, lularoe, mannatech, market-america-shop-com, mary-kay, maxbounty, mediavine, melaleuca, mlm-nation, monat-global, natures-sunshine-products, neora, network-marketing-pro, newage-noni, nexo-crypto, nu-skin-enterprises, nucerity-international, numanna-food, numis-network, oberlo, olsp-system, onecoin, optavia-medifast, oriflame, pampered-chef, paparazzi-accessories, partnerstack, patreon, peopleperhour, plexus-worldwide, pm-international, primerica, printful-affiliate, printify, pruvit, pure-romance, rain-international, rakuten-advertising, redbubble-creator, reliv-international, rodan-fields, rover, salehoo, scentsy, semrush-affiliate, send-out-cards, shaklee, shareasale, shopify-affiliate, sisel-international, society6, southwestern-advantage, spocket, substack, surfer-seo-affiliate, symmetry-financial-group, taskrabbit, teachable-affiliate, team-national, teespring-spring, thinkific-affiliate, toptal, total-life-changes, tranont, tupperware, udemy-instructor, upwork, usana-health-sciences, vemma, visalus, warriorplus, wealthy-affiliate, wor-global-network, world-financial-group, wp-engine-affiliate, xango-zija, young-living, younique, zazzle, zeek-rewards, zurvita, home-business-academy, amway, herbalife, amazon-associates, clickbank

## Rating Algorithm — USE THIS FOR ALL RATINGS

**Read RATING-ALGORITHM.md for full details.** Here's the summary:

### Automatic Disqualifiers (Score = 0.0)
- Promised passive returns without clear product
- No real product
- Regulatory shutdown by FTC/state AGs

### 6-Factor Weighted Formula
```
Final Score = (Per-Customer Residual × 0.40)
            + (Residual Penalties × 0.20)
            + (Company Stability × 0.15)
            + (Product Value × 0.10)
            + (Transparency × 0.10)
            + (Policies × 0.05)
```

### Factor 1: Per-Customer Residual (40% weight)
| Monthly $ Per Customer | Score |
|------------------------|-------|
| $100+/month | 5.0 |
| $50-99/month | 4.0 |
| $25-49/month | 3.0 |
| $10-24/month | 2.0 |
| $1-9/month | 1.0 |
| $0 or unclear | 0.5 |
**Note:** One-time purchase models cap at 2.0 max.

### Factor 2: Residual Penalties (20% weight)
| Policy | Score |
|--------|-------|
| No penalties — keep your rate on whatever volume exists | 5.0 |
| Simple annual renewal fee only | 4.0 |
| Rank/rate drops if team volume falls | 1.5 |
| Must maintain personal production quotas | 1.5 |
| Arbitrary commission cuts or clawbacks | 1.0 |
| Multiple penalty mechanisms combined | 0.5 |

### Factor 3: Company Stability (15% weight)
Base score: 3.0, then:
- 10+ years in business: +1.0
- Under 10 years: -1.0
- Never changed comp plan: +0.5
- Changed comp plan: -1.0
- Never missed commission: +0.5
- Has missed payments: -1.0
(Min 0.5, max 5.0)

### Factor 4: Product Value (10% weight)
Average of: Legitimacy (5.0 = clear useful product, 0.5 = vague/no product) + Price Reasonableness (5.0 = competitive, 1.0 = extreme premium)

### Factor 5: Transparency (10% weight)
5.0 = simple clear comp plan, 2.0 = complex with many ranks, 0.5 = hidden. No IDS published = -1.0.

### Factor 6: Policies (5% weight)
5.0 = clean fair P&P, 1.0 = multiple pitfalls, 0.5 = predatory terms

### Rating Labels
| Score | Label |
|-------|-------|
| 4.5-5.0 | Exceptional |
| 4.0-4.4 | Strong |
| 3.0-3.9 | Moderate |
| 2.0-2.9 | Limited |
| 1.0-1.9 | Poor |
| 0.0-0.9 | High Risk / Disqualified |

### Typical Ranges (for reference)
- HBA-style (high per-customer residual, no penalties): 4.5-5.0
- SaaS affiliate (recurring commissions, no penalties): 3.0-4.0
- Traditional MLM (low per-customer, rank maintenance): 1.8-2.5
- Defunct/scam: 0.0-1.5

## BATCH PLAN — 60 companies per file:

### BATCH C1 (companies-batch-c1.ts) — MLM Health/Wellness, ids 150-209
Use these real companies (verify/use your knowledge):
Synergy WorldWide (1999, Utah, supplements), ASEA Global (2010, Salt Lake City, redox molecules), LifeVantage/Protandim (2003, Utah), Valentus (2014, CA, coffee MLM), Zilis CBD (2015, TX), Kannaway hemp CBD (2014, CA), Elepreneurs (2017, TN), Trivita (1999, AZ), Vidafy (2021, TX, zeolite), Ambit Energy (2006, TX, electricity MLM), 5LINX (2001, NY, telecom), Stream Energy/Ignite (2004, TX), Amsoil (1972, WI, motor oil), Watkins Inc (1868, MN, spices/extracts), SeneGence (1999, CA, LipSense), Seacret Direct (2005, AZ, Dead Sea), Qnet (1998, HK), FreeLife International (1995, AZ, goji), MonaVie (2005, UT, acai - defunct 2015), Jeunesse Global (2009, FL), Sunrider (1982, CA), Morinda/Tahitian Noni (1996, UT), Noevir (1964, Japan), Longrich (1986, China), Omnilife (1991, Mexico), LiveGood (2022, FL, low-cost supplements), Le-Vel THRIVE (2012, TX), American Income Life insurance (1951, TX), DXN International (1993, Malaysia, ganoderma), Zinzino (2005, Sweden, omega-3), Lifeplus (1936, AR), Natural Health Trends (1988, TX), New Earth/Blue-Green Algae (1995, OR), Purium Health (1993, CA, superfoods), Black Oxygen Organics (2020, defunct 2021), Fortune Hi-Tech Marketing (2001, defunct FTC 2013), Telexfree (2012, bankrupt/fraud 2014), WakeUpNow (2009, defunct 2015), YTB International travel (2001, defunct), BioPerformance fuel additive (2006, fraud/shutdown 2007), World Ventures travel club (2005, TX), ViSalus (2005, MI, protein shakes), PHP Agency (2009, TX, insurance), Globe Life career agency (1900, TX), Vestige Marketing (2004, India), ForeverGreen (2004, UT, defunct ~2018), Visi Global (2012, ND, defunct ~2018), CellFusion/Max International (2006, UT, glutathione), Stemtech (2005, CA), Xooma Worldwide (2006, FL), Rain International (already exists - use Kyani instead - already exists - use Reliv International instead - already exists), use: Isagenix (already exists), use unique ones: Omnilife (1991), ACN (1993, telecom), Wellness Revolution network, Zurvita (already exists)...

IMPORTANT: Just use your knowledge to generate 60 UNIQUE non-duplicate MLM health/wellness and adjacent companies. Make sure none of the slugs are in the DO NOT DUPLICATE list above. Be creative — there are hundreds of MLMs. Include a mix of:
- Active legitimate ones (2.0-3.2 rating)
- Defunct/scam ones (1.0-1.5 rating)
- Telecom/energy MLMs
- Insurance MLMs

### BATCH C2 (companies-batch-c2.ts) — MLM Beauty/Fashion/Lifestyle, ids 210-269
60 companies including: Farmasi (2019 MLM div), Seint Beauty (2013), LimeLife by Alcone, Pink Zebra candles, Lilla Rose hair, Origami Owl jewelry, Stella & Dot, Thirty-One Gifts, Damsel in Defense, Color Street nails, Amare Global wellness, Swarovski Touchstone Crystal (ended 2021), Jamberry nails (defunct 2018), Younique (already exists - skip), Beautycounter (already exists - skip), MONAT (already exists - skip), Arbonne (already exists - skip), and others like: CAbi fashion, Zyia Active (2017), Scout & Cellar wine (2017), Traveling Vineyard wine, Ann Summers UK, SeneGence (already in c1? check - if so skip), and fill remaining with legitimate direct sales beauty/fashion companies not in the duplicate list.

### BATCH C3 (companies-batch-c3.ts) — SaaS/Marketing Affiliate Programs, ids 270-329
60 affiliate programs NOT in the duplicate list. Key ones:
GoHighLevel affiliate (40% recurring, $97-297/mo platform), Systeme.io affiliate (40% recurring), ActiveCampaign affiliate (20-30% recurring), GetResponse affiliate (33% recurring), AWeber affiliate (30% recurring), ConvertKit/Kit affiliate (30% recurring), HubSpot affiliate ($250-1000 per sale), Webflow affiliate (50% first year), Shopify affiliate ($150/referral), BigCommerce (200% first month), Teachable (already exists - skip), Thinkific (already exists - skip), Kajabi (already exists - skip), Podia (30% recurring), Mighty Networks (20% recurring), Circle.so affiliate, Leadpages (30-50% recurring), ClickFunnels (already exists - skip), Kartra (already exists - skip), SamCart, ThriveCart (one-time fee), Deadline Funnel, EverWebinar, WebinarJam, Demio, Loom, Descript, Monday.com, ClickUp, Zapier, Make/Integromat, Mangools SEO (30% recurring lifetime), SpyFu (40% recurring), Long Tail Pro, ConvertBox, WP Rocket, GeneratePress, Elegant Themes/Divi (50%), Cloudways, Kinsta (up to $500 + 10%), SiteGround, NordVPN affiliate (40% + renewals), ExpressVPN, Surfshark VPN, TubeBuddy (30-50% recurring), VidIQ (25% recurring), StreamYard, Restream, Riverside.fm, Buzzsprout, Podbean, ClickMagick, Voluum, Canva affiliate, Copy.ai, Writesonic, Pictory, Synthesia, Invideo AI, and others

### BATCH C4 (companies-batch-c4.ts) — Freelance/Creator Economy/Remote Work, ids 330-389
60 platforms NOT in duplicate list. Key ones:
Contra (commission-free freelance), Solid Gigs (job leads $21/mo), FlexJobs (remote jobs $9.95-49/mo), We Work Remotely, Dribbble (design portfolio/jobs), Codeable (WordPress dev marketplace), Arc.dev (remote devs), Turing.com, Gun.io, Braintrust (decentralized talent), Lemon Squeezy (sell software), Paddle (revenue platform), Payhip, Sellfy, Stan Store, Beacons.ai, Linktree (link in bio), Maven (cohort courses), Medium Partner Program, Ko-fi (already exists - skip), Gumroad (creator), Buy Me a Coffee, Substack (already exists - skip), Ghost (newsletter platform), Beehiiv (already exists - skip), Skillshare Teacher, Coursera Partner, VIPKid (teach English to Chinese kids), Preply (language tutoring), Cambly (already exists - skip), Toptal (already exists - skip), Freelancer.com, Upwork (already exists - skip), Fiverr (already exists - skip), 99designs (already exists - skip), PeoplePerHour (already exists - skip), Guru.com (already exists - skip), Workana (LatAm freelance), Malt (European freelance), CloudDevs, Rover (already exists - skip), Care.com (already exists - skip), Taskrabbit (already exists - skip), Udemy Instructor (already exists - skip), fill remaining with: Redbubble (already exists), Society6 (already exists), Zazzle (already exists), Etsy (already exists)... find other unique platforms: Envato Market, Creative Fabrica, Design Cuts, FontBundles, Motion Array, VideoHive, AudioJungle, ThemeForest affiliate, CodeCanyon, Pond5, Shutterstock contributor, Getty Images contributor, Adobe Stock contributor, Alamy contributor, EyeEm photographer, etc.

### BATCH C5 (companies-batch-c5.ts) — Direct Sales Party Plan + More, ids 390-449
60 companies NOT in duplicate list. Key direct sales:
Pampered Chef (already in duplicate list as pampered-chef - skip), use: Tastefully Simple (1995, MN, food), Stampin' Up! (1988, UT, paper crafting), Close To My Heart (1987, UT, scrapbooking), Princess House (1963, MA, crystal cookware), PartyLite candles (1973, MA), Gold Canyon candles (1997, AZ), Longaberger baskets (1973, OH, defunct 2018), Creative Memories (1987, MN, scrapbooking), Epicure seasonings (1997, Canada), Discovery Toys (1978, CA), Barefoot Books (1992, MA), CabiClothing/cabi (2002, CA), Norwex cleaning (1994, MN), Scout & Cellar wine (2017, TX), Traveling Vineyard (2001, MA), Ann Summers UK (1970), Zyia Active (2017, UT), Thermomix/Vorwerk (1883 company, Germany), BelCorp beauty (1968, Peru), Seint Beauty (if not in c2), Le-Vel THRIVE (if not in c1), PHP Agency insurance (if not in c1), and fill with other direct sales companies: Chalk Couture, Lilla Rose, Pink Zebra, Origami Owl, Thirty-One Gifts (if not in c2), Damsel in Defense (if not in c2), CTFO CBD (free join), CBD BioCare, Max International glutathione, Purium (if not in c1), House of Lloyd (defunct 2002), Southern Living at Home (defunct 2013), 4Life (already exists), Xooma, Stemtech, DXN (if not in c1), Longaberger, Creative Memories, Watkins (if not in c1), Vantel Pearls, Magnolia and Vine (defunct), Utility Warehouse UK, eXp Realty, Keller Williams (KW profit share), and others

### BATCH C6 (companies-batch-c6.ts) — Digital Marketing Tools + Online Business Training, ids 450-509
60 entries NOT in duplicate list. Key ones:
Raptive/AdThrive (premium ad management, 50K+ pageviews required), Taboola (native ads), Outbrain (native ads), Media.net (Yahoo/Bing contextual), Infolinks (in-text ads), PropellerAds, ClickMagick (tracking $37-97/mo, 35% recurring), Voluum ad tracker, Hyros attribution, NordVPN affiliate (40% recurring), ExpressVPN, Surfshark, TubeBuddy (YouTube tool), VidIQ (YouTube tool), StreamYard, Restream, Riverside.fm, Buzzsprout, Podbean, SocialBee, Publer, Metricool, Later (Instagram scheduler), Tailwind (Pinterest), ManyChat (chatbot), Hootsuite, Buffer, eXp Realty (cloud brokerage), Keller Williams (profit share), IM Mastery Academy (forex MLM), Authority Hacker (SEO training), Income School/Project 24 (blogging), Niche Pursuits blog, Affiliate Lab Matt Diggity, Blog Growth Engine Adam Enfroy, Commission Hero Robby Blanchard, One Funnel Away Challenge, Affiliate Bootcamp, Fat Stacks Blog, Repurpose.io, MissingLettr, and others. Include:
- Digital product marketplaces
- Ad networks
- Tracking/analytics tools
- Content creation tools
- Online business courses (both legit and questionable)

## KEY REQUIREMENTS:

1. Each company MUST have all required fields — no undefined/missing fields
2. Use accurate real data for founded_year, hq_location, website
3. For DEFUNCT companies: set is_published=true, note in tagline, low rating, cons include shutdown note
4. Generate rich content: 4-8 pros, 2-5 cons, 6-10 quick_facts, 3 FAQs per company
5. Ratings must be consistent with the rating guidelines above
6. Each batch file exports a named array: companiesBatchC1, companiesBatchC2, etc.

## After creating all 6 files:

Update `src/lib/seed-data.ts`:
- Keep existing imports: extendedCompanies, companiesBatchA2, companiesBatchA3, companiesBatchA1
- ADD imports for: companiesBatchB1 (from './companies-batch-b1'), companiesBatchB2 (from './companies-batch-b2'), and all C batches
- Update allCompanies spread to include all new batches
- The allCompanies line currently looks like: `export const allCompanies: Company[] = [...companies, ...extendedCompanies, ...companiesBatchA2, ...companiesBatchA3, ...companiesBatchA1];`
- Change it to include all batches

Run `npm run build` to verify. Fix any TypeScript errors.

Commit and push:
```bash
git add -A
git commit -m "feat: add 360 company profiles (c1-c6) + wire b1/b2 — 500+ total companies"
git push
```

When completely finished, run:
openclaw system event --text "Done: 360 new companies added to HomeBusinessWatch (c1-c6 batches). All 500+ companies now live. Pushed to GitHub." --mode now
