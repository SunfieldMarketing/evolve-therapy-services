'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyEvolve from '@/components/WhyEvolve';
import USAMap from '@/components/USAMap';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { 
  ArrowRight, Phone, Microscope, HeartPulse, ShieldCheck, 
  TrendingUp, Users, Clock, CheckCircle2, BarChart3, Award,
  Search, Map, Zap, Stethoscope
} from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { useTina, tinaField } from '@/lib/tina';
import homeData from '../../content/pages/home.json';

const iconMap = {
  Microscope,
  HeartPulse,
  ShieldCheck,
  BarChart3,
  Users,
  TrendingUp,
  Award,
  Clock,
  Search,
  Map,
  Zap,
  Stethoscope
};

export default function Home(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query || '',
    variables: props.variables || {},
    data: props.data || { home: homeData },
  });

  const p = (data as any).home || homeData;

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0f172a] selection:bg-[#0284c7]/30 selection:text-white">
      <Navbar />
      
      <div className="relative">
        <Hero data={p.hero} />
        
        <Services />
        <WhyEvolve />
        <Testimonials />
        <USAMap />
        <FAQ />


        {/* Philosophy / CTA Dark Section */}
        <section className="py-32 md:py-56 bg-[#0f172a] relative overflow-hidden">
           {/* Decorative Background */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#0284c7]/10 rounded-full blur-[150px] pointer-events-none" />
           
           <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="max-w-6xl mx-auto">
                 <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <BlurFade delay={0.1}>
                       <h2 className="text-5xl md:text-8xl font-serif text-white font-black tracking-tighter leading-[0.85] mb-12">
                          {p.bottomCta.quote.split('excellence')[0]}excellence <br />
                          <span className="text-[#0284c7] italic">{p.bottomCta.quote.split('excellence')[1]}</span>
                       </h2>
                       <Link href="/contact">
                          <ShimmerButton as="div" background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="1rem" className="px-12 py-7 shadow-[0_20px_50px_rgba(2,132,199,0.3)] group/btn">
                             <span className="font-black uppercase tracking-[0.4em] text-[14px] text-white">{p.bottomCta.primaryCta}</span>
                             <ArrowRight size={20} className="ml-5 group-hover/btn:translate-x-3 transition-transform" />
                          </ShimmerButton>
                       </Link>
                    </BlurFade>
                    
                    <BlurFade delay={0.3} className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[4rem]">
                       <h3 className="text-3xl font-serif font-black text-white mb-10 tracking-tight">The Evolve Promise</h3>
                       <div className="space-y-8">
                          {p.bottomCta.checklist.map((item: string, i: number) => (
                             <div key={i} className="flex items-center gap-6 group">
                                <div className="w-10 h-10 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/40 flex items-center justify-center text-[#38bdf8] shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                                   <CheckCircle2 size={20} />
                                </div>
                                <span className="text-xl text-white/70 font-light group-hover:text-white transition-colors">{item}</span>
                             </div>
                          ))}
                       </div>
                       
                       <div className="mt-16 pt-16 border-t border-white/10">
                          <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Direct Support Access</div>
                          <a href={`tel:${p.bottomCta.phone.replace(/[^0-9]/g, '')}`} className="text-3xl md:text-4xl font-serif font-black text-white hover:text-[#38bdf8] transition-colors">{p.bottomCta.phone}</a>
                       </div>
                    </BlurFade>
                 </div>
              </div>
           </div>
        </section>

        <Footer />
        <MobileCTA />
      </div>
    </main>
  );
}
