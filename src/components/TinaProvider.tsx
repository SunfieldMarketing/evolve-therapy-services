'use client';

import { TinaProvider, TinaCMS } from 'tinacms';
import { useState, useEffect } from 'react';

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [cms] = useState(() => new TinaCMS({
    enabled: true,
    sidebar: true,
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
