import Link from "next/link";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition";

const variants = {
  primary: "bg-[#17122B] text-white hover:opacity-90",
  secondary: "border border-[#E8DFD6] bg-white text-[#17122B] hover:bg-[#FAF7F2]",
  accent: "bg-[#7C4DFF] text-white hover:opacity-90",
};

export function ActionButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
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
