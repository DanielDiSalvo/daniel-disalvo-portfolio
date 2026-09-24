const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium tracking-[0.18em] text-muted">
              SENIOR FRONTEND ENGINEER
            </span>
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Building scalable
            <br />
            web & mobile
            <br />
            <span className="text-accent">products.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-muted md:text-lg">
            Frontend engineer with 9+ years of experience creating web and
            mobile products. I work with React, React Native, Next.js and
            TypeScript, turning ideas into real solutions with a focus on
            performance, scalability and great user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              View my work →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white/[0.02] font-mono">
          <div className="flex items-center gap-2 border-b border-border px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />

            <span className="ml-3 text-xs text-muted">~/portfolio</span>
          </div>

          <div className="overflow-x-auto p-6 text-sm leading-7">
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
                {"}"};{"\n\n"}
                <span className="text-muted">// Always learning...</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
