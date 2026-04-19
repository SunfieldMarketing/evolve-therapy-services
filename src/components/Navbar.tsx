'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Locations', href: '#locations' },
  { name: 'Contact', href: '#contact' },
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-gray-100'
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={cn(
              "text-2xl font-bold tracking-tight",
              scrolled ? "text-primary" : "text-primary"
            )}>
              EVOLVE
            </span>
            <span className={cn(
              "text-2xl font-light",
              scrolled ? "text-secondary" : "text-secondary"
            )}>
              Therapy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:8883865820"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Phone size={16} />
              (888) 386-5820
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-slate-700 hover:text-primary py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:8883865820"
              className="flex items-center justify-center gap-2 bg-primary text-white p-4 rounded-xl text-lg font-bold mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} />
              Call (888) 386-5820
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
