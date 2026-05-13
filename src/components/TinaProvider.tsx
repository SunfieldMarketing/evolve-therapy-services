'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useState, useEffect } from 'react';

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [cms, setCms] = useState<TinaCMS | null>(null);

  useEffect(() => {
    setIsClient(true);

    const isAdmin = window.location.pathname.startsWith('/admin') || window.location.search.includes('tina-edit');
    
    if (isAdmin) {
      // Lazy load TinaCMS only when needed to speed up the site for normal users
      const initTina = async () => {
        const { TinaCMS } = await import('tinacms');
        const tinaCms = new TinaCMS({
          enabled: true,
          sidebar: true,
        });
        setCms(tinaCms);
      };
      initTina();
    }
  }, []);

  // During SSR and for normal users (not in admin mode), just render children
  if (!isClient || !cms) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
