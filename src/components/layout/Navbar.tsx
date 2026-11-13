import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

import { navigation } from "../../data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="font-mono text-sm font-semibold">
          Marlou Jay C. Tabil
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            {theme === "dark" ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
            <span>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="text-[var(--color-text)] md:hidden"
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[var(--color-border)] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;