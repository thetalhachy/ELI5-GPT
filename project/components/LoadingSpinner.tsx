'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';

export default function LoadingSpinner() {
  const loadingMessages = [
    "🤖 Thinking really hard...",
    "🧠 Making it super simple...",
    "✨ Cooking up a great explanation...",
    "🎈 Almost ready to explain!",
    "🌟 Preparing something awesome..."
  ];

  const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-6 mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="p-4 glass rounded-full pulse-glow"
        >
          <Brain className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-yellow-300"
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </div>

      <motion.h3
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-2xl font-bold text-white mb-4"
      >
        {randomMessage}
      </motion.h3>

      <motion.p
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="text-white/80 text-lg mb-8"
      >
        This might take a few seconds...
      </motion.p>

      {/* Animated dots */}
      <div className="flex justify-center gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="w-3 h-3 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  );
}