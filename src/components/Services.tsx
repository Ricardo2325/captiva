'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ComparisonTable from '@/components/ComparisonTable';

const plans = [
  {
    name: 'Starter',
    price: '499',
    delivery: '7–14 días',
    desc: 'Presencia profesional rápida. Una página, un objetivo: que el visitante te contacte.',
    highlights: [
      'Landing page 1 página',
      'SEO + Google Analytics',
      'Formulario y WhatsApp',
    ],
    cta: 'Empezar',
    featured: false,
  },
  {
    name: 'Pro',
    price: '999',
    delivery: '14–21 días',
    desc: 'Web corporativa completa y reservas en piloto automático. El más elegido.',
    highlights: [
      'Web multipágina completa',
      'Reservas Cal.com sin WhatsApp',
      'Recordatorios y bienvenida automáticos',
      'Captura de leads instantánea',
    ],
    cta: 'Lo quiero',
    featured: true,
  },
  {
    name: 'Shop',
    price: '2.299',
    delivery: '21–30 días',
    desc: 'Ecommerce desarrollado a medida. Sin plantillas de plataforma, con control total sobre el resultado.',
    highlights: [
      'Gestión de stock y pedidos en tiempo real',
      'Pasarela de pago configurada',
      'Emails automáticos de pedido',
    ],
    cta: 'Hablamos',
    featured: false,
  },
  {
    name: 'Add-on',
    price: '499',
    delivery: '5–7 días',
    desc: 'Automatizaciones para tu web actual. Sin rediseño, sin esperas.',
    highlights: [
      'Reservas Cal.com integradas',
      'Recordatorios anti no-show',
      'Sistema de captura de leads',
    ],
    cta: 'Lo añado',
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function CheckIcon({ color = '#4f46e5' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" style={{ color }}>
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan, featured }: { plan: typeof plans[0]; featured: boolean }) {
  return (
    <div
      className="relative flex flex-col p-7 h-full cursor-default"
      style={{
        backgroundColor: featured ? '#1a1a2e' : '#0d0d14',
        border: featured ? '1px solid #4f46e5' : '1px solid #1e1e2e',
        boxShadow: featured ? '0 0 40px rgba(79,70,229,0.1)' : 'none',
      }}
    >
      <div
        className="text-center text-[11px] font-medium tracking-wider uppercase mb-4 py-1"
        style={{
          backgroundColor: featured ? 'rgba(79,70,229,0.15)' : 'transparent',
          color: featured ? '#818cf8' : 'transparent',
          borderRadius: '4px',
          userSelect: 'none',
        }}
      >
        Más popular
      </div>

      {/* Nombre + precio */}
      <p className="text-sm font-semibold mb-3" style={{ color: '#e8e8f2' }}>{plan.name}</p>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-display font-extrabold text-4xl" style={{ color: '#e8e8f2' }}>€{plan.price}</span>
        <span className="text-xs" style={{ color: '#8888aa' }}>/proyecto</span>
      </div>
      <p className="text-[11px] tracking-wide mb-4" style={{ color: '#4f46e5' }}>Entrega: {plan.delivery}</p>

      <div className="mb-5" style={{ height: '1px', backgroundColor: '#1e1e2e' }} />

      {/* Descripción */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#8888aa' }}>{plan.desc}</p>

      {/* Highlights */}
      <ul className="flex flex-col gap-3 flex-1 mb-6">
        {plan.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm" style={{ color: '#e8e8f2' }}>
            <CheckIcon />
            {h}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {featured ? (
        <Link
          href="/contacto"
          className="block w-full text-center py-3 text-sm font-medium transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
        >
          {plan.cta}
        </Link>
      ) : (
        <Link
          href="/contacto"
          className="block text-center py-3 text-sm font-medium transition-all duration-200"
          style={{ border: '1px solid #1e1e2e', color: '#8888aa' }}
          onMouseEnter={(e) => { if (!window.matchMedia('(hover: hover)').matches) return; (e.currentTarget as HTMLElement).style.borderColor = '#4f46e5'; (e.currentTarget as HTMLElement).style.color = '#e8e8f2'; }}
          onMouseLeave={(e) => { if (!window.matchMedia('(hover: hover)').matches) return; (e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e'; (e.currentTarget as HTMLElement).style.color = '#8888aa'; }}
        >
          {plan.cta}
        </Link>
      )}
    </div>
  );
}

function PricingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
    setActive(index);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement;
    if (!card) return;
    const cardW = card.offsetWidth + 16;
    setActive(Math.round(el.scrollLeft / cardW));
  };

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: 'none' } as React.CSSProperties}
      >
        {plans.map((plan) => (
          <div key={plan.name} className="w-[85%] shrink-0 snap-start">
            <PlanCard plan={plan} featured={plan.featured} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mt-6">
        <button
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label="Anterior"
          style={{
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1px solid #1e1e2e', background: 'transparent',
            color: active === 0 ? '#3a3a5c' : '#e8e8f2', cursor: active === 0 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >←</button>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {plans.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Plan ${i + 1}`}
              style={{
                width: i === active ? '24px' : '8px', height: '8px',
                borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0,
                background: i === active ? '#4f46e5' : '#1e1e2e',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToIndex(Math.min(plans.length - 1, active + 1))}
          disabled={active === plans.length - 1}
          aria-label="Siguiente"
          style={{
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1px solid #1e1e2e', background: 'transparent',
            color: active === plans.length - 1 ? '#3a3a5c' : '#e8e8f2',
            cursor: active === plans.length - 1 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >→</button>
      </div>

      <p className="text-center text-xs mt-3" style={{ color: '#8888aa' }}>
        {plans[active].name} · €{plans[active].price}/proyecto
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="px-6 md:px-12 py-24 md:py-32" style={{ borderTop: '1px solid #1e1e2e' }}>

      {/* Header — contenido centrado */}
      <div className="max-w-6xl mx-auto">
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
            Cada proyecto empieza con una llamada gratuita de 30 minutos. A partir de ahí, te proponemos el plan que mejor encaja con donde estás y a dónde quieres llegar. El precio es fijo: lo que acordamos es lo que pagas.
          </p>
        </motion.div>
      </div>

      {/* Mobile carousel */}
      <div className="max-w-6xl mx-auto">
        <PricingCarousel />
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-4 gap-4 items-stretch max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
          >
            <PlanCard plan={plan} featured={plan.featured} />
          </motion.div>
        ))}
      </div>

      {/* Resto del contenido — centrado */}
      <div className="max-w-6xl mx-auto">
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

        <ComparisonTable />

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
              desc: 'No usamos plantillas. Cada web se diseña desde cero para tu marca y tus objetivos de conversión concretos.',
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

        {/* FAQ */}
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
                  q: '¿Puedo pedir cambios en el diseño durante el proceso?',
                  a: 'Sí, es parte del proceso. Trabajamos en revisiones cortas para que veas el avance antes de que avancemos. No llegas al final con sorpresas: cada bloque se aprueba antes de seguir.',
                },
                {
                  q: '¿Qué diferencia hay entre una landing y una web completa?',
                  a: 'La landing tiene un único objetivo: convertir al visitante en lead o cliente. Sin menú, sin distracciones. La web completa tiene varias páginas y sirve para negocios que necesitan explicar más: servicios, equipo, portfolio. En la llamada inicial te decimos cuál tiene más sentido para tu caso.',
                },
                {
                  q: '¿Cuánto tiempo lleva el proceso completo?',
                  a: 'Entre 1 y 5 semanas según el plan. Todo el timeline queda fijado por escrito antes de empezar, con fechas concretas de revisión y entrega.',
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

      </div>{/* fin max-w-6xl */}
    </section>
  );
}
