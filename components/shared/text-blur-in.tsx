'use client'

import { type CSSProperties, useEffect, useRef, useState } from 'react'

type AsTag = 'h1' | 'h2' | 'h3' | 'span' | 'div'

type TextBlurInProps = {
  text: string
  as?: AsTag
  className?: string
  /** Plays immediately via CSS keyframes (use above the fold — no scroll trigger, no hydration wait). */
  immediate?: boolean
  startDelay?: number
  charStagger?: number
  duration?: number
  blur?: number
  yOffset?: number
  threshold?: number
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

function useRevealOnIntersect(ref: React.RefObject<HTMLElement | null>, threshold: number) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, threshold])

  return visible
}

/** Headline text that reveals one character at a time via blur + rise, instead of a flat whole-block fade. */
export function TextBlurIn({
  text,
  as: Tag = 'span',
  className,
  immediate = false,
  startDelay = 0.03,
  charStagger = 0.02,
  duration = 0.6,
  blur = 10,
  yOffset = 14,
  threshold = 0.2,
}: TextBlurInProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const visible = useRevealOnIntersect(ref, threshold)
  const shouldPlay = immediate || visible
  // Split into words + whitespace so each word's letters stay glued together
  // (individual inline-block char spans are otherwise valid line-break points,
  // which made words wrap mid-letter).
  const words = text.split(/(\s+)/)

  let charIndex = 0
  const renderChar = (char: string, key: string) => {
    const i = charIndex++
    const delay = startDelay + i * charStagger
    const style: CSSProperties = immediate
      ? {
          display: char === ' ' ? 'inline' : 'inline-block',
          whiteSpace: 'pre',
          animation: `soft-blur-in ${duration}s ${EASE} ${delay}s both`,
          ['--sbi-blur' as string]: `${blur}px`,
          ['--sbi-y' as string]: `${yOffset}px`,
        }
      : {
          display: char === ' ' ? 'inline' : 'inline-block',
          whiteSpace: 'pre',
          opacity: shouldPlay ? 1 : 0,
          filter: shouldPlay ? 'blur(0)' : `blur(${blur}px)`,
          transform: shouldPlay ? 'none' : `translateY(${yOffset}px)`,
          transition: `opacity ${duration}s ${EASE} ${delay}s, filter ${duration}s ${EASE} ${delay}s, transform ${duration}s ${EASE} ${delay}s`,
        }

    return (
      <span key={key} style={style}>
        {char}
      </span>
    )
  }

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {words.map((word, wi) => {
          if (/^\s+$/.test(word)) {
            return Array.from(word).map((char, ci) => renderChar(char, `${wi}-${ci}`))
          }

          return (
            <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {Array.from(word).map((char, ci) => renderChar(char, `${wi}-${ci}`))}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}
