'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform for horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <section id="about" className="bg-[#0f172a] relative">
      {/* Sticky Header — appears as we scroll into the horizontal section */}
      <div className="pt-24 md:pt-36 bg-[#0f172a]">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm">
                <Sparkles size={12} />
                The Evolve Advantage
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-5xl md:text-8xl font-serif font-black text-white leading-[0.92] tracking-tighter mb-8">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent italic font-medium">
                  Evolve
                </span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-xl md:text-2xl text-white/40 max-w-2xl leading-relaxed font-light">
                We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Section — Desktop */}
      <div ref={targetRef} className="relative h-[300vh] hidden lg:block">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-20 px-[10vw]">
            {features.map((item, i) => (
              <div key={i} className="w-[85vw] md:w-[60vw] shrink-0">
                <div className="group relative py-20 px-12 md:px-20 rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] overflow-hidden transition-all duration-700 hover:bg-white/[0.05]">
                  {/* Watermark Number */}
                  <span className="absolute -top-10 -right-10 text-[300px] font-serif font-black text-white/[0.02] group-hover:text-[#0284c7]/5 transition-colors duration-1000 select-none pointer-events-none">
                    {item.num}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className={`w-24 h-24 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#38bdf8] shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                        <item.icon size={48} strokeWidth={1} />
                      </div>
                      <div className={`h-px flex-1 bg-gradient-to-r ${item.accent} to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
                    </div>

                    <h3 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter leading-none mb-10">
                      {item.title} <br />
                      <span className="text-[#38bdf8] italic font-medium">{item.subtitle}</span>
                    </h3>

                    <p className="text-2xl md:text-3xl text-white/40 leading-relaxed font-light max-w-4xl group-hover:text-white/70 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Vertical List — Mobile/Tablet (Fall-back for better UX) */}
      <div className="lg:hidden container mx-auto px-5 py-20 space-y-12">
        {features.map((item, i) => (
          <BlurFade key={i} delay={0.1 * i}>
            <div className="py-12 border-b border-white/5 last:border-0">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#38bdf8]">
                    <item.icon size={24} />
                  </div>
                  <span className="text-4xl font-serif font-black text-white/5">{item.num}</span>
               </div>
               <h3 className="text-4xl font-serif font-black text-white mb-4">
                  {item.title} <br />
                  <span className="text-[#38bdf8] italic font-medium">{item.subtitle}</span>
               </h3>
               <p className="text-lg text-white/40 font-light leading-relaxed">{item.desc}</p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Founder quote strip — Centered original style */}
      <div className="py-24 md:py-40 bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-5">
          <BlurFade delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 md:mb-32">
              <Link href="/about" className="focus-visible:outline-none">
                <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-12 py-5">
                  <span className="text-white font-black text-[11px] uppercase tracking-[0.25em]">Discover Our Leadership</span>
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

          <BlurFade delay={0.2}>
            <div className="max-w-3xl mx-auto text-center relative">
              <span className="text-8xl text-[#0284c7]/10 font-serif leading-none absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none" aria-hidden="true">&ldquo;</span>
              <p className="text-2xl md:text-4xl font-serif italic text-white/70 leading-relaxed mb-10 pt-8">
                Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span> and financial strength.
              </p>
              <div className="flex items-center justify-center gap-5">
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
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
