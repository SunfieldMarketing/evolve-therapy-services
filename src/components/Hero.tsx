'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Spotlight } from '@/components/aceternity/spotlight';
import { AnimatedGradientTextDark } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { tinaField } from '@/lib/tina';

export default function Hero({ data, parentField }: { data?: any, parentField?: string }) {
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const d = data || {
    eyebrow: "LTC Therapy Management & Consulting",
    titleLine1: "Changing How",
    titleItalic: "Therapy Functions",
    titleLine2: "for LTC Operators.",
    subtext: "Our unique model lets your facility retain 100% of therapy revenue while Evolve drives clinical outcomes, compliance, and operational excellence.",
    primaryCta: "Schedule a Free Consultation",
    secondaryCta: "Explore Our Services",
    stats: [
      { value: '100%', label: 'Revenue Retained' },
      { value: '24/7', label: 'Clinical Support' },
      { value: '20+', label: 'Years of Expertise' },
      { value: '15+', label: 'States Served' },
    ]
  };

  useEffect(() => {
    // When the component mounts, ensure the video starts playing and set our state
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoStarted(true);
      }).catch((e) => {
        console.error("Autoplay failed:", e);
        setVideoStarted(true);
      });

      const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.duration) {
          if (videoRef.current.currentTime >= videoRef.current.duration - 5) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }
      };
      
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    } else {
      const timer = setTimeout(() => setVideoStarted(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center">
      {/* ── Aceternity Spotlight overlay ── */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(56,189,248,0.6)"
      />

      {/* ── Native HTML5 Video Background ── */}
      <div className="absolute inset-0 z-0 bg-[#0f172a] overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{ filter: 'brightness(0.35) saturate(0.7)' }}
        />
        
        {/* Interaction Blocker — only blocks interaction with the video itself */}
        <div className="absolute inset-0 z-10 bg-transparent pointer-events-none" />

        {/* Quick Fade Cover */}
        <div
          className={`absolute inset-0 bg-[#0f172a] pointer-events-none z-30 transition-opacity duration-[1500ms] ease-in-out ${videoStarted ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-[#0f172a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-[#0f172a]/20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-40 w-full px-5 sm:px-6 md:px-10 lg:px-12 pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-32 flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 pointer-events-auto"
          >
            <AnimatedGradientTextDark className="justify-center" data-tina-field={parentField ? tinaField(d, 'eyebrow') : undefined}>
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse inline-block mr-2" aria-hidden="true" />
              {d.eyebrow}
            </AnimatedGradientTextDark>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[100px] font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 w-full text-center pointer-events-auto"
          >
            <span data-tina-field={parentField ? tinaField(d, 'titleLine1') : undefined}>{d.titleLine1}</span>{' '}
            <span className="text-[#0284c7] italic" data-tina-field={parentField ? tinaField(d, 'titleItalic') : undefined}>{d.titleItalic}</span><br className="hidden lg:block" />
            <span className="text-white/80 font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl align-top block sm:inline mt-2 sm:mt-0" data-tina-field={parentField ? tinaField(d, 'titleLine2') : undefined}>{d.titleLine2}</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl lg:text-3xl text-white/65 w-full leading-relaxed mb-10 md:mb-14 font-light text-center max-w-5xl mx-auto px-4 sm:px-0 pointer-events-auto"
            data-tina-field={parentField ? tinaField(d, 'subtext') : undefined}
          >
            {/* Logic to highlight 100% of therapy revenue if it exists in subtext */}
            {d.subtext.includes('100% of therapy revenue') ? (
              <>
                {d.subtext.split('100% of therapy revenue')[0]}
                <span className="text-white font-black">100% of therapy revenue</span>
                {d.subtext.split('100% of therapy revenue')[1]}
              </>
            ) : d.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-10 md:mb-24 justify-center w-full relative z-[101] pointer-events-auto"
          >
            <Link
              href={d.primaryCtaLink || "/contact"}
              className="relative z-[101] flex items-center justify-center gap-2 px-10 py-5 bg-[#0284c7] text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-[#0369a1] transition-all hover:-translate-y-1 active:translate-y-0 pointer-events-auto w-full sm:w-auto"
            >
              <span data-tina-field={parentField ? tinaField(d, 'primaryCta') : undefined}>{d.primaryCta}</span>
              <ArrowRight size={18} className="transition-transform" />
            </Link>

            <Link
              href={d.secondaryCtaLink || "/services"}
              className="group relative z-[101] flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 w-full sm:w-auto pointer-events-auto"
            >
              <span data-tina-field={parentField ? tinaField(d, 'secondaryCta') : undefined}>{d.secondaryCta}</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 w-full justify-center max-w-6xl mx-auto px-1 py-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {d.stats.map((stat: any, i: number) => (
              <div key={i} className="group text-center" data-tina-field={parentField ? tinaField(d, 'stats') : undefined}>
                <div className="text-2xl sm:text-3xl md:text-5xl font-serif font-black text-white mb-1 sm:mb-2 group-hover:text-[#38bdf8] group-hover:scale-110 transition-all duration-300" data-tina-field={parentField ? tinaField(stat, 'value') : undefined}>
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans" data-tina-field={parentField ? tinaField(stat, 'label') : undefined}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-3" aria-hidden="true">
        <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
