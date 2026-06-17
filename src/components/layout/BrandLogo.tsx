import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC } from "@/lib/images";

export default function BrandLogo({
  size = "md",
  showSubtitle = false,
  href = "/",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  href?: string;
  className?: string;
}) {
  const dimensions = {
    sm: { width: 120, height: 40, className: "h-8 w-auto" },
    md: { width: 180, height: 56, className: "h-12 w-auto" },
    lg: { width: 220, height: 68, className: "h-14 w-auto" },
  }[size];

  const content = (
    <div className={`flex flex-col ${className}`}>
      <Image
        src={LOGO_SRC}
        alt="The Scribe"
        width={dimensions.width}
        height={dimensions.height}
        className={`${dimensions.className} object-contain object-left`}
        priority
      />
      {showSubtitle ? (
        <p className="mt-2 text-sm text-white/60">AI Writing Assistant</p>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block transition hover:opacity-90 active:opacity-80">
        {content}
      </Link>
    );
  }

  return content;
}
