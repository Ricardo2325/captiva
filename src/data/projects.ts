export interface Project {
  name: string;
  slug: string;
  type: string;
  tagline: string;
  context: string;
  url: string;
  gradient: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  automation: string;
}

const projects: Project[] = [
  {
    name: 'Aureum Dental',
    slug: 'aureum-dental',
    type: 'Web corporativa',
    tagline: 'La clínica premium que ahora también encuentra quien la busca.',
    context: 'Clínica dental estética en Madrid Salamanca sin captación digital.',
    url: 'https://clinica-1-three.vercel.app/',
    gradient: 'linear-gradient(135deg, #0f0a00 0%, #6b4c0e 50%, #b08d35 100%)',
    metrics: [
      { value: '+2.400', label: 'Pacientes tratados' },
      { value: '98%', label: 'Tasa de satisfacción' },
      { value: '15 años', label: 'De trayectoria' },
    ],
    challenge:
      'Aureum tenía reputación impecable en el barrio de Salamanca pero sin presencia digital, los pacientes de mayor poder adquisitivo — los que buscan carillas o implantes — no los encontraban. Cada nueva alta llegaba por recomendación. Escalable, no.',
    automation:
      'Web premium con galería de casos reales (antes/después), fichas de cada especialista con certificaciones y filosofía de trabajo, y formulario de primera consulta que filtra por tipo de tratamiento. El sistema confirma la cita automáticamente y envía recordatorio 24h antes.',
  },
  {
    name: 'Fisioterapia Raíces',
    slug: 'fisioterapia-raices',
    type: 'Web corporativa',
    tagline: 'El fisio del barrio que ahora también encuentra el algoritmo.',
    context: 'Centro de fisioterapia con 4.9★ y 127 reseñas cogiendo citas por teléfono.',
    url: 'https://clinica-2-nine.vercel.app/',
    gradient: 'linear-gradient(135deg, #051412 0%, #0b5a4a 50%, #1a8a72 100%)',
    metrics: [
      { value: '+2.800', label: 'Pacientes tratados' },
      { value: '4.9★', label: 'Valoración en Google' },
      { value: '127', label: 'Reseñas verificadas' },
    ],
    challenge:
      '127 reseñas de 5 estrellas y el equipo seguía cogiendo citas por teléfono, interrumpiendo sesiones, perdiendo llamadas. Los nuevos pacientes no encontraban info clara de precios, especialidades ni disponibilidad. La mejor fisio de Malasaña era invisible online.',
    automation:
      'Web con ficha detallada de cada especialidad (columna, deportiva, suelo pélvico, domiciliaria), equipo con fotos y perfil de cada fisio, y formulario de primera visita que filtra por tipo de lesión. Las reseñas de Google se sincronizan automáticamente a la web.',
  },
  {
    name: 'Álex Moreno',
    slug: 'alex-moreno',
    type: 'Landing page',
    tagline: 'De recomendaciones esporádicas a clientes que llegan solos.',
    context: 'Entrenador personal con 8 años de experiencia dependiendo del boca a boca.',
    url: 'https://entrenador-personal-1.vercel.app/',
    gradient: 'linear-gradient(135deg, #0f0505 0%, #8b1a1a 50%, #c0392b 100%)',
    metrics: [
      { value: '150+', label: 'Clientes transformados' },
      { value: '12 sem.', label: 'Programa de transformación' },
      { value: 'Desde 97€', label: 'Plan online/mes' },
    ],
    challenge:
      'Álex llevaba 8 años transformando cuerpos y tenía 150 clientes que podían recomendarle. Pero el flujo de nuevos clientes era impredecible — un mes entraban 3, otro ninguno. Sin sistema, sin previsibilidad, sin forma de escalar sin trabajar más horas.',
    automation:
      'Landing con 3 modalidades de servicio bien diferenciadas, testimonios con resultados concretos (nombres, kilos, tiempos) y formulario de consulta inicial que califica al lead antes de que Álex invierta tiempo. Primera sesión gratuita como gancho. El sistema agenda solo.',
  },
  {
    name: 'Sara Jiménez',
    slug: 'sara-jimenez',
    type: 'Landing + comunidad',
    tagline: '48K seguidores convertidos en clientes reales.',
    context: 'Coach de fitness con audiencia en Instagram sin sistema de conversión.',
    url: 'https://entrenador-personal-2.vercel.app/',
    gradient: 'linear-gradient(135deg, #14082a 0%, #7b2fbf 50%, #d946a8 100%)',
    metrics: [
      { value: '48.2K', label: 'Seguidores en Instagram' },
      { value: '200+', label: 'Clientas atendidas' },
      { value: 'Desde 79€', label: 'Plan mensual' },
    ],
    challenge:
      '48.000 seguidores en Instagram y cada vez que Sara anunciaba plazas, los DMs explotaban con preguntas. Respondía manualmente, el proceso se eternizaba y muchas interesadas se enfriaban antes de contratar. La audiencia estaba; el sistema para monetizarla, no.',
    automation:
      'Web con 4 planes explicados sin ambigüedad, primera semana de prueba gratuita como primer paso de bajo compromiso, y formulario de solicitud que califica a la clienta (objetivo, disponibilidad, experiencia previa). El onboarding post-alta es automático.',
  },
  {
    name: 'Vértex Real Estate',
    slug: 'vertex-real-estate',
    type: 'Web + catálogo',
    tagline: '26 años de expertise inmobiliario, por fin visibles online.',
    context: 'Inmobiliaria premium en Tenerife con web que no transmitía su nivel.',
    url: 'https://inmobiliaria-1-ten.vercel.app/',
    gradient: 'linear-gradient(135deg, #050a17 0%, #1a3461 50%, #2c5282 100%)',
    metrics: [
      { value: '+1.200', label: 'Operaciones cerradas' },
      { value: '26 años', label: 'De experiencia' },
      { value: '98 días', label: 'Media de venta' },
    ],
    challenge:
      '26 años y 1.200 operaciones cerradas, pero su web no transmitía eso. Los compradores internacionales —el 30% de su negocio— encontraban una página que no generaba confianza. Perdían leads de alta calidad antes de la primera llamada.',
    automation:
      'Web premium con catálogo de 30 propiedades con mapa interactivo integrado, filtros por zona/precio/tipo, fichas con galería y coordenadas GPS. Formulario diferenciado según tipo de operación (compra, venta, alquiler, inversión). El primer contacto llega cualificado.',
  },
  {
    name: 'La Botánica',
    slug: 'la-botanica',
    type: 'E-commerce',
    tagline: 'De tienda local a ecommerce con panel de gestión propio.',
    context: 'Tienda de decoración natural en Jerez sin presencia digital ni venta online.',
    url: 'https://labotanica-khaki.vercel.app/',
    gradient: 'linear-gradient(135deg, #061209 0%, #1a5c2a 50%, #2d8c4a 100%)',
    metrics: [
      { value: '4 roles', label: 'Cliente, admin, staff, invitado' },
      { value: 'Real-time', label: 'Stock y pedidos en vivo' },
      { value: '30 días', label: 'Garantía en plantas' },
    ],
    challenge:
      'Tienda física con clientes fieles en Jerez pero sin canal digital. Perdían ventas fuera de horario, no podían llegar a clientes fuera de la ciudad y gestionar el stock con hojas de cálculo se había vuelto insostenible.',
    automation:
      'Ecommerce completo: catálogo con filtros por categoría, carrito persistente, sistema de favoritos, checkout con pasarela de pago y panel de administración para gestionar pedidos y stock. Panel de staff para preparar envíos. Backend en Supabase con autenticación por roles y datos en tiempo real.',
  },
];

export default projects;
