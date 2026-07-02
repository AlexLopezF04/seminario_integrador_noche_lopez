/**
 * ============================================
 * EJERCICIO 4: maximo con rest parameters
 * ============================================
 * Tema: Rest parameters (B.2)
 *
 * Enunciado:
 * Escribe function maximo(primero: number, ...resto: number[]): number
 * que devuelva el numero mas grande entre todos los argumentos.
 * Prueba con (3, 1, 4, 1, 5, 9, 2, 6) -> debe dar 9.
 * Extra: escribe minimo de la misma forma.
 * ============================================
 */

function maximo(primero: number, ...resto: number[]): number {
  return resto.reduce((max, n) => (n > max ? n : max), primero);
}

function minimo(primero: number, ...resto: number[]): number {
  return resto.reduce((min, n) => (n < min ? n : min), primero);
}

console.log("Maximo:", maximo(3, 1, 4, 1, 5, 9, 2, 6)); // 9
console.log("Minimo:", minimo(3, 1, 4, 1, 5, 9, 2, 6)); // 1
