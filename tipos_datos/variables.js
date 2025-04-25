// es mala practica declarar variables con  var porque es global
var saludo = "hola"

// se recomienda let porque es una variable de bloque
let numero = 4
console.log(numero)

// al declarar constantes de tipo primitivo, los datos no cambian
//pero las constantes de tipo compuestos si se le pueden modificar

//primitivo
const PI = 3.1416

//compuestos
const persona = {
    nombre: "carlos",
    edad: 46
}

const colores = ["azul", "blanco","rojo"]

console.log(persona)
console.log(colores)

persona.sexo ="M"
colores.push("verde")

console.log("----modificados-----")
console.log(persona)
console.log(colores)

