"use client";

import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../../plasmic-init';

import { PlasmicRegistry } from '../../components/PlasmicRegistry';

export default function PlasmicHost() {
  return (
    PLASMIC && (
      <>
        <style dangerouslySetInnerHTML={{ __html: `
          .min-h-\\[100svh\\] { min-height: 800px !important; }
          .h-\\[500vh\\] { height: 1200px !important; }
          .h-screen { height: 800px !important; }
        `}} />
        <PlasmicRegistry />
        <PlasmicCanvasHost />
      </>
    )
  );
}
