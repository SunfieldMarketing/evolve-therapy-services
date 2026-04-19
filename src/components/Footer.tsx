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
    <footer className="bg-white text-secondary pt-24 pb-12 overflow-hidden relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-8 group w-max">
              <span className="text-3xl font-serif font-black tracking-tight text-secondary">Evolve</span>
              <span className="text-2xl font-sans font-medium text-primary">Therapy</span>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
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
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-8">Navigation</h4>
            <ul className="space-y-4 text-secondary font-medium font-serif text-lg">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-8">Specialties</h4>
            <ul className="space-y-4 text-secondary font-medium font-serif text-lg">
              <li className="hover:text-primary transition-colors cursor-default">Management</li>
              <li className="hover:text-primary transition-colors cursor-default">Education</li>
              <li className="hover:text-primary transition-colors cursor-default">Medicaid Analysis</li>
              <li className="hover:text-primary transition-colors cursor-default">Recruiting</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-8">Newsletter</h4>
            <p className="text-sm font-medium text-slate-500 mb-6">Stay updated with the latest in LTC therapy management.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Corporate email address" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-all pr-14 text-secondary placeholder:text-slate-400 text-[15px]"
              />
              <button className="absolute right-2 top-2 bottom-2 w-10 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary text-white transition-all shadow-sm">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
            © {currentYear} Evolve Therapy Services.
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
             <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
             <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
