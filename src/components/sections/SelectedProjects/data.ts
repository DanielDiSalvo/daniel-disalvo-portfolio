import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "mobile-product",
    title: "Mobile Product",
    category: "MOBILE ENGINEERING",
    description:
      "Production-style mobile application focused on scalable architecture, API integration and a polished cross-platform experience.",
    technologies: ["React Native", "TypeScript", "TanStack Query", "Zustand"],
    highlights: [
      "Cross-platform architecture",
      "Server & client state management",
      "API integration",
    ],
    status: "planned",
  },
  {
    id: "full-stack-web-platform",
    title: "Full-stack Web Platform",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "Modern web platform built around the latest React and Next.js architecture, combining server and client capabilities.",
    technologies: ["Next.js", "React 19", "TypeScript", "PostgreSQL"],
    highlights: [
      "Server & Client Components",
      "Server Actions",
      "Performance & accessibility",
    ],
    status: "planned",
  },
  {
    id: "backend-platform-api",
    title: "Backend Platform API",
    category: "BACKEND ENGINEERING",
    description:
      "Scalable backend platform designed around a modular architecture, relational data and production-oriented API practices.",
    technologies: ["NestJS", "Prisma", "PostgreSQL", "Docker"],
    highlights: [
      "REST API architecture",
      "Authentication & validation",
      "Database modeling",
    ],
    status: "in-progress",
  },
  {
    id: "complex-client-application",
    title: "Complex Client Application",
    category: "FRONTEND ARCHITECTURE",
    description:
      "Feature-rich React application designed to explore complex client-side state, predictable data flows and robust testing.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Vitest"],
    highlights: [
      "Complex state management",
      "Component architecture",
      "Automated testing",
    ],
    status: "planned",
  },
];
