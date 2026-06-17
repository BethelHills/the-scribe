"use client";

import { ManuscriptProvider } from "@/components/providers/ManuscriptProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <ManuscriptProvider>{children}</ManuscriptProvider>
    </ToastProvider>
  );
}
