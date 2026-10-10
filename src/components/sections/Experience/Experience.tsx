import ExperienceItem from "./ExperienceItem";
import { experiences } from "./data";
import { getTranslations } from "next-intl/server";

const Experience = async () => {
  const t = await getTranslations("Experience");

  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted">
              {t("label")}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {t("title")}
              <br />
              {t("titleSecondLine")}
            </h2>
          </div>

          <p className="max-w-lg self-end leading-7 text-muted lg:justify-self-end">
            {t("description")}
          </p>
        </div>

        <div>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
