export const projects = [
  {
    id: "mobile-product",
    key: "mobile",
    technologies: ["React Native", "TypeScript", "TanStack Query", "Zustand"],
    status: "planned",
  },
  {
    id: "full-stack-web-platform",
    key: "fullStack",
    technologies: ["Next.js", "React 19", "TypeScript", "PostgreSQL"],
    status: "planned",
  },
  {
    id: "backend-platform-api",
    key: "backend",
    technologies: ["NestJS", "Prisma", "PostgreSQL", "Docker"],
    status: "in-progress",
  },
  {
    id: "complex-client-application",
    key: "client",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Vitest"],
    status: "planned",
  },
] as const;
