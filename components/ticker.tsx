export function Ticker() {
  const items = [
    'Pilot #001 · Sample 2 wins · +6.09 sensory lift over baseline',
    '44 panelists · 3 academic institutions · double-blind protocol',
    'Stickiness Score™ 76.56 · highest binge intent ≠ highest loyalty',
    'Confidence multiplier applied · noisy responses excluded from verdict',
    'Ask the Data — your panel, queryable by AI',
  ]

  return (
    <div className="bg-navy overflow-hidden py-3.5 border-t border-white/5">
      <div className="flex animate-[tkr_35s_linear_infinite]">
        {/* Original set */}
        <div className="flex items-center gap-3.5 px-9 whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={`orig-${idx}`} className="flex items-center gap-3.5">
              <span className="text-sm text-slate-300 font-medium">{item}</span>
              {idx < items.length - 1 && <span className="text-lg text-slate-400">•</span>}
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-3.5 px-9 whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3.5">
              <span className="text-sm text-slate-300 font-medium">{item}</span>
              {idx < items.length - 1 && <span className="text-lg text-slate-400">•</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
