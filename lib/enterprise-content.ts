import { BLOGS } from './blogs-data'

export const NAV_ITEMS = [
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Pilot results', id: 'results' },
  { label: 'FAQ', id: 'faq' },
] as const

export const CONTACT_EMAIL = 'contact@cobaltanalytix.com'
export const CALENDLY_URL = 'https://calendly.com/pjpanot260305/30min'

export const HERO_BACKGROUND = '#000C42'
export const JOIN_BACKGROUND = '#000C42'
export const FOOTER_BACKGROUND = '#000C42'

export type ResultStat = {
  value: string
  label: string
  desc: string
}

export const RESULT_STATS: ResultStat[] = [
  { value: '68%', label: 'Price Loyalty', desc: 'Consumers willing to pay more for their preferred sample' },
  { value: '39%', label: 'Walk-to-Shop', desc: 'Would switch stores to buy their preferred sample again' },
  { value: '70%', label: 'Retention Strength', desc: "Stayed within their preferred sample's flavor profile on re-test" },
]

export type MethodologyStep = {
  number: string
  title: string
  desc: string
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'Blind sensory panel',
    desc: 'Samples are served without packaging, branding, or price cues — panelists judge taste, texture, aroma, and mouthfeel alone.',
  },
  {
    number: '02',
    title: 'Confidence-weighted scoring',
    desc: 'Every response is checked for internal consistency. Panelists showing no variance across samples are automatically down-weighted.',
  },
  {
    number: '03',
    title: 'Stickiness Score™',
    desc: 'Sensory performance combines with behavioral loyalty signals — price tolerance, walk-to-shop intent — into one comparable score.',
  },
  {
    number: '04',
    title: 'Query with AI',
    desc: 'Every study includes access to the Cobalt AI assistant, trained on your panel responses, for questions after delivery.',
  },
]

export const TRENDING_ARTICLES = BLOGS.map((blog) => ({
  image: blog.image,
  tag: blog.category,
  title: blog.title,
  excerpt: blog.excerpt,
  href: `/blogs/${blog.slug}`,
}))

export type ScoreBar = {
  label: string
  value: number
  best?: boolean
}

export const SCORE_BARS: ScoreBar[] = [
  { label: 'Sample A', value: 58 },
  { label: 'Sample B', value: 76.56, best: true },
  { label: 'Sample C', value: 64 },
  { label: 'Sample D', value: 71 },
]

export const SOLUTIONS = [
  {
    title: 'Insights & Reports',
    desc: 'Comprehensive scored reports from blind sensory panels, delivered with commercial context.',
    ctaLabel: 'Book a pilot call',
    badge: null,
  },
  {
    title: 'API Access',
    desc: 'Integrate stickiness scores and panel data into your product and analytics pipelines.',
    ctaLabel: 'Get in touch',
    badge: 'In development',
  },
  {
    title: 'RAG AI Assistant',
    desc: 'Query your panel data conversationally — answers grounded in your own research.',
    ctaLabel: 'Get in touch',
    badge: 'In development',
  },
  {
    title: 'Custom Research',
    desc: 'Bespoke consumer studies tailored to your category, geography, and commercial questions.',
    ctaLabel: 'Discuss your category',
    badge: null,
  },
] as const

export const FAQS = [
  {
    q: 'Can we customise the scoring weights for our category?',
    a: 'Yes. The scoring framework applies category, channel, and demographic modifiers. Before a study begins, we align on the weights that reflect your commercial priorities — you are not locked into a generic model.',
  },
  {
    q: 'How do you prevent panelists from recognising brand cues?',
    a: 'All samples are presented without packaging, brand markings, or contextual cues. Panelists evaluate only the product — taste, texture, aroma, and mouthfeel — under controlled conditions. This is the foundation of the blind protocol.',
  },
  {
    q: 'How is the honesty check enforced?',
    a: 'Responses are screened for internal consistency. A panelist who rates a sample identically across every attribute, or whose responses show no variance across SKUs, is flagged and their data is down-weighted before it reaches the final score.',
  },
  {
    q: 'Can we query our study data after delivery?',
    a: 'Yes. Every study includes access to the Cobalt AI assistant, trained on your panel responses. You can query attribute-level results, compare segments, or ask follow-up questions not in the original brief.',
  },
  {
    q: 'What do I actually receive at the end of a study?',
    a: 'Three things: a scored insights report covering every sample tested, access to the Cobalt AI assistant over your panel data, and a set of data-grounded recommendations — launch, reformulate, or stop.',
  },
  {
    q: 'Do you cover categories beyond snacks?',
    a: 'The current pilot is in the savoury snack category. The methodology is category-agnostic — it applies to any product where sensory attributes drive repeat purchase. We are actively expanding into adjacent categories.',
  },
] as const

export const FOOTER_LINKS = {
  Platform: ['Insights Dashboard', 'API Documentation', 'RAG Assistant', 'Data Explorer'],
  Solutions: ['Sensory Testing', 'Stickiness Scoring', 'Custom Research', 'Industry Reports'],
  Company: ['About Us', 'Careers', 'Blog', 'FAQ'],
} as const
