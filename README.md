# HomeBusinessWatch.com

A Next.js 14 directory site for MLM/affiliate marketing reviews. Professional, trustworthy reviews to help people research before joining home business opportunities.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Features

- Company directory with detailed reviews
- 5-dimension rating system (Residual Income, Simplicity, Transparency, Community, Value)
- Category browsing (MLM, Affiliate, Direct Sales, Work From Home)
- Side-by-side company comparisons
- SEO optimized with JSON-LD structured data
- Dynamic sitemap generation
- Mobile responsive design

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with SEO
│   ├── sitemap.ts                  # Dynamic sitemap
│   ├── robots.ts                   # Robots.txt
│   ├── companies/[slug]/page.tsx   # Company review pages
│   ├── category/[slug]/page.tsx    # Category listing pages
│   └── compare/[slug]/page.tsx     # Comparison pages
├── components/
│   ├── CompanyCard.tsx             # Company listing card
│   ├── StarRating.tsx              # Star rating display
│   ├── QuickFactsBox.tsx           # Company quick facts sidebar
│   ├── RatingBreakdown.tsx         # 5-dimension rating display
│   ├── SearchBar.tsx               # Instant search (client)
│   ├── ComparisonTable.tsx         # Side-by-side comparison
│   ├── Header.tsx                  # Site header/navigation
│   └── Footer.tsx                  # Site footer
├── lib/
│   ├── seed-data.ts                # Sample company data
│   └── supabase.ts                 # Supabase client
├── types/
│   └── index.ts                    # TypeScript type definitions
└── globals.css                     # Global styles & Tailwind theme
```

## Local Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (optional for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd home-business-watch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ANTHROPIC_API_KEY=your-anthropic-api-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from Settings > API

### 2. Run the Schema

1. Go to the SQL Editor in your Supabase dashboard
2. Copy the contents of `supabase/schema.sql`
3. Run the SQL to create tables and policies

### 3. Seed Data (Optional)

The app includes seed data in `src/lib/seed-data.ts` for development. For production, you'll want to insert data into Supabase:

```sql
-- Example: Insert a company
INSERT INTO companies (slug, name, category, overall_rating, ...)
VALUES ('company-name', 'Company Name', 'affiliate', 4.5, ...);
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes (for DB) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | Yes (for DB) |
| `ANTHROPIC_API_KEY` | Anthropic API key for AI features | No |

## Vercel Deployment

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables in the Vercel dashboard
4. Deploy

### 3. Custom Domain (Optional)

1. In Vercel, go to Settings > Domains
2. Add `homebusinesswatch.com`
3. Update DNS records as instructed

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#1e3a5f` | Headers, primary buttons |
| White | `#ffffff` | Background |
| Gold/Amber | `#f59e0b` | Stars, CTAs |
| Green | `#10b981` | Positive indicators |
| Red | `#ef4444` | Warnings, cons |

## SEO Features

- **Meta Tags**: Dynamic title/description per page
- **Open Graph**: Social sharing optimization
- **JSON-LD**: Organization, Review, FAQPage schemas
- **Sitemap**: Auto-generated from company data
- **Robots.txt**: Search engine instructions

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private - All rights reserved.
