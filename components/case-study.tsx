'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

export function CaseStudy() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const benefits = [
    'Formulation optimization roadmap',
    '+45% margin improvement strategy',
    'Competitive positioning analysis',
    'Timely, defensible delivery methodology',
    'Statistical confidence intervals',
    'Executive summary',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="bg-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Report Card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="bg-white border border-off2 rounded-3xl p-8 shadow-lg"
              style={{
                boxShadow:
                  '8px 8px 0 rgba(230, 240, 253, 1), 16px 16px 0 rgba(0, 112, 243, 0.05)',
              }}
            >
              <div className="h-1 w-15 bg-blue rounded mb-6" />
              <div className="text-xs font-bold tracking-widest text-slate-700 uppercase mb-3">
                Recent Study
              </div>
              <h3 className="font-serif text-3xl font-800 text-slate-900 mb-4 leading-tight">
                Cream & Onion Wafers
              </h3>
              <p className="text-sm text-slate-700 mb-8">
                Multi-SKU pilot across the premium savory segment. Identified the winner, the texture failure mode, and the price loyalty ceiling.
              </p>
              <div className="text-xs text-slate-600 font-medium">
                Published: May 2026
              </div>
            </div>
          </motion.div>

          {/* Right - Download CTA */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="font-serif text-4xl font-800 text-slate-900 mb-6 leading-tight">
                Get the sample report
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                See exactly what a ForecastHUB™ study looks like. This sample includes the wafer pilot methodology, the verdict, and the commercial readout.
              </p>
            </div>

            {/* Benefits List */}
            <div className="mb-10 space-y-3">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-blue-light rounded flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-slate-700" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex gap-2.5">
              <input
                type="email"
                placeholder="your@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 px-4.5 py-3.5 border-1.5 border-off2 rounded-lg bg-off text-slate-900 placeholder-slate-600 text-sm font-medium outline-none transition-all focus:border-blue focus:bg-white focus:ring-4 focus:ring-blue-light"
              />
              <button
                type="submit"
                className="btn-primary px-7"
              >
                {submitted ? '✓ Sent' : 'Book an Appointment'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
