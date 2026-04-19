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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <span className={cn(
              "text-3xl font-serif font-black tracking-tight transition-colors",
              scrolled ? "text-secondary" : "text-secondary"
            )}>
              Evolve
            </span>
            <span className={cn(
              "text-2xl font-sans font-medium transition-colors",
              scrolled ? "text-primary" : "text-primary"
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
                  "text-sm font-medium transition-colors border-b-2 border-transparent hover:border-primary",
                  scrolled ? "text-slate-600 hover:text-secondary" : "text-secondary/80 hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl bg-primary text-white text-sm font-semibold flex items-center gap-2 transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden w-12 h-12 flex items-center justify-center rounded-xl z-50 transition-colors border",
              scrolled ? "bg-white text-secondary border-slate-200" : "bg-white/50 text-secondary border-transparent",
              isOpen && "bg-slate-100 border-slate-200"
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
  );
}
