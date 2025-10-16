// ===================================================
// 1. ACCESO A ELEMENTOS Y CONSOLE.LOG
// ===================================================

const bodyElemento = document.querySelector('#cuerpo_documento');
const headerElemento = document.querySelector('header');
const mainElemento = document.querySelector('main');
const footerElemento = document.querySelector('footer');
const h1Elemento = document.querySelector('#titulo');

// Acceso a los elementos interactivos
const botonColor = document.querySelector('#botonColor');
const botonTexto = document.querySelector('#botonTexto');
const inputEntrada = document.querySelector('#entrada');
const parrafoSaludo = document.querySelector('#saludo');

// Mostrar en consola los nombres de los elementos encontrados
console.log("--- Estructura HTML Encontrada ---");
console.log("BODY:", bodyElemento.nodeName);
console.log("HEADER:", headerElemento.nodeName);
console.log("MAIN:", mainElemento.nodeName);
console.log("FOOTER:", footerElemento.nodeName);
console.log("H1:", h1Elemento.nodeName);
console.log("----------------------------------");


// ===================================================
// 2. MODIFICACIONES DINÁMICAS INICIALES (al cargar la página)
// ===================================================

// Modificar dinámicamente el texto del <h1>
h1Elemento.textContent = "¡DOM Controla esta Página!";

// Modificar dinámicamente el color de fondo del <body>
bodyElemento.style.backgroundColor = "#B2DFDB"; // Color Aqua muy claro

// ===================================================
// 3. EVENTOS DE CLIC Y OTROS
// ===================================================

// a) Evento de clic en el botón 'Cambiar Fondo'
botonColor.addEventListener('click', function() {
    alert('¡El color está a punto de cambiar!');
    
    // Cambiamos el color a un tono más intenso después de la alerta
    bodyElemento.style.backgroundColor = "#80CBC4"; 
});

// b) Evento de clic en el botón 'Nuevo Título' (cambio de texto)
botonTexto.addEventListener('click', function() {
    h1Elemento.textContent = "🎉 ¡La Interfaz Ha Sido Transformada! 🎉";
});

// c) Evento para saludar al escribir en el input (ejemplo extra)
inputEntrada.addEventListener('input', function() {
    const nombre = inputEntrada.value;
    if (nombre.length > 0) {
        parrafoSaludo.textContent = `¡Hola, ${nombre}! Bienvenido al control del DOM.`;
    } else {
        parrafoSaludo.textContent = '';
    }
});

console.log("Funcionalidad y eventos listos.");