export default function TestimonialCard({ testimonial }) {
  if (!testimonial) return null

  const { name, role, quote } = testimonial

  return (
    <figure className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <svg
        className="w-6 h-6 text-slate-600 mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
      </svg>

      <blockquote className="text-sm text-slate-300 leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption>
        <p className="text-sm font-medium text-slate-100">{name}</p>
        <p className="text-xs text-slate-500">{role}</p>
      </figcaption>
    </figure>
  )
}
