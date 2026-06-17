"use client";

import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";

export default function ProfileCard() {
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
        className="mt-5 inline-flex items-center gap-1 text-sm text-[#B8A4FF] transition hover:text-white active:opacity-80"
      >
        View Full Profile
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
