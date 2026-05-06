'use client';

import { Award, Briefcase, Zap, Heart, ShieldCheck, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
      <div className="h-[600vh] relative">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          
          {/* Background Text / Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.01] pointer-events-none">
             <h2 className="text-[25vw] font-serif font-black uppercase leading-none">Evolve</h2>
          </div>

          {/* Main Scrollytelling Content Area */}
          <div className="flex-1 flex items-center">
            <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                
                {/* Visual Display (Left) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                  <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
                    {/* Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-20" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="1 3" />
                      <motion.circle 
                        cx="50" cy="50" r="48" fill="none" stroke="#38bdf8" strokeWidth="1" 
                        style={{ pathLength: smoothProgress }}
                      />
                    </svg>

                    {features.map((item, i) => {
                        // More overlapped ranges for fluid "flow"
                        const start = 0.15 + (i * 0.8) / features.length;
                        const end = 0.15 + ((i + 1) * 0.8) / features.length;
                        
                        // Increase overlap by extending the fade range
                        const opacity = useTransform(smoothProgress, [start - 0.05, start + 0.05, end - 0.05, end + 0.05], [0, 1, 1, 0]);
                        const scale = useTransform(smoothProgress, [start - 0.05, start + 0.05, end - 0.05, end + 0.05], [0.8, 1, 1, 0.8]);
                        const rotate = useTransform(smoothProgress, [start, end], [i * 5, (i + 1) * -5]);

                        return (
                          <motion.div
                            key={i}
                            style={{ opacity, scale, rotate }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="relative">
                              {/* Glass Orb */}
                              <div className="w-64 h-64 md:w-[350px] md:h-[350px] rounded-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                 <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }} />
                                 <item.icon size={100} strokeWidth={1} className="relative z-10 text-white" />
                              </div>
                              {/* Large Number Overlay */}
                              <span className="absolute -bottom-8 -right-8 text-8xl md:text-9xl font-serif font-black text-white/5">{item.num}</span>
                            </div>
                          </motion.div>
                        );
                    })}
                  </div>
                </div>

                {/* Content Reveal (Right) */}
                <div className="w-full lg:w-1/2 text-left">
                  <div className="max-w-xl">
                      <div className="relative h-64 md:h-80">
                        {/* Initial Title State */}
                        <motion.div
                          style={{ 
                            opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]),
                            y: useTransform(smoothProgress, [0, 0.15], [0, -30])
                          }}
                          className="absolute inset-0"
                        >
                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-12">
                            <Sparkles size={12} />
                            The Evolve Advantage
                          </div>
                          <h3 className="text-5xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none mb-8">
                            Why Choose <br />
                            <span className="text-[#38bdf8] italic font-medium">Evolve?</span>
                          </h3>
                          <p className="text-xl md:text-2xl text-white/30 font-light max-w-lg">
                            Scroll to discover the clinical advantages of our management model.
                          </p>
                        </motion.div>

                        {features.map((item, i) => {
                           const start = 0.15 + (i * 0.8) / features.length;
                           const end = 0.15 + ((i + 1) * 0.8) / features.length;
                           // More overlapped ranges for fluid "flow"
                           const opacity = useTransform(smoothProgress, [start - 0.05, start + 0.05, end - 0.05, end + 0.05], [0, 1, 1, 0]);
                           const y = useTransform(smoothProgress, [start - 0.05, start + 0.05, end - 0.05, end + 0.05], [20, 0, 0, -20]);

                           return (
                             <motion.div
                               key={i}
                               style={{ opacity, y }}
                               className="absolute inset-0"
                             >
                               <div className="inline-flex items-center gap-2 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                                  <div className="w-8 h-px bg-[#38bdf8]/30" />
                                  Clinical Pillar {item.num}
                               </div>
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

                      <div className="mt-16 flex items-center gap-8">
                        <Link href="/about" className="focus-visible:outline-none">
                          <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="group px-10 py-4">
                            <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Join the Evolution</span>
                          </ShimmerButton>
                        </Link>
                        <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                              className="h-full bg-[#38bdf8]"
                              style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                           />
                        </div>
                      </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Persistent Founder Quote — Integrated at the bottom of the sticky container */}
          <div className="py-12 border-t border-white/5 bg-[#0f172a]/50 backdrop-blur-xl">
             <div className="container mx-auto px-5">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                   <p className="text-lg md:text-xl font-serif italic text-white/50 leading-relaxed max-w-2xl text-center md:text-left">
                      &ldquo;Evolve was founded on the principle that therapy departments should be <span className="text-[#38bdf8] font-bold not-italic">centers of excellence</span> and financial strength.&rdquo;
                   </p>
                   <div className="flex items-center gap-4 border-l border-white/10 pl-8">
                      <Image
                        src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                        width={48}
                        height={48}
                        className="rounded-full object-cover border border-white/20"
                        alt="Lisa Bebie"
                      />
                      <div className="text-left">
                        <div className="font-black text-white text-sm tracking-tight leading-none mb-1">Lisa Bebie</div>
                        <div className="text-[#38bdf8] text-[9px] font-black uppercase tracking-[0.3em]">President &amp; Founder</div>
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
