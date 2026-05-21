'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Eye, Zap, TrendingUp, CheckCircle2 } from 'lucide-react'

export function Scrollytelling() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: 'Physical Isolation',
      description: 'Products tested unbranded in double-blind conditions',
      icon: Eye,
    },
    {
      title: 'Sensory Scoring',
      description: 'Attributes scored across 50+ sensory dimensions',
      icon: Zap,
    },
    {
      title: 'Behavioral Mapping',
      description: 'Purchase intent matched to repeat behavior data',
      icon: TrendingUp,
    },
    {
      title: 'Commercial Verdict',
      description: 'Mathematical loyalty score delivered in 72 hours',
      icon: CheckCircle2,
    },
  ]

  const attributes = [
    { attr: 'Light & crispy', value: '+3', positive: true },
    { attr: 'Fresh taste', value: '+2', positive: true },
    { attr: 'Oily coating', value: '-2', positive: false },
    { attr: 'Stale aftertaste', value: '-1', positive: false },
  ]

  useEffect(() => {
    const updateActiveStep = () => {
      const cards = document.querySelectorAll('[data-scroll-card]')
      const centerPoint = window.innerHeight / 2
      let closestStep = 0
      let closestDistance = Number.POSITIVE_INFINITY

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const distance = Math.abs(cardCenter - centerPoint)

        if (distance < closestDistance) {
          closestDistance = distance
          closestStep = idx
        }
      })

      setActiveStep(closestStep)
    }

    // Run once on mount to set initial state
    updateActiveStep()
    
    window.addEventListener('scroll', updateActiveStep, { passive: true })
    window.addEventListener('resize', updateActiveStep)
    return () => {
      window.removeEventListener('scroll', updateActiveStep)
      window.removeEventListener('resize', updateActiveStep)
    }
  }, [])

  return (
    <section className="bg-off py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Static & Sticky Navigation */}
          {/* CRITICAL FIX: The sticky positioning is on this standard div. 
            This prevents Framer Motion's transform from breaking the sticky context. 
          */}
          <div className="lg:sticky lg:top-24 lg:self-start lg:h-fit">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="kicker mb-6">ForecastHUB Study</div>
              <h2 className="font-serif text-4xl font-800 text-slate-900 mb-10 leading-tight">
                From tasting session to commercial verdict.
              </h2>

              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={idx}
                      animate={{
                        backgroundColor:
                          activeStep === idx
                            ? 'rgba(0, 112, 243, 1)'
                            : 'rgba(244, 247, 250, 1)',
                      }}
                      className="p-4 rounded-2xl border border-off2 cursor-pointer transition-all"
                      onClick={() => {
                        const cards = document.querySelectorAll('[data-scroll-card]')
                        if (cards[idx]) {
                          cards[idx].scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                            activeStep === idx
                              ? 'bg-white/20 text-slate-50'
                              : 'bg-blue-light text-slate-700'
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <h3
                            className={`font-semibold ${
                              activeStep === idx ? 'text-slate-50' : 'text-slate-900'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-xs ${
                              activeStep === idx
                                ? 'text-slate-200'
                                : 'text-slate-600'
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Scrolling Content Cards */}
          {/* CRITICAL FIX: Removed sticky classes from here. 
            Added space-y-48 and pb-[50vh] to create enough scrollable distance.
          */}
          <div className="space-y-24 lg:space-y-48 pb-[50vh]">
            
            {/* Card 1 - Physical Isolation */}
            <motion.div
              data-scroll-card
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-3xl p-8 border border-off2 shadow-lg"
            >
              <h3 className="font-serif text-2xl font-800 text-slate-900 mb-6">
                Physical Isolation
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-600 font-semibold text-sm"
                  >
                    SKU {i}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 2 - Sensory Scoring */}
            <motion.div
              data-scroll-card
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-3xl p-8 border border-off2 shadow-lg"
            >
              <h3 className="font-serif text-2xl font-800 text-slate-900 mb-6">
                Sensory Scoring
              </h3>
              <div className="space-y-3">
                {attributes.map((attr, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                  >
                    <span className="text-sm text-slate-600">{attr.attr}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        attr.positive
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {attr.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3 - Behavioral Mapping */}
            <motion.div
              data-scroll-card
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-3xl p-8 border border-off2 shadow-lg"
            >
              <h3 className="font-serif text-2xl font-800 text-slate-900 mb-6">
                Behavioral Mapping
              </h3>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 text-center">
                <div className="font-serif text-5xl font-800 text-slate-900 mb-2">
                  +58%
                </div>
                <p className="text-sm text-slate-600">
                  Walk-to-shop loyalty metric
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Commercial Verdict */}
            <motion.div
              data-scroll-card
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-white rounded-3xl p-8 border border-off2 shadow-lg"
            >
              <h3 className="font-serif text-2xl font-800 text-slate-900 mb-6">
                Commercial Verdict
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-xl p-4 text-center">
                  <div className="font-serif text-4xl font-800 text-slate-900">
                    76.56
                  </div>
                  <p className="text-xs text-slate-600 mt-2">S3 Score</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <div className="font-serif text-4xl font-800 text-slate-900">
                    42.19
                  </div>
                  <p className="text-xs text-slate-600 mt-2">S4 Critical</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
  
}