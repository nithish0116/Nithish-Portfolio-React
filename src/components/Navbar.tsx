import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#technologies', label: 'Technologies' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-8 h-8" />
            <span className="text-xl text-red-500 font-bold">NITHISH'S</span>
            <span className="text-x2 font-bold">PORTFOLIO</span>

          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.label}
              </motion.a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;