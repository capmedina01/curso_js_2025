//alert, confirm y prompt son funciones de JavaScript que permiten interactuar
//  con el usuario a través de cuadros de diálogo.
// Estas funciones son parte del objeto window y se utilizan comúnmente 
// en aplicaciones web para mostrar mensajes, solicitar confirmación o recibir entrada del usuario.
// A continuación, se describen cada una de estas funciones y se proporcionan ejemplos de uso:
// 1. alert(): La función alert() muestra un cuadro de diálogo con un mensaje y un botón "Aceptar".
//  Se utiliza para informar al usuario sobre algo o mostrar un mensaje de advertencia.
//  El cuadro de diálogo se cierra cuando el usuario hace clic en "Aceptar".
//  Ejemplo:
alert("¡Hola! Este es un mensaje de alerta.");
// 2. confirm(): La función confirm() muestra un cuadro de diálogo con un mensaje y dos botones: "Aceptar" y "Cancelar".
//  Se utiliza para solicitar la confirmación del usuario sobre una acción.
//  La función devuelve true si el usuario hace clic en "Aceptar" y false si hace clic en "Cancelar".
//  Ejemplo:
let resultado = confirm("¿Estás seguro de que deseas continuar?");
if (resultado) {
    alert("Has hecho clic en Aceptar.");
}
else {
    alert("Has hecho clic en Cancelar.");
}
// 3. prompt(): La función prompt() muestra un cuadro de diálogo con un mensaje y un campo de entrada de texto.
//  Se utiliza para solicitar al usuario que ingrese un valor.
//  La función devuelve el valor ingresado por el usuario como una cadena de texto.
//  Si el usuario hace clic en "Cancelar", la función devuelve null.
//  Ejemplo:
let nombre = prompt("¿Cuál es tu nombre?");
if (nombre !== null) {
    alert("Hola, " + nombre + "! Bienvenido.");
}
else {
    alert("Has cancelado la entrada.");
}
