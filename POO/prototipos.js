//que son los prototipos
//los prototipos son objetos que se utilizan como plantillas para crear otros objetos
// funcion constructora
function personaje(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.saludar = function() {
        console.log(`Hola, soy ${this.nombre} y soy ${this.genero}`);
    };
}
//instancia de un objeto
var personaje1 = new personaje("Juan", "masculino");
var personaje2 = new personaje("Maria", "femenino");
//llamando a la funcion saludar
personaje1.saludar(); // Hola, soy Juan y soy masculino
personaje2.saludar(); // Hola, soy Maria y soy femenino

//modificando el prototipo de personaje
personaje.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre} y soy ${this.genero} y soy un personaje`);
};
// ejemplo de prototipo con metodo añadido
function animal(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
}
animal.prototype.hablar = function() {
    console.log(`Hola, soy un ${this.especie} y me llamo ${this.nombre}`);
}
//instancia de un objeto
let animal1 = new animal("Firulais", "perro");
let animal2 = new animal("Miau", "gato");
//llamando a la funcion hablar
animal1.hablar(); // Hola, soy un perro y me llamo Firulais
animal2.hablar(); // Hola, soy un gato y me llamo Miau

// herencia de prototipos
function perro(nombre, raza) {
    animal.call(this, nombre, "perro"); // llama al constructor de animal
    this.raza = raza;
}   
perro.prototype = Object.create(animal.prototype); // hereda de animal
perro.prototype.constructor = perro; // establece el constructor de perro
perro.prototype.ladrar = function() {
    console.log(`${this.nombre} dice guau!`);
}   
//instancia de un objeto
let perro1 = new perro("Firulais", "labrador"); 
let perro2 = new perro("Rex", "pastor aleman");
//llamando a la funcion hablar
perro1.hablar(); // Hola, soy un perro y me llamo Firulais
perro2.hablar(); // Hola, soy un perro y me llamo Rex
//llamando a la funcion ladrar
perro1.ladrar(); // Firulais dice guau!
perro2.ladrar(); // Rex dice guau!