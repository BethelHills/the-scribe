"use client";

import Link from "next/link";
import { AssistantPromptLink } from "@/components/AIAssistantContent";
import { Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";
import { buttonInteractions, suggestionButtonClass } from "@/components/ui/buttonStyles";

const quickActions = [
  "Add supporting scripture",
  "Expand this section",
  "Create sermon outline",
  "Rewrite in author's tone",
];

export default function DashboardAIPanel() {
  return (
    <Card>
      <div className="mb-6 flex items-center gap-2">
        <Sparkles className="text-[#FF7A59]" />
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
        className={`mt-6 block w-full rounded-2xl bg-[#7C4DFF] px-4 py-3 text-center text-sm font-semibold text-white ${buttonInteractions} hover:bg-[#6B3FE8] active:bg-[#5A32CC]`}
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
          ? "ml-4 bg-[#7C4DFF] text-white sm:ml-8"
          : "mr-4 bg-[#FAF7F2] text-[#17122B] sm:mr-8"
      }`}
    >
      {text}
    </div>
  );
}
