export interface ChecklistItem {
  id: string;
  title: string;
  isCompleted: boolean;
  items?: ChecklistItem[];
}

export interface Checklist {
  id: string;
  title: string;
  items: ChecklistItem[];
}

export const checklists: Checklist[] = [
  {
    id: "manual-general",
    title: "Manual General de Marca",
    items: [
      {
        id: "intro-filosofia",
        title: "1. Introducción y Filosofía de la Marca",
        isCompleted: false,
        items: [
          {
            id: "historia-proposito",
            title: "1.1. Historia y Propósito",
            isCompleted: false
          },
          {
            id: "mision-vision-valores",
            title: "1.2. Misión, Visión y Valores",
            isCompleted: false
          },
          {
            id: "personalidad-tono",
            title: "1.3. Personalidad y Tono de Comunicación",
            isCompleted: false
          }
        ]
      },
      {
        id: "identidad-visual",
        title: "2. Identidad Visual",
        isCompleted: false,
        items: [
          {
            id: "logotipo",
            title: "2.1. Logotipo",
            isCompleted: false,
            items: [
              {
                id: "versiones",
                title: "Versiones (color, monocromático, negativo)",
                isCompleted: false
              },
              {
                id: "dimensiones-minimas",
                title: "Dimensiones mínimas",
                isCompleted: false
              },
              {
                id: "usos-correctos-incorrectos",
                title: "Usos correctos/incorrectos",
                isCompleted: false
              },
              {
                id: "area-proteccion",
                title: "Área de protección",
                isCompleted: false
              }
            ]
          },
          {
            id: "paleta-colores",
            title: "2.2. Paleta de Colores",
            isCompleted: false,
            items: [
              {
                id: "colores-primarios-secundarios",
                title: "Colores primarios y secundarios",
                isCompleted: false
              },
              {
                id: "colores-complementarios-alerta",
                title: "Colores complementarios y de alerta",
                isCompleted: false
              },
              {
                id: "codigos-color",
                title: "Códigos de color (HEX, RGB, CMYK)",
                isCompleted: false
              }
            ]
          },
          {
            id: "tipografia",
            title: "2.3. Tipografía",
            isCompleted: false,
            items: [
              {
                id: "fuentes-primarias-secundarias",
                title: "Fuentes primarias y secundarias",
                isCompleted: false
              },
              {
                id: "lineamientos-aplicacion",
                title: "Lineamientos de aplicación (tamaños, equivalencias en REM, si aplica)",
                isCompleted: false
              }
            ]
          },
          {
            id: "iconografia-elementos",
            title: "2.4. Iconografía y Elementos Gráficos",
            isCompleted: false,
            items: [
              {
                id: "estilos-iconos",
                title: "Estilos de íconos, ilustraciones, patrones y texturas",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: "lineamientos-contenido",
        title: "3. Lineamientos de Contenido",
        isCompleted: false,
        items: [
          {
            id: "estilo-fotografico",
            title: "3.1. Estilo Fotográfico y Audiovisual",
            isCompleted: false,
            items: [
              {
                id: "tipo-imagenes",
                title: "Tipo de imágenes",
                isCompleted: false
              },
              {
                id: "filtros-proporciones",
                title: "Filtros, proporciones y edición",
                isCompleted: false
              }
            ]
          },
          {
            id: "uso-ilustraciones",
            title: "3.2. Uso de Ilustraciones y Gráficos",
            isCompleted: false,
            items: [
              {
                id: "indicaciones-fotos",
                title: "Indicaciones sobre fotos de banco vs. ilustraciones personalizadas",
                isCompleted: false
              }
            ]
          },
          {
            id: "lenguaje-copywriting",
            title: "3.3. Lenguaje y Copywriting",
            isCompleted: false,
            items: [
              {
                id: "normas-escritura",
                title: "Normas de escritura",
                isCompleted: false
              },
              {
                id: "tono-palabras-clave",
                title: "Tono, palabras clave, hashtags y mensajes clave",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: "ejemplos-casos",
        title: "4. Ejemplos de Uso y Casos Prácticos",
        isCompleted: false,
        items: [
          {
            id: "buenas-practicas",
            title: "4.1. Buenas Prácticas",
            isCompleted: false
          },
          {
            id: "errores-comunes",
            title: "4.2. Errores Comunes",
            isCompleted: false
          }
        ]
      },
      {
        id: "guia-implementacion",
        title: "5. Guía de Implementación y Actualización",
        isCompleted: false,
        items: [
          {
            id: "formatos-archivos",
            title: "5.1. Formatos y Archivos Disponibles",
            isCompleted: false
          },
          {
            id: "politica-actualizaciones",
            title: "5.2. Política de Actualizaciones",
            isCompleted: false,
            items: [
              {
                id: "frecuencia-revision",
                title: "Frecuencia de revisión",
                isCompleted: false
              },
              {
                id: "responsables-manual",
                title: "Responsables de mantener el manual actualizado",
                isCompleted: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "manual-digital",
    title: "Manual Digital (Implementación en Plataforma de Apuestas)",
    items: [
      {
        id: "aplicaciones-medios",
        title: "1. Aplicaciones en Medios Digitales",
        isCompleted: false,
        items: [
          {
            id: "redes-sociales",
            title: "1.1. Redes Sociales",
            isCompleted: false,
            items: [
              {
                id: "formatos-tamaños",
                title: "Formatos, tamaños, uso de imágenes, videos y GIFs",
                isCompleted: false
              }
            ]
          },
          {
            id: "sitio-web",
            title: "1.2. Sitio Web y UX/UI",
            isCompleted: false,
            items: [
              {
                id: "lineamientos-diseño-web",
                title: "Lineamientos de diseño web (tipografías, botones, espacios, navegación)",
                isCompleted: false
              }
            ]
          },
          {
            id: "correo-electronico",
            title: "1.3. Correo Electrónico",
            isCompleted: false,
            items: [
              {
                id: "firma-corporativa",
                title: "Firma corporativa, plantillas de newsletter y tono del mensaje",
                isCompleted: false
              }
            ]
          },
          {
            id: "publicidad-digital",
            title: "1.4. Publicidad Digital",
            isCompleted: false,
            items: [
              {
                id: "banners-anuncios",
                title: "Banners, anuncios en redes, Google Ads y otros formatos publicitarios",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: "componentes-digitales",
        title: "2. Componentes Digitales Específicos",
        isCompleted: false,
        items: [
          {
            id: "sistema-diseño",
            title: "2.1. Sistema de Diseño",
            isCompleted: false,
            items: [
              {
                id: "modulos-componentes",
                title: "Módulos y componentes UI",
                isCompleted: false
              },
              {
                id: "guias-reutilizacion",
                title: "Guías para la reutilización de elementos",
                isCompleted: false
              }
            ]
          },
          {
            id: "adaptabilidad-responsividad",
            title: "2.2. Adaptabilidad y Responsividad",
            isCompleted: false,
            items: [
              {
                id: "pautas-dispositivos",
                title: "Pautas para dispositivos y breakpoints",
                isCompleted: false
              }
            ]
          },
          {
            id: "accesibilidad",
            title: "2.3. Accesibilidad",
            isCompleted: false,
            items: [
              {
                id: "requisitos-usabilidad",
                title: "Requisitos de usabilidad y accesibilidad digital",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: "integracion-contenido",
        title: "3. Integración de Contenido Digital",
        isCompleted: false,
        items: [
          {
            id: "adaptacion-lineamientos",
            title: "3.1. Adaptación de los Lineamientos de Contenido",
            isCompleted: false,
            items: [
              {
                id: "uso-imagenes-digital",
                title: "Uso de imágenes, ilustraciones y gráficos en formato digital",
                isCompleted: false
              }
            ]
          },
          {
            id: "estilo-audiovisual-digital",
            title: "3.2. Estilo Fotográfico y Audiovisual Digital",
            isCompleted: false,
            items: [
              {
                id: "proporciones-resolucion",
                title: "Proporciones, resolución y formatos recomendados",
                isCompleted: false
              }
            ]
          }
        ]
      },
      {
        id: "ejemplos-implementacion",
        title: "4. Ejemplos de Implementación Digital",
        isCompleted: false,
        items: [
          {
            id: "casos-practicos-digital",
            title: "4.1. Casos Prácticos de Buenas Prácticas en Entornos Digitales",
            isCompleted: false
          },
          {
            id: "errores-comunes-digital",
            title: "4.2. Errores Comunes en el Uso de Elementos Digitales",
            isCompleted: false
          }
        ]
      },
      {
        id: "guia-implementacion-digital",
        title: "5. Guía de Implementación y Actualización Digital",
        isCompleted: false,
        items: [
          {
            id: "repositorios-formatos",
            title: "5.1. Repositorios y Formatos Digitales Disponibles",
            isCompleted: false
          },
          {
            id: "politica-actualizaciones-digital",
            title: "5.2. Política de Actualizaciones para el Entorno Digital",
            isCompleted: false,
            items: [
              {
                id: "frecuencia-responsables",
                title: "Frecuencia y responsables de la actualización del sistema de diseño",
                isCompleted: false
              }
            ]
          }
        ]
      }
    ]
  }
]; 