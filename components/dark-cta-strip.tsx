'use client'

import { motion } from 'framer-motion'

export function DarkCtaStrip() {
  return (
    <section className="bg-navy py-24 px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.24),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(0,112,243,0.18),transparent_42%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-4">Commercial signal</p>
            <h2 className="font-serif text-5xl lg:text-7xl font-800 leading-[0.95] tracking-tighter text-slate-50">
              72 hours from tasting session to commercial verdict.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="max-w-sm text-slate-300 leading-relaxed">
              Run a pilot study on a real SKU, get the verdict, then decide whether to scale, reformulate, or kill the line.
            </p>
            <button className="btn-cta bg-white text-navy hover:bg-slate-100">
              Request a Pilot Study
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}