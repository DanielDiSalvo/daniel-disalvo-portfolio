import ProjectCard from "./ProjectCard";
import { projects } from "./data";
import { getTranslations } from "next-intl/server";

const SelectedProjects = async () => {
  const t = await getTranslations("Projects");

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
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

      <div className="grid gap-x-12 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SelectedProjects;
