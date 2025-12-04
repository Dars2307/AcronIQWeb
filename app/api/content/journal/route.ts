import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .schema('cms')
      .rpc('get_published_posts');

    if (error) throw error;

    return NextResponse.json({ posts: data || [] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching journal posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch journal posts' },
      { status: 500 }
    );
  }
}
