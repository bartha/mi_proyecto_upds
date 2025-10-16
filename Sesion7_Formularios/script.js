// Parte 1: Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    // Captura el elemento <p id="mensaje">
    mensaje.textContent = texto; 
    
    if (tipo === "error") {
        mensaje.style.color = "red";
    } else {
        mensaje.style.color = "green";
    }
}

// Parte 2: Captura de Elementos
const form = document.getElementById("formRegistro");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const telefono = document.getElementById("telefono");
const pais = document.getElementById("pais");
const terminos = document.getElementById("terminos");
const mensaje = document.getElementById("mensaje");


// Parte 3: Lógica de Validación (Al presionar el botón)
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue
    mostrarMensaje("", ""); // Limpia cualquier mensaje anterior

    // ** Validaciones en cascada (se detiene en el primer error) **

    if (nombre.value.trim() === "") {
        mostrarMensaje("❌ El nombre no puede estar vacío.", "error");
    } 
    else if (!correo.value.includes("@")) {
        mostrarMensaje("❌ Ingresa un correo válido (debe contener '@').", "error");
    } 
    else if (password.value.length < 6) {
        mostrarMensaje("❌ La contraseña debe tener al menos 6 caracteres.", "error");
    }
    else if (telefono.value.length < 8 || isNaN(telefono.value)) {
        mostrarMensaje("❌ El teléfono debe tener al menos 8 dígitos y ser numérico.", "error");
    }
    else if (pais.value === "") {
        mostrarMensaje("❌ Debes seleccionar un país de la lista.", "error");
    }
    else if (!terminos.checked) {
        mostrarMensaje("❌ Debes aceptar los términos y condiciones.", "error");
    }
    // Registro Exitoso (Personalizado con tu nombre)
    else {
        mostrarMensaje(`✅ ¡Registro exitoso para ${nombre.value}!`, "exito");
        form.reset(); // Limpia el formulario
    }
}); 


// PASO 4: Validación en tiempo real (Bordes de color mientras escribes)

function aplicarValidacionTiempoReal(inputElement, validationFunction) {
    inputElement.addEventListener("input", () => {
        const esValido = validationFunction(inputElement.value);

        if (esValido) {
            inputElement.classList.remove('input-error');
            inputElement.classList.add('input-success');
        } else {
            inputElement.classList.remove('input-success');
            inputElement.classList.add('input-error');
        }

        // Si está vacío, quitamos el borde de color (para que no aparezca rojo al inicio)
        if (inputElement.value.trim() === "") {
            inputElement.classList.remove('input-error', 'input-success');
        }
    });
}


// APLICAR A CADA CAMPO CON SU VALIDACIÓN 
aplicarValidacionTiempoReal(nombre, (valor) => valor.trim().length > 0);
aplicarValidacionTiempoReal(correo, (valor) => valor.includes("@"));
aplicarValidacionTiempoReal(password, (valor) => valor.length >= 6);
aplicarValidacionTiempoReal(telefono, (valor) => valor.length >= 8 && !isNaN(valor));


// Validación especial para Select 
pais.addEventListener("change", () => {
    if (pais.value !== "") {
        pais.classList.remove('input-error');
        pais.classList.add('input-success');
    } else {
        pais.classList.remove('input-success');
        pais.classList.add('input-error');
    }
});