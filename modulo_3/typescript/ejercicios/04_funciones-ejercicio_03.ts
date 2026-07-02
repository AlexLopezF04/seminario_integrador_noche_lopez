/**
 * ============================================
 * EJERCICIO 2: Funciones flecha (esPar, esPositivo, enCelsius)
 * ============================================
 * Tema: Funciones flecha (A.2)
 *
 * Enunciado:
 * Escribe tres funciones flecha con retorno implicito:
 * esPar (number -> boolean), esPositivo (number -> boolean),
 * enCelsius (Fahrenheit -> Celsius: (f - 32) * 5/9, 1 decimal).
 * Prueba con 4, -3 y 98.6. Temperatura esperada: 37.0.
 * ============================================
 */

const esPar = (n: number): boolean => n % 2 === 0;
const esPositivo = (n: number): boolean => n > 0;
const enCelsius = (f: number): number => Number(((f - 32) * 5 / 9).toFixed(1));

console.log("4 es par?", esPar(4));          // true
console.log("-3 es positivo?", esPositivo(-3)); // false
console.log("98.6 F en Celsius:", enCelsius(98.6)); // 37.0
