// Centralized copy and data for the Laura Sánchez Coach landing.
// Keep all marketing copy here, separated from JSX.

export const CTA_LABEL = "AGENDAR LLAMADA";
export const CALENDAR_ID = "calendar";

export const nav = {
  wordmark: "Laura Sánchez Coach",
  links: [
    { label: "Programa", href: "#what-is" },
    { label: "Metodología", href: "#how-it-works" },
    { label: "Objetivos", href: "#objectives" },
    { label: "Agendar", href: "#calendar" },
  ],
};

export const hero = {
  eyebrow: "Coaching de Alto Impacto para dueños de negocio",
  // Headline split into parts so we can highlight fragments in gold.
  headlineParts: [
    { text: "Liderazgo Estratégico Para Dueños: El ", highlight: false },
    { text: "Sistema Para ", highlight: true },
    { text: "Dejar De Ser El Cuello De Botella Y ", highlight: false },
    { text: "Hacer Crecer Tu Negocio", highlight: true },
  ],
  subheadline:
    "Aprende a delegar con eficacia, desarrolla equipos de alto rendimiento y libera tu agenda para centrarte en la estrategia que realmente hace crecer tu empresa.",
  microcopy: "Diagnóstico estratégico · 30 min · Sin cargo",
  image: "/assets/laura/Laura.webp",
  imageAlt: "Laura Sánchez, coach de liderazgo estratégico para dueños de negocio",
};

export const logos = {
  caption: "Empresas y líderes que confiaron en el proceso",
  items: Array.from({ length: 26 }, (_, i) => ({
    src: `/assets/testimonials/logo_${i + 1}.webp`,
    alt: `Logo de empresa cliente ${i + 1}`,
  })),
};

export const stats = [
  { value: "94%", label: "Clientes Satisfechos" },
  { value: "+300", label: "Líderes de Negocios" },
  { value: "+15", label: "Años de Experiencia" },
  { value: "+50", label: "Industrias Diferentes" },
];

export const situations = {
  title: "SI ALGUNA VEZ PASASTE POR ALGUNA DE ESTAS SITUACIONES:",
  painsTitle: "Lo que estás viviendo hoy",
  desiresTitle: "Lo que realmente querés",
  pains: [
    "Sentís culpa cuando no trabajás, y estrés cuando estás trabajando.",
    "Tu negocio tocó un techo porque tu capacidad operativa no da para más.",
    "Sos el primero en llegar y el último en irte, pero sentís que no avanzás.",
    "Revisás el trabajo de todo tu equipo porque nadie lo hace como vos.",
    "Te aterra pensar qué pasaría con tu empresa si te enfermás o te ausentás un mes.",
  ],
  desires: [
    "Te gustaría tener más tiempo para tus hijos y para tu familia.",
    "Te gustaría dejar de sentirte esclavo de tu propia empresa.",
    "Querés dejar de apagar incendios y dedicarte a la estrategia.",
    "Querés que tu equipo pueda tomar decisiones y crecer tu negocio sin que estés vos.",
    "Facturás bien, pero buscas tener más tiempo para disfrutar tu vida.",
  ],
  closing: "Entonces este programa es exactamente lo que necesitas...",
};

export const whatIs = {
  title: "¿QUÉ ES EL COACHING DE ALTO IMPACTO?",
  image: "/assets/laura/Laura_2.webp",
  imageAlt: "Laura Sánchez durante una sesión de coaching ejecutivo",
  // Paragraphs as arrays of segments to allow bold emphasis without HTML in copy.
  paragraphs: [
    [
      {
        text:
          "Probablemente cada decisión pasa por vos; si no estás vos, las cosas no salen o salen mal. Tu equipo te consulta hasta lo más mínimo y, aunque facturás bien, pagás el precio con tu tiempo, tu salud y tu vida familiar. Sabés que tenés que delegar, pero la desconfianza o las malas experiencias pasadas te paralizan.",
      },
    ],
    [
      { text: "" },
      { text: "El Coaching de Alto Impacto", strong: true },
      {
        text:
          " es la herramienta para romper ese círculo vicioso. No es una charla motivacional para que \"tengas ganas\" de delegar. Es un entrenamiento planificado y técnico de ",
      },
      { text: "120 días", strong: true },
      {
        text:
          " donde vamos a trabajar para \"sacarte\" de la operación diaria de forma segura y ordenada. Transformamos tu rol de ",
      },
      { text: "\"dueño-operario\" a CEO", strong: true },
      {
        text:
          ", instalando los sistemas de gestión y las habilidades de liderazgo necesarias para que ganes libertad real sin poner en riesgo la rentabilidad.",
      },
    ],
    [
      {
        text:
          "¿Qué hacemos? Diseñamos e implementamos la estructura que te falta para que tu empresa ",
      },
      { text: "funcione con o sin vos", strong: true },
      {
        text:
          ", no gracias a vos. Te enseño a construir un equipo autónomo para que puedas dejar de operar y empezar a dirigir de verdad.",
      },
    ],
  ],
};

export const howItWorks = {
  title: "¿CÓMO FUNCIONA?",
  steps: [
    {
      number: "01",
      tag: "#1",
      title: "Claridad y Dirección Estratégica",
      text:
        "Analizamos a fondo tu negocio para encontrar la razón del desorden y la falta de tiempo. Creamos un plan de acción sencillo y definimos un objetivo claro para que sepas exactamente qué hacer cada día.",
    },
    {
      number: "02",
      tag: "#2",
      title: "Liderazgo y Autonomía",
      text:
        "Podrás dejar de estar en todos los detalles para convertirte en el líder que tu empresa necesita para crecer. Aprenderás a repartir tareas con confianza y a formar un equipo que resuelva las cosas por sí mismo, estés o no estés en la oficina.",
    },
    {
      number: "03",
      tag: "#3",
      title: "Ejecución y Resultados Medibles",
      text:
        "Organizamos el trabajo y usamos números claros y fáciles de entender para medir si vamos por buen camino. Así, dejarás de adivinar y empezarás a tomar decisiones basadas en lo que realmente funciona.",
    },
    {
      number: "04",
      tag: "#4",
      title: "Expansión y Bienestar",
      text:
        "El resultado final: un negocio que crece y gana más dinero sin exigirte todo tu tiempo. Recuperarás tu vida personal, tu energía y tu tranquilidad, haciendo que tu empresa te dé la libertad que siempre quisiste.",
    },
  ],
};

export const objectives = {
  title: "¿CUÁLES SON LOS OBJETIVOS DE ESTE PROGRAMA?",
  intro:
    "Mi metodología está diseñada con ingeniería inversa.\nPartimos del resultado que querés (libertad y crecimiento) y construimos los sistemas para llegar ahí.\nEstos son los 3 pilares que vamos a instalar en tu empresa:",
  items: [
    {
      number: "1",
      title: "Construir un Equipo Autónomo",
      text:
        "El objetivo no es que \"te ayuden\", es que resuelvan. Pasaremos de un equipo que espera órdenes a uno que asume responsabilidades y toma decisiones alineadas. Lograremos que la empresa funcione igual (o mejor) cuando vos no estás en la oficina.",
    },
    {
      number: "2",
      title: "Sistemas para Soltar el Control",
      text:
        "Tu miedo a delegar es lógico: no tenés procesos. Implementaremos tableros de control y métricas claras (KPIs). Así podrás dejar de estar encima de todos, para pasar a una gestión por resultados. Soltarás la operación, pero nunca el control estratégico.",
    },
    {
      number: "3",
      title: "Recuperar tu Tiempo",
      text:
        "Vas a dejar de invertir tu hora (la más cara de la empresa) en tareas de 10 dólares. El objetivo final es limpiar tu agenda operativa para que puedas enfocarte en la expansión del negocio, o simplemente, estar con tu familia sin el teléfono en la mano.",
    },
  ],
};

export const calendar = {
  title: "Agendá tu llamada estratégica",
  subtitle:
    "Si tu negocio depende 100% de vos, si necesitás reorganizar tu proyecto, o si querés cambiar la forma en la que vivís y trabajás, llegaste al lugar indicado.",
  duration: "30 min",
  sideText: [
    "Si tu negocio depende 100% de vos, si necesitas reorganizar tu proyecto, o si querés cambiar la forma en la que vivís y trabajas, llegaste al lugar indicado.",
    "Trabajamos para que emprendedores y empresarios vivan como realmente anhelan vivir.",
  ],
  avatar: "/assets/laura/Laura_2.webp",
  avatarAlt: "Laura Sánchez",
  iframeSrc: "https://links.iqautomated.io/widget/booking/F5hf5skpjw7RN7blBQA9",
  iframeId: "F5hf5skpjw7RN7blBQA9_1782680831657",
  embedScript: "https://links.iqautomated.io/js/form_embed.js",
};

export const aboutLaura = {
  title: "SOY LAURA SANCHEZ",
  image: "/assets/laura/Laura_3.webp",
  imageAlt: "Retrato de Laura Sánchez, coach de liderazgo",
  paragraphs: [
    "Después de dejar mi carrera corporativa, dediqué mi misión a una sola cosa: Ayudar a empresarios y ejecutivos a transformar su liderazgo para que recuperen su activo más valioso: El tiempo.",
    "Mi objetivo es que multipliques tus resultados sin tener que sacrificar tu vida en el proceso.",
  ],
  milestones: [
    {
      title: "De la Operación a la Estrategia",
      text:
        "En Zanellato Maquinarias, llevé a su dueña de la operación diaria a la estrategia en solo 6 meses.",
    },
    {
      title: "Crecimiento Exponencial",
      text:
        "American Vart eliminamos la microgestión, para crecer de revender producto local a importar 3 contenedores mensuales.",
    },
    {
      title: "Liderazgo de Alto Nivel",
      text:
        "En Mercedes Benz ayudé a dos de sus ejecutivos a ser promovidos a directores de área para LATAM.",
    },
    {
      title: "Impacto General",
      text:
        "He trabajado con más de 30 organizaciones y 50 ejecutivos para crear equipos autónomos y negocios más rentables.",
    },
  ],
};

export const faq = {
  title: "PREGUNTAS FRECUENTES",
  items: [
    {
      question:
        "\"NO TENGO TIEMPO PARA EMPEZAR UN PROGRAMA COMO ESTE, ¿CÓMO PODRÍA HACERLO?\"",
      answer: [
        "Entiendo perfectamente esa sensación. De hecho, la mayoría de mis clientes llegan pensando lo mismo.",
        "La respuesta es simple: este programa no es una tarea más en tu agenda, es el sistema para liberar tu agenda.",
        "Desde el primer encuentro, nos enfocamos en identificar y delegar tareas de bajo impacto para que recuperes horas en tu semana.",
        "La pequeña inversión de tiempo que haces al principio se multiplica rápidamente, dándote más tiempo libre y foco para lo que de verdad importa.",
      ],
    },
    {
      question:
        "\"MI EMPRESA Y MIS PROBLEMAS SON MUY ESPECÍFICOS. ¿ESTE PROGRAMA ES UN 'ENLATADO' O REALMENTE SE ADAPTA A MI CASO?\"",
      answer: [
        "No creo en las soluciones genéricas. Tu empresa es única, y por eso mi programa \"Elite\" es 100% personalizado.",
        "Todo comienza con un diagnóstico profundo de tu negocio y tu liderazgo.",
        "No te entrego un manual teórico; trabajo contigo mano a mano en tus desafíos reales, con tu equipo y en tus reuniones. Mi objetivo es darte soluciones a medida que funcionen para tu realidad específica.",
      ],
    },
    {
      question:
        "\"¿NO SERÍA MEJOR INVERTIR ESTE DINERO EN MARKETING O EN CONTRATAR A ALGUIEN MÁS?\"",
      answer: [
        "Es una pregunta válida. Podrías contratar más gente, pero si tú sigues siendo el cuello de botella, solo estarás pagando más sueldos para supervisar a más personas.",
        "Invertir en tu liderazgo es la acción más rentable que puedes hacer.",
        "Por ejemplo, al aprender a delegar solo un 10% de tus tareas, podrías ahorrar un promedio de 4 horas semanales. A un valor estimado de tu hora, eso representa un ahorro de miles de dólares al mes. Este programa se paga solo y potencia cualquier otra inversión que hagas.",
      ],
    },
    {
      question:
        "\"SIENTO QUE EL PROBLEMA PRINCIPAL ES MI EQUIPO, NO YO. ¿POR QUÉ DEBERÍA HACER ESTE PROGRAMA?\"",
      answer: [
        "Es una frustración muy común sentir que tu equipo no tiene la camiseta puesta o no toma la iniciativa.",
        "Lo que trabajamos juntos es precisamente eso: te doy las herramientas para transformar a ese grupo de personas en un equipo autónomo y de alto rendimiento.",
        "Un equipo es el reflejo de su líder. Cuando tú cambias tu forma de liderar, delegar y comunicar, tu equipo responde de una manera que hoy te parece imposible.",
        "El trabajo empieza contigo, pero el resultado lo ves en toda la organización.",
      ],
    },
    {
      question:
        "\"YA HE HECHO CURSOS DE LIDERAZGO Y ERAN PURA TEORÍA. ¿QUÉ RESULTADOS CONCRETOS Y APLICABLES VOY A OBTENER AQUÍ?\"",
      answer: [
        "Yo tampoco creo en la teoría que no se puede aplicar. Mi método es vivencial y práctico.",
        "1. No te llevas un diploma, te llevas un sistema: Implementaremos juntos tableros de control para medir el rendimiento de tu equipo con números claros.",
        "2. Resultados desde la primera semana: Cada sesión termina con un plan de acción concreto para que apliques de inmediato y veas cambios reales.",
        "3. Menos horas de trabajo: El objetivo principal es que ganes eficiencia para que puedas dedicarte a la estrategia, lo que resulta directamente en más tiempo ganado y más dinero.",
      ],
    },
  ],
};

export const footer = {
  wordmark: "Laura Sánchez Coach",
  copyright: "© Copyright 2026. Laura Sanchez. All Rights Reserved.",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/laurasanchezcoach/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Laura-Tu-Coach/61574003591803/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/laura.tucoach/",
    },
  ],
};
