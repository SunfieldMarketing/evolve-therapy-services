'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

/**
 * TinaProviderWrapper
 * 
 * Provides the TinaCMS context to the entire application.
 * This version is designed to be 100% stable:
 * 1. Always provides context to avoid useTina crashes.
 * 2. Mocks missing methods to prevent "fetchCollections" runtime errors.
 */
export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  // Initialize a stable CMS instance.
  const cms = useMemo(() => {
    const tina = new TinaCMS({
      enabled: false,
      sidebar: false,
      toolbar: false,
      clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
      branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
    } as any);

    // CRITICAL: Inject missing methods to prevent internal Tina hooks from crashing the JS thread.
    // This is the primary fix for the "unresponsive site" issue.
    if (!(tina as any).api) (tina as any).api = {};
    if (!(tina as any).api.fetchCollections) (tina as any).api.fetchCollections = async () => ({ collections: [] });
    if (!(tina as any).api.request) (tina as any).api.request = async () => ({});
    
    return tina;
  }, []);

  useEffect(() => {
    // Check if we are in an admin-related route
    const isEditMode = 
      window.location.pathname.startsWith('/admin') || 
      window.location.pathname.startsWith('/portal') ||
      window.location.search.includes('tina-edit');

    if (isEditMode) {
      setIsAdmin(true);
      try {
        cms.enable();
      } catch (e) {
        console.warn("TinaCMS editor activation failed:", e);
      }
    }
  }, [cms]);

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
