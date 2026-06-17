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
      <main className="min-h-screen bg-[#FAF7F2]">
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="flex-1">
            <div className="sticky top-0 z-40 border-b border-[#E8DFD6] bg-[#FAF7F2]/90 backdrop-blur lg:hidden">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="rounded-xl bg-[#17122B] px-3 py-2">
                  <BrandLogo size="sm" href="/" />
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
