'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Zap, Users, Target, Brain } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export function BentoGrid() {
  const chartData = [
    { iteration: '1', score: 58 },
    { iteration: '2', score: 64 },
    { iteration: '3', score: 72 },
    { iteration: '4', score: 76.56 },
  ]

  const cards = [
    {
      id: 1,
      title: 'R&D Analytics',
      description: 'Real-time formulation impact analysis',
      span: 'col-span-1 md:col-span-2',
      dark: true,
      icon: BarChart3,
      hasChart: true,
    },
    {
      id: 2,
      title: 'Channel Strategy',
      description: 'Retail placement optimization',
      span: 'col-span-1',
      dark: true,
      icon: TrendingUp,
      hasImage: true,
    },
    {
      id: 3,
      title: 'Speed to Market',
      description: '72-hour verdict delivery',
      span: 'col-span-1',
      dark: false,
      icon: Zap,
      hasTimeline: true,
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
            <h2 className="font-serif text-4xl lg:text-5xl font-800 text-slate-900 leading-tight">
              Platform Capabilities
            </h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed max-w-sm">
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
                } relative overflow-hidden group flex flex-col`}
              >
                {/* Background Image for Channel Strategy */}
                {card.hasImage && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1531737413211-4e347aae0450?q=80&w=800&auto=format&fit=crop)',
                    }}
                  />
                )}

                <div className="relative z-10 flex flex-col flex-1">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 ${
                      card.dark
                        ? 'bg-white/10'
                        : 'bg-blue-light'
                    }`}
                  >
                    <Icon
                      className={`w-5.5 h-5.5 text-slate-700`}
                    />
                  </div>

                  <h3
                    className={`font-serif text-2xl font-800 mb-3 text-slate-900`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6 flex-1 text-slate-700`}
                  >
                    {card.description}
                  </p>

                  {/* Inline Mini-Chart for R&D Analytics */}
                  {card.hasChart && (
                    <div className="mt-auto pt-4">
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-300 mb-3">
                        Iteration Impact
                      </p>
                      <ResponsiveContainer width="100%" height={80}>
                        <BarChart data={chartData}>
                          <XAxis dataKey="iteration" stroke="rgb(13, 94, 207)" style={{ fontSize: '0.75rem' }} />
                          <YAxis hide domain={[0, 100]} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'rgba(10, 25, 47, 0.9)',
                              border: 'none',
                              borderRadius: '8px',
                              color: '#fff',
                            }}
                            labelStyle={{ color: '#e2e8f0' }}
                            formatter={(value) => [`${value}`, 'Score']}
                          />
                          <Bar dataKey="score" fill="#38BDF8" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Timeline for Speed to Market */}
                  {card.hasTimeline && (
                    <div className="mt-auto pt-4 space-y-2">
                      {['Day 1', 'Day 2', 'Day 3', 'Verdict'].map((stage, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{stage}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Watermark Number */}
                <div className="absolute top-6 right-6 text-6xl font-800 text-slate-700 pointer-events-none">
                  {String(card.id).padStart(2, '0')}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
