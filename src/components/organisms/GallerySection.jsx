import ProjectCard from '../molecules/ProjectCard'

export default function GallerySection({ projects }) {
  if (!projects || projects.length === 0) return null

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8 text-center">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
