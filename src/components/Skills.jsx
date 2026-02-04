const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'C++', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'Supabase'],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      'GitHub',
      'CI/CD',
      'Vercel',
      'Postman',
      'Axios',
      'Clerk',
      'Stripe',
    ],
  },
  {
    title: 'Other',
    skills: [
      'Debugging',
      'Problem Solving',
      'Performance Optimization',
      'Code Splitting',
      'Lazy Loading',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-dark-light/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 bg-dark rounded-xl border border-white/5"
            >
              <h3 className="text-primary font-semibold text-lg mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary/10 text-primary-light text-sm rounded-lg border border-primary/10 hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
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
