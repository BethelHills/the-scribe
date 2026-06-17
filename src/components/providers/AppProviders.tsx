"use client";

import { ManuscriptProvider } from "@/components/providers/ManuscriptProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <ManuscriptProvider>{children}</ManuscriptProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
