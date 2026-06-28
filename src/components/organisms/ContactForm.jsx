import { useProfile } from '../../context/ProfileContext'

export default function ContactForm() {
  const { profileData } = useProfile()
  const profile = profileData?.profile

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
        Contacto
      </h2>

      <div className="space-y-4">
        {profile?.email && (
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <span className="text-lg">📧</span>
            <span>{profile.email}</span>
          </a>
        )}

        {profile?.phone && (
          <div className="flex items-center gap-3 text-slate-300">
            <span className="text-lg">📞</span>
            <span>{profile.phone}</span>
          </div>
        )}

        {profile?.location && (
          <div className="flex items-center gap-3 text-slate-300">
            <span className="text-lg">📍</span>
            <span>{profile.location}</span>
          </div>
        )}

        {profile?.social?.github && (
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <span className="text-lg">🐙</span>
            <span>GitHub</span>
          </a>
        )}

        {profile?.social?.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <span className="text-lg">💼</span>
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </section>
  )
}
