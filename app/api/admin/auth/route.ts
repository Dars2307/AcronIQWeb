import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { accessKey } = await req.json();
    const adminKey = process.env.ADMIN_ACCESS_KEY;

    if (!adminKey) {
      return NextResponse.json({ error: 'Admin access not configured' }, { status: 500 });
    }

    if (accessKey === adminKey) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Invalid access key' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
