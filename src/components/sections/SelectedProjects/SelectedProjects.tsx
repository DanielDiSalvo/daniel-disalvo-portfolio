import ProjectCard from "./ProjectCard";
import { projects } from "./data";

const SelectedProjects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="mb-16 grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted">
            SELECTED PROJECTS
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Building beyond
            <br />
            the interface.
          </h2>
        </div>

        <p className="max-w-lg self-end leading-7 text-muted lg:justify-self-end">
          A selection of products and engineering projects focused on modern
          frontend, mobile and backend architecture.
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
