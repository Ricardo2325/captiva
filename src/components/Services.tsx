'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MagneticWrapper from '@/components/MagneticWrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const plans = [
  {
    name: 'Presencia',
    price: '797',
    desc: 'Para entrenadores que necesitan una presencia digital sólida y profesional.',
    features: [
      'Web a medida hasta 5 páginas',
      'Diseño responsive mobile-first',
      'Formulario de contacto',
      'SEO básico on-page',
      'Entrega en 2 semanas',
    ],
    cta: 'Empezar',
    featured: false,
  },
  {
    name: 'Captiva',
    price: '1.497',
    desc: 'El más elegido. Web profesional + automatizaciones que trabajan mientras entrenas.',
    features: [
      'Todo lo del plan Presencia',
      'Reservas y pagos automatizados',
      'Secuencia de emails de bienvenida',
      'Integración con tu calendario',
      'Seguimiento de leads automático',
      'Soporte 3 meses incluido',
    ],
    cta: 'Lo quiero',
    featured: true,
  },
  {
    name: 'Sistema',
    price: '2.997',
    desc: 'Para negocios que quieren un sistema completo de captación y retención de clientes.',
    features: [
      'Todo lo del plan Captiva',
      'Funnel de ventas completo',
      'Página de venta de programas',
      'Dashboard de métricas',
      'Automatizaciones avanzadas',
      'Soporte 6 meses incluido',
    ],
    cta: 'Hablamos',
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="servicios" className="px-6 md:px-12 py-24 md:py-32" style={{ borderTop: '1px solid #1e1e2e' }}>
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
            Servicios
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl mb-5"
            style={{ color: '#e8e8f2' }}
          >
            Elige tu punto<br />de partida.
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#8888aa' }}>
            Cada proyecto empieza con una llamada gratuita de 30 minutos. A partir de ahí, te proponemos el plan que mejor encaja con donde estás ahora y a dónde quieres llegar. El precio es fijo — lo que acordamos es lo que pagas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible md:items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{ y: -8, borderColor: '#4f46e5' }}
                className="min-w-[82%] snap-start relative flex flex-col p-8 md:min-w-0"
                style={{
                  backgroundColor: plan.featured ? '#1a1a2e' : '#0d0d14',
                  border: plan.featured ? '1px solid #4f46e5' : '1px solid #1e1e2e',
                  boxShadow: plan.featured ? '0 0 40px rgba(79,70,229,0.1)' : 'none',
                }}
              >
                {plan.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-medium tracking-wider uppercase"
                    style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
                  >
                    Más popular
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm mb-4" style={{ color: '#8888aa' }}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-display font-extrabold text-4xl" style={{ color: '#e8e8f2' }}>
                      €{plan.price}
                    </span>
                    <span className="text-sm" style={{ color: '#8888aa' }}>/proyecto</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-6" style={{ height: '1px', backgroundColor: '#1e1e2e' }} />

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm" style={{ color: '#8888aa' }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: '#4f46e5' }}
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.featured ? (
                  <MagneticWrapper>
                    <Link
                      href="/contacto"
                      className="block w-full text-center py-3 text-sm font-medium transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
                    >
                      {plan.cta}
                    </Link>
                  </MagneticWrapper>
                ) : (
                  <Link
                    href="/contacto"
                    className="block text-center py-3 text-sm font-medium transition-all duration-200"
                    style={{ border: '1px solid #1e1e2e', color: '#8888aa' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#4f46e5';
                      (e.currentTarget as HTMLElement).style.color = '#e8e8f2';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e';
                      (e.currentTarget as HTMLElement).style.color = '#8888aa';
                    }}
                  >
                    {plan.cta}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="text-xs mt-8 text-center"
          style={{ color: '#8888aa' }}
        >
          Precios orientativos. Cada proyecto se presupuesta a medida.
        </motion.p>

        {/* What's included callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              ),
              title: 'Diseño a medida',
              desc: 'No usamos plantillas. Cada web se diseña desde cero para tu marca, tu nicho y tus objetivos de conversión.',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              ),
              title: 'Rendimiento técnico',
              desc: 'Webs rápidas, bien optimizadas y con SEO básico incluido. Tu posición en Google mejora desde el lanzamiento.',
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              title: 'Soporte post-entrega',
              desc: 'No desaparecemos al lanzar. Estamos disponibles para ajustes, dudas y optimizaciones durante los meses siguientes.',
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-6" style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}>
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(79,70,229,0.12)' }}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm mb-1" style={{ color: '#e8e8f2' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-12"
        >
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: '#4f46e5' }}>
            Preguntas frecuentes
          </p>
          <div
            className="px-6 md:px-8"
            style={{ backgroundColor: '#0d0d14', border: '1px solid #1e1e2e' }}
          >
            <Accordion type="single" collapsible>
              {[
                {
                  q: '¿Qué pasa si necesito algo que no está en el plan?',
                  a: 'Cada proyecto se adapta. El plan es el punto de partida: en la llamada inicial ajustamos el alcance exacto a tu situación y necesidades concretas.',
                },
                {
                  q: '¿El precio incluye el hosting y el dominio?',
                  a: 'No. El hosting y dominio se contratan por tu cuenta directamente (entre 10-20€/mes). Te explicamos exactamente cómo hacerlo y qué contratar.',
                },
                {
                  q: '¿Qué necesito tener listo antes de empezar?',
                  a: 'Prácticamente nada. Te guiamos con textos, imágenes y estructura. Si ya tienes material, lo usamos; si no, lo creamos juntos durante el proceso.',
                },
                {
                  q: '¿Cuánto tiempo lleva el proceso completo?',
                  a: 'Entre 2 y 5 semanas según el plan. Todo el timeline queda fijado por escrito antes de empezar, con fechas concretas de revisión y entrega.',
                },
              ].map((item, i) => (
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
