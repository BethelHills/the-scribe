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

export default function AnalyticsContent() {
  return (
    <PageContainer>
      <PageHeader subtitle="Writing Performance" title="Analytics" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-muted text-accent">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-sm text-muted">{stat.title}</p>
              <h3 className="mt-2 text-3xl font-bold">{stat.value}</h3>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                Manuscript Progress
              </h2>
              <p className="mt-2 text-sm text-muted">
                Current progress for Faith Beyond the Storm.
              </p>
            </div>

            <span className={`${badgeClass} px-4 py-2 text-sm`}>
              68% Complete
            </span>
          </div>

          <div className="mt-8 space-y-5">
            <Progress label="Chapter Drafting" value="80%" width="80%" />
            <Progress label="Voice Matching" value="92%" width="92%" />
            <Progress label="Scripture Integration" value="74%" width="74%" />
            <Progress label="Final Editing" value="42%" width="42%" />
          </div>
        </Card>

        <aside className="space-y-6">
          <Card>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-accent-coral" />
              <h3 className="text-xl font-bold">Tone Breakdown</h3>
            </div>

            <div className="mt-6 space-y-5">
              {toneData.map((item) => (
                <Progress
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  width={item.value}
                />
              ))}
            </div>
          </Card>

          <div className="rounded-[32px] border border-card-border bg-gradient-to-br from-[#17122B] to-[#3A2A7A] p-6 text-white shadow-sm">
            <div className="flex items-center gap-2">
              <Clock className="text-[#FFB199]" />
              <h3 className="text-xl font-bold">Recent AI Activity</h3>
            </div>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              {recentActivity.map((item) => (
                <p key={item}>{item}</p>
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
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className="text-muted">{value}</span>
      </div>

      <div className="h-3 rounded-full bg-step-line">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-accent to-accent-coral"
          style={{ width }}
        />
      </div>
    </div>
  );
}
