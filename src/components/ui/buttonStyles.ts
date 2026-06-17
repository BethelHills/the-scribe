export const buttonInteractions =
  "transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none";

export const iconButtonClass = `flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DFD6] bg-white ${buttonInteractions} hover:bg-[#FAF7F2]`;

export const ghostButtonClass = `rounded-2xl border border-[#E8DFD6] bg-white px-4 py-3 text-sm font-semibold text-[#17122B] ${buttonInteractions} hover:bg-[#FAF7F2]`;

export const suggestionButtonClass = `block w-full rounded-2xl border border-[#E8DFD6] px-4 py-3 text-left text-sm ${buttonInteractions} hover:bg-[#FAF7F2] active:bg-[#F3ECE3]`;
