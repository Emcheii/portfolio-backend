import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import type { ProjectItem } from "../../../types/project";

interface ProjectCardProps {
  project: ProjectItem;
  onReadMore: (project: ProjectItem) => void;
}

function ProjectCard({ project, onReadMore }: ProjectCardProps) {
  const isActive = project.status === "active";

  return (
    <article className="flex min-w-0 flex-col justify-between rounded-xl border border-slate-800 bg-[#101522] p-4 transition-colors hover:border-slate-700 sm:p-6">
      <div>
        {/* Single Project Preview Image */}
        {project.image && (
          <div className="mb-4 h-44 overflow-hidden rounded border border-slate-800 bg-[#0a0e17]">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        )}

        {/* Category, Status, and Date */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            {project.category && (
              <span className="max-w-full truncate rounded-md border border-emerald-800/40 bg-emerald-950/40 px-2.5 py-1 font-mono text-xs text-emerald-400">
                {project.category}
              </span>
            )}

            <span
              className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs ${
                isActive
                  ? "border-emerald-800/40 bg-emerald-950/30 text-emerald-400"
                  : "border-slate-800 bg-slate-900 text-slate-400"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isActive ? "bg-emerald-400" : "bg-slate-500"
                }`}
              />
              {isActive ? "Active" : "Completed"}
            </span>
          </div>

          {project.date && (
            <span className="font-mono text-xs text-slate-500">
              {project.date}
            </span>
          )}
        </div>

        {/* Project Information */}
        <h3 className="mb-2 text-xl font-bold tracking-tight text-white transition-colors hover:text-emerald-400">
          {project.title}
        </h3>

        {project.description && (
          <p className="mb-4 min-h-10 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>
        )}

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded border border-slate-800 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Project Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/60 pt-3">
        <div className="flex flex-wrap items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-200 transition hover:bg-slate-800"
            >
              <Code2 size={14} />
              GitHub Repo
              <ArrowUpRight size={12} />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-emerald-600/40 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-400 transition hover:bg-emerald-500/20"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => onReadMore(project)}
          className="flex items-center gap-1.5 px-2 py-1.5 font-mono text-xs text-slate-400 transition hover:text-white"
        >
          <GitBranch size={14} />
          Read More
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;