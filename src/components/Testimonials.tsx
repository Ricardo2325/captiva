'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'En tres semanas tenía una web que me da vergüenza comparar con lo que tenía antes. Y las automatizaciones me han ahorrado literalmente horas cada semana.',
    name: 'Sara M.',
    role: 'Entrenadora personal, Madrid',
    initial: 'S',
  },
  {
    quote: 'Pensaba que esto era solo para empresas grandes. Captiva me demostró que un entrenador autónomo también puede tener un sistema que trabaje por él.',
    name: 'Marcos T.',
    role: 'Coach de fuerza, Barcelona',
    initial: 'M',
  },
  {
    quote: 'El proceso fue exactamente como me dijeron. Cero sorpresas en el precio, cero retrasos. Y cuando hay algo que ajustar, responden el mismo día.',
    name: 'Laura G.',
    role: 'Fisioterapeuta y entrenadora, Valencia',
    initial: 'L',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Testimonials() {
  return (
    <section
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Testimonios
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            Lo que dicen<br />los que ya están dentro.
          </h2>
        </motion.div>

        <div className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: '#4f46e5' }}
              transition={{ duration: 0.2 }}
              className="min-w-[85%] snap-start flex flex-col justify-between p-8 gap-8 md:min-w-0"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
            >
              <p className="text-base leading-relaxed" style={{ color: '#e8e8f2' }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1e1e2e' }}
                >
                  <span className="font-display font-bold text-sm" style={{ color: '#4f46e5' }}>
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: '#e8e8f2' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#8888aa' }}>{t.role}</p>
                </div>
                <span
                  className="ml-auto text-[10px] tracking-wider uppercase px-2 py-1 flex-shrink-0"
                  style={{ backgroundColor: 'rgba(79,70,229,0.1)', color: '#4f46e5' }}
                >
                  Demo
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>

      </div>
    </section>
  );
}
