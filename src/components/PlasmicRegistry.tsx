"use client";

import { PLASMIC } from "../plasmic-init";
import Hero from "./Hero";
import WhyEvolve from "./WhyEvolve";
import Services from "./Services";
import SocialProof from "./SocialProof";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Pricing from "./Pricing";

// Register all major page sections as Code Components
PLASMIC.registerComponent(Hero, {
  name: "HeroSection",
  displayName: "Hero Section",
  props: {},
  defaultStyles: { width: "100%", maxWidth: "100%" }
});

PLASMIC.registerComponent(WhyEvolve, {
  name: "WhyEvolveSection",
  displayName: "Why Evolve Section",
  props: {},
  defaultStyles: { width: "100%", maxWidth: "100%" }
});

PLASMIC.registerComponent(Services, {
  name: "ServicesSection",
  displayName: "Services Section",
  props: {},
  defaultStyles: { width: "100%", maxWidth: "100%" }
});

PLASMIC.registerComponent(SocialProof, {
  name: "SocialProofSection",
  displayName: "Social Proof Strip",
  props: {},
  defaultStyles: { width: "100%", maxWidth: "100%" }
});

PLASMIC.registerComponent(Testimonials, {
  name: "TestimonialsSection",
  displayName: "Testimonials",
  props: {},
  defaultStyles: { width: "100%", maxWidth: "100%" }
});

PLASMIC.registerComponent(FAQ, {
  name: "FAQSection",
  displayName: "FAQ Section",
  props: {},
  defaultStyles: { width: "100%", maxWidth: "100%" }
});

PLASMIC.registerComponent(Pricing, {
  name: "PricingSection",
  displayName: "Pricing Section",
  props: {},
  defaultStyles: { width: "100%", maxWidth: "100%" }
});

export function PlasmicRegistry() {
  return null;
}
