'use client'

import Link from 'next/link'
import { ArrowRight, Bot, Code2, FileText, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

import { SOLUTIONS } from '@/lib/enterprise-content'

const ICONS = {
  'Insights & Reports': FileText,
  'API Access': Code2,
  'RAG AI Assistant': Bot,
  'Custom Research': TrendingUp,
} as const

export function BentoSolutions() {
  return (
    <section id="solutions" className="border-t border-[#001081]/7 bg-[#FFFEFF] py-[110px]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-[600px]"
        >
          <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2C6DF6]">
            What We Offer
          </p>
          <h2
            className="text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.02em] text-[#001081]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Our solutions.
          </h2>
        </motion.div>

        <div
          className="grid gap-px border border-[#001081]/10 bg-[#001081]/10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {SOLUTIONS.map((sol, i) => {
            const Icon = ICONS[sol.title as keyof typeof ICONS]

            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col bg-white p-8"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-[22px] w-[22px] text-[#2C6DF6]" strokeWidth={1.8} />
                  {sol.badge && (
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.05em] text-[#001081]/40">
                      {sol.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 mb-2 text-[17px] font-bold text-[#001081]">{sol.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[#001081]/50">{sol.desc}</p>

                <Link href="#join" className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2C6DF6]">
                  {sol.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
