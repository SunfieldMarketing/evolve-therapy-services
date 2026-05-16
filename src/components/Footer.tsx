'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { tinaField } from '@/lib/tina';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Therapy Outcomes & PDPM', href: '/services/optimal-therapy-outcomes' },
  { label: 'Medicaid Case Mix', href: '/services/medicaid-case-mix-analysis' },
  { label: 'SNF Staff Education', href: '/services/snf-staff-education' },
  { label: 'Therapy Cost Reduction', href: '/services/therapy-cost-reduction' },
  { label: 'Denial Management', href: '/services/denial-management' },
  { label: 'In-House Transition', href: '/services/in-house-transition' },
];

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer({ data, preFooterData }: { data?: any, preFooterData?: any }) {
  const year = new Date().getFullYear();

  const d = data || {
    phone: '(888) 386-5820',
    email: 'info@evolvetherapyservices.com',
    address: '31641 Compass Cove, Avon Lake, OH 44012',
    footer: {
      tagline: 'Customized therapy management solutions for Long Term Care providers. Retain 100% of revenue while we drive clinical and operational excellence.',
      copyright: 'Evolve Therapy Services. All rights reserved. Avon Lake, OH.',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Locations', href: '/locations' },
        { name: 'Contact', href: '/contact' },
      ],
      serviceLinks: [
        { name: 'Therapy Outcomes & PDPM', href: '/services/optimal-therapy-outcomes' },
        { name: 'Medicaid Case Mix', href: '/services/medicaid-case-mix-analysis' },
        { name: 'SNF Staff Education', href: '/services/snf-staff-education' },
        { name: 'Therapy Cost Reduction', href: '/services/therapy-cost-reduction' },
        { name: 'Denial Management', href: '/services/denial-management' },
        { name: 'In-House Transition', href: '/services/in-house-transition' },
      ]
    }
  };

  const p = preFooterData || {
    title: 'Transform your facility\'s therapy operations',
    subtitle: 'with zero legacy strings attached.',
    primaryCta: 'Request Free Analysis'
  };

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden" role="contentinfo">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#0284c7]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* ── Expanded Pre-footer CTA banner ── */}
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
              <span data-tina-field={tinaField(p, 'title')}>{p.title}</span> <br />
              <span className="text-[#38bdf8] italic font-medium" data-tina-field={tinaField(p, 'subtitle')}>{p.subtitle}</span>
            </h3>
            <p className="text-xl md:text-2xl text-white/65 mb-14 font-light leading-relaxed">
              Our unique business model allows long-term care operators to retain <span className="text-white font-bold">100% of therapy revenue</span>. We bridge the gap between clinical excellence and financial sustainability, empowering your clinicians while protecting your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-white hover:text-[#0f172a] text-white px-8 py-5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(2,132,199,0.4)] pointer-events-auto"
              >
                <span data-tina-field={tinaField(p, 'primaryCta')}>{p.primaryCta}</span> <ArrowRight size={16} aria-hidden="true" className="ml-2" />
              </a>
              <a
                href={`tel:${d.phone?.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/40 px-8 py-5 rounded-full font-bold text-xs uppercase transition-all duration-300 pointer-events-auto"
              >
                <Phone size={15} aria-hidden="true" /> <span data-tina-field={tinaField(d, 'phone')}>{d.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-14 md:mb-16">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center gap-2 mb-6 w-fit" aria-label="Evolve Therapy Services Home">
              <img 
                src={d.footer?.logo || "https://res.cloudinary.com/dai2pg27n/image/upload/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png"} 
                alt="Evolve Therapy Services"
                className="h-14 brightness-0 invert" 
                data-tina-field={d.footer ? tinaField(d.footer, 'logo') : undefined}
              />
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs" data-tina-field={d.footer ? tinaField(d.footer, 'tagline') : undefined}>
              {d.footer?.tagline}
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-8">
              {[
                { Icon: MapPin, text: d.address, href: undefined, field: 'address' },
                { Icon: Phone, text: d.phone, href: `tel:${d.phone?.replace(/\D/g, '')}`, field: 'phone' },
                { Icon: Mail, text: d.email, href: `mailto:${d.email}`, field: 'email' },
              ].map(({ Icon, text, href, field }) => (
                <div key={text} className="flex items-start gap-3 text-white/40 text-sm">
                  <Icon size={14} className="text-[#0284c7] shrink-0 mt-0.5" aria-hidden="true" />
                  {href ? (
                    <a href={href} className="hover:text-white transition-colors duration-200" data-tina-field={tinaField(d, field as any)}>{text}</a>
                  ) : (
                    <span data-tina-field={tinaField(d, field as any)}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={d.linkedin || "https://www.linkedin.com/company/evolvetherapyservices"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Evolve Therapy Services on LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#0284c7] hover:border-[#0284c7]/40 transition-all duration-200"
              >
                <LinkedInIcon size={15} />
              </a>
              <a
                href={`mailto:${d.email}`}
                aria-label="Email Evolve Therapy Services"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#0284c7] hover:border-[#0284c7]/40 transition-all duration-200"
              >
                <Mail size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-5">Navigation</h4>
            <ul className="space-y-4" role="list">
              {(d.footer?.links || []).map((link: any, i: number) => (
                <li key={i} data-tina-field={tinaField(link, 'name')}>
                    <Link
                      href={link.href}
                      className="relative z-[101] text-sm text-white/50 hover:text-white transition-colors duration-150 font-medium pointer-events-auto"
                    >
                      {link.name}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-5">Services</h4>
            <ul className="space-y-4" role="list">
              {(d.footer?.serviceLinks || []).map((link: any, i: number) => (
                <li key={i} data-tina-field={tinaField(link, 'name')}>
                    <Link
                      href={link.href}
                      className="relative z-[101] text-sm text-white/50 hover:text-white transition-colors duration-150 font-medium leading-snug block pointer-events-auto"
                    >
                      {link.name}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="lg:col-span-3 md:col-span-2">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-5">Stay Informed</h4>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              Get the latest updates on LTC therapy management, regulatory changes, and Evolve news.
            </p>
            <form
              action="https://formsubmit.co/info@evolvetherapyservices.com" 
              method="POST"
              className="space-y-3"
              aria-label="Newsletter signup"
            >
              <input type="hidden" name="_subject" value="New Newsletter Signup!" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="relative">
                <input
                  id="footer-email"
                  type="email"
                  name="Newsletter Email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  aria-label="Email address for newsletter"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0284c7]/50 focus:bg-white/8 transition-all duration-200 pr-12 pointer-events-auto relative z-[101]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 top-2 bottom-2 w-9 bg-[#0284c7] rounded-lg flex items-center justify-center text-white hover:bg-[#0369a1] transition-colors duration-200 pointer-events-auto relative z-[101]"
                >
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </div>
              <p className="text-[11px] text-white/20 leading-relaxed">
                No spam. Unsubscribe anytime. By subscribing you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm font-medium" data-tina-field={d.footer ? tinaField(d.footer, 'copyright') : undefined}>
            &copy; {new Date().getFullYear()} {d.footer?.copyright || 'Evolve Therapy Services'}
          </div>
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

