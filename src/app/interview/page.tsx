import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  Feather,
  FileText,
  Home,
  MessageSquareText,
  Mic,
  Plus,
  Send,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Interview", icon: MessageSquareText, href: "/interview", active: true },
  { name: "Manuscripts", icon: FileText, href: "/manuscript" },
  { name: "AI Assistant", icon: Sparkles, href: "/assistant" },
  { name: "Voice Profile", icon: UserRound, href: "/voice-profile" },
  { name: "Scripture Library", icon: BookOpen, href: "/scripture-library" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const questions = [
  "What message burns strongest in your heart right now?",
  "What scriptures do you quote most often?",
  "How do you usually open your sermons or books?",
  "What phrases do your audience hear from you often?",
];

export default function InterviewPage() {
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
              Interview Progress
            </p>

            <h3 className="mt-3 text-3xl font-bold">68%</h3>

            <div className="mt-4 h-2 rounded-full bg-white/15">
              <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF7A59]" />
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">
              The AI is learning the author's tone, doctrine, stories, and
              writing rhythm.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-6 lg:p-10">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-sm text-[#7A6F8F]">Voice Training</p>
              <h2 className="mt-2 text-4xl font-bold">Author Interview</h2>
              <p className="mt-3 max-w-2xl text-[#6B617C]">
                The Scribe asks guided questions to capture the author's voice,
                theology, phrases, stories, and writing style.
              </p>
            </div>

            <button className="hidden rounded-2xl bg-[#17122B] px-6 py-3 text-sm font-semibold text-white md:block">
              Save Interview
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
            <section className="rounded-[32px] border border-[#E8DFD6] bg-white shadow-sm">
              <div className="border-b border-[#E8DFD6] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      Interview Session 01
                    </h3>
                    <p className="mt-1 text-sm text-[#7A6F8F]">
                      Learning Dr. Michael Adeyemi's writing voice
                    </p>
                  </div>

                  <span className="rounded-full bg-[#FDEDE6] px-4 py-2 text-sm font-semibold text-[#FF7A59]">
                    In Progress
                  </span>
                </div>
              </div>

              <div className="space-y-6 p-6">
                <Message
                  title="The Scribe"
                  text="Welcome. I'll ask a few questions to understand your voice. What message burns strongest in your heart right now?"
                />

                <Message
                  user
                  title="Author"
                  text="My strongest message is helping believers trust God when life feels uncertain. I often teach that faith is not denial, it is confidence in God's nature."
                />

                <Message
                  title="The Scribe"
                  text="That is strong. What scriptures do you often connect with this message?"
                />

                <Message
                  user
                  title="Author"
                  text="I often use 2 Corinthians 5:7, Romans 8:28, Isaiah 41:10, and John 14:27."
                />

                <div className="rounded-3xl border border-[#E8DFD6] bg-[#FFF9F2] p-5">
                  <p className="text-sm font-semibold text-[#7A6F8F]">
                    Current Question
                  </p>

                  <h4 className="mt-3 text-2xl font-bold">
                    How do you usually begin a chapter or sermon?
                  </h4>

                  <textarea
                    className="mt-5 min-h-[150px] w-full resize-none rounded-2xl border border-[#E8DFD6] bg-white p-4 outline-none focus:border-[#8B5CF6]"
                    placeholder="Type the author's answer here..."
                  />

                  <div className="mt-4 flex items-center justify-between">
                    <button className="flex items-center gap-2 rounded-2xl border border-[#E8DFD6] px-5 py-3 text-sm font-semibold">
                      <Mic size={17} />
                      Record Answer
                    </button>

                    <button className="flex items-center gap-2 rounded-2xl bg-[#7C4DFF] px-5 py-3 text-sm font-semibold text-white">
                      Send Answer
                      <Send size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2">
                  <Sparkles className="text-[#FF7A59]" />
                  <h3 className="text-xl font-bold">Voice Insights</h3>
                </div>

                <Insight label="Tone" value="Warm, prophetic, pastoral" />
                <Insight label="Common Theme" value="Faith during uncertainty" />
                <Insight label="Scripture Style" value="Direct and devotional" />
                <Insight label="Voice Strength" value="68% captured" />
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Question Bank</h3>

                <div className="mt-5 space-y-3">
                  {questions.map((question, index) => (
                    <div
                      key={question}
                      className="rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] p-4 text-sm leading-6"
                    >
                      <div className="mb-2 flex items-center gap-2 font-semibold">
                        <CheckCircle2
                          size={17}
                          className={
                            index < 2 ? "text-[#7C4DFF]" : "text-[#CFC5DA]"
                          }
                        />
                        Question {index + 1}
                      </div>
                      {question}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function Message({
  title,
  text,
  user = false,
}: {
  title: string;
  text: string;
  user?: boolean;
}) {
  return (
    <div className={`flex ${user ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-2xl rounded-3xl p-5 ${
          user
            ? "bg-[#7C4DFF] text-white"
            : "bg-[#FAF7F2] text-[#17122B]"
        }`}
      >
        <p className={`text-sm font-semibold ${user ? "text-white/70" : "text-[#7A6F8F]"}`}>
          {title}
        </p>
        <p className="mt-2 leading-7">{text}</p>
      </div>
    </div>
  );
}

function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#E8DFD6] py-4 last:border-b-0">
      <p className="text-sm text-[#7A6F8F]">{label}</p>
      <h4 className="mt-1 font-semibold">{value}</h4>
    </div>
  );
}
