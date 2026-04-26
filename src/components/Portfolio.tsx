'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  name: string;
  type: string;
  gradient: string;
  gradientA: string;
  gradientB: string;
  context: string;
}

const projects: Project[] = [
  {
    name: 'FitLife Coach',
    type: 'Web corporativa',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #4f46e5 50%, #7c3aed 100%)',
    gradientA: 'linear-gradient(135deg, #2d1b6b 0%, #4f46e5 100%)',
    gradientB: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    context: 'Web completa para entrenadora personal en Madrid. +340% de consultas el primer mes.',
  },
  {
    name: 'Entrena con Marc',
    type: 'Landing page',
    gradient: 'linear-gradient(135deg, #0d2818 0%, #065f46 50%, #10b981 100%)',
    gradientA: 'linear-gradient(135deg, #052e16 0%, #065f46 100%)',
    gradientB: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
    context: 'Landing de captación para programa de 12 semanas. Tasa de conversión del 8,4%.',
  },
  {
    name: 'PowerBox Gym',
    type: 'Web + reservas',
    gradient: 'linear-gradient(135deg, #1c0a00 0%, #c2410c 50%, #f97316 100%)',
    gradientA: 'linear-gradient(135deg, #431407 0%, #c2410c 100%)',
    gradientB: 'linear-gradient(135deg, #c2410c 0%, #f97316 100%)',
    context: 'Sistema de reservas de clases automatizado para box de CrossFit en Barcelona.',
  },
  {
    name: 'Nutri & Move',
    type: 'Web + CRM',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #9333ea 50%, #ec4899 100%)',
    gradientA: 'linear-gradient(135deg, #3b0764 0%, #9333ea 100%)',
    gradientB: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
    context: 'Web y CRM personalizado para nutricionista y entrenadora. Gestión 100% automatizada.',
  },
  {
    name: 'Run Academy',
    type: 'Landing page',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1d4ed8 50%, #3b82f6 100%)',
    gradientA: 'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%)',
    gradientB: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    context: 'Lanzamiento de academia online de running. 200 inscritos en las primeras 48h.',
  },
  {
    name: 'Strength Lab',
    type: 'Web corporativa',
    gradient: 'linear-gradient(135deg, #111827 0%, #374151 50%, #6b7280 100%)',
    gradientA: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
    gradientB: 'linear-gradient(135deg, #374151 0%, #6b7280 100%)',
    context: 'Presencia digital premium para estudio de fuerza y acondicionamiento en Valencia.',
  },
  {
    name: 'MindBody Studio',
    type: 'Reservas online',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0891b2 50%, #06b6d4 100%)',
    gradientA: 'linear-gradient(135deg, #164e63 0%, #0891b2 100%)',
    gradientB: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    context: 'Plataforma de reservas para estudio de yoga y pilates. 0 llamadas para reservar.',
  },
  {
    name: 'Elite Performance',
    type: 'Funnel de ventas',
    gradient: 'linear-gradient(135deg, #1a0505 0%, #991b1b 50%, #ef4444 100%)',
    gradientA: 'linear-gradient(135deg, #450a0a 0%, #991b1b 100%)',
    gradientB: 'linear-gradient(135deg, #991b1b 0%, #ef4444 100%)',
    context: 'Funnel de ventas para programa de alto rendimiento. ROI de 4x en 60 días.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="px-6 md:px-12 py-24 md:py-32" style={{ borderTop: '1px solid #1e1e2e' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Portfolio
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            Proyectos que<br />hablan por sí solos.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <motion.button
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              onClick={() => setSelected(project)}
              className="group relative text-left focus:outline-none"
            >
              {/* Gradient image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden mb-3">
                <div className="absolute inset-0" style={{ background: project.gradient }} />
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(13,13,20,0.7)' }}
                >
                  <span
                    className="text-xs font-medium tracking-wider uppercase px-4 py-2 border"
                    style={{ borderColor: '#e8e8f2', color: '#e8e8f2' }}
                  >
                    Ver proyecto
                  </span>
                </motion.div>
              </div>
              {/* Info */}
              <p
                className="font-display font-semibold text-sm mb-1 group-hover:text-accent transition-colors duration-200"
                style={{ color: '#e8e8f2' }}
              >
                {project.name}
              </p>
              <p className="text-xs" style={{ color: '#8888aa' }}>
                {project.type}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50"
              style={{ backgroundColor: 'rgba(13,13,20,0.85)', backdropFilter: 'blur(8px)' }}
              onClick={() => setSelected(null)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease }}
              className="fixed inset-x-4 top-[5vh] bottom-[5vh] z-50 overflow-y-auto md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 transition-colors duration-200 hover:text-text-primary"
                style={{ color: '#8888aa' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>

              {/* Hero gradient */}
              <div className="aspect-[16/7] w-full" style={{ background: selected.gradient }} />

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display font-bold text-2xl" style={{ color: '#e8e8f2' }}>
                    {selected.name}
                  </h3>
                  <span
                    className="flex-shrink-0 text-xs px-3 py-1 mt-1"
                    style={{ backgroundColor: '#1e1e2e', color: '#8888aa' }}
                  >
                    {selected.type}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#8888aa' }}>
                  {selected.context}
                </p>

                {/* 2 screenshot placeholders */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[4/3]" style={{ background: selected.gradientA }} />
                  <div className="aspect-[4/3]" style={{ background: selected.gradientB }} />
                </div>

                <p className="text-xs mt-4 text-center" style={{ color: '#8888aa' }}>
                  Proyecto de demostración
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
