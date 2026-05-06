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
    <section id="about" className="py-24 md:py-40 bg-[#0f172a] overflow-hidden relative">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header — Box-free & Airy */}
        <div className="mb-32">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <Sparkles size={12} />
              The Evolve Advantage
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-6xl md:text-8xl font-serif font-black text-white leading-[0.92] tracking-tighter">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent italic font-medium">
                Evolve
              </span>
            </h2>
          </BlurFade>
        </div>

        {/* Feature Story — Typographic Editorial Layout (ZERO CARDS) */}
        <div className="relative">
          {/* Centered Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0284c7]/50 via-[#0284c7]/10 to-transparent hidden lg:block" />

          <div className="space-y-32 md:space-y-48">
            {features.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <BlurFade delay={0.2 + i * 0.1} key={i}>
                  <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative`}>
                    
                    {/* Left Content (for even items) or Empty (for odd items) */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:pr-24 lg:text-right' : 'lg:order-2 lg:pl-24 lg:text-left'}`}>
                      <div className={`inline-flex items-center gap-4 mb-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                         <span className="text-4xl md:text-6xl font-serif font-black text-[#38bdf8]/20">{item.num}</span>
                         <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#38bdf8] shadow-2xl`}>
                            <item.icon size={24} strokeWidth={1.5} />
                         </div>
                      </div>
                      
                      <h3 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter leading-[1.1] mb-6">
                        {item.title} <br />
                        <span className="text-[#38bdf8] italic font-medium">{item.subtitle}</span>
                      </h3>
                      
                      <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                        {item.desc}
                      </p>

                      <div className={`mt-10 flex items-center gap-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <div className={`h-px w-12 bg-gradient-to-r ${item.accent} to-transparent`} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#38bdf8]">Clinical Excellence</span>
                      </div>
                    </div>

                    {/* Timeline Node (Desktop Only) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:block">
                      <div className="w-4 h-4 rounded-full bg-[#0f172a] border-2 border-[#38bdf8] relative shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                        <div className="absolute inset-0 animate-ping rounded-full bg-[#38bdf8]/40" />
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="lg:w-1/2" />
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA — Box-free */}
        <BlurFade delay={0.7}>
          <div className="mt-48 flex flex-col items-center text-center">
            <Link href="/about" className="focus-visible:outline-none mb-12">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-14 py-6">
                <span className="text-white font-black text-xs uppercase tracking-[0.3em]">Discover Our Leadership</span>
                <ArrowRight size={20} className="text-white ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </ShimmerButton>
            </Link>
            <Link
              href="/contact"
              className="text-white/20 hover:text-[#38bdf8] font-black text-xs uppercase tracking-[0.3em] transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </BlurFade>

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
