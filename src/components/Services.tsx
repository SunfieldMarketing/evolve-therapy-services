import { 
  BarChart3, 
  GraduationCap, 
  Stethoscope, 
  Users2, 
  ClipboardCheck, 
  LineChart,
  ArrowUpRight,
  Target,
  Microscope, HeartPulse, ShieldCheck, TrendingUp, Users, Clock, Search, Map, Zap, Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { BorderBeamAlways } from '@/components/magicui/border-beam';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { tinaField } from '@/lib/tina';

const iconMap: any = {
  BarChart3, GraduationCap, Stethoscope, Users2, ClipboardCheck, LineChart, Target, Microscope, HeartPulse, ShieldCheck, TrendingUp, Users, Clock, Search, Map, Zap, Award
};

export default function Services({ data, parentField }: { data?: any, parentField?: string }) {
  const d = data || {
    title: 'Bridging the Gap Between Clinical & Operational Success',
    theme: 'light',
    showSection: true,
    items: []
  };

  if (!d.showSection) return null;

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <BlurFade delay={0.1} className="mb-6">
               <AnimatedGradientText>Our Services</AnimatedGradientText>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0f172a] leading-[0.95] tracking-tighter" data-tina-field={parentField ? tinaField(d, 'title') : undefined}>
                {d.title}
              </h2>
            </BlurFade>
          </div>
          <BlurFade delay={0.3} className="text-lg text-slate-500 max-w-md leading-relaxed pb-2 font-light" data-tina-field={parentField ? tinaField(d, 'description') : undefined}>
            {d.description}
          </BlurFade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-8">
          {(d.items || []).map((service: any, i: number) => (
            <BlurFade
              key={i}
              delay={0.1 + i * 0.1}
              className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-[#0284c7]/20 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 group relative flex flex-col justify-between overflow-hidden"
              data-tina-field={parentField ? tinaField(service, 'title') : undefined}
            >
              <Link href={service.slug ? `/services/${service.slug}` : `/services/${service.title?.toLowerCase().replace(/ /g, '-')}`} className="absolute inset-0 z-30 pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:ring-offset-2 rounded-3xl md:rounded-[2.5rem]" aria-label={`Learn more about ${service.title}`} />
              
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0284c7]/5 rounded-full blur-2xl group-hover:bg-[#0284c7]/10 transition-colors duration-700" />

              <div>
                <div className={`w-14 h-14 bg-[#0284c7]/10 rounded-2xl flex items-center justify-center mb-8 border border-white shadow-xl shadow-black/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10`}>
                  {(() => {
                    const Icon = iconMap[service.icon] || Stethoscope;
                    return <Icon size={24} strokeWidth={1.5} className="text-[#0284c7]" />;
                  })()}
                </div>
                
                <h3 className="relative z-10 text-xl font-serif font-black text-[#0f172a] mb-4 leading-tight group-hover:text-[#0284c7] transition-colors duration-500">{service.title}</h3>
                <p className="relative z-10 text-slate-500 leading-relaxed mb-10 text-sm font-medium" data-tina-field={parentField ? tinaField(service, 'desc') : undefined}>
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-3 text-[#0284c7] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-500">
                Explore Service <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Featured Card */}
        {d.featuredCard && (
          <BlurFade 
            delay={0.4}
            className="mt-16 md:mt-24 bg-white rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-200 group"
          >
            <BorderBeamAlways colorFrom="#38bdf8" colorTo="#0284c7" borderWidth={2} />
            
            <div className="grid lg:grid-cols-2 relative z-10">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-white/90 lg:bg-transparent">
                <BlurFade delay={0.5} className="mb-8">
                  <AnimatedGradientText data-tina-field={parentField ? tinaField(d.featuredCard, 'badge') : undefined}>{d.featuredCard.badge}</AnimatedGradientText>
                </BlurFade>
                
                <h3 className="text-3xl lg:text-5xl font-serif font-black text-[#0f172a] mb-6 leading-[0.9] tracking-tighter">
                  <span data-tina-field={parentField ? tinaField(d.featuredCard, 'title') : undefined}>{d.featuredCard.title}</span> <br />
                  <span className="text-[#0284c7] italic font-medium" data-tina-field={parentField ? tinaField(d.featuredCard, 'titleItalic') : undefined}>{d.featuredCard.titleItalic}</span>
                </h3>
                <p className="text-slate-800 mb-10 text-sm md:text-base leading-relaxed font-semibold" data-tina-field={parentField ? tinaField(d.featuredCard, 'description') : undefined}>
                  {d.featuredCard.description}
                </p>
                <div>
                 <div className="relative z-50 pointer-events-auto">
                   <Link href={d.featuredCard.buttonLink || "/contact"} className="focus-visible:outline-none pointer-events-auto">
                     <ShimmerButton background="#0f172a" shimmerColor="rgba(255,255,255,0.1)" borderRadius="1rem" className="group/btn inline-flex text-white hover:bg-[#0284c7] transition-colors duration-500">
                       <span className="font-black text-[10px] uppercase tracking-[0.2em] text-white" data-tina-field={parentField ? tinaField(d.featuredCard, 'buttonText') : undefined}>{d.featuredCard.buttonText}</span>
                       <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                     </ShimmerButton>
                   </Link>
                 </div>
                </div>
              </div>
              
              <div className="relative min-h-[400px] overflow-hidden lg:h-auto z-0 mix-blend-multiply opacity-90 group-hover:mix-blend-normal transition-all duration-700" data-tina-field={parentField ? tinaField(d.featuredCard, 'image') : undefined}>
                 {d.featuredCard.image && <Image 
                  src={d.featuredCard.image} 
                  alt={d.featuredCard.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-[80%] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent lg:hidden pointer-events-none" />
                
                {/* Decorative data points overlay strictly for aesthetics */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-ping opacity-20 pointer-events-none" />
              </div>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}

