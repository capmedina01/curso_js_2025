// que son las condicionales
// son estructuras de control que nos permiten tomar decisiones en el flujo de un programa  
// dependiendo de si una condicion es verdadera o falsa
// en javascript existen 3 estructuras de control condicionales
// if, switch y el operador ternario
// la estructura if es la mas comun y se utiliza para evaluar una condicion
//  y ejecutar un bloque de codigo si la condicion es verdadera
//  y otro bloque de codigo si la condicion es falsa
//estructura if se puede utilizar de la siguiente manera
// if (condicion) {
//     // bloque de codigo si la condicion es verdadera
// } else {
//     // bloque de codigo si la condicion es falsa
// }
// la condicion puede ser cualquier expresion que devuelva un valor booleano (true o false)
// por ejemplo, podemos utilizar operadores de comparacion como ==, ===, !=, !==, <, >, <=, >=
// o operadores logicos como && (AND), || (OR) y ! (NOT)
// la estructura if se puede anidar para evaluar varias condiciones
// ejemplos de estructuras if
// 1. Ejemplo de estructura if simple

let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}
// 2. Ejemplo de estructura if-else
let numero = 10;    
if (numero % 2 === 0) {
    console.log("El numero es par");
}
else {
    console.log("El numero es impar");
}
//estructura if anidada
let calificacion = 85;
if (calificacion >= 90) {
    console.log("A");
}
else if (calificacion >= 80) {
    console.log("B");
}
else if (calificacion >= 70) {
    console.log("C");
}
else if (calificacion >= 60) {
    console.log("D");
}
else {
    console.log("F");
}

//operador ternario
// el operador ternario es una forma abreviada de escribir una estructura if-else   
// se utiliza para asignar un valor a una variable dependiendo de una condicion
// la sintaxis es la siguiente
// variable = (condicion) ? valorSiVerdadero : valorSiFalso;
//ejemplo de operador ternario
let edad2 = 18;
let mensaje = (edad2 >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// 3. Ejemplo de estructura switch
// la estructura switch se utiliza para evaluar una expresion
//  y ejecutar un bloque de codigo dependiendo del valor de la expresion
// la sintaxis es la siguiente
// switch (expresion) {     
//     case valor1:
//        // bloque de codigo si la expresion es igual a valor1
//         break;
//     case valor2:
//         // bloque de codigo si la expresion es igual a valor2
//         break;
//     default:
//         // bloque de codigo si la expresion no es igual a ningun valor   
//         break;
// }
// la expresion puede ser cualquier tipo de dato (numero, cadena, booleano, etc.)
// los valores de los casos deben ser del mismo tipo que la expresion
// y deben ser unicos (no se pueden repetir)
// el bloque de codigo se ejecutara hasta que se encuentre una instruccion break
// o hasta que se termine el switch
// si no se encuentra una instruccion break, el flujo de control continuara
// ejecutando los bloques de codigo de los siguientes casos
// hasta que se encuentre una instruccion break o se termine el switch
// el bloque de codigo default se ejecutara si la expresion no es igual a ningun valor
// y es opcional
// ejemplos de estructura switch
// 1. Ejemplo de estructura switch simple
let dia = 1;

switch (dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia no valido");
        break;  
}
     