// que es una arrow function
// es una forma de escribir funciones en javascript
// comparamos la sintaxis de una funcion normal con una arrow function
// una funcion normal
function suma(a, b) {
    return a + b;
}
// una arrow function
const sumaArrow = (a, b) => a + b;
// la diferencia es que la arrow function no tiene la palabra function 
// y no tiene llaves si solo tiene una linea de codigo
// ejemplo de uso
console.log(suma(2, 3)); // 5
console.log(sumaArrow(2, 3)); // 5
// contexto de this en arrow functions
//ejemplo de uso de this en una funcion normal
const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};
persona.saludar(); // Hola, mi nombre es Juan
// ejemplo de uso de this en una arrow function
const personaArrow = {
    nombre: 'Juan',
    edad: 30,
    saludar: () => {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};
personaArrow.saludar(); // Hola, mi nombre es undefined
// la diferencia es que en la arrow function this no hace referencia al objeto personaArrow
// sino al objeto global (window en navegadores o global en node.js)