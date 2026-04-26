'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: 'En tres semanas tenía una web que me da vergüenza comparar con lo que tenía antes. Y las automatizaciones me han ahorrado literalmente horas cada semana. No me imagino volver a trabajar sin este sistema.',
    name: 'Sara M.',
    role: 'Entrenadora personal, Madrid',
    initial: 'S',
  },
  {
    quote: 'Pensaba que esto era solo para empresas grandes. Captiva me demostró que un entrenador autónomo también puede tener un sistema que trabaje por él.',
    name: 'Marcos T.',
    role: 'Coach de fuerza, Barcelona',
    initial: 'M',
  },
  {
    quote: 'El proceso fue exactamente como me dijeron. Cero sorpresas en el precio, cero retrasos. Y cuando hay algo que ajustar, responden el mismo día.',
    name: 'Laura G.',
    role: 'Fisioterapeuta y entrenadora, Valencia',
    initial: 'L',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#f59e0b">
        <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8l-2.78 1.55.53-3.09L1.5 4.27l3.11-.45L6 1z" />
      </svg>
    ))}
  </div>
);

const Author = ({ name, role, initial }: { name: string; role: string; initial: string }) => (
  <div className="flex items-center gap-3 mt-6">
    <Avatar className="size-10">
      <AvatarFallback>{initial}</AvatarFallback>
    </Avatar>
    <div>
      <cite className="not-italic text-sm font-medium" style={{ color: '#e8e8f2' }}>{name}</cite>
      <span className="block text-xs" style={{ color: '#8888aa' }}>{role}</span>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section
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
          className="mb-12 md:mb-16"
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
            Testimonios
          </p>
          <h2
            className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl max-w-xl"
            style={{ color: '#e8e8f2' }}
          >
            Lo que dicen<br />los que ya están dentro.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">

          {/* Featured — large left card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="sm:col-span-2 lg:row-span-2"
          >
            <Card
              className="h-full grid grid-rows-[auto_1fr] gap-6 sm:p-8"
              style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
            >
              <div
                className="text-xs tracking-widest uppercase px-2 py-1 w-fit"
                style={{ backgroundColor: 'rgba(79,70,229,0.1)', color: '#4f46e5' }}
              >
                Destacado
              </div>
              <CardContent className="p-0 flex flex-col justify-between">
                <blockquote className="grid h-full grid-rows-[1fr_auto]">
                  <div>
                    <Stars />
                    <p className="text-xl font-medium leading-relaxed" style={{ color: '#e8e8f2' }}>
                      "{testimonials[0].quote}"
                    </p>
                  </div>
                  <Author {...testimonials[0]} />
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 — top right, wide */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="md:col-span-2"
          >
            <Card className="h-full" style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}>
              <CardContent className="h-full p-0 flex flex-col justify-between">
                <blockquote className="grid h-full grid-rows-[1fr_auto]">
                  <div>
                    <Stars />
                    <p className="text-base leading-relaxed" style={{ color: '#e8e8f2' }}>
                      "{testimonials[1].quote}"
                    </p>
                  </div>
                  <Author {...testimonials[1]} />
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 — bottom right, wide */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="md:col-span-2"
          >
            <Card className="h-full" style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}>
              <CardContent className="h-full p-0 flex flex-col justify-between">
                <blockquote className="grid h-full grid-rows-[1fr_auto]">
                  <div>
                    <Stars />
                    <p className="text-base leading-relaxed" style={{ color: '#e8e8f2' }}>
                      "{testimonials[2].quote}"
                    </p>
                  </div>
                  <Author {...testimonials[2]} />
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
