/**
 * Ejercicio 3: Anio bisiesto
 */

function esBisiesto(anio: number): boolean {
  return (anio % 400 === 0) || (anio % 4 === 0 && anio % 100 !== 0);
}
console.log("2000 es bisiesto?", esBisiesto(2000));
console.log("1900 es bisiesto?", esBisiesto(1900));
console.log("2024 es bisiesto?", esBisiesto(2024));
