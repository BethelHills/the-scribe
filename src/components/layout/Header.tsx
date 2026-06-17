import { Bell, Search } from "lucide-react";
import ProfileAvatar from "@/components/layout/ProfileAvatar";
import { iconButtonClass } from "@/components/ui/buttonStyles";

export default function Header({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="mb-6 sm:mb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm text-muted">{subtitle}</p>
          <h1 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {action}

          <div className="hidden items-center gap-3 md:flex">
            <button type="button" className={iconButtonClass} aria-label="Search">
              <Search size={18} />
            </button>

            <button type="button" className={iconButtonClass} aria-label="Notifications">
              <Bell size={18} />
            </button>

            <ProfileAvatar size="md" className="border-card-border" />
          </div>
        </div>
      </div>
    </header>
  );
}
