"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Plus, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { navItems } from "./nav-items";
import { buttonInteractions } from "@/components/ui/buttonStyles";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-xl p-1 text-foreground lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex h-full w-[min(280px,85vw)] flex-col overflow-y-auto bg-gradient-to-b from-[#15122D] via-[#171236] to-[#24184C] p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-3">
              <BrandLogo size="md" href="/" className="min-w-0 flex-1" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>

            <Link
              href="/interview"
              onClick={() => setOpen(false)}
              className={`mb-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8A66] to-[#E83E8C] text-sm font-semibold shadow-lg shadow-[#E83E8C]/20 ${buttonInteractions} hover:brightness-110 active:brightness-95`}
            >
              <Plus size={18} />
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
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
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
        </div>
      ) : null}
    </>
  );
}
