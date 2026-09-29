import { getTranslations } from "next-intl/server";

import Button from "@/components/ui/Button/Button";

const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-32">
      <div className="grid min-w-0 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
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
            Frontend engineer with 9+ years of experience creating web and
            mobile products. I work with React, React Native, Next.js and
            TypeScript, turning ideas into real solutions with a focus on
            performance, scalability and great user experiences.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#projects">View my work →</Button>

            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>

            <Button href="#" variant="accent">
              Download CV ↓
            </Button>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-border">
          <div className="flex items-center gap-2 border-b border-border px-6 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />

            <span className="ml-4 font-mono text-sm text-muted">
              ~/portfolio
            </span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-sm leading-7 sm:p-8">
            <pre>
              <code>
                <span className="text-fuchsia-400">const</span>{" "}
                <span className="text-blue-400">dany</span> = {"{"}
                {"\n"}
                {"  "}role:{" "}
                <span className="text-emerald-400">
                  &quot;Senior Frontend Engineer&quot;
                </span>
                ,{"\n"}
                {"  "}stack: [
                <span className="text-emerald-400">&quot;React&quot;</span>,{" "}
                <span className="text-emerald-400">
                  &quot;React Native&quot;
                </span>
                , <span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;TypeScript&quot;</span>
                ],{"\n"}
                {"  "}focus:{" "}
                <span className="text-emerald-400">
                  &quot;Web + Mobile products&quot;
                </span>
                ,{"\n"}
                {"  "}passion:{" "}
                <span className="text-emerald-400">
                  &quot;Teaching &amp; building&quot;
                </span>
                ,{"\n"}
                {"  "}location:{" "}
                <span className="text-emerald-400">&quot;Argentina&quot;</span>,
                {"\n"}
                {"};"}
                {"\n\n"}
                <span className="text-muted">{"// Always learning..."}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
