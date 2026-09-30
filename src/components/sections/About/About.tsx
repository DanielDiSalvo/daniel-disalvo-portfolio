import { getTranslations } from "next-intl/server";

import { expertise } from "./data";

const About = async () => {
  const t = await getTranslations("About");

  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted">
              {t("label")}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {t("title")}
              <br />
              <span className="text-accent">{t("titleAccent")}</span>
            </h2>
          </div>

          <div>
            <div className="max-w-2xl space-y-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>{t("paragraph1")}</p>

              <p>{t("paragraph2")}</p>

              <p>{t("paragraph3")}</p>
            </div>

            <div className="mt-12 grid gap-x-8 sm:grid-cols-2">
              {expertise.map(({ key }) => (
                <div key={key} className="border-t border-border py-6">
                  <h3 className="text-sm font-medium text-foreground">
                    {t(`expertise.${key}.title`)}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {t(`expertise.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
