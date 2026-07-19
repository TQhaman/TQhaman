import RoadTraveller from "@/components/effects/RoadTraveller";
import roadStyles from "@/components/effects/ProjectRoad.module.css";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { currentWork, projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="space-y-10 py-14"
    >
      <SectionHeading id="projects-heading" title="Projects" />

      <div className={roadStyles.road} data-project-road>
        <RoadTraveller />

        <ol className={roadStyles.roadList}>
          {projects.map((project) => (
            <li key={project.id} className={roadStyles.checkpoint}>
              <div className={roadStyles.card}>
                <ProjectCard project={project} />
              </div>

              <span
                className={roadStyles.marker}
                data-road-checkpoint={project.checkpoint}
                aria-hidden="true"
              >
                {String(project.checkpoint).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div
        className="border-y border-muted/30 bg-ink-soft/70 py-7"
        aria-labelledby="current-work-heading"
      >
        <div className="flex flex-wrap items-end justify-between gap-3 px-5 md:px-6">
          <div>
            <p className="font-pixel text-sm text-green uppercase">
              Active quest log
            </p>
            <h3 id="current-work-heading" className="mt-1 text-2xl text-paper">
              Current work
            </h3>
          </div>

          <span className="font-mono text-xs text-amber uppercase">
            Work in progress
          </span>
        </div>

        <div className="mt-5 divide-y divide-muted/25 border-t border-muted/25">
          {currentWork.map((work) => (
            <article
              key={work.title}
              className="grid gap-4 px-5 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-6"
            >
              <div className="min-w-0 space-y-1">
                <h4 className="font-pixel text-lg text-cyan">{work.title}</h4>
                <p className="text-sm text-paper/85">{work.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <span className="font-mono text-xs text-green uppercase">
                  {work.status}
                </span>

                {work.externalUrl ? (
                  <a href={work.externalUrl} className="button-secondary">
                    View current work
                  </a>
                ) : (
                  <span className="font-mono text-xs text-muted">
                    External link pending
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
