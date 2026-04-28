'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Therapy Outcomes & PDPM', href: '/services/optimal-therapy-outcomes', desc: 'PDPM case mix optimization' },
      { name: 'Medicaid Case Mix', href: '/services/medicaid-case-mix-analysis', desc: 'Quality measure analysis' },
      { name: 'SNF Staff Education', href: '/services/snf-staff-education', desc: 'CEU & clinical training' },
      { name: 'Therapy Cost Reduction', href: '/services/therapy-cost-reduction', desc: 'Tiered cost savings' },
      { name: 'Denial Management', href: '/services/denial-management', desc: 'Audit & appeals support' },
      { name: 'In-House Transition', href: '/services/in-house-transition', desc: 'Seamless model migration' },
    ],
  },
  { name: 'Locations', href: '/locations' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener('popstate', close);
    return () => window.removeEventListener('popstate', close);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Liquid glass nav bar — v0.dev "Modern Agency" pattern ── */}
      <nav
        className={cn(
          'transition-all duration-300 ease-out',
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_24px_rgba(0,0,0,0.06)] py-3'
            : 'bg-transparent py-5'
        )}
        aria-label="Main navigation"
      >
        <div className="w-full mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 group z-50 shrink-0"
              aria-label="Evolve Therapy Services — Home"
            >
              {/* Logomark */}
              <div className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black transition-all duration-300',
                scrolled ? 'bg-[#0284c7]' : 'bg-[#0284c7]/90 backdrop-blur-sm'
              )}>
                E
              </div>
              <span className={cn(
                'text-xl font-serif font-black tracking-tight transition-colors duration-300',
                scrolled ? 'text-[#0f172a]' : 'text-white'
              )}>
                Evolve
              </span>
              <span className={cn(
                'text-xl font-sans font-light tracking-wide transition-colors duration-300',
                scrolled ? 'text-[#0284c7]' : 'text-white/80'
              )}>
                Therapy
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1" role="menubar">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                  ref={link.dropdown ? dropdownRef : undefined}
                  role="none"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200',
                      scrolled
                        ? 'text-slate-600 hover:text-[#0f172a] hover:bg-slate-100'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    )}
                    role="menuitem"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        size={13}
                        className={cn('transition-transform duration-200 opacity-60', dropdownOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Dropdown — v0.dev card-centric pattern */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-slate-200/60 p-2 overflow-hidden"
                          role="menu"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex flex-col px-4 py-3 rounded-xl hover:bg-[#0284c7]/8 group/item transition-all duration-150"
                              role="menuitem"
                            >
                              <span className="text-sm font-semibold text-[#0f172a] group-hover/item:text-[#0284c7] transition-colors duration-150 whitespace-normal">
                                {item.name}
                              </span>
                              <span className="text-xs text-slate-400 mt-1 whitespace-normal leading-relaxed">{item.desc}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* CTA button */}
              <Link
                href="/contact"
                className={cn(
                  'ml-3 flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 flex-shrink-0',
                  scrolled
                    ? 'bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-[0_2px_12px_rgba(2,132,199,0.3)]'
                    : 'bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25'
                )}
              >
                Contact Us <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={cn(
                'md:hidden w-11 h-11 flex items-center justify-center rounded-xl z-50 transition-all duration-200 border',
                isOpen
                  ? 'bg-white text-[#0f172a] border-slate-200'
                  : scrolled
                    ? 'bg-slate-100 text-[#0f172a] border-slate-200'
                    : 'bg-white/10 backdrop-blur-sm text-white border-white/20',
              )}
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer — editorial dark overlay style ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-40 bg-[#0f172a]/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#0f172a] flex flex-col overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                  aria-label="Home"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#0284c7] flex items-center justify-center text-white text-xs font-black">E</div>
                  <span className="text-white font-serif font-black text-lg">Evolve Therapy</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1" aria-label="Mobile links">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3.5 rounded-xl text-white/80 hover:text-white hover:bg-white/8 text-base font-semibold transition-all duration-150"
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Services sub-links on mobile */}
                <div className="mt-2 px-4 py-2">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-3">Our Services</div>
                  <div className="flex flex-col gap-1">
                    {links.find(l => l.dropdown)?.dropdown?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2 text-sm text-white/50 hover:text-[#0284c7] transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Bottom CTA */}
              <div className="px-6 py-6 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0284c7] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#0369a1] transition-colors"
                >
                  Contact Us <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href="tel:8883865820"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/15 text-white/70 rounded-xl font-medium text-sm transition-colors hover:border-white/30 hover:text-white"
                >
                  <Phone size={14} aria-hidden="true" /> (888) 386-5820
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
