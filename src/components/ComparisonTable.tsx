'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const plans = ['Presencia', 'Captiva', 'Sistema'];
const featured = 1;

const rows: { label: string; values: (string | null)[] }[] = [
  { label: 'Precio del proyecto',          values: ['797€',       '1.497€',    '2.997€'] },
  { label: 'Páginas incluidas',             values: ['Hasta 5',    'Hasta 5',   'Ilimitadas'] },
  { label: 'Diseño responsive',             values: ['✓',          '✓',         '✓'] },
  { label: 'Formulario de contacto',        values: ['✓',          '✓',         '✓'] },
  { label: 'SEO on-page',                  values: ['Básico',     'Básico',    'Avanzado'] },
  { label: 'Plazo de entrega',              values: ['2 semanas',  '2-3 sem.',  '4-5 sem.'] },
  { label: 'Reservas y pagos online',       values: [null,         '✓',         '✓'] },
  { label: 'Secuencia de emails',           values: [null,         '✓',         '✓'] },
  { label: 'Integración con calendario',    values: [null,         '✓',         '✓'] },
  { label: 'Seguimiento de leads',          values: [null,         '✓',         '✓'] },
  { label: 'Funnel de ventas',              values: [null,         null,        '✓'] },
  { label: 'Página de venta de programas',  values: [null,         null,        '✓'] },
  { label: 'Dashboard de métricas',         values: [null,         null,        '✓'] },
  { label: 'Automatizaciones avanzadas',    values: [null,         null,        '✓'] },
  { label: 'Soporte post-entrega',          values: ['—',          '3 meses',   '6 meses'] },
];

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
          Todos los detalles,{' '}
          <span style={{ color: '#8888aa' }}>sin letra pequeña.</span>
        </h2>
      </div>

      <div
        style={{
          backgroundColor: '#13131f',
          border: '1px solid #1e1e2e',
          borderRadius: '16px',
          padding: '1.5rem',
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', minWidth: '480px' }}>
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 1rem 0.75rem 0',
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#8888aa',
                    fontWeight: 500,
                    width: '38%',
                  }}
                >
                  Característica
                </th>
                {plans.map((plan, i) => (
                  <th
                    key={plan}
                    style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'center',
                      fontWeight: 700,
                    }}
                  >
                    {i === featured ? (
                      <span
                        className="font-display"
                        style={{
                          display: 'inline-block',
                          fontSize: '0.8rem',
                          color: '#e8e8f2',
                          padding: '4px 14px',
                          borderRadius: '999px',
                          background: '#4f46e5',
                        }}
                      >
                        {plan}
                      </span>
                    ) : (
                      <span className="font-display" style={{ fontSize: '0.8rem', color: '#e8e8f2' }}>
                        {plan}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={row.label}
                  style={{ borderTop: '1px solid #1e1e2e' }}
                >
                  <td
                    style={{
                      padding: '0.875rem 1rem 0.875rem 0',
                      color: '#8888aa',
                      fontSize: '0.78rem',
                    }}
                  >
                    {row.label}
                  </td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: '0.875rem 1rem',
                        textAlign: 'center',
                        color: ci === featured ? '#e8e8f2' : '#8888aa',
                        fontWeight: ci === featured ? 600 : 400,
                        fontSize: '0.78rem',
                      }}
                    >
                      {val === '✓' ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'rgba(79,70,229,0.15)',
                            border: '1px solid rgba(79,70,229,0.4)',
                            color: '#4f46e5',
                            fontSize: '10px',
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                      ) : val === null ? (
                        <span style={{ color: '#3a3a5c' }}>—</span>
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* CTA row */}
              <tr style={{ borderTop: '1px solid #1e1e2e' }}>
                <td style={{ padding: '1rem 1rem 0.5rem 0' }} />
                {plans.map((plan, i) => (
                  <td key={plan} style={{ padding: '1rem 1rem 0.5rem', textAlign: 'center' }}>
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
                      }}
                    >
                      Empezar →
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
