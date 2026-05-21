'use client'

import { motion } from 'framer-motion'

export function FirstPrinciples() {
  return (
    <section className="bg-white py-24 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest font-bold text-blue flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-blue rounded-sm" />
            The only question that matters
            <span className="w-5 h-0.5 bg-blue rounded-sm" />
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-800 leading-tight tracking-tighter text-slate-900 mb-6">
            It&apos;s not whether they liked it. It&apos;s whether they{' '}
            <span className="text-blue italic">came back for it.</span>
          </h2>
        </motion.div>

        {/* Two-Column Before/After */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Traditional Research */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm mb-6">
              {/* Focus Group Photo Placeholder */}
              <div 
                className="w-full h-64 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 overflow-hidden shadow-lg"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="inset-0 bg-black/20 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm font-semibold">Focus group research</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center max-w-sm">
              <h3 className="font-serif text-2xl font-800 text-slate-900 mb-2">Traditional Research</h3>
              <p className="text-sm text-slate-600">
                "What they say in the moment" — biased by brand, packaging, price, and social expectations
              </p>
            </div>
          </motion.div>

          {/* Right: Logiq Method */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm mb-6">
              {/* Shelf/Repeat Purchase Photo Placeholder */}
              <div 
                className="w-full h-64 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 overflow-hidden shadow-lg"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669714153495?q=80&w=800&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="inset-0 bg-black/20 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm font-semibold">Real repeat behavior</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center max-w-sm">
              <h3 className="font-serif text-2xl font-800 text-blue mb-2">Logiq Method</h3>
              <p className="text-sm text-slate-600">
                "What actually drives revenue" — unblinded sensory traits that predict repeat purchase at scale
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            Traditional product research measures what consumers <em>say</em> in the moment. Logiq measures the only thing that predicts commercial success: whether they actually <em>return</em>. Our ForecastHUB™ framework strips away brand equity bias to reveal the pure physical product traits that drive repeat purchase behavior at scale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
