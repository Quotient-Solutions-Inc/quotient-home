import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const size = {
  width: 512,
  height: 512,
}

export default function Icon() {
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
          fontSize: 240,
          fontWeight: 700,
          letterSpacing: '-0.08em',
          borderRadius: 96,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: '16px solid rgba(238, 111, 75, 0.85)',
            borderRadius: 80,
          }}
        />
        Q
      </div>
    ),
    size
  )
}
