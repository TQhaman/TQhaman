import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="space-y-6 py-10"
    >
      <SectionHeading id="skills-heading" title="Skills" />

      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.name}>
            <strong className="font-pixel">{skill.name}</strong>
            {" — "}
            {skill.level}, {skill.category}, rating {skill.rating}/5
            {skill.evidence && <p>{skill.evidence}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
