import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="space-y-4 py-10"
    >
      <SectionHeading id="contact-heading" title="Contact" />

      <p>
        You can contact me by email or connect with me through the following
        platforms.
      </p>

      <ul className="space-y-3">
        {socialLinks.map((link) => (
          <li key={link.platform}>
            {link.url ? (
              <a
                href={link.url}
                aria-label={link.accessibleLabel}
                className="focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {link.label}
              </a>
            ) : (
              <span>{link.label} — unavailable</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
