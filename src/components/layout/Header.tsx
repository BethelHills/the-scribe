"use client";

import MobileMenu from "./MobileMenu";
import {
  Bell,
  Search,
} from "lucide-react";

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileMenu />

          <div>
            <p className="text-sm text-[#7A6F8F]">
              {subtitle}
            </p>

            <h1 className="text-3xl font-bold text-[#17122B]">
              {title}
            </h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white">
            <Search size={18} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white">
            <Bell size={18} />
          </button>

          <div className="h-11 w-11 rounded-full bg-gradient-to-r from-[#FF7A59] to-[#8B5CF6]" />
        </div>
      </div>
    </header>
  );
}
