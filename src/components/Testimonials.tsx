'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Amy Tyler, PTA',
    role: 'Director of Rehab',
    facility: 'Crystal Health and Rehab',
    content:
      'The support we received from Evolve Therapy Services facilitated our shift from a negative margin to being the most profitable we have ever been as a rehab department. Lisa and Isaiah work hard to ensure that we are up to date on the latest changes.',
    stars: 5,
    highlight: 'most profitable we have ever been',
  },
  {
    name: 'I. Chafetz',
    role: 'Facility Administrator',
    facility: 'LTC Operator',
    content:
      'Having a company that treats your facilities like it\'s their own is very rare. They will focus on your facilities\' goals like it\'s their own. It\'s an absolute pleasure both from a customer service side and facility productivity side.',
    stars: 5,
    highlight: 'treats your facilities like it\'s their own',
  },
  {
    name: 'Jimmy Daniels, COTA/L',
    role: 'Director of Rehab',
    facility: 'Emerald Care Center, Midwest City, OK',
    content:
      'The leadership of Evolve has made a great impact not only in my daily operations as a Director of Therapy but has made it fun and exciting to work, ultimately making a positive impact in our communities. They have definitely been a blessing to not only me but my fellow peers.',
    stars: 5,
    highlight: 'a great impact…in our communities',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goto = (idx: number) => {
    setActive(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoPlay();
  };

  const prev = () => goto((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goto((active + 1) % testimonials.length);

  const t = testimonials[active];

  const fadeVariants = {
    enter: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : -16 },
  };

  return (
    <section className="py-20 md:py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(2,132,199,0.08) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Client Voices
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white tracking-tighter leading-[0.95] mb-4">
            Real Results,{' '}
            <span className="text-[#0284c7] italic font-medium">Trusted Partners.</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto font-light">
            Hear from the LTC leaders who have partnered with Evolve to transform their therapy programs.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 md:p-14 min-h-[280px] flex flex-col justify-between">
            {/* Giant quote mark */}
            <Quote size={48} className="text-[#0284c7]/20 absolute top-8 left-8 md:top-10 md:left-10" aria-hidden="true" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="relative z-10 pt-8"
              >
                <StarRating count={t.stars} />

                <blockquote className="mt-5 md:mt-6 mb-8 md:mb-10">
                  <p className="text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/30 flex items-center justify-center text-[#0284c7] font-serif font-black text-lg shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-black text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{t.role} · {t.facility}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dot indicators */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goto(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-2 focus:ring-offset-[#0f172a] ${
                    active === i ? 'bg-[#0284c7] w-8' : 'bg-white/20 w-4 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrow controls */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-2 focus:ring-offset-[#0f172a]"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact mini-cards below */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10 md:mt-14">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goto(i)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:ring-offset-2 focus:ring-offset-[#0f172a] ${
                active === i
                  ? 'border-[#0284c7]/40 bg-[#0284c7]/10'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
              }`}
              aria-pressed={active === i}
              aria-label={`Select testimonial from ${item.name}`}
            >
              <StarRating count={item.stars} />
              <p className="text-white/60 text-xs leading-relaxed mt-3 line-clamp-2 font-light">
                &ldquo;{item.highlight}&rdquo;
              </p>
              <div className="mt-3 text-white/80 text-xs font-black">{item.name}</div>
              <div className="text-white/30 text-[10px] mt-0.5">{item.facility}</div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f172a] shadow-[0_0_32px_rgba(2,132,199,0.25)]"
          >
            Join Our Partner Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}
