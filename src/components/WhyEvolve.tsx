
'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const features = [
  {
    title: 'Optimal Therapy',
    subtitle: 'Outcomes',
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and customized business intelligence for your market.',
    icon: ShieldCheck,
    color: '#f59e0b',
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Three-Tiered',
    subtitle: 'Pricing Approach',
    desc: 'Our unique approach customizes to your size of business and Evolves as you do, with reduction as you grow.',
    icon: Zap,
    color: '#38bdf8',
    href: '/services/therapy-cost-reduction'
  },
  {
    title: '100% Revenue',
    subtitle: 'Retention',
    desc: 'Maximize clinical and financial goals while you retain all therapy revenue under our management model.',
    icon: Award,
    color: '#10b981',
    href: '/services/in-house-transition'
  },
  {
    title: 'In-House',
    subtitle: 'Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model with our expert guidance.',
    icon: Briefcase,
    color: '#8b5cf6',
    href: '/services/in-house-transition'
  },
  {
    title: 'Clinical Case Mix',
    subtitle: 'Analysis',
    desc: 'Expert education and analysis of your site\u2019s Quality Measures and case mix efficiency for next-level evolution.',
    icon: Heart,
    color: '#f43f5e',
    href: '/services/medicaid-case-mix-analysis'
  },
];

export default function WhyEvolve() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      if (v < 0.15) {
        setActiveIndex(-1);
      } else if (v >= 0.15 && v < 0.85) {
        const step = 0.70 / features.length;
        const index = Math.floor((v - 0.15) / step);
        setActiveIndex(Math.min(index, features.length - 1));
      } else {
        setActiveIndex(features.length);
      }
    });
  }, [scrollYProgress]);

  return (
    <section id="about" ref={containerRef} className="bg-[#0f172a] relative">
      <div className="h-[500vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.01] pointer-events-none">
            <h2 className="text-[25vw] font-serif font-black uppercase leading-none">Evolve</h2>
          </div>

          {/* ── Main Content ── */}
          <div className="flex-1 flex items-center">
            <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
              {/*
                Mobile layout  : flex-col
                  — text panel  ORDER-1 (top)
                  — circle      ORDER-2 (bottom)
                Desktop layout : flex-row
                  — circle      ORDER-1 (left)
                  — text panel  ORDER-2 (right)
              */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-5 lg:gap-24">

                {/* ── TEXT PANEL — top on mobile, right on desktop ── */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
                  <div className="max-w-xl h-52 sm:h-72 md:h-96 relative w-full">
                    <AnimatePresence mode="wait">

                      {/* Intro state */}
                      {activeIndex === -1 && (
                        <motion.div
                          key="intro"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="absolute inset-0 flex flex-col items-center lg:items-start"
                        >
                          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-4 sm:mb-8">
                            <Sparkles size={12} />
                            The Evolve Advantage
                          </div>
                          <h3 className="text-3xl sm:text-5xl md:text-8xl font-serif font-black text-white tracking-tighter leading-[1.05] sm:leading-none mb-3 sm:mb-8">
                            Why Choose <br />
                            <span className="text-[#38bdf8] italic font-medium">Evolve?</span>
                          </h3>
                          <p className="text-sm sm:text-xl md:text-2xl text-white/30 font-light max-w-lg">
                            Scroll through to discover our clinical advantages one by one.
                          </p>
                        </motion.div>
                      )}

                      {/* Feature states */}
                      {activeIndex >= 0 && activeIndex < features.length && (
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          className="absolute inset-0 flex flex-col items-center lg:items-start"
                        >
                          <div className="inline-flex items-center justify-center gap-2 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-3 sm:mb-8">
                            <div className="w-8 h-px bg-[#38bdf8]/30 hidden lg:block" />
                            Clinical Advantage
                          </div>
                          <h3 className="text-2xl sm:text-5xl md:text-7xl font-serif font-black text-white tracking-tighter leading-[1.1] sm:leading-none mb-2 sm:mb-6">
                            {features[activeIndex].title} <br />
                            <span className="text-[#38bdf8] italic font-medium">{features[activeIndex].subtitle}</span>
                          </h3>
                          <p className="text-xs sm:text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-lg mb-3 sm:mb-8">
                            {features[activeIndex].desc}
                          </p>
                          <Link href={features[activeIndex].href} className="group inline-flex items-center justify-center gap-3 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] hover:gap-5 transition-all">
                            Learn More About This Service
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                      )}

                      {/* End state */}
                      {activeIndex === features.length && (
                        <motion.div
                          key="end"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute inset-0 flex flex-col justify-center items-center lg:items-start"
                        >
                          <h3 className="text-2xl sm:text-4xl md:text-6xl font-serif font-black text-white tracking-tighter mb-4 sm:mb-8">
                            Ready to <span className="text-[#38bdf8] italic font-medium">Evolve?</span>
                          </h3>
                          <Link href="/contact" className="focus-visible:outline-none w-fit">
                            <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-8 sm:px-10 py-3 sm:py-4">
                              <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Start a Consultation</span>
                              <ArrowRight size={16} className="ml-3 text-white" />
                            </ShimmerButton>
                          </Link>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>
                </div>

                {/* ── ANIMATED CIRCLE — bottom on mobile, left on desktop ── */}
                <div className="flex-shrink-0 flex justify-center lg:justify-start order-2 lg:order-1">
                  {/* 140px mobile → 180px tablet → 450px desktop */}
                  <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">

                    <AnimatePresence mode="wait">
                      {activeIndex >= 0 && activeIndex < features.length && (
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div
                            className="w-[110px] h-[110px] sm:w-[144px] sm:h-[144px] lg:w-[350px] lg:h-[350px] rounded-full border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden"
                            style={{ background: `radial-gradient(circle at center, ${features[activeIndex].color}33, transparent 70%)` }}
                          >
                            <motion.div initial={{ y: 10 }} animate={{ y: 0 }} transition={{ delay: 0.15 }}>
                              {/* Mobile icon */}
                              {(() => {
                                const Icon = features[activeIndex].icon;
                                return <Icon size={40} strokeWidth={1.5} className="text-white lg:hidden" />;
                              })()}
                              {/* Desktop icon */}
                              {(() => {
                                const Icon = features[activeIndex].icon;
                                return <Icon size={100} strokeWidth={1} className="text-white hidden lg:block" />;
                              })()}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Scroll progress ring — always visible */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.2" />
                      <motion.circle
                        cx="50" cy="50" r="48" fill="none" stroke="#38bdf8" strokeWidth="1.5"
                        style={{ pathLength: smoothProgress }}
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Founder Quote Strip ── */}
          <div className="py-5 sm:py-10 border-t border-white/5 bg-[#0f172a]/80 backdrop-blur-md">
            <div className="container mx-auto px-5 sm:px-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
                <p className="text-xs sm:text-base md:text-lg font-serif italic text-white/40 leading-relaxed max-w-2xl text-center sm:text-left">
                  &ldquo;Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span>&nbsp;and financial strength.&rdquo;
                </p>
                <div className="flex items-center gap-4 sm:border-l sm:border-white/10 sm:pl-6 shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    alt="Lisa Bebie"
                  />
                  <div className="text-left">
                    <div className="font-black text-white text-[12px] tracking-tight leading-none mb-1">Lisa Bebie</div>
                    <div className="text-[#38bdf8] text-[8px] font-black uppercase tracking-[0.3em]">President &amp; Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
