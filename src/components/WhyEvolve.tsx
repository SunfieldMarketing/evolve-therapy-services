'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const features = [
  {
    title: 'Regulatory Defense',
    desc: 'Proactive audit defense and denial management from clinical experts who know the appeals process inside and out.',
    icon: ShieldCheck,
    num: '01',
    accent: '#f59e0b',
  },
  {
    title: 'Tiered Pricing',
    desc: 'Our unique approach customizes to your size of business and Evolves as you do, reducing pricing as you grow.',
    icon: Zap,
    num: '02',
    accent: '#38bdf8',
  },
  {
    title: '100% Revenue',
    desc: 'You retain all therapy revenue while we provide the expert management and operational oversight.',
    icon: Award,
    num: '03',
    accent: '#10b981',
  },
  {
    title: 'In-House Model',
    desc: 'Empower your therapy team with in-house employment and career advancement through internal mentorship.',
    icon: Briefcase,
    num: '04',
    accent: '#8b5cf6',
  },
  {
    title: 'Holistic Philosophy',
    desc: 'We set our customers apart through exceptional clinical programming and a holistic approach to care.',
    icon: Heart,
    num: '05',
    accent: '#f43f5e',
  },
];

export default function WhyEvolve() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="py-24 md:py-40 bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        
        {/* Section Header — Minimal & Modern */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                <Sparkles size={12} />
                The Evolve Advantage
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-5xl md:text-8xl font-serif font-black text-white leading-[0.92] tracking-tighter">
                Why Centers <br />
                <span className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent italic font-medium">
                  Choose Evolve
                </span>
              </h2>
            </BlurFade>
          </div>
          <BlurFade delay={0.3}>
            <p className="text-xl text-white/30 max-w-sm leading-relaxed font-light mb-4">
              Providing the framework for clinicians to thrive while maintaining fiscally responsible operations.
            </p>
          </BlurFade>
        </div>

        {/* The Interactive "Feature Web" Hub — Completely New Concept */}
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32 min-h-[600px]">
          
          {/* Interactive Navigation Hub (Left) */}
          <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
            {/* Background SVG Connectivity Web */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 500 500">
               {features.map((_, i) => {
                  const angle = (i * 360) / features.length;
                  const x2 = 250 + 180 * Math.cos((angle * Math.PI) / 180);
                  const y2 = 250 + 180 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <line key={i} x1="250" y1="250" x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="2" />
                  );
               })}
               <circle cx="250" cy="250" r="180" stroke="#38bdf8" strokeWidth="1" fill="none" strokeDasharray="10 10" />
            </svg>

            {/* Central Node */}
            <div className="relative w-32 h-32 rounded-full bg-[#0284c7]/20 border-2 border-[#38bdf8] flex items-center justify-center z-10 shadow-[0_0_50px_rgba(2,132,199,0.3)]">
               <span className="text-white font-serif italic text-2xl font-black">E</span>
            </div>

            {/* Satellite Nodes (Icons) */}
            {features.map((item, i) => {
               const angle = (i * 360) / features.length;
               const x = 50 + 36 * Math.cos((angle * Math.PI) / 180); // Adjusted for centering
               const y = 50 + 36 * Math.sin((angle * Math.PI) / 180);
               
               return (
                 <motion.button
                   key={i}
                   onClick={() => setActiveIndex(i)}
                   onMouseEnter={() => setActiveIndex(i)}
                   className={`absolute w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 z-20 ${
                     activeIndex === i ? 'bg-white border-none shadow-[0_0_40px_rgba(255,255,255,0.3)]' : 'bg-slate-900 border border-white/10 hover:border-[#38bdf8]/50'
                   }`}
                   style={{
                     left: `${x}%`,
                     top: `${y}%`,
                     transform: 'translate(-50%, -50%)',
                   }}
                 >
                   <item.icon size={28} className={activeIndex === i ? 'text-[#0f172a]' : 'text-white/40'} />
                   {activeIndex === i && (
                     <motion.div 
                        layoutId="activeGlow"
                        className="absolute inset-0 rounded-2xl border-2 border-[#38bdf8] opacity-50"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                     />
                   )}
                 </motion.button>
               );
            })}
          </div>

          {/* Dynamic Content Display (Right) */}
          <div className="w-full lg:w-1/2">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-6xl md:text-8xl font-serif font-black text-white/5">{features[activeIndex].num}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#38bdf8] to-transparent opacity-30" />
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter leading-tight">
                    {features[activeIndex].title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-xl">
                    {features[activeIndex].desc}
                  </p>

                  <div className="pt-8">
                    <Link href="/contact" className="focus-visible:outline-none">
                      <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-12 py-5">
                        <span className="text-white font-black text-[11px] uppercase tracking-[0.25em]">Explore This Advantage</span>
                        <ArrowRight size={18} className="text-white ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                      </ShimmerButton>
                    </Link>
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Founder quote strip — Centered original style */}
        <BlurFade delay={0.8}>
          <div className="max-w-4xl mx-auto text-center relative py-20 mt-32 border-t border-white/5">
            <Quote size={60} className="text-[#0284c7]/10 absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none" />
            <p className="text-xl md:text-3xl font-serif italic text-white/70 leading-relaxed mb-10 pt-8">
              Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span> and financial strength.
            </p>
            <div className="flex items-center justify-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0284c7]/20 blur-lg rounded-full" />
                <Image
                  src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                  width={56}
                  height={56}
                  className="relative rounded-full object-cover border-2 border-white/20 shadow-2xl"
                  alt="Lisa Bebie"
                />
              </div>
              <div className="text-left">
                <div className="font-black text-white text-base tracking-tight leading-none mb-1">Lisa Bebie</div>
                <div className="text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em]">President &amp; Founder</div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
