'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
        scrolled ? 'py-4' : 'py-8'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "relative flex items-center justify-between transition-all duration-700 rounded-full px-8",
          scrolled 
            ? "dark-glass text-white py-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" 
            : "bg-transparent py-2 text-secondary"
        )}>
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="relative">
              <span className={cn(
                "text-2xl font-black tracking-tighter transition-colors font-heading",
                scrolled ? "text-white" : "text-secondary"
              )}>
                EVOLVE
              </span>
            </div>
            <span className={cn(
              "text-2xl font-medium font-sans opacity-80",
              scrolled ? "text-primary-foreground" : "text-primary"
            )}>
              Therapy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5",
                  scrolled ? "text-white/80 hover:text-white" : "text-secondary/70 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105",
                scrolled 
                  ? "bg-white text-secondary hover:bg-white/90 shadow-xl" 
                  : "bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20"
              )}
            >
              Contact <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 transition-colors",
              scrolled ? "bg-white/10 text-white" : "bg-white text-secondary",
              isOpen && "bg-primary text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-secondary/95 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] p-8 pt-40 flex flex-col justify-between",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex flex-col gap-8">
          {links.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-5xl font-heading font-bold text-white/50 hover:text-white hover:translate-x-4 transition-all duration-500",
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className={cn(
          "mb-12 transition-all duration-700 delay-500",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Direct Line</div>
          <Link
            href="tel:8883865820"
            className="flex items-center gap-4 text-3xl font-bold text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={28} className="text-primary" />
            (888) 386-5820
          </Link>
        </div>
      </div>
    </nav>
  );
}
