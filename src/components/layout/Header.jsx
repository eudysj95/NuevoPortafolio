import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'

const accentColorMap = {
  frontend: 'text-cyan-400',
  analista: 'text-amber-400',
  gestion: 'text-emerald-400',
  ia: 'text-violet-400',
  fullstack: 'text-indigo-400',
}

const emojiMap = {
  frontend: '\uD83D\uDCBB',
  analista: '\uD83D\uDCCA',
  gestion: '\uD83D\uDCCB',
  ia: '\uD83E\uDDE0',
  fullstack: '\uD83C\uDF1F',
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { allProfiles } = useProfile()

  const links = allProfiles.map((p) => ({
    to: `/${p.id}`,
    label: p.name,
    color: accentColorMap[p.id] || 'text-slate-400',
    emoji: emojiMap[p.id] || '',
  }))

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-100 hover:text-white transition-colors"
        >
          <span className="text-2xl" role="img" aria-label="wave">
            👋
          </span>
          Eudys Mora
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {links.map(({ to, label, color }) => {
            const isActive = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors ${
                  isActive ? color : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-slate-200 transition-colors"
          aria-label="Toggle menu"
          type="button"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ to, label, color, emoji }) => {
              const isActive = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    isActive ? color : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-lg">{emoji}</span>
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
