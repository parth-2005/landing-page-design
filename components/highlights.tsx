'use client'

import { motion } from 'framer-motion'

export function PilotStudyResults() {
  return (
    <section className="bg-navy py-24 px-12 text-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">Pilot Study #001 · May 2026 · n=44</p>
          <h2 className="font-serif text-4xl lg:text-6xl font-800 leading-tight tracking-tighter">
            The wafer pilot did not just validate a concept. It produced a commercial verdict.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border border-white/10 bg-white/6 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">Winner</p>
                <div className="font-serif text-5xl font-800 text-slate-50">+6.09</div>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">Sample 2 led the blind test and became the strongest commercial candidate.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">Failure</p>
                <div className="font-serif text-5xl font-800 text-slate-50">-1.41</div>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">Sample 4 missed the texture target and fell behind on repeat intent.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-300 mb-2">Oil penalty</p>
                <div className="font-serif text-3xl font-800 text-slate-50">-1.33</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-300 mb-2">Price loyalty</p>
                <div className="font-serif text-3xl font-800 text-slate-50">68%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-blue/20 to-accent/10"
          >
            <div className="text-xs font-bold tracking-widest text-slate-300 uppercase mb-4">
              Why it matters
            </div>
            <div className="space-y-4">
              {[
                ['39%', 'walk-to-shop behavior'],
                ['68%', 'price loyalty'],
                ['n=44', 'panel size'],
              ].map(([value, label], idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-300 mb-1">{label}</p>
                    <div className="font-serif text-3xl font-800 text-slate-50">{value}</div>
                  </div>
                  <div className="h-10 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.32),rgba(255,255,255,0.05))]" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
