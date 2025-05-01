// funciones anonimas autoejecutables
(function(){
    console.log("Hola desde una funcion anonima autoejecutable");
})();
// funciones anonimas autoejecutables con parametros    
(function(nombre){
    console.log("Hola " + nombre + " desde una funcion anonima autoejecutable con parametros");
})("Juan");
// funciones anonimas autoejecutables con retorno   
(function(nombre){
    return "Hola " + nombre + " desde una funcion anonima autoejecutable con retorno";
})("Juan");
// funciones anonimas autoejecutables con retorno y asignacion a variable   
var saludo = (function(nombre){
    return "Hola " + nombre + " desde una funcion anonima autoejecutable con retorno y asignacion a variable";
})("Juan");
console.log(saludo);