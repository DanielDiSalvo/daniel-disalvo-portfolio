"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (nextLocale: "en" | "es") => {
    if (locale === nextLocale) {
      return;
    }

    const segments = pathname.split("/");
    segments[1] = nextLocale;

    const nextPathname = segments.join("/") || `/${nextLocale}`;
    const hash = window.location.hash;

    router.replace(`${nextPathname}${hash}`);
  };

  return (
    <div
      className="hidden items-center gap-1 rounded-full border border-border p-1 text-xs md:flex"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => changeLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "en"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => changeLocale("es")}
        aria-pressed={locale === "es"}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "es"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
