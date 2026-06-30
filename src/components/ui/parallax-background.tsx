"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxBackground({
  children,
  className,
  speed = 1 / 3,
}: ParallaxBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
  });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => -value * speed);
  const shouldDisableParallax = prefersReducedMotion || isMobile;

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <motion.div
      className={cn(className)}
      style={shouldDisableParallax ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}
