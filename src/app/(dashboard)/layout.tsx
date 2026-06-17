import BrandLogo from "@/components/layout/BrandLogo";
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
                <div className="min-w-0 flex-1">
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
