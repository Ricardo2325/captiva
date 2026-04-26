'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease },
  };
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0d0d14' }}>

      {/* Hero */}
      <section className="relative">
        <div
          className="w-full"
          style={{ height: 'clamp(280px, 45vw, 520px)', background: project.gradient }}
        />
        {/* Overlay gradient to background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #0d0d14)' }}
        />
      </section>

      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-32">

        {/* Back */}
        <motion.div {...fadeUp(0)} className="pt-8 mb-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-text-primary"
            style={{ color: '#8888aa' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3L5 8l5 5" />
            </svg>
            Volver al portfolio
          </Link>
        </motion.div>

        {/* Title block */}
        <motion.div {...fadeUp(0.05)} className="mb-12">
          <span
            className="inline-block text-xs tracking-widest uppercase px-3 py-1 mb-5"
            style={{ backgroundColor: '#1e1e2e', color: '#8888aa' }}
          >
            {project.type}
          </span>
          <h1
            className="font-display font-extrabold leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl"
            style={{ color: '#e8e8f2' }}
          >
            {project.name}
          </h1>
          <p
            className="text-xl md:text-2xl font-display font-medium leading-snug"
            style={{ color: '#8888aa' }}
          >
            {project.tagline}
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          {...fadeUp(0.1)}
          className="grid grid-cols-3 gap-px mb-16"
          style={{ backgroundColor: '#1e1e2e' }}
        >
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 p-5 md:p-7"
              style={{ backgroundColor: '#13131f' }}
            >
              <span
                className="font-display font-extrabold text-2xl md:text-3xl"
                style={{ color: '#4f46e5' }}
              >
                {m.value}
              </span>
              <span className="text-xs leading-tight" style={{ color: '#8888aa' }}>
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* El reto */}
        <motion.div
          {...fadeUp(0.15)}
          className="mb-12 pb-12"
          style={{ borderBottom: '1px solid #1e1e2e' }}
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            El reto
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#8888aa' }}>
            {project.challenge}
          </p>
        </motion.div>

        {/* La automatización */}
        <motion.div
          {...fadeUp(0.2)}
          className="mb-14 pb-12"
          style={{ borderBottom: '1px solid #1e1e2e' }}
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Lo que construimos
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#8888aa' }}>
            {project.automation}
          </p>
        </motion.div>

        {/* Screenshots */}
        <motion.div {...fadeUp(0.25)} className="mb-16">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#4f46e5' }}>
            Capturas del proyecto
          </p>
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[16/8]" style={{ background: project.gradientA }} />
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3]" style={{ background: project.gradientB }} />
              <div className="aspect-[4/3]" style={{ background: project.gradientC }} />
            </div>
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: '#8888aa' }}>
            Proyecto de demostración — capturas simuladas
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.3)}
          className="text-center p-10 md:p-14"
          style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            ¿Quieres resultados así?
          </p>
          <h2
            className="font-display font-bold text-2xl md:text-3xl mb-3"
            style={{ color: '#e8e8f2' }}
          >
            Cuéntanos tu proyecto.
          </h2>
          <p className="text-sm mb-8" style={{ color: '#8888aa' }}>
            Primera llamada gratuita. Sin compromiso.
          </p>
          <Link
            href="/#contacto"
            className="inline-block px-8 py-3.5 text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
          >
            Hablamos
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
