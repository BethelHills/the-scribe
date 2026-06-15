import Link from "next/link";
import {
  BookMarked,
  BookOpen,
  Feather,
  FileText,
  Filter,
  Home,
  MessageSquareText,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Interview", icon: MessageSquareText, href: "/interview" },
  { name: "Manuscripts", icon: FileText, href: "/manuscript" },
  { name: "AI Assistant", icon: Sparkles, href: "/assistant" },
  { name: "Voice Profile", icon: UserRound, href: "/voice-profile" },
  { name: "Scripture Library", icon: BookOpen, href: "/scripture-library", active: true },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const scriptures = [
  {
    verse: "2 Corinthians 5:7",
    text: "For we walk by faith, not by sight.",
    theme: "Faith",
    usage: "Used often when teaching trust during uncertainty.",
  },
  {
    verse: "Romans 8:28",
    text: "And we know that all things work together for good to them that love God.",
    theme: "Hope",
    usage: "Used to remind readers that God is still working.",
  },
  {
    verse: "Isaiah 41:10",
    text: "Fear thou not; for I am with thee.",
    theme: "Courage",
    usage: "Used in chapters about fear, peace, and strength.",
  },
  {
    verse: "John 14:27",
    text: "Peace I leave with you, my peace I give unto you.",
    theme: "Peace",
    usage: "Used for devotional sections and closing encouragement.",
  },
];

export default function ScriptureLibraryPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#17122B]">
      <div className="flex min-h-screen">
        <aside className="hidden w-[280px] flex-col justify-between bg-[#17122B] p-6 text-white lg:flex">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A59] to-[#8B5CF6]">
                <Feather size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">The Scribe</h1>
                <p className="text-sm text-white/60">AI Writing Assistant</p>
              </div>
            </div>

            <button className="mb-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF7A59] to-[#E83E8C] font-semibold">
              <Plus size={18} />
              New Project
            </button>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const className = `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
                  item.active
                    ? "bg-white/15 text-white"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`;

                if (item.href) {
                  return (
                    <Link key={item.name} href={item.href} className={className}>
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                }

                return (
                  <div key={item.name} className={className}>
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-xs uppercase tracking-wide text-white/50">
              Scripture Pattern
            </p>

            <h3 className="mt-3 text-3xl font-bold">18</h3>
            <p className="mt-2 text-sm text-white/60">
              scriptures captured from the author's teaching style.
            </p>

            <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/75">
              Most-used theme: Faith during uncertainty.
            </div>
          </div>
        </aside>

        <section className="flex-1 p-6 lg:p-10">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-sm text-[#7A6F8F]">Author Knowledge Base</p>
              <h2 className="mt-2 text-4xl font-bold">Scripture Library</h2>
              <p className="mt-3 max-w-2xl text-[#6B617C]">
                Save the scriptures this author uses often, group them by theme,
                and let The Scribe suggest them naturally while writing.
              </p>
            </div>

            <button className="hidden rounded-2xl bg-[#17122B] px-6 py-3 text-sm font-semibold text-white md:block">
              Add Scripture
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
            <section className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3">
                    <Search size={18} className="text-[#7A6F8F]" />
                    <input
                      className="w-full bg-transparent text-sm outline-none"
                      placeholder="Search scripture, theme, or note..."
                    />
                  </div>

                  <button className="flex items-center justify-center gap-2 rounded-2xl border border-[#E8DFD6] px-5 py-3 text-sm font-semibold">
                    <Filter size={17} />
                    Filter
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {scriptures.map((item) => (
                  <ScriptureCard key={item.verse} {...item} />
                ))}
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2">
                  <BookMarked className="text-[#FF7A59]" />
                  <h3 className="text-xl font-bold">Theme Groups</h3>
                </div>

                <Theme name="Faith" count="7" active />
                <Theme name="Hope" count="4" />
                <Theme name="Peace" count="3" />
                <Theme name="Courage" count="2" />
                <Theme name="Purpose" count="2" />
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-gradient-to-br from-[#17122B] to-[#3A2A7A] p-6 text-white shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-[#FFB199]" />
                  <h3 className="text-xl font-bold">AI Suggestion</h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  For the current chapter, The Scribe recommends using
                  2 Corinthians 5:7 and John 14:27 because the topic is faith
                  and peace during uncertainty.
                </p>

                <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#17122B]">
                  Insert Suggested Verses
                </button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function ScriptureCard({
  verse,
  text,
  theme,
  usage,
}: {
  verse: string;
  text: string;
  theme: string;
  usage: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#7A6F8F]">{theme}</p>
          <h3 className="mt-2 text-2xl font-bold">{verse}</h3>
        </div>

        <Star size={20} className="text-[#FF7A59]" />
      </div>

      <p className="mt-5 text-lg italic leading-8 text-[#7C4DFF]">&ldquo;{text}&rdquo;</p>

      <div className="mt-5 rounded-2xl bg-[#FAF7F2] p-4">
        <p className="text-sm leading-6 text-[#5F5571]">{usage}</p>
      </div>
    </div>
  );
}

function Theme({
  name,
  count,
  active = false,
}: {
  name: string;
  count: string;
  active?: boolean;
}) {
  return (
    <div
      className={`mb-3 flex items-center justify-between rounded-2xl px-4 py-3 text-sm ${
        active ? "bg-[#7C4DFF] text-white" : "bg-[#FAF7F2]"
      }`}
    >
      <span>{name}</span>
      <span>{count}</span>
    </div>
  );
}
