'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Proceso', href: '/proceso' },
  { label: 'Nosotros', href: '/nosotros' },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(19, 19, 31, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1e1e2e' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18">
        <Link
          href="/"
          className="font-display font-extrabold text-xl tracking-tight text-text-primary"
        >
          Captiva
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-sm px-4 py-2 rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-all duration-200"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden md:hidden"
        style={{ backgroundColor: 'rgba(19, 19, 31, 0.95)', backdropFilter: 'blur(16px)' }}
      >
        <nav className="flex flex-col gap-0 px-6 pb-6">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base text-text-muted hover:text-text-primary border-b border-border transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-sm text-center px-4 py-3 rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-all duration-200"
          >
            Contacto
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
