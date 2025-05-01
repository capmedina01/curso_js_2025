// operator corto circuito
// El operador corto circuito es una forma de evaluar expresiones lógicas en JavaScript.
// Se utiliza principalmente con los operadores lógicos AND (&&) y OR (||).     
// El operador corto circuito evalúa la segunda expresión solo si es necesario, lo que puede mejorar el rendimiento y evitar errores en el código.
// En el caso del operador OR (||), si la primera expresión es verdadera, la segunda no se evalúa.  
// En el caso del operador AND (&&), si la primera expresión es falsa, la segunda no se evalúa.
// Esto significa que el operador corto circuito puede ser útil para evitar errores en el código,
// como intentar acceder a una propiedad de un objeto que puede ser undefined o null.
// Por ejemplo, si tenemos un objeto que puede ser undefined o null, podemos usar el operador corto circuito para evitar errores al acceder a sus propiedades.
// En el siguiente ejemplo, si el objeto es undefined o null, la segunda expresión no se evalúa
//  y no se produce un error.
//ejemplos de operador corto circuito

// operador OR (||)
let obj = null;
let valor = obj || "valor por defecto"; // "valor por defecto"
console.log(valor); // "valor por defecto"

// operador AND (&&)
obj = { prop: "valor" };
valor = obj && obj.prop; // "valor"
console.log(valor); // "valor"

