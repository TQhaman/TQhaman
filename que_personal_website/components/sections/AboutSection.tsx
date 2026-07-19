import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="space-y-4 py-10"
    >
      <SectionHeading id="about-heading" title="About" />

      <p>
        I am a BCom Information Systems student at the University of Fort Hare.
        I am interested in software development, digital business and building
        systems that solve practical problems.
      </p>

      <p>
        My current work includes developing this portfolio and preparing QWS
        Digital, a web design business focused on small businesses in East
        London.
      </p>
    </section>
  );
}
