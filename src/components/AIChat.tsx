"use client";

import { useAIChat } from "@/components/AIChatProvider";
import { Loader2, Send, Sparkles } from "lucide-react";
import { buttonInteractions } from "@/components/ui/buttonStyles";

export default function AIChat() {
  const { messages, loading, message, setMessage, sendMessage } = useAIChat();

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      void sendMessage();
    }
  }

  return (
    <div className="flex h-full min-h-[420px] flex-col rounded-[28px] border border-[#E8DFD6] bg-white shadow-sm sm:min-h-[520px] sm:rounded-[32px] lg:min-h-[640px]">
      <div className="border-b border-[#E8DFD6] p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-[#FF7A59]" size={20} />
          <h2 className="text-base font-bold sm:text-lg">AI Assistant</h2>
        </div>

        <p className="mt-2 text-sm text-[#7A6F8F]">
          Ask The Scribe anything about your manuscript.
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
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
                  ? "bg-[#7C4DFF] text-white"
                  : "bg-[#FAF7F2] text-[#17122B]"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-3xl bg-[#FAF7F2] px-5 py-4">
              <Loader2 className="animate-spin text-[#7C4DFF]" size={18} />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-[#E8DFD6] p-4 sm:p-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask The Scribe..."
            disabled={loading}
            className="min-w-0 flex-1 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#7C4DFF] disabled:opacity-50 sm:text-base"
          />

          <button
            type="button"
            onClick={() => void sendMessage()}
            disabled={loading || !message.trim()}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#7C4DFF] text-white sm:h-12 sm:w-12 ${buttonInteractions} hover:bg-[#6B3FE8] active:bg-[#5A32CC] disabled:opacity-50`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
