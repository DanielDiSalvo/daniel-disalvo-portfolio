"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  "const dany = {",
  '  role: "Senior Frontend Engineer",',
  '  stack: ["React", "React Native", "Next.js", "TypeScript"],',
  '  focus: "Web + Mobile products",',
  '  passion: "Teaching & building",',
  '  location: "Argentina",',
  "};",
  "",
  "// Always learning...",
];

const HeroTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLines((current) => {
        if (current >= terminalLines.length) {
          window.clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 180);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-border">
      <div className="flex items-center gap-2 border-b border-border px-6 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />

        <span className="ml-4 font-mono text-sm text-muted">~/portfolio</span>
      </div>

      <div className="overflow-x-auto p-6 font-mono text-sm leading-7 sm:p-8">
        <pre className="min-h-63">
          {terminalLines.slice(0, visibleLines).map((line, index) => {
            const isLastLine = index === terminalLines.length - 1;

            return (
              <div key={`${line}-${index}`}>
                {line || "\u00A0"}
                {isLastLine && (
                  <span className="terminal-cursor ml-1 inline-block">█</span>
                )}
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};

export default HeroTerminal;
