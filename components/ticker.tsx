export function Ticker() {
  const items = [
    '176 double-blind evaluations',
    'ForecastHUB™ sensory engine',
    'Formulation decisions in 72h',
    'Mathematical commercial loyalty',
    'Physical product testing',
    'Zero brand equity bias',
  ]

  return (
    <div className="bg-navy overflow-hidden py-3.5 border-t border-white/5">
      <div className="flex animate-[tkr_35s_linear_infinite]">
        {/* Original set */}
        <div className="flex items-center gap-3.5 px-9 whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={`orig-${idx}`} className="flex items-center gap-3.5">
              <span className="text-sm text-slate-300 font-medium">{item}</span>
              {idx < items.length - 1 && <span className="text-lg text-slate-500">•</span>}
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-3.5 px-9 whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3.5">
              <span className="text-sm text-slate-300 font-medium">{item}</span>
              {idx < items.length - 1 && <span className="text-lg text-slate-500">•</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
