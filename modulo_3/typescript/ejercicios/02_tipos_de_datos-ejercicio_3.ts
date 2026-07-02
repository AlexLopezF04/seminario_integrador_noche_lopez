/**
 * ============================================
 * EJERCICIO 3: Anio bisiesto
 * ============================================
 * Tema: boolean
 *
 * Enunciado:
 * Declara const anio: number con los valores 2000, 1900, 2024 y 2023.
 * Para cada uno, calcula si es bisiesto: divisible entre 4, excepto
 * los siglos (divisibles entre 100) a menos que tambien sean divisibles
 * entre 400. Guarda en const esBisiesto: boolean e imprime.
 * Resultados: true, false, true, false.
 * ============================================
 */

const anio1: number = 2000;
const esBisiesto1: boolean = (anio1 % 400 === 0) || (anio1 % 4 === 0 && anio1 % 100 !== 0);
console.log(anio1 + " es bisiesto?", esBisiesto1); // true

const anio2: number = 1900;
const esBisiesto2: boolean = (anio2 % 400 === 0) || (anio2 % 4 === 0 && anio2 % 100 !== 0);
console.log(anio2 + " es bisiesto?", esBisiesto2); // false

const anio3: number = 2024;
const esBisiesto3: boolean = (anio3 % 400 === 0) || (anio3 % 4 === 0 && anio3 % 100 !== 0);
console.log(anio3 + " es bisiesto?", esBisiesto3); // true

const anio4: number = 2023;
const esBisiesto4: boolean = (anio4 % 400 === 0) || (anio4 % 4 === 0 && anio4 % 100 !== 0);
console.log(anio4 + " es bisiesto?", esBisiesto4); // false
