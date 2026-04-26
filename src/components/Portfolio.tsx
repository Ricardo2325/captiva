'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/data/projects';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Portfolio() {
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
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
            >
              <Link href={`/proyecto/${project.slug}`} className="group block">
                {/* Gradient image */}
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
