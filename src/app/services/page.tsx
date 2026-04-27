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
import Link from 'next/link';

const detailedServices = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical analysis for PDPM case mix efficiency-opportunity and comprehensive business intelligence customized to your market market dynamics.',
    icon: Stethoscope,
    tags: ['PDPM Efficiency', 'Clinical Strategy'],
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Medicaid Case Mix Analysis',
    desc: 'Deep education and analysis of your site’s Quality Measures and case mix efficiency ensuring peak performance in reimbursement.',
    icon: ClipboardCheck,
    tags: ['Quality Measures', 'Compliance'],
    href: '/services/medicaid-case-mix-analysis'
  },
  {
    title: 'SNF Staff Education',
    desc: 'Professional training for your SNF staff, marketing team, and administration to foster seamless collaboration and operational excellence.',
    icon: GraduationCap,
    tags: ['Workforce Training', 'LTC Education'],
    href: '/services/snf-staff-education'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning processes for long-term operational success and stability.',
    icon: LineChart,
    tags: ['Operational Success', 'Fiscally Responsible'],
    href: '/services/therapy-cost-reduction'
  },
  {
    title: 'Denial Management',
    desc: 'Expert resource in recruitment, denial management, unlimited therapy education, and real-time clinical data analysis.',
    icon: ShieldAlert,
    tags: ['Risk Mitigation', 'Data Analysis'],
    href: '/services/denial-management'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model while maximizing your goals and retaining all revenue.',
    icon: Users2,
    tags: ['Direct Hire', 'Culture Building'],
    href: '/services/in-house-transition'
  }
];export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Services" 
        subtitle="Bridging the gap for operators who want to truly EVOLVE their therapy programs to the next level."
        videoUrl="https://player.vimeo.com/external/432014945.sd.mp4?s=6c6695333f276cd83428d0859585e488d0859585e&profile_id=165&oauth2_token_id=57447761"
      />

      <section className="py-24 md:py-48 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-12"
            >
               Tailored Expertise
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif text-secondary font-black tracking-tighter mb-10 leading-[0.95]">
              Expert Solutions for <br />
              <span className="text-primary italic font-medium">LTC Operators</span>
            </h2>
            <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              At Evolve, we provide the full spectrum of resources required to deliver the highest possible level of patient care while maximizing operational efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {detailedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row gap-10 p-12 lg:p-16 rounded-[4rem] bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-[0_80px_100px_-20px_rgba(0,0,0,0.1)] group-hover:border-primary/20 transition-all duration-700 h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-secondary shrink-0 shadow-2xl border border-slate-50 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-serif font-black text-secondary mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-10 text-lg font-light">{service.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white text-secondary text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-slate-200 group-hover:border-primary/20 group-hover:text-primary transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Evolution Section */}
      <section className="py-32 md:py-48 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2 blur-[100px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-[10px] uppercase tracking-[0.4em] mb-12"
              >
                The Evolution
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-serif font-black mb-12 leading-[0.95] tracking-tighter">
                Our Three-Tiered <br />
                <span className="text-primary italic font-medium uppercase text-6xl">Pricing Model</span>
              </h2>
              <p className="text-2xl text-white/40 mb-16 leading-relaxed font-light">
                Our unique approach customizes to your size of business and Evolves as you do. Our models allow price reduction as your business grows internally.
              </p>
              
              <div className="space-y-8">
                {[
                  { id: '1', label: 'Starter Tier for New Programs', color: 'bg-white/10', text: 'text-white/60' },
                  { id: '2', label: 'Intermediate Growth Scaling', color: 'bg-primary shadow-[0_0_50px_rgba(14,165,233,0.3)]', text: 'text-white' },
                  { id: '3', label: 'Enterprise Peak Operations', color: 'bg-white/5', text: 'text-white/40' }
                ].map((tier) => (
                  <motion.div 
                    key={tier.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-6 p-6 rounded-[2.5rem] border border-white/5 transition-all hover:bg-white/5 group`}
                  >
                    <div className={`w-14 h-14 ${tier.color} rounded-2xl flex items-center justify-center font-black text-xl`}>
                      {tier.id}
                    </div>
                    <span className={`text-xl font-bold font-serif ${tier.text}`}>{tier.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="bg-white/95 backdrop-blur-3xl border border-white p-16 lg:p-20 rounded-[4rem] shadow-[0_100px_150px_-50px_rgba(0,0,0,0.5)] text-center relative z-10"
               >
                  <div className="w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl mx-auto border-4 border-white">
                    <Zap size={40} />
                  </div>
                  <h4 className="text-4xl font-serif font-black text-secondary mb-8 leading-tight">
                    Already In-House?
                  </h4>
                  <p className="text-slate-500 mb-12 leading-relaxed text-xl font-light italic">
                    "Let Evolve be your needed resource in recruitment, denial management, and data analysis. We can be your expert so you don’t have to be."
                  </p>
                  <a href="/contact" className="inline-flex w-full bg-secondary hover:bg-primary py-6 rounded-[2rem] justify-center font-black uppercase tracking-[0.2em] text-[10px] text-white transition-all shadow-2xl shadow-black/20">
                    Get an Expert Analysis
                  </a>
               </motion.div>
               {/* Decorative glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Compare */}
      <section className="py-32 md:py-56 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-slate-50 border border-slate-100 rounded-[5rem] overflow-hidden relative">
               {/* Decorative line */}
               <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200 hidden lg:block" />
               
               <div className="p-16 lg:p-32">
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-secondary text-center mb-24 font-black tracking-tighter">Why Direct-Hire <br /> <span className="text-primary italic font-medium">In-House?</span></h3>
                  <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
                     <div className="space-y-16">
                        <div className="flex items-start gap-8 group">
                          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} />
                          </div>
                          <div>
                            <div className="font-black text-secondary tracking-[0.3em] uppercase text-[10px] mb-4">Revenue Retention</div>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">Retain 100% of all therapy revenue instead of paying shares to third-parties.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-8 group">
                          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} />
                          </div>
                          <div>
                            <div className="font-black text-secondary tracking-[0.3em] uppercase text-[10px] mb-4">Culture Continuity</div>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">Your staff grows internally towards regional positions and remains as YOUR team.</p>
                          </div>
                        </div>
                     </div>
                     <div className="space-y-16">
                        <div className="flex items-start gap-8 group">
                          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} />
                          </div>
                          <div>
                            <div className="font-black text-secondary tracking-[0.3em] uppercase text-[10px] mb-4">Operational Growth</div>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">Employee engagement facilitates exceptional outcomes for residents.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-8 group">
                          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-100 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} />
                          </div>
                          <div>
                            <div className="font-black text-secondary tracking-[0.3em] uppercase text-[10px] mb-4">Clinical Education</div>
                            <p className="text-xl text-slate-500 font-light leading-relaxed">Customized CEU/education for therapists and LTC staff as a premium service.</p>
                          </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
