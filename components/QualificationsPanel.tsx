"use client";

import { useState } from "react";

interface Cert {
  name: string;
  issuer: string;
  status: string;
}

interface Edu {
  degree: string;
  school: string;
  period: string;
  notes: string;
}

interface Course {
  name: string;
  year: string;
}

const tabs = ["Education", "Certifications", "Courses & Training"] as const;
type Tab = (typeof tabs)[number];

export function QualificationsPanel({
  education,
  certifications,
  courses,
}: {
  education: Edu[];
  certifications: Cert[];
  courses: Course[];
}) {
  const [active, setActive] = useState<Tab>("Education");

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex gap-1.5 border-b border-slate-800 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
              tab === active
                ? "bg-sky-400/10 text-sky-400 border border-sky-400/40"
                : "text-slate-500 border border-slate-700 hover:text-slate-300 hover:border-slate-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Education */}
      {active === "Education" && (
        <div className="grid gap-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900 hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-200"
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-sky-500/70" />
                <span className="ml-2 text-xs font-mono text-slate-500">{edu.school.toLowerCase().replace(/\s+/g, "-")}</span>
              </div>
              <div className="p-4 space-y-1">
                <p className="font-medium text-slate-100">{edu.degree}</p>
                <p className="text-sm text-slate-400">{edu.school}</p>
                <p className="text-xs font-mono text-sky-400">{edu.period}</p>
                {edu.notes && (
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{edu.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {active === "Certifications" && (
        <div className="grid gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-slate-700 rounded-lg p-4 flex items-center justify-between gap-4 bg-slate-900 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/10 transition-all duration-200"
            >
              <div className="space-y-0.5">
                <p className="font-medium text-slate-100">{cert.name}</p>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full shrink-0 ${
                cert.status === "studying"
                  ? "text-sky-400 bg-sky-400/10 border border-sky-400/30"
                  : "text-slate-500 bg-slate-800 border border-slate-700"
              }`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Courses */}
      {active === "Courses & Training" && (
        <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-sky-500/70" />
            <span className="ml-2 text-xs font-mono text-slate-500">courses.log</span>
          </div>
          <ul className="divide-y divide-slate-800">
            {courses.map((course) => (
              <li
                key={course.name}
                className="flex items-center justify-between px-4 py-3 text-sm hover:bg-slate-800/50 transition-colors"
              >
                <span className="text-slate-300 font-mono text-xs">{course.name}</span>
                <span className="text-xs font-mono text-sky-400">{course.year}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
