'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Use a stable CMS instance to prevent re-mounting the entire app tree.
  // We pass the config safely here to avoid runtime crashes during property injection.
  const cms = useMemo(() => new TinaCMS({
    enabled: false,
    sidebar: true,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
  } as any), []);

  useEffect(() => {
    setIsClient(true);
    
    // Check if we are in an admin-related route
    const adminMode = 
      window.location.pathname.startsWith('/admin') || 
      window.location.pathname.startsWith('/portal') ||
      window.location.search.includes('tina-edit');

    if (adminMode) {
      setIsAdmin(true);
      // Safely enable the CMS on the existing stable instance
      try {
        cms.enable();
      } catch (e) {
        console.warn("TinaCMS enable failed:", e);
      }
    }
  }, [cms]);

  // CRITICAL: For normal visitors, we return children directly WITHOUT the TinaProvider wrapper.
  // This ensures the site remains fast and 100% interactive by avoiding any Tina-related hydration errors.
  if (!isClient || !isAdmin) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
