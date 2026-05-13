'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const situations = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53 2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
    heading: 'Tus clientes llegan por recomendación.',
    desc: 'El boca a boca funciona pero no escala. Querés que gente que no te conoce te encuentre, te evalúe y te contacte sola.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" />
      </svg>
    ),
    heading: 'Gestionás reservas por WhatsApp.',
    desc: 'Respondés mensajes a cualquier hora, confirmás citas a mano y a veces se te escapan. Eso tiene solución.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    heading: 'Tu web existe pero no convierte.',
    desc: 'Tenés presencia online pero los visitantes no se convierten en clientes. La web informa, pero no vende.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    heading: 'Para crecer necesitarías contratar.',
    desc: 'Más clientes significa más trabajo manual. Querés escalar sin que el negocio dependa de que estés tú presente.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    heading: 'Tenés buenas reseñas pero poca visibilidad.',
    desc: 'Los que te conocen hablan bien de vos. El problema es que poca gente te conoce. La reputación está, el canal no.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    heading: 'No querés gastar sin saber qué pagás.',
    desc: 'Precio fijo desde el primer día, alcance por escrito, sin sorpresas al final. Si no encajamos, te lo decimos antes de empezar.',
  },
];

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
            Captiva es para vos si alguna de estas situaciones te suena.
          </h2>
          <p className="text-base md:text-lg max-w-xl" style={{ color: '#8888aa' }}>
            No importa el sector. Importa que tu negocio tenga algo bueno que ofrecer y quieras que más gente lo encuentre.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {situations.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease }}
              className="flex flex-col gap-4 p-7"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(79,70,229,0.1)' }}
              >
                {s.icon}
              </div>
              <h3
                className="font-display font-bold text-base"
                style={{ color: '#e8e8f2' }}
              >
                {s.heading}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
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
