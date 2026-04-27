'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center">
      {/* ── YouTube iframe background ── */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/PMj9gCBQK9Y?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=PMj9gCBQK9Y&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
          title="Background Video"
          allow="autoplay; encrypted-media"
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
          style={{ filter: 'brightness(0.4) saturate(0.8)' }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-[#0f172a]/30" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full container mx-auto px-5 sm:px-6 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[#38bdf8] text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            LTC Therapy Management & Consulting
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-6xl sm:text-7xl lg:text-[88px] font-black text-white leading-[0.92] tracking-tighter mb-8"
          >
            Changing How<br />
            <span className="text-[#0284c7] italic">Therapy Functions</span><br />
            <span className="text-white/60 font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl">for LTC Operators.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light"
          >
            Our unique model lets your facility retain <span className="text-white font-semibold">100% of therapy revenue</span> while Evolve drives clinical outcomes, compliance, and operational excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 mb-14 md:mb-20"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#0284c7] hover:bg-white text-white hover:text-[#0f172a] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-400 shadow-[0_0_40px_rgba(2,132,199,0.4)]"
            >
              Schedule a Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-400"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-8 pt-8 md:pt-10 border-t border-white/10"
          >
            {[
              { value: '100%', label: 'Revenue Retained' },
              { value: '24/7', label: 'Clinical Support' },
              { value: '15+', label: 'Years of Expertise' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-serif font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <div className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
