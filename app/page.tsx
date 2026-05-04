import { TypedText } from "@/components/TypedText";
import { TerminalInput } from "@/components/TerminalInput";

function Prompt({ command, delay = 0 }: { command: string; delay?: number }) {
  return (
    <div className="font-mono text-sm text-slate-500 mb-3 select-none">
      <span className="text-sky-400">karol@devops</span>
      <span>:~$ </span>
      <span className="text-slate-300">
        <TypedText text={command} delay={delay} />
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[2fr_auto_2fr] gap-8 lg:gap-6 lg:items-start">

      {/* LEFT — text content */}
      <div className="space-y-8 min-w-0">
        <section>
          <Prompt command="whoami" delay={200} />
          <h1 className="text-2xl font-bold text-slate-100">Karol Espiritu</h1>
          <p className="mt-1 text-sky-400 font-mono text-sm">DevOps Engineer</p>
        </section>

        <section>
          <Prompt command="cat about.txt" delay={800} />
          <div className="space-y-3 text-slate-300 leading-relaxed text-sm text-justify">
            <p>
              A Computer Science student at Cal State San Bernardino expecting to graduate in May 2026, with a passion for building reliable systems and a goal of becoming a DevOps engineer.
            </p>
            <p>
              I have hands-on experience providing Tier 1 IT support, managing and troubleshooting high-performance systems, and working with SQL-based inventory systems. I&apos;m currently building a Linux homelab to practice SSH administration, network segmentation, storage management, and system hardening.
            </p>
            <p>
              I work as a Student Assistant at <span className="font-bold text-sky-400">CSUSB&apos;s Esports Arena</span> and at <span className="font-bold text-sky-400">All Green Electronics</span>, where I test gaming peripherals and manage inventory through a SQL-based system.
            </p>
          </div>
        </section>

        <section>
          <Prompt command="ls stack/" delay={1600} />
          <div className="flex flex-wrap gap-1.5">
            {["TypeScript", "JavaScript", "CSS", "Kotlin", "Next.js", "React", "Tailwind CSS", "Android Studio", "Jetpack Compose", "MVVM Architecture", "Room Database", "DataStore", "Android ViewModel", "StateFlow", "Gradle", "Git", "GitHub", "Linux", "SSH", "SQL"].map(
              (tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300 font-mono hover:border-sky-400/50 hover:text-sky-300 hover:shadow-sm hover:shadow-sky-400/30 transition-all duration-150 cursor-default"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </section>

        <section>
          <Prompt command="cat links.txt" delay={2200} />
          <div className="flex gap-4 text-sm">
            <a href="https://github.com/kayspadess" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline font-mono">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/karol-espiritu-a57b9b35a/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline font-mono">
              LinkedIn
            </a>
          </div>
        </section>
      </div>

      {/* MIDDLE — profile photo + name */}
      <div className="flex lg:flex-col items-center gap-4 lg:gap-3 lg:pt-8">
        <div className="w-32 h-32 lg:w-40 lg:h-40 shrink-0 border-2 border-dashed border-slate-600 rounded-xl flex flex-col items-center justify-center gap-2 bg-slate-900/60 font-mono">
          <span className="text-2xl font-bold text-slate-500">KE</span>
          <span className="text-xs text-slate-600 text-center leading-tight px-2">// add photo<br/>here</span>
        </div>
        <div className="lg:text-center">
          <p className="font-semibold text-slate-100 font-mono text-sm">Karol Espiritu</p>
          <p className="text-xs text-sky-400 font-mono">DevOps Engineer</p>
        </div>
      </div>

      {/* RIGHT — interactive terminal */}
      <div className="space-y-3 min-w-0 lg:pt-8">
        <div className="font-mono text-sm text-slate-500 flex items-center gap-1 select-none">
          <span className="text-sky-400">karol@devops</span>
          <span>:~$</span>
          <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse" />
        </div>
        <TerminalInput />
      </div>

    </div>
  );
}
