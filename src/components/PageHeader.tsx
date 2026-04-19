'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  bgClass?: string;
}

export default function PageHeader({ title, subtitle, italicWord, bgClass = "bg-slate-50" }: PageHeaderProps) {
  return (
    <section className={`relative pt-40 pb-24 overflow-hidden ${bgClass}`}>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-secondary mb-6 leading-tight">
            {title} {italicWord && <span className="text-primary italic">{italicWord}</span>}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
