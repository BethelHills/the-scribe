"use client";

import { useCallback, useEffect, useState } from "react";

const verses = [
  "Your words are a vessel. We help you fill it with purpose.",
  "For we walk by faith, not by sight. — 2 Corinthians 5:7",
  "Peace I leave with you, my peace I give unto you. — John 14:27",
  "Fear not, for I am with you. — Isaiah 41:10",
  "All things work together for good. — Romans 8:28",
  "Write the vision; make it plain. — Habakkuk 2:2",
  "The Lord is my shepherd; I shall not want. — Psalm 23:1",
  "Be still, and know that I am God. — Psalm 46:10",
];

function pickRandomVerse(current: string) {
  const pool = verses.filter((verse) => verse !== current);
  return pool[Math.floor(Math.random() * pool.length)] ?? verses[0];
}

export default function InspirationCard() {
  const [verse, setVerse] = useState(verses[0]);
  const [visible, setVisible] = useState(true);

  const rotate = useCallback(() => {
    setVisible(false);

    window.setTimeout(() => {
      setVerse((current) => pickRandomVerse(current));
      setVisible(true);
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(rotate, 30000);
    return () => clearInterval(timer);
  }, [rotate]);

  return (
    <div
      className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-cover bg-bottom text-white"
      style={{
        backgroundImage: "url('/images/inspiration-bg.png')",
      }}
    >
      {/* Masks baked-in quote/text from the image */}
      <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-[#4A3568]/95 via-[#5E4070]/88 to-transparent backdrop-blur-[3px]" />

      <div className="absolute left-5 right-5 top-5 z-10 flex min-h-[88px] items-center">
        <p
          className={`max-w-[200px] text-[16px] font-medium leading-[1.65] text-white/95 transition-all duration-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {verse}
        </p>
      </div>
    </div>
  );
}
