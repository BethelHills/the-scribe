"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type AIChatContextValue = {
  messages: Message[];
  loading: boolean;
  message: string;
  setMessage: (value: string) => void;
  sendMessage: (text?: string) => Promise<void>;
};

const AIChatContext = createContext<AIChatContextValue | null>(null);

export function AIChatProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to The Scribe. I can help write chapters, sermons, devotionals, outlines, and rewrite content in the author's voice.",
    },
  ]);

  const sendMessage = useCallback(async (text?: string) => {
    const userMessage = (text ?? message).trim();
    if (!userMessage || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "I couldn't generate a response right now.",
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong while contacting the AI assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [loading, message]);

  const value = useMemo(
    () => ({
      messages,
      loading,
      message,
      setMessage,
      sendMessage,
    }),
    [messages, loading, message, sendMessage]
  );

  return (
    <AIChatContext.Provider value={value}>{children}</AIChatContext.Provider>
  );
}

export function useAIChat() {
  const context = useContext(AIChatContext);
  if (!context) {
    throw new Error("useAIChat must be used within AIChatProvider");
  }
  return context;
}
