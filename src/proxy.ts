import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy gate (Middleware) for the TinaCMS admin area.
 * 
 * Ensures that any request to /admin or the underlying /tina-build assets
 * is only permitted if the 'portal_auth' cookie is present and valid.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // We protect /admin and /tina-build (the static CMS assets)
  const isProtectedPath = pathname.startsWith('/admin') || pathname.startsWith('/tina-build');

  if (isProtectedPath) {
    const portalAuth = request.cookies.get('portal_auth');

    // If not authenticated, redirect to the portal
    if (portalAuth?.value !== 'true') {
      const url = request.nextUrl.clone();
      url.pathname = '/portal';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Optimization: only run proxy on relevant paths
export const config = {
  matcher: [
    '/admin/:path*',
    '/tina-build/:path*',
  ],
};
