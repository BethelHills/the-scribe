"use client";

import Link from "next/link";
import { AssistantPromptLink } from "@/components/AIAssistantContent";
import { Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";
import { buttonInteractions, suggestionButtonClass } from "@/components/ui/buttonStyles";
import { chatAssistantClass, chatUserClass } from "@/lib/ui-classes";

const quickActions = [
  "Add supporting scripture",
  "Expand this section",
  "Create sermon outline",
  "Rewrite in author's tone",
];

export default function DashboardAIPanel({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <div className="mb-6 flex items-center gap-2">
        <Sparkles className="text-accent-coral" />
        <h3 className="text-lg font-bold sm:text-xl">AI Assistant</h3>
      </div>

      <div className="space-y-4">
        <Message text="How can I help with this chapter?" />
        <Message
          text="Add a personal story about trusting God in uncertainty."
          user
        />
        <Message text="I found a strong story idea and scripture support for this section." />
      </div>

      <div className="mt-8 space-y-3">
        {quickActions.map((item) => (
          <AssistantPromptLink
            key={item}
            prompt={item}
            className={suggestionButtonClass}
          >
            {item}
          </AssistantPromptLink>
        ))}
      </div>

      <Link
        href="/assistant"
        className={`mt-6 block w-full rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white ${buttonInteractions} hover:opacity-90 active:opacity-80`}
      >
        Open AI Assistant
      </Link>
    </Card>
  );
}

function Message({ text, user = false }: { text: string; user?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-4 text-sm leading-6 ${
        user
          ? `ml-4 sm:ml-8 ${chatUserClass}`
          : `mr-4 sm:mr-8 ${chatAssistantClass}`
      }`}
    >
      {text}
    </div>
  );
}
