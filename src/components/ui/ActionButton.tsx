import Link from "next/link";
import { buttonInteractions } from "./buttonStyles";

const baseClass = `inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ${buttonInteractions}`;

const variants = {
  primary:
    "bg-[#17122B] text-white hover:bg-[#2A2340] active:bg-[#0F0B1A]",
  secondary:
    "border border-[#E8DFD6] bg-white text-[#17122B] hover:bg-[#FAF7F2] active:bg-[#F3ECE3]",
  accent:
    "bg-[#7C4DFF] text-white hover:bg-[#6B3FE8] active:bg-[#5A32CC]",
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
    <Link
      href={href}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
