/**
 * ============================================
 * EJERCICIO 6: Minimo y maximo con tupla
 * ============================================
 * Tema: Tuplas
 *
 * Enunciado:
 * Dado const nums: number[] = [5, 3, 9, 1, 7], calcula el minimo
 * y el maximo con Math.min(...nums) y Math.max(...nums).
 * Guardalos en una tupla const minMax: [number, number] = [min, max],
 * desestructurala y e imprime ambos. Resultado: 1 y 9.
 * ============================================
 */

const nums: number[] = [5, 3, 9, 1, 7];

const min: number = Math.min(...nums);
const max: number = Math.max(...nums);

const minMax: [number, number] = [min, max];
const [minimo, maximo] = minMax;

console.log("Minimo:", minimo);  // 1
console.log("Maximo:", maximo);  // 9
