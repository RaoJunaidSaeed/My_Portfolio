import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'RentoFix',
    description:
      'Full-stack property rental platform featuring real-time updates via Socket.io, Stripe payment integration, Cloudinary image storage, and an admin dashboard.',
    tech: ['React', 'Vite', 'Express.js', 'MongoDB', 'Socket.io', 'Stripe', 'Cloudinary'],
    github: 'https://github.com/RaoJunaidSaeed',
    live: null,
  },
  {
    title: 'The Wild Oasis',
    description:
      'Next.js 14 cabin reservation platform with Supabase backend, Google OAuth authentication via NextAuth.js, server actions, and optimized image loading.',
    tech: ['Next.js 14', 'Supabase', 'NextAuth.js', 'Google OAuth', 'Tailwind CSS'],
    github: 'https://github.com/RaoJunaidSaeed/the-wild-oasis',
    live: 'https://the-wild-oasis-rmj.vercel.app/',
  },
  {
    title: 'CalendarJet SaaS',
    description:
      'Enterprise scheduling platform with conflict-free booking engines, dynamic pricing systems, white-labeling, and custom domain integration for clients.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AI Workflows'],
    github: null,
    live: 'https://www.calendarjet.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-dark-light/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 bg-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header with title and links */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 bg-primary/5 text-slate-400 rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
