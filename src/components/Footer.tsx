'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTina, tinaField } from 'tinacms/dist/react';
import settingsData from '../../content/global/settings.json';

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const s = settingsData;
  const navLinks = s?.footer?.links || [];
  const serviceLinks = s?.footer?.serviceLinks || [];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden" role="contentinfo">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#0284c7]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative border-b border-white/10 overflow-hidden bg-[#0f172a]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" aria-hidden="true" />

        <div className="container mx-auto px-5 sm:px-6 md:px-12 py-24 md:py-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
               Ready to Evolve?
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black tracking-tighter leading-[0.9] text-white mb-8">
              <span data-tina-field={tinaField(s?.preFooterCta, 'title') as any}>
                {s?.preFooterCta?.title?.split('with')[0] || 'Start Your Evolution'} <br className="hidden md:block" />
                with <span className="text-[#38bdf8] italic font-medium">{s?.preFooterCta?.title?.split('with')[1] || "Evolve"}</span>
              </span>
            </h3>
            <p data-tina-field={tinaField(s?.preFooterCta, 'subtitle') as any} className="text-xl md:text-2xl text-white/65 mb-14 font-light leading-relaxed">
              {s?.preFooterCta?.subtitle || ''}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-white hover:text-[#0f172a] text-white px-8 py-5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(2,132,199,0.4)]"
              >
                {s?.preFooterCta?.primaryCta || 'Contact'} <ArrowRight size={16} aria-hidden="true" className="ml-2" />
              </Link>
              <a
                href={`tel:${s?.phone?.replace(/[^0-9]/g, '') || ''}`}
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/40 px-8 py-5 rounded-full font-bold text-xs uppercase transition-all duration-300"
              >
                <Phone size={15} aria-hidden="true" /> {s?.phone || ''}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-14 md:mb-16">

          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6 w-fit" aria-label="Evolve Therapy Services Home">
              <img 
                src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png" 
                alt="Evolve Therapy Services"
                className="h-14 brightness-0 invert" 
              />
            </Link>
            <p data-tina-field={tinaField(s?.footer, 'tagline')} className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              {s?.footer?.tagline || ''}
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin size={14} className="text-[#0284c7] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{s.address}</span>
              </div>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <Phone size={14} className="text-[#0284c7] shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`tel:${s.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors duration-200">{s.phone}</a>
              </div>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <Mail size={14} className="text-[#0284c7] shrink-0 mt-0.5" aria-hidden="true" />
                <a href={`mailto:${s?.email || ''}`} className="hover:text-white transition-colors duration-200">{s?.email || ''}</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {s?.linkedin && (
                <a
                  href={s.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Evolve Therapy Services on LinkedIn"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#0284c7] hover:border-[#0284c7]/40 transition-all duration-200"
                >
                  <LinkedInIcon size={15} />
                </a>
              )}
              <a
                href={`mailto:${s.email}`}
                aria-label="Email Evolve Therapy Services"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#0284c7] hover:border-[#0284c7]/40 transition-all duration-200"
              >
                <Mail size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-5">Navigation</h4>
            <ul className="space-y-3" role="list">
              {navLinks?.map((link: any, idx: number) => (
                <li key={link.href} data-tina-field={tinaField(link, 'name')}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-5">Services</h4>
            <ul className="space-y-3" role="list">
              {serviceLinks?.map((link: any, idx: number) => (
                <li key={link.href} data-tina-field={tinaField(link, 'name')}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-150 font-medium leading-snug block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-2">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-5">Stay Informed</h4>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              Get the latest updates on LTC therapy management, regulatory changes, and Evolve news.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
              aria-label="Newsletter signup"
            >
              <div className="relative">
                <input
                  id="footer-email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  aria-label="Email address for newsletter"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0284c7]/50 focus:bg-white/8 transition-all duration-200 pr-12"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 top-2 bottom-2 w-9 bg-[#0284c7] rounded-lg flex items-center justify-center text-white hover:bg-[#0369a1] transition-colors duration-200"
                >
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p data-tina-field={tinaField(s?.footer, 'copyright')} className="text-white/25 text-xs">
            {s?.footer?.copyright?.replace('2026', `${year}`) || `© ${year} Evolve Therapy Services. All rights reserved.`}
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white/25 hover:text-white/60 text-xs transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
