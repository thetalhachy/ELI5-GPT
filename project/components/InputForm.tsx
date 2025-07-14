'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Globe, BookOpen, Zap } from 'lucide-react';
import axios from 'axios';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import GlassInput from './GlassInput';

interface InputFormProps {
  setExplanation: (explanation: string) => void;
  setLoading: (loading: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
}

export default function InputForm({ setExplanation, setLoading, language, setLanguage }: InputFormProps) {
  const [question, setQuestion] = useState('');
  const [mode, setMode] = useState<'simple' | 'story'>('simple');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      setError('Please enter a question!');
      return;
    }

    setError('');
    setLoading(true);
    setExplanation('');

    try {
      const response = await axios.post('/api/explain', {
        question: question.trim(),
        language,
        mode,
      });

      setExplanation(response.data.explanation);
    } catch (error) {
      setError('Oops! Something went wrong. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const examples = [
    "Why is the sky blue?",
    "How do airplanes fly?",
    "What is gravity?",
    "Why do we need to sleep?",
    "How does the internet work?"
  ];

  return (
    <GlassCard className="mb-8" delay={0.4}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Language and Mode Toggle */}
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <Globe className="w-5 h-5 text-white/70" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="input-glass px-4 py-2 text-white bg-white/10 border border-white/20 rounded-xl focus:border-white/40"
            >
              <option value="english">English</option>
              <option value="bangla">বাংলা</option>
            </select>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <BookOpen className="w-5 h-5 text-white/70" />
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as 'simple' | 'story')}
              className="input-glass px-4 py-2 text-white bg-white/10 border border-white/20 rounded-xl focus:border-white/40"
            >
              <option value="simple">Simple Explanation</option>
              <option value="story">Story Mode</option>
            </select>
          </motion.div>
        </div>

        {/* Question Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <GlassInput
            multiline
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={language === 'english' ? 
              "Ask me anything! Like 'Why is the sky blue?' or 'How do cars work?'" : 
              "আমাকে যেকোনো প্রশ্ন করুন! যেমন 'আকাশ নীল কেন?' বা 'গাড়ি কিভাবে চলে?'"
            }
            maxLength={500}
          />
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
            {question.length}/500
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="p-4 glass border border-red-400/50 rounded-xl text-red-200 text-sm backdrop-blur-md"
          >
            {error}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <GlassButton
            variant="primary"
            size="lg"
          type="submit"
          disabled={!question.trim()}
            className="w-full"
            icon={<Zap className="w-5 h-5" />}
        >
            {language === 'english' ? 'Explain to Me!' : 'আমাকে বুঝিয়ে দিন!'}
          </GlassButton>
        </motion.div>
      </form>

      {/* Example Questions */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 pt-6 border-t border-white/20"
      >
        <h3 className="text-sm font-medium text-white/80 mb-4">
          {language === 'english' ? 'Try these examples:' : 'এই উদাহরণগুলো দেখুন:'}
        </h3>
        <div className="flex flex-wrap gap-3">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
            >
              <GlassButton
                variant="glass"
                size="sm"
                onClick={() => setQuestion(example)}
                className="text-white/90 hover:text-white text-sm"
              >
                {example}
              </GlassButton>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </GlassCard>
  );
}