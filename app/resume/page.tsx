import { FadeIn } from "@/components/FadeIn";

const experience = [
  {
    company: "All Green Electronics",
    role: "Gaming Peripheral Tester",
    period: "March 2026 – Present",
    bullets: [
      "Inspected and tested gaming peripherals from brands including but not limited to Razer, SteelSeries, Glorious, and Pulsar, verifying key functions including DPI accuracy, connectivity, and button response.",
      "Logged tested products into company SQL database, capturing SKU, model, condition, and test results to maintain accurate inventory records.",
      "Prepared and packaged gaming peripherals to shipping standards, ensuring products were protected and ready for transit.",
      "Coordinated handoff of processed inventory to the shipping department, supporting timely and accurate order fulfillment.",
      "Applied working knowledge of current gaming peripheral models and specifications to efficiently sort, assess, and process incoming products.",
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
  {
    company: "Water of Life Community Church",
    role: "Tech Student Team Lead",
    period: "April 2016 - August 2025",
    bullets: [
      "Operate and support AV systems including digital soundboards, lighting consoles, and graphics software for live events and broadcasts.",
      "Troubleshoot technical issues in real time under time-sensitive conditions, ensuring uninterrupted services.",
      "Assist with system setup, configuration, teardown, and equipment maintenance before and after events.",
      "Collaborate with technical staff to document procedures and improve setup efficiency for recurring events.",
      "Led and coordinated tech team members, delegating responsibilities and collaborating with staff to improve setup efficiency for recurring events.",
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
  "Hardware": ["Hardware & Software Troubleshooting", "Tier 1 IT Support", "Windows OS", "Linux", "SSH", "Basic Networking", "System Maintenance", "Peripheral Setup & Configuration"],
  "AV & Event Tech": ["Digital Soundboards", "Lighting Consoles", "Graphics Software", "Live Streaming Software", "AV System Setup & Teardown"],
  "Other": ["QA Testing", "Technical Documentation", "UI/UX Design", "Data Entry", "Shell Scripting", "Team Management"],
};

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Resume</h1>
          <a
            href="/Resume - Karol Espiritu.pdf"
            className="text-sm font-mono text-sky-400 border border-sky-400/30 px-3 py-1.5 rounded hover:bg-sky-400/10 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </FadeIn>

      <section className="space-y-6">
        <FadeIn>
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest">Experience</h2>
        </FadeIn>
        {experience.map((job, i) => (
          <FadeIn key={job.company} delay={i * 0.1}>
            <div className="border-l-2 border-slate-700 pl-4 space-y-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-100">{job.role}</p>
                  <p className="text-sm text-slate-400">{job.company}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="mt-2 space-y-1">
                {job.bullets.map((b) => (
                  <li key={b} className="text-sm text-slate-300 flex gap-2">
                    <span className="text-sky-400 mt-0.5">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="space-y-4">
        <FadeIn>
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest">Skills</h2>
        </FadeIn>
        <div className="space-y-3">
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.05}>
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-500">{category}</span>
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
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
