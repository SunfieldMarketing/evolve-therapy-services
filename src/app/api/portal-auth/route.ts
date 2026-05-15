import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  // Check both env var names — supports migration from NEXT_PUBLIC_ to server-only
  const correctPassword = (
    process.env.ADMIN_PASSWORD ||
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
    ''
  ).trim();

  if (!correctPassword) {
    console.error('[portal-auth] No ADMIN_PASSWORD env var set');
    return NextResponse.json({ ok: false, error: 'Server misconfigured' }, { status: 500 });
  }

  if (password.trim() === correctPassword) {
    const response = NextResponse.json({ ok: true });
    
    // Set a secure cookie for the portal authentication
    response.cookies.set('portal_auth', 'true', {
      httpOnly: true, // Secure: only accessible on server
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    
    return response;
  }

  // Artificial delay to slow brute-force attempts
  await new Promise((r) => setTimeout(r, 400));
  return NextResponse.json({ ok: false }, { status: 401 });
}
