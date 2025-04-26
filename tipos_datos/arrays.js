//que es un array
// Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable.
// Los arrays son útiles para organizar y manipular conjuntos de datos relacionados. En JavaScript
//  los arrays son objetos especiales que pueden contener elementos de diferentes tipos, como números, cadenas, objetos e incluso otros arrays.
// Los arrays son dinámicos, lo que significa que su tamaño puede cambiar durante la ejecución del programa.
// Se pueden agregar, eliminar o modificar elementos en un array sin necesidad de definir su tamaño de antemano.
// Los arrays en JavaScript son indexados, lo que significa que cada elemento tiene un índice numérico asociado que comienza en 0.
// Esto permite acceder a los elementos del array utilizando su índice. Por ejemplo
//   el primer elemento de un array se encuentra en el índice 0, el segundo en el índice 1, y así sucesivamente.

//definicion de un array
const frutas = ['manzana', 'banana', 'naranja', 'uva'];
const numeros = [1, 2, 3, 4, 5];
const booleanos = [true, false, true, false];
const mixto = ['manzana', 1, true, null, undefined, { nombre: 'Juan' }, [1, 2, 3]];
const vacio = [];
const arrayConObjetos = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Pedro', edad: 28 }
];
const arrayConFunciones = [
  function saludar() { console.log('Hola'); },
  function despedir() { console.log('Adiós'); }
];
const arrayConFechas = [
  new Date('2023-01-01'),
  new Date('2023-02-14'),
  new Date('2023-12-25')
];
console.log(frutas); // ['manzana', 'banana', 'naranja', 'uva']
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(booleanos); // [true, false, true, false]
console.log(mixto); // ['manzana', 1, true, null, undefined, { nombre: 'Juan' }, [1, 2, 3]]
// llamar una posicion de un array
console.log(frutas[0]); // 'manzana'
console.log(numeros[2]); // 3
console.log(booleanos[1]); // false     
console.log(mixto[5]); // { nombre: 'Juan' }
console.log(mixto[6][2]); 

//llenar un array con el mismo valor
const arrayLleno = Array(5).fill('valor'); // ['valor', 'valor', 'valor', 'valor', 'valor']
console.log(arrayLleno); // ['valor', 'valor', 'valor', 'valor', 'valor']

// metodos de arrays
// 1. push() - Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
frutas.push('kiwi'); // ['manzana', 'banana', 'naranja', 'uva', 'kiwi']
console.log(frutas); // ['manzana', 'banana', 'naranja', 'uva', 'kiwi']
// 2. pop() - Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
const ultimoElemento = frutas.pop(); // 'kiwi'
console.log(ultimoElemento); // 'kiwi'

frutas.forEach(function (elemento, indice) {
  console.log(`<li id=" ${indice}"> ${elemento}</li>`);
}
);

