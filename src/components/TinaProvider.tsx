'use client';

import { TinaProvider, TinaCMS } from 'tinacms';

const cms = new TinaCMS({
  enabled: true,
  sidebar: true,
  toolbar: true,
});

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
}
