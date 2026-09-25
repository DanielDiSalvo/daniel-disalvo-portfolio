import type { Experience } from "./types";

type ExperienceItemProps = {
  experience: Experience;
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { company, role, period, description, technologies, highlights } =
    experience;

  return (
    <article className="grid gap-8 border-t border-border py-10 md:grid-cols-[220px_1fr] lg:py-12">
      <div>
        <p className="font-mono text-xs text-muted">{period}</p>

        <p className="mt-3 text-sm font-medium">{company}</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {role}
        </h3>

        <p className="mt-4 max-w-2xl leading-7 text-muted">{description}</p>

        {highlights && (
          <ul className="mt-7 space-y-2 text-sm text-muted">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceItem;
