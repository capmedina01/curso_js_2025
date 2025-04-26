//que es un objeto
// Un objeto es una colección de propiedades, donde cada propiedad tiene un nombre y un valor.
// Los objetos pueden contener otros objetos, arrays, funciones y cualquier otro tipo de dato.
// En JavaScript, los objetos son una de las estructuras de datos más importantes y versátiles.
// Se pueden crear objetos de varias maneras, pero la más común es utilizando llaves {}.
// Ejemplo de un objeto simple
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Rojo",
    propietario: {
        nombre: "Carlos",
        edad: 46,
        ciudad: "Madrid"
    },
    caracteristicas: ["Aire acondicionado", "Navegador GPS", "Cámara de reversa"],
    encendido: false,
    encender: function() {
        this.encendido = true;
        console.log("El auto está encendido.");
    },
    apagar: function() {
        this.encendido = false;
        console.log("El auto está apagado.");
    },
    mostrarInfo: function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`);
    }
}
// Accediendo a propiedades de un objeto
console.log(persona.nombre); // "Juan"
console.log(auto.marca); // "Toyota"
console.log(auto["modelo"]); // "Corolla"
console.log(auto.propietario.nombre); // "Carlos"
console.log(auto.caracteristicas[0]); // "Aire acondicionado"

// Llamando a métodos de un objeto
auto.encender(); // "El auto está encendido."
auto.apagar(); // "El auto está apagado."
auto.mostrarInfo(); // "Marca: Toyota, Modelo: Corolla, Color: Rojo"
// Modificando propiedades de un objeto
persona.edad = 31;
console.log(persona.edad); // 31
auto.color = "Azul";