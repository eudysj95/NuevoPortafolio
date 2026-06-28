function isValidUrl(string) {
  try {
    const url = new URL(string)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export default function ExternalLink({ href, children, className = '', ...props }) {
  if (!href || !isValidUrl(href)) {
    return (
      <span className={`text-slate-500 cursor-not-allowed ${className}`} {...props}>
        {children || 'Link no disponible'}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 transition-colors ${className}`}
      {...props}
    >
      {children}
      <svg
        className="w-3 h-3 shrink-0 opacity-60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}
