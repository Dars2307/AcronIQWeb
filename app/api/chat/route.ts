import { NextResponse } from 'next/server';
import { generateContextualResponse, handleComplexQuery, findBestMatch } from '@/lib/chatKnowledgeBase';

export const dynamic = 'force-dynamic';

interface ChatMessage { 
  role: 'user' | 'assistant'; 
  content: string;
}

interface ConversationContext {
  previousQuestions: string[];
  currentTopic?: string;
  userIntent?: string;
}

function analyzeUserIntent(message: string, context: ConversationContext): string {
  const msg = message.toLowerCase();
  
  // Detect intent patterns
  if (msg.includes('how much') || msg.includes('cost') || msg.includes('price') || msg.includes('£')) {
    return 'pricing';
  }
  if (msg.includes('how to') || msg.includes('process') || msg.includes('steps')) {
    return 'process';
  }
  if (msg.includes('when') || msg.includes('timeline') || msg.includes('available')) {
    return 'timeline';
  }
  if (msg.includes('why') || msg.includes('benefit') || msg.includes('advantage')) {
    return 'benefits';
  }
  if (msg.includes('compare') || msg.includes('vs') || msg.includes('difference')) {
    return 'comparison';
  }
  if (msg.includes('beta') || msg.includes('access') || msg.includes('join')) {
    return 'beta';
  }
  
  return 'general';
}

function buildIntelligentResponse(message: string, context: ConversationContext): string {
  const intent = analyzeUserIntent(message, context);
  
  // Handle follow-up questions based on context
  if (context.previousQuestions.length > 0) {
    const lastTopic = context.currentTopic;
    
    // If user asks "tell me more" or similar, expand on the last topic
    if (message.toLowerCase().match(/tell me more|more info|elaborate|expand|details/)) {
      const match = findBestMatch(lastTopic || '');
      if (match) {
        return `Here are additional details about ${match.category}:\n\n${match.response}\n\nWould you like specific information about any particular aspect?`;
      }
    }
  }
  
  // Try complex query handler first
  let response = handleComplexQuery(message);
  
  // If no complex match, use standard knowledge base
  if (response === generateContextualResponse(message)) {
    response = generateContextualResponse(message);
  }
  
  // Add contextual follow-ups based on intent
  switch (intent) {
    case 'pricing':
      if (!response.includes('beta')) {
        response += '\n\nPrivate beta participants receive up to 40% off standard pricing. Would you like to learn about beta access?';
      }
      break;
    case 'beta':
      if (!response.includes('apply')) {
        response += '\n\nReady to apply? I can guide you through the private beta application process.';
      }
      break;
    case 'process':
      if (!response.includes('example')) {
        response += '\n\nWould you like a specific example of how Veritus handles strategic analysis?';
      }
      break;
  }
  
  return response;
}

function updateContext(message: string, response: string, context: ConversationContext): ConversationContext {
  const match = findBestMatch(message);
  
  return {
    previousQuestions: [...context.previousQuestions.slice(-2), message], // Keep last 3 questions
    currentTopic: match?.category || context.currentTopic,
    userIntent: analyzeUserIntent(message, context)
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({ messages: [] as ChatMessage[] }));
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : [];
    const lastMessage = messages.filter(Boolean).slice(-1)[0];
    
    if (!lastMessage?.content) {
      return NextResponse.json({ 
        answer: "Hello! I'm AcronIQ Assist. I can help you learn about Veritus, our private beta programme, pricing, and site navigation. What would you like to know?" 
      }, { status: 200 });
    }

    // Build conversation context from message history
    const context: ConversationContext = {
      previousQuestions: messages
        .filter(m => m.role === 'user')
        .slice(-3)
        .map(m => m.content),
      currentTopic: undefined,
      userIntent: undefined
    };

    // Generate intelligent response using knowledge base
    let answer = buildIntelligentResponse(lastMessage.content, context);
    
    // Update context for next interaction
    const updatedContext = updateContext(lastMessage.content, answer, context);
    
    // Add strategic referral for complex business questions
    if (lastMessage.content.toLowerCase().match(/strategy|strategic|decision|analysis|recommend|advise|business.*plan/)) {
      if (!answer.includes('Veritus') && !answer.includes('private beta')) {
        answer += '\n\nFor comprehensive strategic analysis requiring precision and trust, Veritus provides executive-level intelligence with 24-48 hour delivery.';
      }
    }

    // Add beta CTA for pricing inquiries
    if (lastMessage.content.toLowerCase().includes('price') || lastMessage.content.toLowerCase().includes('cost')) {
      if (!answer.includes('beta') && !answer.includes('40%')) {
        answer += '\n\n💡 Private beta participants receive up to 40% off standard pricing plus priority access.';
      }
    }

    // Ensure response quality and length
    if (answer.length < 50) {
      answer = generateContextualResponse(lastMessage.content);
    }

    return NextResponse.json({ answer }, { status: 200 });
    
  } catch (error) {
    console.error('Chat API error:', error);
    
    const fallbackAnswer = `I'm here to help with questions about AcronIQ Research, our Veritus platform, and private beta programme. 

I can assist with:
• Veritus features and strategic capabilities
• Private beta access and application process
• Pricing tiers and investment options
• Company information and founder background
• Site navigation and contact methods

What specific information can I provide for you?`;

    return NextResponse.json({ answer: fallbackAnswer }, { status: 200 });
  }
}
