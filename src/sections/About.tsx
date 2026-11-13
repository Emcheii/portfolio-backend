import {
  Terminal,
  MapPin,
  FolderOpen,
  FileText,
} from "lucide-react";

import { aboutData } from "../data/about";

import WhatIDoCard from "../components/features/about/WhatIDoCard";
import ProfileManifest from "../components/features/about/ProfileManifest";
import TerminalRuntime from "../components/features/about/TerminalRuntime";
import ContactStrip from "../components/features/about/ContactStrip";

function About() {
  const { profile, whatIDo, manifest, terminal, contact } = aboutData;

  return (
    <section id="about" className="w-full bg-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            {/* Profile Introduction */}
            <div className="flex flex-col gap-4 rounded-xl border border-outline-variant/20 bg-surface-container p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                <div className="inline-flex items-center gap-1.5 rounded border border-outline-variant/20 bg-surface-container-low px-2.5 py-1 font-mono text-xs text-primary">
                  <Terminal size={15} />
                  <span>{profile.name.toLowerCase()}</span>
                </div>

                <span className="font-mono text-xs text-outline">
                  profile.id
                </span>
              </div>

              <div className="flex flex-col items-center gap-5 rounded-xl border border-outline-variant/20 bg-surface-container-low p-5 shadow-sm sm:flex-row sm:items-start">
                <div className="relative shrink-0">
                  <img
                    src={profile.image}
                    alt={profile.imageAlt}
                    className="h-32 w-32 rounded-xl border-2 border-primary/40 object-cover shadow-lg sm:h-36 sm:w-36"
                  />

                  <span className="absolute -bottom-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-surface-container-low bg-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-surface-container-lowest" />
                  </span>
                </div>

                <div className="flex min-w-0 flex-col items-center justify-center gap-1 text-center sm:items-start sm:pt-2 sm:text-left">
                  <h1 className="font-display text-3xl font-bold tracking-tight text-on-surface sm:text-5xl">
                    {profile.name}
                  </h1>

                  <span className="mt-1 font-mono text-[15px] font-medium tracking-tight text-primary sm:text-base">
                    {profile.role}
                  </span>

                  <div className="mt-2 inline-flex items-center gap-2 rounded border border-outline-variant/20 bg-surface-container px-2.5 py-1 font-mono text-xs text-outline">
                    <MapPin size={14} className="text-primary" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                {profile.introduction}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 font-mono text-xs font-medium text-on-primary transition-colors hover:bg-primary-fixed"
                >
                  <FolderOpen size={16} />
                  View Projects
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-surface-container-high px-4 py-2 font-mono text-xs font-medium text-on-surface transition-colors hover:bg-surface-container-highest"
                >
                  <FileText size={16} />
                  Resume
                </a>
              </div>
            </div>

            {/* What I Do */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-secondary">
                  {whatIDo.label}
                </span>

                <span className="font-mono text-xs text-outline">
                  {whatIDo.countLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {whatIDo.items.map((item) => (
                  <WhatIDoCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <ProfileManifest data={manifest} />
            <TerminalRuntime data={terminal} />
            <ContactStrip data={contact} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;