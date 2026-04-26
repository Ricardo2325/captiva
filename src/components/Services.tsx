'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            Elige tu punto<br />de partida.
          </h2>
        </motion.div>

        {/* Cards — horizontal scroll on mobile */}
        <div className="relative">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-2 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible md:items-stretch">
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
                backgroundColor: plan.featured ? '#13131f' : '#0d0d14',
                border: plan.featured ? '1px solid #4f46e5' : '1px solid #1e1e2e',
              }}
            >
              {/* Badge */}
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-medium tracking-wider uppercase"
                  style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
                >
                  Más popular
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-6">
                <p className="text-sm mb-4" style={{ color: plan.featured ? '#8888aa' : '#8888aa' }}>
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

              {/* Divider */}
              <div className="mb-6" style={{ height: '1px', backgroundColor: '#1e1e2e' }} />

              {/* Features */}
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

              {/* CTA */}
              <Link
                href="#contacto"
                className="block text-center py-3 text-sm font-medium transition-all duration-200"
                style={
                  plan.featured
                    ? { backgroundColor: '#4f46e5', color: '#e8e8f2' }
                    : { border: '1px solid #1e1e2e', color: '#8888aa' }
                }
                onMouseEnter={(e) => {
                  if (!plan.featured) {
                    (e.currentTarget as HTMLElement).style.borderColor = '#4f46e5';
                    (e.currentTarget as HTMLElement).style.color = '#e8e8f2';
                  } else {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#6366f1';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.featured) {
                    (e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e';
                    (e.currentTarget as HTMLElement).style.color = '#8888aa';
                  } else {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#4f46e5';
                  }
                }}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
        </div>

        {/* Footnote */}
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

      </div>
    </section>
  );
}
