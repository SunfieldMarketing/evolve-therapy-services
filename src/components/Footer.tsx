'use client';

import Link from 'next/link';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-primary tracking-tight">EVOLVE</span>
              <span className="text-2xl font-light text-secondary">Therapy</span>
            </Link>
            <p className="text-slate-500 leading-relaxed mb-6">
              Our therapy management company specializes in giving LTC organizations the resources to evolve business growth.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@evolvetherapyservices.com" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Mail size={20} />
              </a>
              <a href="tel:8883865820" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-primary transition-all">Home</Link></li>
              <li><Link href="#about" className="text-slate-500 hover:text-primary transition-all">About Us</Link></li>
              <li><Link href="#services" className="text-slate-500 hover:text-primary transition-all">Services</Link></li>
              <li><Link href="#locations" className="text-slate-500 hover:text-primary transition-all">Locations</Link></li>
              <li><Link href="#contact" className="text-slate-500 hover:text-primary transition-all">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><span className="text-slate-500">Therapy Management</span></li>
              <li><span className="text-slate-500">Clinical Analysis</span></li>
              <li><span className="text-slate-500">Medicaid Case Mix</span></li>
              <li><span className="text-slate-500">Recruiting Expertise</span></li>
              <li><span className="text-slate-500">CEU / Education</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6 uppercase tracking-wider text-sm">Office</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <span>31641 Compass Cove<br />Avon Lake, OH 44012</span>
              </li>
              <li className="font-bold text-secondary">(888) 386-5820</li>
              <li>info@evolvetherapyservices.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {currentYear} Evolve Therapy Services. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
