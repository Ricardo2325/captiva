export interface Project {
  name: string;
  slug: string;
  type: string;
  tagline: string;
  context: string;
  gradient: string;
  gradientA: string;
  gradientB: string;
  gradientC: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  automation: string;
}

const projects: Project[] = [
  {
    name: 'FitLife Coach',
    slug: 'fitlife-coach',
    type: 'Web corporativa',
    tagline: 'De cero visibilidad a lista de espera en 30 días.',
    context: 'Entrenadora personal en Madrid sin presencia digital. Dependía al 100% del boca a boca.',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #4f46e5 50%, #7c3aed 100%)',
    gradientA: 'linear-gradient(135deg, #2d1b6b 0%, #4f46e5 100%)',
    gradientB: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    gradientC: 'linear-gradient(135deg, #1a1040 0%, #7c3aed 100%)',
    metrics: [
      { value: '+340%', label: 'Consultas el primer mes' },
      { value: '8 semanas', label: 'Hasta lista de espera' },
      { value: '0 llamadas', label: 'Para cerrar citas' },
    ],
    challenge:
      'Sandra llevaba 4 años como entrenadora personal viviendo de recomendaciones. Cuando éstas se secaron en verano, necesitaba urgente un canal propio que atrajera clientes sin depender de terceros.',
    automation:
      'Implementamos un sistema de captación completo: formulario de consulta gratuita → email de confirmación automático → recordatorio 24h antes → secuencia de seguimiento si no responde. Todo sin tocar el móvil. Cada lead que entra recibe atención en menos de 2 minutos, a cualquier hora.',
  },
  {
    name: 'Entrena con Marc',
    slug: 'entrena-con-marc',
    type: 'Landing page',
    tagline: 'Un lanzamiento que superó todas las previsiones.',
    context: 'Entrenador online lanzando su primer programa de 12 semanas.',
    gradient: 'linear-gradient(135deg, #0d2818 0%, #065f46 50%, #10b981 100%)',
    gradientA: 'linear-gradient(135deg, #052e16 0%, #065f46 100%)',
    gradientB: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)',
    gradientC: 'linear-gradient(135deg, #0d2818 0%, #10b981 100%)',
    metrics: [
      { value: '8.4%', label: 'Tasa de conversión' },
      { value: '€18.400', label: 'Ingresos en el lanzamiento' },
      { value: '48h', label: 'Para agotar plazas' },
    ],
    challenge:
      'Marc tenía audiencia en Instagram pero no conseguía monetizarla. Cada vez que anunciaba plazas, la gente le pedía más info por DM y el proceso se perdía. Necesitaba un sistema que convirtiera ese interés en ventas reales.',
    automation:
      'Construimos una landing de ventas con temporizador de cuenta atrás real, checkout integrado y secuencia de emails post-compra automática. Los alumnos recibían acceso, bienvenida y guía de inicio sin que Marc tuviese que hacer nada. El seguimiento de impagos también era automático.',
  },
  {
    name: 'PowerBox Gym',
    slug: 'powerbox-gym',
    type: 'Web + reservas',
    tagline: 'El teléfono dejó de sonar. Las clases, de llenarse solas.',
    context: 'Box de CrossFit en Barcelona gestionando reservas por WhatsApp.',
    gradient: 'linear-gradient(135deg, #1c0a00 0%, #c2410c 50%, #f97316 100%)',
    gradientA: 'linear-gradient(135deg, #431407 0%, #c2410c 100%)',
    gradientB: 'linear-gradient(135deg, #c2410c 0%, #f97316 100%)',
    gradientC: 'linear-gradient(135deg, #1c0a00 0%, #f97316 100%)',
    metrics: [
      { value: '-90%', label: 'Tiempo en gestión admin' },
      { value: '+60%', label: 'Ocupación media de clases' },
      { value: '0€', label: 'En herramientas de terceros' },
    ],
    challenge:
      'Los dueños de PowerBox pasaban 2 horas al día respondiendo WhatsApps para gestionar reservas, cancelaciones y pagos. En temporada alta, el caos era total y perdían clientes por falta de respuesta.',
    automation:
      'Sistema de reservas online con confirmación automática, recordatorio 1h antes de la clase y gestión de lista de espera. Si alguien cancela, el primero en lista entra automáticamente y recibe aviso. Los pagos mensuales se cobran solos. Los dueños solo abren el gimnasio.',
  },
  {
    name: 'Nutri & Move',
    slug: 'nutri-move',
    type: 'Web + CRM',
    tagline: 'Un negocio de dos personas que funciona como uno de diez.',
    context: 'Nutricionista y entrenadora personal trabajando juntas sin sistema común.',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #9333ea 50%, #ec4899 100%)',
    gradientA: 'linear-gradient(135deg, #3b0764 0%, #9333ea 100%)',
    gradientB: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
    gradientC: 'linear-gradient(135deg, #1a0a2e 0%, #ec4899 100%)',
    metrics: [
      { value: '3x', label: 'Más clientes con mismo equipo' },
      { value: '-5h', label: 'Menos admin a la semana' },
      { value: '94%', label: 'Retención de clientes' },
    ],
    challenge:
      'Laura y Ana tenían clientes en común pero usaban herramientas distintas. Perdían seguimiento, duplicaban trabajo y cada nueva alta les costaba 1 hora de papeleo. El negocio crecía pero la rentabilidad no.',
    automation:
      'CRM personalizado donde cada cliente tiene su ficha, objetivos, progreso y pagos. Cuando una profesional actualiza algo, la otra lo ve al instante. Los informes mensuales se generan solos. Las renovaciones se cobran automáticamente con recordatorio previo.',
  },
  {
    name: 'Run Academy',
    slug: 'run-academy',
    type: 'Landing page',
    tagline: '200 inscritos antes de abrir las puertas.',
    context: 'Academia online de running lanzando su primer curso de temporada.',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1d4ed8 50%, #3b82f6 100%)',
    gradientA: 'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%)',
    gradientB: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    gradientC: 'linear-gradient(135deg, #0a1628 0%, #3b82f6 100%)',
    metrics: [
      { value: '200', label: 'Inscritos en 48 horas' },
      { value: '€24.000', label: 'Facturación del lanzamiento' },
      { value: '11%', label: 'Conversión de la landing' },
    ],
    challenge:
      'Javier tenía una comunidad de corredores amateur en Strava pero no sabía cómo monetizarla. Cada vez que hablaba de su curso en historias, recibía muchos "me interesa" pero nadie pagaba.',
    automation:
      'Página de pre-inscripción con lead magnet (plan de 4 semanas gratis), secuencia de email de 7 días calentando el lanzamiento y apertura de carrito con temporizador. Los interesados llegaron ya convencidos el día de la apertura.',
  },
  {
    name: 'Strength Lab',
    slug: 'strength-lab',
    type: 'Web corporativa',
    tagline: 'La web que convence antes de que abras la boca.',
    context: 'Estudio de fuerza y acondicionamiento en Valencia con web amateur desactualizada.',
    gradient: 'linear-gradient(135deg, #111827 0%, #374151 50%, #6b7280 100%)',
    gradientA: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
    gradientB: 'linear-gradient(135deg, #374151 0%, #6b7280 100%)',
    gradientC: 'linear-gradient(135deg, #111827 0%, #6b7280 100%)',
    metrics: [
      { value: '+210%', label: 'Tráfico orgánico en 3 meses' },
      { value: '4.9★', label: 'Valoración media Google' },
      { value: '+45%', label: 'Ticket medio por cliente' },
    ],
    challenge:
      'El estudio era referente en la zona pero su web parecía de 2012. Los clientes de mayor poder adquisitivo, los que querían contratar packs premium, no llegaban porque la imagen no transmitía el nivel del servicio.',
    automation:
      'Rediseño completo con foco en posicionamiento premium. Fichas de entrenadores con certificaciones, vídeos de metodología y testimonios verificados. Integración con Google My Business para actualización automática de valoraciones y respuesta a reseñas asistida.',
  },
  {
    name: 'MindBody Studio',
    slug: 'mindbody-studio',
    type: 'Reservas online',
    tagline: 'Cero llamadas. Cero emails. Solo clases llenas.',
    context: 'Estudio de yoga y pilates gestionando todo por teléfono y cuaderno.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0891b2 50%, #06b6d4 100%)',
    gradientA: 'linear-gradient(135deg, #164e63 0%, #0891b2 100%)',
    gradientB: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    gradientC: 'linear-gradient(135deg, #0f172a 0%, #06b6d4 100%)',
    metrics: [
      { value: '100%', label: 'Reservas digitales' },
      { value: '-3h', label: 'De gestión diaria' },
      { value: '+35%', label: 'Ingresos por bonos' },
    ],
    challenge:
      'Marta pasaba las mañanas respondiendo mensajes y llamadas para cuadrar horarios. Los no-shows le costaban dinero y no tenía sistema para cobrar cancelaciones de última hora.',
    automation:
      'Sistema de reservas con pago anticipado obligatorio, política de cancelación automatizada y recordatorio por SMS 2 horas antes. Los bonos de sesiones se venden online, se descuentan automáticamente y avisan cuando quedan 2 sesiones para renovar.',
  },
  {
    name: 'Elite Performance',
    slug: 'elite-performance',
    type: 'Funnel de ventas',
    tagline: 'De €0 a €40k recurrentes en un trimestre.',
    context: 'Preparador físico de alto rendimiento sin sistema de venta online.',
    gradient: 'linear-gradient(135deg, #1a0505 0%, #991b1b 50%, #ef4444 100%)',
    gradientA: 'linear-gradient(135deg, #450a0a 0%, #991b1b 100%)',
    gradientB: 'linear-gradient(135deg, #991b1b 0%, #ef4444 100%)',
    gradientC: 'linear-gradient(135deg, #1a0505 0%, #ef4444 100%)',
    metrics: [
      { value: '4x', label: 'ROI en 60 días' },
      { value: '€40k', label: 'MRR al tercer mes' },
      { value: '92%', label: 'Tasa de renovación' },
    ],
    challenge:
      'Carlos trabajaba con deportistas de élite pero cobraba lo mismo que un entrenador de barrio. Todo era manual, todo era por referencia y no podía escalar sin clonarse. Quería un sistema que vendiera su metodología premium.',
    automation:
      'Funnel completo: anuncio → landing de aplicación (no de venta directa) → formulario de cualificación → llamada de ventas automatizada en el calendario → onboarding automático post-pago. Solo habla con quien ya quiere comprar. El sistema filtra y calienta solo.',
  },
];

export default projects;
