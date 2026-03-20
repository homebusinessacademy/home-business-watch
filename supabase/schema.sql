-- HomeBusinessWatch.com Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Companies table - core directory listing
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('mlm', 'affiliate', 'direct_sales', 'other')),
  founded_year INTEGER,
  hq_location VARCHAR(255),
  website VARCHAR(500),
  products_summary TEXT,
  monthly_cost_min DECIMAL(10, 2),
  monthly_cost_max DECIMAL(10, 2),
  comp_plan_type VARCHAR(100),

  -- Ratings (1-5 scale, stored as decimal for precision)
  overall_rating DECIMAL(2, 1) CHECK (overall_rating >= 0 AND overall_rating <= 5),
  residual_rating DECIMAL(2, 1) CHECK (residual_rating >= 0 AND residual_rating <= 5),
  simplicity_rating DECIMAL(2, 1) CHECK (simplicity_rating >= 0 AND simplicity_rating <= 5),
  transparency_rating DECIMAL(2, 1) CHECK (transparency_rating >= 0 AND transparency_rating <= 5),
  community_rating DECIMAL(2, 1) CHECK (community_rating >= 0 AND community_rating <= 5),
  value_rating DECIMAL(2, 1) CHECK (value_rating >= 0 AND value_rating <= 5),

  -- JSON fields for flexible content
  pros JSONB DEFAULT '[]'::jsonb,
  cons JSONB DEFAULT '[]'::jsonb,
  quick_facts JSONB DEFAULT '{}'::jsonb,

  -- Meta fields
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_featured BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Company updates/news
CREATE TABLE company_updates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  title VARCHAR(500) NOT NULL,
  summary TEXT,
  source_url VARCHAR(1000),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User reviews
CREATE TABLE user_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  body TEXT,
  reviewer_name VARCHAR(100),
  is_verified BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comparison pages (e.g., "Amway vs HBA")
CREATE TABLE comparison_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  vs_company_name VARCHAR(255) NOT NULL,
  vs_company_slug VARCHAR(255) NOT NULL,
  content JSONB DEFAULT '{}'::jsonb,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(company_id, vs_company_slug)
);

-- Indexes for performance
CREATE INDEX idx_companies_slug ON companies(slug);
CREATE INDEX idx_companies_category ON companies(category);
CREATE INDEX idx_companies_is_published ON companies(is_published);
CREATE INDEX idx_companies_is_featured ON companies(is_featured);
CREATE INDEX idx_companies_overall_rating ON companies(overall_rating DESC);
CREATE INDEX idx_companies_last_updated ON companies(last_updated DESC);

CREATE INDEX idx_company_updates_company_id ON company_updates(company_id);
CREATE INDEX idx_company_updates_published_at ON company_updates(published_at DESC);

CREATE INDEX idx_user_reviews_company_id ON user_reviews(company_id);
CREATE INDEX idx_user_reviews_is_approved ON user_reviews(is_approved);

CREATE INDEX idx_comparison_pages_company_id ON comparison_pages(company_id);
CREATE INDEX idx_comparison_pages_vs_company_slug ON comparison_pages(vs_company_slug);

-- Row Level Security (RLS)
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE comparison_pages ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read access for published companies"
  ON companies FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public read access for company updates"
  ON company_updates FOR SELECT
  USING (true);

CREATE POLICY "Public read access for approved reviews"
  ON user_reviews FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Public read access for comparison pages"
  ON comparison_pages FOR SELECT
  USING (true);

-- Allow public to submit reviews (moderated)
CREATE POLICY "Public can submit reviews"
  ON user_reviews FOR INSERT
  WITH CHECK (true);
