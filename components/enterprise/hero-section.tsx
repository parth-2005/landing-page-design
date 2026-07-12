'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { CALENDLY_URL, HERO_BACKGROUND, SCORE_BARS } from '@/lib/enterprise-content'
import { TextBlurIn } from '@/components/shared/text-blur-in'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden py-[clamp(120px,20vw,160px)] pb-28"
      style={{ background: HERO_BACKGROUND }}
    >
      <div
        className="pointer-events-none absolute left-[18%] top-[8%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
        style={{
          background: 'radial-gradient(circle, rgba(107,159,255,0.5) 0%, rgba(44,109,246,0.18) 45%, transparent 70%)',
          animation: 'drift1 14s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute right-[8%] bottom-[-10%] h-[460px] w-[460px] rounded-full blur-[70px]"
        style={{
          background: 'radial-gradient(circle, rgba(60,90,220,0.45) 0%, transparent 70%)',
          animation: 'drift2 11s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,254,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,254,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="section-container relative z-10 flex flex-wrap items-center gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-[320px] flex-[1_1_480px]"
        >
          <div className="mb-7 inline-flex items-center gap-[9px] rounded-full border border-white/16 px-[13px] py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6B9FFF]" style={{ animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
            <span className="text-xs font-semibold tracking-[0.02em] text-white/75">
              Pilot program &mdash; onboarding FMCG partners for Q3 2026
            </span>
          </div>

          <h1
            className="text-[clamp(38px,6vw,68px)] font-normal italic leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
          >
            <TextBlurIn text="Do you really know what your consumer will" immediate as="span" className="block" charStagger={0.012} />
            <TextBlurIn
              text="stick to?"
              immediate
              as="span"
              className="block text-[#7FA8FF]"
              startDelay={0.5}
              charStagger={0.03}
            />
          </h1>

          <p className="mt-6 max-w-[480px] text-lg leading-[1.65] text-white/55">
            Blind sensory panels. Confidence-weighted scoring. AI-queryable panel data — so your team launches what people actually come back for.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-[26px] py-3.5 text-[15px] font-semibold text-[#000C42] transition-all hover:scale-[1.03] hover:bg-[#E5EBFF]"
            >
              Book a pilot call &rarr;
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-lg border border-white/22 px-6 py-[13px] text-[15px] font-medium text-white transition-all hover:scale-[1.03] hover:border-white/50"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-14 flex gap-10 border-t border-white/10 pt-7">
            <div>
              <span className="block font-bold text-2xl text-white" style={{ fontFamily: 'var(--font-plus-jakarta, system-ui, sans-serif)' }}>44</span>
              <span className="text-[13px] text-white/40">Panelists verified</span>
            </div>
            <div>
              <span className="block font-bold text-2xl text-white" style={{ fontFamily: 'var(--font-plus-jakarta, system-ui, sans-serif)' }}>~77%</span>
              <span className="text-[13px] text-white/40">Stickiness score (n = 44)</span>
            </div>
            <div>
              <span className="block font-bold text-2xl text-white" style={{ fontFamily: 'var(--font-plus-jakarta, system-ui, sans-serif)' }}>4</span>
              <span className="text-[13px] text-white/40">SKUs tested</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex min-w-[300px] flex-[1_1_360px] justify-center"
        >
          <div className="relative w-full max-w-[400px]">
            <div className="relative rounded-2xl bg-white p-6" style={{ boxShadow: '0 40px 80px rgba(0,4,30,0.5)' }}>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[12.5px] font-bold text-[#001081]">Stickiness Score</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#001081]/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2C6DF6]" style={{ animation: 'pulse-dot 1.6s ease-in-out infinite' }} />
                  Live scoring
                </span>
              </div>

              {SCORE_BARS.map((bar, i) => (
                <div key={bar.label} className="mb-3.5">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[12.5px] font-semibold text-[#001081]/55">{bar.label}</span>
                    <span className={`text-[12.5px] font-bold ${bar.best ? 'text-[#2C6DF6]' : 'text-[#001081]/55'}`}>
                      {bar.best ? `${Math.round(bar.value)}% · Top` : `${Math.round(bar.value)}%`}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#001081]/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${bar.value}%` }}
                      transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${bar.best ? 'bg-[#2C6DF6]' : 'bg-[#001081]'}`}
                      style={{ opacity: bar.best ? 1 : 0.3 }}
                    />
                  </div>
                </div>
              ))}

              <p className="mt-4 border-t border-[#001081]/8 pt-3.5 text-[11px] text-[#001081]/40">
                Blind protocol &middot; n = 44 verified panelists
              </p>
            </div>

            <div
              className="absolute -left-9 top-[70px] rounded-xl bg-white px-[15px] py-2.5"
              style={{ boxShadow: '0 14px 30px rgba(0,4,30,0.28)', animation: 'bob 3.2s ease-in-out infinite' }}
            >
              <span className="text-xs font-bold text-[#001081]">Confidence&#8209;weighted</span>
            </div>
            <div
              className="absolute -right-6 bottom-[26px] rounded-xl bg-white px-[15px] py-2.5"
              style={{ boxShadow: '0 14px 30px rgba(0,4,30,0.28)', animation: 'bob 2.7s ease-in-out infinite' }}
            >
              <span className="text-xs font-bold text-[#2C6DF6]">No brand cues shown</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
