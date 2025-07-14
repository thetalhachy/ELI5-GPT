'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

const GlassInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, GlassInputProps>(
  ({ label, error, multiline = false, className = '', rows = 3, ...props }, ref) => {
    const InputComponent = multiline ? 'textarea' : 'input';

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {label && (
          <motion.label
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="block text-sm font-medium text-white/80 mb-2"
          >
            {label}
          </motion.label>
        )}
        
        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <InputComponent
            ref={ref as any}
            className={`
              input-glass w-full
              ${multiline ? 'resize-none' : ''}
              ${error ? 'border-red-400 focus:border-red-400' : ''}
              ${className}
            `}
            rows={multiline ? rows : undefined}
            {...props}
          />
        </motion.div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-300"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    );
  }
);

GlassInput.displayName = 'GlassInput';

export default GlassInput;