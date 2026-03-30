export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-neutral-100">
          Hi, I&apos;m <span className="text-sky-400">Karol Espiritu</span>
        </h1>
        <p className="mt-2 text-lg text-sky-400 font-mono">DevOps Engineer</p>
      </section>

      <section className="text-justify space-y-3 text-neutral-300 leading-relaxed max-w-2xl">
        <p>
          Hi, I&apos;m Karol Espiritu — a Computer Science student at Cal State San Bernardino expecting to graduate in May 2026, with a passion for building reliable systems and a goal of becoming a DevOps engineer.
        </p>
        <p>
          I have hands-on experience providing Tier 1 IT support, managing and troubleshooting high-performance systems, and working with SQL-based inventory systems. On the project side, I&apos;ve built Android apps using structured architecture and I&apos;m currently building a Linux homelab where I&apos;ll be practicing SSH administration, network segmentation, storage management, and system hardening — the same fundamentals that underpin real production environments.
        </p>
        <p>
          I currently work two roles: as a Student Assistant at <span className="font-bold text-sky-400">CSUSB&apos;s Esports Arena</span>, where I provide technical support and maintenance for 18 high-performance gaming workstations, and at <span className="font-bold text-sky-400">All Green Electronics</span>, where I test gaming peripherals, manage inventory through a SQL-based system, and handle packaging and shipping logistics.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3">
          Current Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Kubernetes", "Terraform", "AWS", "Docker", "GitHub Actions", "Linux", "Python", "Ansible"].map(
            (tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded text-sm text-neutral-300 font-mono"
              >
                {tool}
              </span>
            )
          )}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3">
          Links
        </h2>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-mono"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-mono"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
