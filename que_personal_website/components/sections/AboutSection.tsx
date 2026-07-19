import Image from "next/image";

import PixelAvatar from "@/components/effects/PixelAvatar";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutProfile } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="space-y-8 py-14"
    >
      <SectionHeading id="about-heading" title="About" />

      <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
        <figure className="mx-auto w-full max-w-md min-w-0 lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-full border border-muted/40 bg-ink-soft shadow-[8px_8px_0_var(--ink)]">
            <Image
              src={aboutProfile.photo.src}
              alt={aboutProfile.photo.alt}
              fill
              sizes="(min-width: 1024px) 29rem, calc(100vw - 2rem)"
              className="scale-[1.18] object-cover object-[50%_62%]"
            />
          </div>

          <figcaption className="flex min-h-28 items-center gap-5 border-x border-b border-muted/35 bg-panel/95 px-5 py-4">
            <PixelAvatar />

            <div className="min-w-0 space-y-1">
              <p className="font-pixel text-sm text-green uppercase">
                {aboutProfile.playerLabel}
              </p>
              <p className="font-pixel text-xl text-paper">
                {aboutProfile.name}
              </p>
            </div>
          </figcaption>
        </figure>

        <div className="min-w-0 space-y-8">
          <div className="space-y-5">
            <h3 className="max-w-2xl text-2xl text-paper">
              {aboutProfile.heading}
            </h3>

            <div className="space-y-4 text-paper/90">
              {aboutProfile.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <dl className="grid border-t border-muted/30 sm:grid-cols-2">
            {aboutProfile.facts.map((fact) => (
              <div
                key={fact.label}
                className="min-w-0 border-b border-muted/30 py-3 sm:pr-5"
              >
                <dt className="font-pixel text-sm text-amber uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-paper/85">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-4">
            <h3 className="text-xl text-cyan">Currently strengthening</h3>

            <ul className="grid gap-x-8 sm:grid-cols-2" role="list">
              {aboutProfile.learning.map((technology) => (
                <li
                  key={technology}
                  className="flex min-h-11 items-center gap-3 border-b border-muted/25 py-2 text-sm text-paper/90"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 bg-green shadow-[2px_2px_0_var(--ink)]"
                  />
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
