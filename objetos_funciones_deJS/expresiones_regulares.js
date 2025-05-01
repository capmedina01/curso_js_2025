//las expresiones regulares son patrones que se utilizan 
// para hacer coincidir combinaciones de caracteres en cadenas de texto
//se utilizan para validar, buscar y reemplazar texto
//se definen entre barras inclinadas /patron/
//se pueden usar metacaracteres para definir patrones
//los metacaracteres son caracteres especiales que tienen un significado especial en las expresiones regulares
//los metacaracteres son: . ^ $ * + ? { } [ ] \ | ( )
//. coincide con cualquier caracter excepto el salto de linea
//^ coincide con el inicio de la cadena
//$ coincide con el final de la cadena
//* coincide con 0 o mas repeticiones del caracter anterior
//+ coincide con 1 o mas repeticiones del caracter anterior
//? coincide con 0 o 1 repeticiones del caracter anterior
//{n} coincide con n repeticiones del caracter anterior 
//{n,} coincide con n o mas repeticiones del caracter anterior
//{n,m} coincide con n a m repeticiones del caracter anterior
//[abc] coincide con cualquiera de los caracteres dentro de los corchetes
//[^abc] coincide con cualquier caracter que no este dentro de los corchetes
//\d coincide con cualquier digito (0-9)
//\D coincide con cualquier caracter que no sea un digito
//\w coincide con cualquier caracter alfanumerico (a-z, A-Z, 0-9, _)
//\W coincide con cualquier caracter que no sea alfanumerico
//\s coincide con cualquier espacio en blanco (espacio, tabulador, salto de linea)
//\S coincide con cualquier caracter que no sea un espacio en blanco
//| coincide con una alternancia (o) entre dos patrones
//( ) agrupa patrones y captura el texto coincidente
//? hace que el cuantificador sea no codicioso (lazy), es decir,
//  que coincida con la menor cantidad de caracteres posible
//ejemplo: /a+?/ coincide con la menor cantidad de caracteres 'a' posible
//ejemplo: /a+/ coincide con la mayor cantidad de caracteres 'a' posible
//ejemplo: /a{2,4}/ coincide con 2 a 4 caracteres 'a' posibles
//ejemplo: /a{2,}/ coincide con 2 o mas caracteres 'a' posibles
//ejemplo: /a{2}/ coincide con 2 caracteres 'a' posibles
//ejemplo: /a{2,4}/ coincide con 2 a 4 caracteres 'a' posibles
//ejemplo: /a{2,}/ coincide con 2 o mas caracteres 'a' posibles
//ejemplo: /a{2}/ coincide con 2 caracteres 'a' posibles
//ejemplo: /a{2,4}/ coincide con 2 a 4 caracteres 'a' posibles
//ejemplo: /a{2,}/ coincide con 2 o mas caracteres 'a' posibles
//ejemplo: /a{2}/ coincide con 2 caracteres 'a' posibles
//ejemplo: /a{2,4}/ coincide con 2 a 4 caracteres 'a' posibles
//ejemplo: /a{2,}/ coincide con 2 o mas caracteres 'a' posibles
//ejemplo: /a{2}/ coincide con 2 caracteres 'a' posibles
//ejemplo: /a{2,4}/ coincide con 2 a 4 caracteres 'a' posibles
//ejemplo: /a{2,}/ coincide con 2 o mas caracteres 'a' posibles
//ejemplo: /a{2}/ coincide con 2 caracteres 'a' posibles
//ejemplo: /a{2,4}/ coincide con 2 a 4 caracteres 'a' posibles

//ejemplo practico de expresiones regulares
//validar un correo electronico
const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
};

// Ejemplo de uso
console.log(validarCorreo("ejemplo@correo.com")); // true
console.log(validarCorreo("correo_invalido@com")); // false

//validar un numero de telefono
const validarTelefono = (telefono) => {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(telefono);
};
// Ejemplo de uso
console.log(validarTelefono("123-456-7890")); // true
//