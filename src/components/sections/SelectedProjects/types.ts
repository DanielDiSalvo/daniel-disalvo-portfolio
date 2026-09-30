export type ProjectStatus = "completed" | "in-progress" | "planned";

export type ProjectKey = "mobile" | "fullStack" | "backend" | "client";

export type Project = {
  id: string;
  key: ProjectKey;
  technologies: readonly string[];
  status: ProjectStatus;
  repository?: string;
  demo?: string;
};
