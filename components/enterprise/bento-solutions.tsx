'use client'

import Link from 'next/link'
import { ArrowRight, Bot, Code2, FileText, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

import { SOLUTIONS } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

const ICONS = {
  'Insights & Reports': FileText,
  'API Access': Code2,
  'RAG AI Assistant': Bot,
  'Custom Research': TrendingUp,
} as const

export function BentoSolutions() {
  return (
    <section id="solutions" className="border-t border-[color:var(--line)] bg-[color:var(--paper)] py-[clamp(96px,12vw,140px)]">
      <div className="section-container">
        <Reveal variant="fade-up" className="mb-14 max-w-[600px]">
          <p className="eyebrow mb-6">Capabilities</p>
          <h2
            className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.06] tracking-[-0.015em] text-[color:var(--ink)]"
            style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
          >
            Four ways to put one panel to work.
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {SOLUTIONS.map((sol, i) => {
            const Icon = ICONS[sol.title as keyof typeof ICONS]
            const isFlagship = i === 0

            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col p-8 transition-colors ${
                  isFlagship
                    ? 'bg-[#0A1A38] text-white sm:col-span-2 lg:col-span-2 lg:row-span-2'
                    : 'border border-[color:var(--line-strong)] bg-[color:var(--paper-white)] text-[color:var(--ink)] hover:border-[#0A1A38]/30'
                } ${i === 1 ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center ${
                      isFlagship ? 'bg-white/10' : 'bg-[#0A1A38]/[0.05]'
                    }`}
                  >
                    <Icon className={isFlagship ? 'h-5 w-5 text-white' : 'h-5 w-5 text-[#2C6DF6]'} strokeWidth={1.7} />
                  </span>
                  {sol.badge && (
                    <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${isFlagship ? 'text-white/45' : 'text-[color:var(--ink)]/35'}`}>
                      {sol.badge}
                    </span>
                  )}
                </div>

                <h3 className={`mt-6 mb-2 font-semibold tracking-[-0.01em] ${isFlagship ? 'text-[22px] text-white' : 'text-[18px] text-[color:var(--ink)]'}`}>
                  {sol.title}
                </h3>
                <p className={`flex-1 leading-[1.65] ${isFlagship ? 'max-w-[380px] text-[15px] text-white/60' : 'text-[14px] text-[color:var(--ink)]/55'}`}>
                  {sol.desc}
                </p>

                <Link
                  href="#join"
                  className={`mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold transition-colors ${
                    isFlagship ? 'text-white hover:text-[#7FA8FF]' : 'text-[#2C6DF6] hover:text-[#0A1A38]'
                  }`}
                >
                  {sol.ctaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
