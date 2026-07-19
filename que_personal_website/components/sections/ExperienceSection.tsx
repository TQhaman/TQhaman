import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="space-y-10 py-14"
    >
      <SectionHeading id="experience-heading" title="Experience" />

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-6 bottom-6 left-6 w-px bg-muted/35"
        />

        <ol className="space-y-8">
          {experience.map((entry, index) => {
            const isCompleted = entry.status === "Completed";

            return (
              <li
                key={`${entry.title}-${entry.organisation}`}
                className="relative grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] gap-4 md:gap-6"
              >
                <span
                  aria-hidden="true"
                  className="z-10 grid h-12 w-12 place-items-center border-3 border-muted bg-panel font-pixel text-sm text-amber shadow-[4px_4px_0_var(--ink)]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <article className="panel min-w-0 p-5 md:p-6">
                  <header className="flex flex-wrap items-start justify-between gap-4 border-b border-muted/25 pb-5">
                    <div className="min-w-0 space-y-1">
                      <p className="font-pixel text-sm text-green uppercase">
                        Quest {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-2xl text-paper">{entry.title}</h3>
                      <p className="font-medium text-cyan">
                        {entry.organisation}
                      </p>
                    </div>

                    <span
                      className={`border px-2.5 py-1 font-mono text-xs uppercase ${
                        isCompleted
                          ? "border-green/45 bg-green/10 text-green"
                          : "border-amber/45 bg-amber/10 text-amber"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </header>

                  <p className="mt-4 font-mono text-sm text-muted">
                    {entry.dateRange}
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div className="border-t border-cyan/35 pt-3">
                      <h4 className="font-pixel text-sm text-cyan uppercase">
                        Contribution
                      </h4>
                      <p className="mt-2 text-sm text-paper/85">
                        {entry.summary}
                      </p>
                    </div>

                    <div className="border-t border-green/35 pt-3">
                      <h4 className="font-pixel text-sm text-green uppercase">
                        Outcome
                      </h4>
                      <p className="mt-2 text-sm text-paper/85">
                        {entry.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
