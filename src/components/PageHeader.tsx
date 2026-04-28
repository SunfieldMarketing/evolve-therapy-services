'use client';

import { motion } from 'framer-motion';

// Map of page-specific background abstract/medical images  
const imageMap: Record<string, string> = {
  default:   'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
  services:  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
  about:     'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  contact:   'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  locations: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80',
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  videoKey?: keyof typeof imageMap;
  bgImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  italicWord,
  videoKey = 'default',
  bgImage,
}: PageHeaderProps) {
  const imageUrl = bgImage || imageMap[videoKey] || imageMap.default;

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: '65vh' }}>
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        {videoKey === 'services' ? (
          <iframe
            src="https://www.youtube.com/embed/8_nVbI7NcOw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=8_nVbI7NcOw&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&start=5"
            title={`${title} background cover`}
            allow="autoplay; encrypted-media"
            className="absolute inset-0 w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0 opacity-40 filter blur-[2px]"
          />
        ) : (
          <img
            src={imageUrl}
            alt={`${title} background cover`}
            className="absolute inset-0 w-full h-full object-cover opacity-35 filter blur-[2px]"
          />
        )}
        
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/60 to-[#0f172a]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-transparent to-[#0f172a]/80" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 lg:px-32 text-center py-24 sm:py-32 md:py-40">
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
