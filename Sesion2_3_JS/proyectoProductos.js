// ----------------------------------------------------------------
// Mini Proyecto: Gestor de productos (CRUD Básico)
// ----------------------------------------------------------------

// 1. ESTRUCTURA BASE: Un arreglo (Array) que contiene objetos (Productos)
let productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse Inalámbrico", precio: 25 },
];


// Función 1: CREATE (Crear/Agregar un producto)
const agregarProducto = (id, nombre, precio) => {
    const nuevoProducto = { id, nombre, precio }; 
    productos.push(nuevoProducto);
    console.log(`\n✅ Producto '${nombre}' agregado con éxito.`);
};


// Función 2: READ (Mostrar todos los productos)
const mostrarProductos = () => {
    console.log("\n--- LISTA DE PRODUCTOS ACTUAL ---");
    productos.forEach(producto => {
        console.log(`ID: ${producto.id} | Producto: ${producto.nombre} | Precio: $${producto.precio}`);
    });
    console.log("---------------------------------");
};


// Función 3: DELETE (Eliminar un producto)
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