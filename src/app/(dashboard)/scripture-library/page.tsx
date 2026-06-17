import {
  BookMarked,
  Filter,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { AssistantPromptLink } from "@/components/AIAssistantContent";
import { ActionButton } from "@/components/ui/ActionButton";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

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
    <PageContainer>
      <PageHeader
        subtitle="Author Knowledge Base"
        title="Scripture Library"
        description="Save the scriptures this author uses often, group them by theme, and let The Scribe suggest them naturally while writing."
        action={
          <ActionButton className="w-full sm:w-auto">Add Scripture</ActionButton>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        <section className="space-y-6">
          <Card>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3">
                <Search size={18} className="shrink-0 text-[#7A6F8F]" />
                <input
                  className="min-w-0 w-full bg-transparent text-sm outline-none"
                  placeholder="Search scripture, theme, or note..."
                />
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#E8DFD6] px-5 py-3 text-sm font-semibold"
              >
                <Filter size={17} />
                Filter
              </button>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {scriptures.map((item) => (
              <ScriptureCard key={item.verse} {...item} />
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <Card>
            <div className="mb-5 flex items-center gap-2">
              <BookMarked className="text-[#FF7A59]" />
              <h3 className="text-lg font-bold sm:text-xl">Theme Groups</h3>
            </div>

            <Theme name="Faith" count="7" active />
            <Theme name="Hope" count="4" />
            <Theme name="Peace" count="3" />
            <Theme name="Courage" count="2" />
            <Theme name="Purpose" count="2" />
          </Card>

          <div className="rounded-[28px] border border-[#E8DFD6] bg-gradient-to-br from-[#17122B] to-[#3A2A7A] p-5 text-white shadow-sm sm:rounded-[32px] sm:p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#FFB199]" />
              <h3 className="text-lg font-bold sm:text-xl">AI Suggestion</h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">
              For the current chapter, The Scribe recommends using 2 Corinthians
              5:7 and John 14:27 because the topic is faith and peace during
              uncertainty.
            </p>

            <AssistantPromptLink
              prompt="Insert 2 Corinthians 5:7 and John 14:27 into the current chapter about faith and peace during uncertainty."
              className="mt-5 block w-full rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-[#17122B] sm:w-auto"
            >
              Insert Suggested Verses
            </AssistantPromptLink>
          </div>
        </aside>
      </div>
    </PageContainer>
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
    <Card className="rounded-[28px]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-[#7A6F8F]">{theme}</p>
          <h3 className="mt-2 text-xl font-bold sm:text-2xl">{verse}</h3>
        </div>

        <Star size={20} className="shrink-0 text-[#FF7A59]" />
      </div>

      <p className="mt-5 text-base italic leading-7 text-[#7C4DFF] sm:text-lg sm:leading-8">
        &ldquo;{text}&rdquo;
      </p>

      <div className="mt-5 rounded-2xl bg-[#FAF7F2] p-4">
        <p className="text-sm leading-6 text-[#5F5571]">{usage}</p>
      </div>
    </Card>
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
    <button
      type="button"
      className={`mb-3 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm ${
        active ? "bg-[#7C4DFF] text-white" : "bg-[#FAF7F2]"
      }`}
    >
      <span>{name}</span>
      <span>{count}</span>
    </button>
  );
}
