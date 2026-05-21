'use client'

import { motion } from 'framer-motion'

export function FirstPrinciples() {
  return (
    <section className="bg-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest font-bold text-blue flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-blue rounded-sm" />
            The only question that matters
            <span className="w-5 h-0.5 bg-blue rounded-sm" />
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-800 leading-tight tracking-tighter text-slate-900 mb-6">
            It&apos;s not whether they liked it. It&apos;s whether they{' '}
            <span className="text-blue italic">came back for it.</span>
          </h2>
        </motion.div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional product research measures what consumers <em>say</em> in the moment. Logiq measures the only thing that predicts commercial success: whether they actually <em>return</em>. Our ForecastHUB™ framework strips away brand equity bias to reveal the pure physical product traits that drive repeat purchase behavior at scale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
