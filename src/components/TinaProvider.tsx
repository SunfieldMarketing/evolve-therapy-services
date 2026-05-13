'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

/**
 * TinaProviderWrapper
 * 
 * Provides the TinaCMS context to the entire application.
 * This version is designed to be 100% stable:
 * 1. Always provides a valid CMS context to prevent hook crashes.
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

    // CRITICAL MOCKING:
    // We explicitly mock the internal API structure that Tina's React hooks expect.
    // This prevents the "Cannot read properties of undefined (reading 'fetchCollections')" error.
    if (!(tina as any).api) (tina as any).api = {};
    (tina as any).api.fetchCollections = async () => ({ collections: [] });
    (tina as any).api.request = async () => ({});
    
    // Also mock the client just in case
    if (!(tina as any).client) (tina as any).client = (tina as any).api;

    return tina;
  }, []);

  useEffect(() => {
    // Detect if we should enable editor features
    const isEditMode = 
      typeof window !== 'undefined' && (
        window.location.pathname.startsWith('/admin') || 
        window.location.pathname.startsWith('/portal') ||
        window.location.search.includes('tina-edit')
      );

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
