'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

/**
 * TinaProviderWrapper
 * 
 * This is the critical safety layer for the site.
 * 1. For normal visitors: It returns children DIRECTLY (no wrapper). 
 *    This ensures 100% interactivity and zero library overhead.
 * 2. For admins: It injects the TinaProvider for visual editing.
 */
export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize a stable CMS instance.
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: false,
      sidebar: false,
      toolbar: false,
      clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
      branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
    } as any);
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    // Check if we should activate the CMS layer
    // We check for /admin, /portal, or the tina-edit flag used by the visual editor
    const editModeDetected = 
      window.location.pathname.startsWith('/admin') || 
      window.location.pathname.startsWith('/portal') ||
      window.location.search.includes('tina-edit') ||
      document.cookie.includes('evolve_admin_auth=true');

    if (editModeDetected) {
      setIsEditMode(true);
      try {
        cms.enable();
      } catch (e) {
        console.warn("TinaCMS activation failed:", e);
      }
    }
  }, [cms]);

  // If we are not in a browser or not in edit mode, return children directly.
  // This is the "Nuclear Option" that guarantees buttons work for visitors
  // because it removes the entire TinaCMS context layer from the public site.
  if (!isClient || !isEditMode) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
