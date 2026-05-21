'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, FileText, TrendingUp, Lightbulb, Clock } from 'lucide-react'

export function Deliverables() {
  const items = [
    {
      icon: FileText,
      title: 'Stickiness Score™ Report',
      description: 'Mathematical loyalty prediction for your SKU with competitive benchmarking',
    },
    {
      icon: Lightbulb,
      title: 'Attribute Breakdown',
      description: 'Which sensory traits drove (+) or hurt (-) the score — formulation insights',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Ranking',
      description: 'How your product stacks against category leaders in blind testing',
    },
    {
      icon: Clock,
      title: 'Formulation Roadmap',
      description: 'Prioritized ingredient/texture changes recommended to lift loyalty 5–15%',
    },
    {
      icon: CheckCircle2,
      title: 'Margin Impact Model',
      description: 'What happens to repeat purchase if you reduce cost by 5%, 10%, 20%',
    },
    {
      icon: FileText,
      title: 'Executive Summary',
      description: 'One-page leadership brief with verdict, key findings, and next steps',
    },
  ]

  return (
    <section className="bg-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest font-bold text-blue mb-3 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-blue rounded-sm" />
            What You Get
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-800 text-slate-900 mb-4 max-w-2xl">
            Your Complete Verdict in 72 Hours
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl">
            No endless reports. No fluff. Just the data that matters for better formulation decisions and margin-positive launches.
          </p>
        </motion.div>

        {/* Two-Column Layout: Left Image + Right Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Mock Report Visual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Mock PDF/Report Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-off2">
                {/* Report Header */}
                <div className="bg-gradient-to-r from-navy to-blue-mid p-6 text-white">
                  <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-2">
                    ForecastHUB™ Report
                  </p>
                  <h3 className="text-2xl font-800">Stickiness Score</h3>
                  <p className="text-sm opacity-90 mt-1">Premium Ice Cream SKU</p>
                </div>

                {/* Report Content */}
                <div className="p-6 space-y-6">
                  {/* Score Display */}
                  <div className="flex items-end gap-4">
                    <div className="text-5xl font-800 text-blue">76.56</div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-600">Loyalty Score</p>
                      <p className="text-sm text-slate-500">Commercial repeat intent</p>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-off rounded-lg p-3">
                      <p className="text-xs text-slate-600 font-semibold uppercase">Walk-to-Shop</p>
                      <p className="text-xl font-800 text-slate-900">+58%</p>
                    </div>
                    <div className="bg-off rounded-lg p-3">
                      <p className="text-xs text-slate-600 font-semibold uppercase">vs. Competitor</p>
                      <p className="text-xl font-800 text-blue">+2.1</p>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="border-t border-off2 pt-4 text-center">
                    <p className="text-xs text-slate-500 font-medium">🚀 Delivered in 72 hours</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-blue text-white rounded-full p-4 shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Deliverables Grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {items.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-off transition-colors group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center group-hover:bg-blue group-hover:text-white transition-all">
                      <Icon className="w-5 h-5 text-blue group-hover:text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
