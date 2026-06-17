export const buttonInteractions =
  "touch-manipulation transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none";

export const iconButtonClass = `flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-full border border-card-border bg-card text-foreground ${buttonInteractions} hover:bg-surface-muted`;

export const ghostButtonClass = `min-h-[44px] rounded-2xl border border-card-border bg-card px-4 py-3 text-sm font-semibold text-foreground ${buttonInteractions} hover:bg-surface-muted`;

export const suggestionButtonClass = `block w-full rounded-2xl border border-card-border bg-card px-4 py-3 text-left text-sm text-foreground ${buttonInteractions} hover:bg-surface-muted active:bg-surface`;
