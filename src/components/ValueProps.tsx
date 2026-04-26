'use client';

import { motion } from 'framer-motion';

const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Entrega en 3 semanas',
    desc: 'De la primera llamada a tu web en producción. Sin procesos eternos ni reuniones innecesarias.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Automatizaciones incluidas',
    desc: 'Formularios, recordatorios, reservas y seguimiento automático. Tu negocio funciona solo.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: 'Especializados en tu nicho',
    desc: 'Trabajamos exclusivamente con entrenadores y negocios locales. Sabemos lo que convierte.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ValueProps() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32" style={{ borderTop: '1px solid #1e1e2e' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Por qué Captiva
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            Más resultado,<br />menos complejidad.
          </h2>
        </motion.div>

        {/* Grid — horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-2 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible"
          >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ borderColor: '#4f46e5' }}
              transition={{ duration: 0.2 }}
              className="min-w-[78%] snap-start flex flex-col gap-5 p-8 cursor-default md:min-w-0"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
            >
              <div style={{ color: '#4f46e5' }}>{item.icon}</div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: '#e8e8f2' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
