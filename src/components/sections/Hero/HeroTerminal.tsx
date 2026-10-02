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

const terminalContent = terminalLines.join("\n");

const HeroTerminal = () => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleCharacters((current) => {
        if (current >= terminalContent.length) {
          window.clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 20);

    return () => window.clearInterval(interval);
  }, []);

  const visibleContent = terminalContent.slice(0, visibleCharacters);

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-border bg-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="overflow-x-auto p-6">
        <pre className="min-h-63 whitespace-pre font-mono text-sm leading-7 text-muted">
          {visibleContent}
          <span className="terminal-cursor ml-1 inline-block">█</span>
        </pre>
      </div>
    </div>
  );
};

export default HeroTerminal;
