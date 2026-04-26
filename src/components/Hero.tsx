'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(79,70,229,0.13) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex-1 flex flex-col items-center justify-center pt-24 pb-8">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-border text-xs tracking-widest uppercase"
          style={{ color: '#8888aa' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          Agencia digital · Especialistas en negocios locales
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-extrabold leading-[1.04] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: '#e8e8f2' }}
        >
          Webs a medida.
          <br />
          <span style={{ color: '#8888aa' }}>Automatizaciones</span>
          <br />
          que trabajan por ti.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: '#8888aa' }}
        >
          Diseñamos webs que convierten visitas en clientes y automatizamos
          los procesos que te roban tiempo — para que tú te centres en lo que
          sabes hacer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#portfolio"
            className="px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-200 hover:scale-[1.03]"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = '#6366f1')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = '#4f46e5')
            }
          >
            Ver portfolio
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-3.5 rounded-full border font-medium text-sm transition-all duration-200 flex items-center gap-2 group"
            style={{ borderColor: '#1e1e2e', color: '#8888aa' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#e8e8f2';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,70,229,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#8888aa';
              (e.currentTarget as HTMLElement).style.borderColor = '#1e1e2e';
            }}
          >
            Hablamos
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              →
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — en el flujo, siempre visible debajo de los CTAs */}
      <motion.div
        {...fadeUp(0.6)}
        className="flex flex-col items-center gap-2 pb-10"
        style={{ color: '#8888aa' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #1e1e2e, transparent)' }}
        />
      </motion.div>
    </section>
  );
}
