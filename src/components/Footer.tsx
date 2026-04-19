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
    <footer className="bg-secondary text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-full bg-primary/5 -skew-x-12 translate-x-1/2 z-0 blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-8 group w-max">
              <span className="text-3xl font-black font-heading tracking-tighter group-hover:text-white transition-colors text-white">EVOLVE</span>
              <span className="text-3xl font-sans font-medium opacity-80 text-primary">Therapy</span>
            </Link>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md font-medium">
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
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-primary hover:bg-primary transition-all duration-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/30 mb-8 font-sans">Navigation</h4>
            <ul className="space-y-4 text-white/60 font-bold font-heading text-lg">
              <li><Link href="/" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Services</Link></li>
              <li><Link href="/locations" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Locations</Link></li>
              <li><Link href="/contact" className="hover:text-primary hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/30 mb-8 font-sans">Specialties</h4>
            <ul className="space-y-4 text-white/60 font-bold font-heading text-lg">
              <li className="hover:text-primary hover:translate-x-1 inline-block transition-all cursor-default">Management</li>
              <li className="hover:text-primary hover:translate-x-1 inline-block transition-all cursor-default">Education</li>
              <li className="hover:text-primary hover:translate-x-1 inline-block transition-all cursor-default">Medicaid Analysis</li>
              <li className="hover:text-primary hover:translate-x-1 inline-block transition-all cursor-default">Recruiting</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/30 mb-8 font-sans">Newsletter</h4>
            <p className="text-sm font-medium text-white/50 mb-6">Stay updated with the latest in LTC therapy management.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Corporate email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 font-medium focus:outline-none focus:border-primary transition-all pr-14 text-white placeholder:text-white/30 focus:bg-white/10"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 bg-primary rounded-xl flex items-center justify-center hover:bg-white hover:text-secondary transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-xticks font-bold uppercase tracking-widest text-[10px]">
            © {currentYear} Evolve Therapy Services.
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-white/30">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
