import { NextResponse, type NextRequest } from 'next/server';

/**
 * Evolve Therapy Middleware
 * 
 * Protects the administrative routes (/admin and /tina-build) 
 * with a simple password-based cookie check.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if the user is trying to access admin or tina-build
  const isAdminPath = pathname.startsWith('/admin') || pathname.startsWith('/tina-build');
  const isLoginPage = pathname === '/admin/login';

  if (isAdminPath && !isLoginPage) {
    const session = request.cookies.get('evolve_admin_session');

    // If no session cookie, redirect to login
    if (!session || session.value !== 'true') {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }

  // 2. Allow all other requests
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', '/tina-build/:path*'],
};
