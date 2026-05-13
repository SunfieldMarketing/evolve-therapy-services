'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

/**
 * TinaProviderWrapper
 * 
 * This is the critical safety layer.
 * 
 * V3 STRATEGY:
 * To ensure 100% interactivity for public visitors, we return children WITHOUT the TinaProvider
 * unless we are explicitly in an editing context.
 */
export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

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
    
    // STRICT EDIT MODE DETECTION
    // We only enable the CMS layer if:
    // 1. We are on the /admin route
    // 2. We are on the /portal route
    // 3. We are inside the Tina Visual Editor iframe (detected by 'tina-edit' query param)
    const urlParams = new URLSearchParams(window.location.search);
    const isEditingInIframe = urlParams.has('tina-edit');
    const isExplicitEdit = urlParams.get('edit') === 'true';
    const isAdminRoute = window.location.pathname.startsWith('/admin') || window.location.pathname.startsWith('/portal');

    // For public visitors on the home page (/), this will be false.
    if (isAdminRoute || isEditingInIframe || isExplicitEdit) {
      setIsEditMode(true);
      try {
        cms.enable();
      } catch (e) {
        console.warn("TinaCMS activation failed:", e);
      }
    }
  }, [cms]);

  // PUBLIC VISITOR BRANCH
  // If we are on the public site, we return the children directly.
  // This removes the Tina context entirely, preventing it from swallowing clicks.
  if (!isClient || !isEditMode) {
    return <>{children}</>;
  }

  // ADMIN / EDITOR BRANCH
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
