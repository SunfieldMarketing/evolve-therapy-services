'use client';

import { motion } from 'framer-motion';

// Service area states from the map image
const SERVICE_STATES: Record<string, { name: string; active: boolean }> = {
  AL: { name: 'Alabama', active: false },
  AK: { name: 'Alaska', active: false },
  AZ: { name: 'Arizona', active: false },
  AR: { name: 'Arkansas', active: false },
  CA: { name: 'California', active: false },
  CO: { name: 'Colorado', active: false },
  CT: { name: 'Connecticut', active: true },
  DE: { name: 'Delaware', active: true },
  FL: { name: 'Florida', active: true },
  GA: { name: 'Georgia', active: false },
  HI: { name: 'Hawaii', active: false },
  ID: { name: 'Idaho', active: false },
  IL: { name: 'Illinois', active: false },
  IN: { name: 'Indiana', active: true },
  IA: { name: 'Iowa', active: false },
  KS: { name: 'Kansas', active: true },
  KY: { name: 'Kentucky', active: true },
  LA: { name: 'Louisiana', active: true },
  ME: { name: 'Maine', active: true },
  MD: { name: 'Maryland', active: true },
  MA: { name: 'Massachusetts', active: true },
  MI: { name: 'Michigan', active: false },
  MN: { name: 'Minnesota', active: true },
  MS: { name: 'Mississippi', active: true },
  MO: { name: 'Missouri', active: false },
  MT: { name: 'Montana', active: false },
  NE: { name: 'Nebraska', active: true },
  NV: { name: 'Nevada', active: false },
  NH: { name: 'New Hampshire', active: true },
  NJ: { name: 'New Jersey', active: true },
  NM: { name: 'New Mexico', active: false },
  NY: { name: 'New York', active: true },
  NC: { name: 'North Carolina', active: false },
  ND: { name: 'North Dakota', active: false },
  OH: { name: 'Ohio', active: true },
  OK: { name: 'Oklahoma', active: true },
  OR: { name: 'Oregon', active: false },
  PA: { name: 'Pennsylvania', active: true },
  RI: { name: 'Rhode Island', active: true },
  SC: { name: 'South Carolina', active: false },
  SD: { name: 'South Dakota', active: false },
  TN: { name: 'Tennessee', active: true },
  TX: { name: 'Texas', active: false },
  UT: { name: 'Utah', active: false },
  VT: { name: 'Vermont', active: true },
  VA: { name: 'Virginia', active: true },
  WA: { name: 'Washington', active: false },
  WV: { name: 'West Virginia', active: true },
  WI: { name: 'Wisconsin', active: true },
  WY: { name: 'Wyoming', active: false },
  DC: { name: 'Washington D.C.', active: true },
};

const activeStates = Object.entries(SERVICE_STATES)
  .filter(([, v]) => v.active)
  .map(([k, v]) => ({ abbr: k, name: v.name }));

// SVG paths for each US state (simplified Albers USA projection)
const STATE_PATHS: Record<string, string> = {
  AL: "M 530 310 L 540 310 L 545 380 L 525 380 Z",
  AK: "M 60 380 L 130 380 L 140 430 L 70 430 Z",
  AZ: "M 130 270 L 210 270 L 215 360 L 125 360 Z",
  AR: "M 460 295 L 510 295 L 510 335 L 460 335 Z",
  CA: "M 60 170 L 115 160 L 130 270 L 60 320 Z",
  CO: "M 225 230 L 310 225 L 310 275 L 225 275 Z",
  CT: "M 680 165 L 700 165 L 700 180 L 680 180 Z",
  DC: "M 637 222 L 643 222 L 643 228 L 637 228 Z",
  DE: "M 655 195 L 665 195 L 665 215 L 655 215 Z",
  FL: "M 550 355 L 600 355 L 620 410 L 575 430 L 540 400 Z",
  GA: "M 550 310 L 590 310 L 595 360 L 550 360 Z",
  HI: "M 200 430 L 250 430 L 255 455 L 200 455 Z",
  ID: "M 125 100 L 175 95 L 185 195 L 130 200 Z",
  IL: "M 490 195 L 520 195 L 522 265 L 490 268 Z",
  IN: "M 520 190 L 550 190 L 550 255 L 520 258 Z",
  IA: "M 440 180 L 500 178 L 500 220 L 440 222 Z",
  KS: "M 340 248 L 430 244 L 430 280 L 340 282 Z",
  KY: "M 520 255 L 600 250 L 605 278 L 520 282 Z",
  LA: "M 450 350 L 510 348 L 512 390 L 450 392 Z",
  ME: "M 700 100 L 735 95 L 740 145 L 700 148 Z",
  MD: "M 632 215 L 665 212 L 668 228 L 632 230 Z",
  MA: "M 680 150 L 720 148 L 722 165 L 680 167 Z",
  MI: "M 520 130 L 570 128 L 575 175 L 520 178 Z",
  MN: "M 420 100 L 485 97 L 490 170 L 420 172 Z",
  MS: "M 490 310 L 530 310 L 530 380 L 490 382 Z",
  MO: "M 450 248 L 490 245 L 495 295 L 450 298 Z",
  MT: "M 155 85 L 265 80 L 270 155 L 158 158 Z",
  NE: "M 335 210 L 425 207 L 428 248 L 338 250 Z",
  NV: "M 90 155 L 145 148 L 155 258 L 95 265 Z",
  NH: "M 690 118 L 705 115 L 708 152 L 690 155 Z",
  NJ: "M 652 178 L 670 175 L 672 200 L 652 202 Z",
  NM: "M 210 285 L 280 282 L 282 360 L 212 362 Z",
  NY: "M 625 140 L 690 135 L 695 178 L 625 182 Z",
  NC: "M 575 270 L 648 265 L 650 292 L 576 295 Z",
  ND: "M 335 100 L 420 97 L 423 140 L 338 143 Z",
  OH: "M 550 190 L 595 188 L 598 248 L 550 250 Z",
  OK: "M 340 285 L 450 282 L 452 318 L 340 320 Z",
  OR: "M 65 115 L 145 108 L 148 170 L 65 175 Z",
  PA: "M 595 172 L 655 168 L 658 205 L 595 208 Z",
  RI: "M 710 162 L 722 162 L 722 175 L 710 175 Z",
  SC: "M 580 292 L 620 290 L 625 325 L 580 330 Z",
  SD: "M 335 143 L 420 140 L 422 182 L 338 185 Z",
  TN: "M 505 280 L 590 276 L 592 305 L 505 308 Z",
  TX: "M 300 320 L 450 315 L 455 415 L 300 420 Z",
  UT: "M 155 200 L 215 196 L 218 275 L 158 278 Z",
  VT: "M 678 110 L 692 108 L 695 145 L 678 148 Z",
  VA: "M 580 232 L 648 228 L 650 262 L 580 265 Z",
  WA: "M 65 72 L 145 68 L 148 112 L 65 115 Z",
  WV: "M 580 208 L 618 205 L 620 238 L 582 240 Z",
  WI: "M 455 128 L 500 125 L 502 178 L 456 180 Z",
  WY: "M 212 165 L 305 160 L 308 215 L 215 218 Z",
};

// Label positions for state abbreviations
const STATE_LABELS: Record<string, [number, number]> = {
  AL: [532, 348], AK: [95, 408], AZ: [168, 318], AR: [483, 318], CA: [88, 248],
  CO: [266, 252], CT: [690, 173], DC: [640, 225], DE: [660, 205], FL: [578, 390],
  GA: [570, 338], HI: [226, 443], ID: [152, 158], IL: [504, 235], IN: [534, 225],
  IA: [468, 200], KS: [382, 263], KY: [560, 266], LA: [478, 370], ME: [718, 122],
  MD: [648, 222], MA: [700, 158], MI: [544, 153], MN: [452, 138], MS: [508, 348],
  MO: [470, 272], MT: [212, 120], NE: [378, 228], NV: [118, 212], NH: [697, 135],
  NJ: [661, 190], NM: [244, 325], NY: [656, 158], NC: [612, 280], ND: [378, 120],
  OH: [572, 220], OK: [394, 302], OR: [104, 143], PA: [624, 188], RI: [716, 169],
  SC: [600, 312], SD: [378, 163], TN: [546, 292], TX: [376, 368], UT: [185, 238],
  VT: [686, 128], VA: [612, 248], WA: [104, 90], WV: [598, 222], WI: [477, 153],
  WY: [258, 190],
};

export default function USAMap() {
  return (
    <section className="py-24 md:py-40 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-6">
            Service Coverage
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] tracking-tighter mb-4">
            Where We <span className="text-[#0284c7] italic font-medium">Operate</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Evolve Therapy Services actively manages facilities across <strong className="text-[#0f172a]">{activeStates.length} states</strong>, with our headquarters in Avon Lake, Ohio.
          </p>
        </motion.div>

        {/* SVG Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-4 md:p-8"
        >
          <svg
            viewBox="0 0 780 500"
            className="w-full h-auto"
            aria-label="Evolve Therapy Services USA Coverage Map"
          >
            {Object.entries(STATE_PATHS).map(([abbr, path]) => {
              const isActive = SERVICE_STATES[abbr]?.active ?? false;
              return (
                <g key={abbr} className="group cursor-default">
                  <path
                    d={path}
                    fill={isActive ? '#0284c7' : '#e2e8f0'}
                    stroke="white"
                    strokeWidth="1.5"
                    className={`transition-all duration-300 ${isActive ? 'hover:fill-[#0369a1] drop-shadow-md' : 'hover:fill-slate-300'}`}
                  />
                  {STATE_LABELS[abbr] && (
                    <text
                      x={STATE_LABELS[abbr][0]}
                      y={STATE_LABELS[abbr][1]}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="7"
                      fontWeight="700"
                      fill={isActive ? 'white' : '#94a3b8'}
                      className="pointer-events-none select-none"
                    >
                      {abbr}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#0284c7]" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Active Service States ({activeStates.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-slate-200" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Not Currently Served</span>
            </div>
          </div>
        </motion.div>

        {/* Active States List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-center text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Currently Serving</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {activeStates.map(({ abbr, name }) => (
              <span
                key={abbr}
                title={name}
                className="px-3 py-1.5 bg-[#0284c7]/10 text-[#0284c7] text-xs font-black rounded-full border border-[#0284c7]/20 hover:bg-[#0284c7] hover:text-white transition-all cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
