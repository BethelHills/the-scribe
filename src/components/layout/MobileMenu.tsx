"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "./nav-items";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-xl p-1 text-[#17122B] lg:hidden"
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
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#C8B6FF]">The Scribe</h2>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>

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
