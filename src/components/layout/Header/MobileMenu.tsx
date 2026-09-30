"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { navigation } from "./data";

const MobileMenu = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>

        <div className="flex flex-col gap-1.5">
          <span
            className={`h-px w-4 bg-foreground transition-transform ${
              isOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-4 bg-foreground transition-transform ${
              isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-b border-border bg-background"
        >
          <nav
            aria-label={t("mobileNavigation")}
            className="mx-auto max-w-7xl px-6 py-6"
          >
            <div className="flex flex-col">
              {navigation.map(({ key, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="border-b border-border py-4 text-sm text-muted transition-colors last:border-b-0 hover:text-foreground"
                >
                  {t(`navigation.${key}`)}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
