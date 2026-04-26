'use client';

import { motion } from 'framer-motion';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.4 + i * 0.05,
    strokeOpacity: 0.04 + i * 0.007,
    startOffset: i * 0.042,
    duration: 18 + i * 0.8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#4f46e5"
            strokeWidth={path.width}
            strokeOpacity={path.strokeOpacity}
            initial={{
              pathLength: 0.12,
              pathOffset: path.startOffset,
              opacity: 0,
            }}
            animate={{
              pathOffset: path.startOffset + 1,
              opacity: 1,
            }}
            transition={{
              pathOffset: {
                duration: path.duration,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              },
              opacity: {
                duration: 2,
                delay: 0.2 + path.id * 0.04,
                ease: 'easeIn',
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
