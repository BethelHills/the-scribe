"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Plus, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import ProfileCard from "./ProfileCard";
import InspirationCard from "./InspirationCard";
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
              <div className="shrink-0 border-b border-white/10 px-4 py-3.5">
                <div className="flex items-center justify-between gap-2">
                  <BrandLogo size="sm" href="/" className="min-w-0 flex-1" />

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white hover:bg-white/15"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <Link
                  href="/interview"
                  onClick={() => setOpen(false)}
                  className={`mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8A66] to-[#E83E8C] text-sm font-semibold text-white shadow-lg shadow-[#E83E8C]/20 ${buttonInteractions} hover:brightness-110 active:brightness-95`}
                >
                  <Plus size={17} />
                  New Project
                </Link>
              </div>

              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
                <nav className="shrink-0 space-y-1 px-3 py-3">
                  <p className="px-2 pb-1.5 text-xs font-semibold uppercase tracking-wide text-white/50">
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
                        className={`flex min-h-[44px] items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                          active
                            ? "bg-[#4A35A0] text-white shadow-sm"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <Icon size={17} className="shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto space-y-2.5 border-t border-white/10 px-3 py-3">
                  <ProfileCard
                    variant="compact"
                    onNavigate={() => setOpen(false)}
                  />
                  <InspirationCard variant="compact" />
                </div>
              </div>
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
