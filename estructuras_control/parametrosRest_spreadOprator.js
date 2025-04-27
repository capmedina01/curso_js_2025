//que son los parametros rest y spread
//los parametros rest son los que se le pasan a una funcion y el spread es el que se le pasa a un objeto
//ejemplo de parametros rest
function sumar(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
        
        suma += numeros[i];
    }
    return suma;
}
console.log(sumar(1, 2, 3, 4, 5)); // 15

//ejemplo de spread operator
const numeros = [1, 2, 3, 4, 5];    
const numeros2 = [6, 7, 8, 9, 10];
const numeros3 = [11, 12, 13, 14, 15];
const numeros4 = [...numeros, ...numeros2, ...numeros3];
console.log(numeros4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//ejemplo de spread operator con objetos
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
}
const persona2 = {
    ...persona,
    pais: 'España'
}
console.log(persona2); // { nombre: 'Juan', edad: 30, ciudad: 'Madrid', pais: 'España' }