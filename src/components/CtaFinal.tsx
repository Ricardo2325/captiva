'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#4f46e5' }}>
            ¿Empezamos?
          </p>
          <h2
            className="font-display font-extrabold leading-tight mb-6 text-4xl md:text-5xl lg:text-6xl"
            style={{ color: '#e8e8f2' }}
          >
            Tu negocio merece<br />
            <span style={{ color: '#8888aa' }}>una web que trabaje.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: '#8888aa' }}>
            Primera llamada gratuita. Sin compromiso. Si no encajamos, te lo decimos en la primera reunión.
          </p>
          <Link
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
          >
            Reserva una llamada gratuita
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
