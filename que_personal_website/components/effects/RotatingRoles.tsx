"use client";

import { useEffect, useState } from "react";

const roles = [
  { article: "an", label: "Information Systems Student" },
  { article: "a", label: "Software Developer" },
  { article: "a", label: "Database Tutor" },
  { article: "a", label: "Systems Problem Solver" },
  { article: "a", label: "FinTech Enthusiast" },
  { article: "a", label: "Digital Entrepreneur" },
] as const;

const ROLE_INTERVAL_MS = 2400;

export default function RotatingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, ROLE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <span
      aria-hidden="true"
      className="inline-block min-h-[1.2em] w-full text-xl leading-[1.2] text-cyan sm:w-[30ch] sm:whitespace-nowrap sm:text-2xl"
    >
      {roles[roleIndex].article} {roles[roleIndex].label}
    </span>
  );
}
