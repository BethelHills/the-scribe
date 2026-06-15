import {
  ArrowUp,
  BookOpen,
  Expand,
  ListTree,
  Sparkles,
} from "lucide-react";

const suggestions = [
  { label: "Add supporting scripture", icon: BookOpen },
  { label: "Expand this section", icon: Expand },
  { label: "Create sermon outline", icon: ListTree },
];

export function AiPanel() {
  return (
    <aside className="flex h-full w-[360px] shrink-0 flex-col border-l border-[#E8E2D9] bg-white/60 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-[#E8E2D9]/80 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF7A59]/15 to-[#E83E8C]/15">
          <Sparkles className="h-[18px] w-[18px] text-[#E83E8C]" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[#17122B]">AI Assistant</h2>
          <p className="text-xs text-[#6B617C]">Powered by your voice profile</p>
        </div>
      </div>

      {/* Conversation */}
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-5">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#17122B] px-4 py-3 text-sm leading-relaxed text-white shadow-sm">
            Can you help me strengthen the opening paragraph with a scripture reference?
          </div>
        </div>

        {/* AI response */}
        <div className="rounded-2xl rounded-bl-md border border-[#E8E2D9] bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#E83E8C]" />
            <span className="text-xs font-semibold text-[#E83E8C]">The Scribe</span>
          </div>
          <p className="text-sm leading-relaxed text-[#3D3550]">
            Consider weaving in{" "}
            <span className="font-medium text-[#6B4EE6]">Hebrews 11:1</span> — &ldquo;Now faith is
            confidence in what we hope for and assurance about what we do not see.&rdquo; It pairs
            beautifully with your theme of walking by faith when the path ahead is unclear.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#3D3550]">
            I can insert it as an opening epigraph or weave it into the first paragraph naturally.
            Which would you prefer?
          </p>
        </div>

        {/* Suggestions */}
        <div className="mt-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#9B93A8]">
            Suggestions
          </p>
          <div className="space-y-2">
            {suggestions.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center gap-3 rounded-xl border border-[#E8E2D9] bg-white px-4 py-3 text-left text-sm font-medium text-[#3D3550] shadow-sm transition-all hover:border-[#E83E8C]/30 hover:shadow-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF7F2]">
                  <Icon className="h-4 w-4 text-[#6B4EE6]" />
                </div>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[#E8E2D9]/80 p-4">
        <div className="flex items-end gap-2 rounded-2xl border border-[#E8E2D9] bg-white p-2 shadow-sm focus-within:border-[#E83E8C]/40 focus-within:ring-2 focus-within:ring-[#E83E8C]/10">
          <textarea
            rows={2}
            placeholder="Ask The Scribe anything..."
            className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-[#17122B] placeholder:text-[#9B93A8] focus:outline-none"
          />
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF7A59] to-[#E83E8C] text-white shadow-md transition-all hover:brightness-105"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </aside>
  );
}
