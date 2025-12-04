# AcronIQ CMS Setup Guide

## Overview
This CMS allows you to manage all website content dynamically through Supabase without editing frontend code.

**Architecture Note**: Following AcronIQ's schema-based architecture (like `veritus`, `portal`, `signals`), all CMS tables are organized under the `cms` schema namespace for clean separation and scalability.

## Setup Instructions

### 1. Supabase Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and API keys

2. **Run Database Schema**
   - Open Supabase SQL Editor
   - Copy and paste the entire `supabase/schema.sql` file
   - Execute the SQL
   - This creates all tables, policies, and functions

3. **Configure Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
     ```

### 2. Install Dependencies

```bash
npm install @supabase/supabase-js
```

### 3. Content Management

#### Managing Journal Posts

**Via Supabase Dashboard:**
1. Go to Table Editor → Select `cms` schema → `journal_posts`
2. Click "Insert row"
3. Fill in:
   - `title`: Article title
   - `slug`: URL-friendly slug (e.g., "why-clarity-matters")
   - `summary`: Brief summary
   - `content`: Full article content (supports markdown)
   - `key_takeaways`: JSON array of key points
   - `is_published`: Set to `true` to publish
   - `publish_date`: Publication date

**Example Key Takeaways JSON:**
```json
[
  "Leaders fail due to clarity issues, not data scarcity",
  "Data without clarity creates hesitation",
  "Strategic clarity requires precision and trust"
]
```

#### Managing Homepage Content

1. Go to Table Editor → `site_content`
2. Edit the `value` field for any key:
   - `hero_headline`: Main homepage headline
   - `hero_subline`: Supporting text
   - `hero_cta_primary`: Primary button text
   - `founder_quote`: Founder quote on homepage

#### Managing Products

1. Go to Table Editor → `product_content`
2. Edit existing products or add new ones
3. Fields:
   - `name`: Product name
   - `description`: Product description
   - `status`: "Flagship Service", "Beta", "Coming Soon", "Planned"
   - `features`: JSON array of features
   - `display_order`: Order on homepage (1, 2, 3...)

#### Managing Roadmap

1. Go to Table Editor → `roadmap_items`
2. Edit phases or add new ones
3. Set `is_visible` to `false` to hide items

### 4. API Endpoints

All content is available via API:

- **Journal Posts**: `GET /api/content/journal`
- **Site Content**: `GET /api/content/site?keys=hero_headline,hero_subline`
- **Products**: `GET /api/content/products`
- **Roadmap**: `GET /api/content/roadmap`

### 5. Frontend Integration

The frontend will automatically fetch content from these APIs. If the API fails, it falls back to hardcoded content.

## Publishing Workflow

### To Publish a New Article:

1. **Draft in Supabase**
   - Create new row in `journal_posts`
   - Set `is_published = false`
   - Write and preview content

2. **Review**
   - Check content in Supabase
   - Test locally if needed

3. **Publish**
   - Set `is_published = true`
   - Set `publish_date` to current date
   - Article appears on website immediately

### To Update Homepage Text:

1. Go to `site_content` table
2. Find the key you want to update
3. Edit the `value` field
4. Changes appear immediately on website

## Security

- **Public Access**: Read-only for published content
- **Admin Access**: Full access via service role key
- **Row Level Security**: Enabled on all tables
- Only published content is visible to public

## Backup

Supabase automatically backs up your database. You can also:
1. Export tables as CSV from Supabase dashboard
2. Use Supabase CLI for automated backups

## Troubleshooting

**Content not showing:**
- Check `is_published = true` for journal posts
- Check `is_visible = true` for roadmap items
- Verify API endpoints return data

**Permission errors:**
- Ensure RLS policies are set correctly
- Check environment variables are configured

## Future Enhancements

- Admin dashboard UI (coming soon)
- Content preview before publishing
- Scheduled publishing
- Content versioning
- Media library for images
