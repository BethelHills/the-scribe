export default function PageHeader({
  subtitle,
  title,
  description,
  action,
}: {
  subtitle: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between lg:mb-10">
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted">{subtitle}</p>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <div className="flex w-full shrink-0 flex-wrap gap-3 sm:w-auto sm:justify-end">
          {action}
        </div>
      ) : null}
    </div>
  );
}
