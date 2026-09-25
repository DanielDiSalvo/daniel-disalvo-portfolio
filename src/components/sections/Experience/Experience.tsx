import ExperienceItem from "./ExperienceItem";
import { experiences } from "./data";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted">
              EXPERIENCE
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Engineering products
              <br />
              for real-world environments.
            </h2>
          </div>

          <p className="max-w-lg self-end leading-7 text-muted lg:justify-self-end">
            Building and teaching software across web, mobile and backend
            environments, with a focus on scalable architecture and maintainable
            products.
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
