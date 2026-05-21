'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Zap, Users, Target, Brain } from 'lucide-react'

export function BentoGrid() {
  const cards = [
    {
      id: 1,
      title: 'R&D Analytics',
      description: 'Real-time formulation impact analysis',
      span: 'col-span-1 md:col-span-2',
      dark: true,
      icon: BarChart3,
    },
    {
      id: 2,
      title: 'Channel Strategy',
      description: 'Retail placement optimization',
      span: 'col-span-1',
      dark: true,
      icon: TrendingUp,
      video: true,
    },
    {
      id: 3,
      title: 'Speed to Market',
      description: '72-hour verdict delivery',
      span: 'col-span-1',
      dark: false,
      icon: Zap,
    },
    {
      id: 4,
      title: 'Consumer Insights',
      description: 'Deep behavioral intelligence',
      span: 'col-span-1',
      dark: false,
      icon: Brain,
    },
    {
      id: 5,
      title: 'Market Positioning',
      description: 'Competitive landscape mapping',
      span: 'col-span-1',
      dark: false,
      icon: Target,
    },
  ]

  return (
    <section className="bg-off py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12"
        >
          <div>
            <div className="kicker mb-4">What we deliver</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-800 text-navy leading-tight">
              Platform Capabilities
            </h2>
          </div>
          <p className="text-lg text-navy-mid leading-relaxed max-w-sm">
            End-to-end product intelligence from conception to shelf.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-max">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`${card.span} rounded-3xl border p-9 transition-all duration-350 hover:shadow-lg hover:-translate-y-1 ${
                  card.dark
                    ? 'bg-navy border-navy-light hover:border-blue'
                    : 'bg-white border-off2 hover:border-blue-light'
                } relative overflow-hidden group`}
              >
                {card.video && (
                  <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
                )}

                <div className="relative z-10">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 ${
                      card.dark
                        ? 'bg-white/10'
                        : 'bg-blue-light'
                    }`}
                  >
                    <Icon
                      className={`w-5.5 h-5.5 ${
                        card.dark ? 'text-accent' : 'text-blue'
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-serif text-2xl font-800 mb-3 ${
                      card.dark ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      card.dark
                        ? 'text-white/70'
                        : 'text-navy-mid'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
