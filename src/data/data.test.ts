import { describe, it, expect } from "vitest";
import { z } from "zod";

import { projects } from "./projects";
import { skillGroups } from "./skills";
import { experience } from "./experience";

// Zod schemas corresponding to the interfaces in src/types/index.ts
const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  imageUrl: z.string(),
  demoUrl: z.string(),
  repositoryUrl: z.string(),
  featured: z.boolean(),
});

const SkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  level: z.enum(["beginner", "intermediate", "advanced", "expert"]),
});

const SkillGroupSchema = z.object({
  id: z.string(),
  title: z.string(),
  skills: z.array(SkillSchema),
});

const ExperienceSchema = z.object({
  id: z.string(),
  role: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  highlights: z.array(z.string()),
  technologies: z.array(z.string()),
});

describe("Data Validation Tests", () => {
  describe("Projects Data", () => {
    it("should be a non-empty array", () => {
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it("should match the Project interface (via Zod validation)", () => {
      projects.forEach((project) => {
        // z.parse will throw an error if validation fails, automatically failing the test
        expect(() => ProjectSchema.parse(project)).not.toThrow();
      });
    });
  });

  describe("Skills Data", () => {
    it("should be a non-empty array", () => {
      expect(Array.isArray(skillGroups)).toBe(true);
      expect(skillGroups.length).toBeGreaterThan(0);
    });

    it("should match the SkillGroup interface (via Zod validation)", () => {
      skillGroups.forEach((group) => {
        expect(() => SkillGroupSchema.parse(group)).not.toThrow();
      });
    });
  });

  describe("Experience Data", () => {
    it("should be a non-empty array", () => {
      expect(Array.isArray(experience)).toBe(true);
      expect(experience.length).toBeGreaterThan(0);
    });

    it("should match the Experience interface (via Zod validation)", () => {
      experience.forEach((exp) => {
        expect(() => ExperienceSchema.parse(exp)).not.toThrow();
      });
    });
  });
});
