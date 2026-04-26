'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Llamada inicial',
    desc: '30 minutos para entender tu negocio, tus objetivos y ver si encajamos. Hablamos de dónde estás, qué quieres conseguir y qué obstáculos tienes ahora mismo. Sin compromiso ni presión de venta.',
    duration: '30 min',
  },
  {
    num: '02',
    title: 'Propuesta',
    desc: 'En 48 horas recibes un documento con el alcance exacto del proyecto, el timeline semana a semana y el precio fijo. Todo por escrito antes de empezar. Lo que acordamos es lo que pagas.',
    duration: '48 h',
  },
  {
    num: '03',
    title: 'Diseño y desarrollo',
    desc: 'Trabajamos en sprints cortos de 3-4 días. Cada revisión se comparte contigo en directo para que veas el avance y des feedback antes de seguir. Cero sorpresas al final.',
    duration: '2–3 sem.',
  },
  {
    num: '04',
    title: 'Entrega y activación',
    desc: 'Lanzamos juntos, probamos cada automatización en vivo y te formamos para que puedas gestionarlo tú. A partir del lanzamiento el sistema trabaja solo. Soporte incluido los primeros meses.',
    duration: '1 día',
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

const faqItems = [
  {
    q: '¿Qué necesito tener listo antes de empezar?',
    a: 'Prácticamente nada. Te guiamos con los textos, imágenes y estructura. Si ya tienes material, lo usamos; si no, lo creamos juntos.',
  },
  {
    q: '¿Qué pasa si el proyecto crece durante el desarrollo?',
    a: 'Cualquier cambio de alcance se presupuesta por separado y se aprueba antes de ejecutarse. Nunca hay sorpresas en la factura final.',
  },
  {
    q: '¿Puedo pedir cambios después del lanzamiento?',
    a: 'Sí. Los planes incluyen soporte post-lanzamiento de 3 a 6 meses. Ajustes menores se resuelven en 24-48 horas.',
  },
  {
    q: '¿Por qué solo 3 semanas?',
    a: 'Porque nos especializamos en un tipo de proyecto y lo hemos hecho muchas veces. No reinventamos la rueda con cada cliente, aplicamos lo que ya sabemos que funciona.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #1e1e2e' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display font-semibold text-sm" style={{ color: '#e8e8f2' }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-200"
          style={{ color: open ? '#4f46e5' : '#8888aa' }}
        >
          <motion.svg
            width="14" height="14" viewBox="0 0 14 14"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25, ease }}
          >
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed pb-5" style={{ color: '#8888aa' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
              {/* Number + duration */}
              <div className="flex items-start justify-between">
                <span
                  className="font-display font-extrabold text-3xl leading-none"
                  style={{ color: '#4f46e5' }}
                >
                  {step.num}
                </span>
                <span
                  className="text-[10px] tracking-widest uppercase px-2 py-1"
                  style={{ backgroundColor: 'rgba(79,70,229,0.1)', color: '#4f46e5' }}
                >
                  {step.duration}
                </span>
              </div>

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

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-6 p-8"
          style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
        >
          <div
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(79,70,229,0.12)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-base mb-1" style={{ color: '#e8e8f2' }}>
              Garantía de satisfacción
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
              Si al ver la primera entrega hay algo que no te convence, lo revisamos sin coste adicional. Trabajamos hasta que el resultado sea exactamente lo que acordamos — ni más, ni menos.
            </p>
          </div>
          <div className="flex-shrink-0 text-right hidden md:block">
            <span className="font-display font-extrabold text-2xl" style={{ color: '#4f46e5' }}>100%</span>
            <p className="text-xs mt-0.5" style={{ color: '#8888aa' }}>satisfacción</p>
          </div>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-8 px-6 md:px-8"
          style={{ backgroundColor: '#0d0d14', border: '1px solid #1e1e2e' }}
        >
          {faqItems.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
