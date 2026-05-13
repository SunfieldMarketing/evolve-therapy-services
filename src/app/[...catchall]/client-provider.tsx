"use client";

import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init";

export function ClientPlasmicRootProvider(props: React.ComponentProps<typeof PlasmicRootProvider>) {
  return <PlasmicRootProvider loader={PLASMIC} {...props} />;
}
