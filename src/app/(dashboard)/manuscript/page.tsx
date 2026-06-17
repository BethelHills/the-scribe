import Link from "next/link";
import {
  Bell,
  Bold,
  ChevronDown,
  Italic,
  Link as LinkIcon,
  List,
  Redo2,
  Search,
  Sparkles,
  Underline,
  Undo2,
} from "lucide-react";
import { AssistantPromptLink } from "@/components/AIAssistantContent";
import PageContainer from "@/components/layout/PageContainer";
import Card from "@/components/ui/Card";

export default function ManuscriptEditor() {
  return (
    <PageContainer>
      <TopBar />

      <div className="mt-6 grid grid-cols-1 gap-6 xl:mt-8 xl:grid-cols-[1fr_360px]">
        <EditorCard />
        <AssistantPanel />
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
  return (
    <header className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm text-[#7A6F8F]">My Manuscripts ›</p>

          <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
            <h2 className="text-xl font-bold sm:text-2xl">
              Faith Beyond the Storm
            </h2>
            <span className="text-sm text-[#7A6F8F]">✓ Saved</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white md:flex"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white md:flex"
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>

          <button
            type="button"
            className="w-full rounded-2xl bg-[#17122B] px-5 py-3 text-sm font-semibold text-white sm:w-auto"
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
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

function Line() {
  return <div className="hidden h-px w-12 bg-[#D8CEDF] sm:block lg:w-20" />;
}

function EditorCard() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E8DFD6] px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <button
          type="button"
          className="flex items-center gap-4 rounded-xl border border-[#E8DFD6] px-3 py-2 text-sm sm:gap-8 sm:px-4"
        >
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

      <article className="p-4 sm:p-8 lg:p-10">
        <h1 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          Walking in Faith When You Can&apos;t See
        </h1>

        <p className="mt-4 text-base italic text-[#7C4DFF] sm:text-xl">
          &ldquo;For we walk by faith, not by sight.&rdquo; — 2 Corinthians 5:7
        </p>

        <div className="mt-6 max-w-3xl space-y-5 text-sm leading-7 text-[#3F3654] sm:mt-7 sm:text-base sm:leading-8">
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

        <div className="mt-6 max-w-3xl rounded-2xl border border-[#F0CFAE] bg-gradient-to-r from-[#F6EAFE] to-[#FFF0DE] p-4 sm:mt-7 sm:p-5">
          <p className="text-base font-semibold text-[#8B5CF6] sm:text-xl">
            &ldquo;Faith says, I don&apos;t understand, but I trust You.&rdquo;
          </p>
        </div>

        <div className="mt-6 max-w-3xl space-y-5 text-sm leading-7 text-[#3F3654] sm:mt-7 sm:text-base sm:leading-8">
          <p>
            When you choose to walk in faith, you are declaring that God&apos;s Word
            is more real than your current situation. You are saying that His
            promises outweigh your problems.
          </p>

          <h2 className="pt-3 text-xl font-bold text-[#17122B] sm:text-2xl">
            1. Faith Anchors Your Soul
          </h2>

          <p>An anchor doesn&apos;t stop the storm, it keeps you from drifting.</p>
        </div>

        <div className="mt-6 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-[#E8DFD6] sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <MiniStat title="Words" value="2,450" />
          <MiniStat title="Last edited" value="15 min ago" />
          <MiniStat title="Tone Match" value="96%" />
          <div className="flex items-center justify-center p-4">
            <AssistantPromptLink
              prompt="Enhance this chapter with stronger devotional language and scripture support."
              className="w-full rounded-2xl bg-[#17122B] px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
            >
              Enhance with AI
            </AssistantPromptLink>
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
                There was a time in my life when everything I had planned fell
                apart. Opportunities vanished, doors closed, and I felt stuck in
                a valley...
              </p>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-[#7C4DFF] px-4 py-2 text-sm font-semibold text-white sm:w-auto"
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
              <AssistantPromptLink
                key={item}
                prompt={item}
                className="block w-full rounded-2xl border border-[#E8DFD6] px-4 py-3 text-left text-sm hover:bg-[#FAF7F2]"
              >
                {item}
              </AssistantPromptLink>
            ))}
          </div>
        </div>

        <Link
          href="/assistant"
          className="mt-8 block rounded-2xl border border-[#E8DFD6] px-4 py-4 text-center text-sm text-[#7A6F8F] hover:bg-[#FAF7F2]"
        >
          Ask anything...
        </Link>
      </div>
    </Card>
  );
}

function Tool({ text, icon }: { text?: string; icon?: React.ReactNode }) {
  return (
    <button type="button" className="text-sm font-medium text-[#3F3654]">
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
