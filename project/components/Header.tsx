'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Lightbulb } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import GlassCard from './GlassCard';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ y: headerY, opacity: headerOpacity }}
      className="relative z-10"
    >
      <GlassCard className="text-center mb-8 border-white/20" delay={0.2}>
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="p-4 glass rounded-full pulse-glow"
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            ELI5 GPT
          </motion.h1>
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-yellow-300 drop-shadow-lg"
          >
            <Lightbulb className="w-10 h-10" />
          </motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Ask me anything, and I'll explain it like you're 5 years old! 🎈
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex justify-center"
        >
          <ThemeToggle />
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}