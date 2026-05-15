import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  const correctPassword = process.env.ADMIN_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json({ ok: false, error: 'Server misconfigured' }, { status: 500 });
  }

  if (password === correctPassword) {
    return NextResponse.json({ ok: true });
  }

  // Artificial delay to slow brute-force attempts
  await new Promise((r) => setTimeout(r, 400));
  return NextResponse.json({ ok: false }, { status: 401 });
}
