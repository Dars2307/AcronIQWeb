import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const useFallback = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');
    if (useFallback) {
      return NextResponse.json({ posts: [] }, { status: 200 });
    }

    const { data, error } = await supabase
      .schema('cms')
      .rpc('get_published_posts');

    if (error) throw error;

    return NextResponse.json({ posts: data || [] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching journal posts:', error);
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}
