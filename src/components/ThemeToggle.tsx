import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 z-20 text-slate-700 dark:text-slate-300"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;