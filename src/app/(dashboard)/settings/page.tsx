import {
  Bell,
  KeyRound,
  Moon,
  Save,
  Shield,
  Sparkles,
  UserRound,
} from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader
        subtitle="Workspace Control"
        title="Settings"
        description="Manage the author workspace, AI behavior, notifications, and privacy settings."
        action={
          <ActionButton className="w-full gap-2 sm:w-auto">
            <Save size={17} />
            Save Changes
          </ActionButton>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,360px)_1fr]">
        <Card>
          <h3 className="text-lg font-bold sm:text-xl">Settings Menu</h3>

          <div className="mt-5 space-y-3">
            <MenuItem icon={<UserRound size={18} />} title="Profile" active />
            <MenuItem icon={<Sparkles size={18} />} title="AI Behavior" />
            <MenuItem icon={<Bell size={18} />} title="Notifications" />
            <MenuItem icon={<Shield size={18} />} title="Privacy" />
            <MenuItem icon={<KeyRound size={18} />} title="API Keys" />
            <MenuItem icon={<Moon size={18} />} title="Appearance" />
          </div>
        </Card>

        <section className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold sm:text-2xl">Profile Settings</h3>
            <p className="mt-2 text-sm text-[#7A6F8F]">
              Update the current author and workspace information.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <Input label="Author Name" value="Dr. Michael Adeyemi" />
              <Input label="Workspace Name" value="The Scribe Studio" />
              <Input label="Author Type" value="Pastor, Teacher, Author" />
              <Input
                label="Default Book Project"
                value="Faith Beyond the Storm"
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold sm:text-2xl">AI Behavior</h3>
            <p className="mt-2 text-sm text-[#7A6F8F]">
              Control how The Scribe writes, suggests, and improves content.
            </p>

            <div className="mt-6 space-y-4">
              <Toggle
                title="Match author voice automatically"
                text="Use the saved voice profile on every generation."
                active
              />
              <Toggle
                title="Suggest scriptures while writing"
                text="Recommend scriptures based on the topic and author pattern."
                active
              />
              <Toggle
                title="Use stronger Christian writing tone"
                text="Make generated content more devotional and ministry-focused."
                active
              />
              <Toggle
                title="Auto-insert AI suggestions"
                text="Insert suggestions without review."
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold sm:text-2xl">Privacy & Security</h3>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <SecurityCard
                title="Private Workspace"
                text="Only invited users can access this author profile."
              />
              <SecurityCard
                title="Data Protection"
                text="Writing samples and voice data stay inside this workspace."
              />
            </div>
          </Card>
        </section>
      </div>
    </PageContainer>
  );
}

function MenuItem({
  icon,
  title,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
        active ? "bg-[#7C4DFF] text-white" : "bg-[#FAF7F2] text-[#17122B]"
      }`}
    >
      {icon}
      {title}
    </button>
  );
}

function Input({ label, value }: { label: string; value: string }) {
  return (
    <label>
      <p className="mb-2 text-sm font-semibold text-[#7A6F8F]">{label}</p>
      <input
        defaultValue={value}
        className="w-full rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#8B5CF6]"
      />
    </label>
  );
}

function Toggle({
  title,
  text,
  active = false,
}: {
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:p-5">
      <div className="min-w-0">
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-[#7A6F8F]">{text}</p>
      </div>

      <button
        type="button"
        aria-pressed={active}
        className={`flex h-7 w-12 shrink-0 items-center rounded-full p-1 ${
          active ? "justify-end bg-[#7C4DFF]" : "justify-start bg-[#D8CEDF]"
        }`}
      >
        <div className="h-5 w-5 rounded-full bg-white" />
      </button>
    </div>
  );
}

function SecurityCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-[#E8DFD6] bg-[#FAF7F2] p-5">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-[#7A6F8F]">{text}</p>
    </div>
  );
}
