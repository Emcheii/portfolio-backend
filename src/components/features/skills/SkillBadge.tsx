import type { SkillItem } from "../../../types/skill";

interface SkillBadgeProps {
  skill: SkillItem;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  const Icon = skill.icon;

  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-outline-variant px-3 py-2">
      <Icon size={16} aria-hidden="true" />
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}

export default SkillBadge;