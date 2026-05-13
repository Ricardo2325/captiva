'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

const yourPart = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53 2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
    title: 'Una llamada de 30 minutos',
    desc: 'Al inicio. Nos cuentas tu negocio, objetivos y contexto. De ahí sale todo lo demás.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Disponibilidad para revisar',
    desc: 'No hace falta que estés pendiente todo el día. Solo que te reserves un rato cuando toca revisar y tomar decisiones.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Una persona de contacto',
    desc: 'Necesitamos un interlocutor claro para decisiones. Sin comités, sin aprobaciones eternas.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Tu contenido, si lo tienes',
    desc: 'Fotos, textos, logo — lo que tengas. Si no tienes nada, lo construimos juntos desde cero sin coste extra.',
  },
];

const deliverables = [
  { text: 'Acceso completo al panel de administración' },
  { text: 'Hosting configurado y funcionando' },
  { text: 'Dominio conectado con certificado SSL' },
  { text: 'Formación de 1h para gestionar la web tú solo' },
  { text: 'Documentación de todas las automatizaciones' },
  { text: 'Soporte incluido durante los primeros 3–6 meses' },
  { text: 'Código fuente y acceso total — es tuya, no nuestra' },
];

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
    q: '¿Por qué solo 2 semanas?',
    a: 'Porque nos especializamos en un tipo de proyecto y lo hemos hecho muchas veces. No reinventamos la rueda con cada cliente, aplicamos lo que ya sabemos que funciona.',
  },
  {
    q: '¿Qué pasa con el hosting y el dominio?',
    a: 'El hosting y el dominio los contratas tú directamente (entre 10–20€/mes). Te explicamos exactamente qué contratar y lo configuramos nosotros. Así la web es 100% tuya.',
  },
  {
    q: '¿Me forman para gestionar la web yo solo?',
    a: 'Sí, siempre. El día del lanzamiento hacemos una sesión de formación de 1 hora donde te explicamos cómo actualizar contenidos, revisar métricas y gestionar las automatizaciones. También te dejamos documentación escrita.',
  },
  {
    q: '¿Qué herramientas usáis?',
    a: 'Next.js para el frontend, Resend para emails, y herramientas como Make o Zapier para automatizaciones. Todo escogido por rendimiento y facilidad de mantenimiento — nada de builders que te encierran en su plataforma.',
  },
  {
    q: '¿Trabajáis con cualquier tipo de negocio?',
    a: 'No. Trabajamos exclusivamente con entrenadores, fisioterapeutas, negocios de salud y negocios locales en general. Esa especialización es lo que nos permite ser más rápidos y más efectivos que una agencia generalista.',
  },
];


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

        {/* Tu parte en el proceso */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-20"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>Tu parte</p>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-10" style={{ color: '#e8e8f2' }}>
            Lo que necesitamos de ti.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {yourPart.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6"
                style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(79,70,229,0.12)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm mb-1" style={{ color: '#e8e8f2' }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Qué recibes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>Entregables</p>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-10" style={{ color: '#e8e8f2' }}>
            Qué recibes el día del lanzamiento.
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 p-8"
            style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
          >
            {deliverables.map((d) => (
              <div key={d.text} className="flex items-start gap-3">
                <div
                  style={{
                    flexShrink: 0,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(79,70,229,0.15)',
                    border: '1px solid rgba(79,70,229,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1px',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed" style={{ color: '#e8e8f2' }}>{d.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

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
          <Accordion type="single" collapsible>
            {faqItems.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="[&:last-child]:border-b-0"
                style={{ borderColor: '#1e1e2e' }}
              >
                <AccordionTrigger
                  className="font-display text-sm hover:no-underline hover:opacity-70 py-5"
                  style={{ color: '#e8e8f2' }}
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent style={{ color: '#8888aa' }}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
