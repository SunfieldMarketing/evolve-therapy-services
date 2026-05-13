'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

/**
 * TinaProviderWrapper
 * 
 * Provides the TinaCMS context to the entire application.
 * Optimized for performance and interactivity:
 * 1. CMS is completely inert for normal visitors.
 * 2. Only initializes full editor features when an admin route is detected.
 * 3. Prevents "fetchCollections" and "clientId" runtime crashes.
 */
export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize a stable CMS instance.
  // We use as any to avoid strict type issues with the internal v3 API.
  const cms = useMemo(() => {
    const tina = new TinaCMS({
      enabled: false,
      sidebar: false,
      toolbar: false,
      clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
      branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
    } as any);

    // Provide dummy methods to prevent "undefined" crashes in internal Tina hooks
    if (!(tina as any).api) (tina as any).api = {};
    if (!(tina as any).api.fetchCollections) (tina as any).api.fetchCollections = async () => [];
    
    return tina;
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    // Check if we are in an admin-related route or editing mode
    const isEditMode = 
      window.location.pathname.startsWith('/admin') || 
      window.location.pathname.startsWith('/portal') ||
      window.location.search.includes('tina-edit');

    if (isEditMode) {
      setIsAdmin(true);
      // Enable features on the existing stable instance for admins
      try {
        cms.enable();
        (cms as any).sidebar = true;
      } catch (e) {
        console.warn("TinaCMS editor activation failed:", e);
      }
    }
  }, [cms]);

  // During SSR and initial hydration, we render the provider with the dummy CMS.
  // This provides the context needed for useTina() calls in sub-components
  // without triggering any network requests or blocking the main thread.
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
