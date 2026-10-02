import { getLocale, getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button/Button";
import HeroTerminal from "./HeroTerminal";

const Hero = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Hero");

  const cvHref =
    locale === "es"
      ? "/Daniel_Di_Salvo_Senior_Frontend_Engineer_ES.pdf"
      : "/Daniel_Di_Salvo_Senior_Frontend_Engineer_EN.pdf";

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-32">
      <div className="grid min-w-0 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <p className="text-xs font-medium tracking-[0.25em] text-muted">
              {t("role")}
            </p>
          </div>

          <h1 className="mt-8 max-w-[760px] text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            {t("title")} <span className="text-accent">{t("titleAccent")}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#projects">{t("viewWork")}</Button>

            <Button href="#contact" variant="secondary">
              {t("getInTouch")}
            </Button>

            <Button href={cvHref} variant="accent" download>
              {t("downloadCv")}
            </Button>
          </div>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
};

export default Hero;
