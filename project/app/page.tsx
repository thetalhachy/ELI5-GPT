'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import InputForm from '@/components/InputForm';
import ExplanationBox from '@/components/ExplanationBox';
import Header from '@/components/Header';
import FloatingParticles from '@/components/FloatingParticles';
import ParallaxSection from '@/components/ParallaxSection';

export default function Home() {
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('english');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 min-h-screen p-4 md:p-8"
      >
        <div className="max-w-4xl mx-auto">
          <ParallaxSection speed={0.3}>
            <Header />
          </ParallaxSection>
          
          <ParallaxSection speed={0.2}>
            <InputForm 
              setExplanation={setExplanation}
              setLoading={setLoading}
              language={language}
              setLanguage={setLanguage}
            />
          </ParallaxSection>
          
          <ParallaxSection speed={0.1}>
            <ExplanationBox 
              explanation={explanation}
              loading={loading}
            />
          </ParallaxSection>
          
          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block glass p-4 rounded-2xl border border-white/20"
            >
              <p className="text-white/80 text-sm">
                Made with ❤️ to help curious minds learn • ELI5 GPT
              </p>
            </motion.div>
          </motion.footer>
        </div>
      </motion.main>
    </div>
  );
}