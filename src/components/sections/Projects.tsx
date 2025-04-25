import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: 'Blogging Application',
    description: 'A full-stack blogging platform where users can create, read, and comment on blogs. Implemented JWT-based authentication for secure login and access control. Utilized TanStack Query for efficient API data caching and handling stale data.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['MERN Stack', 'JWT', 'TanStack Query', 'Tailwind CSS'],
    github: 'https://github.com/Jaswant10041',
    featured: true,
  },
  {
    title: 'E-Commerce Application',
    description: 'Built an e-commerce application with user and admin roles. Implemented JWT-based authentication for secure login and access control. Admins can manage products with CRUD operations. Users can view products and add them to their cart.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['MERN Stack', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Jaswant10041',
    featured: true,
  },
  {
    title: 'Library Management System',
    description: 'Developed a comprehensive Library Management System using C++. User can add, search, issue, return, list, and delete books. Implemented a robust data structure using structs and classes for efficient book management.',
    image: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['C++', 'STL', 'Data Structures'],
    github: 'https://github.com/Jaswant10041',
    featured: false,
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const projectsRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

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

    const elements = projectsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 bg-white dark:bg-slate-900 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              Check out some of my recent projects that showcase my skills
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-150 mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filter === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filter === 'featured'
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6 flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-500 text-center mt-12">
            <a
              href="https://github.com/Jaswant10041"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-md transition-colors shadow-md hover:shadow-lg"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;