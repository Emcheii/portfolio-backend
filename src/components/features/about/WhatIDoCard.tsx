import { Server, Database, Network, Brain, Code2 } from "lucide-react";
import type { WhatIDoItem } from "../../../types/about";

interface WhatIDoCardProps {
  item: WhatIDoItem;
}

const accentClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

const iconMap = {
  dns: Server,
  database: Database,
  api: Network,
  psychology: Brain,
};

function WhatIDoCard({ item }: WhatIDoCardProps) {
  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Code2;

  return (
    <article className="flex flex-col gap-2 rounded-xl border border-outline-variant/20 bg-surface-container-low p-3 shadow-sm">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded bg-surface-container-high ${accentClasses[item.accent]}`}
        >
          <Icon size={18} aria-hidden="true" />
        </div>

        <h3 className="text-[15px] font-semibold leading-snug text-on-surface">
          {item.title}
        </h3>
      </div>

      <p className="text-xs leading-relaxed text-on-surface-variant">
        {item.description}
      </p>
    </article>
  );
}

export default WhatIDoCard;