'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/data/projects';

const ease = [0.22, 1, 0.36, 1] as const;

const featured = projects.slice(0, 3);

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
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16"
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
            >
              <Link
                href="/portfolio"
                className="group block h-full"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    border: '1px solid #1e1e2e',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#0d0d14',
                    transition: 'border-color 0.2s ease',
                  }}
                  className="group-hover:border-[rgba(255,255,255,0.12)]"
                >
                  {/* Screenshot */}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      background: project.gradient,
                    }}
                  >
                    <Image
                      src={`/portfolio/${project.slug}/desktop.jpg`}
                      alt={project.name}
                      fill
                      style={{ objectFit: 'cover', opacity: 0.85, transition: 'opacity 0.3s ease, transform 0.5s ease' }}
                      className="group-hover:opacity-100 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient overlay bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0,
                        height: '40%',
                        background: 'linear-gradient(to top, rgba(13,13,20,0.8), transparent)',
                      }}
                    />
                    {/* Type badge */}
                    <span
                      className="font-body absolute top-3 left-3"
                      style={{
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: '#ffffff',
                        padding: '4px 10px',
                        border: '1px solid rgba(255,255,255,0.25)',
                        borderRadius: '999px',
                        backdropFilter: 'blur(6px)',
                        background: 'rgba(0,0,0,0.35)',
                      }}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h3
                      className="font-display"
                      style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e8e8f2', lineHeight: 1.2 }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="font-body"
                      style={{ fontSize: '0.85rem', color: '#8888aa', lineHeight: 1.5, flex: 1 }}
                    >
                      {project.tagline}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '0.5rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid #1e1e2e',
                      }}
                    >
                      <div>
                        <span
                          className="font-display"
                          style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e8e8f2' }}
                        >
                          {project.metrics[0].value}
                        </span>
                        <span
                          className="font-body"
                          style={{ fontSize: '0.7rem', color: '#8888aa', marginLeft: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                        >
                          {project.metrics[0].label}
                        </span>
                      </div>
                      <span
                        style={{ color: '#4f46e5', fontSize: '0.85rem', transition: 'transform 0.2s ease' }}
                        className="group-hover:translate-x-1 inline-block transition-transform duration-200"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
