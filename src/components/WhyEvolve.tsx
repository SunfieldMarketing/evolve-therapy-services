'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const features = [
  {
    title: 'Regulatory',
    subtitle: 'Defense',
    desc: 'Proactive audit defense and denial management from clinical experts who know the appeals process inside and out.',
    icon: ShieldCheck,
    num: '01',
    accent: 'from-amber-400 to-orange-600',
    accentBg: 'bg-amber-500',
  },
  {
    title: 'Tiered Pricing',
    subtitle: 'Scales With You',
    desc: 'Our unique approach customizes to your size of business and Evolves as you do, reducing pricing as you grow.',
    icon: Zap,
    num: '02',
    accent: 'from-sky-400 to-blue-600',
    accentBg: 'bg-sky-500',
  },
  {
    title: '100% Revenue',
    subtitle: 'Retention',
    desc: 'You retain all therapy revenue while we provide the expert management and operational oversight.',
    icon: Award,
    num: '03',
    accent: 'from-emerald-400 to-teal-600',
    accentBg: 'bg-emerald-500',
  },
  {
    title: 'In-House',
    subtitle: 'Employment',
    desc: 'Empower your therapy team with in-house employment and career advancement through internal mentorship.',
    icon: Briefcase,
    num: '04',
    accent: 'from-violet-400 to-purple-600',
    accentBg: 'bg-violet-500',
  },
  {
    title: 'Holistic',
    subtitle: 'Philosophy',
    desc: 'We set our customers apart through exceptional clinical programming and a holistic approach to care.',
    icon: Heart,
    num: '05',
    accent: 'from-rose-400 to-pink-600',
    accentBg: 'bg-rose-500',
  },
];

export default function WhyEvolve() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#0f172a] overflow-hidden relative">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0284c7]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Section Header — centered */}
        <div className="text-center mb-20 md:mb-28">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
              <Sparkles size={12} />
              The Evolve Advantage
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-[0.92] tracking-tighter mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent italic font-medium">
                Evolve
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light">
              We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations.
            </p>
          </BlurFade>
        </div>

        {/* Feature List — Editorial Impact Layout (Not Cards) */}
        <div className="max-w-5xl mx-auto mb-28">
          {features.map((item, i) => (
            <BlurFade delay={0.2 + i * 0.1} key={i}>
              <div className="group relative py-12 md:py-16 border-b border-white/5 last:border-0 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 transition-all duration-500">
                
                {/* Large Number / Watermark */}
                <div className="shrink-0 w-24 md:w-32">
                  <div className="text-6xl md:text-8xl font-serif font-black text-white/[0.03] group-hover:text-[#0284c7]/20 transition-colors duration-700 leading-none select-none pointer-events-none">
                    {item.num}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} opacity-20 flex items-center justify-center text-white group-hover:opacity-100 transition-all duration-500`}>
                      <item.icon size={20} strokeWidth={1.5} className={item.accent === 'from-amber-400 to-orange-600' ? 'text-amber-500' : 'text-[#38bdf8]'} />
                    </div>
                    <h4 className="text-2xl md:text-4xl font-serif font-black text-white tracking-tight group-hover:text-[#38bdf8] transition-colors duration-500">
                      {item.title} <span className="text-white/40 italic font-medium">{item.subtitle}</span>
                    </h4>
                  </div>
                  <p className="text-lg md:text-xl text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-all duration-500 max-w-3xl">
                    {item.desc}
                  </p>
                </div>

                {/* Indicator / Decoration */}
                <div className="hidden md:flex shrink-0 items-center gap-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                   <div className={`h-px w-24 bg-gradient-to-r ${item.accent} to-transparent`} />
                   <ArrowRight size={20} className="text-[#38bdf8]" />
                </div>

                {/* Hover Background Accent */}
                <div className="absolute inset-x-0 -inset-y-4 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem] -z-10" />
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Bottom CTA row */}
        <BlurFade delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/about" className="focus-visible:outline-none">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-10 py-5">
                <span className="text-white font-black text-[11px] uppercase tracking-[0.25em] group-hover:text-white transition-colors duration-300">
                  Discover Our Leadership
                </span>
                <ArrowRight size={18} className="text-white ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </ShimmerButton>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 px-10 py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.25em] transition-all duration-500"
            >
              Schedule a Consultation
            </Link>
          </div>
        </BlurFade>

        {/* Founder quote strip — Reimagined */}
        <BlurFade delay={0.8}>
          <div className="mt-24 md:mt-32 max-w-4xl mx-auto">
            <div className="relative p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] overflow-hidden">
              <Quote size={80} className="absolute -top-4 -left-4 text-white/[0.02] rotate-12 pointer-events-none" />
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white/80 leading-[1.3] text-center mb-12 relative z-10">
                &ldquo;Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span> and financial strength, not just cost centers.&rdquo;
              </p>
              
              <div className="flex items-center justify-center gap-5 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0284c7]/20 blur-lg rounded-full" />
                  <Image
                    src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                    width={64}
                    height={64}
                    className="relative rounded-full object-cover border-2 border-white/20 shadow-2xl"
                    alt="Lisa Bebie"
                  />
                </div>
                <div className="text-left">
                  <div className="font-black text-white text-lg tracking-tight leading-none mb-1">Lisa Bebie</div>
                  <div className="text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em]">President &amp; Founder</div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
