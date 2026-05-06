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

        {/* Feature Storyboard — Cinematic Staggered Layout (Not Cards) */}
        <div className="space-y-32 md:space-y-48 mb-32">
          {features.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <BlurFade delay={0.2 + i * 0.1} key={i}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  
                  {/* Visual Side */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-white/5">
                      {/* Background Image / Pattern */}
                      <div className="absolute inset-0 bg-[#0f172a]" />
                      <Image 
                        src="https://res.cloudinary.com/dai2pg27n/image/upload/v1778086715/clinical_modern_facility_1778086715569.png"
                        fill
                        className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000"
                        alt={item.title}
                      />
                      
                      {/* Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                      
                      {/* Floating Number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[150px] md:text-[200px] font-serif font-black text-white/5 group-hover:text-white/10 transition-colors duration-700 select-none">
                          {item.num}
                        </span>
                      </div>

                      {/* Icon Badge */}
                      <div className={`absolute top-10 ${isEven ? 'right-10' : 'left-10'} w-20 h-20 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-[#38bdf8] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <item.icon size={36} strokeWidth={1} />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-32 h-32 bg-gradient-to-br ${item.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700`} />
                  </div>

                  {/* Content Side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'text-left' : 'text-left lg:text-right'}`}>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.accent}`} />
                      Expert Advantage
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter leading-[0.9] mb-8">
                      {item.title} <br />
                      <span className="text-[#38bdf8] italic font-medium">{item.subtitle}</span>
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light mb-10 max-w-xl group-hover:text-white/80 transition-colors duration-500">
                      {item.desc}
                    </p>

                    <div className={`flex items-center gap-4 ${isEven ? '' : 'lg:justify-end'}`}>
                      <div className={`h-px w-12 bg-gradient-to-r ${item.accent} to-transparent`} />
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#38bdf8]">Clinical Excellence</span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Bottom CTA — Reimagined as a floating banner */}
        <BlurFade delay={0.7}>
          <div className="relative mt-20 mb-32 p-1 md:p-2 rounded-[4rem] bg-gradient-to-r from-white/5 to-transparent border border-white/10 overflow-hidden">
            <div className="relative px-8 py-12 md:px-20 md:py-16 bg-[#0f172a] rounded-[3.5rem] flex flex-col lg:flex-row items-center justify-between gap-10">
               <div className="text-center lg:text-left">
                  <h4 className="text-3xl md:text-4xl font-serif font-black text-white tracking-tight mb-2">Ready to Evolve?</h4>
                  <p className="text-white/40 text-lg font-light">Join the future of therapy management.</p>
               </div>
               
               <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="/about" className="focus-visible:outline-none">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-12 py-5">
                    <span className="text-white font-black text-[11px] uppercase tracking-[0.25em]">Discover Our Leadership</span>
                    <ArrowRight size={18} className="text-white ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </ShimmerButton>
                </Link>
                <Link
                  href="/contact"
                  className="text-white font-bold text-[11px] uppercase tracking-[0.25em] hover:text-[#38bdf8] transition-colors"
                >
                  Schedule a Consultation
                </Link>
               </div>
            </div>
          </div>
        </BlurFade>

        {/* Founder quote strip — Cinematic Split */}
        <BlurFade delay={0.8}>
          <div className="relative py-24 border-t border-white/5">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#0284c7]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <Image
                    src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                    width={200}
                    height={200}
                    className="relative rounded-[3rem] object-cover border-2 border-white/10 shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Lisa Bebie"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <Quote size={60} className="text-[#0284c7]/20 mb-8" />
                <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-[1.2] tracking-tighter mb-10">
                  &ldquo;Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span> and financial strength.&rdquo;
                </p>
                <div>
                  <div className="font-black text-white text-xl tracking-tight mb-1">Lisa Bebie</div>
                  <div className="text-[#38bdf8] text-xs font-black uppercase tracking-[0.4em]">President &amp; Founder</div>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
