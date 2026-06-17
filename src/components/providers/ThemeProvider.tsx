"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  APPEARANCE_STORAGE_KEY,
  applyAppearance,
  defaultAppearance,
  loadAppearance,
  type AppearanceSettings,
  type ThemeMode,
} from "@/lib/theme";

type ThemeContextValue = {
  appearance: AppearanceSettings;
  setAppearance: React.Dispatch<React.SetStateAction<AppearanceSettings>>;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearance] =
    useState<AppearanceSettings>(defaultAppearance);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = loadAppearance();
    setAppearance(stored);
    applyAppearance(stored);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    applyAppearance(appearance);
    localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(appearance));
  }, [appearance, ready]);

  useEffect(() => {
    if (!ready || appearance.theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyAppearance(appearance);

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [appearance, ready]);

  const setTheme = useCallback((theme: ThemeMode) => {
    setAppearance((prev) => ({ ...prev, theme }));
  }, []);

  const value = useMemo(
    () => ({ appearance, setAppearance, setTheme }),
    [appearance, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
