"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Feather, Plus } from "lucide-react";
import ProfileCard from "./ProfileCard";
import InspirationCard from "./InspirationCard";
import { navItems } from "./nav-items";
import { buttonInteractions } from "@/components/ui/buttonStyles";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 flex-col justify-between overflow-y-auto rounded-r-[28px] bg-gradient-to-b from-[#15122D] via-[#171236] to-[#24184C] p-6 text-white lg:flex">
      <div>
        <div className="mb-9 flex items-center gap-3">
          <Feather size={43} className="text-[#9D7CFF]" />

          <div>
            <h1 className="text-[26px] font-bold leading-tight text-[#C8B6FF]">
              The Scribe
            </h1>
            <p className="text-sm text-white/60">AI Writing Assistant</p>
          </div>
        </div>

        <Link
          href="/interview"
          className={`mb-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8A66] to-[#E83E8C] text-sm font-semibold shadow-lg shadow-[#E83E8C]/20 ${buttonInteractions} hover:brightness-110 active:brightness-95`}
        >
          <Plus size={19} />
          New Project
        </Link>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-[12px] text-sm transition ${
                  active
                    ? "bg-[#4A35A0] text-white"
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

      <div className="mt-8 space-y-5">
        <ProfileCard />
        <InspirationCard />
      </div>
    </aside>
  );
}
