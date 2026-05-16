'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Gravity, MatterBody } from '@/components/ui/gravity';

const team = [
  {
    photo: '/team/ricardo.png',
    name: 'Ricardo',
    role: 'Desarrollador Full Stack',
    bio: 'Llevo años construyendo sistemas que funcionan de verdad. Me obsesiona que el código sea limpio y que cada automatización ahorre tiempo real, no solo en el papel. Empecé Baifo Studio porque vi demasiados autónomos pagando precios de agencia grande por webs que no convertían.',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #4f46e5 100%)',
  },
  {
    photo: '/team/ismael.png',
    name: 'Ismael',
    role: 'Marketing & Desarrollo',
    bio: 'Vengo del marketing pero me enamoré del código. Ese cruce es donde vivo: entiendo qué tiene que decir una web para que funcione y sé construirla. Odio los proyectos genéricos casi tanto como las reuniones que podrían haber sido un email.',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #c45200 100%)',
  },
  {
    photo: '/team/cristian.png',
    name: 'Cristian',
    role: 'Especialista en Marketing Digital',
    bio: 'El copy es lo primero que lee un visitante y lo último que la mayoría cuida. Me encargo de que cada palabra en tu web esté ahí por un motivo. También llevo la estrategia y los funnels, la parte que convierte lectores en clientes.',
    gradient: 'linear-gradient(135deg, #0d2818 0%, #065f46 100%)',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const techItems = [
  { name: 'Next.js',    x: '20%', y: '5%',  angle: -5  },
  { name: 'TypeScript', x: '60%', y: '5%',  angle: 8   },
  { name: 'Cal.com',    x: '40%', y: '5%',  angle: -3  },
  { name: 'Make',       x: '15%', y: '5%',  angle: 6   },
  { name: 'n8n',        x: '70%', y: '5%',  angle: -8  },
  { name: 'Resend',     x: '50%', y: '5%',  angle: 4   },
  { name: 'Supabase',   x: '30%', y: '5%',  angle: -6  },
];

function TechStack() {
  return (
    <div className="relative hidden md:block w-full" style={{ height: '300px', overflow: 'hidden' }}>
      <Gravity
        gravity={{ x: 0, y: 0.8 }}
        grabCursor
        addTopWall={false}
        className="w-full h-full"
      >
        {techItems.map((item) => (
          <MatterBody
            key={item.name}
            x={item.x}
            y={item.y}
            angle={item.angle}
            matterBodyOptions={{ friction: 0.3, restitution: 0.4, density: 0.002 }}
          >
            <div
              className="px-4 py-2 text-xs font-medium tracking-wide select-none whitespace-nowrap"
              style={{
                backgroundColor: '#13131f',
                color: '#818cf8',
                border: '1px solid rgba(79,70,229,0.3)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              }}
            >
              {item.name}
            </div>
          </MatterBody>
        ))}
      </Gravity>

      {/* Glow de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(79,70,229,0.07) 0%, transparent 70%)' }}
      />
    </div>
  );
}

export default function About() {
  return (
    <section
      id="nosotros"
      className="px-6 md:px-12 py-24 md:py-32"
      style={{ borderTop: '1px solid #1e1e2e' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#4f46e5' }}>
              Sobre nosotros
            </p>
            <h2
              className="font-display font-bold leading-tight text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#e8e8f2' }}
            >
              Tres personas.<br />Un enfoque.
            </h2>
          </motion.div>

          <TechStack />
        </div>

        {/* Historia de origen */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <p
              className="font-display font-bold text-2xl md:text-3xl leading-snug mb-0"
              style={{ color: '#e8e8f2' }}
            >
              "Vimos que los negocios locales pagaban precios de agencia grande por webs que no convertían. Eso no tenía sentido."
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed" style={{ color: '#8888aa' }}>
              Baifo Studio nació de una frustración concreta: demasiados negocios locales atrapados entre dos opciones malas. O una agencia cara que les trataba como un cliente más en la cadena de montaje, o una plantilla barata que no diferenciaba su negocio de nadie.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#8888aa' }}>
              Decidimos que había una tercera vía: tamaño de micro-agencia con el proceso de una grande. Sin capas intermedias, sin plantillas, sin curva de aprendizaje que la paga el cliente. Entregamos en dos semanas porque tenemos el proceso resuelto, no porque improvisemos.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#8888aa' }}>
              Eso es Baifo Studio. Sin capas intermedias, sin presupuestos orientativos, sin desaparecer después del lanzamiento.
            </p>
          </div>
        </motion.div>

        {/* Misión */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 p-10 md:p-14"
          style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
        >
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#4f46e5' }}>
            Nuestra misión
          </p>
          <p
            className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl"
            style={{ color: '#e8e8f2' }}
          >
            Que los mejores sistemas de captación y conversión no estén reservados para las empresas grandes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16"
          style={{ backgroundColor: '#1e1e2e' }}
        >
          {[
            { value: 'Precio fijo', label: 'Sin sorpresas al final' },
            { value: '2+', label: 'Años en activo' },
            { value: '2 sem.', label: 'Tiempo medio de entrega' },
            { value: '24h', label: 'Respuesta garantizada' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-7 px-4 text-center"
              style={{ backgroundColor: '#0d0d14' }}
            >
              <span className="font-display font-extrabold text-3xl mb-1" style={{ color: '#e8e8f2' }}>
                {s.value}
              </span>
              <span className="text-xs" style={{ color: '#8888aa' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Team — zig-zag */}
        <div className="flex flex-col gap-4">
          {team.map((person, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className={`flex flex-col md:flex-row gap-0 ${reverse ? 'md:flex-row-reverse' : ''}`}
                style={{ border: '1px solid #1e1e2e', overflow: 'hidden' }}
              >
                {/* Avatar block */}
                <div
                  className="relative flex-shrink-0 md:w-64 min-h-72"
                  style={{ background: person.gradient }}
                >
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Info block */}
                <div
                  className="flex-1 flex flex-col justify-center p-10 md:p-14"
                  style={{ backgroundColor: '#13131f' }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ color: '#4f46e5' }}
                  >
                    {person.role}
                  </p>
                  <h3
                    className="font-display font-bold text-3xl mb-4"
                    style={{ color: '#e8e8f2' }}
                  >
                    {person.name}
                  </h3>
                  <p className="text-base leading-relaxed max-w-lg" style={{ color: '#8888aa' }}>
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              title: 'Transparencia ante todo',
              desc: 'Precios cerrados, plazos reales y comunicación directa. No prometemos lo que no podemos cumplir.',
            },
            {
              title: 'Solo lo que funciona',
              desc: 'No seguimos tendencias. Aplicamos lo que ha dado resultados en proyectos anteriores y lo adaptamos a tu negocio.',
            },
            {
              title: 'El cliente lo entiende todo',
              desc: 'Te explicamos cada decisión. Al terminar el proyecto, sabes exactamente cómo funciona tu sistema.',
            },
          ].map((v) => (
            <div
              key={v.title}
              className="p-6"
              style={{ backgroundColor: '#0d0d14', border: '1px solid #1e1e2e' }}
            >
              <div className="w-1.5 h-1.5 rounded-full mb-4" style={{ backgroundColor: '#4f46e5' }} />
              <h3 className="font-display font-bold text-base mb-2" style={{ color: '#e8e8f2' }}>
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10"
          style={{ backgroundColor: '#13131f', border: '1px solid #1e1e2e' }}
        >
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl mb-2" style={{ color: '#e8e8f2' }}>
              ¿Trabajamos juntos?
            </h3>
            <p className="text-sm" style={{ color: '#8888aa' }}>
              Primera llamada gratuita. Sin compromiso. Te contamos exactamente qué haríamos con tu negocio.
            </p>
          </div>
          <a
            href="/contacto"
            className="shrink-0 text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: '#4f46e5', color: '#e8e8f2' }}
          >
            Hablamos →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
