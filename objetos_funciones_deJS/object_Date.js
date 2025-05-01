//objeto Date
// El objeto Date de JavaScript se utiliza para trabajar con fechas y horas.
// Permite crear, manipular y formatear fechas y horas de manera sencilla.
// A continuación se presentan algunos ejemplos de cómo utilizar el objeto Date en JavaScript:

// Crear un objeto Date con la fecha y hora actuales
let fechaActual = new Date();
console.log("Fecha y hora actuales:", fechaActual);

// Crear un objeto Date con una fecha específica
let fechaEspecifica = new Date("2023-10-01T12:00:00");
console.log("Fecha específica:", fechaEspecifica);


// Obtener el año, mes y día de una fecha
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
let dia = fechaActual.getDate();
console.log("Año:", anio);
console.log("Mes:", mes);
console.log("Día:", dia);


// Obtener la hora, minutos y segundos de una fecha
let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
console.log("Horas:", horas);
console.log("Minutos:", minutos);
console.log("Segundos:", segundos);

// Formatear una fecha como cadena
let fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
});
console.log("Fecha formateada:", fechaFormateada);

// Formatear una hora como cadena
let horaFormateada = fechaActual.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});
console.log("Hora formateada:", horaFormateada);