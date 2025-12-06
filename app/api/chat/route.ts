import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Simple type for incoming messages
interface ChatMessage { role: 'user' | 'assistant'; content: string }

function buildFallbackAnswer(question: string): string {
  const base = `I'm AcronIQ Assist, here to help you navigate our platform. AcronIQ offers strategic intelligence solutions for leaders.

Our products:
- Veritus: Strategic Intelligence Advisor (for deep analysis)
- Signals: Market intelligence dashboards (beta)
- BusinessHub: Secure client workspace (coming soon)

For strategic analysis, Veritus can help you directly.`;
  
  const q = question.toLowerCase();
  if (q.includes('veritus')) return 'Veritus is AcronIQ\'s Strategic Intelligence Advisor — our premium product for deep strategic analysis. For detailed strategic insight, you can speak directly with Veritus.';
  if (q.includes('signals')) return 'Signals provides market intelligence dashboards to help you spot important trends early. It\'s currently in beta.';
  if (q.includes('businesshub') || q.includes('portal') || q.includes('hub')) return 'BusinessHub is our secure client workspace for reports and collaboration. It\'s coming soon in our roadmap.';
  if (q.includes('early access') || q.includes('beta') || q.includes('waitlist')) return 'Join Early Access to get priority updates and help shape our product development. You can sign up through our Early Access page.';
  if (q.includes('roadmap')) return 'Our roadmap: Q1 Early Access launch, Q2 Signals beta, Q3 advisory expansion. Visit our roadmap page for details.';
  if (q.includes('pricing') || q.includes('cost') || q.includes('£199')) return 'We offer strategic research reports starting at £199. For detailed pricing and strategic consultation, Veritus can provide personalized guidance.';
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
        system: 'You are AcronIQ Assist, a helpful platform guide. Provide brief, informative answers about AcronIQ products and navigation. For strategic analysis, always refer users to "Veritus, AcronIQ\'s Strategic Intelligence Advisor." Keep responses to 2-4 sentences. Never provide strategic advice or deep analysis yourself.',
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
    let answer = data?.answer || data?.choices?.[0]?.message?.content || buildFallbackAnswer(last?.content || '');
    
    // Add Veritus referral if the response seems strategic
    if (answer.length > 200 || /analyz|strateg|recommend|advise|suggest.*business/i.test(answer)) {
      answer += ' For deeper strategic analysis, you can speak directly with Veritus, AcronIQ\'s Strategic Intelligence Advisor.';
    }
    return NextResponse.json({ answer }, { status: 200 });
  } catch (error) {
    const answer = buildFallbackAnswer('');
    return NextResponse.json({ answer }, { status: 200 });
  }
}
