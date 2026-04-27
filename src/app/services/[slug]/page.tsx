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
  BarChart4,
  Target
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

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
      
      <PageHeader 
        title={service.title.includes(' & ') ? service.title.split(' & ')[0] : service.title}
        italicWord={service.title.includes(' & ') ? service.title.split(' & ')[1] : ''}
        subtitle={service.shortDesc}
        videoKey="services"
      />

      {/* Main Content */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Sidebar with Stats/Quick Links */}
            <div className="lg:col-span-4 order-2 lg:order-1 lg:sticky lg:top-32">
              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 mb-10 shadow-xl shadow-black/[0.02]"
              >
                <h3 className="text-2xl font-serif font-black text-secondary mb-10 flex items-center gap-3">
                  <BarChart4 size={24} className="text-primary" /> Key Benefits
                </h3>
                <ul className="space-y-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                        <CheckCircle2 size={12} className="text-primary group-hover:text-white" />
                      </div>
                      <span className="text-slate-500 text-sm font-bold leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="bg-secondary rounded-[3.5rem] p-12 text-white relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                <h3 className="text-3xl font-serif font-black mb-8 relative z-10 leading-[1.1]">Ready to <span className="text-primary italic">evolve</span> your facility?</h3>
                <p className="text-white/40 mb-10 leading-relaxed relative z-10 font-light">
                  Get a comprehensive data-driven analysis of your clinical and financial health.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-white text-secondary px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all relative z-10 shadow-xl shadow-black/20"
                >
                  Request Analysis <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Detailed Expansion */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[16/9] rounded-[4rem] overflow-hidden mb-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100"
              >
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
              </motion.div>

              <div className="prose prose-lg max-w-none">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                >
                  <h2 className="text-5xl font-serif text-secondary font-black mb-10 tracking-tighter">Service Overview</h2>
                  <p className="text-2xl leading-relaxed font-light text-slate-400 mb-12">
                    {service.fullDesc}
                  </p>
                  <div className="text-xl text-slate-500 leading-relaxed font-medium whitespace-pre-line mb-16 px-10 border-l-4 border-primary/20">
                    {service.longContent}
                  </div>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-serif text-secondary font-black mb-12 flex items-center gap-4 tracking-tight">
                    <Target size={32} className="text-primary" /> Core Program Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 not-prose">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-5 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                        <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/20" />
                        <span className="text-secondary font-black text-[13px] uppercase tracking-[0.1em]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Grid */}
      <section className="py-32 md:py-48 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-20 px-4">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary font-black tracking-tighter">Explore Other <span className="text-primary italic font-medium">Solutions</span></h2>
            <Link href="/services" className="text-primary font-black uppercase text-[10px] tracking-[0.2em] border-b-2 border-primary/20 hover:border-primary transition-all">View All Services</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {Object.entries(services)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, item]) => {
                const ItemIcon = iconMap[item.iconName as keyof typeof iconMap] || Stethoscope;
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Link href={`/services/${key}`} className="group bg-white p-12 rounded-[3.5rem] border border-slate-200 hover:border-primary/20 shadow-xl shadow-black/[0.02] hover:shadow-2xl transition-all duration-700 block h-full">
                      <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-secondary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100 shadow-inner">
                        <ItemIcon size={28} />
                      </div>
                      <h3 className="text-2xl font-serif font-black text-secondary mb-6 group-hover:text-primary transition-colors duration-500 tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">{item.shortDesc}</p>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
