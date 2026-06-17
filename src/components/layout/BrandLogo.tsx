import Link from "next/link";
import { LOGO_SRC } from "@/lib/images";

const sizes = {
  // Mobile sticky header
  sm: {
    className:
      "h-20 w-auto max-w-[min(100%,340px)] sm:h-[5.5rem] sm:max-w-[400px]",
  },
  // Mobile menu drawer
  md: {
    className:
      "h-[5.5rem] w-auto max-w-[min(100%,360px)] sm:h-24 sm:max-w-[420px]",
  },
  // Desktop sidebar — tall enough to read tagline
  lg: { className: "h-[8.5rem] w-full max-w-full sm:h-36" },
} as const;

export default function BrandLogo({
  size = "md",
  href = "/",
  className = "",
}: {
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
}) {
  const { className: sizeClass } = sizes[size];

  const content = (
    <div className={className}>
      <img
        src={LOGO_SRC}
        alt="The Scribe — AI Writing Assistant"
        className={`${sizeClass} block object-contain object-left`}
        decoding="async"
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block w-full transition hover:opacity-90 active:opacity-80"
      >
        {content}
      </Link>
    );
  }

  return content;
}
