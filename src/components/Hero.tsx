'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import { BackgroundPaths } from '@/components/ui/background-paths';

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
      {/* Flowing indigo paths background */}
      <BackgroundPaths />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(79,70,229,0.18) 0%, transparent 65%)',
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

        {/* Headline — split text word by word */}
        <h1
          className="font-display font-extrabold leading-[1.05] tracking-tight mb-6 text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full"
          style={{ color: '#e8e8f2' }}
        >
          <SplitText text="Webs a medida." startDelay={0.1} stagger={0.08} />{' '}
          <SplitText
            text="Automatizaciones"
            startDelay={0.34}
            stagger={0.08}
            style={{ color: '#8888aa' }}
          />{' '}
          <SplitText text="que trabajan por ti." startDelay={0.42} stagger={0.08} />
        </h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.9)}
          className="max-w-lg mx-auto text-base md:text-lg leading-relaxed mb-10"
          style={{ color: '#8888aa' }}
        >
          Diseñamos webs que convierten visitas en clientes y automatizamos
          los procesos que te roban tiempo — para que tú te centres en lo que
          sabes hacer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.0)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="/portfolio"
            className="block w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] text-center"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
          >
            Ver portfolio
          </Link>
          <Link
            href="/contacto"
            className="block w-full sm:w-auto px-8 py-3.5 rounded-full border font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group"
            style={{ borderColor: '#1e1e2e', color: '#8888aa' }}
          >
            Hablamos
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              →
            </span>
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          {...fadeUp(1.15)}
          className="flex items-center justify-center gap-8 md:gap-12 mt-10 flex-wrap"
        >
          {[
            { value: '+30', label: 'proyectos entregados' },
            { value: '2 sem.', label: 'de media hasta lanzar' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <span className="font-display font-extrabold text-2xl md:text-3xl" style={{ color: '#e8e8f2' }}>
                {stat.value}
              </span>
              <span className="text-[11px] tracking-wide" style={{ color: '#8888aa' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.2)}
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
