'use client'

import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  Factory,
  Gauge,
  Mic,
  Microscope,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Insights', href: '#insights' },
  { label: 'Pilot Results', href: '#pilot-results' },
  { label: 'About', href: '#about' },
]

const trustCards = [
  {
    eyebrow: 'Industry pulse',
    title: 'New product failure rates still sit around 70-80 percent.',
    copy: 'Logiq helps FMCG teams cut through launch noise and find the SKU that can actually scale.',
  },
  {
    eyebrow: 'Decision lens',
    title: 'Blind sensory testing removes the brand halo from the room.',
    copy: 'Products win on merit, not packaging, memory, or social pressure.',
  },
  {
    eyebrow: 'Commercial signal',
    title: 'Commercial stickiness separates curiosity from real repeat intent.',
    copy: 'That is the difference between a nice tasting sample and a launchable winner.',
  },
]

const highlightCards = [
  {
    icon: Microscope,
    title: 'Blind by design',
    copy: 'Run premium sensory sessions with packaging removed, cue bias reduced, and the product left to stand on its own.',
    stat: 'No brand halo',
  },
  {
    icon: Target,
    title: 'One clean verdict',
    copy: 'See which prototypes have sensory strength and which ones hold commercial confidence before launch teams commit.',
    stat: 'Clear winner',
  },
  {
    icon: TrendingUp,
    title: 'Predictive, not decorative',
    copy: 'Logiq turns panel feedback into a commercial readout that helps R&D and marketing make faster decisions.',
    stat: 'Board ready',
  },
  {
    icon: ShieldCheck,
    title: 'Built for FMCG nuance',
    copy: 'Designed for snacks and packaged goods where texture, repeatability, and shelf confidence matter most.',
    stat: 'Category aware',
  },
]

const storySteps = [
  {
    step: '01',
    title: 'Recruit the right consumers',
    copy: 'Logiq starts with the shoppers who matter for your category, so the room reflects the buying reality you care about.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Run a blind sensory session',
    copy: 'Panelists evaluate the product with no packaging cues, no shelf theater, and no brand bias in the way.',
    icon: Microscope,
  },
  {
    step: '03',
    title: 'Translate feedback into signal',
    copy: 'Taste, texture, aroma, and repeat cues are distilled into a concise readout that leadership can trust.',
    icon: BarChart3,
  },
  {
    step: '04',
    title: 'Surface the launch call',
    copy: 'The final view shows whether to scale, refine, or stop, with enough clarity for R&D and brand teams to move together.',
    icon: BadgeCheck,
  },
]

const advantageBlocks = [
  {
    title: 'Base score',
    copy: 'Sensory quality on the fundamentals: taste, bite, aroma, and mouthfeel.',
    items: [
      { label: 'Taste', value: 92 },
      { label: 'Crunch', value: 88 },
      { label: 'Aroma', value: 84 },
      { label: 'Finish', value: 79 },
    ],
    accent: 'from-slate-900 to-slate-700',
    score: 'Strong',
  },
  {
    title: 'Stickiness score',
    copy: 'How likely the product is to hold repeat purchase and commercial traction after the first bite.',
    items: [
      { label: 'Repeat intent', value: 76 },
      { label: 'Price loyalty', value: 68 },
      { label: 'Channel pull', value: 71 },
      { label: 'Switch resistance', value: 64 },
    ],
    accent: 'from-emerald-500 to-emerald-400',
    score: 'High',
  },
]

const pilotData = [
  { sample: 'Sample 2', preference: 91, stickiness: 76.56 },
  { sample: 'Sample 4', preference: 63, stickiness: 58 },
]

const pilotFacts = [
  { label: 'Blind panelists', value: '44' },
  { label: 'Best sample', value: 'Sample 2' },
  { label: 'Sensory lift', value: '+6.09' },
  { label: 'Price loyalty', value: '68%' },
]

const consumerQuotes = [
  {
    quote: 'Sample 2 feels premium from the first bite and stays clean through the finish.',
    source: 'Consumer, blind panel',
  },
  {
    quote: 'I would buy this again. It tastes more finished and less experimental than the others.',
    source: 'Consumer, blind panel',
  },
  {
    quote: 'Sample 4 is pleasant at first, but it does not hold the same repeat pull.',
    source: 'Consumer, blind panel',
  },
]

const personas = [
  {
    icon: BriefcaseBusiness,
    title: 'Brand managers',
    copy: 'Choose the launch story with confidence and stop relying on noisy gut feel alone.',
  },
  {
    icon: Factory,
    title: 'R&D heads',
    copy: 'See which formulations are worth iterating and which ones are already close to scale.',
  },
  {
    icon: Gauge,
    title: 'Category managers',
    copy: 'Read the commercial fit of each prototype across performance, price tolerance, and repeat behavior.',
  },
  {
    icon: Mic,
    title: 'Marketing teams',
    copy: 'Align launch claims with the product reality so the shelf promise feels credible from day one.',
  },
]

const faqs = [
  {
    q: 'What kind of brands is Logiq built for?',
    a: 'Logiq is designed for FMCG teams, especially snack and packaged food brands that need to compare prototypes quickly and make a launch call with more confidence.',
  },
  {
    q: 'How many products can you compare in one pilot?',
    a: 'We typically start with a handful of SKUs so the readout stays clear. The framework can scale, but the goal is always a confident decision rather than a crowded report.',
  },
  {
    q: 'Does the study remove brand bias?',
    a: 'Yes. The experience is blind by default, which means consumers are responding to the product itself instead of packaging, brand recognition, or marketing cues.',
  },
  {
    q: 'What do we get after the pilot?',
    a: 'You get a visual verdict, pilot charts, key consumer signals, and a decision-ready summary that R&D and brand teams can use together.',
  },
  {
    q: 'Can Logiq support a category beyond snacks?',
    a: 'Yes. The framework is built for FMCG decision making and can be adapted to other categories where repeat purchase is driven by sensory response.',
  },
]

const initialDemoState = {
  name: '',
  company: '',
  email: '',
  category: 'Snacks',
  notes: '',
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">
      <span className="h-px w-8 bg-slate-300" />
      <span>{label}</span>
    </div>
  )
}

function SectionHeading({
  label,
  title,
  copy,
}: {
  label: string
  title: string
  copy?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.65 }}
      className="max-w-3xl"
    >
      <SectionLabel label={label} />
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl font-[family-name:var(--font-plus-jakarta)]">
        {title}
      </h2>
      {copy ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{copy}</p> : null}
    </motion.div>
  )
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight">{value}</p>
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  copy,
  stat,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  copy: string
  stat: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55 }}
      className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
          {stat}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
    </motion.article>
  )
}

function StepsCard({
  step,
  title,
  copy,
  icon: Icon,
}: {
  step: string
  title: string
  copy: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55 }}
      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">{step}</span>
        <Icon className="h-5 w-5 text-emerald-600" />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
    </motion.article>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState(initialDemoState)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-950">
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? 'border-slate-200/80 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl' : 'border-transparent bg-white/70 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/10">
              L
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">Logiq</p>
              <p className="text-xs text-slate-500">Premium blind sensory intelligence</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4.5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden scroll-mt-28 px-6 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(30,58,138,0.12),transparent_24%),linear-gradient(180deg,rgba(248,250,252,1),rgba(255,255,255,1))]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Logiq for FMCG launches
              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl font-[family-name:var(--font-plus-jakarta)]">
                Know which products will win, before they launch.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                Blind sensory testing combined with real commercial stickiness scoring for smarter FMCG decisions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="#pilot-results"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  View Pilot Results
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">Built for brand managers</span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">Trusted by R&D teams</span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">Made for FMCG decision rooms</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="relative min-h-[580px] overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-[0_40px_120px_rgba(15,23,42,0.18)]"
            >
              <Image
                src="/images/hero-space.jpg"
                alt="Abstract launch backdrop for Logiq"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.82))]" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute left-5 top-5 w-fit rounded-2xl border border-white/20 bg-white/92 px-4 py-3 text-slate-900 shadow-[0_18px_55px_rgba(15,23,42,0.18)] backdrop-blur-xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Consumers tested</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">40+</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute right-5 top-8 w-fit rounded-2xl border border-white/20 bg-white/92 px-4 py-3 text-slate-900 shadow-[0_18px_55px_rgba(15,23,42,0.18)] backdrop-blur-xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Prediction accuracy</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">85%+</p>
              </motion.div>

              <div className="absolute inset-x-5 bottom-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/18 bg-white/92 p-5 text-slate-900 shadow-[0_18px_55px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Pilot readout</p>
                      <p className="mt-1 text-lg font-semibold tracking-tight font-[family-name:var(--font-plus-jakarta)]">Sample 2 leads the blind test</p>
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                      Winner
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Sensory lift</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">+6.09</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Stickiness</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">76.56</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <StatPill label="Base score" value="14.0" />
                  <StatPill label="Commercial confidence" value="Decision ready" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-6 lg:px-10 lg:py-8">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-slate-200 bg-white px-6 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.04)] lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr_1.1fr_1.1fr] lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.55 }}
                className="rounded-[24px] bg-slate-950 p-5 text-white"
              >
                <SectionLabel label="Trust / news" />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight font-[family-name:var(--font-plus-jakarta)]">
                  The next launch should not depend on guesswork.
                </h2>
              </motion.div>

              {trustCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{card.eyebrow}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="scroll-mt-28 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Why Logiq"
              title="A calmer way to read product truth, not just product noise."
              copy="Designed for premium FMCG teams that want a visual, elegant decision layer without the clutter of clinical dashboards."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {highlightCards.map((card) => (
                <FeatureCard key={card.title} icon={card.icon} title={card.title} copy={card.copy} stat={card.stat} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-28 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="How it works"
              title="A scrollytelling flow that feels like a premium pilot, not a technical manual."
              copy="Four clear steps. One editorial story. Enough evidence to move from concept to launch call without overexplaining the math."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.65 }}
                className="lg:sticky lg:top-28 lg:h-fit"
              >
                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
                  <Image
                    src="/images/hero-space.jpg"
                    alt="Logiq process backdrop"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.84))]" />
                  <div className="relative">
                    <SectionLabel label="Story arc" />
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight font-[family-name:var(--font-plus-jakarta)]">
                      From blind sample to board-ready verdict.
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                      The visual flow keeps the experience calm and obvious: recruit the right shoppers, test blind, score what matters, and leave with one launch decision.
                    </p>

                    <div className="mt-8 space-y-3">
                      {storySteps.map((step) => (
                        <div key={step.step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-sm font-semibold">{step.step}</span>
                          <span className="text-sm font-medium text-white/90">{step.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {storySteps.map((step) => (
                  <StepsCard key={step.step} step={step.step} title={step.title} copy={step.copy} icon={step.icon} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="The Logiq advantage"
              title="Base score and stickiness score, shown as a simple commercial story."
              copy="Two views, one decision. The base score shows sensory quality. The stickiness score shows whether that quality can carry into repeat buying and launch confidence."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {advantageBlocks.map((block) => (
                <motion.article
                  key={block.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_22px_80px_rgba(15,23,42,0.05)]"
                >
                  <div className={`bg-gradient-to-r ${block.accent} px-6 py-5 text-white`}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">{block.title}</p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <p className="text-4xl font-semibold tracking-tight font-[family-name:var(--font-plus-jakarta)]">{block.score}</p>
                      <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90">
                        Simple readout
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-7 text-slate-600">{block.copy}</p>
                    <div className="mt-6 space-y-4">
                      {block.items.map((item) => (
                        <div key={item.label}>
                          <div className="flex items-center justify-between gap-4 text-sm">
                            <span className="font-medium text-slate-700">{item.label}</span>
                            <span className="font-semibold text-slate-950">{item.value}%</span>
                          </div>
                          <div className="mt-2 h-2 rounded-full bg-slate-100">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${block.accent}`}
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">No heavy formulas</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">One number for sensory and commercial teams</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">Fast enough for active launch cycles</span>
            </div>
          </div>
        </section>

        <section id="pilot-results" className="scroll-mt-28 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Pilot results"
              title="The pilot produced a clear winner and a clear commercial story."
              copy="Sample 2 led the blind test, delivered the strongest sensory lift, and carried the most convincing stickiness score. Sample 4 trailed on repeat intent and finished with a weaker commercial signal."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6 }}
                className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_22px_80px_rgba(15,23,42,0.05)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Pilot Study #001</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">
                      Blind wafer pilot readout
                    </h3>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    Sample 2 wins
                  </span>
                </div>

                <div className="mt-6 h-[360px] rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pilotData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                      <CartesianGrid stroke="rgba(148,163,184,0.18)" vertical={false} />
                      <XAxis dataKey="sample" tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                      <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: '1px solid rgb(226,232,240)',
                          borderRadius: '16px',
                          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
                        }}
                        labelStyle={{ color: '#0f172a', fontWeight: 600 }}
                      />
                      <Bar dataKey="preference" name="Preference" radius={[10, 10, 0, 0]} fill="#1e3a8a" />
                      <Bar dataKey="stickiness" name="Stickiness" radius={[10, 10, 0, 0]} fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {pilotFacts.map((fact) => (
                    <div key={fact.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{fact.label}</p>
                      <p className="mt-2 text-lg font-semibold tracking-tight text-slate-950">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-6">
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_22px_80px_rgba(15,23,42,0.12)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">Commercial readout</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight font-[family-name:var(--font-plus-jakarta)]">
                    Sample 2 is the one you scale.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    It led the blind test, posted the strongest lift, and delivered the healthiest stickiness score in the pilot.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">Winner</p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight">Sample 2</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">Weakest comparator</p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight">Sample 4</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[24px] border border-white/10 bg-white/8 px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">What stood out</p>
                    <div className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                      <div className="rounded-2xl bg-black/10 px-4 py-3">+6.09 sensory lift</div>
                      <div className="rounded-2xl bg-black/10 px-4 py-3">76.56 stickiness score</div>
                      <div className="rounded-2xl bg-black/10 px-4 py-3">68% price loyalty</div>
                      <div className="rounded-2xl bg-black/10 px-4 py-3">-1.41 on Sample 4</div>
                    </div>
                  </div>
                </motion.article>

                <div className="grid gap-4 sm:grid-cols-3">
                  {consumerQuotes.map((quote, index) => (
                    <motion.article
                      key={quote.quote}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ duration: 0.55, delay: index * 0.05 }}
                      className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.04)]"
                    >
                      <p className="text-sm leading-7 text-slate-700">“{quote.quote}”</p>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{quote.source}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Who it's for"
              title="Made for the teams that have to answer for launch decisions."
              copy="Logiq keeps the experience premium and the readout calm, so each stakeholder sees the part of the verdict they need most."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {personas.map((persona) => (
                <motion.article
                  key={persona.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.55 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
                    <persona.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">{persona.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{persona.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_22px_80px_rgba(15,23,42,0.05)] lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel label="About Logiq" />
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl font-[family-name:var(--font-plus-jakarta)]">
                  Built to make FMCG launch decisions feel calm, clear, and defensible.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  Logiq combines blind sensory testing with predictive consumer intelligence, giving brand and R&D teams one premium view of what will work on shelf and what should be refined first.
                </p>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  'Independent and blind by default',
                  'Designed for category nuance',
                  'Ready for fast leadership reviews',
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-5">
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="FAQ"
              title="The questions teams ask before they book the first call."
            />

            <div className="mt-12 max-w-4xl">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.q}
                    value={`faq-${index}`}
                    className="rounded-[24px] border border-slate-200 bg-white px-6 shadow-[0_16px_50px_rgba(15,23,42,0.04)]"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-950 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-7 text-slate-600">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-6 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,rgba(30,58,138,0.05),rgba(16,185,129,0.08))] px-8 py-10 shadow-[0_26px_90px_rgba(15,23,42,0.06)] lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <SectionLabel label="Final CTA" />
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl font-[family-name:var(--font-plus-jakarta)]">
                  Bring the next launch into the room before it hits the shelf.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Book a Logiq demo to review the pilot format, see the scoring flow, and explore how the model would work for your category.
                </p>
              </motion.div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="#home"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to top
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Logiq. Premium blind sensory and predictive consumer intelligence.</p>
          <p>Built for FMCG teams that want clarity before launch.</p>
        </div>
      </footer>

      <Dialog open={demoOpen} onOpenChange={(open) => {
        setDemoOpen(open)
        if (!open) {
          setSubmitted(false)
          setFormData(initialDemoState)
        }
      }}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[28px] border-slate-200 p-0 sm:max-w-3xl">
          <div className="border-b border-slate-200 bg-[linear-gradient(135deg,rgba(30,58,138,0.05),rgba(16,185,129,0.08))] px-6 py-5 sm:px-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">
                Request a Logiq demo
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm leading-7 text-slate-600">
                Share a few details and we’ll show you how Logiq can frame the next FMCG launch decision.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_0.82fr]">
            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6 sm:px-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Name
                  <input
                    value={formData.name}
                    onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Company
                  <input
                    value={formData.company}
                    onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                    placeholder="Company name"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Work email
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                    placeholder="name@company.com"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Category
                  <select
                    value={formData.category}
                    onChange={(event) => setFormData((current) => ({ ...current, category: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                  >
                    <option>Snacks</option>
                    <option>Biscuits</option>
                    <option>Beverages</option>
                    <option>Dairy</option>
                    <option>Personal care</option>
                    <option>Other FMCG</option>
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                What are you launching?
                <textarea
                  value={formData.notes}
                  onChange={(event) => setFormData((current) => ({ ...current, notes: event.target.value }))}
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
                  placeholder="New SKU, reformulation, pack change, or pilot brief"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Send request
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 lg:border-t-0 lg:border-l sm:px-8">
              {submitted ? (
                <div className="rounded-[24px] border border-emerald-200 bg-white p-6 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">Request received</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 font-[family-name:var(--font-plus-jakarta)]">
                    We will follow up with a pilot discussion.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Thanks for sharing your details. We will use them to prepare a relevant demo for your category and launch timeline.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDemoOpen(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">What you will see</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                      <li>• The blind testing flow and what panelists see.</li>
                      <li>• How the base score and stickiness score are read.</li>
                      <li>• A pilot summary tailored to your category.</li>
                    </ul>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Ideal for</p>
                    <div className="mt-4 space-y-3 text-sm text-slate-700">
                      <p>Brand managers planning a new launch.</p>
                      <p>R&D teams comparing prototype winners.</p>
                      <p>Category teams looking for a cleaner yes or no.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
