'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Llamada inicial',
    desc: '30 minutos para entender tu negocio, tus objetivos y ver si encajamos. Sin compromiso.',
  },
  {
    num: '02',
    title: 'Propuesta',
    desc: 'En 48h tienes un documento con alcance exacto, timeline y precio fijo. Sin sorpresas.',
  },
  {
    num: '03',
    title: 'Diseño y desarrollo',
    desc: 'Sprints cortos con revisiones. Ves el avance desde el primer día y das feedback en tiempo real.',
  },
  {
    num: '04',
    title: 'Entrega y activación',
    desc: 'Lanzamos, probamos cada automatización en vivo y te formamos. Tu negocio ya funciona solo.',
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

export default function Process() {
  return (
    <section
      id="proceso"
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
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Proceso
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            De la llamada al<br />lanzamiento.
          </h2>
        </motion.div>

        {/* Steps — horizontal scroll mobile, grid desktop */}
        <div className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 md:pb-0 md:grid md:grid-cols-4 md:gap-px md:overflow-visible"
          style={{ '--md-bg': '#1e1e2e' } as React.CSSProperties}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              whileHover={{ borderColor: '#4f46e5' }}
              className="min-w-[72%] snap-start flex flex-col p-8 gap-4 md:min-w-0"
              style={{ backgroundColor: '#0d0d14', border: '1px solid #1e1e2e' }}
            >
              {/* Number */}
              <span
                className="font-display font-extrabold text-3xl leading-none"
                style={{ color: '#4f46e5' }}
              >
                {step.num}
              </span>

              {/* Title */}
              <h3
                className="font-display font-bold text-lg"
                style={{ color: '#e8e8f2' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        </div>

      </div>
    </section>
  );
}
