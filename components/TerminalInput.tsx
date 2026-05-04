"use client";

import { useState, useRef, useEffect } from "react";

const responses: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whoami      — who is this person?",
    "  skills      — list technical skills",
    "  projects    — view projects",
    "  contact     — get contact info",
    "  clear       — clear the terminal",
  ],
  whoami: "Karol Espiritu — CS student at CSUSB, aspiring DevOps engineer. Expected graduation May 2026.",
  skills: "TypeScript · Kotlin · Next.js · React · Linux · Docker · SQL · Git · SSH · Tailwind CSS",
  projects: [
    "Website Portfolio  →  github.com/kayspadess/WebsitePortfolio",
    "Linux Homelab      →  github.com/kayspadess/Homelab",
    "HabitGotchi        →  github.com/ASpoonfulOfSalt/tamagotchi-app",
  ],
  contact: [
    "GitHub    →  github.com/kayspadess",
    "LinkedIn  →  linkedin.com/in/karol-espiritu-a57b9b35a",
  ],
};

interface Line {
  type: "input" | "output" | "error";
  text: string;
}

export function TerminalInput() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: 'Type "help" to see available commands.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [...lines, { type: "input", text: cmd }];

    if (cmd === "clear") {
      setLines([{ type: "output", text: 'Type "help" to see available commands.' }]);
      setInput("");
      return;
    }

    const response = responses[cmd];
    if (response) {
      const outputs = Array.isArray(response) ? response : [response];
      outputs.forEach((text) => newLines.push({ type: "output", text }));
    } else {
      newLines.push({ type: "error", text: `command not found: ${cmd}. Try "help".` });
    }

    setLines(newLines);
    setInput("");
  }

  return (
    <div
      className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900 font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-sky-500/70" />
        <span className="ml-2 text-xs text-slate-500">interactive terminal</span>
      </div>

      <div className="p-4 space-y-1 max-h-52 overflow-y-auto">
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === "input" ? (
              <div className="flex gap-2">
                <span className="text-sky-400 select-none">karol@devops:~$</span>
                <span className="text-slate-100">{line.text}</span>
              </div>
            ) : line.type === "error" ? (
              <p className="text-red-400 pl-4">{line.text}</p>
            ) : (
              <p className="text-slate-300 pl-4">{line.text}</p>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-slate-800">
        <span className="text-sky-400 select-none shrink-0">karol@devops:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-600"
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
}
