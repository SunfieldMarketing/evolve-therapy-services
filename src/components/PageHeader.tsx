'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  bgImage?: string;
}

export default function PageHeader({ title, subtitle, italicWord, bgImage = "https://images.unsplash.com/photo-1519494026892-80ba3f6247fb?auto=format&fit=crop&q=80" }: PageHeaderProps) {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-secondary">
      {/* Background Image */}
      <Image 
        src={bgImage} 
        alt="Header Background" 
        fill 
        priority
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto dark-glass p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
            {title} {italicWord && <span className="text-gradient italic">{italicWord}</span>}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
