import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Simple type for incoming messages
interface ChatMessage { role: 'user' | 'assistant'; content: string }

function buildFallbackAnswer(question: string): string {
  const base = `AcronIQ helps leaders turn uncertainty into intelligence.

Products:
- AcronIQ Veritus — Intelligence With Purpose (core engine powered by PIC)
- AcronIQ Signals — AI-driven dashboards for signal over noise (beta)
- BusinessHub — Secure client workspace for collaboration and insights (coming)

Early Access: Join to get priority updates and influence the roadmap.`;
  // Minimal heuristic
  const q = question.toLowerCase();
  if (q.includes('veritus')) return 'AcronIQ Veritus is the core intelligence engine (PIC). It translates ambiguity into decisive direction with explainable reasoning.';
  if (q.includes('signals')) return 'AcronIQ Signals provides AI dashboards that surface the most important signals from complex systems so leaders can act early.';
  if (q.includes('businesshub') || q.includes('portal') || q.includes('hub')) return 'BusinessHub is our secure client workspace for reports, collaboration, and decision workflows (pre-release).';
  if (q.includes('early access') || q.includes('beta') || q.includes('waitlist')) return 'Join Early Access to receive product previews, strategic updates, and help shape priorities.';
  if (q.includes('roadmap')) return 'Roadmap highlights: Q1 Early Access, Q2 Signals beta, Q3 advisory expansion and BusinessHub pilot.';
  return base;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({ messages: [] as ChatMessage[] }));
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : [];
    const last = messages.filter(Boolean).slice(-1)[0];

    const PIC_API_URL = process.env.PIC_API_URL || '';
    const PIC_API_KEY = process.env.PIC_API_KEY || '';
    const PIC_MODEL = process.env.PIC_MODEL || 'pic-mini';

    const useFallback = !PIC_API_URL || !PIC_API_KEY;
    if (useFallback) {
      const answer = buildFallbackAnswer(last?.content || '');
      return NextResponse.json({ answer }, { status: 200 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    // Generic PIC proxy; adjust to match actual PIC API when available
    const res = await fetch(PIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PIC_API_KEY}`,
      },
      body: JSON.stringify({
        model: PIC_MODEL,
        messages,
        max_tokens: 400,
        temperature: 0.2,
        system: 'You are AcronIQ Assistant. Answer questions about AcronIQ, Veritus, Signals, and BusinessHub concisely and helpfully.',
      }),
      signal: controller.signal,
      cache: 'no-store',
    }).catch((e) => {
      return new Response(JSON.stringify({ error: String(e) }), { status: 500 }) as any;
    });

    clearTimeout(timeout);

    if (!res || !('ok' in res) || !res.ok) {
      const answer = buildFallbackAnswer(last?.content || '');
      return NextResponse.json({ answer }, { status: 200 });
    }

    const data = await res.json().catch(() => ({}));
    const answer = data?.answer || data?.choices?.[0]?.message?.content || buildFallbackAnswer(last?.content || '');
    return NextResponse.json({ answer }, { status: 200 });
  } catch (error) {
    const answer = buildFallbackAnswer('');
    return NextResponse.json({ answer }, { status: 200 });
  }
}
