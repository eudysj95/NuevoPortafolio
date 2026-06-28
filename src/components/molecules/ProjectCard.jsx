import SkillIcon from '../atoms/SkillIcon'
import ExternalLink from '../atoms/ExternalLink'

export default function ProjectCard({ project }) {
  if (!project) return null

  const { title, description, tech = [], demoUrl, codeUrl } = project

  return (
    <article className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-slate-100 mb-2">{title}</h3>

      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {description}
      </p>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-xs text-slate-300">
              <SkillIcon name={t} icon={t.toLowerCase().replace(/\s+/g, '')} size="sm" />
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-auto">
        {demoUrl && (
          <ExternalLink href={demoUrl} className="text-sm text-cyan-400 hover:text-cyan-300">
            Demo
          </ExternalLink>
        )}
        {codeUrl && (
          <ExternalLink href={codeUrl} className="text-sm text-slate-400 hover:text-slate-200">
            Código
          </ExternalLink>
        )}
      </div>
    </article>
  )
}
