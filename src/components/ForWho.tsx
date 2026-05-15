'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const situations = [
  {
    heading: 'Tus clientes llegan por recomendación.',
    desc: 'El boca a boca funciona pero no escala. Quieres que gente que no te conoce te encuentre, te evalúe y te contacte sola.',
  },
  {
    heading: 'Gestionas reservas por WhatsApp.',
    desc: 'Respondes mensajes a cualquier hora, confirmas citas a mano y a veces se te escapan. Eso tiene solución.',
  },
  {
    heading: 'Tu web existe pero no convierte.',
    desc: 'Tienes presencia online pero los visitantes no se convierten en clientes. La web informa, pero no vende.',
  },
  {
    heading: 'Para crecer necesitarías contratar.',
    desc: 'Más clientes significa más trabajo manual. Quieres escalar sin que el negocio dependa de que estés tú presente.',
  },
  {
    heading: 'Tienes buenas reseñas pero poca visibilidad.',
    desc: 'Los que te conocen hablan bien de ti. El problema es que poca gente te conoce. La reputación está, el canal no.',
  },
  {
    heading: 'No quieres gastar sin saber qué pagas.',
    desc: 'Precio fijo desde el primer día, alcance por escrito, sin sorpresas al final. Si no encajamos, te lo decimos antes de empezar.',
  },
];

function SituationRow({ situation, index }: { situation: typeof situations[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.055, ease }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_1fr] gap-x-6 md:gap-x-10 px-4 md:px-6 py-7 md:py-9 cursor-default"
      style={{
        borderTop: '1px solid #1e1e2e',
        backgroundColor: hovered ? 'rgba(79,70,229,0.03)' : 'transparent',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ backgroundColor: '#4f46e5' }}
      />

      {/* Number */}
      <motion.span
        className="font-display font-extrabold text-3xl md:text-5xl tabular-nums leading-none self-start pt-0.5"
        animate={{ color: hovered ? '#4f46e5' : '#1e1e2e' }}
        transition={{ duration: 0.25 }}
      >
        {num}
      </motion.span>

      {/* On mobile: heading + desc stacked in col 2. On desktop: dissolve into grid. */}
      <div className="md:contents">
        <h3
          className="font-display font-bold text-base md:text-xl leading-snug self-start"
          style={{ color: '#e8e8f2' }}
        >
          {situation.heading}
        </h3>
        <p
          className="text-sm leading-relaxed mt-2 md:mt-0 self-start"
          style={{ color: '#8888aa' }}
        >
          {situation.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ForWho() {
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
          className="mb-14"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            ¿Es para mí?
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-2xl mb-5"
            style={{ color: '#e8e8f2' }}
          >
            Baifo Studio es para ti si alguna de estas situaciones te suena.
          </h2>
          <p className="text-base md:text-lg max-w-xl" style={{ color: '#8888aa' }}>
            No importa el sector. Importa que tu negocio tenga algo bueno que ofrecer y quieras que más gente lo encuentre.
          </p>
        </motion.div>

        {/* Numbered rows */}
        <div className="mb-14">
          {situations.map((s, i) => (
            <SituationRow key={s.heading} situation={s} index={i} />
          ))}
          <div style={{ borderTop: '1px solid #1e1e2e' }} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center"
        >
          <Link
            href="/contacto"
            className="inline-block text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
          >
            Me identifico, hablemos →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
