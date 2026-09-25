export type ProjectStatus = "completed" | "in-progress" | "planned";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  status: ProjectStatus;
  repository?: string;
  demo?: string;
};
