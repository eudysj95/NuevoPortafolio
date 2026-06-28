import { motion, useReducedMotion } from 'framer-motion'
import { useProfile } from '../../context/ProfileContext'

const accentGradientMap = {
  frontend: 'from-cyan-400/20 via-cyan-400/10 to-transparent',
  analista: 'from-amber-400/20 via-amber-400/10 to-transparent',
  gestion: 'from-emerald-400/20 via-emerald-400/10 to-transparent',
  ia: 'from-violet-400/20 via-violet-400/10 to-transparent',
  fullstack: 'from-indigo-400/20 via-indigo-400/10 to-transparent',
}

const accentTextMap = {
  frontend: 'text-cyan-400',
  analista: 'text-amber-400',
  gestion: 'text-emerald-400',
  ia: 'text-violet-400',
  fullstack: 'text-indigo-400',
}

export default function HeroSection() {
  const { profileData, profileId, allProfiles } = useProfile()
  const prefersReduced = useReducedMotion()

  const hasProfile = profileId && profileData
  const profile = hasProfile ? profileData.profile : null

  const accentKey = hasProfile && profileId ? profileId : 'frontend'
  const gradientClass = accentGradientMap[accentKey] || accentGradientMap.frontend
  const textClass = accentTextMap[accentKey] || accentTextMap.frontend

  const displayName = hasProfile ? profile.name : 'Eudys Mora'
  const displayTitle = hasProfile
    ? profile.title
    : allProfiles.map((p) => p.name).join(' \u00B7 ')

  const fadeUp = prefersReduced
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Animated background accent */}
      <div
        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br ${gradientClass} blur-3xl pointer-events-none`}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100 mb-4"
        >
          {displayName}
        </motion.h1>

        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, delay: prefersReduced ? 0 : 0.15, ease: 'easeOut' }}
          className={`text-lg sm:text-xl ${textClass} max-w-2xl mx-auto`}
        >
          {displayTitle}
        </motion.p>

        {hasProfile && profile.tagline && (
          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, delay: prefersReduced ? 0 : 0.3, ease: 'easeOut' }}
            className="mt-4 text-base text-slate-400 max-w-xl mx-auto"
          >
            {profile.tagline}
          </motion.p>
        )}
      </div>
    </section>
  )
}
