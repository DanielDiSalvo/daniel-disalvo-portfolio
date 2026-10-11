"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const THEME_EVENT = "portfolio-theme-change";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
};

const getSnapshot = (): Theme => {
  return localStorage.getItem("theme") === "light" ? "light" : "dark";
};

const getServerSnapshot = (): Theme => "dark";

const ThemeSwitcher = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isLight = theme === "light";

  const changeTheme = (nextTheme: Theme) => {
    localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5 text-[10px] md:gap-1 md:p-1 md:text-xs"
      aria-label="Selector de tema"
    >
      <button
        type="button"
        onClick={() => changeTheme("light")}
        aria-label="Activar tema claro"
        aria-pressed={isLight}
        className={`rounded-full px-2 py-1 transition-colors md:px-3 md:py-1.5 ${
          isLight
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        <Sun className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => changeTheme("dark")}
        aria-label="Activar tema oscuro"
        aria-pressed={!isLight}
        className={`rounded-full px-2 py-1 transition-colors md:px-3 md:py-1.5 ${
          !isLight
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        <Moon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
