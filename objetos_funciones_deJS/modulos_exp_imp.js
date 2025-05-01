//exportacion e importacion de modulos
//exportacion por defecto
export default function saludar(nombre) {
    return `Hola ${nombre}`;
}
//exportacion nombrada
export function despedir(nombre) {
    return `Adios ${nombre}`;
}   
//exportacion nombrada
export const PI = 3.1416;
//exportacion nombrada
export const nombre = "Juan";
//exportacion nombrada
export const edad = 30;
//exportacion nombrada
export const ciudad = "Madrid";
//exportacion nombrada
export const pais = "España";
//exportacion nombrada
export const telefono = "123456789";
//exportacion nombrada
export const email = ""

//importacion de modulos
import saludar, { despedir, PI, nombre, edad, ciudad, pais, telefono, email } from './modulos_exp_imp.js';
