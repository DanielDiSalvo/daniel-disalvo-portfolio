export type ExperienceKey = "cda" | "globallogic" | "coderhouse";

export type Experience = {
  id: string;
  key: ExperienceKey;
  company: string;
  technologies: string[];
};
