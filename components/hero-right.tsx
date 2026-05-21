'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'

interface HeroRightProps {
  s3Value: number
  s4Value: number
  walkToShop: number
  oilPenalty: number
}

export function HeroRight({ s3Value, s4Value, walkToShop, oilPenalty }: HeroRightProps) {
  const [headlines, setHeadlines] = useState(0)
  const newsItems = [
    'New formulation boosts retail velocity by 23%',
    'Consumer loyalty metrics show 45% improvement',
    'Q2 shelf test results exceed expectations',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlines(prev => (prev + 1) % newsItems.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const chartData = [
    { name: 'S1', value: 34 },
    { name: 'S2', value: 56 },
    { name: 'S3', value: 76 },
    { name: 'S4', value: 42 },
  ]

  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <motion.div
        className="bg-white/80 backdrop-blur-md border border-off2 rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Chrome */}
        <div className="bg-off px-4.5 py-3.5 flex items-center gap-2.5 border-b border-off2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-danger rounded-full" />
            <div className="w-2.5 h-2.5 bg-blue rounded-full" />
            <div className="w-2.5 h-2.5 bg-off2 rounded-full" />
          </div>
          <div className="flex-1 bg-white border border-off2 rounded px-3 py-1 text-xs font-medium text-navy-mid flex items-center gap-1.5 ml-2.5">
            <span className="w-1.5 h-1.5 bg-blue rounded-full" />
            logiq-dashboard
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Metric Grid */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <motion.div
              className="bg-off border border-off2 rounded-3xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="text-xs font-bold text-navy-mid uppercase tracking-widest mb-2">S3 Score</div>
              <div className="font-serif text-4xl font-800 text-navy">{s3Value.toFixed(2)}</div>
              <div className="text-xs font-semibold text-blue mt-1">Stickiness™</div>
            </motion.div>

            <motion.div
              className="bg-blue border border-blue-mid rounded-3xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Walk-to-Shop</div>
              <div className="font-serif text-4xl font-800 text-white">+{walkToShop.toFixed(0)}%</div>
              <div className="text-xs font-semibold text-white/85 mt-1">Loyalty</div>
            </motion.div>

            <motion.div
              className="bg-off border border-off2 rounded-3xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="text-xs font-bold text-navy-mid uppercase tracking-widest mb-2">S4 Score</div>
              <div className="font-serif text-4xl font-800 text-navy">{s4Value.toFixed(2)}</div>
              <div className="text-xs font-semibold text-blue mt-1">Critical Threshold</div>
            </motion.div>

            <motion.div
              className="bg-danger-light border border-danger-light rounded-3xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <div className="text-xs font-bold text-navy-mid uppercase tracking-widest mb-2">Oil Penalty</div>
              <div className="font-serif text-4xl font-800 text-danger">{oilPenalty.toFixed(2)}</div>
              <div className="text-xs font-semibold text-danger mt-1">Texture Impact</div>
            </motion.div>
          </div>

          {/* Chart */}
          <motion.div
            className="bg-white border border-off2 rounded-3xl p-4 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="text-xs font-bold text-navy-mid uppercase tracking-widest mb-3">Score Distribution</div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="0" stroke="var(--off2)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(34, 53, 84, 0.4)" style={{ fontSize: '11px' }} />
                <YAxis stroke="rgba(34, 53, 84, 0.4)" style={{ fontSize: '11px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--navy)',
                    border: '1px solid var(--navy-mid)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'var(--white)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'S3' ? 'var(--navy)' : entry.name === 'S4' ? 'var(--danger)' : 'var(--off2)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Live News */}
          <motion.div
            className="bg-gradient-to-r from-off to-off/50 border border-off2 rounded-3xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse" />
              <div className="text-xs font-bold text-navy-mid uppercase tracking-widest">Live FMCG News</div>
            </div>
            <div className="relative h-12 overflow-hidden">
              {newsItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: headlines === idx ? 1 : 0, y: headlines === idx ? 0 : -20 }}
                  transition={{ duration: 0.8 }}
                  className="absolute text-sm text-navy leading-relaxed"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Chips */}
      <motion.div
        className="absolute -top-4 -right-6 bg-white/80 backdrop-blur-md border border-off2 rounded-2xl p-3.5 shadow-lg"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-xs font-bold text-navy-mid uppercase tracking-widest mb-1">Stickiness Score™</div>
        <div className="font-serif text-2xl font-800 text-navy">76.56</div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-8 bg-white/80 backdrop-blur-md border border-off2 rounded-2xl p-3.5 shadow-lg"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <Zap className="w-3.5 h-3.5 text-danger" />
          <span className="text-xs font-bold text-navy-mid uppercase tracking-widest">+25% margin test</span>
        </div>
        <div className="text-sm font-semibold text-blue">Holds</div>
      </motion.div>
    </div>
  )
}
