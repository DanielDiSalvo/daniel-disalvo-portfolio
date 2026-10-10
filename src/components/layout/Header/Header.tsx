import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { navigation } from "./data";

const Header = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Header");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href={`/${locale}`}
          className="flex items-center gap-3 font-semibold"
        >
          <Image
            src="/images/daniel-di-salvo.jpg"
            alt="Daniel Di Salvo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full border border-border object-cover"
          />

          <span>Daniel Di Salvo</span>
        </a>

        <nav
          aria-label={t("mainNavigation")}
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map(({ key, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {t(`navigation.${key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
