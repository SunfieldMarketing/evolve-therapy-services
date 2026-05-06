'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const features = [
  {
    title: 'Regulatory',
    subtitle: 'Defense',
    desc: 'Proactive audit defense and denial management from clinical experts who know the appeals process inside and out.',
    icon: ShieldCheck,
    num: '01',
    color: '#f59e0b',
  },
  {
    title: 'Tiered Pricing',
    subtitle: 'Scales With You',
    desc: 'Our unique approach customizes to your size of business and Evolves as you do, reducing pricing as you grow.',
    icon: Zap,
    num: '02',
    color: '#38bdf8',
  },
  {
    title: '100% Revenue',
    subtitle: 'Retention',
    desc: 'You retain all therapy revenue while we provide the expert management and operational oversight.',
    icon: Award,
    num: '03',
    color: '#10b981',
  },
  {
    title: 'In-House',
    subtitle: 'Employment',
    desc: 'Empower your therapy team with in-house employment and career advancement through internal mentorship.',
    icon: Briefcase,
    num: '04',
    color: '#8b5cf6',
  },
  {
    title: 'Holistic',
    subtitle: 'Philosophy',
    desc: 'We set our customers apart through exceptional clinical programming and a holistic approach to care.',
    icon: Heart,
    num: '05',
    color: '#f43f5e',
  },
];

export default function WhyEvolve() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress for animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="about" ref={containerRef} className="bg-[#0f172a] relative">
      <div className="h-[500vh] relative">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* Background Text / Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
             <h2 className="text-[25vw] font-serif font-black uppercase leading-none">Evolve</h2>
          </div>

          <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
              
              {/* Visual Display (Left) */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                   {features.map((item, i) => {
                      // Calculate active state based on scroll progress (shifted for intro)
                      const start = 0.1 + (i * 0.9) / features.length;
                      const end = 0.1 + ((i + 1) * 0.9) / features.length;
                      
                      // Opacity transform
                      const opacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                      const scale = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0.8, 1, 1, 0.8]);
                      const rotate = useTransform(smoothProgress, [start, end], [i * 10, (i + 1) * -10]);

                      return (
                        <motion.div
                          key={i}
                          style={{ opacity, scale, rotate }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="relative group">
                            {/* Glass Orb */}
                            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                               <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }} />
                               <item.icon size={120} strokeWidth={1} className="relative z-10 text-white/80" />
                            </div>
                            {/* Orbiting Ring */}
                            <div className="absolute -inset-8 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute -inset-16 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
                            
                            {/* Large Number Overlay */}
                            <span className="absolute -bottom-10 -right-10 text-9xl font-serif font-black text-white/5">{item.num}</span>
                          </div>
                        </motion.div>
                      );
                   })}
                </div>
              </div>

              {/* Content Reveal (Right) */}
              <div className="w-full lg:w-1/2 text-left">
                 <div className="max-w-xl">
                    <BlurFade delay={0.1}>
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-12">
                        <Sparkles size={12} />
                        The Evolve Advantage
                      </div>
                    </BlurFade>

                    <div className="relative h-64 md:h-80">
                      {/* Initial Title State */}
                      <motion.div
                        style={{ 
                          opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
                          y: useTransform(smoothProgress, [0, 0.1], [0, -30])
                        }}
                        className="absolute inset-0"
                      >
                        <h3 className="text-5xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none mb-8">
                          Why Choose <br />
                          <span className="text-[#38bdf8] italic font-medium">Evolve?</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-white/30 font-light max-w-lg">
                          Scroll to discover the clinical advantages of our management model.
                        </p>
                      </motion.div>

                      {features.map((item, i) => {
                         // Shift the range to start after the intro (0.1 - 1.0)
                         const start = 0.1 + (i * 0.9) / features.length;
                         const end = 0.1 + ((i + 1) * 0.9) / features.length;
                         const opacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                         const y = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [30, 0, 0, -30]);

                         return (
                           <motion.div
                             key={i}
                             style={{ opacity, y }}
                             className="absolute inset-0"
                           >
                             <h3 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter leading-none mb-8">
                               {item.title} <br />
                               <span className="text-[#38bdf8] italic font-medium">{item.subtitle}</span>
                             </h3>
                             <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-lg">
                               {item.desc}
                             </p>
                           </motion.div>
                         );
                      })}
                    </div>

                    <div className="mt-16">
                      <Link href="/about" className="focus-visible:outline-none">
                        <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-12 py-5">
                          <span className="text-white font-black text-[11px] uppercase tracking-[0.25em]">Join the Evolution</span>
                          <ArrowRight size={18} className="text-white ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                        </ShimmerButton>
                      </Link>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Founder quote strip — Centered original style */}
      <div className="bg-[#0f172a] relative z-20 pb-24 md:pb-40">
        <div className="container mx-auto px-5">
          <BlurFade delay={0.2}>
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
      </div>
    </section>
  );
}
