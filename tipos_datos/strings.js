let nombre = "carlos andres"
let apellido = "perdomo medina"

//concatenacion string
let saludo ="Mi nombre es"+ " "+ nombre + " "+ apellido + "."
console.log(saludo)

// interpolación ----meter dinamicamente en una string otras strings
// para sacar las comillas invertidas es ctrl + alt + tecla izquierda del enter
let despedida = `Hasta pronto ${nombre} ${apellido}.`
console.log(despedida)

// el uso de las comillas invertidas tambien se utiliza para respetar la identacion entre el contenido dinamico