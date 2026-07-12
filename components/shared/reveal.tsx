'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

export type RevealVariant = 'fade-up' | 'fade-scale' | 'slide-left' | 'slide-right' | 'blur-up'

const EASE = [0.22, 1, 0.36, 1] as const

const VARIANTS: Record<RevealVariant, Variants> = {
  'fade-up': { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } },
  'fade-scale': { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  'slide-left': { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  'slide-right': { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  'blur-up': { hidden: { opacity: 0, y: 16, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } },
}

/** Shared scroll-triggered entrance wrapper — pass a different `variant` per section so the page doesn't reuse one animation everywhere. */
export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  once = true,
  className,
}: {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
