"use client";

import { useEffect, useState } from "react";

const verses = [
  "Your words are a vessel. We help you fill it with purpose.",
  "For we walk by faith, not by sight. — 2 Corinthians 5:7",
  "Peace I leave with you, my peace I give unto you. — John 14:27",
  "Fear not, for I am with you. — Isaiah 41:10",
];

export default function InspirationCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % verses.length);
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-cover bg-center p-5 text-white"
      style={{
        backgroundImage: "url('/images/inspiration-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10">
        <p className="text-5xl leading-none text-[#FF8A7A]">&ldquo;</p>

        <p className="mt-3 max-w-[190px] text-[17px] font-medium leading-7 text-white/90">
          {verses[index]}
        </p>
      </div>
    </div>
  );
}
