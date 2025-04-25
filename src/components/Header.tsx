import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'activities', label: 'Activities' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop - 80, // Adjust for header height
          behavior: 'smooth',
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold tracking-tighter relative">
          <span className="relative z-10">Jaswanth Kumar</span>
          <span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-sm -z-10 transform -rotate-1"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 relative ${
                activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              )}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-4 border-t border-slate-200 dark:border-slate-800 transition-all">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className={`py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <>
                  <Sun size={18} className="text-yellow-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} className="text-slate-700" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;