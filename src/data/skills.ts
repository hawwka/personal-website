import type { SkillGroup } from "@/types";

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      {
        id: "react",
        name: "React",
        level: "advanced",
      },
      {
        id: "nextjs",
        name: "Next.js",
        level: "advanced",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        level: "advanced",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        level: "intermediate",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        level: "intermediate",
      },
      {
        id: "api-design",
        name: "API Design",
        level: "advanced",
      },
    ],
  },
  {
    id: "tooling",
    title: "Tooling",
    skills: [
      {
        id: "typescript",
        name: "TypeScript",
        level: "advanced",
      },
      {
        id: "vitest",
        name: "Vitest",
        level: "intermediate",
      },
      {
        id: "playwright",
        name: "Playwright",
        level: "intermediate",
      },
    ],
  },
] satisfies SkillGroup[];
