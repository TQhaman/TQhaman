const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-cyan/25 bg-ink-soft/95 shadow-lg shadow-ink/30 backdrop-blur-sm">
      <div className="site-container flex min-h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="inline-flex min-h-11 items-center font-pixel font-semibold text-amber no-underline hover:text-orange"
        >
          Qhamani Twaku
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-2 font-medium text-cyan no-underline hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <details className="mobile-menu relative md:hidden">
          <summary
            className="mobile-menu-trigger"
            aria-label="Toggle primary navigation"
            title="Toggle navigation"
          >
            <span className="mobile-menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="panel absolute top-[calc(100%+0.5rem)] right-0 w-64 p-2"
          >
            <ul className="grid gap-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-11 items-center border-l-2 border-transparent px-3 font-medium text-cyan no-underline hover:border-amber hover:bg-ink-soft hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
