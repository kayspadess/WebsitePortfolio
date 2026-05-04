const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    status: "studying",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    status: "planned",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    status: "planned",
  },
];

const education = [
 {  degree: "Certifcate for Transfer in Computer Science",
    school: "Chaffey College",
    period: "2022 – 2024",
   }, 
  
{
    degree: "B.Sc. in Computer Science",
    school: "California State University, San Bernardino",
    period: "2024 – 2026",
    notes: "Relevant coursework: Algorithm Analysis, Digital Logic, Contemporary Computer Architecture, Operating Systems, Networking and Security, Database Systems, Software Engineering, Numberical Computation, Computer Graphics, Intro to Artificial Intelligence, Machine Learning, Data Science, Compilers, Formal Languages & Automation, Parallel Alogrithms & Programming",
  },
];

const courses = [
  { name: "DataCamp: Introduction to SQL", year: "2025" },
  { name: "DataCamp: Intermediate SQL", year: "2025" },
];

export default function CredentialsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold">Qualifications</h1>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest">Education</h2>
        <div className="grid gap-3">
          {education.map((edu) => (
            <div key={edu.degree} className="border-l-2 border-slate-700 pl-4 space-y-1">
              <p className="font-medium text-slate-100">{edu.degree}</p>
              <p className="text-sm text-slate-400">{edu.school}</p>
              <p className="text-xs font-mono text-slate-500">{edu.period}</p>
              {edu.notes && <p className="text-xs text-slate-500 mt-1">{edu.notes}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
          Certifications
        </h2>
        <div className="grid gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-slate-800 rounded-lg p-4 flex items-start justify-between gap-4"
            >
              <div className="space-y-0.5">
                <p className="font-medium text-slate-100">{cert.name}</p>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full shrink-0 ${
                cert.status === "studying"
                  ? "text-sky-400 bg-sky-400/10"
                  : "text-slate-500 bg-slate-800"
              }`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
          Courses & Training
        </h2>
        <ul className="space-y-2">
          {courses.map((course) => (
            <li key={course.name} className="flex items-center justify-between text-sm">
              <span className="text-slate-300">{course.name}</span>
              <span className="text-xs font-mono text-slate-500">{course.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
