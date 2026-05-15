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
    return NextResponse.json({ ok: true });
  }

  // Artificial delay to slow brute-force attempts
  await new Promise((r) => setTimeout(r, 400));
  return NextResponse.json({ ok: false }, { status: 401 });
}
