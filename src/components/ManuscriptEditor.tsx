"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  Bold,
  ChevronDown,
  Italic,
  Link as LinkIcon,
  List,
  Loader2,
  Redo2,
  Search,
  Send,
  Sparkles,
  Underline,
  Undo2,
} from "lucide-react";
import { AIChatProvider, useAIChat } from "@/components/AIChatProvider";
import {
  STORY_SUGGESTION,
  useManuscript,
} from "@/components/providers/ManuscriptProvider";
import { useToast } from "@/components/providers/ToastProvider";
import PageContainer from "@/components/layout/PageContainer";
import Card from "@/components/ui/Card";
import {
  buttonInteractions,
  ghostButtonClass,
  iconButtonClass,
  suggestionButtonClass,
} from "@/components/ui/buttonStyles";

export default function ManuscriptEditor() {
  return (
    <PageContainer>
      <TopBar />

      <div className="mt-6 grid grid-cols-1 gap-6 xl:mt-8 xl:grid-cols-[1fr_360px]">
        <EditorCard />
        <AIChatProvider>
          <AssistantPanel />
        </AIChatProvider>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <BottomCard
          title="Style Match"
          value="96%"
          text="Your writing style matches the author voice profile."
        />
        <BottomCard
          title="Favorite Scriptures"
          value="12"
          text="Philippians 4:13, John 14:27, Romans 8:28."
        />
        <BottomCard
          title="Common Phrases"
          value="8"
          text="Beloved, Indeed, Let me share this, Glory to God."
        />
        <BottomCard
          title="Writing Tone"
          value="Warm"
          text="Prophetic, encouraging, clear, and pastoral."
        />
      </div>
    </PageContainer>
  );
}

function TopBar() {
  const { isDirty, markSaved, exportManuscript } = useManuscript();
  const { showToast } = useToast();

  return (
    <header className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm text-[#7A6F8F]">My Manuscripts ›</p>

          <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
            <h2 className="text-xl font-bold sm:text-2xl">
              Faith Beyond the Storm
            </h2>
            <span className="text-sm text-[#7A6F8F]">
              {isDirty ? "Unsaved changes" : "✓ Saved"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => showToast("Search opened")}
            className={`hidden md:flex ${iconButtonClass}`}
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            onClick={() => showToast("No new notifications")}
            className={`hidden md:flex ${iconButtonClass}`}
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>

          <button
            type="button"
            onClick={() => {
              exportManuscript();
              markSaved();
              showToast("Manuscript downloaded");
            }}
            className={`w-full rounded-2xl bg-[#17122B] px-5 py-3 text-sm font-semibold text-white sm:w-auto ${buttonInteractions} hover:bg-[#2A2340] active:bg-[#0F0B1A]`}
          >
            Export
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm sm:gap-5">
        <Step done label="Interview" href="/interview" />
        <Line />
        <Step done label="Voice Profile" href="/voice-profile" />
        <Line />
        <Step active label="Manuscript" number="3" href="/manuscript" />
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
  href,
}: {
  label: string;
  done?: boolean;
  active?: boolean;
  number?: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-2 sm:gap-3">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
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

  if (href) {
    return (
      <Link href={href} className={`${buttonInteractions} rounded-lg`}>
        {content}
      </Link>
    );
  }

  return content;
}

function Line() {
  return <div className="hidden h-px w-12 bg-[#D8CEDF] sm:block lg:w-20" />;
}

function EditorCard() {
  const {
    chapterTitle,
    scripture,
    callout,
    body,
    setBody,
    wordCount,
    markSaved,
  } = useManuscript();
  const { showToast } = useToast();
  const router = useRouter();

  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E8DFD6] px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <button
          type="button"
          onClick={() => showToast("Chapter selector opened")}
          className={`flex items-center gap-4 rounded-xl border border-[#E8DFD6] px-3 py-2 text-sm sm:gap-8 sm:px-4 ${buttonInteractions} hover:bg-[#FAF7F2]`}
        >
          Chapter 3
          <ChevronDown size={16} />
        </button>

        <Tool text="H1" onClick={() => showToast("Applied H1 style")} />
        <Tool text="H2" onClick={() => showToast("Applied H2 style")} />
        <Tool text="H3" onClick={() => showToast("Applied H3 style")} />
        <Tool
          icon={<List size={18} />}
          onClick={() => showToast("List formatting applied")}
        />
        <Tool
          icon={<Bold size={18} />}
          onClick={() => showToast("Bold formatting applied")}
        />
        <Tool
          icon={<Italic size={18} />}
          onClick={() => showToast("Italic formatting applied")}
        />
        <Tool
          icon={<Underline size={18} />}
          onClick={() => showToast("Underline formatting applied")}
        />
        <Tool
          icon={<LinkIcon size={18} />}
          onClick={() => showToast("Link tool activated")}
        />

        <div className="ml-auto flex gap-3">
          <button
            type="button"
            onClick={() => showToast("Undo")}
            className={buttonInteractions}
            aria-label="Undo"
          >
            <Undo2 size={18} />
          </button>
          <button
            type="button"
            onClick={() => showToast("Redo")}
            className={buttonInteractions}
            aria-label="Redo"
          >
            <Redo2 size={18} />
          </button>
        </div>
      </div>

      <article className="p-4 sm:p-8 lg:p-10">
        <h1 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          {chapterTitle}
        </h1>

        <p className="mt-4 text-base italic text-[#7C4DFF] sm:text-xl">
          {scripture}
        </p>

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onBlur={markSaved}
          className="mt-6 min-h-[280px] w-full max-w-3xl resize-y rounded-2xl border border-transparent bg-transparent p-0 text-sm leading-7 text-[#3F3654] outline-none focus:border-[#E8DFD6] focus:bg-[#FFFCF8] focus:p-4 sm:mt-7 sm:text-base sm:leading-8"
        />

        <div className="mt-6 max-w-3xl rounded-2xl border border-[#F0CFAE] bg-gradient-to-r from-[#F6EAFE] to-[#FFF0DE] p-4 sm:mt-7 sm:p-5">
          <p className="text-base font-semibold text-[#8B5CF6] sm:text-xl">
            {callout}
          </p>
        </div>

        <div className="mt-6 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-[#E8DFD6] sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <MiniStat title="Words" value={wordCount.toLocaleString()} />
          <MiniStat title="Last edited" value="Just now" />
          <MiniStat title="Tone Match" value="96%" />
          <div className="flex items-center justify-center p-4">
            <button
              type="button"
              onClick={() =>
                router.push(
                  `/assistant?prompt=${encodeURIComponent(
                    "Enhance this chapter with stronger devotional language and scripture support."
                  )}`
                )
              }
              className={`w-full rounded-2xl bg-[#17122B] px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto ${buttonInteractions} hover:bg-[#2A2340] active:bg-[#0F0B1A]`}
            >
              Enhance with AI
            </button>
          </div>
        </div>
      </article>
    </Card>
  );
}

function AssistantPanel() {
  const suggestions = [
    "Add supporting scripture",
    "Expand this section",
    "Create sermon outline",
  ];
  const { sendMessage, loading, message, setMessage } = useAIChat();
  const { insertIntoManuscript } = useManuscript();
  const { showToast } = useToast();

  function handleInsertStory() {
    insertIntoManuscript(STORY_SUGGESTION);
    showToast("Story inserted into manuscript");
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-[#E8DFD6] p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-[#FF7A59]" size={20} />
          <h3 className="font-bold">AI Assistant</h3>
        </div>

        <ChevronDown size={18} />
      </div>

      <div className="p-4 sm:p-6">
        <div className="space-y-4">
          <Chat text="How can I help you today?" />
          <Chat
            user
            text="Add a personal story about a time you had to trust God in uncertainty."
          />

          <div className="rounded-3xl bg-[#FAF7F2] p-4">
            <p className="text-sm leading-6">
              Here&apos;s a personal story you can include in this section:
            </p>

            <div className="mt-4 rounded-2xl border border-[#E8DFD6] bg-white p-4">
              <h4 className="font-semibold">A Story of Trust</h4>
              <p className="mt-3 text-sm leading-6 text-[#5F5571]">
                {STORY_SUGGESTION}
              </p>

              <button
                type="button"
                onClick={handleInsertStory}
                className={`mt-4 w-full rounded-xl bg-[#7C4DFF] px-4 py-2 text-sm font-semibold text-white sm:w-auto ${buttonInteractions} hover:bg-[#6B3FE8] active:bg-[#5A32CC]`}
              >
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
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                disabled={loading}
                onClick={() => void sendMessage(item)}
                className={suggestionButtonClass}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void sendMessage();
            }}
            placeholder="Ask anything..."
            disabled={loading}
            className="min-w-0 flex-1 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#7C4DFF] disabled:opacity-50"
          />
          <button
            type="button"
            onClick={() => void sendMessage()}
            disabled={loading || !message.trim()}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7C4DFF] text-white ${buttonInteractions} hover:bg-[#6B3FE8] active:bg-[#5A32CC]`}
            aria-label="Send message"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
      </div>
    </Card>
  );
}

function Tool({
  text,
  icon,
  onClick,
}: {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-sm font-medium text-[#3F3654] ${buttonInteractions} rounded-lg px-2 py-1 hover:bg-[#FAF7F2]`}
    >
      {icon || text}
    </button>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-b border-[#E8DFD6] p-4 last:border-b-0 sm:border-b-0 sm:border-r">
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
          ? "ml-4 bg-[#7C4DFF] text-white sm:ml-8"
          : "mr-4 bg-[#FAF7F2] text-[#17122B] sm:mr-8"
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
    <Card className="rounded-[28px]">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-3 text-2xl font-bold sm:text-3xl">{value}</h4>
      <p className="mt-3 text-sm leading-6 text-[#6B617C]">{text}</p>
    </Card>
  );
}
