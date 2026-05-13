'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const plans = ['Presencia', 'Captiva', 'Sistema'];
const featured = 1; // Captiva

const Check = () => (
  <div
    style={{
      width: '24px', height: '24px',
      borderRadius: '50%',
      background: 'rgba(79,70,229,0.15)',
      border: '1px solid rgba(79,70,229,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto',
    }}
  >
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const Dash = () => (
  <span style={{ color: '#3a3a5c', fontSize: '1.1rem', display: 'block', textAlign: 'center' }}>—</span>
);

type Cell = string | boolean | null;

const rows: { label: string; values: Cell[] }[] = [
  { label: 'Precio del proyecto',       values: ['797€',       '1.497€',    '2.997€'] },
  { label: 'Páginas incluidas',          values: ['Hasta 5',    'Hasta 5',   'Ilimitadas'] },
  { label: 'Diseño responsive',          values: [true,         true,        true] },
  { label: 'Formulario de contacto',     values: [true,         true,        true] },
  { label: 'SEO on-page',               values: ['Básico',     'Básico',    'Avanzado'] },
  { label: 'Plazo de entrega',           values: ['2 semanas',  '2-3 sem.',  '4-5 sem.'] },
  { label: 'Reservas y pagos online',    values: [null,         true,        true] },
  { label: 'Secuencia de emails',        values: [null,         true,        true] },
  { label: 'Integración con calendario', values: [null,         true,        true] },
  { label: 'Seguimiento de leads',       values: [null,         true,        true] },
  { label: 'Funnel de ventas',           values: [null,         null,        true] },
  { label: 'Página de venta de programas', values: [null,       null,        true] },
  { label: 'Dashboard de métricas',      values: [null,         null,        true] },
  { label: 'Automatizaciones avanzadas', values: [null,         null,        true] },
  { label: 'Soporte post-entrega',       values: ['—',          '3 meses',   '6 meses'] },
];

function CellValue({ value, isFeatured }: { value: Cell; isFeatured: boolean }) {
  if (value === true) return <Check />;
  if (value === null) return <Dash />;
  return (
    <span
      style={{
        display: 'block',
        textAlign: 'center',
        fontSize: '0.8rem',
        fontWeight: isFeatured ? 700 : 400,
        color: isFeatured ? '#e8e8f2' : '#8888aa',
      }}
    >
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease }}
      className="mt-20"
    >
      <div className="mb-10">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
          Comparativa
        </p>
        <h2
          className="font-display font-bold leading-tight text-3xl md:text-4xl"
          style={{ color: '#e8e8f2' }}
        >
          Todos los detalles,<br />
          <span style={{ color: '#8888aa' }}>sin letra pequeña.</span>
        </h2>
      </div>

      {/* Scroll wrapper for mobile */}
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: '560px' }}>
          <div
            style={{
              border: '1px solid #1e1e2e',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#0d0d14',
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
                borderBottom: '1px solid #1e1e2e',
                backgroundColor: '#13131f',
              }}
            >
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <span
                  className="font-body"
                  style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8888aa' }}
                >
                  Característica
                </span>
              </div>
              {plans.map((plan, i) => (
                <div
                  key={plan}
                  style={{
                    padding: '1.25rem 1rem',
                    textAlign: 'center',
                    borderLeft: '1px solid #1e1e2e',
                    position: 'relative',
                    backgroundColor: i === featured ? 'rgba(79,70,229,0.06)' : 'transparent',
                  }}
                >
                  {i === featured ? (
                    <span
                      className="font-display"
                      style={{
                        display: 'inline-block',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#e8e8f2',
                        padding: '4px 14px',
                        borderRadius: '999px',
                        background: '#4f46e5',
                      }}
                    >
                      {plan}
                    </span>
                  ) : (
                    <span
                      className="font-display"
                      style={{ fontSize: '0.875rem', fontWeight: 700, color: '#e8e8f2' }}
                    >
                      {plan}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Data rows */}
            {rows.map((row, ri) => (
              <div
                key={row.label}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
                  borderBottom: ri < rows.length - 1 ? '1px solid #1e1e2e' : 'none',
                }}
              >
                <div
                  style={{
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <span
                    className="font-body"
                    style={{ fontSize: '0.8rem', color: '#8888aa' }}
                  >
                    {row.label}
                  </span>
                </div>
                {row.values.map((val, ci) => (
                  <div
                    key={ci}
                    style={{
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderLeft: '1px solid #1e1e2e',
                      backgroundColor: ci === featured ? 'rgba(79,70,229,0.04)' : 'transparent',
                    }}
                  >
                    <CellValue value={val} isFeatured={ci === featured} />
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
                borderTop: '1px solid #1e1e2e',
                backgroundColor: '#13131f',
              }}
            >
              <div style={{ padding: '1.25rem 1.5rem' }} />
              {plans.map((plan, i) => (
                <div
                  key={plan}
                  style={{
                    padding: '1.25rem 1rem',
                    textAlign: 'center',
                    borderLeft: '1px solid #1e1e2e',
                    backgroundColor: i === featured ? 'rgba(79,70,229,0.06)' : 'transparent',
                  }}
                >
                  <Link
                    href="/contacto"
                    className="font-body"
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '8px 16px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      backgroundColor: i === featured ? '#4f46e5' : 'transparent',
                      color: i === featured ? '#ffffff' : '#8888aa',
                      border: i === featured ? 'none' : '1px solid #1e1e2e',
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    Empezar →
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
