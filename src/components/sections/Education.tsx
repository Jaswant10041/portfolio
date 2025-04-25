import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

type Education = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
};

const educations: Education[] = [
  {
    institution: 'Lovely Professional University',
    degree: "Bachelor of Technology - Computer Science and Engineering",
    location: 'Punjab, India',
    period: 'Since August 2022',
    grade: 'CGPA: 7.9',
  },
  {
    institution: 'Rajiv Gandhi University of Technologies',
    degree: '12th with Science',
    location: 'Srikakulam, Andhra Pradesh',
    period: 'April 2020 - March 2022',
    grade: 'CGPA: 9.34',
  },
  {
    institution: 'Sri Chaitanya School',
    degree: '10th with Science',
    location: 'Ananthapur, Andhra Pradesh',
    period: 'April 2019 - March 2020',
    grade: 'Percentage: 100.00%',
  },
];

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);

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

    const elements = educationRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="education"
      ref={educationRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Education</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              My academic background and qualifications
            </p>
          </div>

          <div className="space-y-8">
            {educations.map((education, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <GraduationCap size={32} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">
                        {education.institution}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                        {education.degree}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-600 dark:text-slate-400 mb-1">
                        <div className="flex items-center mr-4 mb-1 sm:mb-0">
                          <MapPin size={14} className="mr-1" />
                          {education.location}
                        </div>
                        <div className="flex items-center mb-1 sm:mb-0">
                          <Calendar size={14} className="mr-1" />
                          {education.period}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {education.grade}
                      </p>
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

export default Education;