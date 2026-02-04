import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'COMSATS University Islamabad (Sahiwal Campus)',
    period: 'Feb 2022 – Mar 2026',
    location: 'Pakistan',
  },
  {
    degree: 'F.Sc Pre-Engineering (GED)',
    institution: 'Punjab Group of Colleges',
    period: 'Jul 2021',
    location: 'Pir Mahal, Pakistan',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          <span className="text-primary">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 bg-dark-light rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-slate-500 text-sm font-mono mt-1">
                  {edu.period} &middot; {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
