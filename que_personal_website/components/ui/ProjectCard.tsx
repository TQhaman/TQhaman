import Image from "next/image";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

const caseStudyDetails = [
  { label: "Problem", key: "problem" },
  { label: "My contribution", key: "contribution" },
  { label: "Challenge", key: "challenge" },
  { label: "Lesson", key: "lesson" },
] as const satisfies ReadonlyArray<{
  label: string;
  key: keyof Pick<
    Project,
    "problem" | "contribution" | "challenge" | "lesson"
  >;
}>;

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel overflow-hidden">
      <header className="border-b border-muted/25 bg-ink-soft/85 px-5 py-4 md:px-6">
        <p className="font-pixel text-sm text-green uppercase">
          Checkpoint {String(project.checkpoint).padStart(2, "0")}
        </p>
        <h3 className="mt-1 text-2xl text-paper">{project.title}</h3>
      </header>

      <div>
        <div className="border-b border-muted/25 bg-ink">
          {project.mediaUrl ? (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.mediaUrl}
                alt={project.altText}
                fill
                sizes="(min-width: 1024px) 30rem, calc(100vw - 5rem)"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="grid aspect-video place-items-center px-6 text-center">
              <div className="space-y-2">
                <span
                  aria-hidden="true"
                  className="mx-auto block h-5 w-5 border-4 border-muted/55 bg-cyan/20 shadow-[4px_4px_0_var(--ink-soft)]"
                />
                <p className="font-pixel text-sm text-muted uppercase">
                  Project capture pending
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="min-w-0 space-y-7 p-5 md:p-6">
          <p className="text-lg text-paper/95">{project.overview}</p>

          <dl className="space-y-5">
            {caseStudyDetails.map((detail) => (
              <div
                key={detail.key}
                className="border-l-2 border-cyan/45 pl-4"
              >
                <dt className="font-pixel text-sm text-cyan uppercase">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-sm text-paper/85">
                  {project[detail.key]}
                </dd>
              </div>
            ))}
          </dl>

          <div className="space-y-3">
            <h4 className="font-pixel text-sm text-amber uppercase">
              Technology stack
            </h4>
            <ul className="flex flex-wrap gap-2" role="list">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="border border-muted/30 bg-ink-soft px-2.5 py-1 font-mono text-xs text-paper/85"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.repositoryUrl ? (
              <a href={project.repositoryUrl} className="button-secondary">
                View repository
              </a>
            ) : (
              <span
                className="button-secondary"
                aria-disabled="true"
                title="A verified repository URL has not been added yet"
              >
                Repository pending
              </span>
            )}

            {project.liveUrl ? (
              <a href={project.liveUrl} className="button">
                View live project
              </a>
            ) : (
              <span
                className="button-secondary"
                aria-disabled="true"
                title="A verified live project URL has not been added yet"
              >
                Live demo pending
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
