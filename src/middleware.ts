import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only protect the /admin route (TinaCMS)
  if (path.startsWith('/admin')) {
    const authCookie = request.cookies.get('portal_auth');

    // If no cookie, redirect to the portal login page
    if (!authCookie || authCookie.value !== 'true') {
      const url = new URL('/portal', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', '/admin'],
};
