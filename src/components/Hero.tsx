'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { Spotlight } from '@/components/aceternity/spotlight';
import { AnimatedGradientTextDark } from '@/components/magicui/animated-gradient-text';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const loopIntervalRef = useRef<any>(null);

  useEffect(() => {
    // Check if API is already loaded
    // @ts-ignore
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      // @ts-ignore
      playerRef.current = new window.YT.Player('hero-youtube-player', {
        videoId: 'W5Dm2WCk8jg',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          playsinline: 1,
          playlist: 'W5Dm2WCk8jg'
        },
        events: {
          onStateChange: (event: any) => {
            // @ts-ignore
            if (event.data === window.YT.PlayerState.PLAYING) {
              // Wait 1.5s for YouTube's native title bar to fade out before revealing
              setTimeout(() => setIsVideoPlaying(true), 1500);

              // Custom Loop: Cut out the last 5 seconds and prevent YouTube 'End' UI from ever showing
              if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
              loopIntervalRef.current = setInterval(() => {
                if (playerRef.current && playerRef.current.getCurrentTime) {
                  const duration = playerRef.current.getDuration();
                  const currentTime = playerRef.current.getCurrentTime();
                  const endTime = duration > 5 ? duration - 5 : duration; // Safely cut last 5 seconds
                  
                  if (currentTime >= endTime) {
                    playerRef.current.seekTo(4); // Seek back to start (4s as previously requested)
                  }
                }
              }, 500);
            } else {
              if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
            }
          }
        }
      });
    };

    // @ts-ignore
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // @ts-ignore
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center">
      {/* ── Aceternity Spotlight overlay ── */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(56,189,248,0.6)"
      />

      {/* ── YouTube iframe background ── */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <div 
            id="hero-youtube-player" 
            className="w-full h-full border-0 opacity-100 scale-[1.05]"
            style={{ filter: 'brightness(0.35) saturate(0.7)' }}
          />
        </div>
        
        {/* Interaction Blocker - ensures no YT UI appears on hover */}
        <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto cursor-default" />

        {/* Solid cover that hides YouTube UI during load, fades out only when API confirms video is playing */}
        <div
          className={`absolute inset-0 bg-[#0f172a] pointer-events-none z-20 transition-opacity duration-[2000ms] ease-in-out ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/70 to-[#0f172a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-[#0f172a]/20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 pt-32 sm:pt-36 md:pt-40 pb-24 md:pb-32 flex flex-col items-center text-center">
        {/* Stretches completely across the available viewport */}
        <div className="w-full flex flex-col items-center">
          {/* Eyebrow — Magic UI AnimatedGradientText (dark variant) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <AnimatedGradientTextDark className="justify-center">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse inline-block mr-2" aria-hidden="true" />
              LTC Therapy Management & Consulting
            </AnimatedGradientTextDark>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-8 w-full text-center"
          >
            Changing How{' '}
            <span className="text-[#0284c7] italic">Therapy Functions</span><br className="hidden lg:block" />
            <span className="text-white/80 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl align-top">for LTC Operators.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/65 w-full leading-relaxed mb-14 font-light text-center max-w-5xl mx-auto"
          >
            Our unique model lets your facility retain{' '}
            <span className="text-white font-semibold">100% of therapy revenue</span>{' '}
            while Evolve drives clinical outcomes, compliance, and operational excellence.
          </motion.p>

      {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-5 mb-16 md:mb-24 justify-center w-full"
          >
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-3 overflow-hidden bg-[#0284c7] text-white px-10 py-5 rounded-full font-bold text-sm lg:text-base uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(2,132,199,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 flex-grow sm:flex-grow-0"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" aria-hidden="true" />
              <span className="relative">Schedule a Free Consultation</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>

            <Link
              href="/services"
              className="group flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40 px-10 py-5 rounded-full font-bold text-sm lg:text-base uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 flex-grow sm:flex-grow-0"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Stats strip — Glassmorphism fix */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full justify-center max-w-6xl mx-auto p-8 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {[
              { value: '100%', label: 'Revenue Retained' },
              { value: '24/7', label: 'Clinical Support' },
              { value: '20+', label: 'Years of Expertise' },
              { value: '15+', label: 'States Served' },
            ].map((stat) => (
              <div key={stat.label} className="group text-center">
                <div className="text-3xl md:text-5xl font-serif font-black text-white mb-2 group-hover:text-[#38bdf8] group-hover:scale-110 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.3em] font-sans">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-3" aria-hidden="true">
        <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
