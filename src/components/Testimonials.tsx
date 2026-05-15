'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Sara Martínez',
    initial: 'S',
    avatarColor: '#1a73e8',
    meta: 'Guía Local · 12 reseñas',
    stars: 5,
    date: 'hace 2 meses',
    text: 'En dos semanas tenía una web que me da vergüenza comparar con lo que tenía antes. Las automatizaciones me han ahorrado literalmente horas cada semana. No me imagino volver a trabajar sin este sistema.',
  },
  {
    name: 'Marcos Torres',
    initial: 'M',
    avatarColor: '#d93025',
    meta: '8 reseñas',
    stars: 5,
    date: 'hace 3 meses',
    text: 'Pensaba que esto era solo para empresas grandes. Baifo Studio me demostró que un negocio pequeño también puede tener un sistema que trabaje por él.',
  },
  {
    name: 'Laura Gómez',
    initial: 'L',
    avatarColor: '#188038',
    meta: '5 reseñas',
    stars: 5,
    date: 'hace 1 mes',
    text: 'El proceso fue exactamente como me dijeron. Cero sorpresas en el precio, cero retrasos.',
  },
  {
    name: 'Pablo Ruiz',
    initial: 'P',
    avatarColor: '#f9ab00',
    meta: 'Guía Local · 21 reseñas',
    stars: 5,
    date: 'hace 4 meses',
    text: 'Antes perdía 2 horas al día respondiendo WhatsApps para gestionar reservas. Ahora no toco el móvil hasta que llego al gym.',
  },
  {
    name: 'Carmen Vidal',
    initial: 'C',
    avatarColor: '#9334e6',
    meta: '3 reseñas',
    stars: 5,
    date: 'hace 2 meses',
    text: 'El funnel que me montaron convirtió mi audiencia de Instagram en clientes reales. En 48 horas agotamos los plazos del lanzamiento.',
  },
  {
    name: 'Javier Molina',
    initial: 'J',
    avatarColor: '#00897b',
    meta: '6 reseñas',
    stars: 5,
    date: 'hace 5 meses',
    text: 'Hablas directamente con quien hace el trabajo. Sin intermediarios, sin excusas. Eso se nota en el resultado.',
  },
  {
    name: 'Ana López',
    initial: 'A',
    avatarColor: '#e8710a',
    meta: 'Guía Local · 17 reseñas',
    stars: 5,
    date: 'hace 3 meses',
    text: 'Mi web nueva convierte muchísimo mejor que la anterior. Los clientes me dicen que parece la web de una marca grande. Eso transmite confianza antes incluso de que hablemos.',
  },
  {
    name: 'David Sánchez',
    initial: 'D',
    avatarColor: '#c5221f',
    meta: '4 reseñas',
    stars: 5,
    date: 'hace 1 mes',
    text: 'La secuencia de emails automática me trajo 3 alumnos nuevos el primer mes sin que yo hiciera nada. Solo tuve que abrir el calendario y confirmar.',
  },
  {
    name: 'Lucía Fernández',
    initial: 'L',
    avatarColor: '#0288d1',
    meta: 'Guía Local · 9 reseñas',
    stars: 5,
    date: 'hace 2 semanas',
    text: 'Tenía miedo de que el proyecto se alargara o que los costes se dispararan. Nada de eso. Precio cerrado desde el primer día y entregado antes de lo previsto.',
  },
  {
    name: 'Roberto Iglesias',
    initial: 'R',
    avatarColor: '#558b2f',
    meta: '7 reseñas',
    stars: 5,
    date: 'hace 3 meses',
    text: 'Mis clientes me preguntan quién me hizo la web porque parece de empresa grande. Eso ya solo vale el precio. Pero es que además funciona.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" style={{ flexShrink: 0 }}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {[...Array(count)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbc04">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

type Review = typeof reviews[number];

function GoogleReviewCard({ review, large = false }: { review: Review; large?: boolean }) {
  return (
    <div
      style={{
        backgroundColor: large ? '#13131f' : '#0d0d14',
        border: '1px solid #1e1e2e',
        borderRadius: '12px',
        padding: large ? '1.75rem' : '1.25rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      {/* Header: avatar + name + Google G */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: review.avatarColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: '#fff',
            fontWeight: 700,
            fontSize: '1rem',
          }}
        >
          {review.initial}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: '#e8e8f2', fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.3 }}>
            {review.name}
          </div>
          <div style={{ color: '#8888aa', fontSize: '0.7rem', marginTop: '2px' }}>
            {review.meta}
          </div>
        </div>
        <GoogleG />
      </div>

      {/* Stars + date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Stars count={review.stars} />
        <span style={{ color: '#8888aa', fontSize: '0.72rem' }}>{review.date}</span>
      </div>

      {/* Text */}
      <p
        style={{
          color: '#e8e8f2',
          fontSize: large ? '0.95rem' : '0.875rem',
          lineHeight: '1.6',
          flex: 1,
          margin: 0,
        }}
      >
        {review.text}
      </p>
    </div>
  );
}

const PER_PAGE = 5;

function DesktopCarousel({ reviews, ease }: { reviews: Review[]; ease: readonly number[] }) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const pages = Math.ceil(reviews.length / PER_PAGE);
  const visible = reviews.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const go = (next: number) => {
    setDir(next > page ? 1 : -1);
    setPage(next);
  };

  return (
    <div className="hidden md:block">
      <div style={{ overflow: 'hidden' }}>
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d * 40, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d * -40, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: ease as [number, number, number, number] }}
            className="grid grid-cols-5 gap-3"
          >
            {visible.map((r, i) => (
              <GoogleReviewCard key={r.name + i} review={r} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => go(page - 1)}
          disabled={page === 0}
          aria-label="Anterior"
          style={{
            width: '40px', height: '40px',
            borderRadius: '50%',
            border: '1px solid',
            borderColor: page === 0 ? '#1e1e2e' : 'rgba(255,255,255,0.3)',
            background: 'transparent',
            color: page === 0 ? '#3a3a5c' : '#e8e8f2',
            cursor: page === 0 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          ←
        </button>

        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Página ${i + 1}`}
              style={{
                width: i === page ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === page ? '#4f46e5' : '#1e1e2e',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go(page + 1)}
          disabled={page === pages - 1}
          aria-label="Siguiente"
          style={{
            width: '40px', height: '40px',
            borderRadius: '50%',
            border: '1px solid',
            borderColor: page === pages - 1 ? '#1e1e2e' : 'rgba(255,255,255,0.3)',
            background: 'transparent',
            color: page === pages - 1 ? '#3a3a5c' : '#e8e8f2',
            cursor: page === pages - 1 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Reseñas de Google
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            Lo que dicen<br />los que ya están dentro.
          </h2>
        </motion.div>

        {/* Mobile: horizontal scroll con peek */}
        <div
          className="md:hidden overflow-x-auto pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
          } as React.CSSProperties}
        >
          <div className="flex gap-4">
            {reviews.map((r, i) => (
              <div key={r.name + i} style={{ flex: '0 0 85%', scrollSnapAlign: 'start' }}>
                <GoogleReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: carrusel 4+4 con flechas */}
        <DesktopCarousel reviews={reviews} ease={ease} />

        {/* CTA dejar reseña — desactivado hasta tener Google Maps
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5"
          style={{ border: '1px solid #1e1e2e', backgroundColor: '#13131f', borderRadius: '12px' }}
        >
          <div className="flex items-center gap-3">
            <GoogleG />
            <p className="text-sm" style={{ color: '#8888aa' }}>
              ¿Ya eres cliente? Tu opinión ayuda a otros entrenadores a decidir.
            </p>
          </div>
          <a
            href="https://g.page/r/PLACEHOLDER/review"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium px-5 py-2.5 transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2', borderRadius: '6px' }}
          >
            Dejar reseña en Google →
          </a>
        </motion.div>
        */}

      </div>
    </section>
  );
}
