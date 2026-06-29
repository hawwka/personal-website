import type { Experience } from "@/types";

export const experience = [
  {
    id: "frontend-engineer",
    role: "Frontend Engineer",
    company: "Example Studio",
    location: "Remote",
    startDate: "2024-01",
    endDate: "Present",
    description:
      "Built responsive product interfaces and reusable component patterns for early-stage products.",
    highlights: [
      "Created typed UI foundations for marketing and dashboard pages.",
      "Improved delivery flow with automated checks and component documentation.",
      "Collaborated with designers to translate prototypes into production-ready screens.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "full-stack-developer",
    role: "Full-Stack Developer",
    company: "Placeholder Labs",
    location: "Kyiv, Ukraine",
    startDate: "2022-06",
    endDate: "2023-12",
    description:
      "Delivered web applications across frontend, API, and database layers for client projects.",
    highlights: [
      "Implemented API integrations and typed data flows.",
      "Maintained test coverage for critical user journeys.",
      "Optimized page performance and accessibility across core routes.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "web-developer",
    role: "Web Developer",
    company: "Demo Agency",
    location: "Remote",
    startDate: "2020-09",
    endDate: "2022-05",
    description:
      "Developed marketing sites and internal tools with a focus on clean implementation and maintainability.",
    highlights: [
      "Shipped landing pages with reusable sections and CMS-ready content models.",
      "Set up linting, formatting, and deployment workflows.",
      "Supported ongoing iteration from analytics and stakeholder feedback.",
    ],
    technologies: ["JavaScript", "CSS", "Vercel"],
  },
] satisfies Experience[];
