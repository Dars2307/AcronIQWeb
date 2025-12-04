-- AcronIQ CMS - Verification Script
-- Run this AFTER installing schema.sql to verify correct setup

-- ============================================
-- 1. VERIFY CMS SCHEMA EXISTS
-- ============================================
SELECT schema_name 
FROM information_schema.schemata 
WHERE schema_name = 'cms';
-- Should return: cms

-- ============================================
-- 2. VERIFY ALL TABLES ARE IN CMS SCHEMA
-- ============================================
SELECT 
  schemaname, 
  tablename 
FROM pg_tables 
WHERE schemaname = 'cms'
ORDER BY tablename;
-- Should return:
-- cms | journal_posts
-- cms | product_content
-- cms | roadmap_items
-- cms | site_content

-- ============================================
-- 3. VERIFY NO CMS TABLES IN PUBLIC SCHEMA
-- ============================================
SELECT 
  schemaname, 
  tablename 
FROM pg_tables 
WHERE schemaname = 'public' 
  AND tablename IN ('journal_posts', 'site_content', 'product_content', 'roadmap_items');
-- Should return 0 rows

-- ============================================
-- 4. VERIFY RLS IS ENABLED
-- ============================================
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE schemaname = 'cms'
ORDER BY tablename;
-- All should have rowsecurity = true

-- ============================================
-- 5. VERIFY FUNCTIONS EXIST IN CMS SCHEMA
-- ============================================
SELECT 
  n.nspname as schema,
  p.proname as function_name
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
WHERE n.nspname = 'cms'
  AND p.proname IN ('get_published_posts', 'get_site_content', 'update_updated_at_column')
ORDER BY p.proname;
-- Should return 3 functions in cms schema

-- ============================================
-- 6. VERIFY DEFAULT DATA EXISTS
-- ============================================

-- Check site content
SELECT COUNT(*) as site_content_count FROM cms.site_content;
-- Should return 7 rows

-- Check products
SELECT COUNT(*) as products_count FROM cms.product_content;
-- Should return 3 rows

-- Check roadmap
SELECT COUNT(*) as roadmap_count FROM cms.roadmap_items;
-- Should return 3 rows

-- Check journal posts
SELECT COUNT(*) as journal_posts_count FROM cms.journal_posts;
-- Should return 0 rows (until you add articles)

-- ============================================
-- 7. VERIFY PERMISSIONS
-- ============================================
SELECT 
  grantee,
  privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'cms'
  AND table_name = 'journal_posts'
ORDER BY grantee, privilege_type;
-- Should show SELECT permissions for anon and authenticated

-- ============================================
-- 8. TEST FUNCTION EXECUTION
-- ============================================

-- Test get_site_content function
SELECT * FROM cms.get_site_content(ARRAY['hero_headline', 'hero_subline']);
-- Should return 2 rows with homepage content

-- Test get_published_posts function
SELECT * FROM cms.get_published_posts();
-- Should return 0 rows (until you publish articles)

-- ============================================
-- SUMMARY
-- ============================================
SELECT 
  'CMS Schema Setup' as check_name,
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.schemata WHERE schema_name = 'cms')
    THEN '✅ PASSED'
    ELSE '❌ FAILED'
  END as status;
