import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="space-y-6 py-10"
    >
      <SectionHeading id="projects-heading" title="Projects" />

      {projects.map((project) => (
        <article key={project.id} className="space-y-3">
          <h3>{project.title}</h3>

          <p>{project.overview}</p>

          <p>
            <strong className="font-pixel">Problem:</strong> {project.problem}
          </p>

          <p>
            <strong className="font-pixel">My contribution:</strong>{" "}
            {project.contribution}
          </p>

          <p>
            <strong className="font-pixel">Technologies:</strong>{" "}
            {project.technologies.join(", ")}
          </p>
        </article>
      ))}
    </section>
  );
}
