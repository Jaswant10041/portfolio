import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Jaswanth Kumar</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Software Developer & AWS Enthusiast
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Jaswant10041/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaswanth-kumar1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jaswanthkumarmadineni3@gmail.com"
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700/50 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; {currentYear} Jaswanth Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;