import { stats, technologies } from "./data";

const TechOverview = () => {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="border-border py-8 even:border-l even:pl-6 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                {value}
              </p>

              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-8">
          <p className="mb-6 text-xs font-medium tracking-[0.18em] text-muted">
            TECH STACK
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechOverview;
