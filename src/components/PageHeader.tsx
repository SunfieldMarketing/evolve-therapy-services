'use client';

import { motion } from 'framer-motion';

// Map of page-specific YouTube video IDs  
const videoMap: Record<string, string> = {
  // Physical therapy / rehabilitation
  default:   'PMj9gCBQK9Y',
  services:  'z_CgxsBP5rQ',
  about:     'PMj9gCBQK9Y',
  contact:   'z_CgxsBP5rQ',
  locations: 'PMj9gCBQK9Y',
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  videoKey?: keyof typeof videoMap;
  bgImage?: string;
  videoUrl?: string;
}

export default function PageHeader({
  title,
  subtitle,
  italicWord,
  videoKey = 'default',
  bgImage = 'https://images.unsplash.com/photo-1519494026892-80ba3f6247fb?auto=format&fit=crop&q=80',
}: PageHeaderProps) {
  const videoId = videoMap[videoKey] ?? videoMap.default;

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '65vh' }}>
      {/* ── YouTube iframe background ── */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${videoId}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
          title="Background Video"
          allow="autoplay; encrypted-media"
          className="absolute border-0 pointer-events-none"
          style={{
            width: '300%',
            height: '300%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'brightness(0.35) saturate(0.7)',
          }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/40 to-[#0f172a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/50 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-12 text-center py-28 sm:py-36 md:py-44">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#0284c7] mx-auto mb-8"
          />

          <h1 className="font-serif font-black text-white tracking-tighter leading-[0.85] mb-8" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
            {title}{' '}
            {italicWord && (
              <span className="text-[#0284c7] italic">{italicWord}</span>
            )}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
