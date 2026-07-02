/**
 * ============================================
 * EJERCICIO 1: Conversion Celsius a Fahrenheit
 * ============================================
 * Tema: number
 *
 * Enunciado:
 * Declara const celsius: number con los valores 0, 100 y 37
 * (uno a la vez o tres variables). Para cada uno, calcula la
 * conversion a Fahrenheit: (celsius * 9/5) + 32, redondea a
 * 1 decimal con Number(resultado.toFixed(1)) e imprime.
 * Resultados esperados: 32, 212 y 98.6.
 * ============================================
 */

const celsius1: number = 0;
const fahrenheit1: number = Number((celsius1 * 9/5 + 32).toFixed(1));
console.log(celsius1 + "°C =", fahrenheit1 + "°F"); // 0°C = 32°F

const celsius2: number = 100;
const fahrenheit2: number = Number((celsius2 * 9/5 + 32).toFixed(1));
console.log(celsius2 + "°C =", fahrenheit2 + "°F"); // 100°C = 212°F

const celsius3: number = 37;
const fahrenheit3: number = Number((celsius3 * 9/5 + 32).toFixed(1));
console.log(celsius3 + "°C =", fahrenheit3 + "°F"); // 37°C = 98.6°F
