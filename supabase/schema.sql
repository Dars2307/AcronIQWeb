-- AcronIQ CMS Database Schema
-- Run this in your Supabase SQL Editor
-- Uses 'cms' schema to align with AcronIQ architecture (veritus, portal, signals)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 0. CREATE CMS SCHEMA
-- ============================================
CREATE SCHEMA IF NOT EXISTS cms;

-- ============================================
-- 1. JOURNAL POSTS TABLE
-- ============================================
CREATE TABLE cms.journal_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary TEXT,
  content TEXT NOT NULL,
  author TEXT DEFAULT 'Joel Ogunniyi',
  author_title TEXT DEFAULT 'Founder & CEO, AcronIQ Research',
  author_credentials TEXT DEFAULT 'Strategic Advisor specialising in AI-driven decision systems',
  series TEXT DEFAULT 'Strategic Clarity Series',
  key_takeaways JSONB DEFAULT '[]'::jsonb,
  is_published BOOLEAN DEFAULT false,
  publish_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_journal_posts_published ON cms.journal_posts(is_published, publish_date DESC);
CREATE INDEX idx_journal_posts_slug ON cms.journal_posts(slug);

-- ============================================
-- 2. SITE CONTENT TABLE (Key-Value Store)
-- ============================================
CREATE TABLE cms.site_content (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  description TEXT,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by TEXT
);

-- Insert default homepage content
INSERT INTO cms.site_content (key, value, description) VALUES
  ('hero_headline', 'Clarity in Complexity. Intelligence You Can Trust.', 'Homepage hero headline'),
  ('hero_subline', 'Strategic intelligence and AI advisory for leaders navigating high-stakes decisions with precision and trust.', 'Homepage hero subline'),
  ('hero_cta_primary', 'Contact Us', 'Primary CTA button text'),
  ('hero_cta_secondary', 'Join Early Access', 'Secondary CTA button text'),
  ('founder_quote', 'I founded AcronIQ because leaders deserve clarity, even when the world is at its most complex. In an age flooded with data, the true competitive advantage isn''t more information—it''s precision, trust, and intelligence that resonates.', 'Founder quote on homepage'),
  ('founder_name', 'Joel Ogunniyi', 'Founder name'),
  ('founder_title', 'Founder & Chief Executive Officer', 'Founder title');

-- ============================================
-- 3. PRODUCT CONTENT TABLE
-- ============================================
CREATE TABLE cms.product_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('Flagship Service', 'Beta', 'Coming Soon', 'Planned')),
  badge_color TEXT DEFAULT 'bg-blue-100 text-blue-800 border-blue-200',
  features JSONB DEFAULT '[]'::jsonb,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default products
INSERT INTO cms.product_content (name, slug, description, status, badge_color, features, is_featured, display_order, link) VALUES
  (
    'Strategic Intelligence Advisory',
    'strategic-intelligence-advisory',
    'High-stakes decision support for founders and leaders navigating complexity with confidence.',
    'Flagship Service',
    'bg-blue-100 text-blue-800 border-blue-200',
    '["Strategic decision modeling", "Market intelligence", "Business validation", "Executive advisory", "AI-driven research"]'::jsonb,
    true,
    1,
    '/products'
  ),
  (
    'Signals Platform',
    'signals-platform',
    'AI-driven dashboards delivering real-time market intelligence and trend detection.',
    'Coming Soon',
    'bg-orange-100 text-orange-800 border-orange-200',
    '["Real-time trend detection", "Market signal monitoring", "Predictive analytics", "Custom alerts", "Intelligence dashboards"]'::jsonb,
    false,
    2,
    '/products'
  ),
  (
    'Early Access Tools',
    'early-access-tools',
    'Decision modeling and scenario planning tools for strategic foresight.',
    'Beta',
    'bg-green-100 text-green-800 border-green-200',
    '["Decision modeling", "Scenario planning", "Strategic foresight", "Risk assessment", "Collaborative workspace"]'::jsonb,
    false,
    3,
    '/early-access'
  );

-- ============================================
-- 4. ROADMAP ITEMS TABLE
-- ============================================
CREATE TABLE cms.roadmap_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phase TEXT NOT NULL,
  title TEXT NOT NULL,
  timeline TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('In Progress', 'Upcoming', 'Planned', 'Later', 'Completed')),
  focus TEXT,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default roadmap
INSERT INTO cms.roadmap_items (phase, title, timeline, status, focus, description, display_order) VALUES
  (
    'Phase 1',
    'AcronIQ Veritus Core',
    'Q4 2025',
    'In Progress',
    'Data-driven research workflows',
    'Developing the core intelligence engine that powers business analysis and strategic evaluation reports.',
    1
  ),
  (
    'Phase 2',
    '£199 Lean Report Product',
    'Q1 2026',
    'Upcoming',
    'Commercial validation',
    'Offer structured, high-value strategic research reports for founders, investors, and operators.',
    2
  ),
  (
    'Phase 3',
    'AcronIQ Portal',
    'Q2 2026',
    'Planned',
    'Client deliverables and internal operations',
    'Unified environment for report access, client communication, contract management, and team operations.',
    3
  );

-- ============================================
-- 5. ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE cms.journal_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.product_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms.roadmap_items ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public can view published journal posts"
  ON cms.journal_posts FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public can view site content"
  ON cms.site_content FOR SELECT
  USING (true);

CREATE POLICY "Public can view products"
  ON cms.product_content FOR SELECT
  USING (true);

CREATE POLICY "Public can view visible roadmap items"
  ON cms.roadmap_items FOR SELECT
  USING (is_visible = true);

-- Admin full access (you'll need to set up auth and replace with your user ID)
-- For now, we'll use service role key for admin operations

-- ============================================
-- 6. FUNCTIONS FOR CONTENT MANAGEMENT
-- ============================================

-- Function to get published journal posts
CREATE OR REPLACE FUNCTION cms.get_published_posts()
RETURNS TABLE (
  id UUID,
  title TEXT,
  slug TEXT,
  summary TEXT,
  content TEXT,
  author TEXT,
  author_title TEXT,
  author_credentials TEXT,
  series TEXT,
  key_takeaways JSONB,
  publish_date TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    jp.id,
    jp.title,
    jp.slug,
    jp.summary,
    jp.content,
    jp.author,
    jp.author_title,
    jp.author_credentials,
    jp.series,
    jp.key_takeaways,
    jp.publish_date
  FROM cms.journal_posts jp
  WHERE jp.is_published = true
  ORDER BY jp.publish_date DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get site content by keys
CREATE OR REPLACE FUNCTION cms.get_site_content(content_keys TEXT[])
RETURNS TABLE (
  key TEXT,
  value TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT sc.key, sc.value
  FROM cms.site_content sc
  WHERE sc.key = ANY(content_keys);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 7. TRIGGERS FOR UPDATED_AT
-- ============================================

CREATE OR REPLACE FUNCTION cms.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_journal_posts_updated_at
  BEFORE UPDATE ON cms.journal_posts
  FOR EACH ROW
  EXECUTE FUNCTION cms.update_updated_at_column();

CREATE TRIGGER update_product_content_updated_at
  BEFORE UPDATE ON cms.product_content
  FOR EACH ROW
  EXECUTE FUNCTION cms.update_updated_at_column();

CREATE TRIGGER update_roadmap_items_updated_at
  BEFORE UPDATE ON cms.roadmap_items
  FOR EACH ROW
  EXECUTE FUNCTION cms.update_updated_at_column();

-- ============================================
-- 8. GRANT PERMISSIONS
-- ============================================

-- Grant usage on schema
GRANT USAGE ON SCHEMA cms TO anon, authenticated;

-- Grant select on tables for public access (RLS will control what they see)
GRANT SELECT ON cms.journal_posts TO anon, authenticated;
GRANT SELECT ON cms.site_content TO anon, authenticated;
GRANT SELECT ON cms.product_content TO anon, authenticated;
GRANT SELECT ON cms.roadmap_items TO anon, authenticated;

-- Grant execute on functions
GRANT EXECUTE ON FUNCTION cms.get_published_posts() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION cms.get_site_content(TEXT[]) TO anon, authenticated;
