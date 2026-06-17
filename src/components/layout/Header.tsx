import { Bell, Search } from "lucide-react";

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
          <p className="text-sm text-[#7A6F8F]">{subtitle}</p>
          <h1 className="mt-1 text-2xl font-bold text-[#17122B] sm:text-3xl">
            {title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {action}

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white"
              aria-label="Notifications"
            >
              <Bell size={18} />
            </button>

            <div className="h-11 w-11 rounded-full bg-gradient-to-r from-[#FF7A59] to-[#8B5CF6]" />
          </div>
        </div>
      </div>
    </header>
  );
}
