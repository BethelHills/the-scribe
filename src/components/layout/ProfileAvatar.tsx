import Image from "next/image";
import { PROFILE_SRC } from "@/lib/images";

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

export default function ProfileAvatar({
  size = "md",
  className = "",
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-white/15 bg-[#2A2340] ${sizes[size]} ${className}`}
    >
      <Image
        src={PROFILE_SRC}
        alt="Dr. Michael Adeyemi"
        fill
        className="object-cover object-top"
        sizes={size === "xl" ? "80px" : size === "lg" ? "64px" : "44px"}
      />
    </div>
  );
}
