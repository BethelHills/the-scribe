"use client";

import { useState } from "react";
import { Loader2, Send, Sparkles } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to The Scribe. I can help write chapters, sermons, devotionals, outlines, and rewrite content in the author's voice.",
    },
  ]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "I couldn't generate a response right now.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong while contacting the AI assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div className="flex h-full flex-col rounded-[32px] border border-[#E8DFD6] bg-white shadow-sm">
      <div className="border-b border-[#E8DFD6] p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-[#FF7A59]" size={20} />
          <h2 className="font-bold text-lg">AI Assistant</h2>
        </div>

        <p className="mt-2 text-sm text-[#7A6F8F]">
          Ask The Scribe anything about your manuscript.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-3xl px-5 py-4 text-sm leading-7 ${
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
              <Loader2
                className="animate-spin text-[#7C4DFF]"
                size={18}
              />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-[#E8DFD6] p-5">
        <div className="flex items-center gap-3">
          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask The Scribe..."
            className="flex-1 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3 outline-none focus:border-[#7C4DFF]"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C4DFF] text-white transition hover:opacity-90 disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
