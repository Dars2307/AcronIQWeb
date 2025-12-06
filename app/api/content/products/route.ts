import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { FALLBACK_PRODUCTS } from '@/lib/content';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const useFallback = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');
    if (useFallback) {
      return NextResponse.json({ products: FALLBACK_PRODUCTS }, { status: 200 });
    }

    const { data, error } = await supabase
      .schema('cms')
      .from('product_content')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ products: data || [] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ products: FALLBACK_PRODUCTS }, { status: 200 });
  }
}
