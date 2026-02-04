import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'CalendarJet LLC',
    location: 'Lahore, Pakistan',
    period: 'Dec 2025 – Feb 2026',
    points: [
      'Developing and maintaining scalable SaaS features, including conflict-free scheduling engines and dynamic pricing systems using the MERN stack.',
      'Implementing robust security measures and payment masking protocols to ensure OWASP compliance and data protection.',
      'Optimizing application performance and UI/UX by refining AI workflows and resolving complex responsive design issues.',
      'Building enterprise-grade capabilities such as full white-labeling and custom domain integration for high-value clients.',
    ],
  },
  {
    role: 'MERN Stack Developer (FYP)',
    company: 'COMSATS University',
    location: 'Sahiwal, Pakistan',
    period: 'Sep 2024 – Nov 2025',
    points: [
      'Designed and developed a property rental platform using MERN stack (MongoDB, Express.js, React, Node.js).',
      'Implemented role-based dashboards for tenants and property owners, integrating features like property listings, subscription plans, booking requests, and reviews.',
      'Built secure authentication with OTP verification and Stripe payment integration for plan subscriptions.',
      'Developed property search with filters (city, rent, property type), ensuring a smooth and responsive user experience with Tailwind CSS.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-dark-lighter hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex shrink-0 w-10 h-10 bg-primary/10 border-2 border-primary rounded-full items-center justify-center mt-1">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <div className="flex-1 p-6 bg-dark-light rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}{' '}
                        <span className="text-slate-500">
                          &middot; {exp.location}
                        </span>
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 font-mono mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">
                          &bull;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
