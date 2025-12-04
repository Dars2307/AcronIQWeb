import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .schema('cms')
      .from('roadmap_items')
      .select('*')
      .eq('is_visible', true)
      .order('display_order', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ roadmap: data || [] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching roadmap:', error);
    return NextResponse.json(
      { error: 'Failed to fetch roadmap' },
      { status: 500 }
    );
  }
}
