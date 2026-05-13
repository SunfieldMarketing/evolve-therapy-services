import { motion } from 'framer-motion';

import { useTina, tinaField } from 'tinacms/dist/react';
import homeData from '../../content/pages/home.json';

export default function SocialProof() {
  const { data } = useTina({
    query: `query { home(relativePath: "home.json") { socialProof { stats { value label desc } } } }`,
    variables: {},
    data: { home: homeData },
  });

  const s = data?.home?.socialProof || homeData.socialProof;
  const stats = s?.stats || [];

  return (
    <>
      {/* Stats Bar */}
      <section className="bg-[#0f172a] py-16 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left relative"
              >
                <div data-tina-field={tinaField(stat, 'value')} className="text-5xl font-serif font-black text-[#0284c7] mb-2 tracking-tighter">{stat.value}</div>
                <div data-tina-field={tinaField(stat, 'label')} className="text-white font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                <div data-tina-field={tinaField(stat, 'desc')} className="text-white/40 text-xs font-medium">{stat.desc}</div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
