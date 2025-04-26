//tipos de operadores
// En JavaScript, los operadores son símbolos que realizan operaciones sobre uno o más operandos.
//  Los operadores se pueden clasificar en varias categorías, incluyendo:
// 1. Operadores Aritméticos: Realizan operaciones matemáticas básicas como suma, resta, multiplicación y división.
//ejemplos de operadores aritméticos
const a = 10;
const b = 5;
const suma = a + b; // Suma
const resta = a - b; // Resta   
const multiplicacion = a * b; // Multiplicación
const division = a / b; // División
const modulo = a % b; // Módulo (resto de la división)
const potencia = a ** b; // Potencia (a elevado a la b)
console.log("Suma:", suma); // Suma: 15
console.log("Resta:", resta); // Resta: 5   
console.log("Multiplicación:", multiplicacion); // Multiplicación: 50
console.log("División:", division); // División: 2  
console.log("Módulo:", modulo); // Módulo: 0
console.log("Potencia:", potencia); // Potencia: 100000
// 2. Operadores de Comparación: Comparan dos valores y devuelven un valor booleano (true o false).
//ejemplos de operadores de comparación
const x = 10;
const y = 5;    
const esIgual = x == y; // Igualdad (valor)
const esIdentico = x === y; // Identidad (valor y tipo) 
const esDiferente = x != y; // Desigualdad (valor)
const esNoIdentico = x !== y; // No identidad (valor y tipo)
const esMayor = x > y; // Mayor que
const esMenor = x < y; // Menor que 
const esMayorIgual = x >= y; // Mayor o igual que
const esMenorIgual = x <= y; // Menor o igual que
console.log("Es igual:", esIgual); // Es igual: false
console.log("Es idéntico:", esIdentico); // Es idéntico: false      
console.log("Es diferente:", esDiferente); // Es diferente: true
console.log("Es no idéntico:", esNoIdentico); // Es no idéntico: true
console.log("Es mayor:", esMayor); // Es mayor: true
console.log("Es menor:", esMenor); // Es menor: false
console.log("Es mayor o igual:", esMayorIgual); // Es mayor o igual: true
console.log("Es menor o igual:", esMenorIgual); // Es menor o igual: false
// 3. Operadores Lógicos: Realizan operaciones lógicas y devuelven un valor booleano. Los operadores lógicos más comunes son AND (&&), OR (||) y NOT (!).
//ejemplos de operadores lógicos    
const a1 = true;
const b1 = false;
const and = a1 && b1; // AND (conjunción)
const or = a1 || b1; // OR (disyunción)
const not = !a1; // NOT (negación)
console.log("AND:", and); // AND: false
console.log("OR:", or); // OR: true
console.log("NOT:", not); // NOT: false
// 4. Operadores de Asignación: Asignan un valor a una variable. 
// El operador de asignación más común es el igual (=). 
// También existen operadores de asignación compuesta como +=, -=, *=, /=, %= y **=.
//ejemplos de operadores de asignación
let num = 10; // Asignación simple
num += 5; // Asignación compuesta (num = num + 5)
let num2 = 20; // Asignación simple
num2 -= 5; // Asignación compuesta (num2 = num2 - 5)
let num3 = 30; // Asignación simple
num3 *= 2; // Asignación compuesta (num3 = num3 * 2)
let num4 = 40; // Asignación simple
num4 /= 2; // Asignación compuesta (num4 = num4 / 2)
let num5 = 50; // Asignación simple 
if (num5 === 50 || num5 === 51) { // Asignación compuesta (num5 = num5 % 2)
    console.log("se cumplio una de las condiciones"); 
}
if (num5 === 50 && num5 === 51) { // Asignación compuesta (num5 = num5 % 2)
    console.log("se cumplieron las condiciones"); 
}
else {
    console.log("no se cumplieron las condiciones"); 
}