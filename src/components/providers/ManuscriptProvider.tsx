"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export const STORY_SUGGESTION =
  "There was a time in my life when everything I had planned fell apart. Opportunities vanished, doors closed, and I felt stuck in a valley. In that season, I learned that faith is not the absence of questions—it is the decision to keep walking with God when the road is unclear.";

const INITIAL_BODY = `There are seasons in life when the path ahead is shrouded in uncertainty. The winds of circumstance may blow strong, and the storm may rage around you, but this is precisely where faith becomes your anchor.

Faith is not the absence of fear, nor is it a feeling. It is the confident assurance that God is still in control when nothing makes sense.

When you choose to walk in faith, you are declaring that God's Word is more real than your current situation. You are saying that His promises outweigh your problems.

1. Faith Anchors Your Soul

An anchor doesn't stop the storm, it keeps you from drifting.`;

type ManuscriptContextValue = {
  bookTitle: string;
  chapterTitle: string;
  scripture: string;
  callout: string;
  body: string;
  setBody: (value: string) => void;
  insertIntoManuscript: (text: string) => void;
  exportManuscript: () => void;
  isDirty: boolean;
  markSaved: () => void;
  wordCount: number;
};

const ManuscriptContext = createContext<ManuscriptContextValue | null>(null);

export function ManuscriptProvider({ children }: { children: React.ReactNode }) {
  const [bookTitle] = useState("Faith Beyond the Storm");
  const [chapterTitle] = useState("Walking in Faith When You Can't See");
  const [scripture] = useState(
    '"For we walk by faith, not by sight." — 2 Corinthians 5:7'
  );
  const [callout] = useState(
    '"Faith says, I don\'t understand, but I trust You."'
  );
  const [body, setBodyState] = useState(INITIAL_BODY);
  const [isDirty, setIsDirty] = useState(false);

  const setBody = useCallback((value: string) => {
    setBodyState(value);
    setIsDirty(true);
  }, []);

  const insertIntoManuscript = useCallback((text: string) => {
    setBodyState((prev) => `${prev.trim()}\n\n${text.trim()}`);
    setIsDirty(true);
  }, []);

  const markSaved = useCallback(() => {
    setIsDirty(false);
  }, []);

  const exportManuscript = useCallback(() => {
    const fullText = [
      bookTitle,
      chapterTitle,
      "",
      scripture,
      "",
      body,
      "",
      callout,
    ].join("\n");

    const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "faith-beyond-the-storm-chapter-3.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }, [bookTitle, chapterTitle, scripture, body, callout]);

  const wordCount = useMemo(() => {
    const text = `${chapterTitle} ${scripture} ${body} ${callout}`;
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  }, [chapterTitle, scripture, body, callout]);

  const value = useMemo(
    () => ({
      bookTitle,
      chapterTitle,
      scripture,
      callout,
      body,
      setBody,
      insertIntoManuscript,
      exportManuscript,
      isDirty,
      markSaved,
      wordCount,
    }),
    [
      bookTitle,
      chapterTitle,
      scripture,
      callout,
      body,
      setBody,
      insertIntoManuscript,
      exportManuscript,
      isDirty,
      markSaved,
      wordCount,
    ]
  );

  return (
    <ManuscriptContext.Provider value={value}>
      {children}
    </ManuscriptContext.Provider>
  );
}

export function useManuscript() {
  const context = useContext(ManuscriptContext);
  if (!context) {
    throw new Error("useManuscript must be used within ManuscriptProvider");
  }
  return context;
}
