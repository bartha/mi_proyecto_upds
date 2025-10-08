// Paso 2: Crear tus primeras variables usando datos de Jhoel Bartha

// 'const' (Constante): El dato NO cambia. Ideal para nombre completo o un correo principal.
const nombreCompleto = "Jhoel Bartha";
const email = "barthajhoel@gmail.com";
const anoNacimiento = 2000;

// 'let' (Variable): El dato PUEDE cambiar. Ideal para edad o contador.
let edad = 25; 
let puntos = 100;

// Mostramos los datos iniciales
console.log("-------------------");
console.log(`Hola, soy ${nombreCompleto}, mi correo es ${email}.`);
console.log(`Tengo ${edad} años y mi puntaje es: ${puntos} puntos.`);


// *** Demostración de por qué usamos 'let' ***
// Simulamos que pasa un año y ganas puntos extra
edad = edad + 1; // Ahora tienes 26 años
puntos = 150;    // ¡Ganaste más puntos!

console.log("--- Después de un año ---");
console.log(`Mi nueva edad es: ${edad} años.`);
console.log(`Mi nuevo puntaje es: ${puntos} puntos.`);

// Si intentaras cambiar 'nombreCompleto' (const), el programa te daría un error.


// Paso 3: Operaciones matemáticas simples
let nota1 = 80;
let nota2 = 90;

let sumaNotas = nota1 + nota2;
let promedio = sumaNotas / 2; // Para calcular el promedio, dividimos la suma por 2

let puntosExtra = 5;
let notaFinal = promedio + puntosExtra; // Usamos el promedio para el cálculo final

console.log("-------------------");
console.log(`La suma de las notas es: ${sumaNotas}`); // Resultado: 170
console.log(`El promedio simple es: ${promedio}`); // Resultado: 85
console.log(`Con ${puntosExtra} puntos extra, la nota final es: ${notaFinal}`); // Resultado: 90

// Paso 4: Condiciones (if/else) - El programa toma decisiones

const notaRequerida = 70; 
let miNota = 85; 

console.log("-------------------");
console.log(`Mi nota es: ${miNota}. Se requiere un mínimo de ${notaRequerida} para aprobar.`);

// Si la nota (85) es MAYOR o IGUAL a la nota requerida (70)...
if (miNota >= notaRequerida) {
    console.log("¡Felicidades, APROBADO!");
} else {
    // Si la condición de arriba NO se cumple (es decir, si la nota es menor a 70)...
    console.log("Reprobado. Toca estudiar más.");
}

// Reto Mental: ¿Qué pasaría si cambias 'miNota' a 65 y ejecutas de nuevo?

// Paso 5: Ciclos (for) - Repetir una acción 5 veces

const limite = 5;

console.log("-------------------");
console.log(`Iniciando un ciclo que se repetirá ${limite} veces:`);

// Explicación de la línea 'for':
// 1. let i = 1:  Empezamos un contador llamado 'i' en 1.
// 2. i <= limite: La acción se repite MIENTRAS 'i' sea menor o igual a 5.
// 3. i++:        Después de cada repetición, le suma 1 a 'i'.
for (let i = 1; i <= limite; i++) {
    console.log(`Mensaje de repetición No. ${i}`);
}
// Cuando 'i' llega a 6, el ciclo se detiene.

// Paso 6: Crear y recorrer un arreglo (Array)
let listaFrutas = ["manzana", "pera", "uva", "naranja"];

console.log("-------------------");
console.log("Mi lista de frutas inicial:");

// forEach: Recorre CADA elemento de la lista uno por uno.
listaFrutas.forEach(fruta => {
    // Para cada fruta, ejecuta esta línea:
    console.log(`-> Hay una ${fruta}`);
});

// Reto: Agregar una fruta nueva (el .push() la añade al final)
listaFrutas.push("kiwi");

console.log("\n¡Fruta agregada!");
console.log(`La lista final tiene ${listaFrutas.length} elementos.`);

// Paso 7: Usar métodos modernos de arrays (map, filter, reduce)

const numeros = [10, 20, 35, 40, 50, 75];

console.log("-------------------");
console.log("DEMOSTRACIÓN DE ARRAYS MODERNOS:");

// 1. MAP: Transforma cada valor. (Calcular el 10% de cada número)
const diezPorciento = numeros.map(num => num * 0.10);
console.log("1. Map (10% de cada número): " + diezPorciento); 
// Resultado: [1, 2, 3.5, 4, 5, 7.5]

// 2. FILTER: Selecciona valores que cumplen una condición. (Solo números menores a 50)
const menoresACincuenta = numeros.filter(num => num < 50);
console.log("2. Filter (Menores a 50): " + menoresACincuenta); 
// Resultado: [10, 20, 35, 40]

// 3. REDUCE: Junta todo en un solo valor. (Suma total de todos los números)
// El 'acc' es el valor acumulado (que empieza en 0)
const sumaTotal = numeros.reduce((acc, valorActual) => acc + valorActual, 0);
console.log("3. Reduce (Suma Total): " + sumaTotal); 
// Resultado: 230

let empleado = {
    nombre: "Carlos", // Clave: nombre, Valor: "Carlos"
    edad: 25
};

// Paso 8: Crear y usar objetos (Usamos 'empleadoData' para evitar el error de redeclaración)
let empleadoData = { 
    nombre: "Carlos",
    edad: 25,
    ciudad: "La Paz"
};

console.log("-------------------");
console.log("Datos del empleado:");
// Accedemos a los datos con la notación de punto: objeto.clave
console.log(`Nombre: ${empleadoData.nombre}`);
console.log(`Edad: ${empleadoData.edad}`);

// Reto: Agregar una propiedad nueva al objeto
empleadoData.profesion = "Desarrollador";

// Mostramos el mensaje completo (usando la propiedad recién agregada)
console.log(`Soy ${empleadoData.nombre}, tengo ${empleadoData.edad} años y trabajo como ${empleadoData.profesion}.`);

// Paso 9: Crear funciones personalizadas (Forma tradicional)
function saludarUsuario(nombre) {
    // Esta función recibe un dato 'nombre' y lo usa para crear un mensaje
    return `¡Hola de nuevo, ${nombre}! Bienvenido a la Sesión 2-3.`;
}

// Llamamos la función (la usamos) y guardamos lo que nos devuelve (el mensaje)
let mensajeDeBienvenida = saludarUsuario("Jhoel Bartha");
console.log("-------------------");
console.log(mensajeDeBienvenida);


// Paso 10: Funciones flecha (Forma moderna, usando 'const' y '=>')
// Esta es la forma más corta y moderna para hacer funciones simples.
const multiplicar = (a, b) => {
    // Hace el cálculo
    return a * b;
};

// Usamos la función flecha
let resultadoMultiplicacion = multiplicar(10, 8);
console.log(`Usando función flecha: 10 multiplicado por 8 es: ${resultadoMultiplicacion}`); // Resultado: 80

// ----------------------------------------------------------------
// Mini Proyecto: Gestor de productos (CRUD Básico)
// ----------------------------------------------------------------

// 1. ESTRUCTURA BASE: Un arreglo (Array) que contiene objetos (Productos)
let productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse Inalámbrico", precio: 25 },
];


// Función 1: CREATE (Crear/Agregar un producto)
// Usa .push() para añadir un objeto al array
const agregarProducto = (id, nombre, precio) => {
    const nuevoProducto = { id, nombre, precio }; 
    productos.push(nuevoProducto);
    console.log(`\n✅ Producto '${nombre}' agregado con éxito.`);
};


// Función 2: READ (Mostrar todos los productos)
// Usa .forEach() para recorrer e imprimir
const mostrarProductos = () => {
    console.log("\n--- LISTA DE PRODUCTOS ACTUAL ---");
    productos.forEach(producto => {
        console.log(`ID: ${producto.id} | Producto: ${producto.nombre} | Precio: $${producto.precio}`);
    });
    console.log("---------------------------------");
};


// Función 3: DELETE (Eliminar un producto)
// Usa .filter() para crear una lista nueva que excluye el ID que queremos eliminar
const eliminarProducto = (id) => {
    productos = productos.filter(producto => producto.id !== id);
    console.log(`\n❌ Producto con ID ${id} eliminado.`);
};


// ----------------------------------------------------------------
// Paso 2: Probar el CRUD (Ejecutando las funciones en orden)
// ----------------------------------------------------------------

console.log("--- INICIO DEL PROGRAMA ---");

// A. Leemos la lista inicial
mostrarProductos(); 

// B. Agregamos dos nuevos productos (CREATE)
agregarProducto(3, "Monitor 24'", 150);
agregarProducto(4, "Teclado Mecánico", 75);

// C. Volvemos a leer la lista para ver que se agregaron
mostrarProductos();

// D. Eliminamos un producto (DELETE)
eliminarProducto(2); // Eliminamos el Mouse Inalámbrico

// E. Mostramos la lista final (READ)
mostrarProductos();