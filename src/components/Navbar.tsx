'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { tinaField } from '@/lib/tina';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Therapy Outcomes & PDPM', href: '/services/optimal-therapy-outcomes', desc: 'PDPM case mix optimization' },
      { name: 'Medicaid Case Mix', href: '/services/medicaid-case-mix-analysis', desc: 'Quality measure analysis' },
      { name: 'Reimbursement Optimization', href: '/services/reimbursement-optimization', desc: 'MPPR & financial success' },
      { name: 'Therapy Cost Reduction', href: '/services/therapy-cost-reduction', desc: 'Tiered cost savings' },
      { name: 'In-House Transition', href: '/services/in-house-transition', desc: 'Seamless model migration' },
      { name: 'In-House Resource Hub', href: '/services/in-house-resource-hub', desc: 'Support for existing programs' },
    ],
  },
  { name: 'Locations', href: '/locations' },
];

export default function Navbar({ data }: { data?: any }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const d = data || {
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { 
        name: 'Services', 
        href: '/services',
        dropdown: [
          { name: 'Therapy Outcomes & PDPM', href: '/services/optimal-therapy-outcomes', desc: 'PDPM case mix optimization' },
          { name: 'Medicaid Case Mix', href: '/services/medicaid-case-mix-analysis', desc: 'Quality measure analysis' },
          { name: 'Reimbursement Optimization', href: '/services/reimbursement-optimization', desc: 'MPPR & financial success' },
          { name: 'Therapy Cost Reduction', href: '/services/therapy-cost-reduction', desc: 'Tiered cost savings' },
          { name: 'In-House Transition', href: '/services/in-house-transition', desc: 'Seamless model migration' },
          { name: 'In-House Resource Hub', href: '/services/in-house-resource-hub', desc: 'Support for existing programs' },
        ],
      },
      { name: 'Locations', href: '/locations' },
    ],
    ctaText: 'Contact Us'
  };

  const navLinks = d.links || [];

  // Scroll to top on logo click when already on homepage
  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    return () => { 
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      <nav
        className={cn(
          'transition-all duration-300 ease-out',
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_24px_rgba(0,0,0,0.06)] py-2 sm:py-3'
            : 'bg-transparent py-3 sm:py-5'
        )}
        aria-label="Main navigation"
      >
        <div className="w-full mx-auto px-4 sm:px-8 md:px-20 lg:px-32">
          <div className="flex items-center justify-between">
            {/* Logo — subtle on mobile, full on desktop */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 group z-[100] shrink-0"
              aria-label="Evolve Therapy Services - Home"
            >
              <img 
                src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png" 
                alt="Evolve Therapy Services"
                className={cn(
                  "w-auto max-w-[90px] sm:max-w-none transition-all duration-300 group-hover:opacity-70",
                  scrolled ? "h-5 sm:h-8 brightness-0" : "h-5 sm:h-8 brightness-0 invert" 
                )}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" role="menubar">
              {navLinks.map((link: any, i: number) => {
                const hasDropdown = link.dropdown && link.dropdown.length > 0;
                
                return (
                  <div
                    key={i}
                    className="relative flex items-center"
                    role="none"
                    onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
                    onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
                  >
                    {hasDropdown ? (
                      <div className="relative" ref={link.name === 'Services' ? dropdownRef : null}>
                        <button
                          className={cn(
                            'flex items-center gap-1 px-4 py-2 h-10 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 leading-none outline-none focus:bg-slate-100',
                            scrolled
                              ? 'text-slate-600 hover:text-[#0f172a] hover:bg-slate-100'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          )}
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          data-tina-field={tinaField(link, 'name')}
                        >
                          {link.name}
                          <ChevronDown className={cn("transition-transform duration-200", dropdownOpen ? "rotate-180" : "")} size={14} />
                        </button>
                        
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden py-3 z-[10000]"
                            >
                              {link.dropdown.map((sub: any, j: number) => (
                                <Link
                                  key={j}
                                  href={sub.href}
                                  className="flex flex-col px-5 py-3 hover:bg-slate-50 group/sub transition-colors"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="text-sm font-bold text-slate-800 group-hover/sub:text-[#0284c7] transition-colors flex items-center justify-between">
                                    {sub.name}
                                    <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-all" />
                                  </span>
                                  <span className="text-[11px] text-slate-400 font-medium leading-tight mt-1">{sub.desc}</span>
                                </Link>
                              ))}
                              <div className="mt-2 pt-2 border-t border-slate-100 px-5">
                                <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-[#0284c7] hover:text-[#0369a1]" onClick={() => setDropdownOpen(false)}>
                                  View All Services →
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center gap-1 px-4 py-2 h-10 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 leading-none',
                          scrolled
                            ? 'text-slate-600 hover:text-[#0f172a] hover:bg-slate-100'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        )}
                        role="menuitem"
                        data-tina-field={tinaField(link, 'name')}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* CTA button */}
              <Link
                href="/contact"
                className={cn(
                  'ml-3 flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 flex-shrink-0',
                  scrolled
                    ? 'bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-[0_2px_12px_rgba(2,132,199,0.3)]'
                    : 'bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25'
                )}
                data-tina-field={tinaField(d, 'ctaText')}
              >
                {d.ctaText} <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className={cn(
                'lg:hidden w-11 h-11 flex items-center justify-center rounded-xl z-[100] transition-all duration-200 border relative',
                isOpen
                  ? 'bg-[#0f172a] text-white border-white/20'
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-[#0f172a]/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#0f172a] flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 min-h-[80px]" />

              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((link: any, i: number) => {
                  const hasDropdown = link.dropdown && link.dropdown.length > 0;
                  
                  return (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center justify-between">
                        {hasDropdown ? (
                          <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="px-4 py-3.5 flex-1 flex items-center justify-between rounded-xl text-white/80 hover:text-white hover:bg-white/8 text-base font-semibold transition-all duration-150"
                          >
                            {link.name}
                            <ChevronDown className={cn("transition-transform", mobileDropdownOpen ? "rotate-180" : "")} size={18} />
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3.5 flex-1 rounded-xl text-white/80 hover:text-white hover:bg-white/8 text-base font-semibold transition-all duration-150"
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                      
                      {hasDropdown && mobileDropdownOpen && (
                        <div className="ml-4 flex flex-col border-l border-white/10 pl-2 mt-1">
                          {link.dropdown.map((sub: any, j: number) => (
                            <Link
                              key={j}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="px-4 py-3 text-sm text-white/50 hover:text-white transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 text-sm text-[#0284c7] font-bold"
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="px-6 py-6 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0284c7] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#0369a1] transition-colors"
                >
                  {d.ctaText} <ArrowUpRight size={14} />
                </Link>
                <a
                  href="tel:8883865820"
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/15 text-white/70 rounded-xl font-medium text-sm"
                >
                  <Phone size={14} /> (888) 386-5820
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

