// que son objetos literales
// son objetos que se crean sin la necesidad de usar la palabra new
// se crean con llaves y se asignan a una variable
// se pueden crear objetos literales de diferentes tipos
// como por ejemplo objetos, arrays, funciones, etc
//ejemplo de un objeto literal
const persona = {  
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
// asignacion de propiedades a un objeto literal
let nombre = "jose";
let edad = 25;
let ciudad = "Barcelona";
const persona2 = {
    nombre,
    edad,
    ciudad,
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}
// imprimir el objeto
console.log(persona2);
console.log(persona2.saludar());
