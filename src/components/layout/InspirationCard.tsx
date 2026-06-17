"use client";

import { useEffect, useState } from "react";

const verses = [
  "Your words are a vessel. We help you fill it with purpose.",
  "For we walk by faith, not by sight. — 2 Corinthians 5:7",
  "Peace I leave with you, my peace I give unto you. — John 14:27",
  "Fear not, for I am with you. — Isaiah 41:10",
  "All things work together for good. — Romans 8:28",
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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#2B1E5C] via-[#B64A77] to-[#FF8A5B] p-5 text-white min-h-[210px]">
      <p className="text-3xl leading-none text-white/80">"</p>

      <p className="relative z-10 mt-2 text-sm leading-6 text-white/90 transition-all duration-500">
        {verses[index]}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-[120px]">
        <div className="absolute bottom-0 left-0 h-[90px] w-[170px] rounded-tr-[100px] bg-[#241845]" />
        <div className="absolute bottom-0 left-[70px] h-[125px] w-[170px] rounded-t-[120px] bg-[#17122B]" />
        <div className="absolute bottom-0 right-0 h-[95px] w-[160px] rounded-tl-[100px] bg-[#2C1D55]" />

        <div className="absolute bottom-[72px] left-[145px] h-12 w-[2px] bg-white/90" />
        <div className="absolute bottom-[92px] left-[135px] h-[2px] w-6 bg-white/90" />

        <div className="absolute bottom-[20px] left-[20px] h-[35px] w-[80px] rounded-full bg-white/10 blur-xl" />
        <div className="absolute bottom-[30px] right-[35px] h-[40px] w-[90px] rounded-full bg-white/10 blur-xl" />
      </div>
    </div>
  );
}
