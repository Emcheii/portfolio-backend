import { useEffect } from "react";
import {
  Activity,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
  Route,
  Terminal,
  X,
} from "lucide-react";

import type { ProjectItem } from "../../../types/project";

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const specification = project.specification;
  const images = specification?.images ?? [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0a0e17]/80 p-3 backdrop-blur-md sm:p-4 md:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="my-auto flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0f131c] text-slate-200 shadow-2xl"
      >
        {/* Modal Header */}
        <header className="flex shrink-0 flex-col gap-3 border-b border-slate-800/80 bg-[#181b25]/95 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex items-center gap-1.5 rounded border border-emerald-800/50 bg-emerald-950/50 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400 sm:text-[11px]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Project // Architecture & Deep Dive
            </span>

            <span className="hidden truncate font-mono text-xs text-slate-500 sm:inline">
              {project.id}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 font-mono text-xs text-slate-200 transition hover:bg-slate-800"
                >
                  <Code2 size={14} />
                  Repo
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded border border-emerald-600/40 bg-emerald-500/10 px-2.5 py-1.5 font-mono text-xs text-emerald-400 transition hover:bg-emerald-500/20"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700/50 text-slate-400 transition hover:bg-slate-700 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6">
          <div className="space-y-6">
            {/* Project Overview */}
            <section className="space-y-3 border-b border-slate-800/60 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                {project.category && (
                  <span className="rounded border border-emerald-800/40 bg-emerald-950/40 px-2.5 py-1 font-mono text-xs text-emerald-400">
                    {project.category}
                  </span>
                )}

                <span className="flex items-center gap-1.5 rounded border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-400">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.status === "active"
                        ? "bg-emerald-400"
                        : "bg-slate-500"
                    }`}
                  />
                  {project.status === "active" ? "Active" : "Completed"}
                </span>

                {specification?.version && (
                  <span className="font-mono text-xs text-slate-500">
                    {specification.version}
                  </span>
                )}
              </div>

              <h2
                id="project-modal-title"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                {project.title}
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
                {specification?.overview || project.details || project.description}
              </p>

              {specification?.role && (
                <p className="font-mono text-xs text-slate-500">
                  Role: <span className="text-emerald-400">{specification.role}</span>
                </p>
              )}
            </section>

            {/* Project Images */}
            {images.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                    <Layers3 size={15} />
                    Project Architecture & Screenshots
                  </h3>

                  <span className="font-mono text-[11px] text-slate-500">
                    {images.length} {images.length === 1 ? "Image" : "Images"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {images.map((image, index) => (
                    <figure
                      key={image.id}
                      className={`overflow-hidden rounded-lg border border-slate-800 bg-[#0a0e17] ${
                        index === 0 && images.length > 1
                          ? "sm:col-span-2"
                          : ""
                      }`}
                    >
                      <div
                        className={`bg-slate-900 ${
                          index === 0 && images.length > 1
                            ? "aspect-video"
                            : "aspect-video"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {(image.label || image.caption) && (
                        <figcaption className="space-y-1 border-t border-slate-800 bg-[#181b25]/80 p-3">
                          {image.label && (
                            <p className="font-mono text-xs font-semibold text-white">
                              {image.label}
                            </p>
                          )}

                          {image.caption && (
                            <p className="text-xs leading-relaxed text-slate-400">
                              {image.caption}
                            </p>
                          )}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* Project Metrics */}
            {specification?.metrics.length ? (
              <section className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {specification.metrics.map((metric) => (
                  <div
                    key={`${metric.value}-${metric.label}`}
                    className="rounded-lg border border-slate-800 bg-[#181b25] p-3"
                  >
                    <p className="font-mono text-sm font-bold text-emerald-400">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </section>
            ) : null}

            {/* Architecture Flow */}
            {specification?.flowSteps.length ? (
              <section>
                <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                  <Route size={15} />
                  Architecture & Data Flow Lifecycle
                </h3>

                <div className="space-y-2">
                  {specification.flowSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className="flex items-start gap-3 rounded border border-slate-800/80 bg-[#181b25] p-3"
                    >
                      <span className="shrink-0 rounded border border-emerald-800/40 bg-emerald-950/60 px-2 py-1 font-mono text-[10px] font-bold text-emerald-400">
                        STEP {index + 1}
                      </span>

                      <div className="min-w-0 text-xs leading-relaxed text-slate-300">
                        <strong className="text-white">{step.title}: </strong>
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Engineering Challenges */}
            {specification?.challenges.length ? (
              <section>
                <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                  <Activity size={15} />
                  Key Engineering Challenges & Solutions
                </h3>

                <div className="space-y-2.5">
                  {specification.challenges.map((challenge) => (
                    <article
                      key={challenge.id}
                      className="rounded-lg border border-slate-800 bg-[#0a0e17]/80 p-3"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="font-mono text-xs font-semibold text-emerald-400">
                          {challenge.title}
                        </h4>

                        <span className="font-mono text-[10px] text-slate-500">
                          {challenge.category}
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {challenge.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Code Sample */}
            {specification?.codeSample && (
              <section>
                <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                  <Terminal size={15} />
                  Code Implementation
                </h3>

                <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#0a0e17]">
                  {specification.codeSample.filename && (
                    <div className="border-b border-slate-800 px-4 py-2 font-mono text-xs text-slate-400">
                      {specification.codeSample.filename}
                    </div>
                  )}

                  <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-300">
                    <code>{specification.codeSample.code}</code>
                  </pre>

                  <div className="border-t border-slate-800 px-4 py-2 font-mono text-[10px] uppercase text-slate-500">
                    {specification.codeSample.language}
                  </div>
                </div>
              </section>
            )}

            {/* Technology Breakdown */}
            {specification?.technologyGroups.length ? (
              <section>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-400">
                  Technology & Infrastructure Breakdown
                </h3>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {specification.technologyGroups.map((group) => (
                    <div
                      key={group.id}
                      className="rounded border border-slate-800 bg-[#181b25] p-3"
                    >
                      <p className="mb-2 font-mono text-[10px] uppercase text-slate-500">
                        {group.title}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {group.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded border border-slate-800 bg-slate-900 px-2 py-1 font-mono text-[11px] text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;