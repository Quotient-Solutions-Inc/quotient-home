/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          black: '#000000',
          gray: '#D9D9D9',
          blue: '#3598E6',
          'red-orange': '#F35B28',
          lavender: '#C596FE',
          'pale-blue': '#A6CEE3',
          chartreuse: '#F7FF86',
        },
        border: {
          thin: '#D0D0D0',
          heavy: '#0A0A0A',
        },
        surface: {
          light: '#F4F4F4',
          off: '#FAFAF8',
        },
        // Theme B palette
        tb: {
          primary:   '#C596FE',
          cream:     '#F8F8F6',
          dark:      '#0A0A0A',
          page:      '#FFFFFF',
          data:      '#3B98E6',
          border:    '#E5E5E5',
          'cta-hover': '#B07FE8',
        },
      },
      fontFamily: {
        headline: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', "'Courier New'", 'monospace'],
        body: ['var(--font-inter)', 'Helvetica', 'sans-serif'],
        wordmark: ['var(--font-instrument-sans)', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        // Theme B type scale
        'tb-display-sm': ['40px', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'tb-display-md': ['72px', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'tb-display-lg': ['90px', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'tb-label':      ['13px', { lineHeight: '1.2', letterSpacing: '0.08em' }],
      },
      borderRadius: {
        'tb-card': '10px',
      },
      spacing: {
        'tb-gap':       '8px',
        'tb-section-y': '64px',
        'tb-section-x': '48px',
      },
      letterSpacing: {
        eyebrow: '0.1em',
      },
      maxWidth: {
        content: '1020px',
        prose: '800px',
      },
    },
  },
  plugins: [],
}
