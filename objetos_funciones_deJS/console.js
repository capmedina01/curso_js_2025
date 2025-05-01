// metodos de la consola

// console.log() muestra un mensaje en la consola
console.log("Hola mundo")
// console.error() muestra un mensaje de error en la consola
console.error("Error: No se ha encontrado el archivo")
// console.warn() muestra un mensaje de advertencia en la consola
console.warn("Advertencia: El archivo está dañado")
// console.info() muestra un mensaje informativo en la consola
console.info("Información: El archivo se ha guardado correctamente")
// console.table() muestra un objeto o array en forma de tabla
console.table([
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Maria", edad: 28 }
])
// console.group() agrupa mensajes en la consola
console.group("Grupo 1")
console.log("Mensaje 1")    
console.log("Mensaje 2")
console.groupEnd()
// console.time() inicia un temporizador
console.time("Temporizador")
// console.timeEnd() detiene el temporizador y muestra el tiempo transcurrido
console.timeEnd("Temporizador")
// console.assert() muestra un mensaje de error si la condición es falsa
console.assert(1 === 2, "Error: 1 no es igual a 2")
// console.clear() limpia la consola
console.clear()
// console.dir() muestra la estructura de un objeto
console.dir({ nombre: "Juan", edad: 25 })
// console.trace() muestra la traza de la pila de llamadas
function funcion1() {
    funcion2()
}   

function funcion2() {
    console.trace("Traza de la pila de llamadas")
}
funcion1()
// console.count() cuenta el número de veces que se ha llamado a una función        

console.count("Contador")
console.log(console)

