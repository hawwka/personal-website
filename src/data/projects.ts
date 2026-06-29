import type { Project } from "@/types";

export const projects = [
  {
    id: "portfolio-platform",
    title: "Portfolio Platform",
    description:
      "A placeholder portfolio project for showcasing case studies, skills, and contact details.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portfolio-platform.png",
    demoUrl: "https://example.com/portfolio-platform",
    repositoryUrl: "https://github.com/hawwka/personal-website",
    featured: true,
  },
  {
    id: "design-system",
    title: "Design System Starter",
    description:
      "A component library starter with reusable primitives and documentation placeholders.",
    technologies: ["React", "shadcn/ui", "Storybook"],
    imageUrl: "/projects/design-system.png",
    demoUrl: "https://example.com/design-system",
    repositoryUrl: "https://github.com/hawwka/design-system",
    featured: false,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "A dashboard concept for tracking product metrics and visualizing customer insights.",
    technologies: ["TypeScript", "PostgreSQL", "Playwright"],
    imageUrl: "/projects/analytics-dashboard.png",
    demoUrl: "https://example.com/analytics-dashboard",
    repositoryUrl: "https://github.com/hawwka/analytics-dashboard",
    featured: true,
  },
] satisfies Project[];
