import type { Project } from "./types";
import { getTranslations } from "next-intl/server";
import ProjectStatus from "@/components/ui/ProjectStatus/ProjectStatus";
type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = async ({ project, index }: ProjectCardProps) => {
  const t = await getTranslations("Projects");

  const { key, technologies, status } = project;

  return (
    <article className="group flex h-full flex-col border-t border-border py-10">
      <div className="flex items-start justify-between gap-6">
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>

        <ProjectStatus status={status} />
      </div>

      <p className="mt-10 text-xs font-medium tracking-[0.18em] text-muted">
        {t(`items.${key}.category`)}
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
        {t(`items.${key}.title`)}
      </h3>

      <p className="mt-4 max-w-xl leading-7 text-muted">
        {t(`items.${key}.description`)}
      </p>

      <ul className="mt-8 space-y-2 text-sm text-muted">
        {t.raw(`items.${key}.highlights`).map((highlight: string) => (
          <li key={highlight} className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-10">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
