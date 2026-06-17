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

type LandscapeTheme = {
  id: string;
  card: string;
  quote: string;
  text: string;
  shapes: string[];
  accents: string[];
};

const themes: LandscapeTheme[] = [
  {
    id: "sunset-valley",
    card: "bg-gradient-to-b from-[#2B1E5C] via-[#B64A77] to-[#FF8A5B]",
    quote: "text-white/80",
    text: "text-white/90",
    shapes: [
      "absolute bottom-0 left-0 h-[90px] w-[170px] rounded-tr-[100px] bg-[#241845]",
      "absolute bottom-0 left-[70px] h-[125px] w-[170px] rounded-t-[120px] bg-[#17122B]",
      "absolute bottom-0 right-0 h-[95px] w-[160px] rounded-tl-[100px] bg-[#2C1D55]",
    ],
    accents: [
      "absolute bottom-[72px] left-[145px] h-12 w-[2px] bg-white/90",
      "absolute bottom-[92px] left-[135px] h-[2px] w-6 bg-white/90",
      "absolute bottom-[20px] left-[20px] h-[35px] w-[80px] rounded-full bg-white/10 blur-xl",
      "absolute bottom-[30px] right-[35px] h-[40px] w-[90px] rounded-full bg-white/10 blur-xl",
    ],
  },
  {
    id: "ocean-night",
    card: "bg-gradient-to-b from-[#0B1B3A] via-[#1A4A6E] to-[#3BA4C7]",
    quote: "text-cyan-100/80",
    text: "text-cyan-50/95",
    shapes: [
      "absolute bottom-0 left-0 h-[70px] w-full rounded-t-[60%] bg-[#0E2A4A]/80",
      "absolute bottom-0 left-[-20px] h-[55px] w-[200px] rounded-t-[100px] bg-[#153B5C]",
      "absolute bottom-0 right-[-10px] h-[65px] w-[180px] rounded-t-[90px] bg-[#1B4D6E]",
    ],
    accents: [
      "absolute top-5 right-6 h-2 w-2 rounded-full bg-white/70",
      "absolute top-10 right-14 h-1.5 w-1.5 rounded-full bg-white/50",
      "absolute top-7 right-20 h-1 w-1 rounded-full bg-white/40",
      "absolute bottom-[45px] left-1/2 h-[2px] w-10 -translate-x-1/2 bg-white/30",
    ],
  },
  {
    id: "golden-dawn",
    card: "bg-gradient-to-b from-[#3D1F5C] via-[#C45C26] to-[#F5C56B]",
    quote: "text-amber-100/90",
    text: "text-amber-50/95",
    shapes: [
      "absolute bottom-0 left-0 h-[80px] w-[150px] rounded-tr-[80px] bg-[#5A2D14]/70",
      "absolute bottom-0 left-[60px] h-[100px] w-[140px] rounded-t-[100px] bg-[#3A1A0F]",
      "absolute bottom-0 right-0 h-[75px] w-[130px] rounded-tl-[90px] bg-[#6B3A1A]/80",
    ],
    accents: [
      "absolute top-6 right-8 h-10 w-10 rounded-full bg-[#FFE08A]/40 blur-[1px]",
      "absolute top-8 right-10 h-6 w-6 rounded-full bg-[#FFF4C2]/60",
      "absolute bottom-[25px] left-[30px] h-[30px] w-[70px] rounded-full bg-white/15 blur-xl",
    ],
  },
  {
    id: "lavender-mist",
    card: "bg-gradient-to-b from-[#2A1B4A] via-[#7C4DFF] to-[#E8B4F8]",
    quote: "text-purple-100/80",
    text: "text-purple-50/95",
    shapes: [
      "absolute bottom-0 left-[-15px] h-[85px] w-[190px] rounded-t-[110px] bg-[#3A2560]/90",
      "absolute bottom-0 left-[80px] h-[110px] w-[150px] rounded-t-[120px] bg-[#2D1A52]",
      "absolute bottom-0 right-[-5px] h-[70px] w-[150px] rounded-tl-[100px] bg-[#4A2F7A]/80",
    ],
    accents: [
      "absolute top-8 left-8 h-3 w-3 rotate-45 bg-white/30",
      "absolute top-14 right-10 h-2 w-2 rotate-45 bg-white/25",
      "absolute bottom-[40px] right-[40px] h-[40px] w-[40px] rounded-full bg-white/10 blur-2xl",
    ],
  },
  {
    id: "forest-twilight",
    card: "bg-gradient-to-b from-[#0F1F1A] via-[#1E4D3B] to-[#5FA88A]",
    quote: "text-emerald-100/80",
    text: "text-emerald-50/95",
    shapes: [
      "absolute bottom-0 left-0 h-[95px] w-[120px] rounded-t-[40px] bg-[#0B1814]",
      "absolute bottom-0 left-[50px] h-[115px] w-[100px] rounded-t-[30px] bg-[#142820]",
      "absolute bottom-0 left-[110px] h-[90px] w-[110px] rounded-t-[35px] bg-[#0F2219]",
      "absolute bottom-0 right-0 h-[80px] w-[140px] rounded-tl-[100px] bg-[#1A3D2E]",
    ],
    accents: [
      "absolute bottom-[70px] left-[95px] h-10 w-[2px] bg-white/50",
      "absolute bottom-[88px] left-[88px] h-[2px] w-5 bg-white/50",
      "absolute top-6 right-7 h-1.5 w-1.5 rounded-full bg-white/60",
    ],
  },
  {
    id: "rose-horizon",
    card: "bg-gradient-to-b from-[#1A1228] via-[#8E3A59] to-[#FF9A7B]",
    quote: "text-rose-100/80",
    text: "text-rose-50/95",
    shapes: [
      "absolute bottom-0 left-0 h-[60px] w-full bg-gradient-to-t from-[#2A1520] to-transparent",
      "absolute bottom-0 left-[20px] h-[85px] w-[160px] rounded-t-[100px] bg-[#3A1A28]",
      "absolute bottom-0 right-[15px] h-[70px] w-[150px] rounded-tl-[90px] bg-[#4A2035]/90",
    ],
    accents: [
      "absolute top-5 left-6 h-8 w-8 rounded-full border border-white/20",
      "absolute bottom-[35px] left-1/2 h-[1px] w-16 -translate-x-1/2 bg-white/25",
      "absolute bottom-[50px] right-[50px] h-6 w-6 rounded-full bg-white/10 blur-md",
    ],
  },
];

function pickRandom<T>(items: T[], exclude?: T): T {
  const pool = exclude ? items.filter((item) => item !== exclude) : items;
  return pool[Math.floor(Math.random() * pool.length)] ?? items[0];
}

export default function InspirationCard() {
  const [verse, setVerse] = useState(verses[0]);
  const [theme, setTheme] = useState(themes[0]);
  const [fade, setFade] = useState(true);

  const rotate = useCallback(() => {
    setFade(false);

    window.setTimeout(() => {
      setVerse((current) => pickRandom(verses, current));
      setTheme((current) => pickRandom(themes, current));
      setFade(true);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(rotate, 30000);
    return () => clearInterval(timer);
  }, [rotate]);

  return (
    <div
      className={`relative min-h-[210px] overflow-hidden rounded-3xl p-5 text-white transition-all duration-700 ${theme.card}`}
    >
      <p className={`text-3xl leading-none transition-opacity duration-500 ${theme.quote} ${fade ? "opacity-100" : "opacity-0"}`}>
        &ldquo;
      </p>

      <p
        className={`relative z-10 mt-2 text-sm leading-6 transition-all duration-500 ${theme.text} ${
          fade ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {verse}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-[120px] transition-opacity duration-700">
        {theme.shapes.map((shape) => (
          <div key={shape} className={shape} />
        ))}
        {theme.accents.map((accent) => (
          <div key={accent} className={accent} />
        ))}
      </div>
    </div>
  );
}
