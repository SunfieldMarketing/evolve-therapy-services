'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  bgImage?: string;
  videoUrl?: string;
}

import BackgroundVideo from './BackgroundVideo';

export default function PageHeader({ 
  title, 
  subtitle, 
  italicWord, 
  bgImage = "https://images.unsplash.com/photo-1519494026892-80ba3f6247fb?auto=format&fit=crop&q=80",
  videoUrl
}: PageHeaderProps) {
  return (
    <section className="relative pt-64 pb-32 overflow-hidden min-h-[70vh] flex items-center justify-center bg-secondary">
      {/* Background Media - High Presence */}
      <BackgroundVideo 
        url={videoUrl ? (videoUrl.includes('youtube') ? videoUrl : "https://www.youtube.com/watch?v=zH0D_6rZJXY") : "https://www.youtube.com/watch?v=zH0D_6rZJXY"} 
        poster={bgImage} 
      />
      
      {/* High-quality overlay for text legibility */}
      <div className="absolute inset-0 z-[1] bg-secondary/60 backdrop-brightness-75" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-secondary/80 via-transparent to-secondary/90" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-10"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-serif font-black text-white leading-[0.8] tracking-tighter drop-shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
              {title} <br />
              {italicWord && <span className="text-primary italic font-medium drop-shadow-[0_0_40px_rgba(2,132,199,0.6)]">{italicWord}</span>}
            </h1>
          </motion.div>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Decorative Glow elements to fill empty space and emphasize quality */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-white to-transparent transform z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
