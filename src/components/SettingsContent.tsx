"use client";

import { useState } from "react";
import {
  Bell,
  KeyRound,
  Moon,
  Save,
  Shield,
  Sparkles,
  UserRound,
} from "lucide-react";
import SaveButton from "@/components/ui/SaveButton";
import PageContainer from "@/components/layout/PageContainer";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { buttonInteractions } from "@/components/ui/buttonStyles";

const menuItems = [
  { id: "profile", icon: UserRound, title: "Profile" },
  { id: "ai", icon: Sparkles, title: "AI Behavior" },
  { id: "notifications", icon: Bell, title: "Notifications" },
  { id: "privacy", icon: Shield, title: "Privacy" },
  { id: "api", icon: KeyRound, title: "API Keys" },
  { id: "appearance", icon: Moon, title: "Appearance" },
] as const;

export default function SettingsContent() {
  const [activeMenu, setActiveMenu] = useState<(typeof menuItems)[number]["id"]>("profile");
  const [toggles, setToggles] = useState({
    voice: true,
    scriptures: true,
    tone: true,
    autoInsert: false,
  });

  function toggle(key: keyof typeof toggles) {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <PageContainer>
      <PageHeader
        subtitle="Workspace Control"
        title="Settings"
        description="Manage the author workspace, AI behavior, notifications, and privacy settings."
        action={
          <SaveButton
            className="w-full gap-2 sm:w-auto"
            successMessage="Settings saved"
          >
            <Save size={17} />
            Save Changes
          </SaveButton>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,360px)_1fr]">
        <Card>
          <h3 className="text-lg font-bold sm:text-xl">Settings Menu</h3>

          <div className="mt-5 space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeMenu === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveMenu(item.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold ${buttonInteractions} ${
                    active
                      ? "bg-[#7C4DFF] text-white"
                      : "bg-[#FAF7F2] text-[#17122B] hover:bg-white active:bg-[#F3ECE3]"
                  }`}
                >
                  <Icon size={18} />
                  {item.title}
                </button>
              );
            })}
          </div>
        </Card>

        <section className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold sm:text-2xl">Profile Settings</h3>
            <p className="mt-2 text-sm text-[#7A6F8F]">
              Update the current author and workspace information.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <Input label="Author Name" defaultValue="Dr. Michael Adeyemi" />
              <Input label="Workspace Name" defaultValue="The Scribe Studio" />
              <Input label="Author Type" defaultValue="Pastor, Teacher, Author" />
              <Input
                label="Default Book Project"
                defaultValue="Faith Beyond the Storm"
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
                active={toggles.voice}
                onToggle={() => toggle("voice")}
              />
              <Toggle
                title="Suggest scriptures while writing"
                text="Recommend scriptures based on the topic and author pattern."
                active={toggles.scriptures}
                onToggle={() => toggle("scriptures")}
              />
              <Toggle
                title="Use stronger Christian writing tone"
                text="Make generated content more devotional and ministry-focused."
                active={toggles.tone}
                onToggle={() => toggle("tone")}
              />
              <Toggle
                title="Auto-insert AI suggestions"
                text="Insert suggestions without review."
                active={toggles.autoInsert}
                onToggle={() => toggle("autoInsert")}
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

function Input({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label>
      <p className="mb-2 text-sm font-semibold text-[#7A6F8F]">{label}</p>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#8B5CF6]"
      />
    </label>
  );
}

function Toggle({
  title,
  text,
  active,
  onToggle,
}: {
  title: string;
  text: string;
  active: boolean;
  onToggle: () => void;
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
        onClick={onToggle}
        className={`flex h-7 w-12 shrink-0 items-center rounded-full p-1 ${buttonInteractions} ${
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
