'use client'

import { motion } from 'framer-motion'

import { RESULT_STATS } from '@/lib/enterprise-content'

export function ResultsSection() {
  return (
    <section id="results" className="border-t border-[#001081]/7 bg-[#FFFEFF] py-[110px]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-10"
        >
          <div className="max-w-[460px]">
            <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2C6DF6]">
              Pilot Findings
            </p>
            <h2
              className="text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.02em] text-[#001081]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              What the first cohort told us.
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] text-[#001081]/45">
            Signals from our Q1 2026 blind sensory pilot — 44 verified panelists, four SKUs, one category.
          </p>
        </motion.div>

        <div className="flex flex-wrap">
          {RESULT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-[1_1_220px] border-l border-[#001081]/10 pl-7"
            >
              <div
                className="text-[44px] font-bold text-[#001081]"
                style={{ fontFamily: 'var(--font-plus-jakarta)' }}
              >
                {stat.value}
              </div>
              <p className="mt-3 mb-1 text-[14.5px] font-bold text-[#001081]">{stat.label}</p>
              <p className="text-[13px] text-[#001081]/45">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-[12.5px] text-[#001081]/35">
          Single-category pilot data. Full methodology and raw panel data available under NDA.
        </p>
      </div>
    </section>
  )
}
