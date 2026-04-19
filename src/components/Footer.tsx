'use client';

import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <span className="text-3xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">EVOLVE</span>
              <span className="text-3xl font-serif text-primary italic">Therapy</span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-md">
              Customized therapy management solutions designed specifically for Long Term Care providers. We help you evolve your clinical and financial operations.
            </p>
            <div className="flex gap-4">
              {[
                { icon: LinkedInIcon, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:info@evolvetherapyservices.com" },
                { icon: Phone, href: "tel:8883865820" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary hover:bg-white/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-8">Navigation</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#locations" className="hover:text-white transition-colors">Locations</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-8">Specialties</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li className="hover:text-white transition-colors cursor-default">Management</li>
              <li className="hover:text-white transition-colors cursor-default">Education</li>
              <li className="hover:text-white transition-colors cursor-default">Medicaid Analysis</li>
              <li className="hover:text-white transition-colors cursor-default">Recruiting</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-primary mb-8">Newsletter</h4>
            <p className="text-sm text-white/50 mb-6">Stay updated with the latest in LTC therapy management.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all pr-12"
              />
              <button className="absolute right-2 top-1.5 w-9 h-9 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © {currentYear} Evolve Therapy Services.
          </div>
          <div className="flex gap-10 text-xs font-bold uppercase tracking-widest text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
