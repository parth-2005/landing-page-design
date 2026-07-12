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
    <section id="solutions" className="border-t border-[#001081]/7 bg-[#FFFEFF] py-[110px]">
      <div className="section-container">
        <Reveal variant="blur-up" className="mx-auto mb-16 max-w-[600px]">
          <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2C6DF6]">
            What We Offer
          </p>
          <h2
            className="text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.02em] text-[#001081]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Our solutions.
          </h2>
        </Reveal>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {SOLUTIONS.map((sol, i) => {
            const Icon = ICONS[sol.title as keyof typeof ICONS]
            const isFlagship = i === 0

            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`flex flex-col rounded-2xl p-8 transition-shadow ${
                  isFlagship ? 'bg-[#001081] text-white hover:shadow-xl' : 'bg-[#F2F3F3] text-[#001081] hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                      isFlagship ? 'bg-white/15' : 'bg-white'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isFlagship ? 'text-white' : 'text-[#2C6DF6]'}`} strokeWidth={1.8} />
                  </motion.div>
                  {sol.badge && (
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.05em] text-[#001081]/40">
                      {sol.badge}
                    </span>
                  )}
                </div>
                <h3 className={`mt-5 mb-2 text-[17px] font-bold ${isFlagship ? 'text-white' : 'text-[#001081]'}`}>
                  {sol.title}
                </h3>
                <p className={`flex-1 text-sm leading-relaxed ${isFlagship ? 'text-white/60' : 'text-[#001081]/50'}`}>
                  {sol.desc}
                </p>

                <Link
                  href="#join"
                  className={`mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold transition-colors ${
                    isFlagship ? 'text-white hover:text-[#7FA8FF]' : 'text-[#2C6DF6] hover:text-[#001081]'
                  }`}
                >
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
