import { FadeIn } from "@/components/FadeIn";
import { QualificationsPanel } from "@/components/QualificationsPanel";

const education = [
  {
    degree: "Certificate for Transfer in Computer Science",
    school: "Chaffey College",
    period: "2022 – 2024",
    notes: "",
  },
  {
    degree: "B.Sc. in Computer Science",
    school: "California State University, San Bernardino",
    period: "2024 – 2026",
    notes: "Relevant coursework: Algorithm Analysis, Digital Logic, Contemporary Computer Architecture, Operating Systems, Networking and Security, Database Systems, Software Engineering, Numerical Computation, Computer Graphics, Intro to Artificial Intelligence, Machine Learning, Data Science, Compilers, Formal Languages & Automation, Parallel Algorithms & Programming",
  },
];

const certifications = [
  { name: "CompTIA A+", issuer: "CompTIA", status: "studying" },
  { name: "CompTIA Network+", issuer: "CompTIA", status: "planned" },
  { name: "CompTIA Security+", issuer: "CompTIA", status: "planned" },
];

const courses = [
  { name: "DataCamp: Introduction to SQL", year: "2025" },
  { name: "DataCamp: Intermediate SQL", year: "2025" },
];

export default function QualificationsPage() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <h1 className="text-2xl font-bold">Qualifications</h1>
      </FadeIn>

      <FadeIn>
        <QualificationsPanel
          education={education}
          certifications={certifications}
          courses={courses}
        />
      </FadeIn>
    </div>
  );
}
