import { BadgeCheck } from "lucide-react";
import type { AboutManifest } from "../../../types/about";

interface ProfileManifestProps {
  data: AboutManifest;
}

function ProfileManifest({ data }: ProfileManifestProps) {
  return (
    <section className="flex flex-col gap-3 rounded-xl border border-outline-variant/20 bg-surface-container p-5 shadow-sm">
      <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
        <div className="flex items-center gap-2">
          <BadgeCheck
            size={18}
            className="text-primary"
            aria-hidden="true"
          />

          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-on-surface">
            Profile Manifest
          </h2>
        </div>

        <span className="font-mono text-[11px] text-outline">
          status: active
        </span>
      </div>

      <dl className="flex flex-col divide-y divide-outline-variant/20 font-mono text-xs">
        <div className="flex flex-col gap-1 py-2.5">
          <dt className="text-[10px] uppercase tracking-wider text-outline">
            Current Role
          </dt>
          <dd className="font-medium text-on-surface">
            {data.currentRole}
          </dd>
        </div>

        <div className="flex flex-col gap-1 py-2.5">
          <dt className="text-[10px] uppercase tracking-wider text-outline">
            Focus
          </dt>
          <dd className="font-medium text-primary">
            {data.focus}
          </dd>
        </div>

        <div className="flex flex-col gap-1.5 py-2.5">
          <dt className="text-[10px] uppercase tracking-wider text-outline">
            Availability
          </dt>

          <dd className="inline-flex w-fit items-center gap-2 rounded border border-primary/30 bg-surface-container-low px-2.5 py-1 font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {data.availability}
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default ProfileManifest;