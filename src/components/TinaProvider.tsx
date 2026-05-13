'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useState, useEffect, useMemo } from 'react';

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  
  // Create a minimal CMS instance synchronously. 
  // This ensures useTina works immediately without crashing or re-mounting the whole app.
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: false,
      sidebar: false,
    });
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    const isAdmin = 
      window.location.pathname.startsWith('/admin') || 
      window.location.pathname.startsWith('/portal') ||
      window.location.search.includes('tina-edit');

    if (isAdmin) {
      // If we are in admin mode, enable the CMS features
      cms.enable();
      cms.sidebar.enable();
      
      // Inject the config (branch/clientId)
      (cms as any).config.clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
      (cms as any).config.branch = process.env.NEXT_PUBLIC_TINA_BRANCH || 'main';
    }
  }, [cms]);

  // For SSR, return children directly (no provider needed on server for useTina)
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
