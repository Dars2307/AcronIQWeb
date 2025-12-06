import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('cms.product_content')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, slug, description, features, status } = body;

    const productData = {
      title,
      slug,
      description,
      features,
      status,
      updated_at: new Date().toISOString()
    };

    let data, error;

    if (id) {
      // Update existing product
      ({ data, error } = await supabaseAdmin
        .from('cms.product_content')
        .update(productData)
        .eq('id', id)
        .select()
        .single());
    } else {
      // Create new product
      ({ data, error } = await supabaseAdmin
        .from('cms.product_content')
        .insert({
          ...productData,
          created_at: new Date().toISOString()
        })
        .select()
        .single());
    }

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('cms.product_content')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
