import {
  BarChart3,
  BookMarked,
  BookOpen,
  Feather,
  LayoutDashboard,
  LayoutTemplate,
  MessageSquare,
  Plus,
  Settings,
  Sparkles,
  UserCircle,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: false },
  { label: "Interview", icon: MessageSquare, active: false },
  { label: "Manuscripts", icon: BookOpen, active: true },
  { label: "AI Assistant", icon: Sparkles, active: false },
  { label: "Voice Profile", icon: UserCircle, active: false },
  { label: "Scripture Library", icon: BookMarked, active: false },
  { label: "Templates", icon: LayoutTemplate, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col bg-gradient-to-b from-[#15122D] to-[#221A48] text-white">
      <div className="flex flex-1 flex-col overflow-y-auto px-5 pb-5 pt-6">
        {/* Logo */}
        <div className="mb-6 px-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
              <Feather className="h-5 w-5 text-[#FF9A7B]" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">The Scribe</h1>
              <p className="text-xs font-medium text-white/50">AI Writing Assistant</p>
            </div>
          </div>
        </div>

        {/* New Project */}
        <button
          type="button"
          className="mb-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF7A59] to-[#E83E8C] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E83E8C]/25 transition-all hover:shadow-xl hover:shadow-[#E83E8C]/30 hover:brightness-105"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          New Project
        </button>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              type="button"
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-white/12 text-white shadow-sm ring-1 ring-white/10"
                  : "text-white/60 hover:bg-white/6 hover:text-white/90"
              }`}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={active ? 2.25 : 2} />
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4 pt-8">
          {/* Author profile */}
          <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7A59] to-[#E83E8C] text-sm font-bold text-white shadow-md">
                SM
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">Rev. Sarah Mitchell</p>
                <p className="truncate text-xs text-white/45">Pastoral Author</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-medium text-white/50">Voice Match</span>
                <span className="font-semibold text-[#FF9A7B]">92%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF7A59] to-[#E83E8C]"
                  style={{ width: "92%" }}
                />
              </div>
            </div>
          </div>

          {/* Inspirational card */}
          <div className="relative overflow-hidden rounded-2xl p-4 ring-1 ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59]/20 via-[#E83E8C]/10 to-[#6B4EE6]/20" />
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#FF7A59]/15 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#6B4EE6]/20 blur-2xl" />
            <div className="relative">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Feather className="h-5 w-5 text-[#FF9A7B]" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-white/80">
                &ldquo;Write the vision; make it plain.&rdquo;
              </p>
              <p className="mt-1.5 text-xs text-white/40">Habakkuk 2:2</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
