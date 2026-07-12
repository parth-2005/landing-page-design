'use client'

import { motion } from 'framer-motion'

import { METHODOLOGY_STEPS } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-[color:var(--line)] bg-[color:var(--paper-white)] py-[clamp(96px,12vw,140px)]">
      <div className="section-container grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal variant="fade-up" className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-6">Methodology</p>
          <h2
            className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.06] tracking-[-0.015em] text-[color:var(--ink)]"
            style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
          >
            From blind panel to defensible verdict.
          </h2>
          <p className="mt-6 max-w-[380px] text-[15.5px] leading-[1.7] text-[color:var(--ink)]/55">
            Four controlled steps convert unbranded sensory response into a single, comparable score your team can defend in a launch meeting.
          </p>
        </Reveal>

        <div>
          {METHODOLOGY_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-[color:var(--line)] py-8 first:border-t-0 first:pt-0 sm:gap-9"
            >
              <span
                className="text-[15px] font-semibold tabular-nums text-[#2C6DF6]"
                style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
              >
                {step.number}
              </span>
              <div>
                <h3 className="mb-2.5 text-[19px] font-semibold tracking-[-0.01em] text-[color:var(--ink)]">{step.title}</h3>
                <p className="max-w-[520px] text-[15px] leading-[1.7] text-[color:var(--ink)]/55">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
