"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Plus, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { navItems } from "./nav-items";
import { buttonInteractions } from "@/components/ui/buttonStyles";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const drawer =
    open && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[200] lg:hidden" role="presentation">
            <button
              type="button"
              className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />

            <aside
              className="absolute left-0 top-0 flex h-full w-[min(300px,88vw)] flex-col overflow-hidden rounded-r-[28px] border-r border-white/10 bg-gradient-to-b from-[#15122D] via-[#171236] to-[#24184C] text-white shadow-[8px_0_40px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="shrink-0 border-b border-white/10 p-5">
                <div className="flex items-start justify-between gap-3">
                  <BrandLogo size="md" href="/" className="min-w-0 flex-1" />

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white hover:bg-white/15"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <Link
                  href="/interview"
                  onClick={() => setOpen(false)}
                  className={`mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8A66] to-[#E83E8C] text-sm font-semibold text-white shadow-lg shadow-[#E83E8C]/20 ${buttonInteractions} hover:brightness-110 active:brightness-95`}
                >
                  <Plus size={18} />
                  New Project
                </Link>
              </div>

              <nav className="flex-1 space-y-1.5 overflow-y-auto px-4 py-4">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Pages
                </p>

                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-[48px] items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                        active
                          ? "bg-[#4A35A0] text-white shadow-sm"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon size={18} className="shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </aside>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white lg:hidden ${buttonInteractions} hover:bg-white/15`}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu size={22} />
      </button>

      {drawer}
    </>
  );
}
