'use client';

import { ReactNode } from 'react';

/**
 * TinaProviderWrapper
 *
 * PUBLIC visitors: renders children directly — zero CMS overhead.
 * ADMIN users navigating to /admin: TinaCMS handles its own setup.
 *
 * This eliminates the "Maximum update depth exceeded" error caused
 * by mounting TinaCMS globally for every page visitor.
 */
export default function TinaProviderWrapper({ children }: { children: ReactNode }) {
  // Just pass through children for all public routes.
  // TinaCMS visual editing is bootstrapped by /admin/[[...route]]/page.tsx only.
  return <>{children}</>;
}