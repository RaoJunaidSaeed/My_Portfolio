import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-primary text-sm font-medium">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Rao Mohammad Junaid Shahzad
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          MERN Stack Developer building scalable, high-performance web
          applications with React, Next.js, Node.js &amp; MongoDB.
        </p>

        <p className="text-sm text-slate-500 mb-10">
          Pir Mahal, Punjab, Pakistan
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-slate-600 hover:border-primary text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-200"
          >
            View Work
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/RaoJunaidSaeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/rao-mohammed-junaid-shahzad-62586b277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:raomjunaid78@gmail.com"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
