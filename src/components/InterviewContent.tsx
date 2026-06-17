"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Mic,
  Send,
  Sparkles,
} from "lucide-react";
import SaveButton from "@/components/ui/SaveButton";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { useToast } from "@/components/providers/ToastProvider";
import { buttonInteractions, ghostButtonClass } from "@/components/ui/buttonStyles";

const questions = [
  "What message burns strongest in your heart right now?",
  "What scriptures do you quote most often?",
  "How do you usually open your sermons or books?",
  "What phrases do your audience hear from you often?",
];

type ChatMessage = {
  title: string;
  text: string;
  user?: boolean;
};

const initialMessages: ChatMessage[] = [
  {
    title: "The Scribe",
    text: "Welcome. I'll ask a few questions to understand your voice. What message burns strongest in your heart right now?",
  },
  {
    title: "Author",
    text: "My strongest message is helping believers trust God when life feels uncertain. I often teach that faith is not denial, it is confidence in God's nature.",
    user: true,
  },
  {
    title: "The Scribe",
    text: "That is strong. What scriptures do you often connect with this message?",
  },
  {
    title: "Author",
    text: "I often use 2 Corinthians 5:7, Romans 8:28, Isaiah 41:10, and John 14:27.",
    user: true,
  },
];

export default function InterviewContent() {
  const [messages, setMessages] = useState(initialMessages);
  const [answer, setAnswer] = useState("");
  const [recording, setRecording] = useState(false);
  const { showToast } = useToast();

  function handleSendAnswer() {
    const trimmed = answer.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { title: "Author", text: trimmed, user: true },
      {
        title: "The Scribe",
        text: "Thank you. That helps me understand how you open your teaching. I'll use this rhythm in future drafts.",
      },
    ]);
    setAnswer("");
    showToast("Answer sent");
  }

  function handleRecord() {
    setRecording(true);
    showToast("Voice recording started");
    window.setTimeout(() => setRecording(false), 2000);
  }

  return (
    <PageContainer>
      <PageHeader
        subtitle="Voice Training"
        title="Author Interview"
        description="The Scribe asks guided questions to capture the author's voice, theology, phrases, stories, and writing style."
        action={
          <SaveButton
            className="w-full sm:w-auto"
            successMessage="Interview saved"
          >
            Save Interview
          </SaveButton>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        <Card className="overflow-hidden p-0">
          <div className="border-b border-[#E8DFD6] p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-lg font-bold sm:text-xl">
                  Interview Session 01
                </h3>
                <p className="mt-1 text-sm text-[#7A6F8F]">
                  Learning Dr. Michael Adeyemi&apos;s writing voice
                </p>
              </div>

              <span className="w-fit rounded-full bg-[#FDEDE6] px-4 py-2 text-sm font-semibold text-[#FF7A59]">
                In Progress
              </span>
            </div>
          </div>

          <div className="space-y-6 p-4 sm:p-6">
            {messages.map((message, index) => (
              <Message
                key={`${message.title}-${index}`}
                title={message.title}
                text={message.text}
                user={message.user}
              />
            ))}

            <div className="rounded-3xl border border-[#E8DFD6] bg-[#FFF9F2] p-4 sm:p-5">
              <p className="text-sm font-semibold text-[#7A6F8F]">
                Current Question
              </p>

              <h4 className="mt-3 text-xl font-bold sm:text-2xl">
                How do you usually begin a chapter or sermon?
              </h4>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="mt-5 min-h-[120px] w-full resize-y rounded-2xl border border-[#E8DFD6] bg-white p-4 text-sm outline-none focus:border-[#8B5CF6] sm:min-h-[150px]"
                placeholder="Type the author's answer here..."
              />

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={handleRecord}
                  disabled={recording}
                  className={`flex items-center justify-center gap-2 ${ghostButtonClass}`}
                >
                  <Mic size={17} />
                  {recording ? "Recording..." : "Record Answer"}
                </button>

                <button
                  type="button"
                  onClick={handleSendAnswer}
                  disabled={!answer.trim()}
                  className={`flex items-center justify-center gap-2 rounded-2xl bg-[#7C4DFF] px-5 py-3 text-sm font-semibold text-white ${buttonInteractions} hover:bg-[#6B3FE8] active:bg-[#5A32CC] disabled:opacity-50`}
                >
                  Send Answer
                  <Send size={17} />
                </button>
              </div>
            </div>
          </div>
        </Card>

        <aside className="space-y-6">
          <Card>
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="text-[#FF7A59]" />
              <h3 className="text-lg font-bold sm:text-xl">Voice Insights</h3>
            </div>

            <Insight label="Tone" value="Warm, prophetic, pastoral" />
            <Insight label="Common Theme" value="Faith during uncertainty" />
            <Insight label="Scripture Style" value="Direct and devotional" />
            <Insight label="Voice Strength" value="68% captured" />
          </Card>

          <Card>
            <h3 className="text-lg font-bold sm:text-xl">Question Bank</h3>

            <div className="mt-5 space-y-3">
              {questions.map((question, index) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => {
                    setAnswer(question);
                    showToast("Question loaded into answer field");
                  }}
                  className={`w-full rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] p-4 text-left text-sm leading-6 ${buttonInteractions} hover:bg-white active:bg-[#F3ECE3]`}
                >
                  <div className="mb-2 flex items-center gap-2 font-semibold">
                    <CheckCircle2
                      size={17}
                      className={
                        index < 2 ? "text-[#7C4DFF]" : "text-[#CFC5DA]"
                      }
                    />
                    Question {index + 1}
                  </div>
                  {question}
                </button>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </PageContainer>
  );
}

function Message({
  title,
  text,
  user = false,
}: {
  title: string;
  text: string;
  user?: boolean;
}) {
  return (
    <div className={`flex ${user ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-full rounded-3xl p-4 sm:max-w-2xl sm:p-5 ${
          user
            ? "bg-[#7C4DFF] text-white"
            : "bg-[#FAF7F2] text-[#17122B]"
        }`}
      >
        <p
          className={`text-sm font-semibold ${user ? "text-white/70" : "text-[#7A6F8F]"}`}
        >
          {title}
        </p>
        <p className="mt-2 text-sm leading-7 sm:text-base">{text}</p>
      </div>
    </div>
  );
}

function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[#E8DFD6] py-4 last:border-b-0">
      <p className="text-sm text-[#7A6F8F]">{label}</p>
      <h4 className="mt-1 font-semibold">{value}</h4>
    </div>
  );
}
