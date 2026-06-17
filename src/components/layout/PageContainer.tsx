export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-full overflow-x-hidden p-4 text-[#17122B] sm:p-6 lg:p-10">
      {children}
    </div>
  );
}
