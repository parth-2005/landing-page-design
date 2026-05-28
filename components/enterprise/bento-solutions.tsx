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
    <section id="solutions" className="bg-[#FFFEFF] py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6]">
            What We Offer
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#001081] lg:text-5xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Our Solutions
          </h2>
          <p className="mt-4 text-lg text-[#001081]/55">
            Everything you need to make evidence-based product decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {SOLUTIONS.map((sol, i) => {
            const Icon = ICONS[sol.title as keyof typeof ICONS]

            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${sol.gradient} p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${sol.span}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${sol.iconBg}`}>
                  <Icon className={`h-5 w-5 ${sol.textColor}`} />
                </div>
                <h3 className={`mt-5 text-xl font-bold ${sol.textColor}`}>
                  {sol.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${sol.descColor}`}>
                  {sol.desc}
                </p>

                <Link href={sol.href} className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${sol.textColor.includes('white') ? 'text-white/60 hover:text-white' : 'text-[#2C6DF6]'}`}>
                  {sol.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="absolute -left-[100%] top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-all duration-700 group-hover:left-[200%]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
