'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Factory,
  Filter,
  LineChart,
  Lock,
  Microscope,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Workflow,
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Scrollytelling } from '@/components/scrollytelling'

const tickerItems = [
  { label: 'Real-Time Production Analytics', icon: Activity },
  { label: 'Response Integrity Algorithm Active', icon: ShieldCheck },
  { label: 'Predictive Customer Stickiness Scoring', icon: LineChart },
  { label: 'Untampered Offline Validation', icon: Microscope },
]

const sensoryPoints = [
  { id: 'S1', x: 11.2, y: 10.6, label: 'Conservative base' },
  { id: 'S2', x: 15.2, y: 14.1, label: 'Winning variant' },
  { id: 'S3', x: 13.4, y: 13.1, label: 'Stable mid-tier' },
  { id: 'S4', x: 10.6, y: 9.8, label: 'Texture drag' },
]

const stickinessData = [
  { name: 'Channel substitution', value: 68 },
  { name: 'Price sensitivity', value: 39 },
  { name: 'Repeat intent', value: 74 },
  { name: 'Final stickiness', value: 76.56 },
]

const valueCards = [
  {
    icon: Factory,
    title: 'Agile R&D speed',
    description: 'Compress iteration cycles from concept to verdict so product teams can move with board-level clarity.',
    stat: '72h',
  },
  {
    icon: Filter,
    title: 'Bias elimination',
    description: 'Remove brand cues, social pressure, and superficial enthusiasm before the model reaches leadership.',
    stat: '0 bias',
  },
  {
    icon: SlidersHorizontal,
    title: 'Customizable logic',
    description: 'Adjust the scoring weights for category, region, and commercial priorities without changing the architecture.',
    stat: 'Modular',
  },
  {
    icon: Target,
    title: 'Commercial precision',
    description: 'Translate sensory inputs into a defensible launch score that is easy for executive teams to act on.',
    stat: '11.2',
  },
  {
    icon: Network,
    title: 'Parallel validation',
    description: 'Offline research and software analytics run in tandem so the verdict is both empirical and operational.',
    stat: '2 tracks',
  },
  {
    icon: BadgeCheck,
    title: 'Decision readiness',
    description: 'Every output is structured for procurement, product, and commercial stakeholders in the same readout.',
    stat: 'Enterprise',
  },
]

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
      <span className="h-px w-8 bg-slate-300" />
      <span>{label}</span>
    </div>
  )
}

function HeroFormulaCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white shadow-md">
      <div className="border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Final sample score</p>
            <p className="mt-1 text-sm text-slate-600">Pilot study · n=44 · light-table dashboard</p>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            Sample 2
          </div>
        </div>
      </div>
      <div className="space-y-5 px-6 py-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MetricPill label="Base sensory" value="14" tone="slate" />
          <MetricPill label="Confidence" value="0.8" tone="blue" />
          <MetricPill label="Honesty check" value="1.0" tone="emerald" />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5">
          <div className="flex flex-wrap items-center gap-3 text-slate-700">
            <span className="font-semibold text-slate-900">Base Sensory (14)</span>
            <span className="text-slate-400">×</span>
            <span className="font-semibold text-slate-900">Confidence (0.8)</span>
            <span className="text-slate-400">×</span>
            <span className="font-semibold text-slate-900">Honesty Check (1.0)</span>
            <span className="text-slate-400">=</span>
            <span className="font-semibold text-slate-900">11.2</span>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
            <span>Clinical multiplier pipeline</span>
            <span className="font-semibold text-slate-900">Winning variant score</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <StatTile label="Verdict" value="Launch" />
          <StatTile label="Stickiness" value="76.56" />
          <StatTile label="Turnaround" value="72h" />
        </div>
      </div>
    </div>
  )
}

function MetricPill({ label, value, tone }: { label: string; value: string; tone: 'slate' | 'blue' | 'emerald' }) {
  const toneClasses = {
    slate: 'border-slate-200 bg-white text-slate-900',
    blue: 'border-slate-200 bg-blue-50 text-slate-900',
    emerald: 'border-slate-200 bg-emerald-50 text-slate-900',
  }

  return (
    <div className={`rounded-2xl border px-4 py-3 ${toneClasses[tone]}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  )
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  )
}

function SensoryMapCard() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[24px] border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Sensory mapping</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Texture / Bite versus Mouthfeel</h3>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            Clinical view
          </div>
        </div>

        <div className="relative h-[340px] rounded-2xl border border-slate-200 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:34px_34px] p-4">
          <div className="absolute left-4 top-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Mouthfeel</div>
          <div className="absolute bottom-4 right-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Texture / Bite</div>
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-300/70" />
          <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-slate-300/70" />

          {sensoryPoints.map((point) => {
            const left = ((point.x - 8) / 10) * 100
            const bottom = ((point.y - 8) / 10) * 100
            const isWinner = point.id === 'S2'

            return (
              <div
                key={point.id}
                className="absolute flex -translate-x-1/2 translate-y-1/2 flex-col items-center"
                style={{ left: `${left}%`, bottom: `${bottom}%` }}
              >
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${isWinner ? 'border-slate-900 bg-slate-900' : 'border-slate-400 bg-white'}`}
                >
                  <div className={`h-1.5 w-1.5 rounded-full ${isWinner ? 'bg-white' : 'bg-slate-500'}`} />
                </div>
                <div className="mt-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
                  {point.id}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="space-y-4 rounded-[24px] border border-gray-200 bg-slate-50 p-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Reading</p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            Sample 2 sits in the upper-right quadrant, where the texture profile and mouthfeel both clear the commercial threshold.
          </p>
        </div>

        <div className="grid gap-3">
          {sensoryPoints.map((point) => (
            <div key={point.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">{point.id}</p>
                <p className="text-xs text-slate-500">{point.label}</p>
              </div>
              <div className="text-right text-sm text-slate-600">
                <p>Texture {point.x.toFixed(1)}</p>
                <p>Mouthfeel {point.y.toFixed(1)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MultiplierCard() {
  const steps = [
    { label: 'Base sensory', value: '14.0', note: 'Raw panel score', width: '100%' },
    { label: 'Confidence', value: '0.8', note: 'Integrity multiplier', width: '80%' },
    { label: 'Honesty check', value: '1.0', note: 'No-response inflation', width: '72%' },
    { label: 'Final sample score', value: '11.2', note: 'Decision-grade output', width: '58%' },
  ]

  return (
    <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="rounded-[24px] border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">The multiplier effect</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Clinical funnel</h3>
          </div>
          <Lock className="h-4 w-4 text-slate-500" />
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={step.label} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <div className="absolute inset-y-0 left-0 bg-slate-900/5" style={{ width: step.width }} />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{step.label}</p>
                  <p className="text-xs text-slate-500">{step.note}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold tracking-tight text-slate-900">{step.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Stage {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[24px] border border-gray-200 bg-slate-50 p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Formula readout</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-slate-700">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-semibold text-slate-900">14</span>
              <span>×</span>
              <span className="rounded-full border border-slate-200 bg-blue-50 px-3 py-1 font-semibold text-slate-900">0.8</span>
              <span>×</span>
              <span className="rounded-full border border-slate-200 bg-emerald-50 px-3 py-1 font-semibold text-slate-900">1.0</span>
              <span>=</span>
              <span className="rounded-full border border-slate-900 bg-slate-900 px-3 py-1 font-semibold text-white">11.2</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-slate-700" />
              <span>Only clean, confidence-adjusted responses survive the pipeline.</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center lg:w-40">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Output</p>
            <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">11.2</div>
            <p className="mt-2 text-sm text-slate-600">Decision score</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StickinessCard() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
      <div className="rounded-[24px] border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Stickiness index</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Customer stickiness score</h3>
          </div>
          <CircleGauge className="h-4 w-4 text-slate-500" />
        </div>

        <div className="h-[320px] rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stickinessData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="rgba(148,163,184,0.22)" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
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
      </div>

      <div className="space-y-4 rounded-[24px] border border-gray-200 bg-slate-50 p-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Commercial formula</p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            Customer stickiness is read as the interaction between channel substitution and price sensitivity, then surfaced in a single board-ready number.
          </p>
        </div>

        <div className="grid gap-3">
          {stickinessData.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">Enterprise readout</p>
                </div>
                <p className="text-lg font-semibold text-slate-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-sm">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-900">ForecastHUB</p>
            <p className="text-xs text-slate-500">Consumer market intelligence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {['Engine', 'Validation', 'Methodology', 'Contact'].map((item) => (
            <Link key={item} href="#engine" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#engine"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:inline-flex"
          >
            Explore the Engine
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

function Ticker() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-gray-100">
      <div className="flex w-[200%] animate-[tkr_28s_linear_infinite] items-center">
        {[0, 1].map((repeat) => (
          <div key={repeat} className="flex w-1/2 items-center gap-8 px-6 py-4 lg:px-10">
            {tickerItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={`${repeat}-${item.label}`} className="flex items-center gap-3 whitespace-nowrap text-slate-700">
                  <Icon className="h-4 w-4 text-slate-500" />
                  <span className="text-sm font-medium tracking-tight">{item.label}</span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}

function ParallelArchitecture() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <SectionEyebrow label="Parallel architecture" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            Two tracks. One verdict. Offline validation feeds the production engine without dilution.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Untampered offline validation</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">The fuel</h3>
              </div>
              <Microscope className="h-5 w-5 text-slate-500" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Double-blind sensory capture',
                'No brand cue contamination',
                'Response integrity screening',
                'Confidence-adjusted scoring',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Production engine</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">The brain</h3>
              </div>
              <Workflow className="h-5 w-5 text-slate-500" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Operational scoring logic',
                'Custom weights by category',
                'Board-readable decision output',
                'Launch / reformulate / stop',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EngineShowroom() {
  return (
    <section id="engine" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <SectionEyebrow label="Inside the engine" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            A product tour that reads like a financial terminal, not a consumer gimmick.
          </h2>
        </motion.div>

        <Tabs defaultValue="sensory" className="gap-6">
          <TabsList className="grid h-auto w-full max-w-3xl grid-cols-3 rounded-full border border-slate-200 bg-white p-1">
            <TabsTrigger value="sensory" className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">
              Sensory mapping
            </TabsTrigger>
            <TabsTrigger value="multiplier" className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">
              Multiplier effect
            </TabsTrigger>
            <TabsTrigger value="stickiness" className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">
              Stickiness index
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sensory" className="mt-6">
            <SensoryMapCard />
          </TabsContent>

          <TabsContent value="multiplier" className="mt-6">
            <MultiplierCard />
          </TabsContent>

          <TabsContent value="stickiness" className="mt-6">
            <StickinessCard />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ValueGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <SectionEyebrow label="Value proposition" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            Architectural bento grid for executive clarity.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {valueCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                    {card.stat}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-900 text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">ForecastHUB</p>
                <p className="text-xs text-slate-500">Enterprise consumer intelligence</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              A formal, data-pure operating layer for FMCG teams that need faster formulation decisions and more defensible launches.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Platform</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="#engine" className="transition-colors hover:text-slate-900">The Engine</Link></li>
              <li><Link href="#top" className="transition-colors hover:text-slate-900">Hero</Link></li>
              <li><Link href="#contact" className="transition-colors hover:text-slate-900">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Capabilities</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Offline validation</li>
              <li>Production analytics</li>
              <li>Custom scoring logic</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Enterprise</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Book a demo to review the framework, the scoring model, and a live pilot readout for your category.
            </p>
            <Link href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
              Book a Demo
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 ForecastHUB. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="#" className="transition-colors hover:text-slate-900">Privacy</Link>
            <Link href="#" className="transition-colors hover:text-slate-900">Security</Link>
            <Link href="#" className="transition-colors hover:text-slate-900">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function EnterpriseLanding() {
  return (
    <main id="top" className="overflow-x-clip bg-white text-slate-900">
      <TopNav />

      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl"
          >
            <SectionEyebrow label="Consumer market intelligence" />
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
              Launch FMCG Products with Deterministic Precision.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
              The intelligent production engine that transforms raw sensory data into predictive market success. Stop guessing. Start dominating the shelf.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#engine" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                Explore the Engine
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                ['Pilot sample', 'n=44'],
                ['Final score', '11.2'],
                ['Delivery window', '72 hours'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative z-10"
          >
            <HeroFormulaCard />
          </motion.div>
        </div>
      </section>

      <Ticker />
      <ParallelArchitecture />
      <Scrollytelling />
      <ValueGrid />
      <Footer />
    </main>
  )
}
