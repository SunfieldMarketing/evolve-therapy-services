'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  BarChart3, 
  GraduationCap, 
  LineChart, 
  Users2, 
  ClipboardCheck,
  ShieldAlert,
  Zap,
  CheckCircle,
  FileText
} from 'lucide-react';
import Image from 'next/image';

const detailedServices = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical analysis for PDPM case mix efficiency-opportunity and comprehensive business intelligence customized to your market market dynamics.',
    icon: Stethoscope,
    tags: ['PDPM Efficiency', 'Clinical Strategy']
  },
  {
    title: 'Medicaid Case Mix Analysis',
    desc: 'Deep education and analysis of your site’s Quality Measures and case mix efficiency ensuring peak performance in reimbursement.',
    icon: ClipboardCheck,
    tags: ['Quality Measures', 'Compliance']
  },
  {
    title: 'SNF Staff Education',
    desc: 'Professional training for your SNF staff, marketing team, and administration to foster seamless collaboration and operational excellence.',
    icon: GraduationCap,
    tags: ['Workforce Training', 'LTC Education']
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning processes for long-term operational success and stability.',
    icon: LineChart,
    tags: ['Operational Success', 'Fiscally Responsible']
  },
  {
    title: 'Denial Management',
    desc: 'Expert resource in recruitment, denial management, unlimited therapy education, and real-time clinical data analysis.',
    icon: ShieldAlert,
    tags: ['Risk Mitigation', 'Data Analysis']
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model while maximizing your goals and retaining all revenue.',
    icon: Users2,
    tags: ['Direct Hire', 'Culture Building']
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Services" 
        subtitle="Bridging the gap for operators who want to truly EVOLVE their therapy programs to the next level."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-secondary mb-6">Expert Solutions for LTC Operators</h2>
            <p className="text-lg text-slate-500">
              At Evolve we provide all of the services that you require to provide your patients with the highest possible level of care and service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {detailedServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6 italic">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider rounded-lg border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Evolution Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Evolution</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
                Our Three-Tiered <span className="text-primary italic">Pricing</span> Model
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Our unique three-tiered approach to our management style customizes to your size of business and Evolves as you do. Our pricing models allow price reduction as your business grows internally.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold">1</div>
                  <span className="text-lg font-medium">Starter Tier for New/Small Programs</span>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <div className="w-10 h-10 bg-primary/20 text-primary border border-primary/30 rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="text-lg font-black italic">Intermediate Growth Scaling</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="text-lg font-medium">Enterprise Efficient Peak Operations</span>
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] shadow-2xl relative z-10">
                  <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <Zap className="text-primary" /> Already In-House?
                  </h4>
                  <p className="text-white/60 mb-10 leading-relaxed text-lg italic">
                    "Let Evolve be your needed resource in recruitment, denial management, unlimited therapy education, and data analysis. We can be your expert so you don’t have to be."
                  </p>
                  <a href="/contact" className="inline-flex w-full bg-primary hover:bg-primary/80 py-5 rounded-2xl justify-center font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
                    Get an Expert Analysis
                  </a>
               </div>
               <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Compare */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-[3rem] overflow-hidden">
            <div className="p-12 md:p-20">
               <h3 className="text-3xl font-serif text-secondary text-center mb-16">Why Direct-Hire In-House?</h3>
               <div className="grid md:grid-cols-2 gap-16">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-black text-secondary uppercase tracking-widest text-xs mb-2">Revenue</div>
                        <p className="text-slate-600">Retain 100% of all therapy revenue instead of paying shares to third-parties.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-black text-secondary uppercase tracking-widest text-xs mb-2">Culture</div>
                        <p className="text-slate-600">Your staff grows internally towards regional positions and remains as YOUR team.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-black text-secondary uppercase tracking-widest text-xs mb-2">Growth</div>
                        <p className="text-slate-600">Employee engagement facilitates exceptional outcomes for residents.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-black text-secondary uppercase tracking-widest text-xs mb-2">Education</div>
                        <p className="text-slate-600">Customized CEU/education for therapists and LTC staff as a premium service.</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
