"use client";

import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init";

export function ClientPlasmicRootProvider(props: Omit<React.ComponentProps<typeof PlasmicRootProvider>, "loader">) {
  return <PlasmicRootProvider loader={PLASMIC} {...props} />;
}
