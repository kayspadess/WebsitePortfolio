"use client";

import { useState } from "react";

interface Job {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export function ExperienceCarousel({ experience }: { experience: Job[] }) {
  const [current, setCurrent] = useState(0);
  const job = experience[current];

  return (
    <div className="space-y-4">
      {/* Card */}
      <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900 hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-200">
        {/* Terminal chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-sky-500/70" />
          <span className="ml-2 text-xs font-mono text-slate-500">
            {job.company.toLowerCase().replace(/\s+/g, "-")}
          </span>
          <span className="ml-auto text-xs font-mono text-slate-600">
            {current + 1}/{experience.length}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-100">{job.role}</p>
              <p className="text-sm text-slate-400">{job.company}</p>
            </div>
            <span className="text-xs font-mono text-slate-500 whitespace-nowrap shrink-0">{job.period}</span>
          </div>
          <ul className="space-y-1.5">
            {job.bullets.map((b) => (
              <li key={b} className="text-sm text-slate-300 flex gap-2">
                <span className="text-sky-400 mt-0.5 shrink-0">›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="px-3 py-1.5 text-xs font-mono border border-slate-700 rounded text-slate-400 hover:border-sky-400/50 hover:text-sky-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          ← prev
        </button>

        <div className="flex gap-2">
          {experience.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-sky-400 scale-125" : "bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((c) => Math.min(experience.length - 1, c + 1))}
          disabled={current === experience.length - 1}
          className="px-3 py-1.5 text-xs font-mono border border-slate-700 rounded text-slate-400 hover:border-sky-400/50 hover:text-sky-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          next →
        </button>
      </div>
    </div>
  );
}
