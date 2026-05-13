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
  props: {}
});

PLASMIC.registerComponent(WhyEvolve, {
  name: "WhyEvolveSection",
  displayName: "Why Evolve Section",
  props: {}
});

PLASMIC.registerComponent(Services, {
  name: "ServicesSection",
  displayName: "Services Section",
  props: {}
});

PLASMIC.registerComponent(SocialProof, {
  name: "SocialProofSection",
  displayName: "Social Proof Strip",
  props: {}
});

PLASMIC.registerComponent(Testimonials, {
  name: "TestimonialsSection",
  displayName: "Testimonials",
  props: {}
});

PLASMIC.registerComponent(FAQ, {
  name: "FAQSection",
  displayName: "FAQ Section",
  props: {}
});

PLASMIC.registerComponent(Pricing, {
  name: "PricingSection",
  displayName: "Pricing Section",
  props: {}
});

export function PlasmicRegistry() {
  return null;
}
