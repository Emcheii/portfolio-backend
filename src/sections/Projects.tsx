import { useMemo, useState } from "react";

import { projectsData } from "../data/projects";
import type { ProjectItem } from "../types/project";

import ProjectCard from "../components/features/projects/ProjectCard";
import ProjectDetailsModal from "../components/features/projects/ProjectDetailsModal";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const projects = projectsData.projects;

  const filterCounts = useMemo(
    () => ({
      all: projects.length,
      active: projects.filter((project) => project.status === "active").length,
      completed: projects.filter(
        (project) => project.status === "completed",
      ).length,
    }),
    [projects],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) => project.status === activeFilter);
  }, [activeFilter, projects]);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="w-full scroll-mt-20 px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Section Header */}
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {projectsData.title}
              </h2>

              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                {projectsData.subtitle}
              </p>
            </div>

            {/* Project Filters */}
            <div className="flex w-fit flex-wrap items-center gap-1 rounded-lg bg-[#181b25] p-1">
              {projectsData.filters.map((filter) => {
                const isActive = activeFilter === filter.id;

                const count =
                  filterCounts[filter.id as keyof typeof filterCounts] ?? 0;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    aria-pressed={isActive}
                    className={`rounded px-2.5 py-1.5 font-mono text-xs transition-colors ${
                      isActive
                        ? "bg-[#262a34] text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {filter.label} [{count}]
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onReadMore={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-800 bg-[#101522] px-5 py-12 text-center">
              <p className="font-mono text-sm text-slate-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Projects;