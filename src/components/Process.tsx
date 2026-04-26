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

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-0">

          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-[2.1rem] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px pointer-events-none"
            style={{ backgroundColor: '#1e1e2e' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="relative flex md:flex-col gap-5 md:gap-6 px-0 md:px-6 py-6 md:py-0 md:pt-0"
              style={{ borderTop: i > 0 ? '1px solid #1e1e2e' : undefined }}
            >
              {/* Number bubble */}
              <div
                className="relative z-10 flex-shrink-0 w-[3.5rem] h-[3.5rem] flex items-center justify-center"
                style={{ backgroundColor: '#0d0d14', border: '1px solid #1e1e2e' }}
              >
                <span
                  className="font-display font-bold text-sm"
                  style={{ color: '#4f46e5' }}
                >
                  {step.num}
                </span>
              </div>

              {/* Text */}
              <div className="pt-1 md:pt-6">
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: '#e8e8f2' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                  {step.desc}
                </p>
              </div>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div
                  className="md:hidden absolute left-[1.75rem] top-[calc(3.5rem+1.5rem)] bottom-0 w-px"
                  style={{ backgroundColor: '#1e1e2e' }}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
