import AIChat from "@/components/AIChat";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import {
  Brain,
  Sparkles,
} from "lucide-react";

const quickActions = [
  "Generate chapter outline",
  "Rewrite in author's tone",
  "Add supporting scripture",
  "Create sermon notes",
  "Expand this section",
  "Summarize the chapter",
];

export default function AIAssistantPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#17122B]">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-6 lg:p-10">
          <Header title="AI Assistant" subtitle="Creative AI Workspace" />
          <p className="mb-8 -mt-3 max-w-2xl text-[#6B617C]">
            Ask The Scribe to generate, rewrite, expand, structure, and improve
            content using the author's captured voice.
          </p>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
            <div className="flex min-h-[640px] flex-col">
              <AIChat />
            </div>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-2">
                  <Brain className="text-[#FF7A59]" />
                  <h3 className="text-xl font-bold">AI Context</h3>
                </div>

                <ContextItem title="Author" value="Dr. Michael Adeyemi" />
                <ContextItem title="Tone" value="Warm, prophetic, pastoral" />
                <ContextItem title="Book" value="Faith Beyond the Storm" />
                <ContextItem title="Voice Match" value="92%" />
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">Quick Actions</h3>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      className="flex items-center gap-3 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3 text-left text-sm hover:bg-white"
                    >
                      <Sparkles size={16} className="text-[#7C4DFF]" />
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-gradient-to-br from-[#17122B] to-[#3A2A7A] p-6 text-white shadow-sm">
                <h3 className="text-xl font-bold">Smart Suggestions</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The next best move is to add one personal story and one
                  scripture reference to make the chapter feel more authentic.
                </p>

                <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#17122B]">
                  Apply Suggestion
                </button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function ContextItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-b border-[#E8DFD6] py-4 last:border-b-0">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-1 font-semibold">{value}</h4>
    </div>
  );
}
