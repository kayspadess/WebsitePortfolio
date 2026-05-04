"use client";

import { useState } from "react";

export function SkillsCarousel({ skills }: { skills: Record<string, string[]> }) {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(0);
  const items = skills[categories[active]];

  return (
    <div className="space-y-3">
      {/* Category tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat, i) => (
          <button
            key={cat}
            onClick={() => setActive(i)}
            className={`px-2.5 py-1 text-xs font-mono rounded whitespace-nowrap transition-all shrink-0 ${
              i === active
                ? "bg-sky-400/10 text-sky-400 border border-sky-400/40"
                : "text-slate-500 border border-slate-700 hover:text-slate-300 hover:border-slate-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills for active category */}
      <div className="border border-slate-700 rounded-lg p-3 bg-slate-900 min-h-16">
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 font-mono hover:border-sky-400/50 hover:text-sky-300 hover:shadow-sm hover:shadow-sky-400/30 transition-all duration-150 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
