// AcronIQ Chat Knowledge Base - Comprehensive Q&A System
// Covers 100+ question types about AcronIQ Research, Veritus, and Private Beta

export interface KnowledgeEntry {
  keywords: string[];
  category: string;
  response: string;
  followUp?: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // === COMPANY & MISSION ===
  {
    keywords: ['what is acroniq', 'about acroniq', 'company overview', 'who are you'],
    category: 'company',
    response: 'AcronIQ Research is a strategic intelligence organisation focused on providing clarity in complexity for high-stakes decision-making. We\'re currently launching Veritus, our flagship strategic intelligence engine, with additional platforms planned for 2026.',
    followUp: 'Would you like to learn more about Veritus or our private beta programme?'
  },
  {
    keywords: ['mission', 'purpose', 'why acroniq', 'goal'],
    category: 'company',
    response: 'Our mission is to transform complexity into certainty for decision-makers who can\'t afford ambiguity. We provide forensic precision intelligence with the confidence level of "We already know the answer" - built for leaders navigating high-stakes decisions.',
  },
  {
    keywords: ['founder', 'joel ogunniyi', 'team', 'leadership'],
    category: 'company',
    response: 'AcronIQ Research was founded by Joel Ogunniyi, a strategic advisor with a decade in strategic intelligence. Joel built AcronIQ to turn complexity into certainty for decision-makers who require absolute clarity.',
  },
  {
    keywords: ['history', 'when founded', 'established', 'started'],
    category: 'company',
    response: 'AcronIQ Research is a focused startup currently launching our flagship product Veritus. We\'re in the private beta phase, building with select partners before broader market entry.',
  },

  // === VERITUS PRODUCT ===
  {
    keywords: ['what is veritus', 'veritus overview', 'flagship product'],
    category: 'veritus',
    response: 'Veritus is our strategic intelligence engine - "Intelligence With Purpose." It\'s designed for C-suite decision-making, translating ambiguity into decisive direction with explainable AI reasoning. Veritus provides strategic analysis, risk assessment, and executive decision support.',
  },
  {
    keywords: ['veritus features', 'what does veritus do', 'capabilities'],
    category: 'veritus',
    response: 'Veritus offers: Strategic analysis & validation, Executive decision support, Market intelligence synthesis, Risk assessment & mitigation, Board-level presentations, and 48-hour delivery guarantee. It\'s engineered for leaders who require absolute clarity.',
  },
  {
    keywords: ['veritus pricing', 'cost', 'investment', 'how much'],
    category: 'veritus',
    response: 'Veritus strategic reports start from £199. We offer three tiers: Strategic Reports (£199-£499), Executive Advisory (£999-£2,499), and Enterprise Intelligence (custom pricing). Each tier includes different levels of analysis depth and delivery speed.',
  },
  {
    keywords: ['veritus vs competitors', 'why choose veritus', 'unique'],
    category: 'veritus',
    response: 'Veritus combines the analytical precision of McKinsey with the intelligence depth of MI6 and the data power of Palantir. Unlike generic consulting, we provide forensic precision with explainable AI reasoning and 48-hour delivery guarantees.',
  },
  {
    keywords: ['veritus use cases', 'examples', 'scenarios'],
    category: 'veritus',
    response: 'Veritus excels in: M&A due diligence, market entry strategies, competitive intelligence, risk scenario modeling, board decision support, crisis response planning, and strategic pivots. Perfect for decisions where clarity determines outcome.',
  },

  // === PRIVATE BETA PROGRAMME ===
  {
    keywords: ['private beta', 'beta access', 'early access', 'join beta'],
    category: 'beta',
    response: 'Our Private Beta programme offers exclusive early access to Veritus for select strategic partners. Beta participants get priority support, influence product development, and preferential pricing. Applications are reviewed for strategic fit.',
  },
  {
    keywords: ['beta requirements', 'who can join', 'eligibility'],
    category: 'beta',
    response: 'Private Beta is designed for: C-suite executives, Strategic decision-makers, Board members, Senior consultants, and Investment professionals. We prioritise participants with high-stakes decision-making responsibilities.',
  },
  {
    keywords: ['beta application process', 'how to apply', 'selection'],
    category: 'beta',
    response: 'Apply through our Private Beta Access form. We review applications based on: Decision-making authority, Strategic complexity of use cases, Potential for meaningful feedback, and Commitment to partnership. Response within 48 hours.',
  },
  {
    keywords: ['beta benefits', 'advantages', 'perks'],
    category: 'beta',
    response: 'Beta participants receive: Priority access to Veritus, Preferential pricing (up to 40% off), Direct founder access, Influence on product roadmap, Priority support, and Exclusive strategic insights.',
  },
  {
    keywords: ['beta timeline', 'duration', 'when available'],
    category: 'beta',
    response: 'Private Beta is active now with rolling admissions. Beta phase runs through Q1 2025, with general availability in Q2 2025. Early participants get grandfathered pricing and continued priority access.',
  },

  // === SITE NAVIGATION ===
  {
    keywords: ['navigation', 'how to navigate', 'site map', 'pages'],
    category: 'navigation',
    response: 'Main sections: Home (overview), Veritus (product details), Pricing (investment tiers), About (company story), Roadmap (future plans), Journal (insights), Contact (get in touch). Use the top navigation or ask me for specific information.',
  },
  {
    keywords: ['contact', 'get in touch', 'reach out', 'support'],
    category: 'navigation',
    response: 'Contact us through: Private Beta Access form (priority), Contact page, or direct inquiry. For strategic consultations, Veritus provides immediate analysis. Response times: Beta inquiries <24hrs, General inquiries <48hrs.',
  },
  {
    keywords: ['pricing page', 'investment tiers', 'plans'],
    category: 'navigation',
    response: 'Visit our Veritus Pricing page for detailed investment tiers: Strategic Reports (£199-£499), Executive Advisory (£999-£2,499), Enterprise Intelligence (custom). Each tier includes different analysis depths and delivery guarantees.',
  },

  // === TECHNICAL & PROCESS ===
  {
    keywords: ['how it works', 'process', 'methodology'],
    category: 'process',
    response: 'Our 4-step process: 1) Strategic Brief (define the challenge), 2) Intelligence Gathering (comprehensive analysis), 3) Synthesis & Validation (explainable insights), 4) Executive Delivery (actionable recommendations). Typical turnaround: 24-48 hours.',
  },
  {
    keywords: ['delivery', 'format', 'output', 'reports'],
    category: 'process',
    response: 'Veritus delivers: Executive summary (key insights), Strategic analysis (detailed findings), Risk assessment (scenario modeling), Recommendations (actionable next steps), Supporting data (evidence base). Format: Board-ready presentations + detailed reports.',
  },
  {
    keywords: ['turnaround time', 'speed', 'delivery time'],
    category: 'process',
    response: 'Delivery guarantees: Strategic Reports (48 hours), Executive Advisory (24 hours), Enterprise Intelligence (custom SLA). Rush requests available for critical decisions. All deliveries include executive summary within 12 hours.',
  },

  // === COMPETITIVE & MARKET ===
  {
    keywords: ['competitors', 'alternatives', 'vs mckinsey', 'vs consulting'],
    category: 'competitive',
    response: 'Unlike traditional consulting (weeks/months), Veritus delivers strategic intelligence in 24-48 hours. We combine consulting rigor with intelligence precision and AI speed. More focused than McKinsey, faster than Palantir, more strategic than generic AI.',
  },
  {
    keywords: ['market position', 'differentiation', 'unique value'],
    category: 'competitive',
    response: 'We occupy the "Strategic Surgeon" position - precision intelligence for high-stakes decisions. Our sweet spot: Too complex for standard consulting, too urgent for lengthy engagements, too strategic for generic analysis.',
  },

  // === FUTURE & ROADMAP ===
  {
    keywords: ['roadmap', 'future products', 'whats next', '2026'],
    category: 'roadmap',
    response: 'Current focus: Veritus private beta and launch. 2026 roadmap includes additional platforms for market intelligence and secure collaboration. We\'re building the AcronIQ suite methodically - one strong product at a time.',
  },
  {
    keywords: ['signals', 'businesshub', 'other products'],
    category: 'roadmap',
    response: 'Additional platforms are planned for 2026, including market intelligence dashboards and secure collaboration tools. Right now, we\'re 100% focused on making Veritus exceptional. Future products will build on this foundation.',
  },

  // === SECURITY & TRUST ===
  {
    keywords: ['security', 'confidentiality', 'data protection'],
    category: 'security',
    response: 'Enterprise-grade security: End-to-end encryption, SOC 2 compliance, GDPR adherent, Air-gapped analysis environments, NDA coverage, and Executive-level confidentiality protocols. Your strategic intelligence stays absolutely secure.',
  },
  {
    keywords: ['trust', 'reliability', 'track record'],
    category: 'security',
    response: 'Built on a decade of strategic intelligence experience. Our "We already know the answer" confidence comes from forensic methodology, explainable reasoning, and validated outcomes. Every analysis includes confidence scoring and evidence trails.',
  },

  // === PRICING & INVESTMENT ===
  {
    keywords: ['roi', 'return on investment', 'value'],
    category: 'pricing',
    response: 'Veritus ROI typically exceeds 10:1 through: Faster decision-making, Reduced strategic risk, Improved outcome confidence, Time savings vs traditional consulting, and Access to intelligence-grade insights. One prevented misstep often pays for years of service.',
  },
  {
    keywords: ['payment', 'billing', 'terms'],
    category: 'pricing',
    response: 'Flexible payment: Per-project (Strategic Reports), Retainer (Executive Advisory), or Custom enterprise agreements. Payment terms: Net 30 for established clients, advance payment for new engagements. All major currencies accepted.',
  },

  // === SPECIFIC USE CASES ===
  {
    keywords: ['merger', 'acquisition', 'ma', 'due diligence'],
    category: 'usecase',
    response: 'M&A Intelligence: Target assessment, Market positioning analysis, Integration risk modeling, Valuation validation, Cultural fit analysis, and Post-merger strategy. Typical engagement: 24-48 hour strategic brief with ongoing advisory support.',
  },
  {
    keywords: ['crisis', 'emergency', 'urgent decision'],
    category: 'usecase',
    response: 'Crisis Response: Rapid situation analysis, Scenario modeling, Stakeholder impact assessment, Communication strategy, and Recovery planning. Emergency response available 24/7 for beta participants with 12-hour delivery guarantee.',
  },
  {
    keywords: ['market entry', 'expansion', 'new market'],
    category: 'usecase',
    response: 'Market Entry Intelligence: Competitive landscape, Regulatory analysis, Entry strategy options, Risk assessment, Partnership opportunities, and Go-to-market recommendations. Includes cultural and operational considerations.',
  },

  // === TECHNICAL DETAILS ===
  {
    keywords: ['ai technology', 'how does ai work', 'explainable ai'],
    category: 'technical',
    response: 'Veritus uses explainable AI with human-in-the-loop validation. Every insight includes reasoning chains, confidence scores, and evidence trails. No black-box recommendations - you see exactly how we reached our conclusions.',
  },
  {
    keywords: ['data sources', 'information', 'intelligence'],
    category: 'technical',
    response: 'Multi-source intelligence: Public records, Market databases, Regulatory filings, News analysis, Social sentiment, Expert networks, and Proprietary research. All sources verified and cross-referenced for accuracy.',
  }
];

export function findBestMatch(query: string): KnowledgeEntry | null {
  const queryLower = query.toLowerCase();
  const words = queryLower.split(/\s+/);
  
  let bestMatch: { entry: KnowledgeEntry; score: number } | null = null;
  
  for (const entry of knowledgeBase) {
    let score = 0;
    
    // Check for keyword matches
    for (const keyword of entry.keywords) {
      if (queryLower.includes(keyword.toLowerCase())) {
        score += keyword.split(' ').length; // Multi-word keywords get higher scores
      }
    }
    
    // Check for partial word matches
    for (const word of words) {
      for (const keyword of entry.keywords) {
        if (keyword.toLowerCase().includes(word) || word.includes(keyword.toLowerCase())) {
          score += 0.5;
        }
      }
    }
    
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { entry, score };
    }
  }
  
  return bestMatch?.entry || null;
}

export function generateContextualResponse(query: string): string {
  const match = findBestMatch(query);
  
  if (match) {
    let response = match.response;
    if (match.followUp) {
      response += `\n\n${match.followUp}`;
    }
    return response;
  }
  
  // Fallback for unmatched queries
  return `I'd be happy to help you with information about AcronIQ Research, our Veritus platform, or the private beta programme. Could you be more specific about what you'd like to know? 

I can help with:
• Veritus features and capabilities
• Private beta access and requirements  
• Pricing and investment tiers
• Company information and mission
• Site navigation and contact options
• Strategic use cases and examples

What specific aspect interests you most?`;
}

// Additional helper for complex multi-part questions
export function handleComplexQuery(query: string): string {
  const queryLower = query.toLowerCase();
  
  // Handle comparison questions
  if (queryLower.includes('vs') || queryLower.includes('versus') || queryLower.includes('compared to')) {
    return "Veritus stands apart from traditional consulting through speed (24-48 hour delivery vs weeks/months), precision (intelligence-grade analysis vs generic frameworks), and explainability (clear reasoning chains vs black-box recommendations). We combine McKinsey's rigor with MI6's precision and Palantir's data power.";
  }
  
  // Handle pricing questions with context
  if ((queryLower.includes('price') || queryLower.includes('cost')) && queryLower.includes('worth')) {
    return "Veritus investment typically delivers 10:1 ROI through faster decisions, reduced risk, and improved outcomes. Strategic Reports (£199-£499) often prevent costly mistakes worth thousands. Executive Advisory (£999-£2,499) can save millions in strategic missteps. One prevented error usually pays for years of service.";
  }
  
  // Handle timeline/urgency questions
  if (queryLower.includes('urgent') || queryLower.includes('emergency') || queryLower.includes('asap')) {
    return "For urgent strategic decisions, Veritus offers: 12-hour executive summaries, 24-hour full analysis (Executive Advisory tier), Emergency response for beta participants, and Rush delivery options. Crisis situations get priority handling with founder-level attention.";
  }
  
  return generateContextualResponse(query);
}
