import React, { useEffect, useRef } from 'react';

type Skill = {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
};

const skills: Skill[] = [
  {
    category: 'Languages',
    items: [
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'AWS', level: 75 },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Project Management', level: 75 },
      { name: 'Adaptability', level: 90 },
    ],
  },
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.level + '%';
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Skills</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              My technical and soft skills that I've developed over the years
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-6">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="skill-bar h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-0 transition-all duration-1000 ease-out"
                            data-level={skill.level}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;