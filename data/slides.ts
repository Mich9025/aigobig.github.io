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