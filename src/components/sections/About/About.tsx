import { expertise } from "./data";

const About = () => {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted">
              ABOUT
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Engineering with a
              <br />
              <span className="text-accent">product mindset.</span>
            </h2>
          </div>

          <div>
            <div className="max-w-2xl space-y-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>
                I&apos;m a software engineer with 9+ years of experience
                building web and mobile products, primarily across the React
                ecosystem.
              </p>

              <p>
                My work goes beyond implementing interfaces. I care about
                architecture, maintainability, performance and understanding the
                product problems behind the code.
              </p>

              <p>
                Alongside engineering, teaching has become an important part of
                my career, strengthening the way I communicate technical
                decisions, mentor developers and approach complex problems.
              </p>
            </div>

            <div className="mt-12 grid gap-x-8 sm:grid-cols-2">
              {expertise.map(({ title, description }) => (
                <div key={title} className="border-t border-border py-6">
                  <h3 className="text-sm font-medium text-foreground">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {description}
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
