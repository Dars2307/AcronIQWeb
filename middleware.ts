import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Admin authentication is now handled in the component itself
  // No middleware protection needed
  return NextResponse.next();
}

export const config = {
  matcher: []
};
