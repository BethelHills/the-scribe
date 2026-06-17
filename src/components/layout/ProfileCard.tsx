"use client";

import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";

export default function ProfileCard({
  onNavigate,
  variant = "default",
}: {
  onNavigate?: () => void;
  variant?: "default" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div className="rounded-2xl bg-white/10 p-3">
        <div className="flex items-center gap-3">
          <ProfileAvatar size="sm" />

          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-wide text-white/50">
              Author Profile
            </p>
            <h3 className="truncate text-sm font-semibold">
              Dr. Michael Adeyemi
            </h3>
            <Link
              href="/voice-profile"
              onClick={onNavigate}
              className="mt-0.5 inline-flex items-center gap-1 text-xs text-[#B8A4FF] transition hover:text-white active:opacity-80"
            >
              View Full Profile
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-[10px] text-white/50">Voice</p>
            <p className="text-sm font-semibold">92%</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white/10 p-5">
      <p className="text-xs uppercase tracking-wide text-white/50">
        Author Profile
      </p>

      <div className="mt-4 flex items-center gap-3">
        <ProfileAvatar size="md" />

        <div>
          <h3 className="font-semibold">Dr. Michael Adeyemi</h3>
          <p className="text-xs text-white/60">
            Apostolic | Teacher | Author
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs">
          <span className="text-white/60">Voice Match</span>
          <span>92%</span>
        </div>

        <div className="h-2 rounded-full bg-white/15">
          <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF7A59]" />
        </div>
      </div>

      <Link
        href="/voice-profile"
        onClick={onNavigate}
        className="mt-5 inline-flex items-center gap-1 text-sm text-[#B8A4FF] transition hover:text-white active:opacity-80"
      >
        View Full Profile
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
