'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowUpRight, ChevronDown, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Therapy Outcomes & PDPM', href: '/services/optimal-therapy-outcomes' },
      { name: 'Medicaid Case Mix', href: '/services/medicaid-case-mix-analysis' },
      { name: 'SNF Staff Education', href: '/services/snf-staff-education' },
      { name: 'Therapy Cost Reduction', href: '/services/therapy-cost-reduction' },
      { name: 'Denial Management', href: '/services/denial-management' },
      { name: 'In-House Transition', href: '/services/in-house-transition' }
    ]
  },
  { name: 'Locations', href: '/locations' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Bar - Hidden on scroll for sleekness */}
      <div className={cn(
        "text-white/80 py-2 border-b border-white/5 transition-all duration-500 overflow-hidden",
        scrolled ? "h-0 opacity-0 bg-secondary" : "h-[40px] opacity-100 bg-transparent"
      )}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-[10px] uppercase tracking-widest font-black">
          <div className="flex gap-6">
            <a href="tel:8883865820" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={12} className="text-primary" /> (888) 386-5820
            </a>
            <a href="mailto:info@evolvetherapyservices.com" className="flex items-center gap-2 hover:text-primary transition-colors lowercase tracking-normal font-bold">
              <Mail size={12} className="text-primary" /> info@evolvetherapyservices.com
            </a>
          </div>
          <div className="hidden sm:block">
            Avon Lake, OH · Serving LTC Communities
          </div>
        </div>
      </div>

      <nav
        className={cn(
          'transition-all duration-500',
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100' : 'bg-transparent py-6'
        )}
      >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <span className={cn(
              "text-2xl md:text-3xl font-serif font-black tracking-tight transition-colors",
              scrolled ? "text-secondary" : "text-white"
            )}>
              Evolve
            </span>
            <span className={cn(
              "text-xl md:text-2xl font-sans font-medium transition-colors",
              scrolled ? "text-primary" : "text-primary"
            )}>
              Therapy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <div 
                key={link.name} 
                className="relative group/nav"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-[13px] uppercase tracking-widest font-black transition-all flex items-center gap-1 py-2",
                    scrolled ? "text-slate-500 hover:text-primary" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className={cn("transition-transform", dropdownOpen && "rotate-180")} />}
                </Link>

                {link.dropdown && (
                  <div className={cn(
                    "absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 transition-all duration-300 origin-top overflow-hidden",
                    dropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}>
                    <div className="flex flex-col gap-1">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-3 text-xs font-bold text-slate-500 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all hover:bg-white hover:text-secondary hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              Contact Us <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden w-12 h-12 flex items-center justify-center rounded-xl z-50 transition-colors border",
              scrolled ? "bg-white text-secondary border-slate-200" : "bg-white/10 text-white border-white/20 backdrop-blur-md",
              isOpen && "bg-slate-100 border-slate-200 text-secondary"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out p-8 pt-32 flex flex-col",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-serif font-bold text-slate-800 hover:text-primary transition-colors border-b border-slate-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-3xl font-serif font-bold text-primary transition-colors pb-4 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        
        <div className="mt-auto mb-8">
          <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Urgent Care Line</div>
          <Link
            href="tel:8883865820"
            className="flex items-center gap-4 text-2xl font-bold text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={24} className="text-primary" />
            (888) 386-5820
          </Link>
        </div>
        </div>
      </nav>
    </header>
  );
}
