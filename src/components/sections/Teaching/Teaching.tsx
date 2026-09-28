import { teachingHighlights } from "./data";

const Teaching = () => {
  return (
    <section id="teaching" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-muted">
              TEACHING
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Building software.
              <br />
              <span className="text-accent">Sharing knowledge.</span>
            </h2>
          </div>

          <div>
            <div className="max-w-2xl space-y-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>
                Teaching programming has become an important part of my
                professional journey alongside software engineering.
              </p>

              <p>
                As a frontend instructor, I help developers understand
                JavaScript, React and modern development workflows through
                practical projects, technical guidance and code reviews.
              </p>

              <p>
                Teaching also influences the way I work as an engineer:
                communicating decisions clearly, breaking down complex problems
                and helping teams grow.
              </p>
            </div>

            <div className="mt-12 grid gap-x-8 sm:grid-cols-3">
              {teachingHighlights.map(({ value, label }) => (
                <div key={label} className="border-t border-border py-6">
                  <p className="text-lg font-semibold tracking-tight">
                    {value}
                  </p>

                  <p className="mt-2 text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
