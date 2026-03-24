'use client'

import { useState } from 'react'

type Tab = 'curl' | 'python' | 'node'

export default function CodeBlock() {
  const [active, setActive] = useState<Tab>('curl')

  return (
    <div className="overflow-hidden border border-tb-border rounded-tb-card">
      <div className="flex gap-0 border-b border-tb-border">
        <TabButton label="curl" tab="curl" active={active} onSelect={setActive} />
        <TabButton label="Python" tab="python" active={active} onSelect={setActive} />
        <TabButton label="Node" tab="node" active={active} onSelect={setActive} />
      </div>
      <pre className="p-5 text-[12px] leading-relaxed overflow-x-auto bg-tb-dark font-mono">
        {active === 'curl' && <CurlExample />}
        {active === 'python' && <PythonExample />}
        {active === 'node' && <NodeExample />}
      </pre>
    </div>
  )
}

function TabButton({
  label,
  tab,
  active,
  onSelect,
}: {
  label: string
  tab: Tab
  active: Tab
  onSelect: (t: Tab) => void
}) {
  const isActive = tab === active
  return (
    <button
      onClick={() => onSelect(tab)}
      className={`text-[11px] px-4 py-2.5 transition-colors font-mono ${
        isActive
          ? 'text-tb-dark bg-white border-b-2 border-tb-primary'
          : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      {label}
    </button>
  )
}

function CurlExample() {
  const accent = 'text-tb-primary'
  return (
    <>
      <span className="text-gray-600"># Get signal for a specific market</span>{'\n'}
      <span className="text-gray-400">curl </span><span className={accent}>https://api.quotient.social/v1/signals/polymarket-iran-strike-2026</span>{' \\\n'}
      {'  '}<span className="text-gray-400">-H </span><span className="text-green-600">&quot;Authorization: Bearer YOUR_API_KEY&quot;</span>{' \\\n'}
      {'  '}<span className="text-gray-400">-H </span><span className="text-green-600">&quot;Accept: application/json&quot;</span>{'\n\n'}
      <span className="text-gray-600"># Response</span>{'\n'}
      <span className="text-gray-400">{'{'}</span>{'\n'}
      {'  '}<span className={accent}>&quot;market_id&quot;</span>: <span className="text-green-600">&quot;polymarket-iran-strike-2026&quot;</span>,{'\n'}
      {'  '}<span className={accent}>&quot;q_forecast&quot;</span>: <span className="text-green-600">&quot;YES&quot;</span>,{'\n'}
      {'  '}<span className={accent}>&quot;q_probability&quot;</span>: <span className="text-orange-400">0.91</span>,{'\n'}
      {'  '}<span className={accent}>&quot;market_odds&quot;</span>: <span className="text-orange-400">0.75</span>,{'\n'}
      {'  '}<span className={accent}>&quot;spread&quot;</span>: <span className="text-orange-400">16</span>,{'\n'}
      {'  '}<span className={accent}>&quot;key_factors&quot;</span>: <span className="text-gray-400">[...]</span>,{'\n'}
      {'  '}<span className={accent}>&quot;updated_at&quot;</span>: <span className="text-green-600">&quot;2026-03-09T14:32:00Z&quot;</span>{'\n'}
      <span className="text-gray-400">{'}'}</span>
    </>
  )
}

function PythonExample() {
  return (
    <>
      <span className="text-gray-600"># pip install requests</span>{'\n'}
      <span className="text-purple-400">import</span> <span className="text-gray-400">requests</span>{'\n\n'}
      <span className="text-gray-400">response = requests.</span><span className="text-brand-blue">get</span><span className="text-gray-400">(</span>{'\n'}
      {'  '}<span className="text-green-600">&quot;https://api.quotient.social/v1/signals/polymarket-iran-strike-2026&quot;</span>,{'\n'}
      {'  '}<span className="text-gray-400">headers=</span><span className="text-gray-400">{'{'}</span>{'\n'}
      {'    '}<span className="text-green-600">&quot;Authorization&quot;</span>: <span className="text-green-600">&quot;Bearer YOUR_API_KEY&quot;</span>,{'\n'}
      {'    '}<span className="text-green-600">&quot;Accept&quot;</span>: <span className="text-green-600">&quot;application/json&quot;</span>{'\n'}
      {'  '}<span className="text-gray-400">{'}'}</span>{'\n'}
      <span className="text-gray-400">)</span>{'\n\n'}
      <span className="text-gray-400">signal = response.</span><span className="text-brand-blue">json</span><span className="text-gray-400">()</span>{'\n\n'}
      <span className="text-purple-400">print</span><span className="text-gray-400">(</span><span className="text-green-600">f&quot;Q says: </span><span className="text-gray-400">{'{'}</span><span className="text-gray-400">signal[</span><span className="text-green-600">&apos;q_forecast&apos;</span><span className="text-gray-400">]</span><span className="text-gray-400">{'}'}</span><span className="text-green-600"> at </span><span className="text-gray-400">{'{'}</span><span className="text-gray-400">signal[</span><span className="text-green-600">&apos;q_probability&apos;</span><span className="text-gray-400">]</span><span className="text-gray-400">{'}'}</span><span className="text-green-600">&quot;</span><span className="text-gray-400">)</span>{'\n'}
      <span className="text-purple-400">print</span><span className="text-gray-400">(</span><span className="text-green-600">f&quot;Spread: </span><span className="text-gray-400">{'{'}</span><span className="text-gray-400">signal[</span><span className="text-green-600">&apos;spread&apos;</span><span className="text-gray-400">]</span><span className="text-gray-400">{'}'}</span><span className="text-green-600"> pts&quot;</span><span className="text-gray-400">)</span>{'\n'}
      <span className="text-purple-400">print</span><span className="text-gray-400">(</span><span className="text-green-600">f&quot;Key factors: </span><span className="text-gray-400">{'{'}</span><span className="text-gray-400">signal[</span><span className="text-green-600">&apos;key_factors&apos;</span><span className="text-gray-400">]</span><span className="text-gray-400">{'}'}</span><span className="text-green-600">&quot;</span><span className="text-gray-400">)</span>
    </>
  )
}

function NodeExample() {
  return (
    <>
      <span className="text-gray-600">// Using fetch (Node 18+)</span>{'\n'}
      <span className="text-purple-400">const</span> <span className="text-gray-400">response = </span><span className="text-purple-400">await</span> <span className="text-brand-blue">fetch</span><span className="text-gray-400">(</span>{'\n'}
      {'  '}<span className="text-green-600">&quot;https://api.quotient.social/v1/signals/polymarket-iran-strike-2026&quot;</span>,{'\n'}
      {'  '}<span className="text-gray-400">{'{'}</span>{'\n'}
      {'    '}<span className="text-gray-400">headers: {'{'}</span>{'\n'}
      {'      '}<span className="text-green-600">&quot;Authorization&quot;</span>: <span className="text-green-600">&quot;Bearer YOUR_API_KEY&quot;</span>,{'\n'}
      {'      '}<span className="text-green-600">&quot;Accept&quot;</span>: <span className="text-green-600">&quot;application/json&quot;</span>{'\n'}
      {'    '}<span className="text-gray-400">{'}'}</span>{'\n'}
      {'  '}<span className="text-gray-400">{'}'}</span>{'\n'}
      <span className="text-gray-400">);</span>{'\n\n'}
      <span className="text-purple-400">const</span> <span className="text-gray-400">signal = </span><span className="text-purple-400">await</span> <span className="text-gray-400">response.</span><span className="text-brand-blue">json</span><span className="text-gray-400">();</span>{'\n\n'}
      <span className="text-gray-400">console.</span><span className="text-brand-blue">log</span><span className="text-gray-400">(</span><span className="text-green-600">`Q says: ${'{'}</span><span className="text-gray-400">signal.q_forecast</span><span className="text-green-600">{'}'} at ${'{'}</span><span className="text-gray-400">signal.q_probability</span><span className="text-green-600">{'}'}`</span><span className="text-gray-400">);</span>{'\n'}
      <span className="text-gray-400">console.</span><span className="text-brand-blue">log</span><span className="text-gray-400">(</span><span className="text-green-600">`Spread: ${'{'}</span><span className="text-gray-400">signal.spread</span><span className="text-green-600">{'}'} pts`</span><span className="text-gray-400">);</span>{'\n'}
      <span className="text-gray-400">console.</span><span className="text-brand-blue">log</span><span className="text-gray-400">(</span><span className="text-green-600">`Key factors:`</span><span className="text-gray-400">, signal.key_factors);</span>
    </>
  )
}
