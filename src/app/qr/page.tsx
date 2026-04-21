'use client'

import { useRef, useState } from 'react'
import QRCode from 'react-qr-code'
import Link from 'next/link'

const APP_URL = 'https://alza-ps-ai-tools.vercel.app'
const QR_URL = 'https://alza-ps-ai-tools.vercel.app?utm_source=qr'

export default function QRPage() {
  const [copied, setCopied] = useState(false)
  const qrRef = useRef<HTMLDivElement>(null)

  function copyLink() {
    navigator.clipboard.writeText(APP_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function downloadPNG() {
    const svg = qrRef.current?.querySelector('svg')
    if (!svg) return
    const canvas = document.createElement('canvas')
    const size = 512
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const source = new XMLSerializer().serializeToString(svg)
    const img = new Image()
    img.onload = () => {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, size, size)
      ctx.drawImage(img, 0, 0, size, size)
      const a = document.createElement('a')
      a.href = canvas.toDataURL('image/png')
      a.download = 'ps-ai-tools-qr.png'
      a.click()
    }
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(source)))
  }

  return (
    <main className="min-h-screen flex flex-col items-center" style={{ backgroundColor: '#1a1b50' }}>

      {/* Header */}
      <div className="w-full px-4 pt-10 pb-4 flex items-center justify-between print-hide"
        style={{ backgroundColor: '#222464' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: '#aaff00' }}>
            <span className="font-black text-sm" style={{ color: '#222464' }}>AI</span>
          </div>
          <span className="text-white font-bold text-lg">PS AI Tools</span>
        </div>
        <Link href="/"
          className="text-xs px-3 py-1.5 rounded-lg font-medium"
          style={{ backgroundColor: '#2d2f80', color: '#ffffffcc' }}>
          ← Zpět
        </Link>
      </div>

      {/* QR card – toto se tiskne */}
      <div className="print-area w-full max-w-xs mx-auto mt-8 mb-6 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Barevný header cardu */}
        <div className="px-6 py-5 text-center" style={{ backgroundColor: '#222464' }}>
          <p className="text-xs font-bold tracking-widest mb-1" style={{ color: '#aaff00' }}>
            NASKENUJ A OTEVŘI
          </p>
          <h2 className="text-white font-black text-2xl">PS AI Tools</h2>
          <p className="text-xs mt-1" style={{ color: '#ffffff77' }}>
            Tvůj průvodce AI nástroji
          </p>
        </div>

        {/* QR kód */}
        <div className="flex justify-center items-center p-8 bg-white" ref={qrRef}>
          <QRCode
            value={QR_URL}
            size={220}
            bgColor="#ffffff"
            fgColor="#222464"
            level="M"
          />
        </div>

        {/* URL pod QR */}
        <div className="px-6 pb-6 text-center">
          <p className="text-xs text-gray-400 font-mono">{APP_URL}</p>
        </div>
      </div>

      {/* Akční tlačítka */}
      <div className="w-full max-w-xs px-4 flex flex-col gap-3 print-hide">

        <button onClick={copyLink}
          className="w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-95"
          style={{ backgroundColor: '#aaff00', color: '#222464' }}>
          {copied ? '✓ Odkaz zkopírován!' : '📋  Kopírovat odkaz'}
        </button>

        <button onClick={downloadPNG}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all active:scale-95"
          style={{ backgroundColor: '#2d2f80', color: '#ffffff', border: '1px solid #3d3f9a' }}>
          ⬇️  Stáhnout QR jako PNG
        </button>

        <button onClick={() => window.print()}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all active:scale-95"
          style={{ backgroundColor: '#2d2f80', color: '#ffffff', border: '1px solid #3d3f9a' }}>
          🖨️  Tisknout
        </button>
      </div>

      {/* Tiskové styly */}
      <style>{`
        @media print {
          body { background: white !important; }
          .print-hide { display: none !important; }
          .print-area {
            box-shadow: none !important;
            margin: 40px auto !important;
            border-radius: 16px !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </main>
  )
}
