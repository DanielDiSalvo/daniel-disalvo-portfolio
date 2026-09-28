import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  download?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background transition-opacity hover:opacity-80",
  secondary:
    "border border-border text-foreground transition-colors hover:bg-white/5",
  accent: "bg-accent text-white transition-opacity hover:opacity-85",
};

const Button = ({
  children,
  href,
  variant = "primary",
  download = false,
}: ButtonProps) => {
  return (
    <a
      href={href}
      download={download}
      className={`rounded-lg px-6 py-3 text-center text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </a>
  );
};

export default Button;
