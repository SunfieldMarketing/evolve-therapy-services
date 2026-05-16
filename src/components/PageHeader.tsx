'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Target, ArrowRight, Sparkles, Heart, LucideIcon } from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Map of page-specific background abstract/medical images  
const imageMap: Record<string, string> = {
  default:   'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
  services:  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
  about:     'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  contact:   'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  locations: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80',
};

// Map of page-specific background videos (Local MP4 paths)
const videoMap: Record<string, string> = {
  services: '/videos/services.mp4',
  about: '/videos/about.mp4',
};

interface ValueBox {
  icon: LucideIcon;
  label: string;
  sublabel: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  videoKey?: keyof typeof imageMap;
  bgImage?: string;
  videoUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  badgeText?: string;
  valueBoxes?: ValueBox[];
  useVideo?: boolean;
  tinaFields?: {
    title?: string;
    subtitle?: string;
    badgeText?: string;
  };
}

export default function PageHeader({
  title,
  subtitle,
  italicWord,
  videoKey = 'default',
  bgImage,
  videoUrl,
  ctaText = 'Start Your Evolution',
  ctaLink = '/contact',
  badgeText = 'Professional Integrity',
  valueBoxes = [
    { icon: Sparkles, label: 'Visionary Hub', sublabel: 'Creative Consulting' },
    { icon: Heart, label: 'Compassion', sublabel: 'Results Driven' }
  ],
  useVideo = true,
  tinaFields,
  ...props
}: PageHeaderProps & React.HTMLAttributes<HTMLElement>) {
  const imageUrl = bgImage || imageMap[videoKey] || imageMap.default;
  const finalVideoUrl = videoUrl || videoMap[videoKey as string];
  const finalUseVideo = useVideo && !!finalVideoUrl;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!finalUseVideo || !finalVideoUrl) return;

    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
      }).catch((e) => {
        console.error("Autoplay failed:", e);
        setIsVideoPlaying(true);
      });
    } else {
      const timer = setTimeout(() => setIsVideoPlaying(true), 800);
      return () => clearTimeout(timer);
    }
  }, [finalUseVideo, finalVideoUrl]);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center bg-[#0f172a] overflow-hidden pt-52 sm:pt-48" {...props}>
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        {finalUseVideo ? (
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className={cn(
              "absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-[1500ms] ease-in-out overflow-hidden",
              isVideoPlaying ? "opacity-100" : "opacity-0"
            )}>
              <video
                ref={videoRef}
                src={finalVideoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
                style={{ filter: 'contrast(1.2) saturate(0.6) grayscale(0.1)' }}
              />
            </div>
            {/* Background elements — no blocker here */}
            <div className={`absolute inset-0 bg-[#0f172a] pointer-events-none z-30 transition-opacity duration-[1500ms] ease-in-out ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} />
          </div>
        ) : bgImage === 'none' ? (
          <div className="absolute inset-0 bg-[#0f172a]" />
        ) : (
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={`${title} background cover`}
              className="absolute inset-0 w-full h-full object-cover opacity-60 contrast-[1.1] saturate-[1.2] pointer-events-none"
            />
            {/* Additional image-specific overlay for better text contrast */}
            <div className="absolute inset-0 bg-[#0f172a]/40 mix-blend-multiply pointer-events-none" />
          </div>
        )}
        
        {/* Multi-layer gradient overlay (Matched to Services Hero) */}
        <div className="absolute inset-0 z-20 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, #0284c7 0%, transparent 65%)' }} />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/80 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f172a]/95 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-25 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-50 container mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-20 flex-1 flex flex-col justify-center">
        <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left">
          <BlurFade delay={0.2}>
             {/* Subtitle Badge */}
             <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 sm:mb-10">
                <div className="w-8 sm:w-12 h-[1px] bg-[#0284c7]" />
                <span className="text-[#38bdf8] font-black uppercase text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em]" data-tina-field={tinaFields?.badgeText}>{badgeText}</span>
             </div>
             
             <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[100px] font-serif font-black text-white leading-[1.2] sm:leading-[0.9] tracking-tighter mb-8 sm:mb-16 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] uppercase break-words max-w-5xl" data-tina-field={tinaFields?.title}>
                {title}
                {italicWord && (
                  <span className="text-[#0284c7] italic ml-[0.1em] sm:ml-[0.15em] uppercase tracking-tighter block sm:inline mt-1 sm:mt-0">{italicWord}</span>
                )}
             </h1>

             {subtitle && (
                <div className="mb-10 sm:mb-20 w-full" data-tina-field={tinaFields?.subtitle}>
                   <p className="text-[14px] sm:text-xl md:text-2xl text-white/40 font-light leading-relaxed border-l-0 lg:border-l-4 border-[#0284c7] lg:pl-10 italic max-w-5xl text-center lg:text-left">
                      {subtitle}
                   </p>
                </div>
             )}

             <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-24 w-full lg:w-auto">
                <a 
                  href={ctaLink} 
                  className="inline-flex items-center justify-center gap-3 sm:gap-5 px-8 sm:px-16 py-5 sm:py-7 bg-[#0284c7] text-white rounded-xl shadow-[0_30px_60px_rgba(2,132,199,0.3)] hover:bg-[#0369a1] transition-all hover:-translate-y-1 active:translate-y-0 group shrink-0 w-full sm:w-auto pointer-events-auto"
                >
                  <span className="font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[11px] sm:text-[14px]">{ctaText}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                </a>

                {/* Values Integration */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-10 sm:gap-12 w-full sm:w-auto">
                   {valueBoxes.map((box, i) => (
                      <div key={i} className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 group">
                         <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0284c7] shadow-2xl backdrop-blur-xl group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                            <box.icon size={20} />
                         </div>
                         <div className="flex flex-col text-left">
                            <span className="text-white font-black uppercase text-[10px] sm:text-[11px] tracking-widest mb-1">{box.label}</span>
                            <span className="text-white/20 text-[11px] sm:text-[13px] font-light italic">"{box.sublabel}"</span>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
