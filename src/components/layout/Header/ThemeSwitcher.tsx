"use client";

import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, [isLight]);

  const changeTheme = (theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
    setIsLight(theme === "light");
  };

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5 text-[10px] md:gap-1 md:p-1 md:text-xs"
      aria-label="Selector de tema"
    >
      <button
        type="button"
        onClick={() => changeTheme("light")}
        aria-pressed={isLight}
        className={`rounded-full px-2 py-1 transition-colors md:px-3 md:py-1.5 ${
          isLight
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        ☀
      </button>

      <button
        type="button"
        onClick={() => changeTheme("dark")}
        aria-pressed={!isLight}
        className={`rounded-full px-2 py-1 transition-colors md:px-3 md:py-1.5 ${
          !isLight
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        ☾
      </button>
    </div>
  );
};

export default ThemeSwitcher;
