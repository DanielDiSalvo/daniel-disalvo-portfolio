"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
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
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5 text-[10px] md:gap-1 md:p-1 md:text-xs"
      aria-label={t("languageSelector")}
    >
      <button
        type="button"
        onClick={() => changeLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2 py-1 md:px-3 md:py-1.5 transition-colors ${
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
