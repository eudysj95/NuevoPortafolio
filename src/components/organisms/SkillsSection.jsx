import { motion, useReducedMotion } from 'framer-motion'
import SkillGroup from '../molecules/SkillGroup'
import { useProfile } from '../../context/ProfileContext'

export default function SkillsSection() {
  const { profileData, profileId } = useProfile()
  const prefersReducedMotion = useReducedMotion()

  if (!profileData) return null

  const skills = profileData.skills || []

  const fadeUp = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' } }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-slate-100 mb-10"
      >
        Habilidades
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <SkillGroup
            key={group.category}
            category={group.category}
            icon={group.icon}
            items={group.items}
            profileId={profileId}
          />
        ))}
      </div>
    </section>
  )
}
