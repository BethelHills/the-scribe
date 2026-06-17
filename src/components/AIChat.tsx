"use client";

import { useAIChat } from "@/components/AIChatProvider";
import { buttonInteractions } from "@/components/ui/buttonStyles";
import { inputClass } from "@/lib/ui-classes";
import { Loader2, Send, Sparkles } from "lucide-react";

export default function AIChat() {
  const { messages, loading, message, setMessage, sendMessage } = useAIChat();

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      void sendMessage();
    }
  }

  return (
    <div className="flex h-full min-h-[min(60dvh,520px)] max-h-[calc(100dvh-12rem)] min-w-0 flex-col overflow-hidden rounded-[28px] border border-card-border bg-card text-foreground shadow-sm sm:min-h-[520px] sm:max-h-none sm:rounded-[32px] lg:min-h-[640px]">
      <div className="border-b border-card-border p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-accent-coral" size={20} />
          <h2 className="text-base font-bold sm:text-lg">AI Assistant</h2>
        </div>

        <p className="mt-2 text-sm text-muted">
          Ask The Scribe anything about your manuscript.
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[90%] rounded-3xl px-4 py-3 text-sm leading-7 sm:max-w-[80%] sm:px-5 sm:py-4 ${
                msg.role === "user"
                  ? "bg-accent text-white"
                  : "bg-chat-bubble text-chat-bubble-text"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-3xl bg-chat-bubble px-5 py-4">
              <Loader2 className="animate-spin text-accent" size={18} />
            </div>
          </div>
        )}
        </div>

        <div className="shrink-0 border-t border-card-border p-4 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask The Scribe..."
              disabled={loading}
              className={`min-w-0 flex-1 ${inputClass} sm:text-base`}
            />

            <button
              type="button"
              onClick={() => void sendMessage()}
              disabled={loading || !message.trim()}
              className={`flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 items-center justify-center rounded-2xl bg-accent text-white sm:h-12 sm:w-12 ${buttonInteractions} hover:opacity-90 active:opacity-80 disabled:opacity-50`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
