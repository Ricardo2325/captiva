'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '@/data/projects';

const ease = [0.22, 1, 0.36, 1] as const;
const MOBILE_INITIAL = 4;

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

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

        {/* Grid — 4 items on mobile with Ver más, all on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project, i) => {
            const hiddenOnMobile = i >= MOBILE_INITIAL && !showAll;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease }}
                className={hiddenOnMobile ? 'hidden md:block' : ''}
              >
                <Link href={`/proyecto/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-3">
                    <div className="absolute inset-0" style={{ background: project.gradient }} />
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
                  <p
                    className="font-display font-semibold text-sm mb-1 group-hover:text-accent transition-colors duration-200"
                    style={{ color: '#e8e8f2' }}
                  >
                    {project.name}
                  </p>
                  <p className="text-xs" style={{ color: '#8888aa' }}>
                    {project.type}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Ver más — mobile only */}
        {!showAll && (
          <div className="mt-8 flex justify-center md:hidden">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200"
              style={{ border: '1px solid #1e1e2e', color: '#8888aa' }}
              whileHover={{ borderColor: '#4f46e5' }}
            >
              Ver todos los proyectos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M7 2v10M2 7l5 5 5-5" />
              </svg>
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
}
