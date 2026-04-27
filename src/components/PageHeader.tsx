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

export default function PageHeader({ 
  title, 
  subtitle, 
  italicWord, 
  bgImage = "https://images.unsplash.com/photo-1519494026892-80ba3f6247fb?auto=format&fit=crop&q=80",
  videoUrl
}: PageHeaderProps) {
  return (
    <section className="relative pt-64 pb-32 overflow-hidden bg-secondary">
      {/* Background Layer with improved opacity */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            poster={bgImage}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <Image 
            src={bgImage} 
            alt="Header Background" 
            fill 
            priority
            className="object-cover opacity-50"
          />
        )}
        {/* Refined gradient for better visibility of background media */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
              {title} <br />
              {italicWord && <span className="text-primary italic font-medium drop-shadow-[0_0_30px_rgba(2,132,199,0.5)]">{italicWord}</span>}
            </h1>
          </motion.div>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-3xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg backdrop-blur-[2px] py-4 rounded-3xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
