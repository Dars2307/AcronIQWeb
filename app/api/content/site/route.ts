import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { FALLBACK_SITE_CONTENT } from '@/lib/content';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const keys = searchParams.get('keys')?.split(',') || [];
    const useFallback = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');

    if (keys.length === 0) {
      // Return all site content if no keys specified
      if (useFallback) {
        const all = Object.entries(FALLBACK_SITE_CONTENT).map(([key, value]) => ({ key, value }));
        return NextResponse.json({ content: all }, { status: 200 });
      }
      const { data, error } = await supabase
        .schema('cms')
        .from('site_content')
        .select('key, value');

      if (error) throw error;

      return NextResponse.json({ content: data || [] }, { status: 200 });
    }

    // Return specific keys
    if (useFallback) {
      const selected = keys
        .filter((k) => k in FALLBACK_SITE_CONTENT)
        .map((k) => ({ key: k, value: FALLBACK_SITE_CONTENT[k] }));
      return NextResponse.json({ content: selected }, { status: 200 });
    }
    const { data, error } = await supabase
      .schema('cms')
      .rpc('get_site_content', { content_keys: keys });

    if (error) throw error;

    return NextResponse.json({ content: data || [] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching site content:', error);
    // Soft-fallback to static content to avoid runtime errors
    const all = Object.entries(FALLBACK_SITE_CONTENT).map(([key, value]) => ({ key, value }));
    return NextResponse.json({ content: all }, { status: 200 });
  }
}
