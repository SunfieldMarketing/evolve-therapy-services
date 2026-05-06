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
        {/* Section Header — Minimalist */}
        <div className="mb-32 md:mb-48">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
              <Sparkles size={12} />
              The Evolve Advantage
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-6xl md:text-8xl font-serif font-black text-white leading-[0.92] tracking-tighter mb-8">
              Why Choose <br />
              <span className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent italic font-medium">
                Evolve
              </span>
            </h2>
          </BlurFade>
        </div>

        {/* Feature Story — Typographic Editorial Layout (No Cards) */}
        <div className="max-w-6xl mx-auto space-y-48 md:space-y-64 mb-32">
          {features.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <BlurFade delay={0.2 + i * 0.1} key={i}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:md:flex-row-reverse'} items-start gap-8 md:gap-24 relative`}>
                  
                  {/* Large Vertical Number Anchor */}
                  <div className="shrink-0 relative">
                    <div className="text-[120px] md:text-[220px] font-serif font-black text-[#0284c7]/5 leading-none select-none pointer-events-none">
                      {item.num}
                    </div>
                    {/* Floating Icon */}
                    <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-8' : '-left-8'} w-16 h-16 rounded-2xl bg-[#0f172a] border border-white/10 flex items-center justify-center text-[#38bdf8] shadow-2xl`}>
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 pt-4 md:pt-16">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-px w-12 bg-gradient-to-r ${item.accent} to-transparent`} />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#38bdf8]">Clinical Strategy</span>
                    </div>
                    
                    <h3 className="text-4xl md:text-7xl font-serif font-black text-white tracking-tighter leading-[0.9] mb-8">
                      {item.title} <br />
                      <span className="text-white/40 italic font-medium">{item.subtitle}</span>
                    </h3>
                    
                    <p className="text-xl md:text-3xl text-white/50 leading-relaxed font-light max-w-2xl">
                      {item.desc}
                    </p>

                    <div className="mt-12 group flex items-center gap-4 cursor-pointer">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-[#38bdf8] transition-colors">Learn More</span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#38bdf8] group-hover:border-[#38bdf8] transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Subtle Background Glow */}
                  <div className={`absolute -inset-20 bg-gradient-to-br ${item.accent} opacity-[0.03] blur-[100px] pointer-events-none`} />
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Bottom CTA — Borderless & Airy */}
        <BlurFade delay={0.7}>
          <div className="py-24 border-t border-white/5 flex flex-col items-center text-center">
            <h4 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter mb-12">
              Ready to <span className="text-[#38bdf8] italic font-medium">Evolve?</span>
            </h4>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link href="/about" className="focus-visible:outline-none">
                <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-14 py-6">
                  <span className="text-white font-black text-xs uppercase tracking-[0.3em]">Discover Our Leadership</span>
                  <ArrowRight size={20} className="text-white ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </ShimmerButton>
              </Link>
              <Link
                href="/contact"
                className="text-white/40 hover:text-[#38bdf8] font-black text-xs uppercase tracking-[0.3em] transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* Founder quote strip — Centered & Airy */}
        <BlurFade delay={0.8}>
          <div className="max-w-4xl mx-auto text-center relative py-20 border-t border-white/5">
            <Quote size={80} className="text-[#0284c7]/10 absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none" />
            <p className="text-2xl md:text-4xl font-serif italic text-white/70 leading-relaxed mb-12 pt-10">
              Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span> and financial strength.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0284c7]/20 blur-xl rounded-full" />
                <Image
                  src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                  width={80}
                  height={80}
                  className="relative rounded-full object-cover border-2 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Lisa Bebie"
                />
              </div>
              <div>
                <div className="font-black text-white text-xl tracking-tight leading-none mb-1">Lisa Bebie</div>
                <div className="text-[#38bdf8] text-xs font-black uppercase tracking-[0.4em]">President &amp; Founder</div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
