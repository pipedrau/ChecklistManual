// Estructura de datos para los manuales
const manualesData = {
    // Manual General de Marca
    general: {
        titulo: "Manual General de Marca",
        descripcion: "Checklist completo para la creación del Manual General de Marca",
        secciones: [
            {
                id: "introduccion",
                titulo: "1. Introducción y Filosofía de la Marca",
                subsecciones: [
                    {
                        id: "historia",
                        titulo: "1.1. Historia y Propósito",
                        tareas: [
                            { id: "g1-1-1", texto: "Desarrollar historia de la marca" },
                            { id: "g1-1-2", texto: "Definir propósito principal" }
                        ]
                    },
                    {
                        id: "mision",
                        titulo: "1.2. Misión, Visión y Valores",
                        tareas: [
                            { id: "g1-2-1", texto: "Redactar la misión de la marca" },
                            { id: "g1-2-2", texto: "Establecer visión a largo plazo" },
                            { id: "g1-2-3", texto: "Definir valores corporativos" }
                        ]
                    },
                    {
                        id: "personalidad",
                        titulo: "1.3. Personalidad y Tono de Comunicación",
                        tareas: [
                            { id: "g1-3-1", texto: "Definir personalidad de marca" },
                            { id: "g1-3-2", texto: "Establecer tono de comunicación" },
                            { id: "g1-3-3", texto: "Crear ejemplos de comunicación" }
                        ]
                    }
                ]
            },
            {
                id: "identidad",
                titulo: "2. Identidad Visual",
                subsecciones: [
                    {
                        id: "logotipo",
                        titulo: "2.1. Logotipo",
                        tareas: [
                            { id: "g2-1-1", texto: "Versiones (color, monocromático, negativo)" },
                            { id: "g2-1-2", texto: "Dimensiones mínimas" },
                            { id: "g2-1-3", texto: "Usos correctos/incorrectos" },
                            { id: "g2-1-4", texto: "Área de protección" }
                        ]
                    },
                    {
                        id: "paleta",
                        titulo: "2.2. Paleta de Colores",
                        tareas: [
                            { id: "g2-2-1", texto: "Colores primarios y secundarios" },
                            { id: "g2-2-2", texto: "Colores complementarios y de alerta" },
                            { id: "g2-2-3", texto: "Códigos de color (HEX, RGB, CMYK)" }
                        ]
                    },
                    {
                        id: "tipografia",
                        titulo: "2.3. Tipografía",
                        tareas: [
                            { id: "g2-3-1", texto: "Fuentes primarias y secundarias" },
                            { id: "g2-3-2", texto: "Lineamientos de aplicación (tamaños, equivalencias en REM, si aplica)" }
                        ]
                    },
                    {
                        id: "iconografia",
                        titulo: "2.4. Iconografía y Elementos Gráficos",
                        tareas: [
                            { id: "g2-4-1", texto: "Estilos de íconos, ilustraciones, patrones y texturas" }
                        ]
                    }
                ]
            },
            {
                id: "lineamientos",
                titulo: "3. Lineamientos de Contenido",
                subsecciones: [
                    {
                        id: "estilo-fotografia",
                        titulo: "3.1. Estilo Fotográfico y Audiovisual",
                        tareas: [
                            { id: "g3-1-1", texto: "Tipo de imágenes" },
                            { id: "g3-1-2", texto: "Filtros, proporciones y edición" }
                        ]
                    },
                    {
                        id: "ilustraciones",
                        titulo: "3.2. Uso de Ilustraciones y Gráficos",
                        tareas: [
                            { id: "g3-2-1", texto: "Indicaciones sobre fotos de banco vs. ilustraciones personalizadas" }
                        ]
                    },
                    {
                        id: "lenguaje",
                        titulo: "3.3. Lenguaje y Copywriting",
                        tareas: [
                            { id: "g3-3-1", texto: "Normas de escritura" },
                            { id: "g3-3-2", texto: "Tono, palabras clave, hashtags y mensajes clave" }
                        ]
                    }
                ]
            },
            {
                id: "ejemplos",
                titulo: "4. Ejemplos de Uso y Casos Prácticos",
                subsecciones: [
                    {
                        id: "buenas-practicas",
                        titulo: "4.1. Buenas Prácticas",
                        tareas: [
                            { id: "g4-1-1", texto: "Ejemplos de aplicación correcta" }
                        ]
                    },
                    {
                        id: "errores",
                        titulo: "4.2. Errores Comunes",
                        tareas: [
                            { id: "g4-2-1", texto: "Ejemplos de usos incorrectos del logo" },
                            { id: "g4-2-2", texto: "Mala aplicación de colores o tipografías" }
                        ]
                    }
                ]
            },
            {
                id: "implementacion",
                titulo: "5. Guía de Implementación y Actualización",
                subsecciones: [
                    {
                        id: "formatos",
                        titulo: "5.1. Formatos y Archivos Disponibles",
                        tareas: [
                            { id: "g5-1-1", texto: "Lista de archivos disponibles y formatos" }
                        ]
                    },
                    {
                        id: "politica",
                        titulo: "5.2. Política de Actualizaciones",
                        tareas: [
                            { id: "g5-2-1", texto: "Frecuencia de revisión" },
                            { id: "g5-2-2", texto: "Responsables de mantener el manual actualizado" }
                        ]
                    }
                ]
            }
        ]
    },
    // Manual Digital
    digital: {
        titulo: "Manual Digital (Implementación en Plataforma de Apuestas)",
        descripcion: "Checklist para la creación del Manual Digital enfocado en la implementación en plataforma",
        secciones: [
            {
                id: "aplicaciones",
                titulo: "1. Aplicaciones en Medios Digitales",
                subsecciones: [
                    {
                        id: "redes",
                        titulo: "1.1. Redes Sociales",
                        tareas: [
                            { id: "d1-1-1", texto: "Formatos para redes sociales" },
                            { id: "d1-1-2", texto: "Tamaños recomendados" },
                            { id: "d1-1-3", texto: "Uso de imágenes, videos y GIFs" }
                        ]
                    },
                    {
                        id: "web",
                        titulo: "1.2. Sitio Web y UX/UI",
                        tareas: [
                            { id: "d1-2-1", texto: "Lineamientos de diseño web (tipografías, botones, espacios)" },
                            { id: "d1-2-2", texto: "Principios de navegación" }
                        ]
                    },
                    {
                        id: "correo",
                        titulo: "1.3. Correo Electrónico",
                        tareas: [
                            { id: "d1-3-1", texto: "Firma corporativa" },
                            { id: "d1-3-2", texto: "Plantillas de newsletter" },
                            { id: "d1-3-3", texto: "Tono del mensaje" }
                        ]
                    },
                    {
                        id: "publicidad",
                        titulo: "1.4. Publicidad Digital",
                        tareas: [
                            { id: "d1-4-1", texto: "Banners publicitarios" },
                            { id: "d1-4-2", texto: "Anuncios en redes" },
                            { id: "d1-4-3", texto: "Google Ads y otros formatos" }
                        ]
                    }
                ]
            },
            {
                id: "componentes",
                titulo: "2. Componentes Digitales Específicos",
                subsecciones: [
                    {
                        id: "sistema",
                        titulo: "2.1. Sistema de Diseño",
                        tareas: [
                            { id: "d2-1-1", texto: "Módulos y componentes UI" },
                            { id: "d2-1-2", texto: "Guías para la reutilización de elementos" }
                        ]
                    },
                    {
                        id: "adaptabilidad",
                        titulo: "2.2. Adaptabilidad y Responsividad",
                        tareas: [
                            { id: "d2-2-1", texto: "Pautas para dispositivos" },
                            { id: "d2-2-2", texto: "Definición de breakpoints" }
                        ]
                    },
                    {
                        id: "accesibilidad",
                        titulo: "2.3. Accesibilidad",
                        tareas: [
                            { id: "d2-3-1", texto: "Requisitos de usabilidad" },
                            { id: "d2-3-2", texto: "Estándares de accesibilidad digital" }
                        ]
                    }
                ]
            },
            {
                id: "integracion",
                titulo: "3. Integración de Contenido Digital",
                subsecciones: [
                    {
                        id: "adaptacion",
                        titulo: "3.1. Adaptación de los Lineamientos de Contenido",
                        tareas: [
                            { id: "d3-1-1", texto: "Uso de imágenes en formato digital" },
                            { id: "d3-1-2", texto: "Aplicación de ilustraciones y gráficos" }
                        ]
                    },
                    {
                        id: "estilo-digital",
                        titulo: "3.2. Estilo Fotográfico y Audiovisual Digital",
                        tareas: [
                            { id: "d3-2-1", texto: "Proporciones recomendadas" },
                            { id: "d3-2-2", texto: "Resolución y formatos" }
                        ]
                    }
                ]
            },
            {
                id: "ejemplos-digital",
                titulo: "4. Ejemplos de Implementación Digital",
                subsecciones: [
                    {
                        id: "casos-digital",
                        titulo: "4.1. Casos Prácticos de Buenas Prácticas en Entornos Digitales",
                        tareas: [
                            { id: "d4-1-1", texto: "Ejemplos de implementación correcta" }
                        ]
                    },
                    {
                        id: "errores-digital",
                        titulo: "4.2. Errores Comunes en el Uso de Elementos Digitales",
                        tareas: [
                            { id: "d4-2-1", texto: "Ejemplos de implementación incorrecta" }
                        ]
                    }
                ]
            },
            {
                id: "implementacion-digital",
                titulo: "5. Guía de Implementación y Actualización Digital",
                subsecciones: [
                    {
                        id: "repositorios",
                        titulo: "5.1. Repositorios y Formatos Digitales Disponibles",
                        tareas: [
                            { id: "d5-1-1", texto: "Organización de repositorios de archivos" },
                            { id: "d5-1-2", texto: "Formatos disponibles para uso digital" }
                        ]
                    },
                    {
                        id: "politica-digital",
                        titulo: "5.2. Política de Actualizaciones para el Entorno Digital",
                        tareas: [
                            { id: "d5-2-1", texto: "Frecuencia de actualización" },
                            { id: "d5-2-2", texto: "Responsables del sistema de diseño" }
                        ]
                    }
                ]
            }
        ]
    }
}; 