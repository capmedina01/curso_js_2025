// break y continue
// break: termina el ciclo
// continue: salta a la siguiente iteracion del ciclo

//ejemplos de break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // termina el ciclo cuando i es 5
    }
    console.log(i); // imprime 0, 1, 2, 3, 4
}   
console.log("Fin del ciclo for con break");

//ejemplos de continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // salta la iteracion cuando i es 5
    }
    console.log(i); // imprime 0, 1, 2, 3, 4, 6, 7, 8, 9
}
console.log("ejercicio  continue");

// ejercicio  continue
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0) {
        continue; // salta los numeros pares        
    }
    console.log(numeros[i]); // imprime los numeros impares: 1, 3, 5, 7, 9
    
}