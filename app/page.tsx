import { TypedText } from "@/components/TypedText";

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
    <div className="space-y-10">
      <section className="flex flex-col sm:flex-row gap-8 items-start">
        <div className="space-y-2">
          <Prompt command="whoami" delay={200} />
          <h1 className="text-3xl font-bold text-slate-100">Karol Espiritu</h1>
          <p className="mt-1 text-sky-400 font-mono">DevOps Engineer</p>
        </div>

        <div className="shrink-0 sm:ml-auto">
          <div className="w-36 h-36 border-2 border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center gap-2 bg-slate-900/60 font-mono">
            <span className="text-2xl font-bold text-slate-500">KE</span>
            <span className="text-xs text-slate-600 text-center leading-tight px-2">// add photo<br/>here</span>
          </div>
        </div>
      </section>

      <section>
        <Prompt command="cat about.txt" delay={800} />
        <div className="space-y-3 text-slate-300 leading-relaxed max-w-2xl text-justify">
          <p>
            A Computer Science student at Cal State San Bernardino expecting to graduate in May 2026, with a passion for building reliable systems and a goal of becoming a DevOps engineer.
          </p>
          <p>
            I have hands-on experience providing Tier 1 IT support, managing and troubleshooting high-performance systems, and working with SQL-based inventory systems. On the project side, I&apos;ve built Android apps using structured architecture and I&apos;m currently building a Linux homelab where I&apos;ll be practicing SSH administration, network segmentation, storage management, and system hardening — the same fundamentals that underpin real production environments.
          </p>
          <p>
            I currently work two roles: as a Student Assistant at <span className="font-bold text-sky-400">CSUSB&apos;s Esports Arena</span>, where I provide technical support and maintenance for 18 high-performance gaming workstations, and at <span className="font-bold text-sky-400">All Green Electronics</span>, where I test gaming peripherals, manage inventory through a SQL-based system, and handle packaging and shipping logistics.
          </p>
        </div>
      </section>

      <section>
        <Prompt command="ls stack/" delay={1600} />
        <div className="flex flex-wrap gap-2">
          {["TypeScript", "JavaScript", "CSS", "Kotlin", "Next.js", "React", "Tailwind CSS", "Android Studio", "Jetpack Compose", "MVVM Architecture", "Room Database", "DataStore", "Android ViewModel", "StateFlow", "Gradle", "Git", "GitHub", "Linux", "SSH", "SQL"].map(
            (tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm text-slate-300 font-mono"
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

      <section>
        <div className="font-mono text-sm text-slate-500 flex items-center gap-1 select-none">
          <span className="text-sky-400">karol@devops</span>
          <span>:~$</span>
          <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse" />
        </div>
      </section>
    </div>
  );
}
