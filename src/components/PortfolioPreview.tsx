'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/data/projects';
import { ImageAccordion } from '@/components/ui/interactive-image-accordion';

const ease = [0.22, 1, 0.36, 1] as const;

const featured = projects.slice(0, 4);

export default function PortfolioPreview() {
  return (
    <section
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
              Portfolio
            </p>
            <h2
              className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#e8e8f2' }}
            >
              Trabajo real.<br />Resultados reales.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 text-sm font-medium flex items-center gap-2 group"
            style={{ color: '#8888aa' }}
          >
            Ver todos los proyectos
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
          </Link>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease }}
        >
          <ImageAccordion projects={featured} />
        </motion.div>

      </div>
    </section>
  );
}
