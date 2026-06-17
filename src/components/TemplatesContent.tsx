"use client";

import { useRouter } from "next/navigation";
import {
  BookOpen,
  FileText,
  MessageSquareText,
  PenLine,
  Plus,
  Sparkles,
} from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/ActionButton";
import { useToast } from "@/components/providers/ToastProvider";
import { badgeClass } from "@/lib/ui-classes";
import { buttonInteractions, ghostButtonClass } from "@/components/ui/buttonStyles";

const templates = [
  {
    title: "Book Chapter",
    description:
      "Structure a full manuscript chapter with title, scripture, story, teaching, and reflection.",
    icon: BookOpen,
    tag: "Manuscript",
    prompt:
      "Create a book chapter template with title, scripture, story, teaching, and reflection in the author's voice.",
  },
  {
    title: "Sermon Outline",
    description:
      "Create sermon points with scripture references, application, and closing prayer.",
    icon: MessageSquareText,
    tag: "Sermon",
    prompt:
      "Create a sermon outline with scripture references, application points, and a closing prayer.",
  },
  {
    title: "Devotional",
    description:
      "Write short daily devotionals with scripture, reflection, and prayer.",
    icon: Sparkles,
    tag: "Devotional",
    prompt:
      "Write a devotional template with scripture, reflection, and closing prayer.",
  },
  {
    title: "Testimony Story",
    description:
      "Turn life experiences into clear, faith-filled testimony stories.",
    icon: PenLine,
    tag: "Story",
    prompt:
      "Help me write a testimony story that is clear, faith-filled, and personal.",
  },
  {
    title: "Bible Study Lesson",
    description:
      "Create teaching lessons with context, key points, and discussion questions.",
    icon: FileText,
    tag: "Teaching",
    prompt:
      "Create a Bible study lesson with context, key teaching points, and discussion questions.",
  },
  {
    title: "Prayer Guide",
    description:
      "Build prayer-focused content for chapters, sermons, or devotionals.",
    icon: Sparkles,
    tag: "Prayer",
    prompt:
      "Create a prayer guide suitable for a chapter, sermon, or devotional.",
  },
];

export default function TemplatesContent() {
  const { showToast } = useToast();
  const router = useRouter();

  function useTemplate(prompt: string) {
    router.push(`/assistant?prompt=${encodeURIComponent(prompt)}`);
  }

  return (
    <PageContainer>
      <PageHeader
        subtitle="Writing Starter Library"
        title="Templates"
        action={
          <ActionButton
            className="w-full gap-2 sm:w-auto"
            onClick={() => showToast("Custom template builder coming soon")}
          >
            <Plus size={17} />
            Create Template
          </ActionButton>
        }
      />

      <Card className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Start faster with guided templates
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Choose a template and let The Scribe help build content in the
              author&apos;s voice.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => {
          const Icon = template.icon;

          return (
            <Card
              key={template.title}
              className="transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-muted text-accent">
                  <Icon size={22} />
                </div>

                <span className={`${badgeClass} px-3 py-1 text-xs`}>
                  {template.tag}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">{template.title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {template.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => useTemplate(template.prompt)}
                  className={`rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white ${buttonInteractions} hover:opacity-90 active:opacity-80`}
                >
                  Use Template
                </button>

                <button
                  type="button"
                  onClick={() =>
                    showToast(`Previewing "${template.title}" template`)
                  }
                  className={ghostButtonClass}
                >
                  Preview
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </PageContainer>
  );
}
