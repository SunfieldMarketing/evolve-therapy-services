import { redirect } from 'next/navigation';

/**
 * TinaAdmin Redirect Page
 *
 * TinaCMS v3.x serves the admin as a static SPA at /tina-build.
 * This page redirects authenticated users there.
 * Auth is enforced by proxy.ts before this page is ever reached.
 */
export default function AdminPage() {
  redirect('/tina-build');
}
