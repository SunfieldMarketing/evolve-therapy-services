import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import WhyEvolve from './WhyEvolve';
import Services from './Services';
import SocialProof from './SocialProof';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';

export default function FullHomepage() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <WhyEvolve />
      <Services />
      <SocialProof />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
