import Link from "next/link";
import {
  Bell,
  BookOpen,
  Feather,
  FileText,
  Home,
  KeyRound,
  MessageSquareText,
  Moon,
  Plus,
  Save,
  Settings,
  Shield,
  Sparkles,
  UserRound,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Interview", icon: MessageSquareText, href: "/interview" },
  { name: "Manuscripts", icon: FileText, href: "/manuscript" },
  { name: "AI Assistant", icon: Sparkles, href: "/assistant" },
  { name: "Voice Profile", icon: UserRound, href: "/voice-profile" },
  { name: "Scripture Library", icon: BookOpen, href: "/scripture-library" },
  { name: "Settings", icon: Settings, href: "/settings", active: true },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#17122B]">
      <div className="flex min-h-screen">
        <aside className="hidden w-[280px] flex-col justify-between bg-[#17122B] p-6 text-white lg:flex">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7A59] to-[#8B5CF6]">
                <Feather size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">The Scribe</h1>
                <p className="text-sm text-white/60">AI Writing Assistant</p>
              </div>
            </div>

            <button className="mb-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF7A59] to-[#E83E8C] font-semibold">
              <Plus size={18} />
              New Project
            </button>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const className = `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${
                  item.active
                    ? "bg-white/15 text-white"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`;

                if (item.href) {
                  return (
                    <Link key={item.name} href={item.href} className={className}>
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                }

                return (
                  <div key={item.name} className={className}>
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-xs uppercase tracking-wide text-white/50">
              Workspace
            </p>

            <h3 className="mt-3 font-semibold">The Scribe Studio</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Manage account, AI settings, privacy, and writing preferences.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-6 lg:p-10">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-sm text-[#7A6F8F]">Workspace Control</p>
              <h2 className="mt-2 text-4xl font-bold">Settings</h2>
              <p className="mt-3 max-w-2xl text-[#6B617C]">
                Manage the author workspace, AI behavior, notifications, and
                privacy settings.
              </p>
            </div>

            <button className="hidden items-center gap-2 rounded-2xl bg-[#17122B] px-6 py-3 text-sm font-semibold text-white md:flex">
              <Save size={17} />
              Save Changes
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[360px_1fr]">
            <aside className="rounded-[32px] border border-[#E8DFD6] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Settings Menu</h3>

              <div className="mt-5 space-y-3">
                <MenuItem icon={<UserRound size={18} />} title="Profile" active />
                <MenuItem icon={<Sparkles size={18} />} title="AI Behavior" />
                <MenuItem icon={<Bell size={18} />} title="Notifications" />
                <MenuItem icon={<Shield size={18} />} title="Privacy" />
                <MenuItem icon={<KeyRound size={18} />} title="API Keys" />
                <MenuItem icon={<Moon size={18} />} title="Appearance" />
              </div>
            </aside>

            <section className="space-y-6">
              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Profile Settings</h3>
                <p className="mt-2 text-sm text-[#7A6F8F]">
                  Update the current author and workspace information.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Input label="Author Name" value="Dr. Michael Adeyemi" />
                  <Input label="Workspace Name" value="The Scribe Studio" />
                  <Input label="Author Type" value="Pastor, Teacher, Author" />
                  <Input label="Default Book Project" value="Faith Beyond the Storm" />
                </div>
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold">AI Behavior</h3>
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
              </div>

              <div className="rounded-[32px] border border-[#E8DFD6] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold">Privacy & Security</h3>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <SecurityCard title="Private Workspace" text="Only invited users can access this author profile." />
                  <SecurityCard title="Data Protection" text="Writing samples and voice data stay inside this workspace." />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
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
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-[#E8DFD6] bg-[#FAF7F2] p-5">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-[#7A6F8F]">{text}</p>
      </div>

      <div
        className={`flex h-7 w-12 items-center rounded-full p-1 ${
          active ? "justify-end bg-[#7C4DFF]" : "justify-start bg-[#D8CEDF]"
        }`}
      >
        <div className="h-5 w-5 rounded-full bg-white" />
      </div>
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
