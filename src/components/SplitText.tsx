'use client';

import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  startDelay?: number;
  stagger?: number;
}

export default function SplitText({
  text,
  className,
  style,
  startDelay = 0,
  stagger = 0.08,
}: SplitTextProps) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
        >
          <motion.span
            style={{ display: 'inline-block', ...style }}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: startDelay + i * stagger, ease }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
}
