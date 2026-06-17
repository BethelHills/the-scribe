"use client";

import { useState } from "react";
import { ActionButton } from "@/components/ui/ActionButton";
import { useToast } from "@/components/providers/ToastProvider";

export default function SaveButton({
  children,
  successMessage = "Saved successfully",
  className = "",
  onSave,
}: {
  children: React.ReactNode;
  successMessage?: string;
  className?: string;
  onSave?: () => void;
}) {
  const { showToast } = useToast();
  const [saved, setSaved] = useState(false);

  function handleClick() {
    onSave?.();
    showToast(successMessage);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  }

  return (
    <ActionButton
      className={className}
      onClick={handleClick}
      disabled={saved}
      variant={saved ? "secondary" : "primary"}
    >
      {saved ? "Saved!" : children}
    </ActionButton>
  );
}
