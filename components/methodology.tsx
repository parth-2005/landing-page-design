'use client'

import { motion } from 'framer-motion'
import { Microscope, ShoppingCart, BarChart3 } from 'lucide-react'

export function Methodology() {
  const methodologies = [
    {
      num: '01',
      icon: Microscope,
      title: 'Base Sensory Profiling',
      description:
        'Triple-replicated testing across 50+ sensory dimensions using trained panelists in controlled lab conditions.',
    },
    {
      num: '02',
      icon: ShoppingCart,
      title: 'Customer Stickiness',
      description:
        'Behavioral mapping of purchase intent matched against real retail redemption patterns and repeat purchase velocity.',
    },
    {
      num: '03',
      icon: BarChart3,
      title: 'Global Multipliers',
      description:
        'Category, channel, and demographic modifiers applied to deliver mathematically calibrated commercial loyalty scores.',
    },
  ]

  return (
    <section className="bg-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end"
        >
          <div>
            <div className="kicker mb-4">The science of loyalty</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-800 text-slate-900 leading-tight">
              ForecastHUB™ Methodology
            </h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our three-phase framework combines rigorous sensory science with behavioral economics to predict which products will become repeat purchases—not just one-time buys.
          </p>
        </motion.div>

        {/* Cards with Connector */}
        <div className="relative">
          {/* Animated connector line background */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-off pointer-events-none" />
          <motion.div
            className="hidden lg:block absolute top-16 left-0 h-0.5 bg-gradient-to-r from-blue to-accent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Number watermark */}
                  <div
                    className="absolute top-0 right-0 font-serif text-9xl font-800 text-off pointer-events-none"
                    style={{ lineHeight: 1 }}
                  >
                    {method.num}
                  </div>

                  <div className="bg-white border border-off2 rounded-3xl p-9 hover:shadow-lg hover:border-blue-light transition-all duration-350 relative z-10">
                    <div className="w-11 h-11 bg-blue-light rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-5.5 h-5.5 text-slate-700" />
                    </div>

                    <h3 className="font-serif text-2xl font-800 text-slate-900 mb-3">
                      {method.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Resource Box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-off border border-off2 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-serif text-2xl font-800 text-slate-900 mb-2">
              Download the full methodology
            </h3>
            <p className="text-sm text-slate-600">
              Technical whitepaper on the ForecastHUB™ framework and statistical validation.
            </p>
          </div>
          <button className="btn-primary whitespace-nowrap">
            Download PDF
          </button>
        </motion.div>
      </div>
    </section>
  )
}
