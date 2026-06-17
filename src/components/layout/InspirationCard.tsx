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
    <div className="relative min-h-[300px] overflow-hidden rounded-[34px] bg-gradient-to-b from-[#321F5F] via-[#B84878] to-[#FF8566] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <div className="relative z-20">
        <p className="text-6xl leading-none text-[#FF8A7A]">&ldquo;</p>

        <p className="mt-4 max-w-[210px] text-[22px] font-medium leading-[1.45] text-white/85 transition-all duration-700">
          {verses[index]}
        </p>
      </div>

      {/* glowing sky */}
      <div className="absolute inset-x-0 bottom-[70px] h-28 bg-gradient-to-t from-[#FF9A6B]/80 to-transparent blur-xl" />

      {/* far mountains */}
      <div className="absolute bottom-[55px] left-0 h-[95px] w-[180px] rounded-tr-[120px] bg-[#3A245F]/70" />
      <div className="absolute bottom-[65px] left-[110px] h-[90px] w-[170px] rounded-t-[120px] bg-[#4A2A6A]/60" />
      <div className="absolute bottom-[75px] left-[210px] h-[75px] w-[120px] rounded-t-[100px] bg-[#6E3A72]/50" />

      {/* foreground mountains */}
      <div className="absolute bottom-0 left-[-40px] h-[150px] w-[230px] rounded-tr-[180px] bg-[#1D1738]" />
      <div className="absolute bottom-0 left-[95px] h-[130px] w-[210px] rounded-t-[160px] bg-[#21133E]" />
      <div className="absolute bottom-0 right-[-35px] h-[210px] w-[250px] rounded-tl-[180px] bg-[#17122B]" />

      {/* hill highlight */}
      <div className="absolute bottom-[45px] right-[28px] h-[150px] w-[115px] rotate-[28deg] rounded-t-full bg-[#2C1B4B]/60" />

      {/* main cross */}
      <div className="absolute bottom-[135px] right-[96px] z-20 h-16 w-[5px] rounded-full bg-[#15122D]" />
      <div className="absolute bottom-[158px] right-[82px] z-20 h-[5px] w-9 rounded-full bg-[#15122D]" />

      {/* small far cross */}
      <div className="absolute bottom-[105px] left-[185px] z-10 h-8 w-[2px] bg-[#5E315F]/70" />
      <div className="absolute bottom-[118px] left-[179px] z-10 h-[2px] w-4 bg-[#5E315F]/70" />

      {/* soft clouds */}
      <div className="absolute bottom-[95px] left-[40px] h-10 w-28 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-[120px] right-[80px] h-12 w-32 rounded-full bg-white/10 blur-2xl" />
    </div>
  );
}
