'use client';

import { useState, useCallback } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

// Public TopoJSON for US states (AlbersUSA projection)
const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const STATE_ABBR: Record<string, string> = {
  Alabama: 'AL', Alaska: 'AK', Arizona: 'AZ', Arkansas: 'AR', California: 'CA',
  Colorado: 'CO', Connecticut: 'CT', Delaware: 'DE', Florida: 'FL', Georgia: 'GA',
  Hawaii: 'HI', Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA',
  Kansas: 'KS', Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD',
  Massachusetts: 'MA', Michigan: 'MI', Minnesota: 'MN', Mississippi: 'MS',
  Missouri: 'MO', Montana: 'MT', Nebraska: 'NE', Nevada: 'NV',
  'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY',
  'North Carolina': 'NC', 'North Dakota': 'ND', Ohio: 'OH', Oklahoma: 'OK',
  Oregon: 'OR', Pennsylvania: 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
  'South Dakota': 'SD', Tennessee: 'TN', Texas: 'TX', Utah: 'UT', Vermont: 'VT',
  Virginia: 'VA', Washington: 'WA', 'West Virginia': 'WV', Wisconsin: 'WI',
  Wyoming: 'WY', 'District of Columbia': 'DC',
};

interface TooltipState {
  name: string;
  active: boolean;
  x: number;
  y: number;
}

export default function InteractiveMapInner({ activeStates }: { activeStates?: string[] }) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const activeSet = new Set(activeStates || [
    'Minnesota', 'Wisconsin', 'Nebraska', 'Kansas', 'Oklahoma',
    'Louisiana', 'Mississippi', 'Tennessee', 'Kentucky', 'Ohio',
    'Indiana', 'West Virginia', 'Virginia', 'Pennsylvania', 'New York',
    'New Jersey', 'Delaware', 'Maryland', 'Maine', 'Vermont',
    'New Hampshire', 'Massachusetts', 'Rhode Island', 'Connecticut',
    'Florida', 'District of Columbia',
  ]);

  const handleMouseEnter = useCallback((geo: any, evt: React.MouseEvent) => {
    const name = geo.properties.name as string;
    setTooltip({
      name,
      active: activeSet.has(name),
      x: evt.clientX,
      y: evt.clientY,
    });
  }, [activeSet]);

  const handleMouseMove = useCallback((evt: React.MouseEvent) => {
    setTooltip(prev => prev ? { ...prev, x: evt.clientX, y: evt.clientY } : null);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  const handleClick = useCallback((geo: any) => {
    const name = geo.properties.name as string;
    setSelected(prev => prev === name ? null : name);
  }, []);

  const activeList = [...activeSet].sort();
  const selectedActive = selected ? activeSet.has(selected) : false;

  return (
    <section className="py-16 md:py-28 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-4">
            Service Coverage
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-[#0f172a] tracking-tighter mb-3">
            Where We <span className="text-[#0284c7] italic font-medium">Operate</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Actively managing LTC facilities across{' '}
            <strong className="text-[#0f172a]">{activeSet.size} states</strong>.
            Click any state to learn more.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-4 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="xl:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative"
          >
            {/* Legend */}
            <div className="flex items-center gap-6 px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#0284c7]" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Active ({activeSet.size})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-slate-200" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Not Served</span>
              </div>
              {selected && (
                <button
                  onClick={() => setSelected(null)}
                  className="ml-auto text-xs font-bold text-slate-400 hover:text-[#0284c7] transition-colors"
                >
                  Clear selection ×
                </button>
              )}
            </div>

            {/* Composable Map */}
            <div className="relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <ComposableMap
                projection="geoAlbersUsa"
                style={{ width: '100%', height: 'auto' }}
                projectionConfig={{ scale: 1000 }}
              >
                <ZoomableGroup center={[0, 0]} zoom={1}>
                  <Geographies geography={GEO_URL}>
                    {({ geographies }: { geographies: any[] }) =>
                      geographies.map((geo) => {
                        const name = geo.properties.name as string;
                        const isActive = activeSet.has(name);
                        const isSelected = selected === name;

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={(evt: React.MouseEvent) => handleMouseEnter(geo, evt)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(geo)}
                            style={{
                              default: {
                                fill: isSelected
                                  ? '#0369a1'
                                  : isActive
                                  ? '#0284c7'
                                  : '#e2e8f0',
                                stroke: '#fff',
                                strokeWidth: 0.8,
                                outline: 'none',
                                cursor: 'pointer',
                                transition: 'fill 0.2s ease',
                              },
                              hover: {
                                fill: isActive ? '#0369a1' : '#cbd5e1',
                                stroke: '#fff',
                                strokeWidth: 0.8,
                                outline: 'none',
                                cursor: 'pointer',
                              },
                              pressed: {
                                fill: '#0284c7',
                                stroke: '#fff',
                                strokeWidth: 0.8,
                                outline: 'none',
                              },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>

              {/* Tooltip */}
              <AnimatePresence>
                {tooltip && (
                  <motion.div
                    key="tooltip"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="fixed z-50 pointer-events-none"
                    style={{ left: tooltip.x + 14, top: tooltip.y - 40 }}
                  >
                    <div className={`px-3 py-2 rounded-xl shadow-xl text-white text-xs font-bold flex items-center gap-2 ${tooltip.active ? 'bg-[#0284c7]' : 'bg-slate-600'}`}>
                      {tooltip.active && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                      {tooltip.name}
                      {tooltip.active ? ' ✓ Active' : ''}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Side Panel */}
          <div className="xl:col-span-1 flex flex-col gap-4">
            {/* Selected State Info */}
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-6 rounded-2xl border ${selectedActive ? 'bg-[#0284c7] border-[#0284c7] text-white' : 'bg-slate-100 border-slate-200 text-slate-600'}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} />
                    <span className="text-xs font-black uppercase tracking-widest opacity-70">Selected State</span>
                  </div>
                  <div className="text-2xl font-serif font-black mb-2">{selected}</div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">
                    {selectedActive ? '✓ Active Service Area' : 'Not Currently Served'}
                  </div>
                  {selectedActive ? (
                    <p className="text-xs leading-relaxed opacity-80 mb-4">
                      Evolve Therapy Services actively manages LTC facilities in {selected}. Contact us to learn about specific facilities and partnerships.
                    </p>
                  ) : (
                    <p className="text-xs leading-relaxed opacity-70 mb-4">
                      We are actively expanding. Contact us to inquire about coverage in {selected}.
                    </p>
                  )}
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest py-2 px-4 rounded-xl transition-all ${selectedActive ? 'bg-white text-[#0284c7] hover:bg-slate-50' : 'bg-[#0284c7] text-white hover:bg-[#0369a1]'}`}
                  >
                    Contact Us <ArrowRight size={12} />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded-2xl bg-[#0f172a] text-white"
                >
                  <MapPin size={24} className="text-[#0284c7] mb-3" />
                  <h3 className="font-serif font-black text-xl mb-2">Click Any State</h3>
                  <p className="text-white/50 text-sm font-light">
                    Click on a state to see whether Evolve Therapy Services operates there.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* HQ Card */}
            <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Headquarters</div>
              <div className="font-black text-[#0f172a] font-serif text-lg mb-1">Avon Lake, Ohio</div>
              <div className="text-slate-500 text-sm mb-4">31641 Compass Cove, OH 44012</div>
              <a href="tel:8883865820" className="flex items-center gap-2 text-[#0284c7] font-bold text-sm hover:underline">
                <Phone size={14} /> (888) 386-5820
              </a>
            </div>

            {/* Active states compact list */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex-1">
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                Active States ({activeSet.size})
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-52 overflow-y-auto">
                {activeList.map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelected(prev => prev === name ? null : name)}
                    title={name}
                    className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${selected === name ? 'bg-[#0284c7] text-white' : 'bg-[#0284c7]/10 text-[#0284c7] hover:bg-[#0284c7] hover:text-white'}`}
                  >
                    {STATE_ABBR[name] ?? name.slice(0, 2).toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
