import Link from "next/link";
import {
  BookOpen,
  Brain,
  Copy,
  Feather,
  FileText,
  Home,
  MessageSquareText,
  Mic,
  Plus,
  RefreshCcw,
  Send,
  Settings,
  Sparkles,
  UserRound,
  Wand2,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Interview", icon: MessageSquareText, href: "/interview" },
  { name: "Manuscripts", icon: FileText, href: "/manuscript" },
  { name: "AI Assistant", icon: Sparkles, href: "/assistant", active: true },
  { name: "Voice Profile", icon: UserRound, href: "/voice-profile" },
  { name: "Scripture Library", icon: BookOpen, href: "/scripture-library" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const quickActions = [
  "Generate chapter outline",
  "Rewrite in author's tone",
  "Add supporting scripture",
  "Create sermon notes",
  "Expand this section",
  "Summarize the chapter",
];

export default function AIAssistantPage() {
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
              Active Voice Profile
            </p>
            <h3 className="mt-3 font-semibold">Dr. Michael Adeyemi</h3>
            <p className="mt-2 text-sm text-white/60">
              Warm, prophetic, pastoral, scripture-rich.
            </p>

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

        <section className="flex-1 p-6 lg:p-10">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-sm text-[#7A6F8F]">Creative AI Workspace</p>
              <h2 className="mt-2 text-4xl font-bold">AI Assistant</h2>
              <p className="mt-3 max-w-2xl text-[#6B617C]">
                Ask The Scribe to generate, rewrite, expand, structure, and
                improve content using the author's captured voice.
              </p>
            </div>

            <button className="hidden rounded-2xl bg-[#17122B] px-6 py-3 text-sm font-semibold text-white md:block">
              New Chat
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
            <section className="rounded-[32px] border border-[#E8DFD6] bg-white shadow-sm">
              <div className="border-b border-[#E8DFD6] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      Manuscript Assistant
                    </h3>
                    <p className="mt-1 text-sm text-[#7A6F8F]">
                      Connected to: Faith Beyond the Storm
                    </p>
                  </div>

                  <span className="rounded-full bg-[#FDEDE6] px-4 py-2 text-sm font-semibold text-[#FF7A59]">
                    Voice-Aware
                  </span>
                </div>
              </div>

              <div className="space-y-6 p-6">
                <AssistantMessage
                  icon={<Sparkles size={18} />}
                  title="The Scribe"
                  text="I have loaded the author's voice profile. I can help you write in their tone, suggest scriptures, create outlines, and improve the manuscript."
                />

                <UserMessage text="Create a chapter outline for faith during uncertainty." />

                <AssistantResponse />

                <UserMessage text="Now rewrite point 2 in a more prophetic and encouraging tone." />

                <AssistantMessage
                  icon={<Wand2 size={18} />}
                  title="The Scribe"
                  text="Here is a stronger version: Beloved, even when the road is unclear, God is not absent. The silence of a season does not mean the absence of His hand. He is still working, still guiding, and still keeping His word."
                />

                <div className="mt-8 rounded-3xl border border-[#E8DFD6] bg-[#FAF7F2] p-4">
                  <div className="flex items-center gap-3">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                      <Mic size={18} />
                    </button>

                    <input
                      className="flex-1 bg-transparent text-sm outline-none"
                      placeholder="Ask The Scribe anything about this manuscript..."
                    />

                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7C4DFF] text-white">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2">
                  <Brain className="text-[#FF7A59]" />
                  <h3 className="text-xl font-bold">AI Context</h3>
                </div>

                <ContextItem title="Author" value="Dr. Michael Adeyemi" />
                <ContextItem title="Tone" value="Warm, prophetic, pastoral" />
                <ContextItem title="Book" value="Faith Beyond the Storm" />
                <ContextItem title="Voice Match" value="92%" />
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Quick Actions</h3>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      className="flex items-center gap-3 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3 text-left text-sm hover:bg-white"
                    >
                      <Sparkles size={16} className="text-[#7C4DFF]" />
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-gradient-to-br from-[#17122B] to-[#3A2A7A] p-6 text-white shadow-sm">
                <h3 className="text-xl font-bold">Smart Suggestions</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The next best move is to add one personal story and one
                  scripture reference to make the chapter feel more authentic.
                </p>

                <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#17122B]">
                  Apply Suggestion
                </button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function AssistantMessage({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex justify-start">
      <div className="max-w-3xl rounded-3xl bg-[#FAF7F2] p-5">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#7A6F8F]">
          {icon}
          {title}
        </div>
        <p className="leading-7 text-[#3F3654]">{text}</p>
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-2xl rounded-3xl bg-[#7C4DFF] p-5 text-white">
        <p className="text-sm font-semibold text-white/70">Author</p>
        <p className="mt-2 leading-7">{text}</p>
      </div>
    </div>
  );
}

function AssistantResponse() {
  return (
    <div className="rounded-3xl bg-[#FAF7F2] p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#7A6F8F]">
        <Sparkles size={18} />
        The Scribe
      </div>

      <h4 className="text-lg font-bold">Chapter Outline</h4>

      <div className="mt-4 space-y-3 text-sm leading-6 text-[#3F3654]">
        <p>
          <strong>1. When the Path Is Hidden</strong> — Introduce uncertainty as
          a place where faith matures.
        </p>
        <p>
          <strong>2. God Is Still Present</strong> — Show that silence does not
          mean abandonment.
        </p>
        <p>
          <strong>3. Faith Anchors the Soul</strong> — Explain how faith keeps
          believers steady in difficult seasons.
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-xl border border-[#E8DFD6] bg-white px-4 py-2 text-sm font-semibold">
          <Copy size={15} />
          Copy
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-[#E8DFD6] bg-white px-4 py-2 text-sm font-semibold">
          <RefreshCcw size={15} />
          Regenerate
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-[#17122B] px-4 py-2 text-sm font-semibold text-white">
          <FileText size={15} />
          Insert
        </button>
      </div>
    </div>
  );
}

function ContextItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-b border-[#E8DFD6] py-4 last:border-b-0">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-1 font-semibold">{value}</h4>
    </div>
  );
}
