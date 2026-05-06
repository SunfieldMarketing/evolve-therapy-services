'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <section id="about" className="py-24 md:py-36 bg-[#0f172a] overflow-hidden relative">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side — Section Header (Sticky-ish) */}
          <div className="lg:w-1/3 lg:sticky lg:top-36 h-fit">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
                <Sparkles size={12} />
                The Evolve Advantage
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-white leading-[1.1] tracking-tighter mb-8">
                Why Choose <br />
                <span className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent italic font-medium">
                  Evolve
                </span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-lg text-white/40 leading-relaxed font-light mb-12">
                We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations.
              </p>
              
              <div className="flex flex-col gap-4">
                <Link href="/about" className="focus-visible:outline-none">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-8 py-4 w-fit">
                    <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Our Mission</span>
                    <ArrowRight size={16} className="text-white ml-3 group-hover:translate-x-1 transition-transform" />
                  </ShimmerButton>
                </Link>
                <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                  <div className="w-8 h-px bg-white/10" />
                  Founded on Excellence
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Side — Features Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((item, i) => (
                <BlurFade delay={0.2 + i * 0.1} key={i}>
                  <div className="group relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl font-serif font-black text-white/5 group-hover:text-[#0284c7]/20 transition-colors">
                        {item.num}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <item.icon size={20} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-serif font-black text-white tracking-tight mb-4 group-hover:text-[#38bdf8] transition-colors">
                      {item.title} <span className="text-white/30 italic font-medium">{item.subtitle}</span>
                    </h4>
                    
                    <p className="text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                      {item.desc}
                    </p>

                    {/* Subtle Divider */}
                    <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>

        {/* Founder quote strip — Centered original style */}
        <BlurFade delay={0.8}>
          <div className="max-w-4xl mx-auto text-center relative py-20 mt-20 border-t border-white/5">
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
