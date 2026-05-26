'use client'

import { motion } from 'framer-motion'

export function FirstPrinciples() {
  const words = 'Most product research measures opinions. ForecastHUB measures the verdict.'.split(' ')

  return (
    <section id="methodology" className="bg-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="kicker mb-4">Why existing research fails at launch</p>
          <h2 className="font-serif text-5xl lg:text-6xl font-800 leading-tight tracking-tighter text-slate-900">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="relative overflow-hidden rounded-3xl border border-off2 bg-off/60 p-8 lg:p-10">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.1]" style={{ backgroundImage: 'url(/images/research-texture.png)' }} />
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">What traditional research gives you</p>
              <div className="space-y-4">
                {[
                  'Survey percentages that reflect stated preference, not purchase behavior.',
                  'Focus group opinions shaped by brand cues and social dynamics.',
                  'Concept scores that collapse once the product hits shelf reality.',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-danger flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-900/10 bg-slate-900 p-8 lg:p-10 text-slate-50 shadow-2xl shadow-slate-900/10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">What ForecastHUB gives you</p>
            <div className="space-y-4">
              {[
                'Repeat behavior signals that survive branding and presentation changes.',
                'Commercial verdicts tied to price loyalty, walk-to-shop, and attribute scores.',
                'A clear rank order of which formulation wins, loses, or needs another iteration.',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-accent flex-shrink-0" />
                  <p className="leading-relaxed text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
