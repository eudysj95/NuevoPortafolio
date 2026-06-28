import { useState, useEffect } from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          &copy; {year} Eudys Mora. Todos los derechos reservados.
        </p>

        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/eudysj95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eudys-mora-a16431255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
          >
            LinkedIn
          </a>

          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700 transition-all text-sm"
              aria-label="Back to top"
              type="button"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}
