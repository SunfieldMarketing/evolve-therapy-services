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
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
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
            className="object-cover opacity-20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tighter">
            {title} <br />
            {italicWord && <span className="text-primary italic font-medium">{italicWord}</span>}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
