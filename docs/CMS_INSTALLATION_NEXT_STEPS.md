# CMS Installation - Next Steps

## ✅ What's Complete

- [x] CMS schema file created (`supabase/schema.sql`)
- [x] API routes configured
- [x] Content utilities with failover
- [x] Frontend pages updated to use CMS
- [x] Verification script ready

## 🚀 What You Need to Do Now

### Step 1: Install the CMS Schema in Supabase

The CMS schema needs to be created in your Supabase database. Here's how:

1. **Open Supabase Dashboard**
   - Go to: https://supabase.com/dashboard
   - Select your project: `zmfqwiyqgglznkpvusgp`

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run the Schema File**
   - Copy the entire contents of `supabase/schema.sql`
   - Paste into the SQL Editor
   - Click "Run" or press `Ctrl+Enter`

4. **Verify Installation**
   - Copy the contents of `supabase/verify-cms-schema.sql`
   - Paste into a new query
   - Click "Run"
   - Check that all verifications pass ✅

### Step 2: Test the Integration

Once the schema is installed:

1. **Restart your dev server** (if it's running)
   ```bash
   npm run dev
   ```

2. **Visit your homepage**
   - Open: http://localhost:5000
   - The page should load with content from the CMS
   - Check browser console for any errors

3. **Test API endpoints**
   ```bash
   curl http://localhost:5000/api/content/site
   curl http://localhost:5000/api/content/products
   curl http://localhost:5000/api/content/roadmap
   curl http://localhost:5000/api/content/journal
   ```

### Step 3: Verify Failover Works

To test that static fallbacks work when CMS is unavailable:

1. Temporarily change your Supabase URL in `.env.local` to an invalid value
2. Restart the dev server
3. Visit the homepage - it should still load with fallback content
4. Restore the correct Supabase URL

## 📊 Current Status

**Error**: `The schema must be one of the following: api, graphql_public, acroniq_time, businesshub, legalvault, taskmanager, signals, truenorth, realtime, public`

**Cause**: The `cms` schema doesn't exist in your Supabase database yet.

**Solution**: Run `supabase/schema.sql` in your Supabase SQL Editor (see Step 1 above).

## 🎯 After Installation

Once the schema is installed and verified:

1. ✅ Homepage will fetch content from CMS
2. ✅ Products page will fetch from CMS
3. ✅ Roadmap page will fetch from CMS
4. ✅ Journal page will fetch from CMS
5. ✅ Static fallbacks will work if CMS is unavailable

## 📝 Next Phase: Admin Dashboard

After the CMS is working:

1. Build `/admin` route for content management
2. Implement Supabase Auth for founder-only access
3. Create content editor UI
4. Add publish/unpublish functionality

## 🆘 Troubleshooting

**Issue**: API still returns 500 after running schema
- **Solution**: Verify the schema was created: Run `SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'cms';`
- Should return: `cms`

**Issue**: RLS policies blocking access
- **Solution**: Check that RLS policies allow public SELECT on published content
- Run the verification script to check permissions

**Issue**: Content not updating
- **Solution**: Check Next.js cache settings (revalidate times in `lib/content.ts`)
- Clear cache: `rm -rf .next` and restart server

---

**Ready to install?** Follow Step 1 above to get started! 🚀
