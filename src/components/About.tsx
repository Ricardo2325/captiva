'use client';

import { motion } from 'framer-motion';

const team = [
  {
    initials: 'R',
    name: 'Ricardo',
    role: 'Desarrollador Full Stack',
    bio: 'Construyo webs rápidas, bien estructuradas y con automatizaciones que funcionan de verdad. Obsesionado con el detalle técnico y con que el código sea mantenible.',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #4f46e5 100%)',
  },
  {
    initials: 'A',
    name: 'Alejandro',
    role: 'Especialista en Marketing Digital',
    bio: 'Me encargo de que la web no solo sea bonita, sino que convierta. Copy, estrategia, funnels y la parte que hace que el teléfono suene.',
    gradient: 'linear-gradient(135deg, #0d2818 0%, #065f46 100%)',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section
      id="nosotros"
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
          className="mb-16 md:mb-20 md:max-w-2xl"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Sobre nosotros
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl mb-5"
            style={{ color: '#e8e8f2' }}
          >
            Dos personas.<br />Un enfoque.
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#8888aa' }}>
            Somos una micro-agencia sin capas intermedias. Hablas directamente con quien hace el trabajo. Nada de cuentas, nada de gestores de proyecto. Solo resultado.
          </p>
        </motion.div>

        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={{ borderColor: '#4f46e5' }}
              className="flex gap-6 p-8"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: person.gradient }}
                >
                  <span
                    className="font-display font-extrabold text-3xl"
                    style={{ color: 'rgba(232,232,242,0.9)' }}
                  >
                    {person.initials}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: '#e8e8f2' }}
                >
                  {person.name}
                </h3>
                <p
                  className="text-xs tracking-wider uppercase mb-4"
                  style={{ color: '#4f46e5' }}
                >
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
