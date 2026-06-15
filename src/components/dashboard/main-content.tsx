import {
  Bold,
  ChevronDown,
  ChevronRight,
  Heading,
  Italic,
  Link2,
  List,
  ListOrdered,
  Redo2,
  Sparkles,
  Underline,
  Undo2,
} from "lucide-react";

const steps = [
  { label: "Interview", done: true },
  { label: "Voice Profile", done: true },
  { label: "Manuscript", done: false, active: true },
  { label: "Finalize", done: false },
];

const analyticsCards = [
  {
    title: "Style Match",
    value: "94%",
    detail: "Aligned with your voice profile",
    accent: "from-[#FF7A59] to-[#E83E8C]",
  },
  {
    title: "Favorite Scriptures",
    value: "12",
    detail: "Romans 8:28 · Isaiah 41:10 · Psalm 23",
    accent: "from-[#6B4EE6] to-[#9B7FE8]",
  },
  {
    title: "Common Phrases",
    value: "8",
    detail: '"By His grace" · "Walk in faith"',
    accent: "from-[#3B82F6] to-[#6B4EE6]",
  },
  {
    title: "Writing Tone",
    value: "Pastoral",
    detail: "Encouraging · Reflective · Hopeful",
    accent: "from-[#10B981] to-[#3B82F6]",
  },
];

export function MainContent() {
  return (
    <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-6 py-5 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-1.5 text-sm">
          <span className="font-medium text-[#6B617C]">My Manuscripts</span>
          <ChevronRight className="h-3.5 w-3.5 text-[#9B93A8]" />
          <span className="font-semibold text-[#17122B]">Faith Beyond the Storm</span>
        </div>

        {/* Progress steps */}
        <div className="mb-6 flex items-center gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    step.active
                      ? "bg-gradient-to-r from-[#FF7A59] to-[#E83E8C] text-white shadow-md shadow-[#E83E8C]/20"
                      : step.done
                        ? "bg-[#17122B] text-white"
                        : "bg-[#E8E2D9] text-[#9B93A8]"
                  }`}
                >
                  {step.done ? "✓" : i + 1}
                </div>
                <span
                  className={`text-sm font-medium ${
                    step.active ? "text-[#17122B]" : step.done ? "text-[#3D3550]" : "text-[#9B93A8]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-4 h-px w-12 lg:w-20 ${step.done ? "bg-[#17122B]/30" : "bg-[#E8E2D9]"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Editor card */}
        <div className="rounded-[28px] border border-[#E8E2D9]/80 bg-white shadow-[0_4px_40px_-8px_rgba(23,18,43,0.08)]">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-1 border-b border-[#F0EBE3] px-5 py-3">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-xl bg-[#FAF7F2] px-3 py-2 text-sm font-medium text-[#3D3550] transition-colors hover:bg-[#F0EBE3]"
            >
              Chapter 3
              <ChevronDown className="h-3.5 w-3.5 text-[#9B93A8]" />
            </button>

            <div className="mx-2 h-6 w-px bg-[#E8E2D9]" />

            {[
              { icon: Heading, label: "Headings" },
              { icon: List, label: "Bullet list" },
              { icon: ListOrdered, label: "Numbered list" },
              { icon: Bold, label: "Bold" },
              { icon: Italic, label: "Italic" },
              { icon: Underline, label: "Underline" },
              { icon: Link2, label: "Link" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-[#6B617C] transition-colors hover:bg-[#FAF7F2] hover:text-[#17122B]"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}

            <div className="mx-2 h-6 w-px bg-[#E8E2D9]" />

            <button
              type="button"
              aria-label="Undo"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-[#6B617C] transition-colors hover:bg-[#FAF7F2]"
            >
              <Undo2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Redo"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-[#6B617C] transition-colors hover:bg-[#FAF7F2]"
            >
              <Redo2 className="h-4 w-4" />
            </button>
          </div>

          {/* Editor body */}
          <div className="px-8 py-7 lg:px-10 lg:py-8">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-[#17122B] lg:text-4xl">
              Walking in Faith When You Can&apos;t See
            </h1>

            <blockquote className="mb-6 border-l-[3px] border-[#6B4EE6] pl-5 text-lg italic leading-relaxed text-[#6B4EE6]">
              &ldquo;For we walk by faith, not by sight.&rdquo; — 2 Corinthians 5:7
            </blockquote>

            <div className="space-y-5 text-[15px] leading-[1.8] text-[#3D3550]">
              <p>
                There are seasons in every believer&apos;s journey when the fog rolls in — when
                prayers feel unanswered, doors seem closed, and the path ahead disappears into
                uncertainty. It is in these very moments that faith reveals its truest form: not as
                a feeling of confidence, but as a deliberate choice to trust the One who sees what
                we cannot.
              </p>
              <p>
                Abraham left everything familiar without knowing his destination. Moses stood before
                the Red Sea with an army closing in behind him. Each of these giants of faith walked
                forward not because they could see the outcome, but because they knew the One who
                held it.
              </p>
              <p>
                Perhaps you find yourself in such a season now. The diagnosis came back unexpected.
                The relationship you prayed over ended anyway. The opportunity you believed was from
                God slipped through your fingers. And yet — here you are, still breathing, still
                standing, still invited to trust.
              </p>
            </div>

            {/* Highlighted quote */}
            <div className="my-8 rounded-2xl bg-gradient-to-r from-[#6B4EE6]/8 to-[#E83E8C]/8 px-6 py-5 ring-1 ring-[#6B4EE6]/10">
              <p className="text-center text-lg font-medium italic leading-relaxed text-[#17122B]">
                &ldquo;Faith says, I don&apos;t understand, but I trust You.&rdquo;
              </p>
            </div>

            <p className="text-[15px] leading-[1.8] text-[#3D3550]">
              This is the heart of walking by faith — surrendering our need for control and
              embracing the mystery of God&apos;s perfect timing. He is not asking you to understand
              everything. He is asking you to trust Him with everything.
            </p>
          </div>

          {/* Stats + AI button */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F0EBE3] px-8 py-5 lg:px-10">
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#9B93A8]">Words</p>
                <p className="mt-0.5 text-lg font-semibold text-[#17122B]">1,247</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#9B93A8]">
                  Last edited
                </p>
                <p className="mt-0.5 text-lg font-semibold text-[#17122B]">2 hours ago</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#9B93A8]">
                  Tone Match
                </p>
                <p className="mt-0.5 text-lg font-semibold text-[#10B981]">96%</p>
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF7A59] to-[#E83E8C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E83E8C]/20 transition-all hover:shadow-xl hover:brightness-105"
            >
              <Sparkles className="h-4 w-4" />
              Enhance with AI
            </button>
          </div>
        </div>

        {/* Analytics cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 xl:grid-cols-4">
          {analyticsCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[24px] border border-[#E8E2D9]/80 bg-white p-5 shadow-[0_2px_20px_-4px_rgba(23,18,43,0.06)] transition-shadow hover:shadow-[0_4px_28px_-4px_rgba(23,18,43,0.1)]"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${card.accent}`} />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9B93A8]">
                  {card.title}
                </p>
              </div>
              <p className="text-2xl font-bold tracking-tight text-[#17122B]">{card.value}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6B617C]">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
