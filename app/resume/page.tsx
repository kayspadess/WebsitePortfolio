const experience = [
  {
    company: "All Green Electronics",
    role: "Gaming Peripheral Tester",
    period: "March 2026 – Present",
    bullets: [
      "Managed Kubernetes clusters on AWS EKS serving X microservices",
      "Reduced deployment time by X% by building CI/CD pipelines with GitHub Actions",
      "Wrote Terraform modules for VPC, EKS, and RDS infrastructure",
    ],
  },
  {
    company: "Santos Manuel Student Union",
    role: "Esports Student Assistant",
    period: "May 2025 – Present",
    bullets: [
      "Provide Tier 1 technical support for 18 high-performance gaming workstations, resolving hardware, software, and connectivity issues to maintain consistent system uptime.",
      "Diagnose and troubleshoot OS-level issues, application failures, and peripheral malfunctions, reducing downtime during peak usage hours.",
      "Perform routine system maintenance, updates, and performance checks to ensure stable and secure workstation environments.",
      "Track and manage IT inventory, assisting with hardware upgrades, replacements, and new installations.",
      "Deliver clear, customer-focused technical assistance to students and faculty, translating technical concepts into understandable solutions.",
    ],
  },
];

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Kotlin", "Python", "R", "SQL"],
  "Frameworks & Libraries": ["Next.js", "React", "Jetpack Compose"],
  "Mobile Development": ["Android Studio", "MVVM Architecture", "Room Database", "DataStore", "ViewModel", "StateFlow", "Coroutines"],
  "Web & Development": ["Tailwind CSS", "Vercel", "Supabase"],
  "Tools & Version Control": ["Git", "Linux", "Windows", "macOS"],
  "IT & Systems": ["Git", "GitHub", "Gradle"],
  "Hardware": ["Hardware & Software Troubleshooting", "Tier 1 IT Support", "Windows OS", "Linux", "SSH", "Basic Networking", "System Maitenance", "Peripheral Setup & Configuration"],
  "AV & Event Tech": ["Digital Soundboards", "Lighting Consoles", "Graphics Software", "Live Streaming Software", "AV System Setup & Teardown"],
  "Other" : ["QA Testing", "Technical Documentation", "UI/UX Design", "Data Entry", "Shell Scripting", "Team Management"],
};

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Resume</h1>
        <a
          href="/resume.pdf"
          className="text-sm font-mono text-blue-400 border border-blue-400/30 px-3 py-1.5 rounded hover:bg-blue-400/10 transition-colors"
        >
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
          Experience
        </h2>
        {experience.map((job) => (
          <div key={job.company} className="border-l-2 border-neutral-700 pl-4 space-y-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-neutral-100">{job.role}</p>
                <p className="text-sm text-neutral-400">{job.company}</p>
              </div>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap">{job.period}</span>
            </div>
            <ul className="mt-2 space-y-1">
              {job.bullets.map((b) => (
                <li key={b} className="text-sm text-neutral-300 flex gap-2">
                  <span className="text-blue-400 mt-0.5">›</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Skills</h2>
        <div className="space-y-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-1.5">
              <span className="text-xs font-mono text-neutral-500">{category}</span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-neutral-300 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
