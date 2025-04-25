import React, { useEffect, useRef } from 'react';
import { Trophy, Star, Code } from 'lucide-react';

type Achievement = {
  title: string;
  description: string;
  icon: 'trophy' | 'star' | 'code';
};

const achievements: Achievement[] = [
  {
    title: '100 Days of DSA Coding Challenge',
    description: 'Completed 100 days of continuous problem-solving, mastering key data structures and algorithms in C++, and posted updates on LinkedIn every day.',
    icon: 'code',
  },
  {
    title: '5-Star in C++ on HackerRank',
    description: 'Recognized for strong C++ skills with a 5-star rating on HackerRank.',
    icon: 'star',
  },
  {
    title: '250+ Problems on LeetCode and 150+ on GeeksforGeeks',
    description: 'Strengthened problem-solving skills across arrays, strings, dynamic programming, and graphs, while enhancing knowledge of data structures and algorithms in C++.',
    icon: 'trophy',
  },
];

const Achievements: React.FC = () => {
  const achievementsRef = useRef<HTMLDivElement>(null);

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

    const elements = achievementsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'trophy':
        return <Trophy size={32} className="text-yellow-500" />;
      case 'star':
        return <Star size={32} className="text-yellow-500" />;
      case 'code':
        return <Code size={32} className="text-blue-500" />;
      default:
        return <Trophy size={32} className="text-yellow-500" />;
    }
  };

  return (
    <section
      id="achievements"
      ref={achievementsRef}
      className="py-20 bg-slate-50 dark:bg-slate-800 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Achievements</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              Recognitions and milestones that highlight my dedication
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      {getIcon(achievement.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {achievement.description}
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

export default Achievements;