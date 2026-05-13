import * as React from 'react';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';
import { notFound } from 'next/navigation';
import { PLASMIC } from '../../plasmic-init';
import { ClientPlasmicRootProvider } from './client-provider';

export default async function CatchAllPage(props: { params: Promise<{ catchall?: string[] }> }) {
  const { catchall } = await props.params;
  const plasmicPath = "/" + (catchall ? catchall.join('/') : "");
  
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    // If we're at the root path, maybe there's a hardcoded home page, 
    // but in a catchall, we just return notFound() if not in Plasmic
    notFound();
  }

  return (
    <ClientPlasmicRootProvider prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetas[0].displayName} />
    </ClientPlasmicRootProvider>
  );
}
