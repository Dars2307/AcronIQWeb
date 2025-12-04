# AcronIQ CMS - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Install Supabase Package
```bash
npm install @supabase/supabase-js
```

### Step 2: Create Supabase Project
1. Go to https://supabase.com
2. Click "New Project"
3. Name it "acroniq-cms"
4. Choose a region close to you
5. Set a strong database password
6. Wait for project to initialize (~2 minutes)

### Step 3: Run Database Schema
1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy entire contents of `supabase/schema.sql`
4. Paste and click "Run"
5. You should see "Success. No rows returned"

### Step 4: Get API Keys
1. In Supabase, go to **Settings** → **API**
2. Copy these values:
   - Project URL
   - `anon` `public` key
   - `service_role` `secret` key

### Step 5: Configure Environment
1. Open `.env.local` in your project
2. Add these lines:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

### Step 6: Restart Dev Server
```bash
npm run dev
```

## ✅ Verify Setup

Test the API endpoints:
- http://localhost:5000/api/content/journal
- http://localhost:5000/api/content/site
- http://localhost:5000/api/content/products

You should see JSON responses with your content!

## 📝 Publishing Your First Article

1. Go to Supabase → **Table Editor** → `journal_posts`
2. Click **Insert** → **Insert row**
3. Fill in:
   ```
   title: "Test Article"
   slug: "test-article"
   summary: "This is a test"
   content: "Full article content here..."
   is_published: true
   publish_date: (select today's date)
   ```
4. Click **Save**
5. Visit http://localhost:5000/journal
6. Your article appears!

## 🎯 Next Steps

- Read full documentation: `docs/CMS_SETUP.md`
- Migrate existing articles to database
- Set up admin dashboard (optional)
- Deploy to production

## 🆘 Need Help?

**Content not showing?**
- Check `is_published = true`
- Check `publish_date` is set
- Verify API returns data: `/api/content/journal`

**API errors?**
- Check environment variables are set
- Restart dev server
- Check Supabase project is active

**Database errors?**
- Re-run `supabase/schema.sql`
- Check RLS policies are enabled
- Verify service role key is correct
