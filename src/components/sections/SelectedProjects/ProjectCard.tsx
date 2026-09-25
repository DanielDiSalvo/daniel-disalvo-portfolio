import type { Project } from "./types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { title, category, description, technologies, highlights, status } =
    project;

  return (
    <article className="group flex h-full flex-col border-t border-border py-10">
      <div className="flex items-start justify-between gap-6">
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
          {status}
        </span>
      </div>

      <p className="mt-10 text-xs font-medium tracking-[0.18em] text-muted">
        {category}
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h3>

      <p className="mt-4 max-w-xl leading-7 text-muted">{description}</p>

      <ul className="mt-8 space-y-2 text-sm text-muted">
        {highlights.map((highlight) => (
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
