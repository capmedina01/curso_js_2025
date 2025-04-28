//que son las clases y la herencia
//las clases son plantillas para crear objetos
class animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //metodo
    sonar(){
        console.log(`${this.nombre} hago sonidos porque estoy vivo`);
    }
    moverse(){
        console.log(`${this.nombre} me estoy moviendo`);
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre} y soy un ${this.genero}`);
    }
}
//instanciar la clase animal
let firulais = new animal("perro", "macho");
let gato = new animal("gato", "hembra");
let pez = new animal("pez", "macho");

// invocar el metodo sonar
firulais.sonar(); // perro hago sonidos porque estoy vivo
gato.sonar(); // gato hago sonidos porque estoy vivo
pez.sonar(); // pez hago sonidos porque estoy vivo

// herencia
class perro extends animal {
    constructor(nombre, genero, raza){
        super(nombre, genero); // llama al constructor de la clase padre
        this.raza = raza;
    }
    ladrar(){
        console.log(`${this.nombre} estoy ladrando guau guau`);
    }
    sonar(){ // sobreescribiendo el metodo sonar
        console.log(`${this.nombre} ladro porque soy un perro`);
    }
    moverse(){ // sobreescribiendo el metodo moverse
        console.log(`${this.nombre} estoy corriendo`);
    }
    //metodos estaticos
    static info(){
        console.log("los perros son animales domesticos");
    }
}
//instanciar la clase perro
let firulais2 = new perro("firulais", "macho", "labrador");

// invocar el metodo sonar
firulais2.sonar(); // firulais ladro porque soy un perro
firulais2.ladrar(); // firulais estoy ladrando guau guau
firulais2.moverse(); // firulais estoy corriendo
perro.info(); // los perros son animales domesticos
firulais2.info(); // los perros son animales domesticos

//ejemplo de utilizar getters y setters
class persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodo
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
    //getters y setters
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
}
//instanciar la clase persona
let juan = new persona("Juan", 25);

// invocar el metodo saludar
juan.saludar(); // Hola, soy Juan y tengo 25 años
// invocar el getter
console.log(juan.getNombre); // Juan
// invocar el setter
juan.setNombre = "Pedro";
// invocar el metodo saludar
juan.saludar(); // Hola, soy Pedro y tengo 25 años
