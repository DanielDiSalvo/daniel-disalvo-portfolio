"use client";

import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";

const BackToTop = () => {
  const t = useTranslations("BackToTop");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("label")}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-lg text-muted shadow-lg transition-all duration-200 hover:-translate-y-1 hover:text-foreground"
    >
      ↑
    </button>
  );
};

export default BackToTop;
