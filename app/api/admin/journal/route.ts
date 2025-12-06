import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('cms.journal_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching journal posts:', error);
    return NextResponse.json({ error: 'Failed to fetch journal posts' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, slug, content, excerpt, is_published, publish_date } = body;

    const postData = {
      title,
      slug,
      content,
      excerpt,
      is_published,
      publish_date: publish_date ? new Date(publish_date).toISOString() : null,
      updated_at: new Date().toISOString()
    };

    let data, error;

    if (id) {
      // Update existing post
      ({ data, error } = await supabaseAdmin
        .from('cms.journal_posts')
        .update(postData)
        .eq('id', id)
        .select()
        .single());
    } else {
      // Create new post
      ({ data, error } = await supabaseAdmin
        .from('cms.journal_posts')
        .insert({
          ...postData,
          created_at: new Date().toISOString()
        })
        .select()
        .single());
    }

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error saving journal post:', error);
    return NextResponse.json({ error: 'Failed to save journal post' }, { status: 500 });
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
      .from('cms.journal_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting journal post:', error);
    return NextResponse.json({ error: 'Failed to delete journal post' }, { status: 500 });
  }
}
