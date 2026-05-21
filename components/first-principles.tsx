'use client'

import { motion } from 'framer-motion'

export function FirstPrinciples() {
  return (
    <section className="bg-white py-24 px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="kicker justify-center mb-6"
        >
          The only question that matters
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          viewport={{ once: true }}
          className="font-serif text-5xl lg:text-6xl font-800 leading-tight tracking-tighter text-navy mb-6"
        >
          It&apos;s not whether they liked it. It&apos;s whether they{' '}
          <span className="text-blue italic">came back for it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          viewport={{ once: true }}
          className="text-lg text-navy-mid leading-relaxed max-w-2xl mx-auto"
        >
          Traditional product research measures what consumers say in the moment. Logiq measures the only thing that predicts commercial success: whether they actually return. Our ForecastHUB™ framework strips away brand equity bias to reveal the pure physical product traits that drive repeat purchase behavior.
        </motion.p>
      </div>
    </section>
  )
}
