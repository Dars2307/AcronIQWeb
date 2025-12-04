# AcronIQ CMS - Installation Order

## ⚠️ Important: Schema Architecture

AcronIQ follows a **schema-based architecture** where each system has its own namespace:
- `veritus` - AcronIQ Veritus Core
- `portal` - AcronIQ Portal
- `signals` - AcronIQ Signals
- `cms` - Content Management System (this installation)

**Never use the `public` schema for AcronIQ systems.**

---

## 📋 Installation Steps

### Step 1: Cleanup (If Needed)

If you previously ran the schema in the `public` schema, clean it up first:

1. Open Supabase SQL Editor
2. Run: `supabase/cleanup-public-schema.sql`
3. Verify no CMS tables remain in public schema

### Step 2: Install CMS Schema

1. Open Supabase SQL Editor
2. Run: `supabase/schema.sql`
3. Wait for "Success. No rows returned" message

**What this does:**
- Creates `cms` schema namespace
- Creates 4 tables: `journal_posts`, `site_content`, `product_content`, `roadmap_items`
- Sets up Row Level Security (RLS)
- Creates helper functions
- Inserts default data
- Configures permissions

### Step 3: Verify Installation

1. Run: `supabase/verify-cms-schema.sql`
2. Check all verifications pass ✅

**Expected results:**
- ✅ CMS schema exists
- ✅ 4 tables in cms schema
- ✅ 0 CMS tables in public schema
- ✅ RLS enabled on all tables
- ✅ 3 functions in cms schema
- ✅ Default data loaded (7 site content, 3 products, 3 roadmap items)
- ✅ Permissions granted to anon/authenticated

### Step 4: Test API Access

1. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

2. Install dependencies:
```bash
npm install @supabase/supabase-js
```

3. Restart dev server:
```bash
npm run dev
```

4. Test API endpoints:
- http://localhost:5000/api/content/site
- http://localhost:5000/api/content/products
- http://localhost:5000/api/content/roadmap
- http://localhost:5000/api/content/journal

All should return JSON with data.

---

## 🔍 Troubleshooting

### Issue: "relation does not exist"
**Cause**: Tables are in wrong schema
**Fix**: Run cleanup script, then reinstall schema.sql

### Issue: "permission denied for schema cms"
**Cause**: Permissions not granted
**Fix**: Re-run the GRANT section of schema.sql

### Issue: "function does not exist"
**Cause**: Functions not in cms schema
**Fix**: Check functions exist with verify script

### Issue: API returns empty data
**Cause**: RLS blocking access or no data inserted
**Fix**: 
1. Check RLS policies exist
2. Verify default data with verify script
3. Check API is using correct schema

---

## 📊 Schema Structure

```
cms/
├── journal_posts          (articles)
├── site_content          (key-value for homepage)
├── product_content       (products/services)
├── roadmap_items         (roadmap phases)
├── get_published_posts() (function)
├── get_site_content()    (function)
└── update_updated_at_column() (trigger function)
```

---

## ✅ Post-Installation Checklist

- [ ] Cleanup script run (if needed)
- [ ] Schema.sql installed successfully
- [ ] Verification script passes all checks
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] API endpoints return data
- [ ] No tables in public schema
- [ ] All tables in cms schema

---

## 🎯 Next Steps

After successful installation:

1. **Migrate existing articles**: Use `scripts/migrate-content.md`
2. **Update frontend**: Integrate API calls (coming next)
3. **Test publishing**: Add a test article via Supabase dashboard
4. **Deploy**: Push to production with environment variables

---

## 📚 Additional Resources

- Full setup guide: `docs/CMS_SETUP.md`
- Quick start: `docs/CMS_QUICK_START.md`
- Migration scripts: `scripts/migrate-content.md`
- Summary: `docs/CMS_SUMMARY.md`
