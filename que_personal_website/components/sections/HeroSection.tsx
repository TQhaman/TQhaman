import Origel from "@/components/effects/Origel";
import RotatingRoles from "@/components/effects/RotatingRoles";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="grid items-center gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,30rem)] lg:gap-14 lg:py-16"
    >
      <div className="max-w-2xl space-y-6">
        <p className="inline-flex min-h-8 items-center border border-green/60 bg-ink-soft/90 px-3 font-pixel text-sm text-green">
          SYSTEM STATUS: ONLINE
        </p>

        <h1 id="home-heading" className="text-5xl md:text-6xl">
          Qhamani Twaku
        </h1>

        <p className="max-w-xl text-lg text-paper/90">
          I am an Information Systems student learning by building practical
          digital solutions, from web applications and fintech prototypes to
          clear technical documentation.
        </p>

        <p className="font-pixel text-2xl text-paper">
          <span className="sr-only">
            I am an Information Systems Student
          </span>
          <span
            aria-hidden="true"
            className="inline-flex flex-wrap items-baseline gap-x-2"
          >
            <span>I am</span>
            <RotatingRoles />
          </span>
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="button">
            View Projects
          </a>

          <span
            className="button-secondary"
            aria-disabled="true"
            title="The CV file has not been added yet"
          >
            CV coming soon
          </span>
        </div>
      </div>

      <Origel />
    </section>
  );
}
