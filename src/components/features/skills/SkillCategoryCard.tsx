import type { SkillCategory } from "../../../types/skill";
import SkillBadge from "./SkillBadge";

interface SkillCategoryCardProps {
  category: SkillCategory;
}

function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const Icon = category.icon;

  return (
    <article className="flex flex-col gap-5 rounded-lg border border-outline-variant p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon size={20} aria-hidden="true" />

          <h3 className="font-semibold">
            {category.title}
          </h3>
        </div>

        <span className="font-mono text-xs text-on-surface-variant">
          {category.number}
        </span>
      </div>

      <div className="h-px w-full bg-outline-variant" />

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </article>
  );
}

export default SkillCategoryCard;