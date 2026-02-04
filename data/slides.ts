import { SlideData, SlideType } from '../types';

export const slides: SlideData[] = [
  {
    id: 1,
    type: SlideType.HERO,
    theme: 'dark',
    title: "GoBig AI",
    subtitle: "Resultados con inteligencia, creatividad y tecnología",
    content: []
  },
  {
    id: 2,
    type: SlideType.PROBLEM,
    theme: 'light',
    title: "El problema real",
    subtitle: "Desafíos Operativos",
    content: [
      "El 58% de las empresas operan sin bases de datos integradas.",
      "La falta de capacitación genera cuellos de botella.",
      "Procesos manuales reducen la velocidad de respuesta.",
      "Tienen buen producto, pero poca visibilidad interna."
    ]
  },
  {
    id: 3,
    type: SlideType.SOLUTION,
    theme: 'light',
    title: "¿Qué hacemos?",
    subtitle: "Metodología de Automatización",
    process: [
      {
        step: "01",
        title: "Diagnóstico",
        description: "Auditoría de flujos actuales y detección de silos de datos."
      },
      {
        step: "02",
        title: "Estrategia",
        description: "Diseño de arquitectura de datos y selección de modelos IA."
      },
      {
        step: "03",
        title: "Integración",
        description: "Conexión de APIs, CRMs y bases de datos unificadas."
      },
      {
        step: "04",
        title: "Deploy",
        description: "Implementación de agentes y capacitación del equipo."
      }
    ]
  },
  {
    id: 4,
    type: SlideType.METRICS,
    theme: 'light',
    title: "Métricas de Impacto",
    subtitle: "Optimizando el ROI Interno",
    metrics: [
      {
        value: "80%",
        label: "Reducción de Tiempo",
        subLabel: "En análisis y procesamiento"
      },
      {
        value: "50%",
        label: "Menor Costo",
        subLabel: "En gastos operativos"
      },
      {
        value: "90%",
        label: "Efectividad",
        subLabel: "En tareas automatizadas"
      },
      {
        value: "100%",
        label: "Trazabilidad",
        subLabel: "Control total de data"
      }
    ]
  },
  {
    id: 5,
    type: SlideType.CASES,
    theme: 'light',
    title: "Casos de Éxito",
    subtitle: "Resultados Reales",
    cases: [
      {
        client: "Scrybe.pro",
        industry: "Finanzas & Legal",
        challenge: "Valoración empresarial manual, lenta y costosa.",
        solution: "Agente conversacional de análisis.",
        result: "Reducción del 80% en tiempo de valoración.",
        logoColor: "text-blue-600"
      },
      {
        client: "Cruz Verde",
        industry: "Farmacéutica",
        challenge: "Baja eficiencia en gestión de llamadas.",
        solution: "Agente de audio para métricas y llamadas.",
        result: "Mejora del 90% en tasa de ejecución.",
        logoColor: "text-green-600"
      },
      {
        client: "Farma Colombia",
        industry: "Salud",
        challenge: "Procesos manuales de farmacovigilancia.",
        solution: "IA para normativa y clasificación.",
        result: "Automatización completa de riesgos.",
        logoColor: "text-emerald-700"
      }
    ]
  },
  {
    id: 6,
    type: SlideType.CASES,
    theme: 'light',
    title: "Caso Destacado",
    subtitle: "NVO - Logística",
    cases: [
      {
        client: "NVO",
        industry: "Logística y Aliados",
        challenge: "Activación manual de aliados sin validación de capacitación efectiva.",
        solution: "Plataforma e-learning para enseñar el uso del sistema interno de asignación de servicios, con activación automática.",
        result: "Onboarding 100% autónomo con activación inmediata.",
        logoColor: "text-orange-600",
        images: {
            before: "https://darkorchid-raccoon-617111.hostingersite.com/wp-content/uploads/2026/01/Quick-Track-2.jpeg",
            after: "https://darkorchid-raccoon-617111.hostingersite.com/wp-content/uploads/2026/01/Quick-Track.jpeg"
        }
      }
    ]
  },
  {
    id: 7,
    type: SlideType.CONTACT,
    theme: 'dark',
    title: "GoBig.",
    subtitle: "Agency",
    content: [
      "Resultados con inteligencia, creatividad y tecnología",
      "¡CONVERSEMOS!"
    ]
  }
];

export const roadmapSlides: SlideData[] = [
  {
    id: 1,
    type: SlideType.HERO,
    theme: 'dark',
    title: "Roadmap: SAAS",
    subtitle: "Centralización y Escalabilidad de Data Operativa",
    content: [
      "Plan de ejecución para directores, gerentes capacitadores y staff"
    ]
  },
  {
    id: 2,
    type: SlideType.PROBLEM,
    theme: 'light',
    title: "Contexto del Problema",
    subtitle: "Estado Actual y Fricción",
    content: [
      " Dependencia de data operativa sin tratamiento y dispersa.",
      "Consolidación manual propensa a errores.",
      "Identidad de usuario fragmentada (Zoom vs SAP).",
      "Cuello de botella  >80%  del tiempo del equipo en reportería."
    ]
  },
  {
    id: 3,
    type: SlideType.INFO,
    theme: 'light',
    title: "Objetivos de Negocio",
    subtitle: "Éxito Esperado y Metas",
    content: [
      "Centralizar datos: Fuente única de verdad entre Zoom y Master Tiendas.",
      "Normalización: Estandarización de identidad por Nombre + ID SAP.",
      "Automatización: Reducir tiempo de reporting manual a cero.",
      "Adopción: Visualización clara para Directores y Gerentes."
    ]
  },
  {
    id: 4,
    type: SlideType.METRICS,
    theme: 'light',
    title: "Alcance MVP y KPIs",
    subtitle: "Dashboard, Reportes, Ranking y Alertas",
    metrics: [
      {
        value: "Cascade",
        label: "Score",
        subLabel: "Tiendas capacitadas / Total"
      },
      {
        value: ">80%",
        label: "Asistencia",
        subLabel: "Tiempo mínimo válido"
      },
      {
        value: "KPI",
        label: "Retención",
        subLabel: "Permanencia en sesión"
      },
      {
        value: "Quiz",
        label: "Participación",
        subLabel: "Tasa de redemption"
      }
    ]
  },
  {
    id: 5,
    type: SlideType.SOLUTION,
    theme: 'light',
    title: "Roadmap Macro",
    subtitle: "Plan de Ejecución por Fases",
    process: [
      {
        step: "Fase 0",
        title: "Discovery",
        description: "1 semana. Blueprint y auditoría de datos."
      },
      {
        step: "Fase 1",
        title: "MVP",
        description: "4-6 semanas - Hombre. Dashboard central y reportes core."
      },
      {
        step: "Fase 2",
        title: "Full",
        description: "8-12 semanas - Hombre. Workflows avanzados."
      },
      {
        step: "Fase 3",
        title: "Evolución",
        description: "Continuo. Analítica avanzada y correlación de negocio."
      }
    ]
  },
  {
    id: 6,
    type: SlideType.INFO,
    theme: 'light',
    title: "Fase 0: Discovery",
    subtitle: "Duración: 1 Semana",
    content: [
      "Mapeo detallado de fuentes de datos (Zoom, Excel, SAP).",
      "Definición de reglas de normalización de usuarios.",
      "Diseño de arquitectura técnica preliminar.",
      "Criterio de salida: Blueprint aprobado por stakeholders."
    ],
    deliverables: [
        "Propuesta comercial detallada",
        "Setup técnico y de entorno",
        "Diseño de Bases de Datos (ERD)"
    ]
  },
  {
    id: 7,
    type: SlideType.INFO,
    theme: 'light',
    title: "Fase 1: MVP",
    subtitle: "Duración: 4-6 semanas - Hombre",
    content: [
      "Ingesta automática de logs de Zoom y Master de Tiendas.",
      "Dashboard interactivo para Directores y Gerentes.",
      "Integración de Quiz nativo para validación de conocimiento.",
      "Cálculo automático de Cascade Score y Asistencia."
    ],
    deliverables: [
        "Motor de KPIs",
        "Dashboard General Interactivo",
        "Reporte periódico automático",
        "Módulo de Quiz Nativo",
        "Ranking por Tienda y Distrito"
    ],
    images: [
        "https://pub-428bba053a0f499782c7cbc7a5af5402.r2.dev/adidas/dash%20adidas.png",
        "https://pub-428bba053a0f499782c7cbc7a5af5402.r2.dev/adidas/dash%20adidas%202.png"
    ]
  },
  {
    id: 8,
    type: SlideType.DIAGRAM,
    theme: 'light',
    title: "Flujo de Usuario",
    subtitle: "Experiencia UX para Cada Rol",
    mermaidDefinition: `
    graph TD
    Start((Inicio)) --> Login[Login de baja fricción - Autocompletado]
    Login --> SelectRole{Acceso por Rol}
    
    SelectRole -->|Trainer / Team Leader| Create[Crear Entrenamiento]
    SelectRole -->|Director / Gerente| ViewDash[Consultar Dashboard]

    subgraph Gestion_Entrenamiento [Proceso de Registro]
        Create --> Topic[Selección de Categoría / Topic]
        Topic --> Subtopic[Selección de Subtopic - Sugerido por IA]
        Subtopic --> Stores[Asignar Tiendas Involucradas]
        Stores --> PartType{Método de Registro}
        
        PartType -->|QR Code| Scan[Staff escanea QR]
        PartType -->|Manual| Manual[Carga de asistentes anónimos/lista]
        
        Scan --> Validate[Validación de Identidad SAP]
        Manual --> Validate
        
        Validate --> Quiz[Aplicación de Quiz de Retención]
        Quiz --> Save[Guardar y Sincronizar con DB]
    end

    Save --> Reporting[Generación de KPIs Automáticos]
    ViewDash --> Reporting
    
    Reporting --> Export[Descarga de Reportes PDF/Excel]
    Reporting --> IA_Insights[Consulta de Insights Predictivos]

    %% Estilos de Usuario
    style Gestion_Entrenamiento fill:#f0f4f8,stroke:#9fb3c8,stroke-width:1px
    style Login fill:#e3f2fd,stroke:#2196f3
    style IA_Insights fill:#f3e5f5,stroke:#9c27b0
    `
  },
  {
    id: 9,
    type: SlideType.INFO,
    theme: 'light',
    title: "Fase 2: Versión Completa",
    subtitle: "Duración: 4-8 semanas - Hombre",
    content: [
      "Ampliación a Workflows avanzados de aprobación.",
      "Gestión granular de excepciones y justificaciones.",
      "Soporte Multi-canal y Multi-tenant robusto.",
      "Auditoría completa de acciones de usuario."
    ],
    deliverables: [
        "Dashboard por roles (Admin/Gerente)",
        "Workflows avanzados",
        "Canal externo (Aliados)",
        "Construcción del e-learning"
    ],
    images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop"
    ]
  },
  {
    id: 10,
    type: SlideType.INFO,
    theme: 'light',
    title: "Fase 3: Evolución",
    subtitle: "Mejora Continua (Sprints Mensuales)",
    content: [
      "Correlación: Capacitación vs Ventas/Campañas.",
      "Modelos predictivos de desempeño de tienda.",
      "Optimización de UX basada en feedback real.",
      "Integración con nuevas fuentes de datos de negocio."
    ],
    deliverables: [
        "Propuesta de entregables Fase 3",
        "Integración de IA",
        "App web responsiva"
    ],
    images: [
        "https://pub-428bba053a0f499782c7cbc7a5af5402.r2.dev/adidas/dash%20adidas%203.png",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: 11,
    type: SlideType.INFO,
    theme: 'light',
    title: "Stack & Arquitectura",
    subtitle: "Tecnología Escalable y Segura",
    content: [
      "Frontend: Next.js + React.js + TypeScript (Velocidad y Tipado).",
      "Backend: Node.js con arquitectura orientada a eventos.",
      "Infraestructura GCP: Compute Engine, Storage, AlloyDB y Logging.",
      "Integraciones: Zoom y Google Meet para captura de datos."
    ],
    mermaidDefinition: `
    graph TD
    subgraph Client [Cliente]
      Browser[Navegador Web]
    end

    subgraph Cloud [Google Cloud Platform]
      LB[Load Balancer]
      
      subgraph App [Aplicación]
        Next[Next.js Frontend]
        API[Node.js API]
        Worker[Workers Asíncronos]
      end
      
      subgraph Services [Servicios GCP]
        DB[(AlloyDB PostgreSQL)]
        Storage[(Cloud Storage)]
        Logs[Cloud Logging]
      end
    end

    subgraph External [Fuentes Externas]
      Zoom[Zoom / Google Meet]
      Master["Master Tiendas"]
    end

    Browser -->|HTTPS| LB
    LB --> Next
    Next -->|SSR/API| API
    API -->|Query| DB
    API -->|Files| Storage
    API -->|Logs| Logs
    API -->|Job| Worker
    Worker -->|Process| Zoom
    Worker -->|Ingest| Master
    Worker -->|Write| DB
    
    style Client fill:#f9f,stroke:#333,stroke-width:2px
    style Cloud fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    style Services fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
    `
  },
  {
    id: 12,
    type: SlideType.DIAGRAM,
    theme: 'light',
    title: "Flujo de Datos",
    subtitle: "De Fuente Dispersa a Inteligencia Centralizada",
    mermaidDefinition: `
    graph TD
    subgraph Fuentes_Externas [Fuentes de Datos Dispersas]
        A[Sesiones Zoom / Meet] -->|Transcripciones y Logs| E
        B[Excel de Producción] -->|Carga Masiva| E
        C[Internal Training Tracker] -->|Ingesta de Datos| E
        D[Maestro de Tiendas / SAP] -->|IDs y Roles| E
    end

    subgraph Nucleo_SaaS [Cerebro de la Plataforma - GCP]
        E{Agente de Normalización}
        E -- "Limpia errores (ej. 'Messi' -> 'Predator')" --> F[(Fuente de la Verdad DB)]
        E -- "Estandariza IDs SAP y Tiendas" --> F
        
        F --> G[Motor de Cálculo de KPIs]
        F --> H[Módulo de Quiz Nativo]
        F --> I[Deck Room - Onboarding]
        
        subgraph IA_Evolucion [Fase 3: Inteligencia Artificial]
            M[Agentes de IA] -->|Analiza| F
            M -->|Genera| N[Modelos Predictivos]
            M -->|Resumen| O[Transcripciones de Sesiones]
        end
    end

    subgraph Visualizacion_Accion [Outputs y Beneficios]
        G --> J[Dashboard Directores/Gerentes]
        H -->|Tasa de Retención| J
        I -->|Progreso Staff| J
        J --> K[Reportes Automatizados PDF/Excel]
        J --> L[Ranking por Tienda y Distrito]
        N -->|Alertas| J
        O -->|Insights| J
    end

    %% Estilos
    style E fill:#f9f,stroke:#333,stroke-width:2px
    style F fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style IA_Evolucion fill:#f3e5f5,stroke:#7b1fa2,stroke-dasharray: 5 5
    style J fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
    `
  },
  {
    id: 13,
    type: SlideType.INFO,
    theme: 'dark',
    title: "El Costo de la Inacción",
    subtitle: "¿Qué pasa si no evolucionamos hoy?",
    content: [
      "Desperdicio de Capital Humano: El equipo continuará dedicando >80% de su tiempo a 'limpiar datos' en lugar de analizar estrategias.",
      "Ceguera Operativa: Sin centralización, no sabremos qué tiendas realmente consumen el contenido hasta fin de mes (demasiado tarde).",
      "Fricción de Escala: Agregar más tiendas requerirá contratar más personal administrativo de forma lineal.",
      "Datos Efímeros: La data valiosa de las interacciones en Zoom y Meet se seguirá perdiendo día tras día sin ser explotada."
    ]
  },
  {
    id: 14,
    type: SlideType.METRICS,
    theme: 'light',
    title: "Propuesta de Inversión",
    subtitle: "Estructura de Costos por Etapas",
    metrics: [
      {
        value: "$6,500 USD",
        label: "Fase 1: MVP",
        subLabel: "Implementación Core (4-6 semanas)",
        description: "Dashboard central, Ingesta de datos Zoom/SAP, Quiz Nativo y Ranking automatizado."
      },
      {
        value: "$3,500 USD",
        label: "Fase 2: Full Release",
        subLabel: "Funcionalidades Avanzadas - max 200 usuarios",
        description: "Workflows de aprobación, Gestión granular de excepciones, Soporte Multi-canal y Auditoría."
      },
      {
        value: "$5,000 USD*",
        label: "Fase 3: Evolución",
        subLabel: "*Opción SaaS: $15 USD/usuario",
        description: "Modelos predictivos de desempeño, Correlación con ventas y Agentes de IA avanzada."
      }
    ]
  },
  {
    id: 15,
    type: SlideType.INFO,
    theme: 'light',
    title: "Riesgos y Mitigaciones",
    subtitle: "Supuestos Clave",
    content: [
      "Acceso a API/Logs de Zoom (Mitigación: Solicitud temprana IT).",
      "Calidad Master Tiendas (Mitigación: Validadores de entrada).",
      "Cambio Organizacional (Mitigación: Capacitación a usuarios).",
      "Reglas de KPI complejas (Mitigación: Documentación viva)."
    ]
  },
  {
    id: 16,
    type: SlideType.CONTACT,
    theme: 'dark',
    title: "Próximos Pasos.",
    subtitle: "Plan de Arranque",
    content: [
      "Workshop inicial de alineación",
      "DEFINIR CRONOGRAMA"
    ]
  }
];