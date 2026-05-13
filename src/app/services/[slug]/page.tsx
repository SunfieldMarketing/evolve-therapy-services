'use client';

import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
import { useTina } from 'tinacms/dist/react';

const iconMap = {
  Stethoscope,
  ClipboardCheck,
  GraduationCap,
  LineChart,
  ShieldAlert,
  Users2,
  Target
};

export default function ServiceDetailPage(props: { data: any, query: string, variables: any }) {
  const params = useParams();
  const slug = params.slug as string;

  // In a real Next.js App Router setup with Tina, we might fetch this in a Server Component
  // and pass it to this Client Component. For now, we'll use useTina with the provided props
  // or fallback to a query if we can.
  
  const { data } = useTina({
    query: props.query || `query($relativePath: String!) {
      service(relativePath: $relativePath) {
        title
        shortDesc
        fullDesc
        longContent
        benefits
        features
        image
        iconName
        videoUrl
      }
    }`,
    variables: props.variables || { relativePath: `${slug}.json` },
    data: props.data || {},
  });

  // Try to find local fallback if Tina data is missing
  let service = data?.service;
  
  if (!service) {
    try {
      // In a real build, these would be pre-loaded or fetched
      // For this implementation, we'll try to use the props.data if available
      service = props.data?.service;
    } catch (e) {
      console.error("Local fallback failed", e);
    }
  }

  if (!service) {
    // If we're in the editor, we might not have data yet for a new slug
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-black text-[#0f172a] mb-4">Service Not Found</h1>
          <p className="text-slate-500 mb-8">The service you are looking for does not exist or hasn't been created yet.</p>
          <Link href="/services" className="text-[#0284c7] font-black uppercase text-xs tracking-widest">Back to All Services</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.iconName as keyof typeof iconMap] || Stethoscope;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title={service.title.includes(' & ') ? service.title.split(' & ')[0] : service.title}
        italicWord={service.title.includes(' & ') ? service.title.split(' & ')[1] : ''}
        subtitle={service.shortDesc}
        useVideo={false}
        bgImage="none"
        badgeText="Service Detail"
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
                <h3 className="text-2xl font-serif font-black text-[#0f172a] mb-10 flex items-center gap-3">
                  <BarChart4 size={24} className="text-[#0284c7]" /> Key Benefits
                </h3>
                <ul className="space-y-6">
                  {service.benefits?.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0284c7] transition-colors">
                        <CheckCircle2 size={16} className="text-[#0284c7] group-hover:text-white" />
                      </div>
                      <span className="text-slate-600 text-sm md:text-base font-medium leading-relaxed flex-1">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284c7]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                <h3 className="text-3xl font-serif font-black mb-8 relative z-10 leading-[1.1]">Ready to <span className="text-[#0284c7] italic">evolve</span> your facility?</h3>
                <p className="text-white/40 mb-10 leading-relaxed relative z-10 font-light">
                  Get a comprehensive data-driven analysis of your clinical and financial health.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#0284c7] hover:text-white transition-all relative z-10 shadow-xl shadow-black/20"
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
                  <h2 className="text-5xl font-serif text-[#0f172a] font-black mb-10 tracking-tighter">Service Overview</h2>
                  <p className="text-2xl leading-relaxed font-light text-slate-400 mb-12">
                    {service.fullDesc}
                  </p>
                  <div className="text-xl text-slate-500 leading-relaxed font-medium whitespace-pre-line mb-16 px-10 border-l-4 border-[#0284c7]/20">
                    {service.longContent}
                  </div>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-serif text-[#0f172a] font-black mb-12 flex items-center gap-4 tracking-tight">
                    <Target size={32} className="text-[#0284c7]" /> Core Program Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 not-prose">
                    {service.features?.map((feature: string, i: number) => (
                      <div key={i} className="flex items-center gap-5 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-[#0284c7]/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                        <div className="w-3 h-3 rounded-full bg-[#0284c7] shadow-lg shadow-[#0284c7]/20 shrink-0" />
                        <span className="text-[#0f172a] font-black text-sm uppercase tracking-[0.1em] leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
