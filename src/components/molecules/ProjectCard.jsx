export default function ProjectCard({ project }) {
  if (!project) return null

  const { title, description, tech = [], image, githubUrl, liveUrl } = project

  return (
    <article className="group rounded-xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-lg flex flex-col">
      {/* Image */}
      {image && (
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-slate-100 mb-2">{title}</h3>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech badges */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full bg-slate-800 text-xs font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-cyan-600 text-white text-sm font-bold hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-600/25"
            >
              Ver proyecto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
