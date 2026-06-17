"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useAIChat } from "@/components/AIChatProvider";
import AIChat from "@/components/AIChat";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { ghostButtonClass, suggestionButtonClass } from "@/components/ui/buttonStyles";
import { insightRowClass } from "@/lib/ui-classes";
import { Brain, Sparkles } from "lucide-react";

const quickActions = [
  "Generate chapter outline",
  "Rewrite in author's tone",
  "Add supporting scripture",
  "Create sermon notes",
  "Expand this section",
  "Summarize the chapter",
];

export default function AIAssistantContent() {
  const { sendMessage, loading } = useAIChat();
  const searchParams = useSearchParams();
  const initialPromptSent = useRef(false);

  useEffect(() => {
    const prompt = searchParams.get("prompt");
    if (prompt && !initialPromptSent.current) {
      initialPromptSent.current = true;
      void sendMessage(prompt);
    }
  }, [searchParams, sendMessage]);

  return (
    <>
      <PageHeader
        subtitle="Creative AI Workspace"
        title="AI Assistant"
        description="Ask The Scribe to generate, rewrite, expand, structure, and improve content using the author's captured voice."
      />

      <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex min-h-0 min-w-0 flex-col md:col-span-2 xl:col-span-2">
          <AIChat />
        </div>

        <aside className="min-w-0 space-y-6 xl:col-span-1">
          <Card>
            <div className="mb-5 flex items-center gap-2">
              <Brain className="text-accent-coral" />
              <h3 className="text-lg font-bold sm:text-xl">AI Context</h3>
            </div>

            <ContextItem title="Author" value="Dr. Michael Adeyemi" />
            <ContextItem title="Tone" value="Warm, prophetic, pastoral" />
            <ContextItem title="Book" value="Faith Beyond the Storm" />
            <ContextItem title="Voice Match" value="92%" />
          </Card>

          <Card>
            <h3 className="text-lg font-bold sm:text-xl">Quick Actions</h3>

            <div className="mt-5 grid grid-cols-1 gap-3">
              {quickActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  disabled={loading}
                  onClick={() => void sendMessage(action)}
                  className={`flex items-center gap-3 ${suggestionButtonClass}`}
                >
                  <Sparkles size={16} className="shrink-0 text-accent" />
                  {action}
                </button>
              ))}
            </div>
          </Card>

          <div className="theme-promo-panel rounded-[28px] p-5 shadow-sm sm:rounded-[32px] sm:p-6">
            <h3 className="text-lg font-bold sm:text-xl">Smart Suggestions</h3>
            <p className="mt-3 text-sm leading-6 text-white/80">
              The next best move is to add one personal story and one scripture
              reference to make the chapter feel more authentic.
            </p>

            <button
              type="button"
              disabled={loading}
              onClick={() =>
                void sendMessage(
                  "Add one personal story and one scripture reference to make this chapter feel more authentic."
                )
              }
              className={`mt-5 w-full text-center sm:w-auto ${ghostButtonClass}`}
            >
              Apply Suggestion
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

function ContextItem({ title, value }: { title: string; value: string }) {
  return (
    <div className={insightRowClass}>
      <p className="text-sm text-muted">{title}</p>
      <h4 className="mt-1 font-semibold text-foreground">{value}</h4>
    </div>
  );
}

export function AssistantPromptLink({
  prompt,
  children,
  className = "",
}: {
  prompt: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={`/assistant?prompt=${encodeURIComponent(prompt)}`}
      className={`${className} transition hover:opacity-90 active:scale-[0.98]`}
    >
      {children}
    </Link>
  );
}
