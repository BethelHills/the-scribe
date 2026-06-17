"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import InspirationCard from "./InspirationCard";
import {
  Home,
  MessageSquareText,
  FileText,
  Sparkles,
  UserRound,
  BookOpen,
  Settings,
  Feather,
  Plus,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "Interview",
    href: "/interview",
    icon: MessageSquareText,
  },
  {
    name: "Manuscripts",
    href: "/manuscript",
    icon: FileText,
  },
  {
    name: "AI Assistant",
    href: "/assistant",
    icon: Sparkles,
  },
  {
    name: "Voice Profile",
    href: "/voice-profile",
    icon: UserRound,
  },
  {
    name: "Scripture Library",
    href: "/scripture-library",
    icon: BookOpen,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-[280px] min-h-screen bg-[#17122B] text-white flex-col justify-between p-6">
      <div>
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A59] to-[#8B5CF6]">
            <Feather size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              The Scribe
            </h1>

            <p className="text-sm text-white/60">
              AI Writing Assistant
            </p>
          </div>
        </div>

        <button className="mb-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF7A59] to-[#E83E8C] font-semibold">
          <Plus size={18} />
          New Project
        </button>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                  active
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-5">
        <div className="rounded-3xl bg-white/10 p-5">
          <p className="text-xs uppercase tracking-wide text-white/50">
            Author Profile
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#FF7A59] to-[#8B5CF6] text-sm font-bold">
              M
            </div>

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
            className="mt-5 inline-flex items-center gap-1 text-sm text-[#B8A4FF] hover:text-white"
          >
            View Full Profile
            <span aria-hidden>→</span>
          </Link>
        </div>

        <InspirationCard />
      </div>
    </aside>
  );
}
