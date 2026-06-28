import SkillIcon from '../atoms/SkillIcon'
import ProficiencyBar from '../atoms/ProficiencyBar'

const accentMap = {
  frontend: 'bg-cyan-400',
  ai: 'bg-violet-400',
  management: 'bg-emerald-400',
}

export default function SkillGroup({ category, icon, items, profileId = 'frontend' }) {
  const barColor = accentMap[profileId] || 'bg-cyan-400'

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
      <div className="flex items-center gap-2 mb-4">
        {icon && <SkillIcon name={category} icon={icon} size="sm" />}
        <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
          {category}
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2">
            <SkillIcon name={skill.name} icon={skill.icon} size="sm" />
            <ProficiencyBar
              label={skill.name}
              proficiency={skill.proficiency}
              color={barColor}
              className="flex-1"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
