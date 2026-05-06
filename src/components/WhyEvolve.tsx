'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const features = [
  {
    title: 'Regulatory Defense',
    desc: 'Proactive audit defense and denial management from clinical experts who know the process.',
    icon: ShieldCheck,
    num: '01',
    accent: 'text-amber-500',
  },
  {
    title: 'Tiered Pricing',
    desc: 'Pricing that scales with you, reducing your costs as your business expands.',
    icon: Zap,
    num: '02',
    accent: 'text-sky-500',
  },
  {
    title: '100% Revenue',
    desc: 'You retain all therapy revenue while we handle management and oversight.',
    icon: Award,
    num: '03',
    accent: 'text-emerald-500',
  },
  {
    title: 'In-House Model',
    desc: 'Empower your team with in-house employment and internal mentorship.',
    icon: Briefcase,
    num: '04',
    accent: 'text-violet-500',
  },
  {
    title: 'Holistic Care',
    desc: 'Setting you apart through exceptional, holistic clinical programming.',
    icon: Heart,
    num: '05',
    accent: 'text-rose-500',
  },
];

export default function WhyEvolve() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        
        {/* Section Header — Compact & Refined */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20 md:mb-24 pb-12 border-b border-white/5">
          <div className="max-w-2xl">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                <Sparkles size={10} />
                The Evolve Advantage
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight tracking-tight">
                Why Centers of Excellence <br />
                <span className="italic font-medium text-[#38bdf8]">Choose Evolve</span>
              </h2>
            </BlurFade>
          </div>
          <BlurFade delay={0.3}>
            <Link href="/about" className="focus-visible:outline-none">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-8 py-3.5">
                <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Our Methodology</span>
                <ArrowRight size={14} className="text-white ml-3 group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>

        {/* Feature Grid — Compact Editorial (No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 mb-32">
          {features.map((item, i) => (
            <BlurFade delay={0.2 + i * 0.1} key={i}>
              <div className="group relative flex gap-6">
                {/* Visual Icon Side */}
                <div className="shrink-0">
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.accent} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-serif font-black text-white tracking-tight group-hover:text-[#38bdf8] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-serif font-black text-white/10 group-hover:text-[#38bdf8]/20 transition-colors">
                      {item.num}
                    </span>
                  </div>
                  <p className="text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
          
          {/* Final Filler Section for Grid Balance */}
          <BlurFade delay={0.7} className="hidden lg:flex items-center justify-center p-8 rounded-[2rem] bg-[#0284c7]/5 border border-dashed border-white/10">
             <div className="text-center">
                <p className="text-white/30 text-xs font-black uppercase tracking-[0.2em] mb-2">Ready to Start?</p>
                <Link href="/contact" className="text-[#38bdf8] font-serif italic text-lg hover:underline decoration-[#38bdf8]/40 underline-offset-8">
                  Get a Free Audit &rarr;
                </Link>
             </div>
          </BlurFade>
        </div>

        {/* Founder quote strip — Balanced & Integrated */}
        <BlurFade delay={0.8}>
          <div className="max-w-4xl mx-auto py-16 border-y border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
               <div className="shrink-0 relative group">
                  <div className="absolute inset-0 bg-[#0284c7]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                    width={80}
                    height={80}
                    className="relative rounded-full object-cover border-2 border-white/10 shadow-2xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Lisa Bebie"
                  />
               </div>
               <div className="flex-1 text-center md:text-left">
                  <Quote size={32} className="text-[#0284c7]/20 mb-6 hidden md:block" />
                  <p className="text-xl md:text-2xl font-serif italic text-white/70 leading-relaxed mb-6">
                    &ldquo;Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span> and financial strength.&rdquo;
                  </p>
                  <div>
                    <span className="font-black text-white text-base tracking-tight">Lisa Bebie</span>
                    <span className="mx-3 text-white/10">|</span>
                    <span className="text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.2em]">President &amp; Founder</span>
                  </div>
               </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
