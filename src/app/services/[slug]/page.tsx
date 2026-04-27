'use client';

import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  ClipboardCheck, 
  GraduationCap, 
  LineChart, 
  ShieldAlert, 
  Users2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  BarChart4,
  Target
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const iconMap = {
  Stethoscope,
  ClipboardCheck,
  GraduationCap,
  LineChart,
  ShieldAlert,
  Users2
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName as keyof typeof iconMap] || Stethoscope;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50 -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 text-primary mb-8"
            >
              <Icon size={40} strokeWidth={1.5} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-black text-secondary leading-tight mb-6"
            >
              {service.title.split(' & ').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && service.title.includes(' & ') && <span className="text-primary italic font-medium"> & </span>}
                </span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
            >
              {service.shortDesc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Sidebar with Stats/Quick Links */}
            <div className="lg:col-span-4 order-2 lg:order-1 lg:sticky lg:top-32">
              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 mb-8">
                <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                  <BarChart4 size={20} className="text-primary" /> Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-slate-600 text-[15px] font-medium leading-normal">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-2xl font-serif mb-6 relative z-10">Ready to <span className="text-primary italic">evolve</span> your facility?</h3>
                <p className="text-white/60 mb-8 leading-relaxed relative z-10">
                  Get a comprehensive data-driven analysis of your clinical and financial health.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:gap-4 transition-all relative z-10 shadow-lg shadow-primary/20"
                >
                  Request Analysis <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Detailed Expansion */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[16/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl"
              >
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
              </motion.div>

              <div className="prose prose-lg max-w-none text-slate-600">
                <h2 className="text-3xl font-serif text-secondary font-black mb-6">Service Overview</h2>
                <p className="text-xl leading-relaxed font-medium text-slate-700 mb-8">
                  {service.fullDesc}
                </p>
                <div className="text-lg leading-relaxed whitespace-pre-line mb-12">
                  {service.longContent}
                </div>

                <h3 className="text-2xl font-serif text-secondary font-black mb-8 flex items-center gap-3">
                  <Target size={24} className="text-primary" /> Core Program Features
                </h3>
                <div className="grid md:grid-cols-2 gap-4 not-prose">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-all">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-secondary font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-16 px-4">
            <h2 className="text-3xl font-serif text-secondary font-black">Explore Other <span className="text-primary italic">Solutions</span></h2>
            <Link href="/services" className="text-primary font-bold hover:underline">View All Services</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(services)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, item]) => {
                const ItemIcon = iconMap[item.iconName as keyof typeof iconMap] || Stethoscope;
                return (
                  <Link key={key} href={`/services/${key}`} className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all duration-500">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                      <ItemIcon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{item.shortDesc}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
