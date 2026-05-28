'use client'

import { type FormEvent, useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { JOIN_BACKGROUND } from '@/lib/enterprise-content'

export function JoinUs() {
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
    <section id="join" className="relative overflow-hidden py-20 lg:py-24" style={{ background: JOIN_BACKGROUND }}>
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
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-5xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Join the brands making{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B9FFF] to-[#A5C4FF]">
              smarter decisions
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/55">
            Be part of the intelligence layer that leading FMCG teams are already building on.
          </p>

          <form onSubmit={handleJoin} className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your work email"
              required
              className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/35 backdrop-blur-sm transition-all focus:border-[#2C6DF6] focus:outline-none focus:ring-1 focus:ring-[#2C6DF6] sm:flex-1"
            />
            <button type="submit" className="btn-primary w-full whitespace-nowrap sm:w-auto">
              {joined ? "✓ You're on the list" : 'Get Started'}
              {!joined && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <p className="mt-4 text-xs text-white/30">Free to join. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  )
}
