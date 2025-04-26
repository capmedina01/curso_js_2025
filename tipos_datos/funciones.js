// funciones declaradas con parametros no numericos
function imprimir() {
    console.log("uno");
    console.log("dos");
    console.log("tres");    
}
// llamar o invocar a la funcion imprimir
imprimir(); 

// funciones declaradas con parametros numericos
function suma(a, b) {
    return a + b;
}
// llamar o invocar a la funcion suma
let resultado = suma(2, 3); // resultado es 5
//imprimir el resultado de la suma
console.log(resultado); // 5

//funciones expresadas
// una funcion expresada es una funcion que se asigna a una variable

let multiplicar = function(a, b) {
    return a * b;
}
// llamar o invocar a la funcion multiplicar
// solo se puede invocar la funcion si se ha asignado a una variable
// se invoca despues de la asignacion
// si se invoca antes de la asignacion, se produce un error de referencia
let resultado2 = multiplicar(2, 3); // resultado2 es 6
//imprimir el resultado de la multiplicacion
console.log(resultado2); // 6