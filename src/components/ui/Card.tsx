export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-card-border bg-card p-5 text-foreground shadow-sm sm:rounded-[32px] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
