/**
 * =====================================================
 * GOLDEN TRUST FINANCIAL GROUP · ACADEMIA
 * ARCHIVO DE DATOS — EDITA AQUÍ TUS MÓDULOS
 * =====================================================
 *
 * CÓMO AGREGAR UN VIDEO DE GOOGLE DRIVE:
 * 1. Abre el video en Google Drive
 * 2. Haz clic en "Compartir" → "Cualquier persona con el enlace"
 * 3. Copia el ID del link: drive.google.com/file/d/[ESTE_ES_EL_ID]/view
 * 4. Pega solo el ID en el campo "driveId" abajo
 *
 * CÓMO AGREGAR UNA IMAGEN DE PORTADA:
 * - Coloca las imágenes en la carpeta assets/
 * - Escribe el nombre del archivo en "thumb"
 * - Ejemplo: "thumb": "modulo1.jpg"
 * - Si no tienes imagen, deja "thumb": null
 *
 * CÓMO AGREGAR RECURSOS:
 * - En "resources" agrega links a PDFs, Google Drive, etc.
 * - Ejemplo: { "label": "Guía PDF", "url": "https://..." }
 *
 * =====================================================
 */

const ACADEMY_DATA = {
  name: "Golden Trust Financial Group",
  subtitle: "Academia de Formación Profesional",
  instructor: "Elizabeth Jiménez",
  logo: "assets/logo.jpg",

  modules: [
    {
      id: 1,
      title: "Mentalidad de Top Producer",
      description: "El mindset que separa a los Top Producers del resto. Desarrolla la mentalidad ganadora para alcanzar el éxito en el sector financiero.",
      driveId: null, // ← PEGA AQUÍ EL ID DE GOOGLE DRIVE
      thumb: null,   // ← Ej: "modulo1.jpg"
      resources: []  // ← Ej: [{ label: "Guía PDF", url: "https://..." }]
    },
    {
      id: 2,
      title: "La Disciplina Que Te Lleva al Top",
      description: "Tu horario de trabajo es tu compromiso con el éxito. Aprende a estructurar tu día para maximizar resultados.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 3,
      title: "Tu Primer Paso Hacia el Éxito",
      description: "Onboarding y todo lo que necesitas para arrancar. Conoce las herramientas y procesos fundamentales del negocio.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 4,
      title: "Las Palabras Que Cierran Negocios",
      description: "Domina el guión IUL que convierte conversaciones en ventas. El lenguaje correcto marca toda la diferencia.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 5,
      title: "Conoce a Tu Cliente Ideal",
      description: "Entiende la elegibilidad y enfoca tu energía donde hay resultados. Aprende a identificar y calificar prospectos.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 6,
      title: "Aprende de los Mejores en Acción",
      description: "Escucha cierres reales y modela lo que funciona. Analiza casos de éxito y replica las estrategias ganadoras.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 7,
      title: "Domina el Arte de las Ilustraciones",
      description: "Aprende a ilustrar con cada compañía como un experto. Las ilustraciones son tu herramienta de cierre más poderosa.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 8,
      title: "El Camino al Cierre Perfecto",
      description: "Cómo someter un IUL correctamente desde el primer día. Domina el proceso de principio a fin.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 9,
      title: "El Momento Que Cambia Vidas",
      description: "La entrega de póliza: el momento más poderoso del proceso. Convierte cada entrega en una experiencia memorable.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 10,
      title: "Tu Arsenal de Top Producer",
      description: "Las herramientas y recursos que todo Top Producer necesita tener siempre a la mano para maximizar su desempeño.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 11,
      title: "Expande Tu Mercado Sin Límites",
      description: "Estrategias para crecer tu red y llegar a nuevos mercados. Aprende a generar referidos y abrir nuevas puertas.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 12,
      title: "Tecnología Que Potencia Tus Cierres",
      description: "Usa las herramientas digitales a tu favor para cerrar más rápido y mejor. La tecnología como aliada de tu negocio.",
      driveId: null,
      thumb: null,
      resources: []
    },
    {
      id: 13,
      title: "Tu Plan de Acción Para el Éxito",
      description: "Diseña tu hoja de ruta personalizada hacia el éxito. Establece metas claras y un plan concreto para alcanzarlas.",
      driveId: null,
      thumb: null,
      resources: []
    }
  ]
};
