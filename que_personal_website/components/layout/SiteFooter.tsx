export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan/20 bg-ink-soft/95 backdrop-blur-sm">
      <div className="site-container flex flex-wrap items-center justify-between gap-4 py-6">
        <p className="text-muted">
          &copy; {currentYear} Built by QWS Digital
        </p>

        <a
          href="#home"
          className="inline-flex min-h-11 items-center font-pixel text-cyan no-underline hover:text-amber"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
