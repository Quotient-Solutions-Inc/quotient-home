import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const size = {
  width: 180,
  height: 180,
}

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1c1a17',
          color: '#f5f0e8',
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: '-0.08em',
          borderRadius: 40,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 12,
            border: '8px solid rgba(238, 111, 75, 0.85)',
            borderRadius: 30,
          }}
        />
        Q
      </div>
    ),
    size
  )
}
