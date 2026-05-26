'use client'

import { useCountUp } from '@/hooks/use-count-up'

interface AnimatedStatProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  label: string
  duration?: number
  className?: string
  labelClassName?: string
  valueClassName?: string
}

export function AnimatedStat({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  duration = 1800,
  className = '',
  labelClassName = '',
  valueClassName = '',
}: AnimatedStatProps) {
  const { count, ref } = useCountUp(value, duration, decimals)

  return (
    <div ref={ref as any} className={`rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm ${className}`.trim()}>
      <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 ${labelClassName}`.trim()}>{label}</p>
      <p className={`mt-2 text-2xl font-semibold tracking-tight text-slate-900 ${valueClassName}`.trim()}>
        {prefix}{count}{suffix}
      </p>
    </div>
  )
}