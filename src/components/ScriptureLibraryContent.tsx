"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookMarked,
  Filter,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import SaveButton from "@/components/ui/SaveButton";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { useToast } from "@/components/providers/ToastProvider";
import { buttonInteractions, ghostButtonClass } from "@/components/ui/buttonStyles";

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

const themes = ["All", "Faith", "Hope", "Peace", "Courage", "Purpose"];

export default function ScriptureLibraryContent() {
  const [query, setQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("Faith");
  const { showToast } = useToast();
  const router = useRouter();

  const filtered = useMemo(() => {
    return scriptures.filter((item) => {
      const matchesTheme =
        activeTheme === "All" || item.theme === activeTheme;
      const search = query.toLowerCase();
      const matchesQuery =
        !search ||
        item.verse.toLowerCase().includes(search) ||
        item.text.toLowerCase().includes(search) ||
        item.theme.toLowerCase().includes(search) ||
        item.usage.toLowerCase().includes(search);

      return matchesTheme && matchesQuery;
    });
  }, [query, activeTheme]);

  return (
    <PageContainer>
      <PageHeader
        subtitle="Author Knowledge Base"
        title="Scripture Library"
        description="Save the scriptures this author uses often, group them by theme, and let The Scribe suggest them naturally while writing."
        action={
          <SaveButton
            className="w-full sm:w-auto"
            successMessage="Scripture added to library"
          >
            Add Scripture
          </SaveButton>
        }
      />

      <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <section className="min-w-0 space-y-6">
          <Card>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-card-border bg-surface-muted px-4 py-3">
                <Search size={18} className="shrink-0 text-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-w-0 w-full bg-transparent text-sm outline-none"
                  placeholder="Search scripture, theme, or note..."
                />
              </div>

              <button
                type="button"
                onClick={() => showToast("Filters applied")}
                className={`flex w-full items-center justify-center gap-2 sm:w-auto ${ghostButtonClass}`}
              >
                <Filter size={17} />
                Filter
              </button>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <ScriptureCard key={item.verse} {...item} />
              ))
            ) : (
              <Card className="md:col-span-2">
                <p className="text-sm text-muted">
                  No scriptures match your search.
                </p>
              </Card>
            )}
          </div>
        </section>

        <aside className="min-w-0 space-y-6">
          <Card>
            <div className="mb-5 flex items-center gap-2">
              <BookMarked className="text-accent-coral" />
              <h3 className="text-lg font-bold sm:text-xl">Theme Groups</h3>
            </div>

            {themes.filter((t) => t !== "All").map((theme) => (
              <Theme
                key={theme}
                name={theme}
                count={String(
                  scriptures.filter((item) => item.theme === theme).length
                )}
                active={activeTheme === theme}
                onClick={() => setActiveTheme(theme)}
              />
            ))}
          </Card>

          <div className="theme-promo-panel rounded-[28px] p-5 shadow-sm sm:rounded-[32px] sm:p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="text-accent-coral" />
              <h3 className="text-lg font-bold sm:text-xl">AI Suggestion</h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/80">
              For the current chapter, The Scribe recommends using 2 Corinthians
              5:7 and John 14:27 because the topic is faith and peace during
              uncertainty.
            </p>

            <button
              type="button"
              onClick={() =>
                router.push(
                  `/assistant?prompt=${encodeURIComponent(
                    "Insert 2 Corinthians 5:7 and John 14:27 into the current chapter about faith and peace during uncertainty."
                  )}`
                )
              }
              className={`mt-5 w-full text-center sm:w-auto ${ghostButtonClass}`}
            >
              Insert Suggested Verses
            </button>
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
          <p className="text-sm text-muted">{theme}</p>
          <h3 className="mt-2 text-xl font-bold sm:text-2xl">{verse}</h3>
        </div>

        <Star size={20} className="shrink-0 text-accent-coral" />
      </div>

      <p className="mt-5 text-base italic leading-7 text-accent sm:text-lg sm:leading-8">
        &ldquo;{text}&rdquo;
      </p>

      <div className="mt-5 rounded-2xl bg-surface-muted p-4">
        <p className="text-sm leading-6 text-muted-foreground">{usage}</p>
      </div>
    </Card>
  );
}

function Theme({
  name,
  count,
  active = false,
  onClick,
}: {
  name: string;
  count: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mb-3 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm ${buttonInteractions} ${
        active
          ? "bg-accent text-white"
          : "bg-surface-muted text-foreground hover:bg-card active:bg-surface"
      }`}
    >
      <span>{name}</span>
      <span>{count}</span>
    </button>
  );
}
