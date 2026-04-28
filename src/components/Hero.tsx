'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { Spotlight } from '@/components/aceternity/spotlight';
import { AnimatedGradientTextDark } from '@/components/magicui/animated-gradient-text';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center">
      {/* ── Aceternity Spotlight overlay ── */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(56,189,248,0.6)"
      />

      {/* ── YouTube iframe background ── */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/PMj9gCBQK9Y?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=PMj9gCBQK9Y&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
          title="Background Video — Evolve Therapy Services facility"
          allow="autoplay; encrypted-media"
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
          style={{ filter: 'brightness(0.35) saturate(0.7)' }}
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-[#0f172a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-[#0f172a]/20" />
        {/* Dot pattern texture — Magic UI */}
        <div className="absolute inset-0 dot-pattern-dark opacity-40" aria-hidden="true" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 lg:px-32 pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24">
        <div className="w-full">
          {/* Eyebrow — Magic UI AnimatedGradientText (dark variant) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <AnimatedGradientTextDark>
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse inline-block mr-2" aria-hidden="true" />
              LTC Therapy Management & Consulting
            </AnimatedGradientTextDark>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-full"
          >
            Changing How<br />
            <span className="text-[#0284c7] italic pr-4">Therapy Functions</span><br />
            <span className="text-white/55 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl">for LTC Operators.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/65 max-w-3xl leading-relaxed mb-14 font-light"
          >
            Our unique model lets your facility retain{' '}
            <span className="text-white font-semibold">100% of therapy revenue</span>{' '}
            while Evolve drives clinical outcomes, compliance, and operational excellence.
          </motion.p>

          {/* CTAs — Magic UI ShimmerButton style applied inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-[#0284c7] text-white px-10 py-5 rounded-full font-bold text-sm lg:text-base uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow hover:[animation-play-state:paused] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
            >
              {/* Shimmer sweep — Magic UI ShimmerButton pattern */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                aria-hidden="true"
              />
              <span className="relative">Schedule a Free Consultation</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/30 px-10 py-5 rounded-full font-bold text-sm lg:text-base uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Stats strip — animated with blur-fade */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap gap-10 md:gap-16 pt-10 md:pt-14 border-t border-white/10"
          >
            {[
              { value: '100%', label: 'Revenue Retained' },
              { value: '24/7', label: 'Clinical Support' },
              { value: '20+', label: 'Years of Expertise' },
              { value: '15+', label: 'States Served' },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl md:text-5xl font-serif font-black text-white mb-2 group-hover:text-[#38bdf8] transition-colors duration-200">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/40 font-bold uppercase tracking-[0.25em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-12 z-10 hidden lg:flex flex-col items-center gap-3" aria-hidden="true">
        <div className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>Scroll</div>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
