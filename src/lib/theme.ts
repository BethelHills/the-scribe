export const APPEARANCE_STORAGE_KEY = "scribe-appearance";

export type ThemeMode = "light" | "dark" | "system";

export type AppearanceSettings = {
  theme: ThemeMode;
  compactSidebar: boolean;
  largeText: boolean;
};

export const defaultAppearance: AppearanceSettings = {
  theme: "light",
  compactSidebar: false,
  largeText: false,
};

export function resolveDark(theme: ThemeMode): boolean {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyAppearance(settings: AppearanceSettings) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolveDark(settings.theme));
  root.classList.toggle("large-text", settings.largeText);
  root.classList.toggle("compact-sidebar", settings.compactSidebar);
  root.setAttribute("data-theme", settings.theme);
}

export function loadAppearance(): AppearanceSettings {
  if (typeof window === "undefined") return defaultAppearance;

  try {
    const stored = localStorage.getItem(APPEARANCE_STORAGE_KEY);
    if (!stored) return defaultAppearance;
    return { ...defaultAppearance, ...JSON.parse(stored) };
  } catch {
    return defaultAppearance;
  }
}
