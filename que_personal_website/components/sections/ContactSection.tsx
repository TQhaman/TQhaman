import SectionHeading from "@/components/ui/SectionHeading";
import { contactProfile, socialLinks } from "@/data/portfolio";

export default function ContactSection() {
  const emailLink = socialLinks.find((link) => link.platform === "Email");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="space-y-10 py-14"
    >
      <div className="space-y-3">
        <p className="font-pixel text-sm uppercase text-amber">
          Communication terminal
        </p>
        <SectionHeading id="contact-heading" title="Contact" />
      </div>

      <div className="panel overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-muted/30 bg-ink-soft px-5 py-3">
          <p className="font-pixel text-sm uppercase text-green">
            Comm-link // online
          </p>
          <p className="font-mono text-xs uppercase text-muted">
            {contactProfile.status}
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)]">
          <div className="space-y-6 p-5 md:p-7 lg:border-r lg:border-muted/30">
            <p className="font-mono text-sm">
              <span className="text-green" aria-hidden="true">
                ${" "}
              </span>
              <span className="text-amber">{contactProfile.command}</span>
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl text-paper">
                {contactProfile.heading}
              </h3>
              <p className="max-w-xl text-muted">
                {contactProfile.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {emailLink?.url ? (
                <a
                  href={emailLink.url}
                  aria-label={emailLink.accessibleLabel}
                  className="button"
                >
                  Email me
                </a>
              ) : null}
              <a
                href={contactProfile.cvUrl}
                download
                className="button-secondary"
              >
                Download CV
              </a>
            </div>
          </div>

          <ul className="divide-y divide-muted/25" aria-label="Contact links">
            {socialLinks.map((link) => (
              <li key={link.platform} className="p-5 md:px-7 md:py-5">
                {link.url ? (
                  <a
                    href={link.url}
                    aria-label={link.accessibleLabel}
                    className="group grid min-h-11 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-paper"
                  >
                    <span className="min-w-0">
                      <span className="block font-pixel text-xs uppercase text-cyan">
                        {link.platform}
                      </span>
                      <span className="mt-1 block break-words group-hover:text-cyan">
                        {link.label}
                      </span>
                    </span>
                    <span className="font-mono text-xs uppercase text-green">
                      Available
                    </span>
                  </a>
                ) : (
                  <div className="grid min-h-11 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-muted">
                    <span className="font-pixel text-xs uppercase">
                      {link.platform}
                    </span>
                    <span className="font-mono text-xs uppercase">
                      Unavailable
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
