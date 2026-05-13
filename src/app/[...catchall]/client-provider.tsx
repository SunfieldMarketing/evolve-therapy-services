"use client";

import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init";

import { PlasmicRegistry } from "../../components/PlasmicRegistry";

export function ClientPlasmicRootProvider(props: Omit<React.ComponentProps<typeof PlasmicRootProvider>, "loader">) {
  return (
    <PlasmicRootProvider loader={PLASMIC} {...props}>
      <PlasmicRegistry />
      {props.children}
    </PlasmicRootProvider>
  );
}
