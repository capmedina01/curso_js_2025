// que es la estructura try-catch
// La estructura try-catch se utiliza para manejar errores en el código.
// Permite ejecutar un bloque de código y, si ocurre un error, capturarlo y manejarlo de manera controlada.
// Esto es útil para evitar que el programa se detenga abruptamente debido a un error inesperado.
// En este ejemplo, intentaremos convertir una cadena de texto en un número entero. 
// Si la conversión falla, se lanzará un error y lo capturaremos en el bloque catch.
// El bloque finally se ejecuta siempre, independientemente de si ocurrió un error o no.
// Esto es útil para realizar tareas de limpieza o liberar recursos.
// En este caso, simplemente imprimimos un mensaje indicando que el bloque finally se ha ejecutado.
// Ejemplo de uso de try-catch
try {
    // Intentamos convertir una cadena de texto en un número entero
    let numero = parseInt("Hola");
    console.log("El número es: " + numero);
}catch (error) {
    // Si ocurre un error, lo capturamos aquí
    console.log("Ocurrió un error: " + error.message);      
}
finally {
    // Este bloque se ejecuta siempre, independientemente de si ocurrió un error o no
    console.log("El bloque finally se ha ejecutado.");
}
// En este caso, el bloque finally se utiliza para imprimir un mensaje indicando que se ha ejecutado
// y no se utiliza para liberar recursos, ya que no hay recursos que liberar en este ejemplo.
// Sin embargo, en un programa más complejo, 
// el bloque finally podría ser útil para cerrar conexiones a bases de datos, liberar memoria, etc.
// En resumen, la estructura try-catch es una herramienta poderosa
//  para manejar errores en el código de manera controlada y evitar que el programa se detenga abruptamente.

console.log("Ejemplo de uso de try-catch con isNaN");


try {
    let numero = 500;
    if (isNaN(numero)) {
        throw new Error("el valor introducido no es un número");
    }
    console.log("El número es: " + numero);
    
} catch (error) {
    console.log("Ocurrió un error: " + error.message);      

    
}