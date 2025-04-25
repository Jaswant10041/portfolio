import React, { useEffect, useRef } from 'react';
import { Award, Calendar } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
};

const certifications: Certification[] = [
  {
    title: 'AWS Cloud Computing',
    issuer: 'AWS',
    date: 'Jun 2024 - Jul 2024',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'Udemy',
    date: 'Aug 2023 - Nov 2023',
  },
  {
    title: 'Cloud Computing',
    issuer: 'Coursera',
    date: 'July 2024 - Oct 2024',
  },
];

const Certifications: React.FC = () => {
  const certRef = useRef<HTMLDivElement>(null);

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

    const elements = certRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={certRef}
      className="py-20 bg-white dark:bg-slate-900 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Certifications</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              Professional certifications that validate my skills and knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Award size={32} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="text-center flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-center text-sm text-slate-500 dark:text-slate-500">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  {cert.credential && (
                    <div className="mt-4 text-center">
                      <a
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View Credential
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;