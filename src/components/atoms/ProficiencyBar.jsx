import { motion } from 'framer-motion'

export default function ProficiencyBar({ label, proficiency, color = 'bg-cyan-400', className = '' }) {
  const clamped = Math.min(100, Math.max(0, proficiency))

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && (
        <span className="text-sm text-slate-300 w-24 shrink-0">{label}</span>
      )}
      <div className="flex-1 h-2 rounded-full bg-slate-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
      <span className="text-xs text-slate-500 w-8 text-right tabular-nums">
        {clamped}%
      </span>
    </div>
  )
}
