-- AcronIQ CMS - Cleanup Script
-- Run this FIRST to remove any CMS tables from public schema
-- This ensures clean separation following AcronIQ's schema-based architecture

-- ============================================
-- DROP PUBLIC SCHEMA TABLES (if they exist)
-- ============================================

-- Drop triggers first
DROP TRIGGER IF EXISTS update_journal_posts_updated_at ON public.journal_posts;
DROP TRIGGER IF EXISTS update_product_content_updated_at ON public.product_content;
DROP TRIGGER IF EXISTS update_roadmap_items_updated_at ON public.roadmap_items;

-- Drop functions
DROP FUNCTION IF EXISTS public.update_updated_at_column();
DROP FUNCTION IF EXISTS public.get_published_posts();
DROP FUNCTION IF EXISTS public.get_site_content(TEXT[]);

-- Drop policies
DROP POLICY IF EXISTS "Public can view published journal posts" ON public.journal_posts;
DROP POLICY IF EXISTS "Public can view site content" ON public.site_content;
DROP POLICY IF EXISTS "Public can view products" ON public.product_content;
DROP POLICY IF EXISTS "Public can view visible roadmap items" ON public.roadmap_items;

-- Drop tables
DROP TABLE IF EXISTS public.journal_posts CASCADE;
DROP TABLE IF EXISTS public.site_content CASCADE;
DROP TABLE IF EXISTS public.product_content CASCADE;
DROP TABLE IF EXISTS public.roadmap_items CASCADE;

-- ============================================
-- VERIFICATION
-- ============================================

-- Check that no CMS tables remain in public schema
SELECT 
  schemaname, 
  tablename 
FROM pg_tables 
WHERE schemaname = 'public' 
  AND tablename IN ('journal_posts', 'site_content', 'product_content', 'roadmap_items');

-- Should return 0 rows if cleanup was successful
