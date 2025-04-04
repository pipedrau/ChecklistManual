// Estado de la aplicación
let estadoApp = {
    manualActivo: 'digital', // Selección por defecto del manual digital
    tareasCompletadas: JSON.parse(localStorage.getItem('tareasCompletadas')) || {}
};

// Elementos DOM
const contenedorChecklist = document.getElementById('checklist-container');
const enlacesManual = document.querySelectorAll('.manual-link');
const toggleTema = document.getElementById('theme-toggle');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Establecer tema oscuro por defecto si no hay tema guardado
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === null || temaGuardado === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleTema.checked = true;
        localStorage.setItem('tema', 'dark');
    }

    // Configurar toggle de tema
    toggleTema.addEventListener('change', cambiarTema);

    // Configurar enlaces de manuales
    enlacesManual.forEach(enlace => {
        enlace.addEventListener('click', () => {
            const manual = enlace.getAttribute('data-manual');
            cargarManual(manual);
        });
    });

    // Cargar manual guardado o el digital por defecto
    const manualGuardado = localStorage.getItem('manualActivo');
    if (manualGuardado && manualesData[manualGuardado]) {
        cargarManual(manualGuardado);
    } else {
        cargarManual('digital'); // Cargar manual digital por defecto
    }
});

// Cambiar tema
function cambiarTema() {
    if (toggleTema.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('tema', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('tema', 'light');
    }
}

// Cargar manual seleccionado
function cargarManual(manual) {
    if (!manualesData[manual]) return;
    
    // Actualizar estado
    estadoApp.manualActivo = manual;
    localStorage.setItem('manualActivo', manual);
    
    // Actualizar UI
    actualizarNavegacion();
    renderizarChecklist();
}

// Actualizar navegación
function actualizarNavegacion() {
    enlacesManual.forEach(enlace => {
        const manualId = enlace.getAttribute('data-manual');
        if (manualId === estadoApp.manualActivo) {
            enlace.classList.add('active');
        } else {
            enlace.classList.remove('active');
        }
    });
}

// Renderizar checklist
function renderizarChecklist() {
    if (!estadoApp.manualActivo) {
        contenedorChecklist.innerHTML = '<p class="text-center">Selecciona un manual para comenzar</p>';
        return;
    }

    const manual = manualesData[estadoApp.manualActivo];
    
    // Crear encabezado
    let html = `
        <div class="mb-8">
            <h2 class="text-2xl font-bold">${manual.titulo}</h2>
            <p class="opacity-70">${manual.descripcion}</p>
        </div>
    `;
    
    // Añadir resumen de progreso
    const progreso = calcularProgreso();
    html += renderizarProgreso(progreso);
    
    // Renderizar secciones
    manual.secciones.forEach(seccion => {
        html += renderizarSeccion(seccion);
    });
    
    contenedorChecklist.innerHTML = html;
    
    // Añadir event listeners a checkboxes
    document.querySelectorAll('.checklist-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', toggleTarea);
    });
    
    // Añadir event listeners a los collapse
    document.querySelectorAll('.collapse-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', toggleCollapse);
    });
}

// Renderizar sección
function renderizarSeccion(seccion) {
    let html = `
        <div class="checklist-section mb-6">
            <div class="collapse bg-base-200 rounded-box">
                <input type="checkbox" class="collapse-checkbox" id="seccion-${seccion.id}" /> 
                <div class="collapse-title text-xl font-medium flex justify-between items-center">
                    ${seccion.titulo}
                    <span class="badge badge-primary">${calcularProgresoSeccion(seccion)}</span>
                </div>
                <div class="collapse-content">
    `;
    
    seccion.subsecciones.forEach(subseccion => {
        html += renderizarSubseccion(subseccion);
    });
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// Renderizar subsección
function renderizarSubseccion(subseccion) {
    let html = `
        <div class="checklist-subsection mb-4 mt-4">
            <h4 class="font-medium mb-2">${subseccion.titulo}</h4>
            <div class="pl-4">
    `;
    
    subseccion.tareas.forEach(tarea => {
        const checked = esTareaCompletada(tarea.id) ? 'checked' : '';
        const completadaClass = esTareaCompletada(tarea.id) ? 'completed' : '';
        
        html += `
            <div class="checklist-item ${completadaClass}">
                <input type="checkbox" class="checklist-checkbox checkbox checkbox-primary" 
                       id="${tarea.id}" ${checked} />
                <label for="${tarea.id}" class="checklist-item-text ml-2 cursor-pointer">
                    ${tarea.texto}
                </label>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Renderizar barra de progreso
function renderizarProgreso(progreso) {
    const porcentaje = Math.round(progreso.completadas / progreso.total * 100) || 0;
    
    return `
        <div class="progress-summary">
            <div>
                <h3 class="font-medium">Progreso general</h3>
                <p class="text-sm opacity-70">Tareas completadas: ${progreso.completadas} de ${progreso.total}</p>
            </div>
            <div class="progress-value">${porcentaje}%</div>
        </div>
        <div class="progress-container">
            <progress class="progress progress-primary w-full" value="${porcentaje}" max="100"></progress>
        </div>
    `;
}

// Calcular progreso total
function calcularProgreso() {
    if (!estadoApp.manualActivo) return { completadas: 0, total: 0 };
    
    const manual = manualesData[estadoApp.manualActivo];
    let total = 0;
    let completadas = 0;
    
    manual.secciones.forEach(seccion => {
        seccion.subsecciones.forEach(subseccion => {
            subseccion.tareas.forEach(tarea => {
                total++;
                if (esTareaCompletada(tarea.id)) {
                    completadas++;
                }
            });
        });
    });
    
    return { completadas, total };
}

// Calcular progreso de una sección específica
function calcularProgresoSeccion(seccion) {
    let total = 0;
    let completadas = 0;
    
    seccion.subsecciones.forEach(subseccion => {
        subseccion.tareas.forEach(tarea => {
            total++;
            if (esTareaCompletada(tarea.id)) {
                completadas++;
            }
        });
    });
    
    return `${completadas}/${total}`;
}

// Verificar si una tarea está completada
function esTareaCompletada(tareaId) {
    return !!estadoApp.tareasCompletadas[tareaId];
}

// Toggle estado de tarea
function toggleTarea(event) {
    const tareaId = event.target.id;
    const completada = event.target.checked;
    
    if (completada) {
        estadoApp.tareasCompletadas[tareaId] = true;
    } else {
        delete estadoApp.tareasCompletadas[tareaId];
    }
    
    // Guardar en localStorage
    localStorage.setItem('tareasCompletadas', JSON.stringify(estadoApp.tareasCompletadas));
    
    // Actualizar UI
    const tareaElement = event.target.parentElement;
    if (completada) {
        tareaElement.classList.add('completed');
    } else {
        tareaElement.classList.remove('completed');
    }
    
    // Actualizar progreso
    actualizarBarrasProgreso();
}

// Toggle collapse
function toggleCollapse(event) {
    const seccionId = event.target.id;
    // Lógica para expandir/colapsar secciones
}

// Actualizar barras de progreso sin re-renderizar todo
function actualizarBarrasProgreso() {
    const progreso = calcularProgreso();
    const porcentaje = Math.round(progreso.completadas / progreso.total * 100) || 0;
    
    // Actualizar barra de progreso
    document.querySelector('.progress').value = porcentaje;
    
    // Actualizar texto de progreso
    document.querySelector('.progress-value').textContent = `${porcentaje}%`;
    document.querySelector('.progress-summary p').textContent = 
        `Tareas completadas: ${progreso.completadas} de ${progreso.total}`;
    
    // Actualizar badges de secciones
    if (estadoApp.manualActivo) {
        const manual = manualesData[estadoApp.manualActivo];
        manual.secciones.forEach(seccion => {
            const progresoSeccion = calcularProgresoSeccion(seccion);
            const badgeElement = document.querySelector(`#seccion-${seccion.id}`).nextElementSibling.querySelector('.badge');
            if (badgeElement) {
                badgeElement.textContent = progresoSeccion;
            }
        });
    }
} 