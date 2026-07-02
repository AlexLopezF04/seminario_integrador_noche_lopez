/**
 * ============================================
 * EJERCICIO 6: componer (orden superior)
 * ============================================
 * Tema: Funciones de orden superior (D.1)
 *
 * Enunciado:
 * Escribe function componer<T>(...fns: Array<(x: T) => T>): (x: T) => T
 * que devuelva una funcion que aplica todas las funciones dadas
 * de derecha a izquierda (compose matematico).
 * Prueba con tres funciones sobre string:
 * trim, toLowerCase y capitalizar.
 * componer(capitalizar, toLowerCase, trim)(" HOLA MUNDO ")
 * debe ser "Hola mundo".
 * ============================================
 */

function componer<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const trim = (s: string): string => s.trim();
const toLowerCase = (s: string): string => s.toLowerCase();
const capitalizar = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const normalizar = componer(capitalizar, toLowerCase, trim);
console.log(normalizar(" HOLA MUNDO ")); // "Hola mundo"
