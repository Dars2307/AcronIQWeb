import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const keys = searchParams.get('keys')?.split(',') || [];

    if (keys.length === 0) {
      // Return all site content if no keys specified
      const { data, error } = await supabase
        .schema('cms')
        .from('site_content')
        .select('key, value');

      if (error) throw error;

      return NextResponse.json({ content: data || [] }, { status: 200 });
    }

    // Return specific keys
    const { data, error } = await supabase
      .schema('cms')
      .rpc('get_site_content', { content_keys: keys });

    if (error) throw error;

    return NextResponse.json({ content: data || [] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching site content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch site content' },
      { status: 500 }
    );
  }
}
