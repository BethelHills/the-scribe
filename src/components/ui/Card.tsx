export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-[#E8DFD6] bg-white p-5 shadow-sm sm:rounded-[32px] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
