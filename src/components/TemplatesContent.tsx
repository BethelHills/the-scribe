"use client";

import { useState } from "react";
import {
  BookOpen,
  Check,
  FileText,
  MessageSquareText,
  PenLine,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { ActionButton } from "@/components/ui/ActionButton";
import { badgeClass, inputClass, textareaClass } from "@/lib/ui-classes";
import { buttonInteractions, ghostButtonClass } from "@/components/ui/buttonStyles";

type Template = {
  title: string;
  description: string;
  icon: typeof BookOpen;
  tag: string;
  preview: string[];
};

const templates: Template[] = [
  {
    title: "Book Chapter",
    description:
      "Structure a full manuscript chapter with title, scripture, story, teaching, and reflection.",
    icon: BookOpen,
    tag: "Manuscript",
    preview: [
      "Chapter Title",
      "Opening Scripture",
      "Personal Story",
      "Teaching Section",
      "Reflection & Application",
    ],
  },
  {
    title: "Sermon Outline",
    description:
      "Create sermon points with scripture references, application, and closing prayer.",
    icon: MessageSquareText,
    tag: "Sermon",
    preview: [
      "Sermon Title & Text",
      "Introduction",
      "3 Main Points with Scripture",
      "Application",
      "Closing Prayer",
    ],
  },
  {
    title: "Devotional",
    description:
      "Write short daily devotionals with scripture, reflection, and prayer.",
    icon: Sparkles,
    tag: "Devotional",
    preview: [
      "Daily Title",
      "Scripture Reading",
      "Short Reflection",
      "Prayer Prompt",
    ],
  },
  {
    title: "Testimony Story",
    description:
      "Turn life experiences into clear, faith-filled testimony stories.",
    icon: PenLine,
    tag: "Story",
    preview: [
      "Before the Breakthrough",
      "Turning Point",
      "Faith in Action",
      "Encouragement for the Reader",
    ],
  },
  {
    title: "Bible Study Lesson",
    description:
      "Create teaching lessons with context, key points, and discussion questions.",
    icon: FileText,
    tag: "Teaching",
    preview: [
      "Passage Context",
      "Key Teaching Points",
      "Discussion Questions",
      "Group Application",
    ],
  },
  {
    title: "Prayer Guide",
    description:
      "Build prayer-focused content for chapters, sermons, or devotionals.",
    icon: Sparkles,
    tag: "Prayer",
    preview: [
      "Opening Praise",
      "Confession & Surrender",
      "Intercession",
      "Closing Blessing",
    ],
  },
];

export default function TemplatesContent() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [newTemplateDescription, setNewTemplateDescription] = useState("");

  function handleCreateTemplate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newTemplateName.trim()) return;

    setCreateSuccess(true);
    setShowCreateForm(false);
    setNewTemplateName("");
    setNewTemplateDescription("");
  }

  return (
    <PageContainer>
      <PageHeader
        subtitle="Writing Starter Library"
        title="Templates"
        action={
          <ActionButton
            className="w-full gap-2 sm:w-auto"
            onClick={() => {
              setShowCreateForm((open) => !open);
              setCreateSuccess(false);
            }}
          >
            <Plus size={17} />
            Create Template
          </ActionButton>
        }
      />

      {selectedTemplate ? (
        <Card className="mb-6 border-accent/40 bg-accent-soft/40">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                <Check size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-accent">Active Template</p>
                <p className="truncate text-base font-bold sm:text-lg">
                  {selectedTemplate}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedTemplate(null)}
              className={`w-full shrink-0 rounded-2xl border border-card-border bg-card px-4 py-2.5 text-sm font-semibold sm:w-auto ${buttonInteractions} hover:bg-surface-muted`}
            >
              Clear Selection
            </button>
          </div>
        </Card>
      ) : null}

      {createSuccess ? (
        <Card className="mb-6 border-accent/30 bg-accent-soft/30">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
              <Check size={18} />
            </div>
            <div className="min-w-0">
              <p className="font-semibold">Template created successfully</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your custom template is ready to use in your next writing session.
              </p>
            </div>
          </div>
        </Card>
      ) : null}

      {showCreateForm ? (
        <Card className="mb-8">
          <h2 className="text-xl font-bold sm:text-2xl">Create a Custom Template</h2>
          <p className="mt-2 text-sm text-muted">
            Add a reusable structure for your most common writing formats.
          </p>

          <form
            onSubmit={handleCreateTemplate}
            className="mt-6 flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="template-name"
                className="mb-2 block text-sm font-semibold"
              >
                Template Name
              </label>
              <input
                id="template-name"
                type="text"
                value={newTemplateName}
                onChange={(event) => setNewTemplateName(event.target.value)}
                placeholder="e.g. Weekly Newsletter"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="template-description"
                className="mb-2 block text-sm font-semibold"
              >
                Description
              </label>
              <textarea
                id="template-description"
                value={newTemplateDescription}
                onChange={(event) =>
                  setNewTemplateDescription(event.target.value)
                }
                placeholder="What sections should this template include?"
                rows={3}
                className={textareaClass}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton type="submit" variant="accent" className="w-full sm:w-auto">
                Save Template
              </ActionButton>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className={`w-full sm:w-auto ${ghostButtonClass}`}
              >
                Cancel
              </button>
            </div>
          </form>
        </Card>
      ) : (
        <Card className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
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
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => {
          const Icon = template.icon;
          const isSelected = selectedTemplate === template.title;

          return (
            <Card
              key={template.title}
              className={`min-w-0 transition hover:-translate-y-1 hover:shadow-md ${
                isSelected ? "ring-2 ring-accent" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-muted text-accent">
                  <Icon size={22} />
                </div>

                <span className={`${badgeClass} shrink-0 px-3 py-1 text-xs`}>
                  {template.tag}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold sm:text-xl">{template.title}</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {template.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setSelectedTemplate(template.title)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold text-white ${buttonInteractions} ${
                    isSelected
                      ? "bg-accent-coral hover:opacity-90 active:opacity-80"
                      : "bg-accent hover:opacity-90 active:opacity-80"
                  }`}
                >
                  {isSelected ? "Selected" : "Use Template"}
                </button>

                <button
                  type="button"
                  onClick={() => setPreviewTemplate(template)}
                  className={ghostButtonClass}
                >
                  Preview
                </button>
              </div>
            </Card>
          );
        })}
      </div>

      {previewTemplate ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
          onClick={() => setPreviewTemplate(null)}
          role="presentation"
        >
          <div
            className="w-full max-w-lg"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="template-preview-title"
          >
            <Card className="max-h-[85vh] overflow-y-auto sm:rounded-[32px]">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm text-muted">Template Preview</p>
                  <h2
                    id="template-preview-title"
                    className="mt-1 text-xl font-bold sm:text-2xl"
                  >
                    {previewTemplate.title}
                  </h2>
                </div>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-card-border ${buttonInteractions} hover:bg-surface-muted`}
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {previewTemplate.description}
            </p>

            <div className="mt-6 rounded-2xl border border-card-border bg-surface-muted p-4 sm:p-5">
              <p className="text-sm font-semibold">Included Sections</p>
              <ul className="mt-4 space-y-3">
                {previewTemplate.preview.map((section, index) => (
                  <li
                    key={section}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-card text-xs font-bold text-accent">
                      {index + 1}
                    </span>
                    <span className="min-w-0 break-words">{section}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ActionButton
                variant="accent"
                className="w-full sm:w-auto"
                onClick={() => {
                  setSelectedTemplate(previewTemplate.title);
                  setPreviewTemplate(null);
                }}
              >
                Use This Template
              </ActionButton>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                className={`w-full sm:w-auto ${ghostButtonClass}`}
              >
                Close
              </button>
            </div>
          </Card>
          </div>
        </div>
      ) : null}
    </PageContainer>
  );
}
