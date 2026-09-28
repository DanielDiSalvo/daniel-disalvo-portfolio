import Image from "next/image";

import MobileMenu from "./MobileMenu";
import { navigation } from "./data";

const Header = () => {
  return (
    <header className="relative border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 font-semibold">
          <Image
            src="/daniel-di-salvo.jpg"
            alt="Daniel Di Salvo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full border border-border object-cover"
          />

          <span>Daniel Di Salvo</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-border p-1 text-xs md:flex">
            <button className="rounded-full bg-foreground px-3 py-1 text-background">
              EN
            </button>

            <button className="px-3 py-1 text-muted">ES</button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
