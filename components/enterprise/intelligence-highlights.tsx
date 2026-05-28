'use client'

import { motion } from 'framer-motion'

import { AnimatedCounter } from './animated-counter'
import { INSIGHT_STATS } from '@/lib/enterprise-content'

export function IntelligenceHighlights() {
  return (
    <section id="insights" className="bg-[#FFFEFF] py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001081] lg:text-5xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Intelligence That Matters
          </h2>
          <p className="mt-4 text-lg text-[#001081]/55">Key findings from our pilot blind sensory study.</p>
        </motion.div>

        <div className="flex flex-wrap justify-around gap-5">
          {INSIGHT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative w-full cursor-default rounded-2xl bg-[#F2F3F3] p-6 text-center transition-colors duration-500 hover:bg-[#001081] sm:w-[calc(50%-0.75rem)] lg:basis-0 lg:flex-1 lg:p-8"
            >
              <div className="text-4xl font-extrabold text-[#001081] transition-colors duration-500 group-hover:text-white lg:text-5xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix ?? ''}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <p className="mt-2 text-sm font-bold text-[#001081] transition-colors duration-500 group-hover:text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-[#001081]/45 transition-colors duration-500 group-hover:text-white/60">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
