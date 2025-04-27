// destructuracion de un array
const numeros = [1, 2, 3, 4, 5];
// se puede usar destructuracion para asignar los valores de un array a variables individuales
// en este caso se asignan los valores de la variable numeros a las variables uno, dos, tres, cuatro y cinco
const [uno, dos, tres, cuatro, cinco] = numeros;    
console.log(uno); // 1
console.log(dos); // 2  
console.log(tres); // 3
console.log(cuatro); // 4
console.log(cinco); // 5
// destructuracion de un objeto
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};
// se puede usar destructuracion para asignar los valores de un objeto a variables individuales
// en este caso se asignan los valores de la variable persona a las variables nombre, edad y ciudad
const { nombre, edad, ciudad } = persona;
console.log(nombre, edad, ciudad); // Juan
console.log(`mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`); // mi nombre es Juan, tengo 30 años y vivo en Madrid
