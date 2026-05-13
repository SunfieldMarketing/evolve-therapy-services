'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useTina, tinaField } from 'tinacms/dist/react';
import settingsData from '../../content/global/settings.json';

export default function Navbar() {
  const { data } = useTina({
    query: `query { settings(relativePath: "settings.json") { siteName phone email navbar { links { name href } ctaText } footer { tagline copyright links { name href } } } }`,
    variables: {},
    data: { settings: settingsData },
  });

  const s = data?.settings;
  type NavLink = { name: string; href: string; dropdown?: { name: string; href: string; desc?: string }[] };
  const links = (s?.navbar?.links ?? []) as NavLink[];

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
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
              {links.map((link, idx) => (
                <div
                  key={link?.name || idx}
                  className="relative flex items-center"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                  ref={link.dropdown ? dropdownRef : undefined}
                  role="none"
                >
                  <Link
                    href={link.href}
                    data-tina-field={tinaField(s?.navbar, `links[${idx}]`)}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 h-10 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 leading-none',
                      scrolled
                        ? 'text-slate-600 hover:text-[#0f172a] hover:bg-slate-100'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    )}
                    role="menuitem"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className={cn("transition-transform duration-200", dropdownOpen && "rotate-180")} />}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-slate-200/60 p-2 overflow-hidden flex flex-col gap-1"
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
                                <span className="text-sm font-bold text-[#0f172a] group-hover/item:text-[#0284c7] transition-colors duration-150 whitespace-normal leading-tight">
                                  {item.name}
                                </span>
                                <span className="text-[11px] text-slate-500 mt-1 whitespace-normal leading-relaxed">{item.desc}</span>
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
                data-tina-field={tinaField(s?.navbar, 'ctaText')}
                className={cn(
                  'px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group/btn',
                  scrolled
                    ? 'bg-[#0f172a] text-white hover:bg-[#0284c7]'
                    : 'bg-white text-[#0f172a] hover:bg-slate-100 shadow-xl'
                )}
              >
                {s?.navbar?.ctaText || 'Contact'}
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
                {links.map((link, idx) => (
                  <div key={link?.name || idx} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3.5 flex-1 rounded-xl text-white/80 hover:text-white hover:bg-white/8 text-base font-semibold transition-all duration-150"
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button 
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="p-4 text-white/40 hover:text-white"
                        >
                          <ChevronDown size={20} className={cn("transition-transform", mobileDropdownOpen && "rotate-180")} />
                        </button>
                      )}
                    </div>

                    {link.dropdown && mobileDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="flex flex-col pl-4 gap-2 mb-4"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 flex flex-col group/mob"
                          >
                            <span className="text-sm font-semibold text-white group-hover/mob:text-[#38bdf8] transition-colors">{item.name}</span>
                            <span className="text-[11px] text-white/40 mt-0.5">{item.desc}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="px-6 py-6 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0284c7] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#0369a1] transition-colors"
                >
                  {s?.navbar?.ctaText || 'Contact'} <ArrowUpRight size={14} />
                </Link>
                <a
                  href={`tel:${s?.phone?.replace(/[^0-9]/g, '') || ''}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/15 text-white/70 rounded-xl font-medium text-sm"
                >
                  <Phone size={14} /> {s?.phone || ''}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
