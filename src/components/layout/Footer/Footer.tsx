const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium">Daniel Di Salvo</p>

          <p className="mt-1 text-sm text-muted">Senior Frontend Engineer</p>
        </div>

        <div className="text-sm text-muted sm:text-right">
          <p>© {currentYear} Daniel Di Salvo</p>

          <p className="mt-1">Built with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
