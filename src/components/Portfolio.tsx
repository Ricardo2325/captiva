'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/data/projects';

const ease = [0.22, 1, 0.36, 1] as const;
const MOBILE_INITIAL = 4;

// Desktop (4-col grid) col-spans per project index:
//   Row 1: [0:span-2] [1:span-1] [2:span-1]  = 4
//   Row 2: [3:span-1] [4:span-2] [5:span-1]  = 4
//   Row 3: [6:span-2] [7:span-2]              = 4
const mdColSpans: number[] = [2, 1, 1, 1, 2, 1, 2, 2];

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

        {/* Irregular grid: 2-col mobile, 4-col desktop with varying spans */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 [grid-auto-rows:190px] md:[grid-auto-rows:280px]">
          {projects.map((project, i) => {
            const hiddenOnMobile = i >= MOBILE_INITIAL && !showAll;
            const mdSpan = mdColSpans[i] ?? 1;
            const isFeatured = mdSpan >= 2;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease }}
                className={[
                  'flex flex-col',
                  hiddenOnMobile ? 'hidden md:flex' : '',
                  isFeatured ? 'md:col-span-2' : '',
                ].filter(Boolean).join(' ')}
              >
                <Link href={`/proyecto/${project.slug}`} className="group flex flex-col h-full">
                  {/* Image */}
                  <div className="relative flex-1 overflow-hidden">
                    <div className="absolute inset-0" style={{ background: project.gradient }} />

                    {/* Tagline overlay on featured cards */}
                    {isFeatured && (
                      <div
                        className="absolute bottom-0 left-0 right-0 p-4 hidden md:block pointer-events-none"
                        style={{ background: 'linear-gradient(to top, rgba(13,13,20,0.75) 0%, transparent 100%)' }}
                      >
                        <p className="text-sm leading-snug" style={{ color: '#e8e8f2' }}>
                          {project.tagline}
                        </p>
                      </div>
                    )}

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

                  {/* Text */}
                  <div className="pt-3 pb-1 shrink-0">
                    <p
                      className="font-display font-semibold text-sm mb-0.5 group-hover:opacity-70 transition-opacity duration-200"
                      style={{ color: '#e8e8f2' }}
                    >
                      {project.name}
                    </p>
                    <p className="text-xs" style={{ color: '#8888aa' }}>
                      {project.type}
                    </p>
                  </div>
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
