// tipos de datos boleanos
let a = true;
let b = false;
let c = 1 > 2; // false
let d = 1 < 2; // true

//truthy 

if (true);
if ({});
if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);

//falsy

if (false) {
    // Not reachable
  }
  
  if (null) {
    // Not reachable
  }
  
  if (undefined) {
    // Not reachable
  }
  
  if (0) {
    // Not reachable
  }
  
  if (-0) {
    // Not reachable
  }
  
  if (0n) {
    // Not reachable
  }
  
  if (NaN) {
    // Not reachable
  }
  
  if ("") {
    // Not reachable
  }
  
  // definicion de valores undefined y null
  // el valor undefined es una variable sin valor, que no ha sido inicializada
  let j = undefined; // variable sin valor  
    let k; // variable sin valor

  // el valor null es un valor que se le asigna a una variable para indicar que no tiene valor
  let l = null; // variable con valor nulo
  
  // valor NaN (Not a Number)
  // se produce cuando se intenta realizar una operacion matematica con un valor no numerico
    let m = "a" * 2; // NaN