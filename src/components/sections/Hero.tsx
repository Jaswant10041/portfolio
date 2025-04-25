import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-teal-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-teal-900/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-800/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-teal-200/20 dark:bg-teal-800/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300">
            <div className="inline-block relative mb-4">
              <div className="relative z-10">
                <p className="inline-block px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  Software Developer
                </p>
              </div>
              <div className="absolute inset-0 transform rotate-1 bg-gradient-to-r from-blue-200 to-teal-200 dark:from-blue-800 dark:to-teal-800 rounded-full -z-10 opacity-50 blur-sm"></div>
            </div>
          </div>

          <h1 className="animate-on-scroll opacity-0 transition-all duration-1000 text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Hello, I'm{' '}
            <span className="relative">
              <span className="relative z-10">Jaswanth Kumar</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/30 dark:bg-blue-400/30 rounded-sm -z-10 transform -rotate-1"></span>
            </span>
          </h1>

          <p className="animate-on-scroll opacity-0 transition-all duration-1000 delay-150 text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            I build modern, responsive web applications with React, Node.js, and AWS.
            <br />
            Let's turn your ideas into reality.
          </p>

          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300 flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md hover:shadow-lg font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-md transition-colors shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-700 font-medium"
            >
              View Projects
            </a>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-450 flex justify-center space-x-4">
            <a
              href="https://github.com/Jaswant10041/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaswanth-kumar1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jaswanthkumarmadineni3@gmail.com"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="text-slate-600 dark:text-slate-400" />
      </button>
    </section>
  );
};

export default Hero;