'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// ── Configura estos valores ──────────────────────────────────────────────────
const WHATSAPP_PHONE = '34600000000'; // sin + ni espacios
const WHATSAPP_MSG = encodeURIComponent(
  'Hola! He visto vuestra web y me interesa lo que ofrecéis. ¿Podemos hablar sobre mi proyecto?'
);
const CALENDAR_URL = 'https://calendly.com/ricardorodriguezdelgado6';
// ─────────────────────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

type Status = 'idle' | 'loading' | 'success' | 'error';

function InputField({
  label,
  id,
  type = 'text',
  required,
  value,
  onChange,
  textarea,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const shared = {
    id,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    required,
    className: 'w-full px-4 py-3 text-sm bg-transparent outline-none transition-colors duration-200',
    style: {
      backgroundColor: '#0d0d14',
      border: '1px solid #1e1e2e',
      color: '#e8e8f2',
    },
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      (e.currentTarget as HTMLElement).style.borderColor = '#4f46e5';
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      (e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e';
    },
  };

  return (
    <div>
      <label htmlFor={id} className="block text-xs mb-2" style={{ color: '#8888aa' }}>
        {label}{required && <span style={{ color: '#4f46e5' }}> *</span>}
      </label>
      {textarea ? (
        <textarea {...shared} rows={4} style={{ ...shared.style, resize: 'none' }} />
      ) : (
        <input {...shared} type={type} />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [status, setStatus] = useState<Status>('idle');

  const set = (field: string) => (v: string) => setForm((f) => ({ ...f, [field]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contacto"
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
            Contacto
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            Cuéntanos<br />tu proyecto.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

          {/* Form — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-2 p-8"
            style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(79,70,229,0.15)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10l4.5 4.5L16 6" />
                  </svg>
                </div>
                <p className="font-display font-bold text-xl" style={{ color: '#e8e8f2' }}>Mensaje enviado</p>
                <p className="text-sm" style={{ color: '#8888aa' }}>Te respondemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Nombre" id="nombre" required value={form.nombre} onChange={set('nombre')} />
                  <InputField label="Email" id="email" type="email" required value={form.email} onChange={set('email')} />
                </div>
                <InputField label="Teléfono (opcional)" id="telefono" type="tel" value={form.telefono} onChange={set('telefono')} />
                <InputField label="Mensaje" id="mensaje" required textarea value={form.mensaje} onChange={set('mensaje')} />

                {status === 'error' && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>
                    Error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="py-3.5 text-sm font-medium transition-all duration-200 hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar — calendar + whatsapp */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="flex flex-col gap-4"
          >
            {/* Calendar */}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 p-6 transition-all duration-200"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#4f46e5')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e')}
            >
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(79,70,229,0.15)' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#4f46e5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="16" height="14" rx="1" />
                  <path d="M6 2v4M14 2v4M2 9h16" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-base mb-1" style={{ color: '#e8e8f2' }}>
                  Reserva una llamada
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                  30 minutos. Gratuita. Elige el hueco que mejor te venga.
                </p>
              </div>
              <span className="text-xs flex items-center gap-1 group-hover:gap-2 transition-all duration-200" style={{ color: '#4f46e5' }}>
                Ver disponibilidad →
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 p-6 transition-all duration-200"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#25d366')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e')}
            >
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(37,211,102,0.1)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-base mb-1" style={{ color: '#e8e8f2' }}>
                  Escríbenos por WhatsApp
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                  Respuesta rápida. Cuéntanos en qué podemos ayudarte.
                </p>
              </div>
              <span className="text-xs flex items-center gap-1" style={{ color: '#25d366' }}>
                Abrir conversación →
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
