import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="space-y-6 py-10"
    >
      <SectionHeading id="experience-heading" title="Experience" />

      {experience.map((entry) => (
        <article
          key={`${entry.title}-${entry.organisation}`}
          className="space-y-3"
        >
          <h3>{entry.title}</h3>

          <p>
            <strong>{entry.organisation}</strong>
          </p>

          <p>
            {entry.dateRange} · {entry.status}
          </p>

          <p>{entry.summary}</p>

          <p>
            <strong>Outcome:</strong> {entry.outcome}
          </p>
        </article>
      ))}
    </section>
  );
}
