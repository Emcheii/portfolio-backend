import { Mail } from "lucide-react";

import type { AboutContact } from "../../../types/about";

interface ContactStripProps {
  data: AboutContact;
}

function ContactStrip({ data }: ContactStripProps) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl border border-outline-variant/20 bg-surface-container-low p-3 font-mono text-xs">
      <div className="flex min-w-0 items-center gap-2 text-on-surface-variant">
        <Mail
          size={18}
          className="shrink-0 text-primary"
          aria-hidden="true"
        />

        <span className="truncate">{data.email}</span>
      </div>

      <a
        href={`mailto:${data.email}`}
        className="shrink-0 rounded bg-surface-container-high px-2.5 py-1.5 text-[10px] font-medium text-primary transition-colors hover:bg-surface-container-highest"
      >
        {data.buttonLabel}
      </a>
    </div>
  );
}

export default ContactStrip;