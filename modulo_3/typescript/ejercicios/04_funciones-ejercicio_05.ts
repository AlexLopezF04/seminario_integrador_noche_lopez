/**
 * Ejercicio 4: maximo/minimo con rest parameters
 */

function maximo(primero: number, ...resto: number[]): number {
  return resto.reduce((max, n) => (n > max ? n : max), primero);
}
function minimo(primero: number, ...resto: number[]): number {
  return resto.reduce((min, n) => (n < min ? n : min), primero);
}
console.log("Maximo:", maximo(3, 1, 4, 1, 5, 9, 2, 6));
console.log("Minimo:", minimo(3, 1, 4, 1, 5, 9, 2, 6));
