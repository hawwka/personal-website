"use client";

import Image from "next/image";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const highlights = [
  "Production-minded Next.js builds",
  "Typed data flows and component systems",
  "Accessible, responsive interfaces",
] as const;

export function About() {
  const { ref, isIntersecting } = useIntersection<HTMLElement>({
    rootMargin: "-80px",
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div
        className={cn(
          "mx-auto grid w-full max-w-6xl gap-12 transition-all duration-700 ease-out lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
          isIntersecting
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0",
        )}
      >
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-chart-4/20 to-chart-5/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/about-photo.svg"
              alt="Portrait illustration of Hawwka"
              width={960}
              height={1200}
              priority={false}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            About
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            I turn ideas into clean, resilient web experiences.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              I focus on building modern frontend foundations that feel polished
              to users and predictable for teams. My work blends interface
              craft, type-safe data modeling, and pragmatic implementation
              choices.
            </p>
            <p>
              From landing pages to product dashboards, I care about the details
              that make an experience fast, accessible, responsive, and easy to
              extend after launch.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-border bg-card/70 p-4 text-sm font-medium text-card-foreground shadow-sm"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
