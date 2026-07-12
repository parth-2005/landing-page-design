import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#000C42',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.15)',
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>Cobalt Analytix</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 920 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 60, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1 }}>
            <span>Do you really know what your consumer will&nbsp;</span>
            <span style={{ color: '#7FA8FF' }}>stick to?</span>
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: 'rgba(255,255,255,0.6)' }}>
            Blind sensory panels. Confidence-weighted scoring. AI-queryable panel data.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
