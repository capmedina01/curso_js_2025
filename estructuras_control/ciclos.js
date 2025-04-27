// que son los ciclos
// los ciclos son estructuras de control que nos permiten repetir un bloque de código   
// mientras se cumpla una condición
// los ciclos son muy útiles para realizar tareas repetitivas, como recorrer arreglos o realizar cálculos
// en este caso vamos a ver los ciclos for, while y do while
// el ciclo for se utiliza cuando sabemos cuantas veces queremos repetir un bloque de código
//ciclo for (inicialización; condición; incremento) {
//     bloque de código
// }
// ejemplo: imprimir los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// for in se utiliza para recorrer objetos y arreglos
// for (let i in objeto) {  
//     bloque de código
// }
// ejemplo: recorrer un arreglo
let arreglo = [1, 2, 3, 4, 5];
for (let i in arreglo) {
    console.log(arreglo[i]);
}
// recorrer un objeto
let objeto = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let i in objeto) {
    console.log(i + ": " + objeto[i]);
}
// for of se utiliza para recorrer arreglos y cadenas de texto
//ejemplo for of
let arreglo2 = [1, 2, 3, 4, 5]; 
for (let i of arreglo2) {
    console.log(i);
}
// recorrer una cadena de texto
let cadena = "Hola mundo";
for (let i of cadena) {
    console.log(i);
}