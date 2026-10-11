"use client";

import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("Contact.form");

  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs font-medium text-muted"
        >
          {t("name")}
        </label>

        <input
          id="name"
          name="name"
          type="text"
          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-medium text-muted"
        >
          {t("email")}
        </label>

        <input
          id="email"
          name="email"
          type="email"
          className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium text-muted"
        >
          {t("message")}
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        {t("submit")}
      </button>
    </form>
  );
};

export default ContactForm;
