'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Contact" 
        italicWord="Us" 
        subtitle="Ready to evolve your clinical and financial potential? We would love to discuss how to grow with you."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-12">
               <div>
                  <h3 className="text-3xl font-serif text-secondary mb-8">Direct Contact</h3>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                       <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          <Phone size={24} />
                       </div>
                       <div>
                          <p className="font-black text-secondary uppercase tracking-widest text-xs mb-1">Call Us</p>
                          <p className="text-xl font-bold">(888) 386-5820</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          <Mail size={24} />
                       </div>
                       <div>
                          <p className="font-black text-secondary uppercase tracking-widest text-xs mb-1">Email Inquiry</p>
                          <p className="text-lg font-bold">info@evolvetherapyservices.com</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          <Clock size={24} />
                       </div>
                       <div>
                          <p className="font-black text-secondary uppercase tracking-widest text-xs mb-1">Business Hours</p>
                          <p className="text-lg font-bold text-slate-600">Mon - Fri: 8am - 6pm EST</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="p-10 rounded-[2.5rem] bg-secondary text-white shadow-2xl">
                  <h4 className="text-2xl font-serif mb-6">Expert Analysis</h4>
                  <p className="text-white/60 mb-8 leading-relaxed italic">
                    "Interested in more information or a free cost savings analysis? Our objective is to help improve our clients' financial, operations, and clinical performance."
                  </p>
               </div>
            </div>

            <div className="lg:col-span-8">
               <Contact />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
