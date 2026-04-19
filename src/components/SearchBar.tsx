'use client'

interface Props {
  value: string
  onChange: (v: string) => void
  placeholder: string
}

export function SearchBar({ value, onChange, placeholder }: Props) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
        style={{ color: '#ffffff66' }}
        fill="none" stroke="currentColor" strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2"
        style={{
          backgroundColor: '#2d2f80',
          border: '1px solid #3d3f9a',
          color: '#ffffff',
          '--tw-ring-color': '#aaff00',
        } as React.CSSProperties}
      />
    </div>
  )
}
