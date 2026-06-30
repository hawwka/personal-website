"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { ParallaxBackground } from "@/components/ui/parallax-background";

const glowAnimation = {
  opacity: [0.6, 1, 0.6],
  scale: [1, 1.05, 1],
};

const radialGlowTransition: Transition = {
  duration: 9,
  repeat: Infinity,
  ease: "easeInOut",
};

const blurGlowTransition: Transition = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-background">
      <ParallaxBackground className="fixed inset-x-0 -top-[50vh] -z-10 h-[200vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.75_0.18_250_/_0.35),transparent_28%),radial-gradient(circle_at_80%_15%,oklch(0.84_0.16_80_/_0.28),transparent_26%),radial-gradient(circle_at_50%_85%,oklch(0.7_0.2_330_/_0.25),transparent_32%)]"
          animate={glowAnimation}
          transition={radialGlowTransition}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,oklch(1_0_0_/_0.7)_45%,transparent_100%)] dark:bg-[linear-gradient(135deg,transparent_0%,oklch(0.145_0_0_/_0.75)_45%,transparent_100%)]" />
        <motion.div
          className="absolute left-1/2 top-1/2 size-[32rem] max-h-[90vw] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl"
          animate={glowAnimation}
          transition={blurGlowTransition}
        />
      </ParallaxBackground>

      <Hero />
      <About />
    </main>
  );
}
