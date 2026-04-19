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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'py-4'
          : 'py-8'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "relative flex items-center justify-between transition-all duration-500 rounded-[2rem] px-8",
          scrolled 
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20 py-3" 
            : "bg-transparent py-0"
        )}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl font-black text-secondary tracking-tighter group-hover:text-primary transition-colors">EVOLVE</span>
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" />
            </div>
            <span className="text-2xl font-serif text-primary italic">Therapy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-secondary/70 hover:text-primary transition-all uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-secondary text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary transition-all shadow-lg hover:shadow-primary/20"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-[-1] bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out p-8 pt-32",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="flex flex-col gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl font-serif text-secondary hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-slate-100">
            <Link
              href="tel:8883865820"
              className="flex items-center gap-4 text-2xl font-bold text-primary"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={24} />
              (888) 386-5820
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
