import { motion, useReducedMotion } from 'framer-motion'
import { useProfile } from '../../context/ProfileContext'

const dotAccentMap = {
  frontend: 'bg-cyan-400 shadow-cyan-500/30',
  analista: 'bg-amber-400 shadow-amber-500/30',
  gestion: 'bg-emerald-400 shadow-emerald-500/30',
  ia: 'bg-violet-400 shadow-violet-500/30',
  fullstack: 'bg-indigo-400 shadow-indigo-500/30',
}

const lineAccentMap = {
  frontend: 'bg-cyan-400/20',
  analista: 'bg-amber-400/20',
  gestion: 'bg-emerald-400/20',
  ia: 'bg-violet-400/20',
  fullstack: 'bg-indigo-400/20',
}

function TimelineList({ items, dotClass, lineClass, prefersReduced }) {
  if (!items || items.length === 0) return null

  return (
    <div className="relative">
      {/* Vertical center line — hidden on mobile */}
      <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 ${lineClass} hidden md:block`} />

      {/* Mobile vertical line */}
      <div className={`absolute left-4 top-0 bottom-0 w-px ${lineClass} md:hidden`} />

      {items.map((entry, i) => {
        const isLeft = i % 2 === 0
        const contentSide = isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
        const offsetClass = isLeft ? 'md:mr-[50%]' : 'md:ml-[50%]'
        const dotSide = isLeft ? 'md:right-[-9px]' : 'md:left-[-9px]'

        const animation = prefersReduced
          ? {}
          : {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-50px' },
            }

        return (
          <motion.div
            key={entry.company + entry.period + entry.role + entry.degree}
            {...animation}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : i * 0.1, ease: 'easeOut' }}
            className={`relative pl-12 md:pl-0 ${offsetClass} pb-10 last:pb-0`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-[7px] md:left-1/2 top-1 w-[9px] h-[9px] rounded-full ${dotClass} shadow-lg -translate-x-1/2 ${dotSide}`}
            />

            <div className={contentSide}>
              <h3 className="text-lg font-semibold text-slate-100">
                {entry.role || entry.degree}
              </h3>
              <p className="text-sm text-slate-400 mt-0.5">
                {entry.company || entry.institution}
              </p>
              <p className="text-xs text-slate-500 mt-1 mb-2">
                {entry.period}
              </p>
              {entry.description && (
                <p className="text-sm text-slate-300 leading-relaxed">
                  {entry.description}
                </p>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function TimelineSection() {
  const { profileData, profileId } = useProfile()
  const prefersReduced = useReducedMotion()

  if (!profileData) return null

  const experience = profileData.experience || []
  const education = profileData.education || []
  const languages = profileData.languages || []
  const dotClass = dotAccentMap[profileId] || dotAccentMap.frontend
  const lineClass = lineAccentMap[profileId] || lineAccentMap.frontend

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-10">
        Experiencia
      </h2>

      {experience.length > 0 && (
        <>
          <h3 className="text-xl font-semibold text-slate-200 mb-6">Experiencia</h3>
          <TimelineList items={experience} dotClass={dotClass} lineClass={lineClass} prefersReduced={prefersReduced} />
        </>
      )}

      {education.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-200 mb-6">Formación</h3>
          <TimelineList items={education} dotClass={dotClass} lineClass={lineClass} prefersReduced={prefersReduced} />
        </div>
      )}

      {languages.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-200 mb-6">Idiomas</h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <p className="text-slate-100 font-medium">{lang.name}</p>
                <p className="text-sm text-slate-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
