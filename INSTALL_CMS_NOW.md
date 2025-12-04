# 🚀 Install CMS Schema - Quick Start

## ⚡ 3-Minute Setup

### Step 1: Open Supabase
1. Go to: https://supabase.com/dashboard
2. Select project: `zmfqwiyqgglznkpvusgp`
3. Click "SQL Editor" in sidebar

### Step 2: Run Schema
1. Click "New Query"
2. Copy ALL of `supabase/schema.sql`
3. Paste and click "Run"
4. Wait for "Success" message

### Step 3: Verify
1. Click "New Query" again
2. Copy ALL of `supabase/verify-cms-schema.sql`
3. Paste and click "Run"
4. Check all results show ✅

### Step 4: Test
```bash
# Restart dev server
npm run dev

# Visit homepage
http://localhost:5000
```

## ✅ What This Does

- Creates `cms` schema in your database
- Creates 4 tables: `journal_posts`, `site_content`, `product_content`, `roadmap_items`
- Inserts default content for homepage
- Sets up RLS policies for public read access
- Creates helper functions for content fetching

## 📊 Current Status

**Frontend**: ✅ Ready (homepage integrated with CMS)
**Backend**: ✅ Ready (API routes configured)
**Database**: ⏳ Waiting (schema needs installation)

## 🎯 After Installation

Your homepage will:
- Load hero content from CMS
- Display products from CMS
- Show roadmap from CMS
- Use founder quote from CMS
- Fall back to static content if CMS unavailable

## 📚 Full Documentation

- **Installation Guide**: `docs/CMS_INSTALLATION_NEXT_STEPS.md`
- **Integration Status**: `docs/CMS_INTEGRATION_STATUS.md`
- **Frontend Changes**: `docs/CMS_FRONTEND_INTEGRATION_COMPLETE.md`
- **Setup Guide**: `docs/CMS_SETUP.md`
- **Quick Start**: `docs/CMS_QUICK_START.md`

---

**Ready?** Open Supabase and run `supabase/schema.sql` now! 🚀
