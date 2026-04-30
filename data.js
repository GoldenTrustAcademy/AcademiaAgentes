/**
 * =====================================================
 * GOLDEN TRUST FINANCIAL GROUP · ACADEMIA
 * ARCHIVO DE DATOS — EDITA AQUÍ TUS MÓDULOS
 * =====================================================
 *
 * CÓMO AGREGAR UN VIDEO DE GOOGLE DRIVE:
 * 1. Abre el video en Google Drive
 * 2. Compartir → "Cualquier persona con el enlace"
 * 3. Copia el ID: drive.google.com/file/d/[ID]/view
 * 4. Pega solo el ID en "driveId" abajo
 *
 * RECURSOS: { label: "Nombre", url: "https://...", icon: "📄" }
 * ACTIVIDADES: { numero: "6-8", label: "Citas al día", desc: "..." }
 * CONSEJO: tip táctico corto de Elizabeth
 * =====================================================
 */

const ACADEMY_DATA = {
  name:       "Golden Trust Financial Group",
  subtitle:   "Academia de Producción",
  instructor: "Elizabeth Jiménez",
  logo:       "assets/logo.jpg",

  modules: [
    {
      id: 1,
      title:       "La Mentalidad que Construye Riqueza",
      description: "El mindset que separa a los Top Producers del resto. Desarrolla la mentalidad ganadora para alcanzar el éxito en el sector financiero.",
      driveId:     "1Irlxj0x49nJ3GcH81wH-0ht4yht5jgpg",
      frase:       "El éxito en este negocio no es suerte — es una decisión que tomas cada mañana cuando decides ser la mejor versión de ti mismo.",
      puntos: [
        "Por qué el 80% de los productores fracasan en el primer año",
        "Las 3 creencias que tienen todos los Top Producers",
        "Cómo reprogramar tu mente para el éxito financiero",
        "El ritual diario que te mantiene en modo productor"
      ],
      actividades: null,
      consejo: null,
      tarea: "Escribe tus 3 razones más poderosas para triunfar en Golden Trust. Léelas cada mañana antes de empezar tu día.",
      resources: [
        { label: "Crea tus Metas · Golden Trust", url: "https://docs.google.com/spreadsheets/u/1/d/1feAPuCjxpHTEfqayYPIB4PKIoMnbR2Rx/copy?gid=618981212#gid=618981212", icon: "📊" },
        { label: "Checklist de Mentalidad Ganadora", url: "https://drive.google.com/file/d/1YIhM65ohPwlcXWnEUivIsVMvqbDbnf6G/preview", icon: "✅" }
      ]
    },
    {
      id: 2,
      title:       "Disciplina de Élite: Tu Ruta al Éxito",
      description: "Tu horario de trabajo es tu compromiso con el éxito. Aprende a estructurar tu día para maximizar resultados.",
      driveId:     "1LJD_7psngMSC7R82iGmXjENHmVRUXYlr",
      frase:       "La disciplina es el puente entre tus metas y tus logros.",
      puntos: [
        "Cómo construir un horario de trabajo que produzca resultados",
        "Las actividades diarias que generan más ingresos",
        "Cómo eliminar las distracciones que te roban productividad",
        "El sistema de seguimiento que usan los mejores del equipo"
      ],
      actividades: [
        { numero: "1",   label: "Venta diaria",          desc: "Meta diaria mínima del equipo Golden Trust" },
        { numero: "3×",  label: "Intentos por cliente",  desc: "Llama 2-3 veces al día hasta contactarlo" },
        { numero: "6-8", label: "Citas al día",           desc: "El volumen que sostiene una producción consistente" }
      ],
      consejo: "Los primeros 90 minutos de tu día determinan tu producción. No revises redes sociales antes de hacer tu primera llamada — ese tiempo es oro puro.",
      tarea: "Descarga tu cronograma según tu etapa, complétalo con tu horario real y compártelo con tu upline antes de tu próxima reunión de equipo.",
      resources: [
        { label: "Cronograma Agentes Nuevos",    url: "https://drive.google.com/file/d/1hIvADlTpO6nGlaCjVBBkXBZ4EdNZzDtd/preview", icon: "📄" },
        { label: "Cronograma Agentes Antiguos",  url: "https://drive.google.com/file/d/12aurdAyrSftJdpSRf_2GMdHjdIt1wXSH/preview", icon: "📄" }
      ]
    },
    {
      id: 3,
      title:       "Bienvenido al Sistema Golden Trust",
      description: "Todo lo que necesitas para arrancar con fuerza. Conoce las herramientas y procesos fundamentales del negocio.",
      driveId:     null,
      frase:       "Un sistema probado en manos de alguien comprometido es imbatible.",
      puntos: [
        "Cómo funciona el negocio de principio a fin",
        "Las plataformas y herramientas que usarás cada día",
        "Tu mapa de ruta para los primeros 90 días",
        "Cómo aprovechar al máximo el apoyo de tu equipo"
      ],
      actividades: null,
      consejo: null,
      tarea: "Completa tu perfil en todas las plataformas y agenda tu primera reunión de equipo.",
      resources: []
    },
    {
      id: 4,
      title:       "El Lenguaje que Abre Puertas y Cierra Ventas",
      description: "Domina el guión IUL que convierte conversaciones en ventas. El lenguaje correcto marca toda la diferencia.",
      driveId:     null,
      frase:       "Las palabras correctas en el momento correcto valen más que cualquier producto.",
      puntos: [
        "El guión IUL paso a paso que funciona en el campo real",
        "Cómo manejar las objeciones más comunes",
        "Las frases exactas que generan confianza inmediata",
        "Cómo adaptar tu lenguaje a cada tipo de cliente"
      ],
      actividades: null,
      consejo: null,
      tarea: "Practica el guión completo frente al espejo 3 veces y grábate una vez para escucharte.",
      resources: []
    },
    {
      id: 5,
      title:       "Encuentra a Quien Sí Puede Decirte Sí",
      description: "Entiende la elegibilidad y enfoca tu energía donde hay resultados. Aprende a identificar y calificar prospectos.",
      driveId:     null,
      frase:       "No se trata de hablar con todos — se trata de hablar con los correctos.",
      puntos: [
        "Los criterios exactos de elegibilidad para un IUL",
        "Cómo calificar un prospecto en menos de 5 minutos",
        "Dónde encontrar los mejores prospectos para tu negocio",
        "Cómo construir una lista de 100 prospectos calificados"
      ],
      actividades: null,
      consejo: null,
      tarea: "Haz una lista de 20 personas de tu círculo que cumplan los criterios de elegibilidad.",
      resources: []
    },
    {
      id: 6,
      title:       "Cierres Reales: Aprende Viendo Ganar",
      description: "Escucha cierres reales y modela lo que funciona. Analiza casos de éxito y replica las estrategias ganadoras.",
      driveId:     null,
      frase:       "El mejor entrenamiento es ver a alguien ganar y preguntarte: ¿qué hizo diferente?",
      puntos: [
        "Análisis de cierres reales del equipo Golden Trust",
        "Los patrones que se repiten en cada cierre exitoso",
        "Cómo anticipar el momento exacto para cerrar",
        "Qué hacer cuando el cliente dice 'necesito pensarlo'"
      ],
      actividades: null,
      consejo: null,
      tarea: "Acompaña a un compañero de equipo a una cita y toma notas de su proceso de cierre.",
      resources: []
    },
    {
      id: 7,
      title:       "Ilustra como Experto, Vende con Confianza",
      description: "Aprende a ilustrar con cada compañía como un experto. Las ilustraciones son tu herramienta de cierre más poderosa.",
      driveId:     null,
      frase:       "Cuando dominas los números, el cliente confía. Cuando el cliente confía, compra.",
      puntos: [
        "Cómo correr ilustraciones en cada plataforma del equipo",
        "Los números que más impactan al cliente",
        "Cómo presentar una ilustración de forma clara y poderosa",
        "Los errores más comunes al ilustrar y cómo evitarlos"
      ],
      actividades: null,
      consejo: null,
      tarea: "Corre 5 ilustraciones diferentes y preséntaselas a tu upline antes de tu próxima cita.",
      resources: []
    },
    {
      id: 8,
      title:       "De la Presentación a la Firma",
      description: "Cómo someter un IUL correctamente desde el primer día. Domina el proceso de principio a fin.",
      driveId:     null,
      frase:       "Una aplicación bien sometida es una póliza emitida. Los detalles importan.",
      puntos: [
        "El proceso completo de sometimiento de una aplicación IUL",
        "Los errores que causan retrasos o rechazos",
        "Cómo preparar al cliente para el proceso médico",
        "El seguimiento correcto después de la firma"
      ],
      actividades: null,
      consejo: null,
      tarea: "Practica llenando una aplicación completa con tu upline antes de hacerlo con un cliente.",
      resources: []
    },
    {
      id: 9,
      title:       "La Entrega que lo Cambia Todo",
      description: "La entrega de póliza: el momento más poderoso del proceso. Convierte cada entrega en una experiencia memorable.",
      driveId:     null,
      frase:       "La entrega de la póliza no es el final de la venta — es el inicio de una relación para toda la vida.",
      puntos: [
        "Cómo convertir la entrega en un momento memorable",
        "Las palabras exactas que generan referidos en la entrega",
        "Cómo revisar la póliza con el cliente con confianza",
        "El sistema para pedir referidos sin sentirte incómodo"
      ],
      actividades: null,
      consejo: null,
      tarea: "Prepara tu guión de entrega de póliza y practícalo con un compañero de equipo.",
      resources: []
    },
    {
      id: 10,
      title:       "Las Herramientas del Productor Golden",
      description: "Todo lo que un Top Producer necesita siempre a la mano para maximizar su desempeño.",
      driveId:     null,
      frase:       "Un productor sin sus herramientas es como un cirujano sin bisturí.",
      puntos: [
        "Las apps y plataformas esenciales del día a día",
        "Cómo organizar tu flujo de trabajo para producir más",
        "Las plantillas y materiales que te ahorran tiempo",
        "Cómo usar la tecnología para hacer seguimiento efectivo"
      ],
      actividades: null,
      consejo: null,
      tarea: "Descarga e instala todas las herramientas del equipo y configúralas correctamente.",
      resources: []
    },
    {
      id: 11,
      title:       "Más Allá de Tu Círculo: Crece Sin Fronteras",
      description: "Estrategias para crecer tu red y llegar a nuevos mercados. Aprende a generar referidos y abrir nuevas puertas.",
      driveId:     null,
      frase:       "Tu mercado no termina donde termina tu agenda — termina donde termina tu creatividad.",
      puntos: [
        "Cómo generar referidos de forma natural y consistente",
        "Estrategias para entrar a mercados que no conoces",
        "Cómo usar las redes sociales para atraer prospectos",
        "El poder del mercado hispano y cómo aprovecharlo"
      ],
      actividades: null,
      consejo: null,
      tarea: "Pide 3 referidos esta semana a clientes o conocidos y regístralos en tu tracker.",
      resources: []
    },
    {
      id: 12,
      title:       "Cierra Más Rápido con las Herramientas Correctas",
      description: "Usa las herramientas digitales a tu favor para cerrar más rápido y mejor.",
      driveId:     null,
      frase:       "La tecnología no reemplaza la relación — la potencia.",
      puntos: [
        "Las herramientas digitales que aceleran el proceso de venta",
        "Cómo hacer presentaciones virtuales que cierran",
        "Automatizaciones simples que te ahorran horas cada semana",
        "Cómo dar seguimiento digital sin perder el toque personal"
      ],
      actividades: null,
      consejo: null,
      tarea: "Configura tu CRM o sistema de seguimiento y agrega tus 10 prospectos más calientes.",
      resources: []
    },
    {
      id: 13,
      title:       "Tu Próximo Nivel: El Plan que Sí Funciona",
      description: "Diseña tu hoja de ruta personalizada hacia el éxito. Establece metas claras y un plan concreto para alcanzarlas.",
      driveId:     null,
      frase:       "No es el plan perfecto el que lleva al éxito — es el plan que realmente ejecutas.",
      puntos: [
        "Cómo definir metas de producción reales y alcanzables",
        "El plan de 90 días que usan los Top Producers del equipo",
        "Cómo medir tu progreso y ajustar tu estrategia",
        "Tu compromiso con Golden Trust y contigo mismo"
      ],
      actividades: null,
      consejo: null,
      tarea: "Escribe tu plan de producción para los próximos 90 días y preséntalo a Elizabeth.",
      resources: []
    }
  ]
};
