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
          className="mb-12 md:mb-16 md:max-w-2xl"
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
          <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#8888aa' }}>
            Somos una micro-agencia sin capas intermedias. Hablas directamente con quien hace el trabajo. Nada de cuentas, nada de gestores de proyecto. Solo resultado.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#8888aa' }}>
            Nos especializamos en entrenadores personales y negocios locales porque creemos que los mejores sistemas no deberían estar reservados para las empresas grandes. Un buen sistema de captación y automatización puede cambiar por completo la vida de un autónomo o una pequeña empresa — y eso es lo que construimos.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-12"
          style={{ backgroundColor: '#1e1e2e' }}
        >
          {[
            { value: '30+', label: 'Proyectos entregados' },
            { value: '2+', label: 'Años especializados' },
            { value: '2 sem.', label: 'Tiempo medio de entrega' },
            { value: '24h', label: 'Respuesta garantizada' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-7 px-4 text-center"
              style={{ backgroundColor: '#0d0d14' }}
            >
              <span className="font-display font-extrabold text-3xl mb-1" style={{ color: '#e8e8f2' }}>
                {s.value}
              </span>
              <span className="text-xs" style={{ color: '#8888aa' }}>{s.label}</span>
            </div>
          ))}
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

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              title: 'Transparencia ante todo',
              desc: 'Precios cerrados, plazos reales y comunicación directa. No prometemos lo que no podemos cumplir.',
            },
            {
              title: 'Solo lo que funciona',
              desc: 'No seguimos tendencias. Aplicamos lo que ha dado resultados en proyectos anteriores del mismo sector.',
            },
            {
              title: 'El cliente lo entiende todo',
              desc: 'Te explicamos cada decisión. Al terminar el proyecto, sabes exactamente cómo funciona tu sistema.',
            },
          ].map((v) => (
            <div
              key={v.title}
              className="p-6"
              style={{ backgroundColor: '#0d0d14', border: '1px solid #1e1e2e' }}
            >
              <div className="w-1.5 h-1.5 rounded-full mb-4" style={{ backgroundColor: '#4f46e5' }} />
              <h3 className="font-display font-bold text-base mb-2" style={{ color: '#e8e8f2' }}>
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
