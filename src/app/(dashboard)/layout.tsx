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
        <div className="flex min-h-screen min-w-0 items-stretch">
          <Sidebar />

          <div className="flex min-h-screen min-w-0 flex-1 flex-col">
            <div className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-b from-[#15122D] via-[#171236] to-[#24184C] text-white shadow-sm lg:hidden">
              <div className="flex items-center gap-2 px-4 py-4">
                <div className="min-w-0 flex-1">
                  <BrandLogo size="sm" href="/" className="w-full" />
                </div>

                <MobileMenu />
              </div>
            </div>

            <section className="min-h-screen flex-1 overflow-x-hidden">
              {children}
            </section>
          </div>
        </div>
      </main>
    </AppProviders>
  );
}
