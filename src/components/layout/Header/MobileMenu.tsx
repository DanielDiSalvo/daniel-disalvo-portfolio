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
                  className="border-l-2 border-transparent px-4 py-5 text-muted transition-all duration-200 hover:border-accent hover:bg-white/[0.04] hover:text-foreground active:border-accent active:bg-white/[0.06] active:text-foreground focus-visible:border-accent focus-visible:bg-white/[0.04] focus-visible:text-foreground focus-visible:outline-none"
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
