'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Use a stable CMS instance to prevent re-mounting the entire app tree.
  const cms = useMemo(() => new TinaCMS({
    enabled: false,
    sidebar: true,
  } as any), []);

  useEffect(() => {
    setIsClient(true);
    const adminMode = 
      window.location.pathname.startsWith('/admin') || 
      window.location.pathname.startsWith('/portal') ||
      window.location.search.includes('tina-edit');

    if (adminMode) {
      setIsAdmin(true);
      // Enable features on the existing stable instance
      cms.enable();
      
      // Inject config properties safely
      (cms as any).config.clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
      (cms as any).config.branch = process.env.NEXT_PUBLIC_TINA_BRANCH || 'main';
    }
  }, [cms]);

  // For normal visitors, we return children directly WITHOUT the TinaProvider wrapper.
  // This ensures the site remains fast and 100% interactive without any Tina overhead.
  if (!isClient || !isAdmin) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
