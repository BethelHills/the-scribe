"use client";

import Image from "next/image";
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
    <div className="relative w-full overflow-hidden rounded-[28px]">
      <div className="relative aspect-[837/700] w-full">
        <Image
          src="/images/inspiration-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 88vw, 280px"
          priority
        />

        {/* Inner glass card in the artwork (837×700 reference) */}
        <div className="@container absolute left-[14.1%] top-[8.25%] h-[27.15%] w-[74%]">
          <div className="flex h-full items-start gap-[0.2rem] px-[3%] pt-[4%] sm:gap-1">
            <p className="w-[11%] shrink-0 text-left text-[clamp(1.1rem,12cqi,2rem)] leading-none text-[#FF8A7A]">
              &ldquo;
            </p>

            <p
              className={`min-w-0 flex-1 text-left text-[clamp(10px,3.6cqi,13.5px)] font-medium leading-[1.42] text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] transition-all duration-500 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              }`}
            >
              {verse}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
