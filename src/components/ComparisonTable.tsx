'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const plans = ['Starter', 'Pro', 'Shop', 'Add-on'];
const featured = 1;

const rows: { label: string; values: (string | null)[]; section?: boolean }[] = [
  { label: 'Precio',                               values: ['499€',      '999€',       '2.299€',    '499€'] },
  { label: 'Plazo de entrega',                     values: ['7–14 días', '14–21 días', '21–30 días', '5–7 días'] },
  { label: 'Landing page 1 página',                values: ['✓',          null,          null,         null] },
  { label: 'Web multipágina',                      values: [null,         '✓',           '✓',          null] },
  { label: 'Tienda online a medida',               values: [null,         null,          '✓',          null] },
  { label: 'Integración en web existente',         values: [null,         null,          null,         '✓'] },
  { label: 'Diseño responsive',                    values: ['✓',          '✓',           '✓',          null] },
  { label: 'Formulario de contacto',               values: ['✓',          '✓',           '✓',          null] },
  { label: 'Botón de WhatsApp',                    values: ['✓',          '✓',           '✓',          null] },
  { label: 'SEO básico on-page',                   values: ['✓',          '✓',           '✓',          null] },
  { label: 'Google Analytics + Search Console',    values: ['✓',          '✓',           '✓',          null] },
  { label: 'Páginas legales',                      values: ['✓',          '✓',           '✓',          null] },
  { label: 'Pasarela de pago',                     values: [null,         null,          '✓',          null] },
  { label: 'Soporte post-entrega',                 values: ['15 días',    '15 días',     '30 días',    '—'] },
  { label: 'Rondas de cambios',                    values: ['2',          '2',           '3',          '—'] },
  { label: 'Automatizaciones',                     values: ['', '', '', ''], section: true },
  { label: 'Reservas Cal.com',                     values: [null,         '✓',           '✓',          '✓'] },
  { label: 'Recordatorios anti no-show',           values: [null,         '✓',           '✓',          '✓'] },
  { label: 'Secuencia de bienvenida',              values: [null,         '✓',           '✓',          '✓'] },
  { label: 'Captura de leads + notificación',      values: [null,         '✓',           '✓',          '✓'] },
  { label: 'Confirmación de pedido',               values: [null,         null,          '✓',          null] },
  { label: 'Generación automática de facturas',    values: [null,         null,          '✓',          null] },
  { label: 'Ticket de envío de la caja',           values: [null,         null,          '✓',          null] },
  { label: 'Alerta de stock bajo',                 values: [null,         null,          '✓',          null] },
  { label: 'Resumen mensual de facturas',          values: [null,         null,          '✓',          null] },
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
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', minWidth: '560px' }}>
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
                    width: '34%',
                  }}
                >
                  Característica
                </th>
                {plans.map((plan, i) => (
                  <th
                    key={plan}
                    style={{
                      padding: '0.75rem 0.75rem',
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
              {rows.map((row) => (
                row.section ? (
                  <tr key={row.label}>
                    <td
                      colSpan={5}
                      style={{
                        padding: '0.6rem 0',
                        paddingTop: '1.25rem',
                        fontSize: '0.6rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#4f46e5',
                        fontWeight: 600,
                        borderTop: '1px solid #1e1e2e',
                      }}
                    >
                      {row.label}
                    </td>
                  </tr>
                ) : (
                  <tr key={row.label} style={{ borderTop: '1px solid #1e1e2e' }}>
                    <td
                      style={{
                        padding: '0.75rem 1rem 0.75rem 0',
                        color: '#8888aa',
                        fontSize: '0.75rem',
                      }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, ci) => (
                      <td
                        key={ci}
                        style={{
                          padding: '0.75rem',
                          textAlign: 'center',
                          color: ci === featured ? '#e8e8f2' : '#8888aa',
                          fontWeight: ci === featured ? 600 : 400,
                          fontSize: '0.75rem',
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
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/contacto"
          className="font-body inline-block text-sm font-semibold px-8 py-3 transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: '#4f46e5', color: '#ffffff', borderRadius: '6px' }}
        >
          Hablamos y elegimos tu plan →
        </Link>
      </div>
    </motion.div>
  );
}
