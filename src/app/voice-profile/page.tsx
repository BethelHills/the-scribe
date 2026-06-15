import Link from "next/link";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  Feather,
  FileText,
  Home,
  MessageSquareText,
  PenLine,
  Plus,
  Settings,
  Sparkles,
  TrendingUp,
  UserRound,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Interview", icon: MessageSquareText, href: "/interview" },
  { name: "Manuscripts", icon: FileText, href: "/manuscript" },
  { name: "AI Assistant", icon: Sparkles, href: "/assistant" },
  { name: "Voice Profile", icon: UserRound, href: "/voice-profile", active: true },
  { name: "Scripture Library", icon: BookOpen, href: "/scripture-library" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const traits = [
  "Warm",
  "Prophetic",
  "Pastoral",
  "Scripture-rich",
  "Encouraging",
  "Direct",
];

export default function VoiceProfilePage() {
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
              Voice Completion
            </p>

            <h3 className="mt-3 text-3xl font-bold">92%</h3>

            <div className="mt-4 h-2 rounded-full bg-white/15">
              <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF7A59]" />
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">
              The Scribe has enough voice data to generate authentic manuscript
              drafts.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-6 lg:p-10">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-sm text-[#7A6F8F]">Author Intelligence</p>
              <h2 className="mt-2 text-4xl font-bold">Voice Profile</h2>
              <p className="mt-3 max-w-2xl text-[#6B617C]">
                This is the author's writing DNA. The Scribe uses it to match
                tone, structure, scriptures, phrases, and teaching style.
              </p>
            </div>

            <button className="hidden rounded-2xl bg-[#17122B] px-6 py-3 text-sm font-semibold text-white md:block">
              Update Profile
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
            <section className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#FF7A59] to-[#8B5CF6] text-3xl font-bold text-white">
                      M
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold">
                        Dr. Michael Adeyemi
                      </h3>
                      <p className="mt-2 text-[#7A6F8F]">
                        Apostolic teacher, Christian author, and pastoral voice.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#FAF7F2] p-5 text-center">
                    <p className="text-sm text-[#7A6F8F]">Voice Match</p>
                    <h4 className="mt-2 text-4xl font-bold text-[#7C4DFF]">
                      92%
                    </h4>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Metric title="Writing Samples" value="12" />
                <Metric title="Interview Answers" value="24" />
                <Metric title="Scriptures Captured" value="18" />
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-2">
                  <Brain className="text-[#FF7A59]" />
                  <h3 className="text-2xl font-bold">Voice DNA</h3>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <ProfileBlock
                    title="Primary Tone"
                    value="Warm, prophetic, and encouraging"
                  />
                  <ProfileBlock
                    title="Teaching Style"
                    value="Starts with scripture, explains with stories, ends with hope"
                  />
                  <ProfileBlock
                    title="Sentence Rhythm"
                    value="Short strong lines mixed with devotional paragraphs"
                  />
                  <ProfileBlock
                    title="Audience"
                    value="Believers seeking faith, clarity, and spiritual strength"
                  />
                </div>
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-2">
                  <PenLine className="text-[#FF7A59]" />
                  <h3 className="text-2xl font-bold">Writing Traits</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full border border-[#E8DFD6] bg-[#FAF7F2] px-5 py-3 text-sm font-semibold"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2">
                  <BookOpen className="text-[#FF7A59]" />
                  <h3 className="text-xl font-bold">Favorite Scriptures</h3>
                </div>

                <Scripture text="2 Corinthians 5:7" note="Faith over sight" />
                <Scripture text="Romans 8:28" note="God works all things" />
                <Scripture text="Isaiah 41:10" note="Fear not" />
                <Scripture text="John 14:27" note="Peace in Christ" />
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2">
                  <Sparkles className="text-[#FF7A59]" />
                  <h3 className="text-xl font-bold">Common Phrases</h3>
                </div>

                {[
                  "Beloved, hear this clearly...",
                  "Let me show you from scripture...",
                  "God is still working...",
                  "Faith is not denial...",
                ].map((phrase) => (
                  <div
                    key={phrase}
                    className="mb-3 rounded-2xl bg-[#FAF7F2] p-4 text-sm"
                  >
                    {phrase}
                  </div>
                ))}
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-gradient-to-br from-[#17122B] to-[#3A2A7A] p-6 text-white shadow-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-[#FFB199]" />
                  <h3 className="text-xl font-bold">AI Readiness</h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  This profile is ready for manuscript generation, chapter
                  rewriting, sermon outlines, and tone matching.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Voice profile complete",
                    "Scripture pattern detected",
                    "Writing rhythm captured",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={17} className="text-[#FFB199]" />
                      {item}
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

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[28px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-3 text-4xl font-bold">{value}</h4>
    </div>
  );
}

function ProfileBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-[#E8DFD6] bg-[#FAF7F2] p-5">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-2 font-semibold leading-7">{value}</h4>
    </div>
  );
}

function Scripture({ text, note }: { text: string; note: string }) {
  return (
    <div className="border-b border-[#E8DFD6] py-4 last:border-b-0">
      <h4 className="font-semibold">{text}</h4>
      <p className="mt-1 text-sm text-[#7A6F8F]">{note}</p>
    </div>
  );
}
