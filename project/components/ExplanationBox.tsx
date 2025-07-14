'use client';

import { motion } from 'framer-motion';
import { Copy, RefreshCw, Star } from 'lucide-react';
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import LoadingSkeleton from './LoadingSkeleton';

interface ExplanationBoxProps {
  explanation: string;
  loading: boolean;
}

export default function ExplanationBox({ explanation, loading }: ExplanationBoxProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(explanation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  if (loading) {
    return (
      <GlassCard className="min-h-[200px] flex flex-col justify-center" delay={0.6}>
        <LoadingSpinner />
        <div className="mt-6">
          <LoadingSkeleton lines={4} />
        </div>
      </GlassCard>
    );
  }

  if (!explanation) {
    return (
      <GlassCard className="text-center min-h-[300px] flex flex-col justify-center" delay={0.6}>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-8xl mb-6"
        >
          🤔
        </motion.div>
        <p className="text-white/90 text-xl leading-relaxed">
          Ask me a question and I'll explain it in a fun, simple way!
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard delay={0.6}>
      <div className="flex items-center justify-between mb-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-6 h-6 text-yellow-300" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">
            Here's your explanation!
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassButton
            size="sm"
            onClick={copyToClipboard}
            icon={<Copy className="w-4 h-4" />}
          >
            Copy
          </GlassButton>
        </motion.div>
      </div>

      <div className="prose prose-lg max-w-none mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/95 leading-relaxed whitespace-pre-wrap text-lg"
        >
          {explanation}
        </motion.div>
      </div>

      {copied && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          className="mb-4 p-4 glass border border-green-400/50 rounded-xl text-green-200 text-sm text-center backdrop-blur-md"
        >
          ✨ Copied to clipboard!
        </motion.div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 glass-light rounded-2xl border border-white/10"
      >
        <p className="text-sm text-white/80 text-center">
          💡 Want to learn more? Try asking follow-up questions!
        </p>
      </motion.div>
    </GlassCard>
  );
}