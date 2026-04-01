const projects = [
  {
    name: "Website Portfolio",
    description:
      "A responsive website showcasing my projects and skills.",
    tags: ["TypeScript", "Tailwind CSS", "JavaScript", "Next.js"],
    repo: "https://github.com/kayspadess/WebsitePortfolio",
    status: "active",
  },
  {
    name: "Linux Homelab & Infrastructure",
    description:
      "Refurbished server setup with Linux OS, containerization, and automation.",
    tags: ["Linux", "Docker", "SSH", "Basic Networking", "System Maintenance"],
    repo: "https://github.com/kayspadess/Homelab",
    status: "active",
  },
  {
    name: "HabitGotchi",
    description:
      "A wellness-based Tamagotchi habit tracker built in Kotlin with Jetpack Compose.",
    tags: ["Kotlin", "Jetpack Compose", "Android Studio"],
    repo: "https://github.com/ASpoonfulOfSalt/tamagotchi-app",
    status: "archived",
  },
];

const statusColor: Record<string, string> = {
  active: "text-blue-400 bg-blue-400/10",
  wip: "text-yellow-400 bg-yellow-400/10",
  archived: "text-neutral-500 bg-neutral-800",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-neutral-800 rounded-lg p-5 space-y-3 hover:border-neutral-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold text-neutral-100">{project.name}</h2>
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded-full shrink-0 ${statusColor[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-neutral-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:underline font-mono shrink-0"
                >
                  View →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
