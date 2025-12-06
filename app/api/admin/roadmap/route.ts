import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('cms.roadmap_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching roadmap items:', error);
    return NextResponse.json({ error: 'Failed to fetch roadmap items' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, phase, title, description, status, is_visible } = body;

    const roadmapData = {
      phase,
      title,
      description,
      status,
      is_visible,
      updated_at: new Date().toISOString()
    };

    let data, error;

    if (id) {
      // Update existing roadmap item
      ({ data, error } = await supabaseAdmin
        .from('cms.roadmap_items')
        .update(roadmapData)
        .eq('id', id)
        .select()
        .single());
    } else {
      // Create new roadmap item
      ({ data, error } = await supabaseAdmin
        .from('cms.roadmap_items')
        .insert({
          ...roadmapData,
          created_at: new Date().toISOString()
        })
        .select()
        .single());
    }

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error saving roadmap item:', error);
    return NextResponse.json({ error: 'Failed to save roadmap item' }, { status: 500 });
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
      .from('cms.roadmap_items')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting roadmap item:', error);
    return NextResponse.json({ error: 'Failed to delete roadmap item' }, { status: 500 });
  }
}
