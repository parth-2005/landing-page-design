'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRightLeft,
  CheckCircle2,
  CircleSlash2,
  LineChart,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
  TrendingUp,
} from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const rawInputs = [
  { label: 'Texture', value: '14', tone: 'bg-slate-900 text-white' },
  { label: 'Bite behaviour', value: '13', tone: 'bg-white text-slate-900 border border-slate-200' },
  { label: 'Mouthfeel', value: '12', tone: 'bg-slate-50 text-slate-900 border border-slate-200' },
  { label: '44 participants', value: 'n=44', tone: 'bg-blue-50 text-slate-900 border border-slate-200' },
]

const integritySteps = [
  { label: 'Honesty check', value: '1.0', note: 'Responses retained' },
  { label: 'Confidence', value: '0.8', note: 'Weighted for quality' },
  { label: 'Clean sample', value: '11.2', note: 'Final sample score' },
]

const stickinessData = [
  { name: 'Channel substitution', value: 68 },
  { name: 'Price sensitivity', value: 39 },
  { name: 'Repeat intent', value: 74 },
  { name: 'Final stickiness', value: 76.56 },
]

function StageTitle({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Inside the engine</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">{summary}</p>
    </div>
  )
}

function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-md">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          ForecastHUB / Live Engine
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function FuelDashboard({ progress }: { progress: any }) {
  const outerOpacity = useTransform(progress, [0, 0.22, 0.34], [1, 1, 0])
  const rawOpacity = useTransform(progress, [0, 0.18, 0.28], [1, 1, 0.18])
  const rawY = useTransform(progress, [0, 0.28], [0, -18])

  return (
    <motion.div className="absolute inset-0 p-5" style={{ opacity: outerOpacity }}>
      <motion.div style={{ y: rawY }} className="h-full rounded-[24px] border border-slate-200 bg-slate-50 p-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Track 1</p>
            <h4 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Untampered Offline Validation</h4>
          </div>
          <ShieldCheck className="h-5 w-5 text-slate-500" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
            <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
              <span>Raw sensory feed</span>
              <span className="font-semibold text-slate-900">44 participant blind test</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {rawInputs.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`rounded-2xl px-4 py-4 text-sm font-semibold ${item.tone}`}
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-current">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            style={{ opacity: rawOpacity }}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Clinical readout</p>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Texture to bite coherence</span>
                <span className="font-semibold text-slate-900">92%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[92%] rounded-full bg-slate-900" />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: rawOpacity }}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Signal status</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
              <CircleSlash2 className="h-4 w-4 text-slate-500" />
              Brand cues removed
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-700">
              <Sparkles className="h-4 w-4 text-slate-500" />
              Clean panel input only
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function MultiplierDashboard({ progress }: { progress: any }) {
  const outerOpacity = useTransform(progress, [0.28, 0.48, 0.68], [0, 1, 1])
  const rawScale = useTransform(progress, [0.28, 0.48, 0.66], [0.98, 1, 0.96])
  const cleanWidth = useTransform(progress, [0.34, 0.56, 0.68], ['32%', '72%', '88%'])

  return (
    <motion.div className="absolute inset-0 p-5" style={{ opacity: outerOpacity }}>
      <motion.div style={{ scale: rawScale }} className="h-full rounded-[24px] border border-slate-200 bg-slate-50 p-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">The Response Integrity Algorithm</p>
            <h4 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">The Multiplier Stage</h4>
          </div>
          <SlidersHorizontal className="h-5 w-5 text-slate-500" />
        </div>

        <div className="grid gap-3 md:grid-cols-[1fr_0.92fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Cleansing funnel</p>
            <div className="mt-4 space-y-3">
              {integritySteps.map((step, index) => (
                <div key={step.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-slate-700">{step.label}</span>
                    <span className="font-semibold text-slate-900">{step.value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <motion.div
                      className="h-2 rounded-full bg-slate-900"
                      style={{ width: index === 0 ? '100%' : index === 1 ? '80%' : cleanWidth }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{step.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Normalized output</p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Base sensory</span>
                <span className="font-semibold text-slate-900">14</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <span>Honesty check</span>
                <span className="font-semibold text-slate-900">1.0</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <span>Confidence</span>
                <span className="font-semibold text-slate-900">0.8</span>
              </div>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Final sample score</p>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">11.2</p>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function BrainDashboard({ progress }: { progress: any }) {
  const outerOpacity = useTransform(progress, [0.62, 0.8, 1], [0, 1, 1])
  const chartOpacity = useTransform(progress, [0.64, 0.84, 1], [0.5, 1, 1])

  return (
    <motion.div className="absolute inset-0 p-5" style={{ opacity: outerOpacity }}>
      <div className="h-full rounded-[24px] border border-slate-200 bg-slate-50 p-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Track 2</p>
            <h4 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">The Production Engine</h4>
          </div>
          <TrendingUp className="h-5 w-5 text-slate-500" />
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_0.88fr]">
          <motion.div style={{ opacity: chartOpacity }} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Customer stickiness tracker</p>
            <div className="mt-3 h-[260px] rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stickinessData} margin={{ top: 8, right: 4, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(148,163,184,0.2)" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid rgb(226,232,240)',
                      borderRadius: '14px',
                      boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
                    }}
                    labelStyle={{ color: '#0f172a', fontWeight: 600 }}
                  />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#0f172a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="grid gap-3">
            {stickinessData.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">Production score</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold tracking-tight text-slate-900">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-4 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Verdict</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">Launch-ready SKU</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const fuelTextOpacity = useTransform(scrollYProgress, [0, 0.22, 0.33], [1, 1, 0.2])
  const multiplierTextOpacity = useTransform(scrollYProgress, [0.26, 0.46, 0.67], [0.2, 1, 0.2])
  const brainTextOpacity = useTransform(scrollYProgress, [0.61, 0.8, 1], [0.2, 1, 1])

  return (
    <section ref={containerRef} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="space-y-[26vh] pb-[20vh] lg:pt-10">
            <motion.div style={{ opacity: fuelTextOpacity }} className="max-w-md">
              <StageTitle
                title="Track 1: Untampered Offline Validation."
                summary="The blind panel enters the system as raw sensory evidence. No branding. No theater. Just controlled, clinical inputs from the 44-participant study."
              />
            </motion.div>

            <motion.div style={{ opacity: multiplierTextOpacity }} className="max-w-md">
              <StageTitle
                title="The Response Integrity Algorithm."
                summary="The sample is filtered through honesty and confidence multipliers so weak, inflated, or noisy responses do not reach the executive readout."
              />
            </motion.div>

            <motion.div style={{ opacity: brainTextOpacity }} className="max-w-md">
              <StageTitle
                title="Track 2: The Production Engine."
                summary="The cleaned signal becomes a customer stickiness tracker that ranks channel substitution, price sensitivity, and repeat intent for launch decisions."
              />
            </motion.div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <DashboardShell>
              <div className="relative min-h-[560px]">
                <FuelDashboard progress={scrollYProgress} />
                <MultiplierDashboard progress={scrollYProgress} />
                <BrainDashboard progress={scrollYProgress} />
              </div>
            </DashboardShell>
          </div>
        </div>
      </div>
    </section>
  )
}