'use client';

import { ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className = '', hover = true, onClick, delay = 0 }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          delay,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={hover ? { 
          y: -4, 
          scale: 1.02,
          transition: { duration: 0.2 }
        } : undefined}
        whileTap={onClick ? { 
          scale: 0.98,
          transition: { duration: 0.1 }
        } : undefined}
        className={`card-glass gpu-accelerated ${className}`}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;