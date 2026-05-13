'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useState, useEffect } from 'react';

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [cms, setCms] = useState<TinaCMS | null>(null);

  useEffect(() => {
    // Only initialize in the browser
    const tinaCms = new TinaCMS({
      enabled: window.location.pathname.startsWith('/admin') || window.location.search.includes('tina-edit'),
      sidebar: true,
    });
    setCms(tinaCms);
    setIsClient(true);
  }, []);

  // During SSR and before hydration, just render children
  if (!isClient || !cms) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
