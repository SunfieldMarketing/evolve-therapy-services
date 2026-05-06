'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const features = [
  {
    title: 'Regulatory',
    subtitle: 'Defense',
    desc: 'Proactive audit defense and denial management from clinical experts who know the appeals process inside and out.',
    icon: ShieldCheck,
    num: '01',
    accent: 'from-amber-400 to-orange-600',
  },
  {
    title: 'Tiered Pricing',
    subtitle: 'Scales With You',
    desc: 'Our unique approach customizes to your size of business and Evolves as you do, reducing pricing as you grow.',
    icon: Zap,
    num: '02',
    accent: 'from-sky-400 to-blue-600',
  },
  {
    title: '100% Revenue',
    subtitle: 'Retention',
    desc: 'You retain all therapy revenue while we provide the expert management and operational oversight.',
    icon: Award,
    num: '03',
    accent: 'from-emerald-400 to-teal-600',
  },
  {
    title: 'In-House',
    subtitle: 'Employment',
    desc: 'Empower your therapy team with in-house employment and career advancement through internal mentorship.',
    icon: Briefcase,
    num: '04',
    accent: 'from-violet-400 to-purple-600',
  },
  {
    title: 'Holistic',
    subtitle: 'Philosophy',
    desc: 'We set our customers apart through exceptional clinical programming and a holistic approach to care.',
    icon: Heart,
    num: '05',
    accent: 'from-rose-400 to-pink-600',
  },
];

export default function WhyEvolve() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 md:py-36 bg-[#0f172a] overflow-hidden relative">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
              <Sparkles size={12} />
              The Evolve Advantage
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-[0.92] tracking-tighter">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent italic font-medium">
                Evolve
              </span>
            </h2>
          </BlurFade>
        </div>

        {/* Dynamic Vertical Pillars — Desktop */}
        <div className="hidden lg:flex h-[600px] w-full gap-4 mb-32">
          {features.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={false}
              animate={{
                width: hoveredIndex === i ? '40%' : hoveredIndex === null ? '20%' : '15%',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative h-full rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5"
            >
              {/* Background Color / Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-5 group-hover:opacity-20 transition-opacity duration-700`} />
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />

              {/* Content Container */}
              <div className="relative h-full p-12 flex flex-col justify-between">
                
                {/* Top: Icon + Number */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#38bdf8] shadow-2xl transition-transform duration-500 ${hoveredIndex === i ? 'scale-110' : ''}`}>
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-serif font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {item.num}
                  </span>
                </div>

                {/* Center/Bottom: Text */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif font-black text-white leading-tight">
                    {item.title} <br />
                    <span className="text-[#38bdf8] italic font-medium">{item.subtitle}</span>
                  </h3>
                  
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      y: hoveredIndex === i ? 0 : 20,
                    }}
                    className="text-lg text-white/60 font-light leading-relaxed max-w-sm"
                  >
                    {item.desc}
                  </motion.p>

                  <div className="pt-4">
                    <div className={`h-1 w-12 bg-gradient-to-r ${item.accent} rounded-full transition-all duration-700 ${hoveredIndex === i ? 'w-full' : ''}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vertical Accordion — Mobile */}
        <div className="lg:hidden space-y-6 mb-24">
          {features.map((item, i) => (
            <BlurFade key={i} delay={0.1 * i}>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-[#38bdf8]">
                    <item.icon size={24} />
                  </div>
                  <span className="text-2xl font-serif font-black text-white/10">{item.num}</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-white mb-4">
                  {item.title} <span className="text-[#38bdf8] italic font-medium">{item.subtitle}</span>
                </h3>
                <p className="text-base text-white/40 font-light leading-relaxed">{item.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <BlurFade delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 md:mb-32">
            <Link href="/about" className="focus-visible:outline-none">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-12 py-5">
                <span className="text-white font-black text-[11px] uppercase tracking-[0.25em]">Discover Our Leadership</span>
                <ArrowRight size={18} className="text-white ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>

        {/* Founder quote strip — Centered original style */}
        <BlurFade delay={0.8}>
          <div className="max-w-4xl mx-auto text-center relative py-20 border-t border-white/5">
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
