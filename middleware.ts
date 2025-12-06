import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');
    const adminKey = process.env.ADMIN_ACCESS_KEY;
    
    // Simple key-based authentication for now
    if (!adminKey || authHeader !== `Bearer ${adminKey}`) {
      // Check for admin session cookie as fallback
      const adminSession = request.cookies.get('admin-session');
      if (!adminSession || adminSession.value !== adminKey) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};
