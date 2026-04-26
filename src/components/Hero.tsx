'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(79,70,229,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-28 pb-8 max-w-5xl mx-auto w-full">

        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border text-[11px] tracking-wider uppercase"
          style={{ color: '#8888aa' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          Agencia digital · Negocios locales
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-extrabold leading-[1.05] tracking-tight mb-6 text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: '#e8e8f2' }}
        >
          Webs a medida.{' '}
          <span style={{ color: '#8888aa' }}>Automatizaciones</span>{' '}
          que trabajan por ti.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="max-w-lg mx-auto text-base md:text-lg leading-relaxed mb-10"
          style={{ color: '#8888aa' }}
        >
          Diseñamos webs que convierten visitas en clientes y automatizamos
          los procesos que te roban tiempo — para que tú te centres en lo que
          sabes hacer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] text-center"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
          >
            Ver portfolio
          </Link>
          <Link
            href="#contacto"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group"
            style={{ borderColor: '#1e1e2e', color: '#8888aa' }}
          >
            Hablamos
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              →
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(0.6)}
        className="relative z-10 flex flex-col items-center gap-2 pb-10"
        style={{ color: '#8888aa' }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #1e1e2e, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
