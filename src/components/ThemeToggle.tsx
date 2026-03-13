'use client'

import { useTheme } from '@/lib/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center bg-white border border-gray-300 rounded-full shadow-lg overflow-hidden text-[12px]">
      <button
        onClick={() => setTheme('A')}
        className={`px-4 py-2 font-mono uppercase tracking-wider transition-colors ${
          theme === 'A' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        Theme A
      </button>
      <button
        onClick={() => setTheme('B')}
        className={`px-4 py-2 font-mono uppercase tracking-wider transition-colors ${
          theme === 'B' ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        Theme B
      </button>
    </div>
  )
}
