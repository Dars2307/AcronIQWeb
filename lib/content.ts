// Content fetching utilities with static fallbacks
// Ensures site always works even if CMS is unavailable

import { JournalPost, SiteContent, Product, RoadmapItem } from './supabase';

// Static fallback data
export const FALLBACK_SITE_CONTENT: Record<string, string> = {
  hero_headline: 'Clarity in Complexity. Intelligence You Can Trust.',
  hero_subline: 'Strategic intelligence and AI advisory for leaders navigating high-stakes decisions with precision and trust.',
  hero_cta_primary: 'Contact Us',
  hero_cta_secondary: 'Join Early Access',
  founder_quote: 'I founded AcronIQ because leaders deserve clarity, even when the world is at its most complex. In an age flooded with data, the true competitive advantage isn\'t more information—it\'s precision, trust, and intelligence that resonates.',
  founder_name: 'Joel Ogunniyi',
  founder_title: 'Founder & Chief Executive Officer',
};

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Strategic Intelligence Advisory',
    slug: 'strategic-intelligence-advisory',
    description: 'High-stakes decision support for founders and leaders navigating complexity with confidence.',
    status: 'Flagship Service',
    badge_color: 'bg-blue-100 text-blue-800 border-blue-200',
    features: ['Strategic decision modeling', 'Market intelligence', 'Business validation'],
    is_featured: true,
    link: '/products'
  },
  {
    id: '2',
    name: 'Signals Platform',
    slug: 'signals-platform',
    description: 'AI-driven dashboards delivering real-time market intelligence and trend detection.',
    status: 'Coming Soon',
    badge_color: 'bg-orange-100 text-orange-800 border-orange-200',
    features: ['Real-time trend detection', 'Market signal monitoring', 'Predictive analytics'],
    is_featured: false,
    link: '/products'
  },
  {
    id: '3',
    name: 'Early Access Tools',
    slug: 'early-access-tools',
    description: 'Decision modeling and scenario planning tools for strategic foresight.',
    status: 'Beta',
    badge_color: 'bg-green-100 text-green-800 border-green-200',
    features: ['Decision modeling', 'Scenario planning', 'Strategic foresight'],
    is_featured: false,
    link: '/early-access'
  }
];

export const FALLBACK_ROADMAP: RoadmapItem[] = [
  {
    id: '1',
    phase: 'Phase 1',
    title: 'AcronIQ Veritus Core',
    timeline: 'Q4 2025',
    status: 'In Progress',
    focus: 'Data-driven research workflows',
    description: 'Developing the core intelligence engine that powers business analysis.',
    display_order: 1
  },
  {
    id: '2',
    phase: 'Phase 2',
    title: '£199 Lean Report Product',
    timeline: 'Q1 2026',
    status: 'Upcoming',
    focus: 'Commercial validation',
    description: 'Offer structured, high-value strategic research reports.',
    display_order: 2
  },
  {
    id: '3',
    phase: 'Phase 3',
    title: 'AcronIQ Portal',
    timeline: 'Q2 2026',
    status: 'Planned',
    focus: 'Client deliverables',
    description: 'Unified environment for report access and collaboration.',
    display_order: 3
  }
];

// Fetch functions with failover
export async function fetchJournalPosts(): Promise<JournalPost[]> {
  try {
    const response = await fetch('/api/content/journal', {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!response.ok) throw new Error('Failed to fetch journal posts');
    
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching journal posts, using fallback:', error);
    return []; // Return empty array, frontend has static content
  }
}

export async function fetchSiteContent(keys?: string[]): Promise<Record<string, string>> {
  try {
    const url = keys 
      ? `/api/content/site?keys=${keys.join(',')}`
      : '/api/content/site';
    
    const response = await fetch(url, {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) throw new Error('Failed to fetch site content');
    
    const data = await response.json();
    const contentMap: Record<string, string> = {};
    
    data.content?.forEach((item: SiteContent) => {
      contentMap[item.key] = item.value;
    });
    
    return contentMap;
  } catch (error) {
    console.error('Error fetching site content, using fallback:', error);
    return FALLBACK_SITE_CONTENT;
  }
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/content/products', {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) throw new Error('Failed to fetch products');
    
    const data = await response.json();
    return data.products || FALLBACK_PRODUCTS;
  } catch (error) {
    console.error('Error fetching products, using fallback:', error);
    return FALLBACK_PRODUCTS;
  }
}

export async function fetchRoadmap(): Promise<RoadmapItem[]> {
  try {
    const response = await fetch('/api/content/roadmap', {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) throw new Error('Failed to fetch roadmap');
    
    const data = await response.json();
    return data.roadmap || FALLBACK_ROADMAP;
  } catch (error) {
    console.error('Error fetching roadmap, using fallback:', error);
    return FALLBACK_ROADMAP;
  }
}

// Helper to get single site content value with fallback
export async function getSiteContentValue(key: string): Promise<string> {
  const content = await fetchSiteContent([key]);
  return content[key] || FALLBACK_SITE_CONTENT[key] || '';
}
