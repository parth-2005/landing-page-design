'use client'

import { motion } from 'framer-motion'

import { METHODOLOGY_STEPS } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-[#001081]/7 bg-[#FFFEFF] py-[130px]">
      <div className="section-container">
        <Reveal variant="blur-up" className="mx-auto mb-[72px] max-w-[600px]">
          <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2C6DF6]">
            Methodology
          </p>
          <h2
            className="text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.02em] text-[#001081]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            From blind panel to defensible verdict.
          </h2>
        </Reveal>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {METHODOLOGY_STEPS.map((step, i) => {
            const isFeatured = i === 2

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border-t-2 pt-[22px] transition-colors ${
                  isFeatured ? 'border-[#2C6DF6] bg-[#2C6DF6]/[0.04] px-5 pb-6' : 'border-[#001081]/12'
                }`}
              >
                <span
                  className="text-[13px] font-bold text-[#2C6DF6]"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {step.number}
                </span>
                <h3 className="mt-3 mb-2.5 text-[17px] font-bold text-[#001081]">{step.title}</h3>
                <p className="text-[14.5px] leading-[1.65] text-[#001081]/50">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
