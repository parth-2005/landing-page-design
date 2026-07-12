'use client'

import { RESULT_STATS } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

export function ResultsSection() {
  const [featured, ...rest] = RESULT_STATS

  return (
    <section id="results" className="border-t border-[#001081]/7 bg-[#FFFEFF] py-[110px]">
      <div className="section-container">
        <Reveal variant="fade-up" className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <div className="max-w-[460px]">
            <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2C6DF6]">
              Pilot Findings
            </p>
            <h2
              className="text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.02em] text-[#001081]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              What the first cohort told us.
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] text-[#001081]/45">
            Signals from our Q1 2026 blind sensory pilot — 44 verified panelists, four SKUs, one category.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr]">
          {featured && (
            <Reveal variant="fade-scale" className="rounded-2xl bg-[#F2F3F3] p-8">
              <div
                className="text-[64px] leading-none font-bold text-[#001081]"
                style={{ fontFamily: 'var(--font-plus-jakarta)' }}
              >
                {featured.value}
              </div>
              <p className="mt-4 mb-1 text-[15px] font-bold text-[#001081]">{featured.label}</p>
              <p className="text-[13.5px] text-[#001081]/45">{featured.desc}</p>
            </Reveal>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            {rest.map((stat, i) => (
              <Reveal key={stat.label} variant="fade-up" delay={0.1 + i * 0.1} className="border-l border-[#001081]/10 pl-7">
                <div
                  className="text-[44px] font-bold text-[#001081]"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {stat.value}
                </div>
                <p className="mt-3 mb-1 text-[14.5px] font-bold text-[#001081]">{stat.label}</p>
                <p className="text-[13px] text-[#001081]/45">{stat.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-10 text-[12.5px] text-[#001081]/35">
          Single-category pilot data. Full methodology and raw panel data available under NDA.
        </p>
      </div>
    </section>
  )
}
