"use client";

import {
  BookOpen,
  Brain,
  CheckCircle2,
  PenLine,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import ProfileAvatar from "@/components/layout/ProfileAvatar";
import SaveButton from "@/components/ui/SaveButton";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { buttonInteractions, ghostButtonClass } from "@/components/ui/buttonStyles";

const traits = [
  "Warm",
  "Prophetic",
  "Pastoral",
  "Scripture-rich",
  "Encouraging",
  "Direct",
];

export default function VoiceProfileContent() {
  const router = useRouter();

  return (
    <PageContainer>
      <PageHeader
        subtitle="Author Intelligence"
        title="Voice Profile"
        description="This is the author's writing DNA. The Scribe uses it to match tone, structure, scriptures, phrases, and teaching style."
        action={
          <SaveButton
            className="w-full sm:w-auto"
            successMessage="Voice profile updated"
          >
            Update Profile
          </SaveButton>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
        <section className="space-y-6">
          <Card>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                <ProfileAvatar size="xl" />

                <div className="min-w-0">
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    Dr. Michael Adeyemi
                  </h3>
                  <p className="mt-2 text-sm text-muted sm:text-base">
                    Apostolic teacher, Christian author, and pastoral voice.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-surface-muted p-5 text-center">
                <p className="text-sm text-muted">Voice Match</p>
                <h4 className="mt-2 text-3xl font-bold text-accent sm:text-4xl">
                  92%
                </h4>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Metric title="Writing Samples" value="12" />
            <Metric title="Interview Answers" value="24" />
            <Metric title="Scriptures Captured" value="18" />
          </div>

          <Card>
            <div className="mb-6 flex items-center gap-2">
              <Brain className="text-accent-coral" />
              <h3 className="text-xl font-bold sm:text-2xl">Voice DNA</h3>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <ProfileBlock
                title="Primary Tone"
                value="Warm, prophetic, and encouraging"
              />
              <ProfileBlock
                title="Teaching Style"
                value="Starts with scripture, explains with stories, ends with hope"
              />
              <ProfileBlock
                title="Sentence Rhythm"
                value="Short strong lines mixed with devotional paragraphs"
              />
              <ProfileBlock
                title="Audience"
                value="Believers seeking faith, clarity, and spiritual strength"
              />
            </div>
          </Card>

          <Card>
            <div className="mb-6 flex items-center gap-2">
              <PenLine className="text-accent-coral" />
              <h3 className="text-xl font-bold sm:text-2xl">Writing Traits</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-card-border bg-surface-muted px-4 py-2 text-sm font-semibold sm:px-5 sm:py-3"
                >
                  {trait}
                </span>
              ))}
            </div>
          </Card>
        </section>

        <aside className="space-y-6">
          <Card>
            <div className="mb-5 flex items-center gap-2">
              <BookOpen className="text-accent-coral" />
              <h3 className="text-lg font-bold sm:text-xl">Favorite Scriptures</h3>
            </div>

            <Scripture text="2 Corinthians 5:7" note="Faith over sight" />
            <Scripture text="Romans 8:28" note="God works all things" />
            <Scripture text="Isaiah 41:10" note="Fear not" />
            <Scripture text="John 14:27" note="Peace in Christ" />
          </Card>

          <Card>
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="text-accent-coral" />
              <h3 className="text-lg font-bold sm:text-xl">Common Phrases</h3>
            </div>

            {[
              "Beloved, hear this clearly...",
              "Let me show you from scripture...",
              "God is still working...",
              "Faith is not denial...",
            ].map((phrase) => (
              <div
                key={phrase}
                className="mb-3 rounded-2xl bg-surface-muted p-4 text-sm"
              >
                {phrase}
              </div>
            ))}
          </Card>

          <div className="theme-promo-panel rounded-[28px] p-5 shadow-sm sm:rounded-[32px] sm:p-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-accent-coral" />
              <h3 className="text-lg font-bold sm:text-xl">AI Readiness</h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/80">
              This profile is ready for manuscript generation, chapter rewriting,
              sermon outlines, and tone matching.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Voice profile complete",
                "Scripture pattern detected",
                "Writing rhythm captured",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={17} className="shrink-0 text-accent-coral" />
                  {item}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => router.push("/manuscript")}
              className={`mt-6 w-full ${ghostButtonClass}`}
            >
              Start Writing
            </button>
          </div>
        </aside>
      </div>
    </PageContainer>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <Card className="rounded-[28px]">
      <p className="text-sm text-muted">{title}</p>
      <h4 className="mt-3 text-3xl font-bold sm:text-4xl">{value}</h4>
    </Card>
  );
}

function ProfileBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-card-border bg-surface-muted p-4 sm:p-5">
      <p className="text-sm text-muted">{title}</p>
      <h4 className="mt-2 text-sm font-semibold leading-7 sm:text-base">
        {value}
      </h4>
    </div>
  );
}

function Scripture({ text, note }: { text: string; note: string }) {
  return (
    <div className="border-b border-card-border py-4 last:border-b-0">
      <h4 className="font-semibold">{text}</h4>
      <p className="mt-1 text-sm text-muted">{note}</p>
    </div>
  );
}
