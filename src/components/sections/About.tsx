import React, { useEffect, useRef } from 'react';
import { Award, Code, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-white dark:bg-slate-900 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll opacity-0 transition-all duration-700 text-3xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">About Me</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
            </h2>
            <p className="animate-on-scroll opacity-0 transition-all duration-700 delay-100 text-slate-600 dark:text-slate-400">
              Get to know more about me and what drives my passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 animate-on-scroll opacity-0 transition-all duration-700 delay-300">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Software Developer & AWS Enthusiast
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a passionate developer specializing in full-stack web development 
                with expertise in React, Node.js, and AWS cloud services. I'm currently 
                pursuing my Bachelor's in Computer Science Engineering at Lovely 
                Professional University with a strong focus on problem-solving and 
                data structures.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                With experience in both front-end and back-end technologies, I enjoy 
                building scalable applications and continuously exploring new technologies 
                to enhance my skills. I'm particularly interested in cloud computing 
                and have hands-on experience with AWS services.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <Code className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Front-end</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      React, HTML, CSS, Tailwind
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="text-teal-600 dark:text-teal-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Back-end</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Node.js, Express, MongoDB
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Cloud className="text-indigo-600 dark:text-indigo-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Cloud</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      AWS, S3, Lambda, CloudWatch
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="text-orange-600 dark:text-orange-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Problem Solving</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      DSA, LeetCode, GeeksforGeeks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
