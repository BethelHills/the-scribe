import Sidebar from "@/components/layout/Sidebar";
import MobileMenu from "@/components/layout/MobileMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <div className="sticky top-0 z-40 border-b border-[#E8DFD6] bg-[#FAF7F2]/90 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between px-4 py-4">
              <h1 className="text-xl font-bold text-[#17122B]">
                The Scribe
              </h1>

              <MobileMenu />
            </div>
          </div>

          <section className="min-h-screen overflow-x-hidden">
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
