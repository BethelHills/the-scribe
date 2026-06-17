"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  BookOpen,
  Clock,
  FileText,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { badgeClass } from "@/lib/ui-classes";

const stats = [
  { title: "Total Words", value: "24,580", icon: FileText },
  { title: "Voice Match", value: "92%", icon: Sparkles },
  { title: "Scriptures Used", value: "18", icon: BookOpen },
  { title: "AI Actions", value: "46", icon: BarChart3 },
];

const manuscriptProgress = [
  { label: "Chapter Drafting", value: "80%" },
  { label: "Voice Matching", value: "92%" },
  { label: "Scripture Integration", value: "74%" },
  { label: "Final Editing", value: "42%" },
];

const toneData = [
  { label: "Warm", value: "92%" },
  { label: "Prophetic", value: "86%" },
  { label: "Pastoral", value: "81%" },
  { label: "Teaching", value: "74%" },
];

const recentActivity = [
  "Generated chapter outline for faith during uncertainty.",
  "Suggested 2 Corinthians 5:7 for Chapter 3.",
  "Rewrote paragraph in a warmer pastoral tone.",
];

function parsePercent(value: string) {
  return Number.parseInt(value.replace("%", ""), 10) || 0;
}

export default function AnalyticsContent() {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimateBars(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <PageContainer>
      <PageHeader subtitle="Writing Performance" title="Analytics" />

      <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.title}
              className="min-w-0 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-muted text-accent">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-sm text-muted">{stat.title}</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{stat.value}</h3>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <Card className="min-w-0 transition hover:shadow-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-xl font-bold sm:text-2xl">
                Manuscript Progress
              </h2>
              <p className="mt-2 text-sm text-muted">
                Current progress for Faith Beyond the Storm.
              </p>
            </div>

            <span className={`${badgeClass} shrink-0 px-4 py-2 text-sm`}>
              68% Complete
            </span>
          </div>

          <div className="mt-8 space-y-5">
            {manuscriptProgress.map((item) => (
              <Progress
                key={item.label}
                animate={animateBars}
                label={item.label}
                value={item.value}
                widthPercent={parsePercent(item.value)}
              />
            ))}
          </div>
        </Card>

        <aside className="min-w-0 space-y-6">
          <Card className="min-w-0 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-2">
              <TrendingUp className="shrink-0 text-accent-coral" />
              <h3 className="text-lg font-bold sm:text-xl">Tone Breakdown</h3>
            </div>

            <div className="mt-6 space-y-5">
              {toneData.map((item) => (
                <Progress
                  key={item.label}
                  animate={animateBars}
                  label={item.label}
                  value={item.value}
                  widthPercent={parsePercent(item.value)}
                />
              ))}
            </div>
          </Card>

          <div className="theme-promo-panel min-w-0 rounded-[28px] p-5 shadow-sm sm:rounded-[32px] sm:p-6">
            <div className="flex items-center gap-2">
              <Clock className="shrink-0 text-[#FFB199]" />
              <h3 className="text-lg font-bold sm:text-xl">Recent AI Activity</h3>
            </div>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              {recentActivity.map((item) => (
                <p key={item} className="break-words">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </PageContainer>
  );
}

function Progress({
  label,
  value,
  widthPercent,
  animate,
}: {
  label: string;
  value: string;
  widthPercent: number;
  animate: boolean;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="min-w-0 truncate font-semibold">{label}</span>
        <span className="shrink-0 text-muted">{value}</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-step-line">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-accent to-accent-coral transition-[width] duration-1000 ease-out"
          style={{ width: animate ? `${widthPercent}%` : "0%" }}
        />
      </div>
    </div>
  );
}
