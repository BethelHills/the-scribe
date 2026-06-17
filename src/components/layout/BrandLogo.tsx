import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC } from "@/lib/images";

const LOGO_ASPECT = 1536 / 1024;

const sizes = {
  sm: { height: 36, className: "h-9 w-auto max-w-[140px]" },
  md: { height: 48, className: "h-12 w-auto max-w-[180px]" },
  lg: { height: 64, className: "h-16 w-auto max-w-[240px]" },
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
  const { height, className: sizeClass } = sizes[size];
  const width = Math.round(height * LOGO_ASPECT);

  const content = (
    <div className={className}>
      <Image
        src={LOGO_SRC}
        alt="The Scribe — AI Writing Assistant"
        width={width}
        height={height}
        className={`${sizeClass} object-contain object-left`}
        priority
        sizes="(max-width: 1024px) 140px, 240px"
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
