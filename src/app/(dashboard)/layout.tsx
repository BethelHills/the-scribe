import BrandLogo from "@/components/layout/BrandLogo";
import BackButton from "@/components/layout/BackButton";
import Sidebar from "@/components/layout/Sidebar";
import MobileMenu from "@/components/layout/MobileMenu";
import AppProviders from "@/components/providers/AppProviders";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <main className="min-h-screen overflow-x-hidden bg-background">
        <div className="flex min-h-screen min-w-0">
          <Sidebar />

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="sticky top-0 z-40 border-b border-card-border bg-background/90 backdrop-blur lg:hidden">
              <div className="flex items-center gap-2 px-4 py-3">
                <BackButton variant="icon" className="shrink-0" />

                <div className="min-w-0 flex-1 rounded-xl bg-[#0a0812] px-3 py-2.5">
                  <BrandLogo size="sm" href="/" className="w-full" />
                </div>

                <MobileMenu />
              </div>
            </div>

            <section className="min-h-screen overflow-x-hidden">
              {children}
            </section>
          </div>
        </div>
      </main>
    </AppProviders>
  );
}
