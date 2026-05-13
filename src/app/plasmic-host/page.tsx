"use client";

import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../../plasmic-init';

import { PlasmicRegistry } from '../../components/PlasmicRegistry';

export default function PlasmicHost() {
  return (
    PLASMIC && (
      <>
        <PlasmicRegistry />
        <PlasmicCanvasHost />
      </>
    )
  );
}
