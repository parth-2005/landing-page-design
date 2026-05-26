'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Factory,
  Filter,
  Lock,
  Network,
  SlidersHorizontal,
  Target,
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

import { AnimatedStat } from './animated-stat'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Scrollytelling } from '@/components/scrollytelling'
import { Deliverables } from '@/components/deliverables'
import { CaseStudy } from '@/components/case-study'
import { FirstPrinciples } from '@/components/first-principles'
import { PilotStudyResults } from '@/components/highlights'
import { Ticker } from '@/components/ticker'
import { FAQ } from '@/components/faq'

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
    stat: 'Fewer iterations',
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
    stat: 'Empirical',
  },
  {
    icon: BadgeCheck,
    title: 'Decision readiness',
    description: 'Every output is structured for procurement, product, and commercial stakeholders in the same readout.',
    stat: 'Enterprise',
  },
]

function SectionEyebrow({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
      <span className={`h-px w-8 ${dark ? 'bg-slate-600' : 'bg-slate-300'}`} />
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
            <p className="mt-1 text-sm text-slate-600">Pilot Study #001 · Cream & Onion Wafers · n=44 panelists</p>
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

        <div className="grid grid-cols-2 gap-3">
          <StatTile label="Verdict" value="Launch" />
          <AnimatedStat value={76.56} decimals={2} label="Stickiness" />
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'fixed border-b border-slate-200 bg-white/90 backdrop-blur-xl'
          : 'absolute border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-2xl border shadow-sm transition-colors ${
              scrolled ? 'border-slate-200 bg-slate-900 text-white' : 'border-white/30 bg-white/10 text-white backdrop-blur-sm'
            }`}
          >
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className={`text-sm font-semibold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>ForecastHUB</p>
            <p className={`text-xs transition-colors ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>Consumer market intelligence</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#engine" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'}`}>Engine</Link>
          <Link href="#methodology" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'}`}>Validation</Link>
          <Link href="#how-it-works" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'}`}>Methodology</Link>
          <Link href="#contact" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'}`}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#engine"
            className={`hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors sm:inline-flex ${
              scrolled
                ? 'border-slate-200 text-slate-700 hover:bg-slate-50'
                : 'border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            Explore the Engine
          </Link>
          <Link
            href="#contact"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            Book an Appointment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
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
          <TabsList className="grid h-auto w-full max-w-3xl grid-cols-3 rounded-full border border-slate-200 bg-white p-1 overflow-x-auto">
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
            Built for the teams who make the launch call.
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
              <li><Link href="#how-it-works" className="transition-colors hover:text-slate-900">How It Works</Link></li>
              <li><Link href="#methodology" className="transition-colors hover:text-slate-900">Why It Works</Link></li>
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
              Book an appointment to review the framework, the scoring model, and a live pilot readout for your category.
            </p>
            <Link href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
                Book an Appointment
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

function TrustStrip() {
  const stats = [
    { value: 44, label: 'Verified panelists', prefix: 'n=' },
    { value: 3, label: 'Academic institutions' },
    { value: 'Double-blind', label: 'Protocol' },
    { value: '4 SKUs', label: 'Tested simultaneously' },
  ]

  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            typeof stat.value === 'number' ? (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                label={stat.label}
                className="bg-slate-50 text-center shadow-none"
                labelClassName="text-[11px] text-slate-500"
                valueClassName="text-lg"
              />
            ) : (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{stat.value}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Submit your samples',
      desc: 'Send us your blind SKUs and a brief on the category, target segment, and what you want to know. No brand labels. No packaging. Just the product.',
    },
    {
      num: '02',
      title: 'Panel runs',
      desc: 'Your samples go through a structured blind sensory panel with response integrity screening built in. Noisy, inflated, or inconsistent responses are filtered before they reach the score.',
    },
    {
      num: '03',
      title: 'You receive the verdict',
      desc: 'You get three things: a scored insights report, an AI assistant trained on your panel data that you can query by question, and a set of data-grounded recommendations on what to do next.',
    },
  ]

  return (
    <section id="how-it-works" className="bg-stone-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <SectionEyebrow label="How it works" />
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">Simple process. Defensible verdicts.</h2>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-3">
          <div className="absolute top-8 left-[16%] right-[16%] hidden h-px bg-slate-200 sm:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-2xl font-semibold tracking-tight text-slate-900 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EnterpriseLanding() {
  return (
    <main id="top" className="overflow-x-clip bg-white text-slate-900">
      <TopNav />

      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-space.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-slate-950/10" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl"
          >
            <SectionEyebrow label="Consumer market intelligence" dark />
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Know which product wins before you print a single label.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              ForecastHUB runs blind sensory panels and scores your products against real commercial loyalty signals — so your R&D and brand teams make the launch call with evidence, not instinct.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100">
                 Book an Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#engine" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 backdrop-blur-sm">
                Explore the Engine
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                ['R&D & Formulation', '#rd'],
                ['Brand & Marketing', '#brand'],
                ['Category Management', '#category'],
                ['C-Suite / Commercial', '#c-suite'],
              ].map(([label, href]) => (
                <Link key={String(label)} href={String(href)} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/20 backdrop-blur-sm">
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <AnimatedStat value={44} label="Pilot sample" className="bg-white/10 border-white/10 backdrop-blur-sm" labelClassName="text-slate-400" valueClassName="text-white text-2xl" />
              <AnimatedStat value={11.2} decimals={1} label="Final score" className="bg-white/10 border-white/10 backdrop-blur-sm" labelClassName="text-slate-400" valueClassName="text-white text-2xl" />
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Delivery window</p>
                <p className="mt-2 text-base font-semibold tracking-tight text-white">Within agreed timeline</p>
              </div>
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

      <TrustStrip />
      <HowItWorks />
      <Deliverables />
      <Ticker />
      <Scrollytelling />
      <FirstPrinciples />
      <PilotStudyResults />
      <CaseStudy />
      <EngineShowroom />
      <ValueGrid />
      <FAQ />
      <Footer />
    </main>
  )
}
