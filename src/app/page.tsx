'use client';

import { useEffect } from 'react';
import { useTina } from '@/lib/tina';
import homeData from '../../content/pages/home.json';
import contactData from '../../content/pages/contact.json';
import settingsData from '../../content/global/settings.json';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClinicalExcellence from '@/components/ClinicalExcellence';
import Process from '@/components/Process';
import WhyEvolve from '@/components/WhyEvolve';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ServiceArea from '@/components/ServiceArea';
import FAQ from '@/components/FAQ';
import Partner from '@/components/Partner';
import BottomCTA from '@/components/BottomCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

export default function Home(props: { data: any; query: string; variables: any }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  const { data } = useTina({
    query: props.query || `query {
      home(relativePath: "home.json") {
        hero { isVisible eyebrow titleLine1 titleItalic titleLine2 subtext primaryCta secondaryCta stats { value label } }
        clinicalExcellence { isVisible theme badge titleLine1 titleItalic description stats { value suffix label desc } services { title desc tag icon slug } }
        process { isVisible theme badge title titleItalic description steps { num title desc icon } }
        whyEvolve { 
          isVisible title subtitle introText 
          features { title subtitle desc icon color href } 
          quoteStrip { text author authorTitle authorPhoto } 
        }
        ourServices {
          isVisible theme title description
          items { title desc icon slug }
          featuredCard { badge title titleItalic description buttonText image }
        }
        bottomCta { isVisible quote checklist primaryCta phone }
        coverage { isVisible title legend { text icon } }
        faq { isVisible theme title items { question answer } }
        partner { isVisible theme title desc button }
      }
      contact(relativePath: "contact.json") {
        hero { isVisible badge titleLine1 titleItalic description }
        sidebar { title titleItalic description items { icon label value sub } }
        form { badge title titleItalic description buttonText inquiryGoals }
        trustBadges { icon title desc }
      }
      settings(relativePath: "settings.json") {
        siteName phone email address linkedin
        navbar { links { name href } ctaText }
        footer { tagline copyright links { name href } serviceLinks { name href } }
        preFooterCta { title subtitle primaryCta }
        testimonials { title titleItalic description list { name role facility content stars initials } }
        faq { title titleItalic description list { q a } }
        activeStates
        mobileCta { text href }
      }
    }`,
    variables: props.variables || {},
    data: props.data || { home: homeData, contact: contactData, settings: settingsData },
  });

  const p = data.home;
  const s = data.settings;

  return (
    <main className="min-h-screen bg-white selection:bg-[#0284c7]/30 selection:text-white">
      <Navbar data={s?.navbar} />
      
      <Hero data={p.hero} parentField="hero" />
      
      <ClinicalExcellence data={p.clinicalExcellence} parentField="clinicalExcellence" />
      
      <Process data={p.process} parentField="process" />

      <WhyEvolve data={p.whyEvolve} parentField="whyEvolve" />
      
      <Services data={p.ourServices} parentField="ourServices" />
      
      <Testimonials data={s?.testimonials} parentField="testimonials" />
      
      <ServiceArea data={p.coverage} activeStates={s?.activeStates} parentField="coverage" />
      
      <FAQ data={p.faq} parentField="faq" />

      <Partner data={p.partner} parentField="partner" />

      <BottomCTA data={p.bottomCta} parentField="bottomCta" />

      <Contact data={data.contact} parentField="contact" />
      
      <Footer data={s} preFooterData={s?.preFooterCta} />
      <MobileCTA data={s?.mobileCta} />
    </main>
  );
}
