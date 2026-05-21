'use client'

import { motion } from 'framer-motion'

export function Highlights() {
  return (
    <section className="bg-off py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Stickiness Score with animated bar */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-off2"
          >
            <div className="text-xs font-bold tracking-widest text-slate-600 uppercase mb-4">
              Stickiness Score™
            </div>
            <div className="font-serif text-5xl font-800 text-slate-900 mb-6">
              76.56
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-slate-600 font-medium">Score</span>
                <span className="text-xs text-slate-600 font-medium">76.5%</span>
              </div>
              <motion.div
                className="w-full h-2 bg-off rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue to-accent rounded-full"
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Indicates high repeat purchase probability in retail environment.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-off2"
          >
            <div className="text-xs font-bold tracking-widest text-slate-600 uppercase mb-4">
              Oil Penalty
            </div>
            <div className="font-serif text-5xl font-800 text-slate-900 mb-6">
              -1.33
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Texture attribute reducing walk-to-shop behavior by identified margin.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-off2"
          >
            <div className="text-xs font-bold tracking-widest text-slate-600 uppercase mb-4">
              Margin Uplift
            </div>
            <div className="font-serif text-5xl font-800 text-slate-900 mb-6">
              +38.4%
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Expected retail margin improvement through formulation optimization.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
