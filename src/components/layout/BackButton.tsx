"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buttonInteractions } from "@/components/ui/buttonStyles";

export default function BackButton({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "icon";
}) {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  const baseClass =
    variant === "icon"
      ? `inline-flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-card text-foreground ${buttonInteractions} hover:bg-surface-muted`
      : `inline-flex items-center gap-2 rounded-2xl border border-card-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground ${buttonInteractions} hover:bg-surface-muted`;

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`${baseClass} ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft size={variant === "icon" ? 18 : 16} />
      {variant === "default" ? "Back" : null}
    </button>
  );
}
