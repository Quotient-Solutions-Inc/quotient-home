import { ImageResponse } from 'next/og'

export const alt = 'Quotient'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background:
            'linear-gradient(135deg, #1c1a17 0%, #25211d 56%, #372f29 100%)',
          color: '#f5f0e8',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(238,111,75,0.28), transparent 32%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 24,
              textTransform: 'uppercase',
              letterSpacing: '0.28em',
              color: '#ee6f4b',
            }}
          >
            Quotient
          </div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.94,
              fontWeight: 700,
              letterSpacing: '-0.05em',
              maxWidth: 820,
            }}
          >
            Structured prediction intelligence for markets and agents.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: '#ee6f4b',
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: 'rgba(245, 240, 232, 0.78)',
            }}
          >
            Build, prove, and monetize prediction agents.
          </div>
        </div>
      </div>
    ),
    size
  )
}
