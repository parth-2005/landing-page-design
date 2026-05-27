'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Bot,
  ChevronRight,
  Code2,
  FileText,
  Linkedin,
  Menu,
  MessageCircle,
  Search,
  Send,
  Sparkles,
  TrendingUp,
  Twitter,
  X,
} from 'lucide-react'
import { ChatWidget } from '@/components/chat-widget'

const NAV_ITEMS = ['Insights', 'Solutions', 'Research', 'Contact'] as const

type InsightStat = {
  value: number
  suffix?: string
  label: string
  desc: string
  prefix?: string
  decimals?: number
}

const HERO_BACKGROUND = 'linear-gradient(135deg, #001081 0%, #0A1A8F 40%, #1330A5 100%)'
const JOIN_BACKGROUND = 'linear-gradient(135deg, #001081 0%, #0A1A8F 50%, #1330A5 100%)'
const FOOTER_BACKGROUND = 'linear-gradient(180deg, #001081 0%, #000C60 100%)'

const INSIGHT_STATS: InsightStat[] = [
  { value: 68, suffix: '%', label: 'Price Loyalty', desc: 'Consumers willing to pay more for preferred taste' },
  { value: 39, suffix: '%', label: 'Walk-to-Shop', desc: 'Will switch stores for their product of choice' },
  { value: 39, suffix: '%', label: 'Walk-to-Brand', desc: 'Will switch stores for their product of choice' },
]

const TRENDING_ARTICLES = [
  {
    image: '/images/blog/consumer-behaviour.png',
    tag: 'Research',
    title: 'Consumer Behaviour Patterns in FMCG',
    excerpt: 'How sensory preferences and purchase habits are shifting across urban Indian markets.',
    href: '/blogs',
  },
  {
    image: '/images/blog/taste-texture.png',
    tag: 'Framework',
    title: 'Taste vs Texture: What Drives Stickiness?',
    excerpt: 'Breaking down the two biggest drivers of repeat purchase intent from our blind panels.',
    href: '/blogs',
  },
  {
    image: '/images/blog/pricing-loyalty.png',
    tag: 'Insights',
    title: 'Pricing & Loyalty Dynamics',
    excerpt: '68% of consumers showed price loyalty. But what does that really mean for your margin strategy?',
    href: '/blogs',
  },
  {
    image: '/images/blog/channel-substitution.png',
    tag: 'Report',
    title: 'Channel Substitution in FMCG',
    excerpt: '39% are willing to switch stores. What this means for distribution and shelf strategy.',
    href: '/blogs',
  },
] as const

const FULL_VIEW_FEATURES = [
  'Blind sensory testing eliminates brand bias',
  'Stickiness scoring predicts commercial loyalty',
  'AI-queryable panel data at your fingertips',
  'Clear verdict: launch, reformulate, or stop',
] as const

const FULL_VIEW_POINTS = [
  { top: '8%', left: '55%', label: 'Taste' },
  { top: '30%', right: '5%', label: 'Price' },
  { bottom: '20%', right: '10%', label: 'Texture' },
  { bottom: '8%', left: '35%', label: 'Channel' },
  { top: '25%', left: '2%', label: 'Loyalty' },
] as const

const SOLUTIONS = [
  {
    icon: FileText,
    title: 'Insights & Reports',
    desc: 'Comprehensive scored reports from blind sensory panels — delivered with commercial context, not academic jargon.',
    span: 'lg:col-span-2',
    gradient: 'from-[#001081] to-[#0A1A8F]',
    textColor: 'text-white',
    descColor: 'text-white/60',
    iconBg: 'bg-white/15',
  },
  {
    icon: Code2,
    title: 'API Access',
    desc: 'Integrate stickiness scores and panel data directly into your product and analytics pipelines.',
    span: '',
    gradient: 'from-[#F2F3F3] to-[#E8E9EA]',
    textColor: 'text-[#001081]',
    descColor: 'text-[#001081]/50',
    iconBg: 'bg-[#2C6DF6]/10',
  },
  {
    icon: Bot,
    title: 'RAG AI Assistant',
    desc: 'Query your panel data conversationally. Ask questions, get scored answers grounded in your own research.',
    span: '',
    gradient: 'from-[#F2F3F3] to-[#E8E9EA]',
    textColor: 'text-[#001081]',
    descColor: 'text-[#001081]/50',
    iconBg: 'bg-[#2C6DF6]/10',
  },
  {
    icon: TrendingUp,
    title: 'Custom Research',
    desc: 'Bespoke consumer studies tailored to your category, geography, and commercial questions. Scoped to your brief, delivered with a defensible verdict.',
    span: 'lg:col-span-2',
    gradient: 'from-[#2C6DF6] to-[#1A5AE0]',
    textColor: 'text-white',
    descColor: 'text-white/65',
    iconBg: 'bg-white/20',
  },
] as const

const CHAT_SUGGESTIONS = [
  "What's consumer stickiness?",
  'Show me pricing data',
  'Compare taste vs texture',
] as const

const FOOTER_LINKS = {
  Platform: [
    { label: 'Insights Dashboard', href: '#insights' },
    { label: 'API Access', href: '#solutions' },
    { label: 'RAG Assistant', href: '#solutions' },
    { label: 'Data Explorer', href: '#solutions' },
  ],
  Solutions: [
    { label: 'Sensory Testing', href: '#solutions' },
    { label: 'Stickiness Scoring', href: '#solutions' },
    { label: 'Custom Research', href: '#solutions' },
    { label: 'Industry Reports', href: '#research' },
  ],
  Company: [
    { label: 'About', href: '#contact' },
    { label: 'Careers', href: 'mailto:careers@forecasthub.in' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

/* ─────────────────── ANIMATED COUNTER ─────────────────── */
function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2000,
}: {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = eased * target
      setValue(start)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ─────────────────── TOP NAV ─────────────────── */
function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkStyle = scrolled
    ? 'text-[#001081]/70 hover:text-[#001081]'
    : 'text-white/80 hover:text-white'

  return (
    <header
      id="top-nav"
      className={`top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'fixed border-b border-[#001081]/8 bg-[#FFFEFF]/92 backdrop-blur-xl'
          : 'absolute bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between gap-6 py-4">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-sm transition-colors ${
              scrolled ? 'bg-[#001081] text-white' : 'bg-white/15 text-white backdrop-blur-sm'
            }`}
          >
            D
          </div>
          <div>
            <p className={`text-sm font-bold tracking-tight transition-colors ${scrolled ? 'text-[#001081]' : 'text-white'}`}>
              Discover
            </p>
            <p className={`text-[11px] transition-colors ${scrolled ? 'text-[#001081]/50' : 'text-white/60'}`}>
              by ForecastHUB
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={item === 'Contact' ? '#contact' : `#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${linkStyle}`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="#join"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? 'border border-[#001081]/12 text-[#001081] hover:bg-[#F2F3F3]'
                : 'border border-white/25 text-white hover:bg-white/10'
            }`}
          >
            Sign Up
          </Link>
          <Link
            href="#contact"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? 'bg-[#2C6DF6] text-white hover:bg-[#1A5AE0] shadow-md'
                : 'bg-white text-[#001081] hover:bg-[#F2F3F3]'
            }`}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-[#001081]' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#FFFEFF] border-t border-[#001081]/8 px-6 py-6 space-y-4"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={item === 'Contact' ? '#contact' : `#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block text-[#001081] font-medium py-2"
            >
              {item}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary w-full justify-center mt-4">
            Book a Demo
          </Link>
        </motion.div>
      )}
    </header>
  )
}

/* ─────────────────── SECTION 1: HERO ─────────────────── */
function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden flex items-center py-24 lg:py-28"
      style={{ background: HERO_BACKGROUND }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,254,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,254,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#2C6DF6]/15 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/80 mb-6 border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-[#2C6DF6]" />
              Consumer Intelligence Platform
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-plus-jakarta, system-ui, sans-serif)' }}
            >
              Do you{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B9FFF] to-[#2C6DF6]">
                really know
              </span>{' '}
              what your consumer will stick to?
            </h1>

            <p className="mt-6 max-w-lg text-lg text-white/65 leading-relaxed">
              Blind sensory panels. Scored results. AI-queryable data — so your team launches what people actually come back for.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="#contact" className="btn-primary">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#solutions" className="btn-outline-white">
                Explore Solutions
              </Link>
            </div>

            {/* Trust numbers */}
            <div className="mt-10 flex items-center gap-8 text-white/50 text-sm">
              <div>
                <span className="block text-2xl font-bold text-white">
                  <AnimatedCounter target={44} />
                </span>
                Panelists Verified
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <span className="block text-2xl font-bold text-white">
                  <AnimatedCounter target={76.56} decimals={1} suffix="%" />
                </span>
                Stickiness Score
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/15" />
              <div className="hidden sm:block">
                <span className="block text-2xl font-bold text-white">4</span>
                SKUs Tested
              </div>
            </div>
          </motion.div>

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center"
          >
            {/* Floating glow behind mascot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#2C6DF6]/20 blur-[80px] pointer-events-none" />

            <div className="relative" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <Image
                src="/images/mascot-removebg-preview.png"
                alt="Discover AI Mascot"
                width={420}
                height={420}
                className="relative z-10 drop-shadow-2xl"
                priority
              />

              {/* Floating badges around mascot */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -left-4 lg:top-12 lg:-left-6 rounded-2xl bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg border border-[#001081]/5"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#001081]/50">Verdict</p>
                <p className="text-lg font-bold text-[#001081]">Launch ✓</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 -right-4 lg:bottom-20 lg:-right-6 rounded-2xl bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg border border-[#001081]/5"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#001081]/50">Score</p>
                <p className="text-lg font-bold text-[#2C6DF6]">11.2</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SECTION 2: INTELLIGENCE THAT MATTERS ─────────────────── */
function IntelligenceHighlights() {
  return (
    <section id="insights" className= "py-20 lg:py-28 bg-[#FFFEFF]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#001081]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Intelligence That Matters
          </h2>
          <p className="mt-4 text-[#001081]/55 text-lg">
            Key findings from our pilot blind sensory study.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-around gap-5">
          {INSIGHT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative w-full sm:w-[calc(50%-0.75rem)] lg:flex-1 lg:basis-0 rounded-2xl bg-[#F2F3F3] p-6 lg:p-8 text-center hover:bg-[#001081] transition-colors duration-500 cursor-default"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-[#001081] group-hover:text-white transition-colors duration-500"
                style={{ fontFamily: 'var(--font-plus-jakarta)' }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix ?? ''}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <p className="mt-2 text-sm font-bold text-[#001081] group-hover:text-white transition-colors duration-500">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-[#001081]/45 group-hover:text-white/60 transition-colors duration-500">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SECTION 3: TRENDING INSIGHTS ─────────────────── */
function TrendingInsights() {
  return (
    <section id="research" className= "py-20 lg:py-28 bg-[#F2F3F3]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6] mb-3">
              Trending
            </p>
            <h2
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#001081]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C6DF6] hover:text-[#001081] transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRENDING_ARTICLES.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={article.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-[#001081]/5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#2C6DF6]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2C6DF6]">
                    {article.tag}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-[#001081] leading-snug group-hover:text-[#2C6DF6] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#001081]/50 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2C6DF6] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SECTION 4: JOIN US ─────────────────── */
function JoinUs() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleJoin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email || !email.includes('@')) return

    setJoined(true)
    setEmail('')

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => setJoined(false), 4000)
  }

  return (
    <section
      id="join"
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ background: JOIN_BACKGROUND }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFFEFF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Join the brands making{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B9FFF] to-[#A5C4FF]">
              smarter decisions
            </span>
          </h2>
          <p className="mt-5 text-white/55 text-lg max-w-lg mx-auto">
            Be part of the intelligence layer that leading FMCG teams are already building on.
          </p>

          <form onSubmit={handleJoin} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your work email"
              required
              className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:border-[#2C6DF6] focus:ring-1 focus:ring-[#2C6DF6] transition-all backdrop-blur-sm"
            />
            <button type="submit" className="w-full sm:w-auto btn-primary whitespace-nowrap">
              {joined ? "✓ You're on the list" : 'Get Started'}
              {!joined && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <p className="mt-4 text-xs text-white/30">
            Free to join. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────── SECTION 5: FULL VIEW ─────────────────── */
function FullView() {
  return (
    <section className= "py-20 lg:py-28 bg-[#FFFEFF]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6] mb-3">
              Comprehensive Coverage
            </p>
            <h2
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#001081] leading-[1.15]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Get the Full View of Your Industry
            </h2>
            <p className="mt-5 text-[#001081]/55 text-lg leading-relaxed max-w-lg">
              From consumer taste profiles to pricing dynamics and channel behaviour —
              Discover provides a 360° intelligence layer that traditional research can't match.
            </p>

            <ul className="mt-8 space-y-4">
              {FULL_VIEW_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2C6DF6]/10">
                    <div className="h-2 w-2 rounded-full bg-[#2C6DF6]" />
                  </div>
                  <span className="text-[#001081]/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="#contact" className="btn-primary">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#F2F3F3] to-[#E5E7E8] p-8 lg:p-12">
              {/* Concentric circles visualization */}
              <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
                {[1, 2, 3, 4].map((ring) => (
                  <motion.div
                    key={ring}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: ring * 0.12 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="rounded-full border-2 border-[#2C6DF6]"
                      style={{
                        width: `${ring * 25}%`,
                        height: `${ring * 25}%`,
                        opacity: 1 - ring * 0.2,
                        borderStyle: ring % 2 === 0 ? 'dashed' : 'solid',
                      }}
                    />
                  </motion.div>
                ))}
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#2C6DF6] flex items-center justify-center shadow-lg">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Data points on rings */}
                {FULL_VIEW_POINTS.map((point, i) => (
                  <motion.div
                    key={point.label}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#001081] shadow-md border border-[#001081]/8"
                    style={{ ...point }}
                  >
                    {point.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SECTION 6: BENTO GRID SOLUTIONS ─────────────────── */
function BentoSolutions() {
  return (
    <section id="solutions" className= "py-20 lg:py-28 bg-[#FFFEFF]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6] mb-3">
            What We Offer
          </p>
          <h2
            className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#001081]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Our Solutions
          </h2>
          <p className="mt-4 text-[#001081]/55 text-lg">
            Everything you need to make evidence-based product decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon
            const ctaLabel =
              sol.title === 'Insights & Reports'
                ? 'Book a study'
                : sol.title === 'Custom Research'
                  ? 'Discuss your category'
                  : 'Get in touch'
            const ctaClassName =
              sol.title === 'Insights & Reports' || sol.title === 'Custom Research'
                ? 'mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors'
                : 'mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2C6DF6] transition-colors'
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${sol.gradient} p-7 lg:p-8 ${sol.span} transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${sol.iconBg}`}>
                  <Icon className={`h-5 w-5 ${sol.textColor}`} />
                </div>
                <h3 className={`mt-5 text-xl font-bold ${sol.textColor}`}>
                  {sol.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${sol.descColor}`}>
                  {sol.desc}
                </p>

                <Link href="#contact" className={ctaClassName}>
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Hover shine effect */}
                <div className="absolute top-0 -left-[100%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-700" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SECTION 7: CHATBOT TEASER ─────────────────── */
function ChatbotTeaser() {
  const [showTyping, setShowTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className= "py-20 lg:py-28 bg-[#F2F3F3]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6] mb-3">
              AI-Powered
            </p>
            <h2
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#001081]"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Ask your data anything
            </h2>
            <p className="mt-5 text-[#001081]/55 text-lg leading-relaxed max-w-lg">
              Our RAG-powered AI assistant is trained on your panel data. Get instant,
              scored answers to any question about your research — in plain English.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {CHAT_SUGGESTIONS.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-[#2C6DF6]/8 border border-[#2C6DF6]/15 px-4 py-2 text-sm text-[#2C6DF6] font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl bg-white shadow-xl border border-[#001081]/8 overflow-hidden max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-[#001081]/6 px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#2C6DF6] to-[#001081]">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#001081]">Discover AI</p>
                  <p className="text-[11px] text-[#001081]/40">Online • Trained on your data</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Chat body */}
              <div className="px-5 py-5 space-y-4 min-h-[280px]">
                {/* Bot message */}
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2C6DF6]/10">
                    <Sparkles className="h-3.5 w-3.5 text-[#2C6DF6]" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#F2F3F3] px-4 py-3 text-sm text-[#001081] max-w-[85%]">
                    Hello! I&apos;m here to help with any questions you have about Discover! 👋
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm bg-[#2C6DF6] px-4 py-3 text-sm text-white max-w-[85%]">
                    What&apos;s the stickiness score for Sample 2?
                  </div>
                </div>

                {/* Bot response */}
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2C6DF6]/10">
                    <Sparkles className="h-3.5 w-3.5 text-[#2C6DF6]" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#F2F3F3] px-4 py-3 text-sm text-[#001081] max-w-[85%]">
                    Sample 2 has a stickiness score of <strong>76.56</strong>, driven by high repeat intent (74%) and strong price loyalty (68%). This makes it the top candidate for commercial launch. 📊
                  </div>
                </div>

                {/* Typing indicator */}
                {showTyping && (
                  <div className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2C6DF6]/10">
                      <Sparkles className="h-3.5 w-3.5 text-[#2C6DF6]" />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-[#F2F3F3] px-4 py-3 flex gap-1.5 items-center">
                      <span className="h-2 w-2 rounded-full bg-[#001081]/30" style={{ animation: 'typing 1.2s ease-in-out infinite' }} />
                      <span className="h-2 w-2 rounded-full bg-[#001081]/30" style={{ animation: 'typing 1.2s ease-in-out 0.2s infinite' }} />
                      <span className="h-2 w-2 rounded-full bg-[#001081]/30" style={{ animation: 'typing 1.2s ease-in-out 0.4s infinite' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <div className="border-t border-[#001081]/6 px-4 py-3 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask about your data..."
                  className="flex-1 bg-transparent text-sm text-[#001081] placeholder-[#001081]/30 focus:outline-none"
                  readOnly
                />
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C6DF6] text-white hover:bg-[#1A5AE0] transition-colors">
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-[#001081]/30">
              Activated after your first study is complete.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SECTION 8: FOOTER ─────────────────── */
function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: FOOTER_BACKGROUND }}
    >
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-bold text-white text-sm">
                D
              </div>
              <div>
                <p className="text-sm font-bold text-white">Discover</p>
                <p className="text-[11px] text-white/40">by ForecastHUB</p>
              </div>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-sm">
              The intelligence layer for FMCG teams who need faster formulation decisions
              and defensible product launches backed by real consumer data.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="ForecastHUB on LinkedIn" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/50 hover:text-white hover:bg-white/15 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="ForecastHUB on X" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/50 hover:text-white hover:bg-white/15 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35 mb-4">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto:') ? (
                      <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/8 pt-6">
          <p className="text-xs text-white/30">
            © 2026 ForecastHUB. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-white/60 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────── MAIN EXPORT ─────────────────── */
export function EnterpriseLanding() {
  return (
    <main className="overflow-x-clip bg-[#FFFEFF] text-[#001081]">
      <TopNav />
      <HeroSection />
      <IntelligenceHighlights />
      <TrendingInsights />
      <JoinUs />
      <FullView />
      <BentoSolutions />
      <ChatbotTeaser />
      <Footer />
      <ChatWidget />
    </main>
  )
}
