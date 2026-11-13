import SkillCategoryCard from "../components/features/skills/SkillCategoryCard";
import { skillsData } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">
          {skillsData.title}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.categories.map((category) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;