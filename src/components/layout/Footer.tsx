import {
  footerProfile,
  footerNavigation,
  footerExpertise,
  footerProtocols,
  footerSpecifications,
  footerStatus,
} from "../../data/footer";

function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-[#0c1018]">
      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-6 lg:px-9">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_0.8fr_0.8fr_0.8fr] lg:gap-6">

          {/* Profile */}
          <div>
            <h3 className="text-sm font-semibold">
              {footerProfile.name}
              <span className="text-[var(--color-text-subtle)]">
                {" / "}{footerProfile.role}
              </span>
            </h3>

            <p className="mt-4 max-w-sm font-serif text-sm leading-relaxed text-[var(--color-text-muted)]">
              {footerProfile.description}
            </p>

            <div className="mt-3 inline-flex gap-2 border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs text-[var(--color-accent)]">
              ● {footerProfile.availability}
            </div>
          </div>

          {/* Index */}
          <div>
            <h4 className="mb-2 text-xs text-[var(--color-text-subtle)]">
              INDEX
            </h4>

            {footerNavigation.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="mb-2 block text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
              >
                {item.number} // {item.label}
              </a>
            ))}
          </div>

          {/* Expertise */}
          <div>
            <h4 className="mb-2 text-xs text-[var(--color-text-subtle)]">
              EXPERTISE
            </h4>

            {footerExpertise.map((item) => (
              <p key={item} className="mb-2 text-xs text-[var(--color-text-muted)]">
                <span className="text-[var(--color-accent)]">&gt;</span>{" "}
                {item}
              </p>
            ))}
          </div>

          {/* Protocols */}
          <div>
            <h4 className="mb-2 text-xs text-[var(--color-text-subtle)]">
              PROTOCOLS
            </h4>

            {footerProtocols.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.icon === "mail" ? undefined : "_blank"}
                rel={item.icon === "mail" ? undefined : "noreferrer"}
                className="mb-2 flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
              >
                <span className="text-[var(--color-accent)]">
                  {item.icon === "mail" ? "✉" : item.icon === "github" ? "⌘" : "✣"}
                </span>
                {item.value}
              </a>
            ))}
          </div>

          {/* Specifications */}
          <div>
            <h4 className="mb-2 text-xs text-[var(--color-text-subtle)]">
              SPECIFICATIONS
            </h4>

            {footerSpecifications.map((item) => (
              <div key={item.label} className="mb-3 text-xs">
                <p className="text-[var(--color-text-subtle)]">
                  {item.label}
                </p>
                <p className="text-[var(--color-text-muted)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-border)] pt-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-[var(--color-text-subtle)]">
            © {new Date().getFullYear()} {footerProfile.name}.{" "}
            {footerStatus.copyright}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-[10px]">
            {footerStatus.indicators.map((item, index) => (
              <span
                key={item}
                className={`bg-[var(--color-surface)] px-2 py-1 ${
                  index === 0
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-subtle)]"
                }`}
              >
                {index === 0 && "● "}
                {item}
              </span>
            ))}

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="bg-[var(--color-surface)] px-3 py-1 text-sm hover:text-[var(--color-accent)]"
            >
              ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;