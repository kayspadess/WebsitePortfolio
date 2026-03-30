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
  "IT & Systems": ["AWS", "GCP", "Terraform", "Ansible", "Packer"],
  "Support & Operations": ["Docker", "Kubernetes", "Helm", "ArgoCD"],
  "Tools & Technologies": ["GitHub Actions", "GitLab CI", "Jenkins"],
  "Languages": ["Prometheus", "Grafana", "Loki", "Datadog"],
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
            <div key={category} className="flex flex-wrap gap-x-4 gap-y-1 items-baseline">
              <span className="text-xs font-mono text-neutral-500 w-44 shrink-0">{category}</span>
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
