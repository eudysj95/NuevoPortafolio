import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'

const profileStyleMap = {
  frontend: {
    borderClass: 'border-cyan-400/50 hover:border-cyan-400',
    textClass: 'text-cyan-400',
    bgClass: 'bg-cyan-400',
    shadowClass: 'hover:shadow-cyan-500/10',
    emoji: '\uD83D\uDCBB',
  },
  analista: {
    borderClass: 'border-amber-400/50 hover:border-amber-400',
    textClass: 'text-amber-400',
    bgClass: 'bg-amber-400',
    shadowClass: 'hover:shadow-amber-500/10',
    emoji: '\uD83D\uDCCA',
  },
  gestion: {
    borderClass: 'border-emerald-400/50 hover:border-emerald-400',
    textClass: 'text-emerald-400',
    bgClass: 'bg-emerald-400',
    shadowClass: 'hover:shadow-emerald-500/10',
    emoji: '\uD83D\uDCCB',
  },
  ia: {
    borderClass: 'border-violet-400/50 hover:border-violet-400',
    textClass: 'text-violet-400',
    bgClass: 'bg-violet-400',
    shadowClass: 'hover:shadow-violet-500/10',
    emoji: '\uD83E\uDDE0',
  },
  fullstack: {
    borderClass: 'border-indigo-400/50 hover:border-indigo-400',
    textClass: 'text-indigo-400',
    bgClass: 'bg-indigo-400',
    shadowClass: 'hover:shadow-indigo-500/10',
    emoji: '\uD83C\uDF1F',
  },
}

export default function ProfileSelector() {
  const { allProfiles } = useProfile()
  const prefersReduced = useReducedMotion()

  const stagger = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {allProfiles.map((profile, i) => {
          const style = profileStyleMap[profile.id]
          if (!style) return null

          return (
            <motion.div
              key={profile.id}
              initial={stagger.initial}
              animate={stagger.animate}
              transition={{
                duration: 0.5,
                delay: prefersReduced ? 0 : 0.15 * (i + 1),
                ease: 'easeOut',
              }}
            >
              <Link
                to={`/${profile.id}`}
                className={`block p-6 rounded-xl border ${style.borderClass} bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${style.shadowClass}`}
              >
                <span className="block text-3xl mb-3" role="img" aria-label={profile.name}>
                  {style.emoji}
                </span>
                <h2 className={`text-xl font-semibold ${style.textClass} mb-2`}>
                  {profile.name}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {profile.tagline || profile.title}
                </p>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
