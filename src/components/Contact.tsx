'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, CalendarIcon } from 'lucide-react';
import { ContactCard } from '@/components/ui/contact-card';

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

const contactInfo = [
  { icon: MailIcon, label: 'Email', value: 'hola@captiva.es' },
  {
    icon: PhoneIcon,
    label: 'WhatsApp',
    value: `+${WHATSAPP_PHONE.slice(0, 2)} ${WHATSAPP_PHONE.slice(2, 5)} ${WHATSAPP_PHONE.slice(5)}`,
    href: `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MSG}`,
  },
  {
    icon: CalendarIcon,
    label: 'Agenda una llamada',
    value: '30 min · Gratuita · Sin compromiso',
    href: CALENDAR_URL,
  },
];

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
          description="Si tienes alguna pregunta sobre nuestros servicios o quieres empezar, rellena el formulario. Te respondemos en menos de 24 horas."
          contactInfo={contactInfo}
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
