"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  MessageSquareText,
  FileText,
  Sparkles,
  UserRound,
  BookOpen,
  Settings,
} from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Interview", href: "/interview", icon: MessageSquareText },
    { name: "Manuscripts", href: "/manuscript", icon: FileText },
    { name: "AI Assistant", href: "/assistant", icon: Sparkles },
    { name: "Voice Profile", href: "/voice-profile", icon: UserRound },
    { name: "Scripture Library", href: "/scripture-library", icon: BookOpen },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="h-full w-[280px] bg-[#17122B] p-6 text-white">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                The Scribe
              </h2>

              <button
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>

            <div className="space-y-3">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/10"
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
