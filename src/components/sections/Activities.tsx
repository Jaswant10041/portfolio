import React, { useEffect, useRef } from 'react';
import { Users, BookOpen, Globe } from 'lucide-react';

type Activity = {
  title: string;
  description: string;
  icon: 'users' | 'book' | 'globe';
};

const activities: Activity[] = [
  {
    title: 'Open Source Contributions',
    description: 'Contributed to open-source projects, fixing bugs and adding new features to help the community.',
    icon: 'globe',
  },
  {
    title: 'DSA Learning Group',
    description: 'Led a peer study group focused on data structures and algorithms, organizing weekly problem-solving sessions.',
    icon: 'users',
  },
  {
    title: 'Technical Writing',
    description: 'Published articles on programming concepts and tutorials to help beginners understand complex topics.',
    icon: 'book',
  },
];

const Activities: React.FC = () => {
  const activitiesRef = useRef<HTMLDivElement>(null);

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

    const elements = activitiesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'users':
        return <Users size={24} className="text-blue-500 dark:text-blue-400" />;
      case 'book':
        return <BookOpen size={24} className="text-teal-500 dark:text-teal-400" />;
      case 'globe':
        return <Globe size={24} className="text-indigo-500 dark:text-indigo-400" />;
      default:
        return <Users size={24} className="text-blue-500 dark:text-blue-400" />;
    }
  };

  return (
    <section
      id="activities"
      ref={activitiesRef}
      className="py-20 bg-white dark:bg-slate-900 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Extra Curricular Activities</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              Activities and interests beyond my academic and professional work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-4">
                    {getIcon(activity.icon)}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {activity.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;