/**
 * Ejercicio 3: type vs interface
 * Las interfaces no pueden ser uniones; usa type.
 */

type Color = "rojo" | "verde" | "azul";
const c1: Color = "rojo";
const c2: Color = "verde";
const c3: Color = "azul";
console.log("Colores:", c1, c2, c3);
