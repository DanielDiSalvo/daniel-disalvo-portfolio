import { stats, technologies } from "./data";
import { getTranslations } from "next-intl/server";

const TechOverview = async () => {
  const t = await getTranslations("TechOverview");

  return (
    <section id="stack" className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ key, value }) => (
            <div
              key={key}
              className="border-border py-8 even:border-l even:pl-6 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                {value}
              </p>

              <p className="mt-2 text-sm text-muted">{t(`stats.${key}`)}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-8">
          <p className="mb-6 text-xs font-medium tracking-[0.18em] text-muted">
            {t("label")}
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {technologies.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <Icon size={18} aria-hidden="true" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechOverview;
