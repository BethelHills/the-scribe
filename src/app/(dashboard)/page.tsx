import { ActionLink } from "@/components/ui/ActionButton";
import DashboardAIPanel from "@/components/DashboardAIPanel";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export default function Dashboard() {
  return (
    <PageContainer>
      <PageHeader
        subtitle="Welcome back, Bethel"
        title="Dashboard"
        action={
          <ActionLink href="/manuscript">Start Writing</ActionLink>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm text-[#7A6F8F]">Current Manuscript</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Faith Beyond the Storm
              </h3>
            </div>

            <span className="w-fit rounded-full bg-[#FDEDE6] px-4 py-2 text-sm font-semibold text-[#FF7A59]">
              Drafting
            </span>
          </div>

          <div className="mt-6 rounded-3xl border border-[#E8DFD6] bg-[#FFF9F2] p-4 sm:mt-8 sm:p-6">
            <p className="text-sm text-[#7A6F8F]">Chapter 3</p>

            <h4 className="mt-3 text-xl font-bold sm:text-2xl">
              Walking in Faith When You Can&apos;t See
            </h4>

            <p className="mt-4 text-sm leading-7 text-[#5F5571] sm:text-base sm:leading-8">
              There are seasons in life when the path ahead is covered with
              uncertainty. This is where faith becomes your anchor and your voice
              becomes a vessel of hope.
            </p>

            <div className="mt-6 rounded-2xl border border-[#E7D7FF] bg-gradient-to-r from-[#F6EAFE] to-[#FFF0DE] p-4 sm:p-5">
              <p className="font-semibold text-[#7C4DFF]">
                &ldquo;Faith says, I do not understand, but I trust You.&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Stat title="Words" value="2,450" />
            <Stat title="Tone Match" value="96%" />
            <Stat title="Voice Notes" value="18" />
          </div>
        </Card>

        <DashboardAIPanel />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          title="Style Match"
          value="96%"
          text="Writing style matches the author profile."
        />
        <InfoCard
          title="Favorite Scriptures"
          value="12"
          text="Philippians 4:13, John 14:27 and more."
        />
        <InfoCard
          title="Common Phrases"
          value="8"
          text="Beloved, Indeed, Let me share this."
        />
        <InfoCard
          title="Writing Tone"
          value="Warm"
          text="Prophetic, encouraging, and clear."
        />
      </div>
    </PageContainer>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] p-4 sm:p-5">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-2 text-xl font-bold sm:text-2xl">{value}</h4>
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
    <Card className="rounded-[28px]">
      <p className="text-sm text-[#7A6F8F]">{title}</p>
      <h4 className="mt-3 text-2xl font-bold sm:text-3xl">{value}</h4>
      <p className="mt-3 text-sm leading-6 text-[#6B617C]">{text}</p>
    </Card>
  );
}
