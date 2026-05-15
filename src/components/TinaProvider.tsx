'use client';

import { ReactNode } from 'react';
import { TinaProvider, TinaCMS } from 'tinacms/dist/client';
import { usePathname } from 'next/navigation';

/**
 * TinaProviderWrapper
 * 
 * Provides the TinaCMS context to the application.
 * When viewed normally, this is a lightweight wrapper.
 * When viewed inside the Tina Admin (/admin), it enables the visual editing sidebar and on-page highlights.
 */
export default function TinaProviderWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isEditing = pathname?.startsWith('/admin');

  return (
    <TinaProvider
      cms={
        new TinaCMS({
          clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
          branch: 'main',
          isEditMode: isEditing, // Only enable editing features on /admin routes
        })
      }
    >
      {children}
    </TinaProvider>
  );
}