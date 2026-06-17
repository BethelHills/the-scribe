import Link from "next/link";
import { LOGO_SRC } from "@/lib/images";

const sizes = {
  sm: { className: "h-10 w-auto max-w-[160px] sm:h-11 sm:max-w-[180px]" },
  md: { className: "h-12 w-auto max-w-[200px]" },
  lg: { className: "h-[4.5rem] w-auto max-w-[252px] sm:h-20 sm:max-w-[280px]" },
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
      {/* Native img so logo updates immediately without Next image cache */}
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
        className="inline-block transition hover:opacity-90 active:opacity-80"
      >
        {content}
      </Link>
    );
  }

  return content;
}
