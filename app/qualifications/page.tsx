const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "XXXX-XXXX",
    verify: "https://aws.amazon.com/verification",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    credentialId: "CKA-XXXX",
    verify: "https://training.linuxfoundation.org/certification/verify/",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    credentialId: "XXXX",
    verify: "",
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
    notes: "Relevant coursework: Networks, Operating Systems, Distributed Systems",
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
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Education</h2>
        <div className="grid gap-3">
          {education.map((edu) => (
            <div key={edu.degree} className="border-l-2 border-neutral-700 pl-4 space-y-1">
              <p className="font-medium text-neutral-100">{edu.degree}</p>
              <p className="text-sm text-neutral-400">{edu.school}</p>
              <p className="text-xs font-mono text-neutral-500">{edu.period}</p>
              {edu.notes && <p className="text-xs text-neutral-500 mt-1">{edu.notes}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
          Certifications
        </h2>
        <div className="grid gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-neutral-800 rounded-lg p-4 flex items-start justify-between gap-4"
            >
              <div className="space-y-0.5">
                <p className="font-medium text-neutral-100">{cert.name}</p>
                <p className="text-sm text-neutral-400">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="text-xs font-mono text-neutral-600">ID: {cert.credentialId}</p>
                )}
              </div>
              <div className="text-right shrink-0 space-y-1">
                <p className="text-xs font-mono text-neutral-500">{cert.date}</p>
                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:underline block"
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
          Courses & Training
        </h2>
        <ul className="space-y-2">
          {courses.map((course) => (
            <li key={course.name} className="flex items-center justify-between text-sm">
              <span className="text-neutral-300">{course.name}</span>
              <span className="text-xs font-mono text-neutral-500">{course.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
