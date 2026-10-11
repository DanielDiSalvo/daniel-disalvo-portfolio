"use client";

import { useEffect, useState } from "react";

const desktopTerminalLines = [
  "danieldisalvo@MacBook-Pro-de-Daniel ~ %",
  "const dany = {",
  '  role: "Senior Frontend Engineer",',
  '  stack: ["React", "React Native", "Next.js", "TypeScript"],',
  '  focus: "Web + Mobile products",',
  '  passion: "Teaching & building",',
  '  location: "Argentina",',
  "};",
  "// Always learning...",
];

const mobileTerminalLines = [
  "danieldisalvo@MacBook-Pro-de-Daniel ~ %",
  "const dany = {",
  '  role: "Senior Frontend Engineer",',
  "  stack: [",
  '    "React",',
  '    "React Native",',
  '    "Next.js",',
  '    "TypeScript",',
  "  ],",
  '  focus: "Web + Mobile products",',
  '  passion: "Teaching & building",',
  '  location: "Argentina",',
  "};",
  "// Always learning...",
];

const desktopContent = desktopTerminalLines.join("\n");
const mobileContent = mobileTerminalLines.join("\n");

const HeroTerminal = () => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const maxCharacters = Math.max(desktopContent.length, mobileContent.length);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleCharacters((current) => {
        if (current >= maxCharacters) {
          window.clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 20);

    return () => window.clearInterval(interval);
  }, [maxCharacters]);

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="overflow-x-auto p-6">
        {/* Mobile */}
        <pre className="min-h-91 whitespace-pre font-mono text-sm leading-7 text-muted md:hidden">
          {mobileContent.slice(0, visibleCharacters)}
          <span className="terminal-cursor ml-1 inline-block">█</span>
        </pre>

        {/* Desktop */}
        <pre className="hidden min-h-63 whitespace-pre font-mono text-sm leading-7 text-muted md:block">
          {desktopContent.slice(0, visibleCharacters)}
          <span className="terminal-cursor ml-1 inline-block">█</span>
        </pre>
      </div>
    </div>
  );
};

export default HeroTerminal;
