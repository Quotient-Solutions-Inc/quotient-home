'use client'

import { useState } from 'react'

type Tab = 'curl' | 'python' | 'node'

// Code block with glow border, macOS dots, tabs, and copy button
export default function ApiCodeBlock() {
  const [activeTab, setActiveTab] = useState<Tab>('curl')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const code = getCodeText(activeTab)
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      {/* Glow border effect */}
      <div
        className="absolute -inset-[1px] rounded-[12px] z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(243,91,40,0.2), rgba(100,100,255,0.1))',
          filter: 'blur(1px)',
        }}
      />

      {/* Code block inner */}
      <div className="relative z-10 bg-[#0D0C0A] rounded-[11px] overflow-hidden">
        {/* Top bar with macOS dots and tabs */}
        <div className="flex items-center px-4 py-2.5 bg-[#161820] border-b border-white/5">
          {/* macOS dots */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,99,71,0.3)', border: '1px solid rgba(255,99,71,0.5)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,215,0,0.3)', border: '1px solid rgba(255,215,0,0.5)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(50,205,50,0.3)', border: '1px solid rgba(50,205,50,0.5)' }} />
          </div>

          {/* Tabs */}
          <div className="flex ml-4">
            <TabButton label="curl" tab="curl" active={activeTab} onSelect={setActiveTab} />
            <TabButton label="Python" tab="python" active={activeTab} onSelect={setActiveTab} />
            <TabButton label="Node" tab="node" active={activeTab} onSelect={setActiveTab} />
          </div>
        </div>

        {/* Code body - fixed height with scroll for consistent sizing */}
        <div className="relative p-5">
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.06em] text-white/50 bg-white/[0.06] px-2.5 py-1 rounded border border-white/[0.08] hover:bg-white/[0.1] hover:text-white/70 transition-colors z-10"
          >
            {copied ? 'COPIED' : 'COPY'}
          </button>

          <div className="h-[260px] overflow-y-auto overflow-x-auto pr-2">
            <pre className="text-[12px] leading-[1.8] font-mono text-white/70">
              {activeTab === 'curl' && <CurlExample />}
              {activeTab === 'python' && <PythonExample />}
              {activeTab === 'node' && <NodeExample />}
            </pre>
          </div>
        </div>
      </div>
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
      className={`font-mono text-[10px] uppercase tracking-[0.06em] px-2.5 py-1 rounded ml-2 transition-colors ${
        isActive
          ? 'text-tb-primary bg-tb-primary/10'
          : 'text-white/50 hover:text-white/70'
      }`}
    >
      {label}
    </button>
  )
}

function getCodeText(tab: Tab): string {
  if (tab === 'curl') {
    return `# Get all active markets
curl https://q-api.quotient.social/api/v1/markets \\
  -H "x-quotient-api-key: YOUR_API_KEY"

# Response
{
  "markets": [{
    "slug": "fed-rate-cut-june-2026",
    "question": "Will the Fed cut rates?",
    "quotient_odds": 0.34,
    "market_odds": 0.46,
    "confidence": "high",
    "spread": 0.12,
    "key_factors": [...]
  }]
}`
  }
  if (tab === 'python') {
    return `import requests

response = requests.get(
  "https://q-api.quotient.social/api/v1/markets",
  headers={"x-quotient-api-key": "YOUR_API_KEY"}
)

markets = response.json()["markets"]
for market in markets:
    print(f"Market: {market['slug']}")
    print(f"Q odds: {market['quotient_odds']}")`
  }
  return `const response = await fetch(
  "https://q-api.quotient.social/api/v1/markets",
  {
    headers: {
      "x-quotient-api-key": "YOUR_API_KEY"
    }
  }
);

const { markets } = await response.json();
markets.forEach(m => console.log(m.slug, m.quotient_odds));`
}

function CurlExample() {
  return (
    <>
      <span className="text-[#666]"># Get all active markets</span>{'\n'}
      <span className="text-[#7eb8da]">curl</span> https://q-api.quotient.social/api/v1/markets \{'\n'}
      {'  '}-H <span className="text-tb-primary">&quot;x-quotient-api-key: YOUR_API_KEY&quot;</span>{'\n\n'}
      <span className="text-[#666]"># Response</span>{'\n'}
      {'{'}{'\n'}
      {'  '}<span className="text-[#7eb8da]">&quot;markets&quot;</span>: [{'{'}{'\n'}
      {'    '}<span className="text-[#e0e0e0]">&quot;slug&quot;</span>: <span className="text-[#a8d89f]">&quot;fed-rate-cut-june-2026&quot;</span>,{'\n'}
      {'    '}<span className="text-[#e0e0e0]">&quot;question&quot;</span>: <span className="text-[#a8d89f]">&quot;Will the Fed cut rates?&quot;</span>,{'\n'}
      {'    '}<span className="text-[#e0e0e0]">&quot;quotient_odds&quot;</span>: <span className="text-[#f0c674]">0.34</span>,{'\n'}
      {'    '}<span className="text-[#e0e0e0]">&quot;market_odds&quot;</span>: <span className="text-[#f0c674]">0.46</span>,{'\n'}
      {'    '}<span className="text-[#e0e0e0]">&quot;confidence&quot;</span>: <span className="text-[#a8d89f]">&quot;high&quot;</span>,{'\n'}
      {'    '}<span className="text-[#e0e0e0]">&quot;spread&quot;</span>: <span className="text-[#f0c674]">0.12</span>,{'\n'}
      {'    '}<span className="text-[#e0e0e0]">&quot;key_factors&quot;</span>: [...]{'\n'}
      {'  '}{'}]'}{'\n'}
      {'}'}
    </>
  )
}

function PythonExample() {
  return (
    <>
      <span className="text-purple-400">import</span> requests{'\n\n'}
      response = requests.<span className="text-[#7eb8da]">get</span>({'\n'}
      {'  '}<span className="text-[#a8d89f]">&quot;https://q-api.quotient.social/api/v1/markets&quot;</span>,{'\n'}
      {'  '}headers={'{'}<span className="text-[#a8d89f]">&quot;x-quotient-api-key&quot;</span>: <span className="text-[#a8d89f]">&quot;YOUR_API_KEY&quot;</span>{'}'}{'\n'}
      ){'\n\n'}
      markets = response.<span className="text-[#7eb8da]">json</span>()[<span className="text-[#a8d89f]">&quot;markets&quot;</span>]{'\n'}
      <span className="text-purple-400">for</span> market <span className="text-purple-400">in</span> markets:{'\n'}
      {'    '}<span className="text-purple-400">print</span>(<span className="text-[#a8d89f]">f&quot;Market: {'{'}market[&apos;slug&apos;]{'}'}&quot;</span>){'\n'}
      {'    '}<span className="text-purple-400">print</span>(<span className="text-[#a8d89f]">f&quot;Q odds: {'{'}market[&apos;quotient_odds&apos;]{'}'}&quot;</span>)
    </>
  )
}

function NodeExample() {
  return (
    <>
      <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> <span className="text-[#7eb8da]">fetch</span>({'\n'}
      {'  '}<span className="text-[#a8d89f]">&quot;https://q-api.quotient.social/api/v1/markets&quot;</span>,{'\n'}
      {'  '}{'{'}{'\n'}
      {'    '}headers: {'{'}{'\n'}
      {'      '}<span className="text-[#a8d89f]">&quot;x-quotient-api-key&quot;</span>: <span className="text-[#a8d89f]">&quot;YOUR_API_KEY&quot;</span>{'\n'}
      {'    '}{'}'}{'\n'}
      {'  '}{'}'}{'\n'}
      );{'\n\n'}
      <span className="text-purple-400">const</span> {'{ '}markets{'}'} = <span className="text-purple-400">await</span> response.<span className="text-[#7eb8da]">json</span>();{'\n'}
      markets.<span className="text-[#7eb8da]">forEach</span>(m {'=> '}console.<span className="text-[#7eb8da]">log</span>(m.slug, m.quotient_odds));
    </>
  )
}
