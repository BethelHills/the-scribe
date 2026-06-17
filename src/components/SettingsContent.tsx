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
import { useTheme } from "@/components/providers/ThemeProvider";
import { buttonInteractions } from "@/components/ui/buttonStyles";

const menuItems = [
  {
    id: "profile",
    icon: UserRound,
    title: "Profile",
    description: "Update the current author and workspace information.",
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI Behavior",
    description: "Control how The Scribe writes, suggests, and improves content.",
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Notifications",
    description: "Choose when and how The Scribe keeps you informed.",
  },
  {
    id: "privacy",
    icon: Shield,
    title: "Privacy",
    description: "Manage workspace access and data protection preferences.",
  },
  {
    id: "api",
    icon: KeyRound,
    title: "API Keys",
    description: "Connect external services and manage API credentials.",
  },
  {
    id: "appearance",
    icon: Moon,
    title: "Appearance",
    description: "Customize the look and feel of your writing workspace.",
  },
] as const;

type MenuId = (typeof menuItems)[number]["id"];

export default function SettingsContent() {
  const [activeMenu, setActiveMenu] = useState<MenuId>("profile");
  const [aiToggles, setAiToggles] = useState({
    voice: true,
    scriptures: true,
    tone: true,
    autoInsert: false,
  });
  const [notificationToggles, setNotificationToggles] = useState({
    manuscript: true,
    interview: true,
    aiSuggestions: true,
    weeklyDigest: false,
  });
  const { appearance, setAppearance, setTheme } = useTheme();

  const activeItem =
    menuItems.find((item) => item.id === activeMenu) ?? menuItems[0];

  function toggleAi(key: keyof typeof aiToggles) {
    setAiToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function toggleNotification(key: keyof typeof notificationToggles) {
    setNotificationToggles((prev) => ({ ...prev, [key]: !prev[key] }));
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

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,320px)_1fr]">
        <Card className="xl:sticky xl:top-6 xl:self-start">
          <h3 className="text-lg font-bold sm:text-xl">Settings Menu</h3>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 xl:mt-5 xl:flex-col xl:overflow-visible xl:pb-0">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeMenu === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveMenu(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[44px] shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-left text-sm font-semibold xl:w-full xl:gap-3 ${buttonInteractions} ${
                    active
                      ? "bg-accent text-white"
                      : "bg-surface-muted text-foreground hover:bg-card active:bg-card"
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className="whitespace-nowrap">{item.title}</span>
                </button>
              );
            })}
          </div>
        </Card>

        <section className="min-w-0">
          <Card>
            <div className="mb-6 border-b border-card-border pb-5">
              <h3 className="text-xl font-bold sm:text-2xl">{activeItem.title}</h3>
              <p className="mt-2 text-sm text-muted">{activeItem.description}</p>
            </div>

            {activeMenu === "profile" && <ProfilePanel />}
            {activeMenu === "ai" && (
              <AIPanel toggles={aiToggles} onToggle={toggleAi} />
            )}
            {activeMenu === "notifications" && (
              <NotificationsPanel
                toggles={notificationToggles}
                onToggle={toggleNotification}
              />
            )}
            {activeMenu === "privacy" && <PrivacyPanel />}
            {activeMenu === "api" && <APIPanel />}
            {activeMenu === "appearance" && (
              <AppearancePanel
                appearance={appearance}
                onThemeChange={setTheme}
                onAppearanceChange={setAppearance}
              />
            )}
          </Card>
        </section>
      </div>
    </PageContainer>
  );
}

function ProfilePanel() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Input label="Author Name" defaultValue="Dr. Michael Adeyemi" />
      <Input label="Workspace Name" defaultValue="The Scribe Studio" />
      <Input label="Author Type" defaultValue="Pastor, Teacher, Author" />
      <Input label="Default Book Project" defaultValue="Faith Beyond the Storm" />
      <Input label="Email" defaultValue="michael@thescribe.studio" />
      <Input label="Timezone" defaultValue="America/New_York" />
    </div>
  );
}

function AIPanel({
  toggles,
  onToggle,
}: {
  toggles: {
    voice: boolean;
    scriptures: boolean;
    tone: boolean;
    autoInsert: boolean;
  };
  onToggle: (key: keyof typeof toggles) => void;
}) {
  return (
    <div className="space-y-4">
      <Toggle
        title="Match author voice automatically"
        text="Use the saved voice profile on every generation."
        active={toggles.voice}
        onToggle={() => onToggle("voice")}
      />
      <Toggle
        title="Suggest scriptures while writing"
        text="Recommend scriptures based on the topic and author pattern."
        active={toggles.scriptures}
        onToggle={() => onToggle("scriptures")}
      />
      <Toggle
        title="Use stronger Christian writing tone"
        text="Make generated content more devotional and ministry-focused."
        active={toggles.tone}
        onToggle={() => onToggle("tone")}
      />
      <Toggle
        title="Auto-insert AI suggestions"
        text="Insert suggestions without review."
        active={toggles.autoInsert}
        onToggle={() => onToggle("autoInsert")}
      />
    </div>
  );
}

function NotificationsPanel({
  toggles,
  onToggle,
}: {
  toggles: {
    manuscript: boolean;
    interview: boolean;
    aiSuggestions: boolean;
    weeklyDigest: boolean;
  };
  onToggle: (key: keyof typeof toggles) => void;
}) {
  return (
    <div className="space-y-4">
      <Toggle
        title="Manuscript updates"
        text="Notify when chapters are saved, exported, or enhanced."
        active={toggles.manuscript}
        onToggle={() => onToggle("manuscript")}
      />
      <Toggle
        title="Interview reminders"
        text="Remind you to complete voice training questions."
        active={toggles.interview}
        onToggle={() => onToggle("interview")}
      />
      <Toggle
        title="AI suggestions"
        text="Alert when The Scribe has new writing recommendations."
        active={toggles.aiSuggestions}
        onToggle={() => onToggle("aiSuggestions")}
      />
      <Toggle
        title="Weekly digest"
        text="Receive a weekly summary of writing progress and insights."
        active={toggles.weeklyDigest}
        onToggle={() => onToggle("weeklyDigest")}
      />
    </div>
  );
}

function PrivacyPanel() {
  const [privacyToggles, setPrivacyToggles] = useState({
    requireLogin: true,
    hideProfile: false,
  });

  function toggle(key: keyof typeof privacyToggles) {
    setPrivacyToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <SecurityCard
          title="Private Workspace"
          text="Only invited users can access this author profile."
        />
        <SecurityCard
          title="Data Protection"
          text="Writing samples and voice data stay inside this workspace."
        />
      </div>

      <Toggle
        title="Require login for exports"
        text="Ask for confirmation before downloading manuscript files."
        active={privacyToggles.requireLogin}
        onToggle={() => toggle("requireLogin")}
      />

      <Toggle
        title="Hide author profile from collaborators"
        text="Keep profile details visible only to workspace owners."
        active={privacyToggles.hideProfile}
        onToggle={() => toggle("hideProfile")}
      />
    </div>
  );
}

function APIPanel() {
  return (
    <div className="space-y-5">
      <Input
        label="OpenAI API Key"
        defaultValue="sk-••••••••••••••••••••••••"
        type="password"
      />
      <Input label="Workspace API Key" defaultValue="scribe_live_••••••••••••" type="password" />

      <div className="rounded-2xl border border-card-border bg-surface-muted p-4 text-sm leading-6 text-muted-foreground">
        API keys are stored locally for now. Supabase-backed secure storage will
        be added in a future release.
      </div>
    </div>
  );
}

function AppearancePanel({
  appearance,
  onThemeChange,
  onAppearanceChange,
}: {
  appearance: {
    theme: "light" | "dark" | "system";
    compactSidebar: boolean;
    largeText: boolean;
  };
  onThemeChange: (theme: "light" | "dark" | "system") => void;
  onAppearanceChange: React.Dispatch<
    React.SetStateAction<{
      theme: "light" | "dark" | "system";
      compactSidebar: boolean;
      largeText: boolean;
    }>
  >;
}) {
  const themes = [
    { id: "light" as const, label: "Light" },
    { id: "dark" as const, label: "Dark" },
    { id: "system" as const, label: "System" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-muted">Theme</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => onThemeChange(theme.id)}
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${buttonInteractions} ${
                appearance.theme === theme.id
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-card-border bg-surface-muted text-foreground hover:bg-card"
              }`}
            >
              {theme.label}
            </button>
          ))}
        </div>
      </div>

      <Toggle
        title="Compact sidebar"
        text="Use a narrower sidebar with smaller labels on desktop."
        active={appearance.compactSidebar}
        onToggle={() =>
          onAppearanceChange((prev) => ({
            ...prev,
            compactSidebar: !prev.compactSidebar,
          }))
        }
      />

      <Toggle
        title="Larger editor text"
        text="Increase manuscript and interview text size for easier reading."
        active={appearance.largeText}
        onToggle={() =>
          onAppearanceChange((prev) => ({
            ...prev,
            largeText: !prev.largeText,
          }))
        }
      />
    </div>
  );
}

function Input({
  label,
  defaultValue,
  type = "text",
}: {
  label: string;
  defaultValue: string;
  type?: string;
}) {
  return (
    <label>
      <p className="mb-2 text-sm font-semibold text-muted">{label}</p>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full min-h-[44px] rounded-2xl border border-card-border bg-input-bg px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
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
    <div className="flex flex-col gap-4 rounded-2xl border border-card-border bg-surface-muted p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:p-5">
      <div className="min-w-0">
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted">{text}</p>
      </div>

      <button
        type="button"
        aria-pressed={active}
        onClick={onToggle}
        className={`flex h-7 w-12 shrink-0 items-center rounded-full p-1 ${buttonInteractions} ${
          active ? "justify-end bg-accent" : "justify-start bg-step-line"
        }`}
      >
        <div className="h-5 w-5 rounded-full bg-white" />
      </button>
    </div>
  );
}

function SecurityCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-card-border bg-surface-muted p-5">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
