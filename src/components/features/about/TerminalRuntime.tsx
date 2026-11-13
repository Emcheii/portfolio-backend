import type { TerminalInfo } from "../../../types/about";

interface TerminalRuntimeProps {
  data: TerminalInfo;
}

function TerminalRuntime({ data }: TerminalRuntimeProps) {
  return (
    <section className="flex flex-col gap-2 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-4 font-mono text-[11px] shadow-inner">
      <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2 text-outline">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-error" />
          <span className="h-2 w-2 rounded-full bg-surface-variant" />
          <span className="h-2 w-2 rounded-full bg-primary" />

          <span className="ml-1 text-on-surface-variant">
            {data.environment}
          </span>
        </div>

        <span>node: {data.node}</span>
      </div>

      <div className="leading-relaxed text-on-surface-variant">
        <p>
          <span className="text-primary">$</span> {data.command}
        </p>

        <p className="text-on-surface">{"{"}</p>

        <p className="pl-4">
          <span className="text-outline">"identity": </span>
          <span className="text-primary">"{data.identity}"</span>,
        </p>

        <p className="pl-4">
          <span className="text-outline">"program": </span>
          <span className="text-secondary">"{data.program}"</span>,
        </p>

        <p className="pl-4">
          <span className="text-outline">"target_roles": </span>
          <span className="text-on-surface">[</span>
          {data.targetRoles.map((role, index) => (
            <span key={role}>
              <span className="text-on-surface">"{role}"</span>
              {index < data.targetRoles.length - 1 && ", "}
            </span>
          ))}
          <span className="text-on-surface">],</span>
        </p>

        <p className="pl-4">
          <span className="text-outline">"location": </span>
          <span className="text-on-surface">"{data.location}"</span>
        </p>

        <p className="text-on-surface">{"}"}</p>
      </div>
    </section>
  );
}

export default TerminalRuntime;