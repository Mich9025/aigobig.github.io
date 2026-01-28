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
      "Propuesta de valor y plan de ejecución",
      "Para directores y gerentes de operación",
      "Gestión de Capacitaciónes y reporteria"
    ]
  },
  {
    id: 2,
    type: SlideType.PROBLEM,
    theme: 'light',
    title: "Contexto del Problema",
    subtitle: "Estado Actual y Fricción",
    content: [
      "Dependencia de data operativa sucia y dispersa.",
      "Consolidación manual propensa a errores.",
      "Identidad de usuario fragmentada (Zoom vs SAP).",
      "Validación compleja: >80% tiempo en sesión."
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
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
    id: 9,
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
        "https://images.unsplash.com/photo-1535378437323-9555841f5d21?q=80&w=2548&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
    ]
  },
  {
    id: 10,
    type: SlideType.INFO,
    theme: 'light',
    title: "Stack & Arquitectura",
    subtitle: "Tecnología Escalable y Segura",
    content: [
      "Frontend: Next.js + React.js + TypeScript (Velocidad y Tipado).",
      "Backend: Node.js con arquitectura orientada a eventos.",
      "Base de Datos: SQL Relacional (PostgreSQL) para integridad de datos.",
      "Infraestructura: Despliegue en la nube con CI/CD automatizado."
    ],
    mermaidDefinition: `
    graph TD
    subgraph Client [Cliente]
      Browser[Navegador Web]
    end

    subgraph Cloud [Infraestructura Cloud]
      LB[Load Balancer]
      
      subgraph App [Aplicación]
        Next[Next.js Frontend]
        API[Node.js API]
        Worker[Workers Asíncronos]
      end
      
      subgraph Data [Datos]
        DB[(PostgreSQL)]
        Cache[(Redis Cache)]
      end
    end

    subgraph External [Fuentes Externas]
      Zoom[Zoom API]
      Master["Master Tiendas (Excel/CSV)"]
    end

    Browser -->|HTTPS| LB
    LB --> Next
    Next -->|SSR/API| API
    API -->|Query| DB
    API -->|Cache| Cache
    API -->|Job| Worker
    Worker -->|Process| Zoom
    Worker -->|Ingest| Master
    Worker -->|Write| DB
    
    style Client fill:#f9f,stroke:#333,stroke-width:2px
    style Cloud fill:#e1f5fe,stroke:#0277bd,stroke-width:2px
    style Data fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
    `
  },
  {
    id: 11,
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
    id: 12,
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