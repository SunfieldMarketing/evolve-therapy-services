'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useMemo, useEffect, useState } from 'react';

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  // Use a stable CMS instance to prevent re-mounting the entire app tree.
  const cms = useMemo(() => new TinaCMS({
    enabled: false,
    sidebar: true,
  } as any), []);

  useEffect(() => {
    const isAdmin = 
      window.location.pathname.startsWith('/admin') || 
      window.location.pathname.startsWith('/portal') ||
      window.location.search.includes('tina-edit');

    if (isAdmin) {
      // Enable features on the existing stable instance
      cms.enable();
      
      // Inject config properties safely
      (cms as any).config.clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
      (cms as any).config.branch = process.env.NEXT_PUBLIC_TINA_BRANCH || 'main';
    }
  }, [cms]);

  // We wrap in TinaProvider immediately. 
  // Since cms is stable (useMemo), this won't cause a full re-mount on hydration.
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
