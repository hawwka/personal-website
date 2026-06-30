"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Engineer",
  "Next.js Developer",
  "UI Engineer",
] as const;

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleRole, setVisibleRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = visibleRole === currentRole;
    const isEmpty = visibleRole.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && isEmpty) {
          setIsDeleting(false);
          setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
          return;
        }

        const nextLength = visibleRole.length + (isDeleting ? -1 : 1);
        setVisibleRole(currentRole.slice(0, nextLength));
      },
      isComplete && !isDeleting ? 1200 : isDeleting ? 45 : 85,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, visibleRole]);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground shadow-sm backdrop-blur">
            Available for selected projects
          </p>

          <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Hawwka.
            <span className="mt-3 block text-primary">
              <span className="sr-only">{roles[roleIndex]}</span>
              <span aria-hidden="true">{visibleRole}</span>
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block h-[0.9em] w-1 translate-y-1 bg-primary"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            I build fast, polished web experiences with thoughtful interfaces,
            typed data flows, and production-ready Next.js foundations.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cv.pdf"
              download
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Download CV
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/75 px-6 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
