'use client';

import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
interface FooterLink {
  title: string;
  href: string;
  icon?: ReactNode;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Navegación',
    links: [
      { title: 'Inicio', href: '/' },
      { title: 'Servicios', href: '/servicios' },
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'Proceso', href: '/proceso' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { title: 'Nosotros', href: '/nosotros' },
      { title: 'Contacto', href: '/contacto' },
      { title: 'Política de privacidad', href: '#' },
      { title: 'Aviso legal', href: '#' },
    ],
  },
  {
    label: 'Contacto',
    links: [
      { title: 'hola@captiva.es', href: 'mailto:hola@captiva.es' },
      { title: 'Reservar llamada', href: 'https://calendly.com/ricardorodriguezdelgado6' },
    ],
  },
  {
    label: 'Redes sociales',
    links: [
      {
        title: 'Instagram', href: '#',
        icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
      },
      {
        title: 'LinkedIn', href: '#',
        icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
      },
      {
        title: 'YouTube', href: '#',
        icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full px-6 md:px-12 py-16 md:py-20"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px rounded-full blur-sm"
        style={{ backgroundColor: 'rgba(79,70,229,0.4)' }}
      />

      <div className="max-w-6xl mx-auto grid gap-12 xl:grid-cols-3 xl:gap-8">

        {/* Brand */}
        <AnimatedContainer className="space-y-4">
          <span className="font-display font-extrabold text-2xl" style={{ color: '#e8e8f2' }}>
            Captiva
          </span>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#8888aa' }}>
            Webs a medida y automatizaciones para entrenadores y negocios locales.
          </p>
          <p className="text-xs" style={{ color: '#8888aa' }}>
            © {new Date().getFullYear()} Captiva. Todos los derechos reservados.
          </p>
        </AnimatedContainer>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.08}>
              <h3
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: '#4f46e5' }}
              >
                {section.label}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200 hover:opacity-100"
                      style={{ color: '#8888aa' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#e8e8f2')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8888aa')}
                      {...(link.href.startsWith('http') || link.href.startsWith('mailto')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.icon && <span className="flex-shrink-0">{link.icon}</span>}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>

      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
