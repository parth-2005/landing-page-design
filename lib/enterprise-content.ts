import { BLOGS } from './blogs-data'

export const NAV_ITEMS = ['Insights', 'Solutions', 'Research', 'Contact'] as const
export const CONTACT_EMAIL = 'contact@forecasthub.in'

export type InsightStat = {
  value: number
  suffix?: string
  label: string
  desc: string
  prefix?: string
  decimals?: number
}

export const HERO_BACKGROUND = 'linear-gradient(135deg, #001081 0%, #0A1A8F 40%, #1330A5 100%)'
export const JOIN_BACKGROUND = 'linear-gradient(135deg, #001081 0%, #0A1A8F 50%, #1330A5 100%)'
export const FOOTER_BACKGROUND = 'linear-gradient(180deg, #001081 0%, #000C60 100%)'

export const INSIGHT_STATS: InsightStat[] = [
  { value: 68, suffix: '%', label: 'Price Loyalty', desc: 'Consumers willing to pay more for preferred taste' },
  { value: 39, suffix: '%', label: 'Walk-to-Shop', desc: 'Will switch stores for their product of choice' },
  { value: 70, suffix: '%', label: 'Retention Strength', desc: 'Consumers stayed within preferred brand ecosystem' },
]

export const TRENDING_ARTICLES = BLOGS.map((blog) => ({
  image: blog.image,
  tag: blog.category,
  title: blog.title,
  excerpt: blog.excerpt,
  href: `/blogs/${blog.slug}`,
}))

export const FULL_VIEW_FEATURES = [
  'Blind sensory testing eliminates brand bias',
  'Stickiness scoring predicts commercial loyalty',
  'AI-queryable panel data at your fingertips',
  'Clear verdict: launch, reformulate, or stop',
] as const

export const FULL_VIEW_POINTS = [
  { top: '8%', left: '55%', label: 'Taste' },
  { top: '30%', right: '5%', label: 'Price' },
  { bottom: '20%', right: '10%', label: 'Texture' },
  { bottom: '8%', left: '35%', label: 'Channel' },
  { top: '25%', left: '2%', label: 'Loyalty' },
] as const

export const SOLUTIONS = [
  {
    title: 'Insights & Reports',
    desc: 'Comprehensive scored reports from blind sensory panels — delivered with commercial context, not academic jargon.',
    span: 'lg:col-span-2',
    gradient: 'from-[#001081] to-[#0A1A8F]',
    textColor: 'text-white',
    descColor: 'text-white/60',
    iconBg: 'bg-white/15',
    href: '/contact',
    ctaLabel: 'Book a study',
  },
  {
    title: 'API Access',
    desc: 'Integrate stickiness scores and panel data directly into your product and analytics pipelines.',
    span: '',
    gradient: 'from-[#F2F3F3] to-[#E8E9EA]',
    textColor: 'text-[#001081]',
    descColor: 'text-[#001081]/50',
    iconBg: 'bg-[#2C6DF6]/10',
    href: '/contact',
    ctaLabel: 'Get in touch',
  },
  {
    title: 'RAG AI Assistant',
    desc: 'Query your panel data conversationally. Ask questions, get scored answers grounded in your own research.',
    span: '',
    gradient: 'from-[#F2F3F3] to-[#E8E9EA]',
    textColor: 'text-[#001081]',
    descColor: 'text-[#001081]/50',
    iconBg: 'bg-[#2C6DF6]/10',
    href: '/contact',
    ctaLabel: 'Get in touch',
  },
  {
    title: 'Custom Research',
    desc: 'Bespoke consumer studies tailored to your category, geography, and commercial questions. Scoped to your brief, delivered with a defensible verdict.',
    span: 'lg:col-span-2',
    gradient: 'from-[#2C6DF6] to-[#1A5AE0]',
    textColor: 'text-white',
    descColor: 'text-white/65',
    iconBg: 'bg-white/20',
    href: '/contact',
    ctaLabel: 'Discuss your category',
  },
] as const

export const FOOTER_LINKS = {
  Platform: ['Insights Dashboard', 'API Documentation', 'RAG Assistant', 'Data Explorer'],
  Solutions: ['Sensory Testing', 'Stickiness Scoring', 'Custom Research', 'Industry Reports'],
  Company: ['About Us', 'Careers', 'Blog', 'FAQ', 'Contact'],
} as const
