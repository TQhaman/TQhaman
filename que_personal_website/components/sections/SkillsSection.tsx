import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import type { SkillCategory, SkillRating } from "@/types/portfolio";

const skillCategories = [
  { category: "Frontend", code: "01" },
  { category: "Backend", code: "02" },
  { category: "Databases", code: "03" },
  { category: "Developer Tools", code: "04" },
  { category: "Professional Traits", code: "05" },
] as const satisfies ReadonlyArray<{
  category: SkillCategory;
  code: string;
}>;

const ratingLegend = [
  { rating: 1, label: "Familiarising" },
  { rating: 2, label: "Developing" },
  { rating: 3, label: "Practised" },
  { rating: 4, label: "Strong" },
  { rating: 5, label: "Advanced" },
] as const satisfies ReadonlyArray<{
  rating: SkillRating;
  label: string;
}>;

function SkillStars({ rating }: { rating: SkillRating }) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < rating;

        return (
          <span
            key={index}
            aria-hidden="true"
            className={`font-mono text-lg leading-none ${isFilled ? "text-amber" : "text-muted/35"}`}
          >
            {isFilled ? "★" : "☆"}
          </span>
        );
      })}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="space-y-10 py-14"
    >
      <SectionHeading id="skills-heading" title="Skills" />

      <aside
        aria-labelledby="rating-legend-heading"
        className="border-y border-muted/30 bg-ink-soft/70 px-5 py-5 md:px-6"
      >
        <h3 id="rating-legend-heading" className="text-xl text-paper">
          Rating guide
        </h3>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {ratingLegend.map((item) => (
            <li key={item.rating} className="flex items-center gap-3 text-sm">
              <span className="grid h-8 w-8 shrink-0 place-items-center border-2 border-muted/45 bg-panel font-pixel text-amber">
                {item.rating}
              </span>
              <span className="text-paper/85">{item.label}</span>
            </li>
          ))}
        </ol>
      </aside>

      <div className="space-y-12">
        {skillCategories.map(({ category, code }) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category,
          );
          const headingId = `skills-${category.toLowerCase().replaceAll(" ", "-")}`;

          return (
            <section key={category} aria-labelledby={headingId}>
              <div className="mb-5 flex items-baseline gap-3 border-b border-muted/30 pb-3">
                <span className="font-mono text-sm text-green" aria-hidden="true">
                  {code}
                </span>
                <h3 id={headingId} className="text-2xl text-cyan">
                  {category}
                </h3>
              </div>

              <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" role="list">
                {categorySkills.map((skill) => (
                  <li key={skill.name} className="panel flex min-w-0 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-pixel text-lg text-paper">
                        {skill.name}
                      </h4>
                      <span className="shrink-0 border border-cyan/35 bg-ink-soft px-2 py-1 font-mono text-xs text-cyan">
                        {skill.badge}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-y border-muted/20 py-3">
                      <p className="text-sm text-paper/85">
                        <span className="font-pixel text-muted">Level:</span>{" "}
                        {skill.level}
                      </p>
                      <SkillStars rating={skill.rating} />
                    </div>

                    {skill.evidence && (
                      <p className="mt-4 text-sm text-muted">
                        <span className="font-pixel text-amber">Evidence:</span>{" "}
                        {skill.evidence}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
