import { motion, useReducedMotion } from 'framer-motion'
import ProjectCard from '../molecules/ProjectCard'
import { useProfile } from '../../context/ProfileContext'

export default function ProjectsSection() {
  const { profileData } = useProfile()
  const prefersReducedMotion = useReducedMotion()

  if (!profileData) return null

  const projects = profileData.projects || []

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
        Proyectos
      </motion.h2>

      {projects.length === 0 ? (
        <p className="text-slate-500 text-center py-12 text-lg">
          No projects yet
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title + i} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
