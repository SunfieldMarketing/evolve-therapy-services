'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
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

        {/* Feature cards — stacked offset cards with left accent bar */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {features.map((item, i) => (
            <BlurFade delay={0.2 + i * 0.1} key={i} className={i === features.length - 1 ? 'md:col-span-2' : ''}>
              <div className="group relative rounded-[2rem] bg-white/[0.03] border border-white/[0.06] p-8 md:p-10 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
                {/* Left accent strip */}
                <div className={`absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b ${item.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Number watermark */}
                <div className="absolute top-6 right-8 text-[80px] md:text-[100px] font-serif font-black text-white/[0.03] group-hover:text-white/[0.06] leading-none transition-colors duration-500 select-none pointer-events-none">
                  {item.num}
                </div>

                <div className="relative z-10 pl-6">
                  {/* Icon + Title row */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-serif font-black text-white tracking-tight leading-[1.1] group-hover:text-[#38bdf8] transition-colors duration-500">
                        {item.title}
                        <br />
                        <span className="text-white/50 group-hover:text-white/70 transition-colors duration-500">{item.subtitle}</span>
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-[15px] text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500 ${i === features.length - 1 ? 'max-w-2xl' : 'max-w-sm'}`}>
                    {item.desc}
                  </p>

                  {/* Bottom accent line — animates width on hover */}
                  <div className="mt-8 h-px bg-gradient-to-r from-white/5 to-transparent relative overflow-hidden">
                    <div className={`absolute inset-y-0 left-0 w-0 group-hover:w-full bg-gradient-to-r ${item.accent} opacity-30 transition-all duration-700`} />
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Bottom CTA row */}
        <BlurFade delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/about" className="focus-visible:outline-none">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group">
                <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                  Discover Our Leadership
                </span>
                <ArrowRight size={16} className="text-white ml-3 group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30 px-8 py-[0.875rem] rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/5"
            >
              Schedule a Consultation
            </Link>
          </div>
        </BlurFade>

        {/* Founder quote strip */}
        <BlurFade delay={0.8}>
          <div className="mt-20 md:mt-28 max-w-3xl mx-auto text-center relative">
            <span className="text-7xl text-[#0284c7]/15 font-serif leading-none absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
            <p className="text-xl md:text-2xl font-serif italic text-white/60 leading-relaxed mb-8 pt-8">
              An in-house model allows 100% revenue retention and fosters a unified facility culture.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-white/10"
                alt="Lisa Bebie"
              />
              <div className="text-left">
                <div className="font-black text-white text-sm tracking-tight">Lisa Bebie</div>
                <div className="text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.2em]">President &amp; Founder</div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
