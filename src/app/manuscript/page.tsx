import Link from "next/link";
import {
  Bell,
  Bold,
  BookOpen,
  ChevronDown,
  Feather,
  FileText,
  Home,
  Italic,
  Link as LinkIcon,
  List,
  MessageSquareText,
  Plus,
  Redo2,
  Search,
  Settings,
  Sparkles,
  Underline,
  Undo2,
  UserRound,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Interview", icon: MessageSquareText, href: "/interview" },
  { name: "Manuscripts", icon: FileText, href: "/manuscript", active: true },
  { name: "AI Assistant", icon: Sparkles, href: "/assistant" },
  { name: "Voice Profile", icon: UserRound, href: "/voice-profile" },
  { name: "Scripture Library", icon: BookOpen, href: "/scripture-library" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function ManuscriptEditor() {
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
              Author Profile
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7A59] to-[#8B5CF6] font-bold">
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
          </div>
        </aside>

        <section className="flex-1 p-6 lg:p-8">
          <TopBar />

          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
            <EditorCard />
            <AssistantPanel />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <BottomCard title="Style Match" value="96%" text="Your writing style matches the author voice profile." />
            <BottomCard title="Favorite Scriptures" value="12" text="Philippians 4:13, John 14:27, Romans 8:28." />
            <BottomCard title="Common Phrases" value="8" text="Beloved, Indeed, Let me share this, Glory to God." />
            <BottomCard title="Writing Tone" value="Warm" text="Prophetic, encouraging, clear, and pastoral." />
          </div>
        </section>
      </div>
    </main>
  );
}

function TopBar() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#7A6F8F]">My Manuscripts ›</p>

          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-2xl font-bold">Faith Beyond the Storm</h2>
            <span className="text-sm text-[#7A6F8F]">✓ Saved</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white md:flex">
            <Search size={18} />
          </button>

          <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white md:flex">
            <Bell size={18} />
          </button>

          <button className="rounded-2xl bg-[#17122B] px-5 py-3 text-sm font-semibold text-white">
            Export
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 text-sm">
        <Step done label="Interview" />
        <Line />
        <Step done label="Voice Profile" />
        <Line />
        <Step active label="Manuscript" number="3" />
        <Line />
        <Step label="Finalize" number="4" />
      </div>
    </header>
  );
}

function Step({
  label,
  done,
  active,
  number,
}: {
  label: string;
  done?: boolean;
  active?: boolean;
  number?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
          active
            ? "bg-gradient-to-br from-[#FF7A59] to-[#7C4DFF] text-white"
            : done
            ? "bg-[#7C4DFF] text-white"
            : "border border-[#CFC5DA] text-[#7A6F8F]"
        }`}
      >
        {done ? "✓" : number}
      </div>
      <span className={active ? "font-semibold" : "text-[#7A6F8F]"}>
        {label}
      </span>
    </div>
  );
}

function Line() {
  return <div className="hidden h-px w-20 bg-[#D8CEDF] md:block" />;
}

function EditorCard() {
  return (
    <section className="rounded-[32px] border border-[#E8DFD6] bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-4 border-b border-[#E8DFD6] px-6 py-4">
        <button className="flex items-center gap-8 rounded-xl border border-[#E8DFD6] px-4 py-2 text-sm">
          Chapter 3
          <ChevronDown size={16} />
        </button>

        <Tool text="H1" />
        <Tool text="H2" />
        <Tool text="H3" />
        <Tool icon={<List size={18} />} />
        <Tool icon={<Bold size={18} />} />
        <Tool icon={<Italic size={18} />} />
        <Tool icon={<Underline size={18} />} />
        <Tool icon={<LinkIcon size={18} />} />

        <div className="ml-auto flex gap-3">
          <Undo2 size={18} />
          <Redo2 size={18} />
        </div>
      </div>

      <article className="p-8 lg:p-10">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight">
          Walking in Faith When You Can't See
        </h1>

        <p className="mt-4 text-xl italic text-[#7C4DFF]">
          "For we walk by faith, not by sight." — 2 Corinthians 5:7
        </p>

        <div className="mt-7 max-w-3xl space-y-5 leading-8 text-[#3F3654]">
          <p>
            There are seasons in life when the path ahead is shrouded in
            uncertainty. The winds of circumstance may blow strong, and the storm
            may rage around you, but this is precisely where faith becomes your
            anchor.
          </p>

          <p>
            Faith is not the absence of fear, nor is it a feeling. It is the
            confident assurance that God is still in control when nothing makes
            sense.
          </p>
        </div>

        <div className="mt-7 max-w-3xl rounded-2xl border border-[#F0CFAE] bg-gradient-to-r from-[#F6EAFE] to-[#FFF0DE] p-5">
          <p className="text-xl font-semibold text-[#8B5CF6]">
            "Faith says, I don't understand, but I trust You."
          </p>
        </div>

        <div className="mt-7 max-w-3xl space-y-5 leading-8 text-[#3F3654]">
          <p>
            When you choose to walk in faith, you are declaring that God's Word
            is more real than your current situation. You are saying that His
            promises outweigh your problems.
          </p>

          <h2 className="pt-3 text-2xl font-bold text-[#17122B]">
            1. Faith Anchors Your Soul
          </h2>

          <p>An anchor doesn't stop the storm, it keeps you from drifting.</p>
        </div>

        <div className="mt-8 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-[#E8DFD6] md:grid-cols-4">
          <MiniStat title="Words" value="2,450" />
          <MiniStat title="Last edited" value="15 min ago" />
          <MiniStat title="Tone Match" value="96%" />
          <div className="flex items-center justify-center p-4">
            <button className="rounded-2xl bg-[#17122B] px-5 py-3 text-sm font-semibold text-white">
              Enhance with AI
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

function AssistantPanel() {
  return (
    <aside className="rounded-[32px] border border-[#E8DFD6] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#E8DFD6] p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-[#FF7A59]" size={20} />
          <h3 className="font-bold">AI Assistant</h3>
        </div>

        <ChevronDown size={18} />
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <Chat text="How can I help you today?" />
          <Chat
            user
            text="Add a personal story about a time you had to trust God in uncertainty."
          />

          <div className="rounded-3xl bg-[#FAF7F2] p-4">
            <p className="text-sm leading-6">
              Here's a personal story you can include in this section:
            </p>

            <div className="mt-4 rounded-2xl border border-[#E8DFD6] bg-white p-4">
              <h4 className="font-semibold">A Story of Trust</h4>
              <p className="mt-3 text-sm leading-6 text-[#5F5571]">
                There was a time in my life when everything I had planned fell
                apart. Opportunities vanished, doors closed, and I felt stuck in
                a valley...
              </p>

              <button className="mt-4 rounded-xl bg-[#7C4DFF] px-4 py-2 text-sm font-semibold text-white">
                Insert into manuscript
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase text-[#7A6F8F]">
            Suggestions
          </p>

          <div className="space-y-3">
            {[
              "Add supporting scripture",
              "Expand this section",
              "Create sermon outline",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-[#E8DFD6] px-4 py-3 text-left text-sm hover:bg-[#FAF7F2]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[#E8DFD6] px-4 py-4 text-sm text-[#7A6F8F]">
          Ask anything...
        </div>
      </div>
    </aside>
  );
}

function Tool({ text, icon }: { text?: string; icon?: React.ReactNode }) {
  return (
    <button className="text-sm font-medium text-[#3F3654]">
      {icon || text}
    </button>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-b border-[#E8DFD6] p-4 md:border-b-0 md:border-r">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-1 text-lg font-bold">{value}</h4>
    </div>
  );
}

function Chat({ text, user = false }: { text: string; user?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-4 text-sm leading-6 ${
        user
          ? "ml-8 bg-[#7C4DFF] text-white"
          : "mr-8 bg-[#FAF7F2] text-[#17122B]"
      }`}
    >
      {text}
    </div>
  );
}

function BottomCard({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-3 text-3xl font-bold">{value}</h4>
      <p className="mt-3 text-sm leading-6 text-[#6B617C]">{text}</p>
    </div>
  );
}
