'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTASection() {
  return (
    <section
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#4f46e5' }}>
            ¿Empezamos?
          </p>

          <h2
            className="font-display font-bold leading-tight text-3xl md:text-5xl lg:text-6xl mb-6"
            style={{ color: '#e8e8f2' }}
          >
            Tu negocio merece una web<br className="hidden md:block" /> que trabaje mientras dormís.
          </h2>

          <p
            className="font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: '#8888aa' }}
          >
            Primera llamada gratuita. Sin compromiso. Te contamos exactamente qué haríamos con tu negocio y cuánto costaría.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] text-center"
              style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
            >
              Hablamos →
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full border font-medium text-sm transition-all duration-200 hover:border-[rgba(255,255,255,0.2)] text-center"
              style={{ borderColor: '#1e1e2e', color: '#8888aa' }}
            >
              Ver el portfolio
            </Link>
          </div>

          <p className="text-xs" style={{ color: '#3a3a5c' }}>
            Respuesta en menos de 24h · Sin compromiso · Precio fijo desde el primer día
          </p>
        </motion.div>
      </div>
    </section>
  );
}
