import Link from "next/link";
import { buttonInteractions } from "./buttonStyles";

const baseClass = `inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ${buttonInteractions}`;

const variants = {
  primary:
    "bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-hover active:opacity-90",
  secondary:
    "border border-card-border bg-card text-foreground hover:bg-surface-muted active:bg-surface",
  accent: "bg-accent text-white hover:opacity-90 active:opacity-80",
};

export function ActionButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function ActionLink({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${baseClass} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
