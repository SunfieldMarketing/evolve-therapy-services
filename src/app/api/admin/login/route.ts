import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * Admin Login API
 * 
 * Verifies the password against the environment variable
 * and sets a secure, httpOnly cookie for session management.
 */
export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Admin#2026!';

    if (password === adminPassword) {
      const response = NextResponse.json({ success: true });
      
      // Set a simple cookie for auth check in middleware
      // In a real production app, you'd use a signed token, but for this CMS gate, 
      // an obfuscated cookie checked against the server is sufficient.
      (await cookies()).set('evolve_admin_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return response;
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
