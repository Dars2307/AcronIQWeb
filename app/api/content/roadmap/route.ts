import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { FALLBACK_ROADMAP } from '@/lib/content';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const useFallback = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');
    if (useFallback) {
      return NextResponse.json({ roadmap: FALLBACK_ROADMAP }, { status: 200 });
    }
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
    return NextResponse.json({ roadmap: FALLBACK_ROADMAP }, { status: 200 });
  }
}
