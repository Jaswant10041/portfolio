import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    company: 'Gokboru',
    role: 'AWS Training',
    period: 'Jun 2024 - Jul 2024',
    description: 'Gained in-depth knowledge of AWS services, including cloud architecture. Implemented a cost-effective solution for long-term data storage in AWS. Automated data transfer from S3 buckets to Amazon Glacier using AWS Lambda functions. Used IAM roles to ensure proper access control to AWS services.',
    skills: ['AWS', 'S3 Buckets', 'Glacier', 'CloudWatch', 'Lambda'],
  },
];

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

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

    const elements = experienceRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Experience</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              My professional journey and hands-on experience
            </p>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-700 mb-12 relative"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 top-6 z-10"></div>

                  {/* Content card */}
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative">
                    {/* Card pointer */}
                    <div
                      className={`hidden md:block absolute top-6 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-white dark:bg-slate-900 ${
                        index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'
                      }`}
                    ></div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <Briefcase size={16} className="text-blue-500 dark:text-blue-400 mr-2" />
                      <span className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;