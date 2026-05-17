'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import { ContactCard } from '@/components/ui/contact-card';

// ── Configura estos valores ──────────────────────────────────────────────────
const WHATSAPP_PHONE = '34600000000'; // sin + ni espacios
const WHATSAPP_MSG = encodeURIComponent(
  'Hola! He visto vuestra web y me interesa lo que ofrecéis. ¿Podemos hablar sobre mi proyecto?'
);
const CAL_LINK = 'baifostudio/30min';
const CAL_ORIGIN = 'https://cal.eu';
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
    className: 'w-full px-3 py-2.5 text-sm bg-transparent outline-none transition-colors duration-200',
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
      <label htmlFor={id} className="block text-xs mb-1.5" style={{ color: '#8888aa' }}>
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

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: '30min', calOrigin: CAL_ORIGIN });
      cal('ui', { theme: 'dark', styles: { branding: { brandColor: '#4f46e5' } }, hideEventTypeDetails: false });
    })();
  }, []);

  async function openCalModal() {
    const cal = await getCalApi({ namespace: '30min', calOrigin: CAL_ORIGIN });
    cal('modal', { calLink: CAL_LINK, config: { layout: 'month_view' } });
  }

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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-xs tracking-widest uppercase mb-12"
          style={{ color: '#4f46e5' }}
        >
          Contacto
        </motion.p>

        <ContactCard
          title={<>Cuéntanos<br />tu proyecto.</>}
          description="Rellena el formulario y te respondemos en menos de 24 horas. O si lo prefieres, agenda directamente una llamada gratuita."
          leftFooter={
            <div className="flex justify-center">
              <button
                type="button"
                onClick={openCalModal}
                className="inline-flex items-center gap-3 px-6 py-4 group transition-all duration-200 cursor-pointer"
                style={{ border: '1px solid #4f46e5', backgroundColor: 'rgba(79,70,229,0.06)' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.06)')}
              >
                <CalendarIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#4f46e5' }} />
                <div>
                  <p className="font-display font-bold text-sm" style={{ color: '#e8e8f2' }}>Agenda una llamada gratuita</p>
                  <p className="text-xs mt-0.5" style={{ color: '#8888aa' }}>30 min · Sin compromiso · Directo a tu calendario</p>
                </div>
                <span style={{ color: '#4f46e5', fontSize: '1.1rem' }} className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
              </button>
            </div>
          }
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4 w-full">
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <InputField label="Nombre" id="nombre" required value={form.nombre} onChange={set('nombre')} />
              <InputField label="Email" id="email" type="email" required value={form.email} onChange={set('email')} />
              <InputField label="Teléfono (opcional)" id="telefono" type="tel" value={form.telefono} onChange={set('telefono')} />
              <InputField label="Mensaje" id="mensaje" required textarea value={form.mensaje} onChange={set('mensaje')} />

              {status === 'error' && (
                <p className="text-sm" style={{ color: '#ef4444' }}>
                  Error al enviar. Inténtalo de nuevo o{' '}
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#25d366' }}
                  >
                    escríbenos por WhatsApp
                  </a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
              </button>

            </form>
          )}
        </ContactCard>

      </div>
    </section>
  );
}
