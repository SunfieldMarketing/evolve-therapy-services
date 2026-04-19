'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ServiceArea from '@/components/ServiceArea';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Locations" 
        subtitle="Serving facilities across Ohio and the surrounding regions from our headquarters in Avon Lake."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
             <div className="lg:col-span-1">
                <div className="bg-secondary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-white/5">
                     <MapPin size={180} />
                  </div>
                  <h3 className="text-3xl font-serif mb-10">Headquarters</h3>
                  <div className="space-y-10 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <p className="text-lg">31641 Compass Cove<br />Avon Lake, OH 44012</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <Phone size={20} />
                      </div>
                      <p className="text-lg">(888) 386-5820</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <Mail size={20} />
                      </div>
                      <p className="text-lg break-all">info@evolve therapy services.com</p>
                    </div>
                  </div>
                  
                  <div className="mt-16">
                     <a href="/contact" className="flex items-center justify-center gap-2 bg-white text-secondary py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">
                       <MessageSquare size={16} /> Get Directions
                     </a>
                  </div>
                </div>
             </div>
             
             <div className="lg:col-span-2 space-y-12">
                <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100">
                   <h3 className="text-3xl font-serif text-secondary mb-6">Regional Strategy</h3>
                   <p className="text-lg text-slate-500 leading-relaxed max-w-2xl italic">
                     Evolve provides holistic therapy, operational oversight, real-time data analysis, and denial management for the LTC industry, enabling operators to look beyond the day-to-day and focus on long-term growth. Our regional directors are strategically placed to ensure 24/7 support for your facility.
                   </p>
                </div>
                
                <div className="p-12 rounded-[3rem] bg-primary/5 border border-primary/10">
                   <h4 className="text-xl font-black text-primary uppercase tracking-[0.2em] mb-4">Site Coordination</h4>
                   <p className="text-slate-600 leading-relaxed text-lg">
                     Whether you are already in-house or using a third-party company, Evolve acts as your local clinical partner. We maintain a presence that feels like we are part of your team, because we are.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Map Section */}
      <ServiceArea />

      <Footer />
    </main>
  );
}
