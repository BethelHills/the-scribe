import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 text-[#17122B] lg:p-10">
      <div className="mb-10 flex items-start justify-between">
        <div>
          <p className="text-sm text-[#7A6F8F]">Welcome back, Bethel</p>
          <h2 className="mt-2 text-4xl font-bold">Dashboard</h2>
        </div>

        <Link
          href="/manuscript"
          className="rounded-2xl bg-[#17122B] px-6 py-3 text-sm font-semibold text-white"
        >
          Start Writing
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-8 shadow-sm xl:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#7A6F8F]">Current Manuscript</p>
              <h3 className="mt-2 text-3xl font-bold">
                Faith Beyond the Storm
              </h3>
            </div>

            <span className="rounded-full bg-[#FDEDE6] px-4 py-2 text-sm font-semibold text-[#FF7A59]">
              Drafting
            </span>
          </div>

          <div className="mt-8 rounded-3xl border border-[#E8DFD6] bg-[#FFF9F2] p-6">
            <p className="text-sm text-[#7A6F8F]">Chapter 3</p>

            <h4 className="mt-3 text-2xl font-bold">
              Walking in Faith When You Can&apos;t See
            </h4>

            <p className="mt-4 leading-8 text-[#5F5571]">
              There are seasons in life when the path ahead is covered with
              uncertainty. This is where faith becomes your anchor and your
              voice becomes a vessel of hope.
            </p>

            <div className="mt-6 rounded-2xl border border-[#E7D7FF] bg-gradient-to-r from-[#F6EAFE] to-[#FFF0DE] p-5">
              <p className="font-semibold text-[#7C4DFF]">
                &ldquo;Faith says, I do not understand, but I trust You.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Stat title="Words" value="2,450" />
            <Stat title="Tone Match" value="96%" />
            <Stat title="Voice Notes" value="18" />
          </div>
        </div>

        <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="text-[#FF7A59]" />
            <h3 className="text-xl font-bold">AI Assistant</h3>
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
            {[
              "Add supporting scripture",
              "Expand this section",
              "Create sermon outline",
              "Rewrite in author's tone",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-[#E8DFD6] px-4 py-3 text-left text-sm hover:bg-[#FAF7F2]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Style Match" value="96%" text="Writing style matches the author profile." />
        <InfoCard title="Favorite Scriptures" value="12" text="Philippians 4:13, John 14:27 and more." />
        <InfoCard title="Common Phrases" value="8" text="Beloved, Indeed, Let me share this." />
        <InfoCard title="Writing Tone" value="Warm" text="Prophetic, encouraging, and clear." />
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] p-5">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-2 text-2xl font-bold">{value}</h4>
    </div>
  );
}

function Message({ text, user = false }: { text: string; user?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-4 text-sm leading-6 ${
        user
          ? "ml-8 bg-[#7C4DFF] text-white"
          : "mr-8 bg-[#FAF7F2] text-[#17122B]"
      }`}
    >
      {text}
    </div>
  );
}

function InfoCard({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-3 text-3xl font-bold">{value}</h4>
      <p className="mt-3 text-sm leading-6 text-[#6B617C]">{text}</p>
    </div>
  );
}
