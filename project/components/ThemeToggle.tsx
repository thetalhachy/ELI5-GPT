'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassButton from './GlassButton';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored
    const stored = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored) {
      setDarkMode(stored === 'true');
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Store preference
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <GlassButton
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full"
      size="sm"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: darkMode ? 180 : 0,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 0.5 },
          scale: { duration: 0.3 }
        }}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-300" />
        ) : (
          <Moon className="w-5 h-5 text-white" />
        )}
      </motion.div>
    </GlassButton>
  );
}