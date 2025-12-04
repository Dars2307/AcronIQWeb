import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Types
export interface JournalPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  author_title: string;
  author_credentials: string;
  series: string;
  key_takeaways: string[];
  publish_date: string;
}

export interface SiteContent {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: string;
  badge_color: string;
  features: string[];
  is_featured: boolean;
  link: string;
}

export interface RoadmapItem {
  id: string;
  phase: string;
  title: string;
  timeline: string;
  status: string;
  focus: string;
  description: string;
  display_order: number;
}
