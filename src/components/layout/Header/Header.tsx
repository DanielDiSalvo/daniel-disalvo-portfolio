const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 font-semibold">
          <span className="text-xl font-bold">DD</span>
          <span>Daniel Di Salvo</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-1 rounded-full border border-border p-1 text-xs">
          <button className="rounded-full bg-foreground px-3 py-1 text-background">
            EN
          </button>

          <button className="px-3 py-1 text-muted">ES</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
