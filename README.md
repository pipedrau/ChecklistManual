# Checklist para Manuales de Marca

Aplicación web para seguimiento y gestión de tareas relacionadas con la creación de manuales de marca.

## Características

- Checklist interactivo para dos tipos de manuales:
  - Manual General de Marca
  - Manual Digital (Implementación en Plataforma de Apuestas)
- Seguimiento de progreso con barras de progreso visual
- Organización jerárquica de tareas y subtareas
- Funcionalidad para exportar e importar progreso (persistencia local)
- Diseño moderno y responsivo

## Requisitos

- Node.js 14.x o superior
- npm 7.x o superior

## Instalación

1. Clonar el repositorio:
   ```
   git clone <url-del-repositorio>
   cd checklist-manuales
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Uso

- Marcar/desmarcar elementos del checklist haciendo clic en los círculos
- Expandir/colapsar secciones usando los botones de flecha
- Exportar progreso con el botón "Exportar progreso"
- Importar progreso previamente guardado con el botón "Importar progreso"

## Construido con

- [Next.js](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [DaisyUI](https://daisyui.com/) - Componentes para Tailwind CSS
- [Lucide React](https://lucide.dev/) - Iconos para React

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles. 