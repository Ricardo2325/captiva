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
    stars: 5,
  },
  {
    quote: 'Pensaba que esto era solo para empresas grandes. Captiva me demostró que un entrenador autónomo también puede tener un sistema que trabaje por él.',
    name: 'Marcos T.',
    role: 'Coach de fuerza, Barcelona',
    initial: 'M',
    stars: 5,
  },
  {
    quote: 'El proceso fue exactamente como me dijeron. Cero sorpresas en el precio, cero retrasos.',
    name: 'Laura G.',
    role: 'Fisioterapeuta y entrenadora, Valencia',
    initial: 'L',
    stars: 5,
  },
  {
    quote: 'Antes perdía 2 horas al día respondiendo WhatsApps para gestionar reservas. Ahora no toco el móvil hasta que llego al gym.',
    name: 'Pablo R.',
    role: 'Dueño de box CrossFit, Sevilla',
    initial: 'P',
    stars: 5,
  },
  {
    quote: 'El funnel que me montaron convirtió mi audiencia de Instagram en clientes reales. En 48 horas agotamos los plazos del lanzamiento.',
    name: 'Carmen V.',
    role: 'Nutricionista deportiva, Bilbao',
    initial: 'C',
    stars: 5,
  },
  {
    quote: 'Hablas directamente con quien hace el trabajo. Sin intermediarios, sin excusas. Eso se nota en el resultado.',
    name: 'Javier M.',
    role: 'Entrenador online, Zaragoza',
    initial: 'J',
    stars: 5,
  },
  {
    quote: 'Mi web nueva convierte muchísimo mejor que la anterior. Los clientes me dicen que parece la web de una marca grande. Eso transmite confianza antes incluso de que hablemos.',
    name: 'Ana L.',
    role: 'Instructora de pilates, Málaga',
    initial: 'A',
    stars: 5,
  },
  {
    quote: 'La secuencia de emails automática me trajo 3 alumnos nuevos el primer mes sin que yo hiciera nada. Solo tuve que abrir el calendario y confirmar.',
    name: 'David S.',
    role: 'Coach de running, Murcia',
    initial: 'D',
    stars: 5,
  },
  // Nuevas reseñas
  {
    quote: 'Tardamos un par de semanas más de lo esperado en la revisión de textos, pero el resultado final fue exactamente lo que necesitaba. Muy honesto en todo el proceso.',
    name: 'Roberto P.',
    role: 'Entrenador de natación, Alicante',
    initial: 'R',
    stars: 4,
  },
  {
    quote: 'Duplicamos las consultas recibidas en el primer mes. La web transmite otra categoría.',
    name: 'Miriam C.',
    role: 'Instructora de yoga, Palma',
    initial: 'M',
    stars: 5,
  },
  {
    quote: 'Al principio tuve alguna duda con el sistema de reservas y cómo encajaba con mi calendario. Lo resolvieron en el día. El soporte postventa es de los que marcan la diferencia.',
    name: 'Álvaro D.',
    role: 'Personal trainer, San Sebastián',
    initial: 'A',
    stars: 4,
  },
  {
    quote: 'Lo que acordamos al principio fue lo que pagué. Sin ajustes de última hora, sin extras no previstos. Eso, hoy en día, vale mucho.',
    name: 'Elena R.',
    role: 'Coach de pilates, Granada',
    initial: 'E',
    stars: 5,
  },
  {
    quote: 'La landing del reto online convirtió al 11%. Sinceramente no me lo esperaba. Ya estamos preparando el siguiente lanzamiento con ellos.',
    name: 'Sergio F.',
    role: 'Coach de transformación, Valladolid',
    initial: 'S',
    stars: 5,
  },
];

// 4-col grid, 6 rows — all rows fully filled:
// Row 1: T0(c1-2,r1-2)  T1(c3-4,r1)
// Row 2: T0(cont)        T2(c3,r2)  T3(c4,r2)
// Row 3: T4(c1)  T5(c2)  T6(c3-4,r3-4)
// Row 4: T7(c1-2,r4)     T6(cont)
// Row 5: T8(c1) T9(c2)   T10(c3-4,r5)
// Row 6: T11(c1-2,r6)    T12(c3-4,r6)
const layout = [
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
];

const ease = [0.22, 1, 0.36, 1] as const;

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill={i < count ? '#f59e0b' : '#2a2a3c'}>
        <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8l-2.78 1.55.53-3.09L1.5 4.27l3.11-.45L6 1z" />
      </svg>
    ))}
  </div>
);

const GoogleG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:[grid-auto-rows:minmax(150px,auto)]">
          {testimonials.map((t, i) => {
            const { colSpan, rowSpan } = layout[i];
            const isLarge = rowSpan === 2;

            return (
              <motion.div
                key={t.name + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease }}
                className={[
                  colSpan === 2 ? 'col-span-2' : 'col-span-1',
                  rowSpan === 2 ? 'md:row-span-2' : '',
                ].join(' ')}
              >
                <Card
                  className="h-full"
                  style={{
                    backgroundColor: isLarge ? '#13131f' : '#0d0d14',
                    border: '1px solid #1e1e2e',
                    padding: isLarge ? '2rem' : '1.5rem',
                  }}
                >
                  <CardContent className="h-full p-0 flex flex-col justify-between">
                    <blockquote className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <Stars count={t.stars} />
                          <GoogleG />
                        </div>
                        <p
                          className={isLarge ? 'text-lg leading-relaxed' : 'text-sm leading-relaxed'}
                          style={{ color: '#e8e8f2' }}
                        >
                          "{t.quote}"
                        </p>
                      </div>
                      <Author {...t} />
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Google review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5"
          style={{ border: '1px solid #1e1e2e', backgroundColor: '#13131f' }}
        >
          <div className="flex items-center gap-3">
            <GoogleG />
            <p className="text-sm" style={{ color: '#8888aa' }}>
              ¿Ya eres cliente? Tu opinión ayuda a otros entrenadores a decidir.
            </p>
          </div>
          <a
            href="https://g.page/r/PLACEHOLDER/review"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium px-5 py-2.5 transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
          >
            Dejar reseña en Google →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
