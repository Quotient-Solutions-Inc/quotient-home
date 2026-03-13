import Link from 'next/link'

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="border-b border-border-thin px-10 max-md:px-6 py-2.5">
      <div className="max-w-content mx-auto font-mono text-[11px] text-gray-400 flex items-center gap-1">
        <Link href="/" className="hover:text-brand-black transition-colors">
          quotient.social
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-gray-500">{current}</span>
      </div>
    </div>
  )
}
