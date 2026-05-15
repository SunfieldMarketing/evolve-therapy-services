'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Stethoscope, ClipboardCheck, GraduationCap, LineChart,
  ShieldAlert, Users2, CheckCircle2, ArrowRight, BarChart4, Target, Activity, Heart, Sparkles, Award, Star
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { useTina, tinaField } from '@/lib/tina';

const iconMap: Record<string, React.ComponentType<any>> = {
  Stethoscope, ClipboardCheck, GraduationCap, LineChart, ShieldAlert, Users2, Target, Activity, Heart, Sparkles, Award, Star
};

export default function ServiceDetailClient(props: { data: any, query: string, variables: any, settingsData?: any }) {
  const { data } = useTina(props);
  const service = data.service;
  const s = props.settingsData;

  if (!service) return null;

  const Icon = iconMap[service.iconName] || Stethoscope;

  const titleParts = service.title.includes(' & ')
    ? [service.title.split(' & ')[0], service.title.split(' & ')[1]]
    : [service.title, ''];

  return (
    <main className="min-h-screen bg-white">
      <Navbar data={s?.navbar} />

      <PageHeader
        title={titleParts[0]}
        italicWord={titleParts[1] || undefined}
        subtitle={service.shortDesc}
        useVideo={false}
        bgImage="none"
        badgeText="Service Detail"
        valueBoxes={[
          { icon: CheckCircle2, label: 'Evidence-Based', sublabel: 'Clinical Program' },
          { icon: BarChart4, label: 'Data-Driven', sublabel: 'Outcomes' },
        ]}
      />

      {/* Main Content */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Sidebar */}
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
                    <li key={i} className="flex items-start gap-4 group" data-tina-field={tinaField(service, 'benefits')}>
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

            {/* Main Detail */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[16/9] rounded-[4rem] overflow-hidden mb-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100"
                data-tina-field={tinaField(service, 'image')}
              >
                {service.image && <Image src={service.image} alt={service.title} fill className="object-cover" />}
              </motion.div>

              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl font-serif text-[#0f172a] font-black mb-10 tracking-tighter">Service Overview</h2>
                  <p className="text-2xl leading-relaxed font-light text-slate-400 mb-12" data-tina-field={tinaField(service, 'fullDesc')}>{service.fullDesc}</p>
                  <div className="text-xl text-slate-500 leading-relaxed font-medium whitespace-pre-line mb-16 px-10 border-l-4 border-[#0284c7]/20" data-tina-field={tinaField(service, 'longContent')}>
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
                      <div key={i} className="flex items-center gap-5 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-[#0284c7]/20 hover:bg-white hover:shadow-xl transition-all duration-500" data-tina-field={tinaField(service, 'features')}>
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

      {/* Explore Other Solutions */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-serif font-black text-[#0f172a] tracking-tighter">Explore Other <span className="text-[#0284c7] italic">Solutions</span></h2>
            <Link href="/services" className="text-[#0284c7] font-bold text-sm uppercase tracking-widest hover:underline flex items-center gap-2">
              All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Logic for related services would normally come from a separate query or static list */}
            {/* For now we'll just show the prompt to view all services above */}
          </div>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
    </main>
  );
}

