import { contactLinks } from "./data";
import { getTranslations } from "next-intl/server";
import ContactForm from "./ContactForm";

const Contact = async () => {
  const t = await getTranslations("Contact");

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <p className="text-xs font-medium tracking-[0.18em] text-muted">
          {t("label")}
        </p>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {t("title")}
              <br />
              {t("titleSecondLine")}
              <br />
              <span className="text-accent">{t("titleAccent")}</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-muted md:text-lg">
              {t("description")}
            </p>
          </div>

          <div className="border-t border-border">
            {contactLinks.map(({ key, value, href }) => (
              <a
                key={key}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-6 border-b border-border py-5"
              >
                <div className="min-w-0">
                  <p className="text-xs text-muted">{t(`links.${key}`)}</p>

                  <p className="mt-1 truncate text-sm font-medium md:text-base">
                    {value}
                  </p>
                </div>

                <span className="shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <div className="mb-12 max-w-xl">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("directMessage.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted md:text-base">
              {t("directMessage.description")}
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
