'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Map of page-specific background abstract/medical images  
const imageMap: Record<string, string> = {
  default:   'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
  services:  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
  about:     'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  contact:   'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  locations: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80',
};

// Map of page-specific background videos
const videoMap: Record<string, string> = {
  services: '8_nVbI7NcOw',
  about: 'bsTbwMlTyjg',
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
  const videoId = videoMap[videoKey as string];

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center min-h-[75vh] md:min-h-[85vh]">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        {videoId ? (
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute w-[320vw] h-[320vh] top-[-110vh] left-[-160vw] pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${videoId}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1`}
                title={`${title} background cover`}
                allow="autoplay; encrypted-media"
                className="w-full h-full border-0 opacity-40 contrast-[1.1] saturate-[0.8]"
              />
            </div>
            {/* Interaction Blocker */}
            <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto cursor-default" />
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={`${title} background cover`}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/40 to-[#0f172a]/95" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f172a]/90 via-transparent to-[#0f172a]/90" />
        <div className="absolute inset-0 z-25 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-30 w-full px-6 sm:px-12 md:px-20 lg:px-32 text-center py-24 sm:py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-[#0284c7] mx-auto mb-10"
          />

          <h1 className="font-serif font-black text-white tracking-tighter leading-[0.8] mb-10 uppercase" style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}>
            {title}{' '}
            {italicWord && (
              <span className="text-[#0284c7] italic block mt-2">{italicWord}</span>
            )}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-3xl text-white/50 max-w-4xl mx-auto leading-relaxed font-light italic"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
