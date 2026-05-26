'use client'

import { motion } from 'framer-motion'

export function PilotStudyResults() {
  return (
    <section className="bg-slate-900 py-24 px-12 text-slate-50">
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
                <p className="font-serif text-5xl font-800 text-slate-50">+6.09</p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">Sample 2 led the blind test and became the strongest commercial candidate.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">Failure</p>
                <p className="font-serif text-5xl font-800 text-slate-50">−1.41</p>
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
                { value: '39%', label: 'Walk-to-shop behavior' },
                { value: '68%', label: 'Price loyalty' },
                { value: 'n=44', label: 'Panel size' },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">{label}</p>
                  <p className="text-3xl font-semibold tracking-tight text-slate-50">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
