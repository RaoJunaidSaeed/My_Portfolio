import { Code2, Server, Database, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: <Code2 size={24} />,
    title: 'Frontend',
    desc: 'React, Next.js, Redux, Tailwind CSS',
  },
  {
    icon: <Server size={24} />,
    title: 'Backend',
    desc: 'Node.js, Express.js, RESTful APIs',
  },
  {
    icon: <Database size={24} />,
    title: 'Database',
    desc: 'MongoDB, Supabase',
  },
  {
    icon: <Rocket size={24} />,
    title: 'DevOps',
    desc: 'CI/CD, Vercel, GitHub, Postman',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-300 text-lg leading-relaxed">
            MERN Stack Developer with expertise in designing and building
            scalable, high-performance web applications. Skilled in Next.js,
            MongoDB, Express.js, React, and Node.js, with a strong foundation in
            RESTful APIs, authentication, and database management. Experienced in
            developing end-to-end full-stack solutions, integrating third-party
            services such as Stripe, Nodemailer, and Maps APIs, and optimizing
            application performance. Adept at problem-solving, clean code
            practices, and responsive UI/UX development with Tailwind CSS and
            modern libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-dark-light rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
