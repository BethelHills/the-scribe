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
  "I can do all things through Christ who strengthens me. — Philippians 4:13",
  "Trust in the Lord with all your heart. — Proverbs 3:5",
  "Let your light shine before others. — Matthew 5:16",
  "God has not given us a spirit of fear. — 2 Timothy 1:7",
  "Wait on the Lord; be of good courage. — Psalm 27:14",
  "His mercies are new every morning. — Lamentations 3:23",
  "The joy of the Lord is your strength. — Nehemiah 8:10",
];

function pickRandom<T>(items: T[], exclude?: T): T {
  const pool = exclude ? items.filter((item) => item !== exclude) : items;
  return pool[Math.floor(Math.random() * pool.length)] ?? items[0];
}

export default function InspirationCard() {
  const [verse, setVerse] = useState(verses[0]);
  const [fade, setFade] = useState(true);

  const rotate = useCallback(() => {
    setFade(false);

    window.setTimeout(() => {
      setVerse((current) => pickRandom(verses, current));
      setFade(true);
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(rotate, 30000);
    return () => clearInterval(timer);
  }, [rotate]);

  return (
    <div className="relative min-h-[248px] overflow-hidden rounded-3xl border border-white/10">
      {/* Sunset sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4E3A7A] via-[#9B4D72] to-[#E88457]" />

      {/* Distant glow */}
      <div className="absolute bottom-[38%] left-1/2 h-24 w-[85%] -translate-x-1/2 rounded-full bg-[#FFB07A]/35 blur-3xl" />

      {/* Mountain range */}
      <div className="absolute bottom-0 left-0 right-0 h-[62%]">
        <div className="absolute bottom-0 left-[-8%] h-[78%] w-[58%] rounded-t-[100%] bg-[#1A1230]/95" />
        <div className="absolute bottom-0 left-[18%] h-[92%] w-[48%] rounded-t-[100%] bg-[#120D22]" />
        <div className="absolute bottom-0 right-[-6%] h-[88%] w-[54%] rounded-t-[100%] bg-[#1E1638]/95" />
        <div className="absolute bottom-0 right-[8%] h-[100%] w-[36%] rounded-t-[100%] bg-[#0F0B1C]" />

        {/* Cross on right peak */}
        <div className="absolute bottom-[108px] right-[78px]">
          <div className="h-9 w-[2px] rounded-full bg-white/90" />
          <div className="absolute left-1/2 top-[7px] h-[2px] w-4 -translate-x-1/2 rounded-full bg-white/90" />
        </div>
      </div>

      {/* Glass quote panel */}
      <div className="relative z-10 m-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
        <p
          className={`text-[2rem] leading-none text-[#FF9A7B] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          &ldquo;
        </p>

        <p
          className={`mt-2 text-sm leading-6 text-white transition-all duration-500 ${
            fade ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {verse}
        </p>
      </div>
    </div>
  );
}
