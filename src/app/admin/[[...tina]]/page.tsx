'use client';

import { TinaAdmin } from 'tinacms';

/**
 * TinaAdmin Page (Next.js App Router Catch-all)
 * 
 * This page serves the TinaCMS visual editor.
 * It is protected by the 'proxy.ts' security gate.
 */
export default function AdminPage() {
  // @ts-ignore
  return <TinaAdmin />;
}
